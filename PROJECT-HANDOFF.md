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
# Copy the real config and add only the noop image service + a scratch outDir.
# (Do NOT hand-write the config — the project uses @tailwindcss/vite, not @astrojs/tailwind.)
python3 - <<'EOF'
s = open('astro.config.mjs').read()
s = s.replace("integrations: [mdx(), sitemap()],",
  "integrations: [mdx(), sitemap()],\n  image: { service: { entrypoint: 'astro/assets/services/noop' } },\n  outDir: '/tmp/fam-check',")
open('astro.check.mjs','w').write(s)
EOF
npx astro build --config astro.check.mjs 2>&1 | tail -5   # expect "N page(s) built ... Complete!" no errors
rm -f astro.check.mjs; rm -rf /tmp/fam-check
```
Current page count: see the latest CI run. (The noop image service skips real optimization so the check is fast.)

**jp2 handling:** sharp/Vercel may not read `.jp2`. Convert before referencing: `convert dadNNN.jp2 -quality 90 dadNNN.jpg` in the assets folder, then reference the `.jpg`.

**Duplicate detection:** re-scanned pages are often byte-identical — use `md5sum` to catch twins before treating a scan as new content.

**Reading scans:** the Read tool renders `.jpg`/`.png` images directly. `.jp2` must be converted to png first to view. Files under `/tmp` are NOT readable by the Read tool — copy into the mounted repo or the outputs folder first.

**Extracting photos from the "Four Generations" PowerPoint deck:** the deck at `src/assets/family/Four Generations of the Eesley Family navigation revised 1 copy copy.pptx` holds many family photos. To extract: `unzip` the pptx, images are in `ppt/media/`, map slide→image via `ppt/slides/_rels/slideN.xml.rels`, and read slide text via `sed 's/<[^>]*>/ /g' ppt/slides/slideN.xml`. Full-size photos go in `src/assets/family/originals/` with descriptive names; embed in pages with markdown `![alt](../../assets/family/originals/NAME.jpeg)`.

## Status: Vietnam-letter mining is COMPLETE (Oct 2026)

All 261 `dad###` scans have been read. See **`notes/VIETNAM-LETTERS-closeout-2026-10.md`** for the remaining duplicates, orphan pages, the drunk-December letter (dad250–252, kept private by Chuck's decision), and the envelope-dating tasks only Chuck can do. The old working table `vietnam-scan-catalog.md` has been deleted; everything still useful is in the close-out note.

**Last additions (1 Oct 2026):** `charlie-to-terrie-1970-12-04-security-platoon-da-nang` (dad210/211); dad208 attached as page 2 of `charlie-to-terrie-training-physical-and-mental-tests`.

## Open items / next steps

1. **Chuck's envelope pass** — the four dating items at the bottom of the close-out note.
2. **FamilySearch round 3** — the W1–W3 problems and the three bad standardized places in `notes/FAMILYSEARCH-FIXES-round2-verified-2026-08.md`.
3. **Li Xun / Jinan follow-ups** — `notes/OPEN-QUESTIONS-for-Li-Xun-2026-07.md` (Shang Yaoli birth year, Li Yunhua birth date).
4. Next content phase is open — candidates: `notes/photo-wish-list.md`, Wildermuth threads (`notes/WILDERMUTH-open-threads-2026-08.md`).

Working notes (email drafts, photo lists, scan inventories, FamilySearch fix lists) live in `notes/`, not the repo root.

## Environment notes

- The connected folder IS the live repo — edits there are the deliverable.
- Bash runs in an isolated Linux sandbox; each call is independent (no cwd carryover); use absolute paths. Background jobs do NOT survive between calls.
- `pip install` needs `--break-system-packages`. `tesseract` is available (but useless on faded cursive).
