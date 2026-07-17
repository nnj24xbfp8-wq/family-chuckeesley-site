# Unplaced-scan inventory — identification worktable

Working notes from a July 2026 pass identifying the loose scans in
`src/assets/family/originals/` that the unused-image audit
(`npm run check:unused-images`) flagged as not referenced by any page. Not part
of the site build (Astro ignores non-collection files here). Delete when placed.

Status key: **PUBLISHABLE** (datable/attributable, ready to write up) ·
**NEEDS ID** (family confirmation of who/where) · **LIVING** (privacy call — living
people) · **DUPLICATE** (already on the site) · **SENSITIVE**.

## The "73xx" run — Eesley family album + 1939 correspondence

A mix of early-1900s–1940s album photos and a September 1939 letter cluster,
almost certainly from the Charles Leonard / Roberta Burnes Chenoweth-Eesley album.

| scan | what it is | best-guess ID | status |
|---|---|---|---|
| 7351 | Man seated outdoors, ink label "Dwight" | Dwight (Kennedy) Chenoweth? | NEEDS ID |
| 7352 | Young couple + two small children, garden, c.1905–1910 | Chenoweth branch? (Elsie?) | NEEDS ID |
| 7353 | Boy in overalls, c.1920s | — | NEEDS ID |
| 7354 | Teen girl on a rocky beach, c.1930s–40s | Helen Eesley? (Black Lake?) | NEEDS ID |
| 7355 + 7356 + 7357 | 3-page handwritten letter — Lillie Dale Eesley → son Leonard & wife Helen ("Tini"), Sept 1939 | already published: [`/docs/lillie-dale-1939-letter-after-dales-death/`](/docs/lillie-dale-1939-letter-after-dales-death/) (scans `lillie-dale-1939-letter-page1/2/3`) | **DUPLICATE — deleted** |
| 7358 | Envelope for the above | already the entry's envelope scan | **DUPLICATE — deleted** |
| 7359 | Teenage boy, serious studio-ish portrait, c.1930s | an Eesley son? | NEEDS ID |
| 7360 | Young couple (man in dark coat; woman in leopard fur), c.late-1930s–40s | Leonard & Helen? | NEEDS ID |
| 7361 | Young man studio portrait, c.1940s | an Eesley son? | NEEDS ID |
| 7362 | Young man studio portrait, c.1930s–40s | an Eesley son? | NEEDS ID |
| 7367 | **Photo BACK, labeled** | "Marietta Chong / Will / Stella Sun (Chong) / Ted Chong / Helen — about 1942–5, at 230 N. Cassady" (KISCO Apr 10 1945) | verso — front photo not yet matched |
| 7368 | Asian wedding portrait (bride, mother, father in white suit) on a staircase | Stella Sunn / Ted Chong wedding cluster, c.1945? | NEEDS ID |
| 7461 | Handwritten note, "Sept 1, 1939" — the dream Dale had come back with amnesia | **Helen Louise (Eesley) Burnes**, age 15 (Dale's sister, Roberta's mother) — confirmed by Chuck | **DUPLICATE — deleted** (already published: [`/docs/helen-eesley-1939-dream-journal/`](/docs/helen-eesley-1939-dream-journal/)) |

**Note:** on inspection, the entire 1939 letter cluster (7355–58, 7461) turned out
to be duplicate scans of entries **already published with their scans** — the
Lillie Dale letter and Helen's dream journal, both correctly attributed and dated.
All five were byte-identical to the existing assets and were deleted. So the batch's
genuinely-unplaced material is the **album photographs** below, which need family IDs.

## The "IMG_ / Mail / 0000" set — mixed eras, both family sides

| scan | what it is | best-guess ID | status |
|---|---|---|---|
| IMG_2084 | Young woman in plaid dress on a porch, c.1920s | — (Sadye? a Davis?) | NEEDS ID |
| IMG_2529 | Young couple in front of a Chinese temple (Lingyin/Yunlin, Hangzhou), c.1970s–80s | **Zhou/Li side** — Lijie's parents? | NEEDS ID |
| IMG_4423 | Blond boy on a red BMX bike, indoors, c.mid-1980s | young Chuck | LIVING |
| IMG_5533 | Large formal family group portrait (~12 people), c.1900–1910 | early Eesley/Chenoweth/Wildermuth | NEEDS ID |
| Mail Attachment | Girl feeding a baby a bottle in front of the Highland Ridge Chinese mural, c.1980 | **Stephanie Mullin (Kamiab) feeding baby Chuck** (confirmed by Chuck) | LIVING |
| Mail Attachment (1) | Young man escorting an elderly woman down a church aisle, c.1990s–2000s | Chuck at a wedding? | NEEDS ID / LIVING |
| dad.jpeg | Man in dark suit, studio portrait, c.1970s–80s | Charlie Eesley? | NEEDS confirm |
| 00000004_00000035_00000036 | Family reunion, ~15 people outdoors by a house, c.mid-1970s | Highland Ridge gathering? | NEEDS ID |
| 00000007_00000135_00000136 | Blond boy on a red bike, outdoors on a driveway, c.mid-1980s | young Chuck | LIVING |

## After the checksum sweep (July 2026)

A byte-for-byte comparison of every flagged photo against the placed assets showed
this "batch" is overwhelmingly **re-scans of photos already in the archive.**
Confirmed byte-identical duplicates, deleted (no ID needed): 7351 (=Dwight portrait),
7352 (=Elsie+Jonas+children), 7353 (=Helen/Jean toddler), 7354 (=Helen teen),
7359–7362 (=Lyle Eesley portraits ×4), IMG_2084 (=Sadye plaid-dress), IMG_4423 &
00000007_135 (=young Chuck on bikes), 2018-03-30-0041 (=young Chuck trike),
dad.jpeg (=Charlie studio portrait), plus the 1939 letter cluster and the
Charlie-Vietnam / Sadye-grad dups noted above.

**Genuinely new (no checksum match to anything placed) — worth attention:**

- `00000004_00000035_00000036` — ~1970s family reunion, ~15 people (Highland Ridge?) — **NEEDS ID**
- ~~`7368`~~ — **PLACED** as artifact `stella-ted-chong-wedding-with-family-1945` — Stella on her wedding day with her parents **Mabel Lee Sunn** and **Koon Hung Sunn** (confirmed by Chuck)
- ~~`7367`~~ — **PLACED** — it's the verso of 7366; attached as the back-of-print image to the existing `stella-ted-chong-wedding-cassady-group-1945` artifact
- ~~`IMG_2529`~~ — **already on the site** (Zhou/Li side — Lijie's parents at a Hangzhou temple, per Chuck); redundant loose scan
- `IMG_5533` — large formal family group, c.1900–1910 — **NEEDS ID**
- `family-group-picket-fence-porch-c1940s-queued-for-id` — **NEEDS ID**
- `Anne_Eesley1.jpg` — Anne's memorial portrait (she already has a portrait; alternate)
- `charlie-to-chuck-26th-birthday-card-2005.jpg` — 2005 birthday card, Charlie → Chuck — **already on the site** (per Chuck); leave/cleanup
- ~~`Mail Attachment.jpeg`~~ — **PLACED** as artifact `stephanie-kamiab-feeding-baby-chuck-highland-ridge-c1980` (renamed) — Stephanie Kamiab feeding baby Chuck at Highland Ridge, c.1980
- `Mail Attachment (1).jpeg` — **IDed** (Chuck): Chuck with his grandmother **Peggy McMaster Eesley** at his father Charlie's wedding to Diana, early 2000s — LIVING; not yet placed (Chuck's call)
- `800a9cec-…_all_11681.jpeg`, `places/2018-03-30-0015.jpeg`, `places/IMG_1920.jpeg` — not yet viewed
- `maggie-deck/john-k-timmons.jpeg`, `maggie-deck/mary-ohio-timmons-chenoweth.jpeg` — superseded deck copies (pages use better `originals/` scans) — cleanup candidates

## Duplicates of content already on the site (cleanup candidates)

- **00000000_00000016_00000017 (1).jpeg** — byte-identical to `charlie-returning-from-vietnam-c1971.jpeg` (existing artifact). **Deleted July 2026.**
- **00000007_00000146_00000147.jpeg** — Sadye Fleming graduation portrait, ca. 1919 (labeled on the scan); matches her existing page portrait `sadye-fleming-graduation-portrait-1919.jpeg`. Redundant.
