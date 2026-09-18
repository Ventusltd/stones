---
record: 20260918T2315Z-estate-deduplication
date: 2026-09-18T23:15Z
source_digest: 207862af77e045755118242aba5f0668e606e95610079523aea20daa036e0a6b
supersedes: none
---

# Content deduplication across a 65 repository estate

## Measurement

Every tracked file in 65 repositories was enumerated and its content identifier recorded, using
`git ls-tree -r HEAD` per repository and counting distinct blob identifiers.

| quantity | value |
|---|---|
| repositories scanned | 65 |
| tracked file paths | 41,593 |
| distinct content identifiers | 19,194 |
| redundant paths | 22,399 |
| duplication ratio | 2.167 |
| unique share of the estate | 46.15 per cent |
| most duplicated single content | 162 occurrences |

Fewer than half of the tracked paths hold content that appears only once.

## Why this matters for identity

Content-addressed version control already deduplicates by content without being asked. Two identical
files in two repositories carry the same content identifier. Three consequences follow, and they
remove work rather than adding it:

1. **A body is a distinct content identifier, not a path.** The estate contains 19,194 distinct
   items, not 41,593.
2. **Duplication is a property of an item, not a separate item.** Content occurring 162 times is one
   item with 162 memberships. Counts state either "unique" or "memberships" and never "owns".
3. **No identifier issuance is required.** All 19,194 identifiers already exist, are derived from
   content, are permanent, and do not repeat.

This distinguishes two classes of identifier in the project. Identifiers derived from content are
free and cover the estate completely. Identifiers issued as permanent sequential integers, used at
line granularity, are a governed act and cover only part of it: 121,805 numbered lines currently sit
outside any functional grouping.

## Rendering approach

The visualisation is a GPU particle renderer using instanced point drawing, with positions computed
in the vertex shader from per-item attributes and uniforms, so the CPU performs no per-point work
per frame. A benchmark placed 67,108,864 particles in 21.03 seconds. The client is two ES modules
totalling under 85 kB, with no content delivery network, no framework and no build step, and it runs
in a browser on a phone.

Output is two-dimensional by design, for four stated reasons:

- **No occlusion**, so the whole set is visible simultaneously.
- **Position is invertible**, so a point on screen maps back to exactly one identifier.
- **Determinism is preserved**, because a layout is a pure function from identifier to coordinate
  and reproduces identically on any machine.
- **Density is truthful**, because area corresponds to count, whereas perspective would misrepresent
  magnitude.

The third axis is time rather than depth. Orbital position is computed in closed form with epoch as
an argument, so rewinding is a recomputation rather than a stored history, and a route is an ordered
list of identifiers plus the name of the layout that placed them.

**Stated limitation.** Inclination is genuinely a third spatial quantity and in two dimensions must
be carried by band, brightness or colour rather than by height.

**Recorded for the future.** If a three-dimensional view is adopted, the viewpoint becomes state. A
layout would no longer be a pure function from identifier to coordinate, and a route would not be
replayable from identifiers and a layout name alone. The viewpoint would have to be recorded as part
of the route and carry its own identifier, or the same route would render differently for different
viewers and the result would cease to be checkable.

## Next step

A generator emitting the estate at content-identifier granularity: 19,194 items, magnitude from
membership count, no identifier issuance, complete coverage of the estate, in the data shape the
existing renderer already consumes. Not yet written at the time of this record.
