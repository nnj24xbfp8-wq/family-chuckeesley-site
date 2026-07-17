#!/usr/bin/env node
/**
 * Unused-image audit for the family archive.
 *
 * Lists image files under src/assets that are not referenced by any content
 * collection or page (frontmatter image()/scans, markdown ![](…), or <img>).
 * Useful for finding photos that were scanned/uploaded but never placed on a
 * page — both cleanup candidates and content opportunities.
 *
 * The Vietnam-letters scan corpus (src/assets/family/originals/vietnam-letters)
 * is EXPECTED to be mostly unreferenced — it's the working mining set — so it is
 * summarized as a count rather than listed. Pass --all to list everything.
 *
 * Usage:  node scripts/check-unused-images.mjs [--all]
 * Informational only (always exits 0). No dependencies.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, basename, sep } from 'node:path';

const ROOT = process.cwd();
const ASSETS = join(ROOT, 'src', 'assets');
const SRC_DIRS = ['src/content', 'src/pages'];
const IMG = /\.(jpe?g|png|webp|jp2|gif|avif)$/i;
const SUMMARIZE = ['vietnam-letters']; // path fragments to count, not list
const showAll = process.argv.includes('--all');

function walk(dir, test) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, test));
    else if (test(p)) out.push(p);
  }
  return out;
}

// One big blob of everything that can reference an image.
const blob = walk(join(ROOT, 'src'), (p) => /\.(md|mdx|astro|ts|tsx|js|mjs)$/.test(p) && !p.includes(`${sep}assets${sep}`))
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n');

const assets = walk(ASSETS, (p) => IMG.test(p));
const unref = assets.filter((a) => !blob.includes(basename(a)));

const listed = [];
const summarized = {};
for (const a of unref) {
  const rel = relative(ROOT, a);
  const bucket = SUMMARIZE.find((s) => rel.includes(s));
  if (bucket && !showAll) summarized[bucket] = (summarized[bucket] ?? 0) + 1;
  else listed.push(rel);
}

console.log(`Image assets: ${assets.length}  |  unreferenced: ${unref.length}\n`);
for (const [b, n] of Object.entries(summarized)) {
  console.log(`(${n} unreferenced under "${b}" — expected mining corpus; run with --all to list)\n`);
}
if (listed.length === 0) {
  console.log('No unexpected unused images.');
} else {
  console.log(`Unreferenced images to review (${listed.length}):`);
  for (const r of listed.sort()) console.log('  ', r);
}
process.exit(0);
