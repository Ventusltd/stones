---
record: 20260919T0020Z-estate-as-content-identifiers
date: 2026-09-19T00:20Z
source_digest: 85e9065738e961737672a71330910bfe31402fe296d1541e0953ca7a87d94f28
supersedes: none
---

# Rendering a repository estate as content identifiers

## What was produced

A generator that enumerates every tracked file across a multi-repository estate and emits one
drawable item per **distinct content identifier**, in the data shape an existing visualiser already
consumes.

| quantity | value |
|---|---|
| repositories enumerated | 66 |
| tracked file paths | 41,601 |
| drawable items, one per distinct content identifier | 19,202 |
| output size | 2,927,920 bytes |
| output digest | `85e9065738e961737672a71330910bfe31402fe296d1541e0953ca7a87d94f28` |

## Method

Items are keyed by the content identifier that the version control system has already assigned to
every tracked file. These identifiers are derived from content, are permanent, and do not repeat, so
no identifier issuance step is required and coverage of the estate is complete.

Identical content appearing in many locations is a **single item carrying a membership count**,
rather than many items. Magnitude therefore expresses duplication, and the count of occurrences is
a property of an item rather than a reason to create more of them.

Position is computed from each item's own identifier together with a printed seed. Nothing about
position is stored. Every constant used is written to a rules file alongside the output: the
drawable annulus bounds, the angular constant, the eccentricity clamp, the resonance tolerance and
integer ceiling, the four age and ratio thresholds, the selected central body with the top three
candidate scores, and the version control version. Re-running with the same inputs and flags
reproduces the output byte for byte.

No edges are emitted. Items orbit independently, and an edge that was not measured would be an
assertion rather than an observation.

Granularities other than the one implemented refuse with a stated message rather than returning a
partial answer. An enumeration returning zero repositories or zero items exits non-zero.

## Defect found by the first run, recorded rather than corrected quietly

The classification thresholds are miscalibrated. Of 19,202 items, **14,518 fall into a single class**
and only 16 are distributed across two others. A classification in which three quarters of the
population occupies one category carries almost no information.

The cause is a ratio threshold that is too permissive for repositories containing one long quiet
interval relative to their median. The thresholds were chosen in advance rather than derived from
the observed distribution, which was the error.

Consequence stated plainly: **no meaning should be read into the classification colours** until the
thresholds are derived from the distribution and each category holds a defensible share.

## Openness

Every item is currently recorded as unreachable, because no destination probe was run. The measure
being adopted is that an item with no fetchable destination counts against the instrument's own
score, and that score is published with every run. At the time of this record the score is 19,202 of
19,202 unreachable, which is the correct starting value and the number the work now exists to
reduce.

## Next step

Deriving each item's destination from the repository, commit and path it belongs to, then fetching
it and recording the status, so that reachability is measured rather than assumed.
