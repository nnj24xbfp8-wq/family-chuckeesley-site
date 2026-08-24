# Maintenance

Operational notes for this repo: how it gets verified, how dependency updates
land, and the reasoning behind past security-advisory decisions.

## Verification happens in CI, not locally

There is no Node toolchain on the primary Mac, so `npm ci` / `npm run build` /
`npm audit` cannot be run locally. `.github/workflows/verify.yml` exists to
cover that gap. It runs:

- **weekly**, Mondays 15:00 UTC (~08:00 Pacific — UTC does not shift with DST)
- **on demand**, via *Run workflow* in the Actions tab
- **on push to `main`**, when `package.json`, `package-lock.json`, or the
  workflow itself changes
- **on pull requests**, so dependency bumps are tested before merge

Steps: clean install from the committed lockfile, build, then audit. Note that
`npm run build` here is `astro build && pagefind --site dist`, so the workflow
exercises the Pagefind index step too — a Pagefind failure fails the run.

### Why the audit gate is set to `moderate`

The audit step is a single `npm audit --audit-level=moderate` call.
`--audit-level` affects only the exit code — the full report prints either way —
so one call both reports and gates.

The step deliberately does *not* use `continue-on-error`. An earlier version did,
and on a sibling repo that produced a green run concealing a real finding: the
exit code was swallowed, so "green" carried no information. A red run is the
notification mechanism. If that reverts, the whole workflow becomes decorative.

Low and info findings print but do not fail the run.

## `check-links.yml`

Body markdown links (`/family/…`, `/docs/…`, `/archive/…`, `/places/…`) are not
validated by the Astro build, so `scripts/check-links.mjs` runs them in CI on
every push and PR. As of 2026-08-24 it checks 6,224 internal links against 750
routes. The checker is dependency-free, so it needs no install step.

## Dependency updates

Dependabot security updates are enabled. Fixes arrive as PRs; `verify` runs
against each one, so merge on green rather than editing lockfiles by hand
(which isn't possible locally anyway).

## Advisory history

**2026-08-24 — svgo 4.0.0–4.0.1, high**
([GHSA-2p49-hgcm-8545](https://github.com/advisories/GHSA-2p49-hgcm-8545))

Not exploitable in this codebase, despite the "high" rating. The flaw is SVGO's
`removeScripts` plugin failing to strip every executable script — which matters
only when SVGO is being used to *sanitize untrusted* SVG input. Here svgo is
transitive (pulled in by `astro` as `^4.0.1`, not declared directly and not
referenced anywhere in `src/` or `scripts/`), and Astro uses it to optimize
committed SVG assets at build time. There is no attacker-controlled input path.

Resolved via the Dependabot bump, which was lockfile-only since the patched
version satisfies Astro's existing range. Non-breaking, no runtime surface, so
merging on green was safe without a preview check.

Worth keeping as precedent: severity ratings describe the vulnerability in the
abstract, not its reachability in *this* repo. A "high" in a build-time
transitive dependency can matter less than a "moderate" in code that touches
untrusted input. Triage by reachability — but still take the fix when it's cheap,
because a permanently red repo trains you to ignore red.

## Toolchain

`package.json` pins `"node": "22.x"`. Both workflows use `node-version: 22` to
match; `check-links.yml` was on 20 until 2026-08-24. Keep them aligned — a drift
is how CI ends up testing a runtime Vercel isn't using.

## `.git.broken.20260602`

Salvage from a June 2026 git recovery. It is **tracked**, not untracked local
debris, so removing it takes a commit rather than an `rm`.

It holds one loose git object: an earlier draft of
`src/content/people/yunying-li.md`. That draft is strictly superseded — it
carries the *guessed* characters 李雲英 and 李忠初, where the live file has the
family-confirmed 李蕴英 and 李仲初, plus `generation: 5`, the bilingual layout,
and the sibling genealogy. Nothing in the salvaged copy is missing from the
current record, so deleting it loses no family-history content.

Verified 2026-08-24 by diffing the object against the live file. If any other
`.git.broken.*` directory ever appears, do the same check before deleting —
these hold real content, not just metadata.
