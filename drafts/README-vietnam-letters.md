# Vietnam letters — how to add a letter to the archive

The Vietnam letters scaffold is in place. To add an individual letter:

1. Pick the template that matches the privacy choice for that letter:
   - `_template-vietnam-letter-published.md` — letter body and scans render publicly.
   - `_template-vietnam-letter-private.md` — only metadata renders; a "Withheld at the family's request" panel replaces the body.

2. Copy the template to `src/content/documents/letters/<slug>.md`. Slug examples: `to-will-1970-07-04.md`, `to-peggy-1970-12-monsoons.md`. Keep it descriptive.

3. Fill in the frontmatter:
   - `title` — short title visitors will see. Convention: `"Letter to <recipient>, <date>"`.
   - `author` — `charles-eesley` always for this collection.
   - `recipient` — `wilbur-eesley`, `margaret-mcmaster-eesley`, or whoever it was sent to.
   - `partOf: letters-from-vietnam` — anchors the letter to the parent collection.
   - `locationFrom` / `locationTo` — `"Saigon, Republic of Vietnam"` and `"Marietta, Ohio"` cover most.
   - `postmarkDate` — the postmark, ISO `YYYY-MM-DD` when known. **This is the canonical date field for letters; do not also fill `dateRange`.** The renderer falls back to `dateRange.start` only on documents that aren't letters.
   - `private` — `false` for the curated public 5–7; `true` for everything else catalogued.
   - `scans` — path(s) to scan files under `src/assets/family/originals/` (envelope, page 1, page 2, …). Only on published letters.

4. For published letters, transcribe the body below the frontmatter. Preserve his line breaks and idiosyncratic spelling. Use `[square brackets]` for editorial notes inline.

5. Commit and push. The letter will appear in the parent collection at `/docs/letters-from-vietnam/` and have its own page at `/docs/letters/<slug>/`.

## Scan ingestion checklist (before creating the doc file)

1. Drop scans into `src/assets/family/originals/`. Keep the original filenames (`IMG_XXXX.jpeg`).
2. Note which IMG numbers belong to which letter (envelope front, page 1, page 2, …).
3. Note the postmark date and recipient from the envelope.
4. Decide whether the letter is in the public 5–7 or in the withheld set.

## Why the templates are in `drafts/`

The `drafts/` folder is outside Astro's content glob, so files here aren't built into the site. The templates live here as reusable starting points; copying them into `src/content/documents/letters/` is what makes them appear on the site.
