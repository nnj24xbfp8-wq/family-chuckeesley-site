# Family Archive Project — Handoff / Continuation Brief

Paste this into a fresh session to continue the work. It captures the project, the conventions, the workflows, and what's left to do.

## What this project is

Building and enriching **family.chuckeesley.com** — a genealogical/archival **Astro 5 + Vercel** site documenting the Eesley family. The heart of the current work is **mining Charlie Eesley's Vietnam-era letters** (scanned as `dad###` images): reconstructing each letter from scattered/duplicate/multi-page scans, transcribing verbatim, and writing richly-annotated Astro `documents` entries with historical context, cross-links, and privacy controls.

Repo (one of three connected): `family-chuckeesley-site` (the family archive). The others are `chuckeesley-site` and `foundation-site` — not part of this work.

## Content model (Astro content collections)

Collections defined in `src/content.config.ts`. Key ones:

- **people** (`src/content/people/*.md`): name, aka, line, birth/death, generation, `parents` (reference[]), `spouses` (reference[]), `portrait` (image()), summary. Body is markdown. Relations (children/siblings) are reverse-computed from `parents` via `src/lib/relations.ts`. The person template auto-lists documents where the person is `author` or in `people[]` ("Appears in").
- **documents** (`src/content/documents/**/*.md`): title, type (enum: memoir|combat-log|travelogue|register|ancestor-sketch|essay|letter|letter-collection|eulogy|obituary|tree-export), author (ref), people (ref[]), recipient (ref), locationFrom, locationTo, postmarkDate, partOf, private (bool), dateRange{start,end}, sortDate, teaser, summary, source, `scans` (array of image()). NO place/era/tags/collection fields.
- **places**: has relatedPeople, relatedDocuments, visits. Renders `<Content/>` + links.

Letters live in `src/content/documents/letters/`. Scans live in `src/assets/family/originals/vietnam-letters/` as `dad###.jpg` (some `.jp2`, some `.png`).

References (`reference()`) and `image()` are **build-validated** — a bad ref or missing image fails the build. Markdown body links (`/docs/...`, `/family/...`) are NOT validated, so verify those manually.

## Standing rules & conventions (IMPORTANT — follow exactly)

- **Privacy is the core editorial control.** Trim intimate/sexual passages and mark them with an italic placeholder like `*[A short intimate passage is held private at the family's discretion.]*`. Redact service numbers.
- **Anne / Jeanne psychiatric content: "trim the whole passage."** Standing rule from Chuck — whenever a letter mentions his aunts' psychiatric hospitalizations/breakdowns, remove the entire passage (they may be living).
- **Verify the author of every letter.** The `dad###` set is NOT all Charlie's — it includes some of Terrie's other/earlier correspondence and at least one non-Charlie love letter (dad242/243, 1967, held private). Check author + date before publishing.
- **Undated letters:** Chuck adds real dates later from the envelopes. If a letter has no date on the page, mark it undated in `source`, use a provisional `sortDate` only (no postmarkDate), and use a **yearless slug**. If the month/day is on the page and the year is inferable from content, use a full dated slug + postmarkDate.
- **Family site KEEPS em-dashes** — use `&mdash;` (and `&ndash;`, `&rsquo;` etc.) as HTML entities in markdown, not literal Unicode where the existing files use entities.
- **Transcriptions:** verbatim, blockquoted, with `[bracketed]` uncertain readings and `[page N:]` markers. Add a "What the letter is" intro, the transcription, and a "What the letter records" analysis with cross-links to related letters. Historical context goes in an amber `<aside>` block (see any published letter for the exact HTML).
- Cross-link generously to related letters/people, but confirm target slugs exist (`ls src/content/documents/letters/`).

## Key workflows

**Build-verify (do this after every batch):**
```bash
cd <repo> && rm -rf .astro node_modules/.astro   # clear cache to avoid spurious "Duplicate id" warnings
# also: find . -name '.fuse_hidden*' -delete   (git cruft that causes dup-id warnings)
cat > astro.check.mjs <<'EOF'
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; import sitemap from '@astrojs/sitemap'; import tailwind from '@astrojs/tailwind';
export default defineConfig({ site:'https://family.chuckeesley.com', integrations:[mdx(),sitemap(),tailwind()], image:{service:{entrypoint:'astro/assets/services/noop'}}, outDir:'/tmp/fam-check' });
EOF
npx astro build --config astro.check.mjs 2>&1 | tail -5   # expect "N page(s) built ... Complete!" no errors
rm -f astro.check.mjs; rm -rf /tmp/fam-check
```
Current page count: **530**. (The noop image service skips real optimization so the check is fast.)

**jp2 handling:** sharp/Vercel may not read `.jp2`. Convert before referencing: `convert dadNNN.jp2 -quality 90 dadNNN.jpg` in the assets folder, then reference the `.jpg`.

**Duplicate detection:** re-scanned pages are often byte-identical — use `md5sum` to catch twins before treating a scan as new content.

**Reading scans:** the Read tool renders `.jpg`/`.png` images directly. `.jp2` must be converted to png first to view. Files under `/tmp` are NOT readable by the Read tool — copy into the mounted repo or the outputs folder first.

**Extracting photos from the "Four Generations" PowerPoint deck:** the deck at `src/assets/family/Four Generations of the Eesley Family navigation revised 1 copy copy.pptx` holds many family photos. To extract: `unzip` the pptx, images are in `ppt/media/`, map slide→image via `ppt/slides/_rels/slideN.xml.rels`, and read slide text via `sed 's/<[^>]*>/ /g' ppt/slides/slideN.xml`. Full-size photos go in `src/assets/family/originals/` with descriptive names; embed in pages with markdown `![alt](../../assets/family/originals/NAME.jpeg)`.

## Working file: `vietnam-scan-catalog.md` (repo root)

This is the live worktable tracking every scan: duplicate clusters, published/held/orphan status, the dating workflow note, non-Charlie/sensitive finds, and orphan fragments. **Read it first** and keep it updated as you publish. Delete it when mining is complete.

## Recently completed (most recent first)

- **Alice Anderson McMaster page** — added 4 photos extracted from the deck (young-woman Eyer cabinet card, porch with son Don ~1911, Clifton School 1928 class photo, schoolroom portrait) at `family/alice-anderson-mcmaster/`.
- **October 1970 letter run** (5 new letters, a clean contiguous sequence): Oct 3 (malaria recovery at Cam Ranh Bay, dad263/265/266/267/268 — trimmed a teasing passage Charlie himself flagged), Oct 6 (back to field, booby traps, "raise hell," anti-war voting, dad269/270/271/272), Oct 8 (leaving for field, dad273/274), Oct 10 (still-alive note, dad275/276), Oct 14 (**origin of the Hawaii R&R plan**, dad277/278).
- **Woodstock entry fix** — `charlie-to-terrie-1970-spring-woodstock.md` had cited dad270, but dad270 is actually page 2 of the Oct 6 letter (scans were renumbered after that entry was written). Removed the false ref (`scans: []`), rewrote its source note, entry preserved as a text-only record.
- Earlier this session: December 1970 letters, the full training-arc letters, Highland Ridge architecture document + Will Eesley building research, obituary/tribute-wall additions to charles-eesley and terrie-lee-eesley pages.

## Open items / next steps

1. **Keep mining forward** — the productive strategy is to *sample ahead* for clean, complete, datable letters rather than grinding faint fragments. Next block to read: **dad279+** (dad279–288, 291–336), plus low stragglers (dad6/11/12/18/26/101/103/119/125/137/147/148/152–157/166/181). Verify author on each.
2. **dad264** = a **March 22, 1971** R&R-orders letter ("You are listed as Mrs. Eesley... reduced fare") — orphan page, belongs to the 1971 Hawaii-trip thread; needs its other page(s).
3. **Faint orphan middle pages** (dad246/250/251) — relationship/marriage discussion, low-res, page 1s not matched. Complete if their other pages surface.
4. **Orphan closings/middles to reunite:** dad220 (Thanksgiving-eve p1 continuation), Letter B middle, dad239, dad241.
5. **Chuck's task:** add real dates to undated letters from the envelopes; match the Woodstock line to its physical letter so its scan can be repointed.

## Environment notes

- The connected folder IS the live repo — edits there are the deliverable.
- Bash runs in an isolated Linux sandbox; each call is independent (no cwd carryover); use absolute paths. Background jobs do NOT survive between calls.
- `pip install` needs `--break-system-packages`. `tesseract` is available (but useless on faded cursive).
