# Vietnam letters — how to add a letter to the archive

The Vietnam letters scaffold is in place. **Folder layout:**

- Letter markdown docs live in `src/content/documents/letters/<slug>.md`. URLs render at `/docs/letters/<slug>/`.
- Letter scans (envelope + pages) live in `src/assets/family/originals/vietnam-letters/`. Reference them from the doc frontmatter as `../../assets/family/originals/vietnam-letters/IMG_XXXX.jpeg`.

To add an individual letter:

1. Pick the template that matches the privacy choice for that letter:
   - `_template-vietnam-letter-published.md` — letter body and scans render publicly.
   - `_template-vietnam-letter-private.md` — only metadata renders; a "Withheld at the family's request" panel replaces the body.

2. Copy the template to `src/content/documents/letters/<slug>.md`. Slug examples: `to-terrie-1970-07-04.md`, `to-terrie-1970-12-monsoons.md`, `to-will-and-peggy-1970-thanksgiving.md`. Keep it descriptive.

3. Fill in the frontmatter:
   - `title` — short title visitors will see. Convention: `"Letter to <recipient>, <date>"`.
   - `author` — `charles-eesley` always for this collection.
   - `recipient` — defaults to `terrie-lee-eesley` (most of the letters). Use `wilbur-eesley` or `margaret-mcmaster-eesley` for the smaller set to Charlie's parents.
   - `partOf: letters-from-vietnam` — anchors the letter to the parent collection.
   - `locationFrom` / `locationTo` — `"Saigon, Republic of Vietnam"` and `"Marietta, Ohio"` cover most. Terrie was at Marietta College for most of the tour; if a later letter went to her at University of Maryland, set `locationTo` accordingly.
   - `postmarkDate` — the postmark, ISO `YYYY-MM-DD` when known. **This is the canonical date field for letters; do not also fill `dateRange`.** The renderer falls back to `dateRange.start` only on documents that aren't letters.
   - `private` — `false` for the curated public 5–7; `true` for everything else catalogued.
   - `scans` — path(s) to scan files under `src/assets/family/originals/vietnam-letters/` (envelope, page 1, page 2, …). Only on published letters.

4. For published letters, transcribe the body below the frontmatter. Preserve his line breaks and idiosyncratic spelling. Use `[square brackets]` for editorial notes inline.

5. Commit and push. The letter will appear in the parent collection at `/docs/letters-from-vietnam/` and have its own page at `/docs/letters/<slug>/`.

## Scan ingestion checklist (before creating the doc file)

1. Drop scans into `src/assets/family/originals/vietnam-letters/`. Keep the original filenames (`IMG_XXXX.jpeg`). Even for letters you intend to keep `private: true`, the scans live here — the doc template suppresses scans on the public page when private is true, but they're still part of the family record on disk.
2. Note which IMG numbers belong to which letter (envelope front, page 1, page 2, …).
3. Note the postmark date and recipient from the envelope.
4. Decide whether the letter is in the public 5–7 or in the withheld set.

## Why the templates are in `drafts/`

The `drafts/` folder is outside Astro's content glob, so files here aren't built into the site. The templates live here as reusable starting points; copying them into `src/content/documents/letters/` is what makes them appear on the site.
