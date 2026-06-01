import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── people ─────────────────────────────────────────────────────────────────
// One entry per person (family AND non-family — e.g. Robert Earl's B-24 crew).
// Store only `parents`; derive children/siblings via reverse lookup elsewhere.
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      aka: z.string().optional(),                  // "Will", "Fuzzy", "Bus", maiden names
      // line distinguishes the major family threads in this archive.
      //   'paternal'  = Chuck's father's side (Eesley / Chenoweth / McMaster / Anderson)
      //   'maternal'  = Chuck's mother's side (Wildermuth / Davis / Fleming / German line)
      //   'zhou'      = Lijie's side (Zhou family of Qingdao, Shandong — and its branches)
      //   'crew'      = Robert Earl's B-24 crew, non-family individuals he served with
      //   'other'     = family-by-marriage, family-by-friendship, and other adjacencies
      line: z.enum(['paternal', 'maternal', 'zhou', 'crew', 'other']).optional(),
      birth: z
        .object({ date: z.string().optional(), place: z.string().optional() })
        .optional(),
      death: z
        .object({ date: z.string().optional(), place: z.string().optional() })
        .optional(),
      parents: z.array(reference('people')).default([]),
      spouses: z.array(reference('people')).default([]),
      living: z.boolean().default(false),          // privacy gate
      portrait: image().optional(),
      generation: z.number().optional(),
      // Short header line used on index pages. Keep biography in the Markdown body.
      summary: z.string().optional(),
    }),
});

// ── documents ──────────────────────────────────────────────────────────────
// Long-form narrative content: memoirs, the combat log, Bean's register,
// "Return to Germany," ancestor sketches, letters. Body = the transcription.
const documents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/documents' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum([
        'memoir',
        'combat-log',
        'travelogue',
        'register',
        'ancestor-sketch',
        'letter',
        'eulogy',
        'tree-export',
      ]),
      author: reference('people').optional(),
      people: z.array(reference('people')).default([]),
      dateRange: z
        .object({ start: z.string(), end: z.string().optional() })
        .optional(),
      summary: z.string(),
      source: z.string().optional(),               // original filename, for provenance
      scans: z.array(image()).default([]),
    }),
});

// ── artifacts ──────────────────────────────────────────────────────────────
// Catalogued objects. Schema mirrors Maggie Eesley's archival metadata fields
// so her "Four Generations" deck imports nearly losslessly.
const artifacts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artifacts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),                            // "Photograph", "Letter", "Christmas Card"
      image: image(),
      medium: z.string().optional(),
      measurement: z.string().optional(),
      condition: z.string().optional(),
      creator: z.string().optional(),
      dateCreated: z.string().optional(),
      placeCreated: z.string().optional(),
      idNumber: z.string().optional(),
      provenance: z.string().optional(),
      inscription: z.string().optional(),
      rights: z.string().optional(),
      people: z.array(reference('people')).default([]),
      relatedDocument: reference('documents').optional(),
    }),
});

// ── places ─────────────────────────────────────────────────────────────────
// Locations the family touched — Württemberg ancestral villages, Marietta
// landmarks, mission airfields, etc. The point of this collection is that
// some places were visited more than once across generations, and the
// resulting "then & now" pairing is itself an artifact about continuity.
const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      village: z.string().optional(),
      region: z.string().optional(),
      country: z.string().optional(),
      coords: z
        .object({ lat: z.number(), lng: z.number() })
        .optional(),
      summary: z.string(),
      significance: z.string().optional(),       // why this place matters to the family
      relatedPeople: z.array(reference('people')).default([]),
      relatedDocuments: z.array(reference('documents')).default([]),
      // status: photographed = at least one visit has images;
      //         described-only = visited but no photos survived;
      //         unreached = part of the route nobody in the family has gotten to yet.
      status: z
        .enum(['photographed', 'described-only', 'unreached'])
        .default('photographed'),
      visits: z
        .array(
          z.object({
            year: z.string(),
            photographer: reference('people').optional(),
            // If no photograph survives, who described the place in words instead.
            narrator: reference('people').optional(),
            images: z.array(image()).default([]),
            caption: z.string().optional(),
            // How closely this visit's images line up with another visit's —
            // "near-identical reframing" vs. "same subject, different angle."
            alignmentNote: z.string().optional(),
            travelogueExcerpt: z.string().optional(),
          })
        )
        .default([]),
      // Explicit then-and-now pairings: same subject, different visits.
      // Renders as side-by-side diptychs above the per-visit galleries.
      pairs: z
        .array(
          z.object({
            subject: z.string(),
            caption: z.string().optional(),
            thenYear: z.string(),
            thenImage: image(),
            thenCaption: z.string().optional(),
            thenPhotographer: reference('people').optional(),
            nowYear: z.string(),
            nowImage: image(),
            nowCaption: z.string().optional(),
            nowPhotographer: reference('people').optional(),
          })
        )
        .default([]),
    }),
});

export const collections = { people, documents, artifacts, places };
