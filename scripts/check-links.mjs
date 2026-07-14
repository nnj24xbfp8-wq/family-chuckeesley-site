#!/usr/bin/env node
/**
 * Internal link integrity checker for the family archive.
 *
 * Body markdown links (/family/…, /docs/…, /archive/…, /places/…) are NOT
 * validated by the Astro build — only frontmatter `reference()` fields are.
 * This script closes that gap: it builds the set of valid site URLs from the
 * content collections, the static pages, and the redirects in astro.config.mjs,
 * then scans every internal link in src/content and src/pages and reports any
 * that don't resolve.
 *
 * Usage:  node scripts/check-links.mjs
 * Exits non-zero if any broken links are found (handy for pre-commit / CI).
 *
 * No build required and no dependencies — pure Node.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'src', 'content');
const PAGES = join(ROOT, 'src', 'pages');
const PUBLIC = join(ROOT, 'public');

// Collection folder -> URL base
const COLLECTION_ROUTES = {
  people: '/family',
  documents: '/docs',
  artifacts: '/archive',
  places: '/places',
};

// Build-generated URL prefixes that won't exist in src/ or public/ but are
// emitted at build time (Pagefind search, Astro assets). Treat as valid.
const GENERATED_PREFIXES = ['/pagefind/', '/_astro/', '/_image', '/_server-islands/'];

function walk(dir, exts) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p, exts));
    else if (exts.some((e) => name.endsWith(e))) out.push(p);
  }
  return out;
}

const valid = new Set(['/']);

// 1) Content collections -> /base/<id>/
for (const [folder, base] of Object.entries(COLLECTION_ROUTES)) {
  const dir = join(CONTENT, folder);
  for (const file of walk(dir, ['.md', '.mdx'])) {
    const id = relative(dir, file).replace(/\.(md|mdx)$/, '').split(sep).join('/');
    valid.add(`${base}/${id}/`);
  }
}

// 2) Static pages in src/pages (skip dynamic [...] routes; index -> parent dir)
for (const file of walk(PAGES, ['.astro'])) {
  const rel = relative(PAGES, file).replace(/\.astro$/, '');
  if (rel.includes('[')) continue; // dynamic route, covered by collections
  const parts = rel.split(sep);
  if (parts[parts.length - 1] === 'index') parts.pop();
  const route = '/' + parts.join('/');
  valid.add(route === '/' ? '/' : route.replace(/\/?$/, '/'));
}

// 3) Redirects from astro.config.mjs (sources resolve too)
const cfg = existsSync(join(ROOT, 'astro.config.mjs'))
  ? readFileSync(join(ROOT, 'astro.config.mjs'), 'utf8')
  : '';
for (const m of cfg.matchAll(/['"](\/[^'"]+)['"]\s*:\s*['"]\//g)) valid.add(m[1]);

// Public assets (for links that point at files, e.g. /docs/foo.pdf)
const assets = new Set();
for (const file of walk(PUBLIC, [''])) assets.add('/' + relative(PUBLIC, file).split(sep).join('/'));

// Scan sources for internal links
const linkRe = /href="(\/[^"]*)"|\]\((\/[^)\s]*)\)/g;
const broken = new Map();
let checked = 0;

for (const file of [...walk(CONTENT, ['.md', '.mdx']), ...walk(PAGES, ['.astro'])]) {
  const txt = readFileSync(file, 'utf8');
  for (const m of txt.matchAll(linkRe)) {
    const raw = m[1] ?? m[2];
    if (!raw || raw.includes('${')) continue; // skip template literals
    const u = raw.split('#')[0].split('?')[0];
    if (!u.startsWith('/')) continue;
    checked++;
    if (GENERATED_PREFIXES.some((p) => u.startsWith(p))) continue;
    const last = u.replace(/\/$/, '').split('/').pop() ?? '';
    const isAsset = last.includes('.');
    if (isAsset) {
      if (!assets.has(u)) add(broken, u, file);
    } else {
      const withSlash = u.endsWith('/') ? u : u + '/';
      if (!valid.has(withSlash) && !valid.has(u)) add(broken, u, file);
    }
  }
}

function add(map, url, file) {
  if (!map.has(url)) map.set(url, new Set());
  map.get(url).add(relative(ROOT, file));
}

console.log(`Checked ${checked} internal links against ${valid.size} valid routes.`);
if (broken.size === 0) {
  console.log('✓ No broken internal links.');
  process.exit(0);
}
console.log(`\n✗ ${broken.size} broken link target(s):\n`);
for (const [url, files] of [...broken].sort()) {
  console.log(`  ${url}`);
  for (const f of [...files].sort()) console.log(`      in ${f}`);
}
process.exit(1);
