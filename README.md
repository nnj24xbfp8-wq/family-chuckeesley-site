# family.chuckeesley.com

A narrative, archive-quality family-history site for the Eesley and Wildermuth families. Sister project to [chuckeesley.com](https://chuckeesley.com); separate repo, separate deploy, same Astro/Vercel workflow.

See `family-history-brief.md` in the chuckeesley-site repo for the full project brief, source inventory, family map, and architecture rationale.

## Stack

- Astro 5 (content collections)
- Tailwind CSS + Typography plugin
- MDX
- Sitemap
- Deploy: same workflow as chuckeesley.com

## Content model

Three collections, all link to `people`:

- `people/` — family members and the B-24 crew. Stores only `parents`; siblings/children are derived.
- `documents/` — long-form narrative: memoirs, the combat log, Bean's register, "Return to Germany," ancestor sketches, letters.
- `artifacts/` — catalogued objects (photos, letters, cards). Metadata fields map 1:1 to Maggie Eesley's archival catalogue.

## Privacy

- Living people: `living: true` flag suppresses dates, places, and detailed biography at build time.
- No street addresses anywhere on the public site.
- Default to omission when in doubt.

## Develop

```
npm install
npm run dev
```
