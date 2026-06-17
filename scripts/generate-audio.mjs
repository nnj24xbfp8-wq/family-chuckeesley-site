#!/usr/bin/env node
/**
 * generate-audio.mjs — pre-generate natural-voice narration MP3s for the archive.
 *
 * For every public letter / story / biography it:
 *   1. extracts clean narration text (title + body, markdown & citations stripped),
 *   2. splits it into <=4000-char chunks,
 *   3. sends each chunk to the OpenAI text-to-speech API,
 *   4. stitches the chunks into one MP3 per page with ffmpeg,
 *   5. writes the file to public/audio/ and records it in src/data/audio-manifest.json.
 *
 * The site's "Listen" button automatically plays the MP3 when one exists, and falls
 * back to the browser's built-in voice when it doesn't — so running this is optional
 * and incremental.
 *
 * Usage:
 *   node scripts/generate-audio.mjs --dry-run                 # no key needed; prints plan + cost
 *   OPENAI_API_KEY=sk-... node scripts/generate-audio.mjs     # generate everything (changed only)
 *   OPENAI_API_KEY=sk-... node scripts/generate-audio.mjs --only "letters/charlie-to-terrie-1971-01-09-birthday"
 *
 * Flags:
 *   --dry-run            plan only, no API calls, no files written
 *   --voice <name>       OpenAI voice (default: "ash")
 *   --model <name>       TTS model (default: "gpt-4o-mini-tts")
 *   --only <substr>      only process ids containing <substr> (repeatable)
 *   --limit <n>          process at most n pages
 *   --force              ignore the content-hash cache and regenerate
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const MANIFEST = path.join(ROOT, 'src/data/audio-manifest.json');
const CACHE = path.join(ROOT, 'scripts/.audio-cache.json');
const OUT_DIR = path.join(ROOT, 'public/audio');

// ---- args ----
const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : d; };
const onlys = argv.reduce((a, x, i) => (argv[i - 1] === '--only' ? [...a, x] : a), []);
const DRY = has('--dry-run');
const FORCE = has('--force');
const LIMIT = parseInt(val('--limit', '0'), 10) || 0;
const VOICE = val('--voice', 'ash');
const MODEL = val('--model', 'gpt-4o-mini-tts');
const KEY = process.env.OPENAI_API_KEY;
const PRICE_PER_M = 15; // rough $/1M chars for estimation (tts-1 tier); mini/4o vary.

// ---- collect source files ----
function mdFiles(dir, base) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...mdFiles(full, base));
    else if (e.name.endsWith('.md')) out.push({ full, id: full.slice(base.length + 1).replace(/\.md$/, '') });
  }
  return out;
}
const docs = mdFiles(path.join(ROOT, 'src/content/documents'), path.join(ROOT, 'src/content/documents'))
  .map((f) => ({ ...f, kind: 'doc' }));
const people = mdFiles(path.join(ROOT, 'src/content/people'), path.join(ROOT, 'src/content/people'))
  .map((f) => ({ ...f, kind: 'person' }));
let items = [...docs, ...people];

// ---- frontmatter + body parse ----
function parse(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^(\w+):\s*(.*)$/);
    if (mm) fm[mm[1]] = mm[2].replace(/^["']|["']$/g, '');
  }
  return { fm, body: m[2] };
}

// ---- markdown -> spoken plain text ----
const ENT = { '&mdash;': ' — ', '&ndash;': '–', '&hellip;': '…', '&amp;': '&', '&eacute;': 'é', '&egrave;': 'è', '&agrave;': 'à', '&uuml;': 'ü', '&ouml;': 'ö', '&auml;': 'ä', '&#7871;': 'ế', '&middot;': ', ', '&rarr;': ' to ', '&larr;': '', '&ldquo;': '"', '&rdquo;': '"', '&lsquo;': "'", '&rsquo;': "'" };
function clean(title, body) {
  let t = body;
  t = t.replace(/```[\s\S]*?```/g, ' ');                 // code fences
  t = t.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');           // images
  t = t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');         // links -> text
  t = t.replace(/<[^>]+>/g, ' ');                        // html tags (asides, svg)
  t = t.replace(/^\s*\|.*\|\s*$/gm, (row) =>             // table rows -> comma text
    /^[\s|:-]+$/.test(row) ? '' : row.replace(/\|/g, ', ').replace(/^,\s*|,\s*$/g, ''));
  t = t.replace(/^#{1,6}\s*/gm, '');                     // headings
  t = t.replace(/^>\s?/gm, '');                          // blockquotes
  t = t.replace(/\*\*|\*|__|`/g, '');                    // emphasis markers
  t = t.replace(/\[([^\]]+)\]/g, '$1');                  // [editorial] brackets -> text
  for (const [k, v] of Object.entries(ENT)) t = t.split(k).join(v);
  t = t.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
  // drop citation footers
  t = t.split('\n').filter((l) => !/^\s*sources?:/i.test(l.trim())).join('\n');
  t = t.replace(/[ \t]+/g, ' ').replace(/\n{2,}/g, '\n').trim();
  return `${title}.\n\n${t}`;
}

function chunk(text, max = 3800) {
  const sents = text.replace(/\s+/g, ' ').match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [text];
  const out = []; let cur = '';
  for (let s of sents) { s = s.trim(); if (!s) continue;
    if ((cur + ' ' + s).length > max) { if (cur) out.push(cur.trim()); cur = s; } else cur = (cur + ' ' + s).trim(); }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

async function tts(input) {
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, voice: VOICE, input, response_format: 'mp3' }),
  });
  if (!res.ok) throw new Error(`TTS ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return Buffer.from(await res.arrayBuffer());
}

// ---- run ----
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {};
const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : {};

if (onlys.length) items = items.filter((it) => onlys.some((o) => it.id.includes(o)));
if (LIMIT) items = items.slice(0, LIMIT);

let totalChars = 0, planned = 0, skipped = 0, generated = 0;

for (const it of items) {
  const { fm, body } = parse(readFileSync(it.full, 'utf8'));
  if (String(fm.private) === 'true') { skipped++; continue; }          // never narrate withheld letters
  const text = clean(fm.title || it.id, body);
  const hash = createHash('sha256').update(`${MODEL}|${VOICE}|${text}`).digest('hex').slice(0, 16);
  const flat = it.id.replace(/\//g, '__');
  const url = `/audio/${flat}.mp3`;
  const outFile = path.join(OUT_DIR, `${flat}.mp3`);

  totalChars += text.length;
  if (!FORCE && cache[it.id] === hash && existsSync(outFile)) { manifest[it.id] = url; skipped++; continue; }
  planned++;

  if (DRY) {
    console.log(`  plan  ${it.id}  (${text.length} chars, ${chunk(text).length} chunk(s))`);
    continue;
  }
  if (!KEY) { console.error('ERROR: OPENAI_API_KEY not set. Use --dry-run to preview, or set the key.'); process.exit(1); }

  // generate + stitch
  mkdirSync(OUT_DIR, { recursive: true });
  const tmp = path.join(os.tmpdir(), `tts-${flat}-${Date.now()}`);
  mkdirSync(tmp, { recursive: true });
  const parts = chunk(text);
  const partFiles = [];
  for (let i = 0; i < parts.length; i++) {
    process.stdout.write(`  gen   ${it.id}  chunk ${i + 1}/${parts.length}\r`);
    const buf = await tts(parts[i]);
    const pf = path.join(tmp, `p${i}.mp3`); writeFileSync(pf, buf); partFiles.push(pf);
  }
  if (partFiles.length === 1) { writeFileSync(outFile, readFileSync(partFiles[0])); }
  else {
    const list = path.join(tmp, 'list.txt');
    writeFileSync(list, partFiles.map((f) => `file '${f}'`).join('\n'));
    execFileSync('ffmpeg', ['-y', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', outFile], { stdio: 'ignore' });
  }
  rmSync(tmp, { recursive: true, force: true });
  manifest[it.id] = url; cache[it.id] = hash; generated++;
  console.log(`  done  ${it.id} -> ${url}                    `);
}

if (!DRY) {
  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  writeFileSync(CACHE, JSON.stringify(cache, null, 2) + '\n');
}

console.log('\n----------------------------------------');
console.log(`pages considered : ${items.length}`);
console.log(`already current  : ${skipped}`);
console.log(DRY ? `would generate   : ${planned}` : `generated        : ${generated}`);
console.log(`total narration  : ${totalChars.toLocaleString()} chars`);
console.log(`est. cost (~$${PRICE_PER_M}/1M chars): $${((totalChars / 1e6) * PRICE_PER_M).toFixed(2)} for a full (re)generation`);
console.log(DRY ? 'DRY RUN — nothing written. Set OPENAI_API_KEY and drop --dry-run to generate.' : 'Wrote src/data/audio-manifest.json — rebuild the site to publish.');
