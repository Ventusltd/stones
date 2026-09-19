---
record: 20260919T0115Z-reuse-before-rebuild
date: 2026-09-19T01:15Z
source_digest: d62b01784a3fa2d5c5728bd0fb3337f3f0d7e1567d185768a787780a7716d6c2
supersedes: none
---

# Reusing an existing renderer instead of building a second one

## The rule that was written and then broken

A written specification for a new dataset stated that it "produces nothing new to render": the
dataset was to be consumed by a visualiser that already existed, in the data shape that visualiser
already read. Over the course of one working session a second renderer was nevertheless built three
times, each time discarded, because a preview was quicker to produce than a correct integration.

The existing visualiser draws 250,174 items at once as a dense field with concentric structure, an
interactive card resolving any item to the source it represents, and a command line. Each
replacement drew 19,251 plain marks with no structure, no interaction and no resolution to source.
No preview could have matched it, because the appearance is produced by the volume of items and by
physics the replacement did not implement.

**Recorded as a working rule:** inspecting the existing artefact costs less than reasoning about it.
The inspection that settled this took one page load and should have happened first.

## Reading a contract from the producer, not the consumer

The output shape was first inferred from how the consumer accessed its fields. The producing tool
states the contract explicitly in its own header:
`{"name","source","attribution","law","stations":[[x,y,name],...],"edges":[[i,j],...]}` — positional
arrays, index-pair edges, and four required top-level fields.

The inferred version used named object fields and would not have rendered. Corrected by reading the
producer. Inferring a schema from a consumer's field access is an assumption, not a measurement.

## Corrections to the placement rule

| correction | reason |
|---|---|
| classification bands removed from position | classification is a property of an item, not a coordinate; placing by class encodes an unmeasured judgement into geometry |
| radius taken from an ordinal, angle from a fixed angular constant | matches the existing visualiser's rule, so position encodes identity and neighbours are related |
| ordinal derived from first appearance in time, not from sorting content identifiers | sorting by content identifier sorts by randomness, so radius carried no information |

Final output: 19,251 items from 41,647 tracked paths across 66 repositories, digest
`e851ae65e486ebf04dbfb4065175e84b7674313b5261213d07d89f40602bea48`, reproducible byte for byte.

## Bounding the historical option

Enumerating every object ever stored in the largest single repository: **17,300 objects,
5,697,731,454 bytes, mean 329,348 bytes.** That mean is the finding. Files of that size are not
authored by hand, so stored history is dominated by regenerated data rather than by written work.

Consequence for any "everything ever written" visualisation: the quantity must be **authored
lines**, summed from per-commit addition counts, not lines present in stored history. Otherwise the
result is a picture of republished data.

## Defect carried forward

Classification thresholds remain miscalibrated: 14,524 of 19,251 items in a single class. Chosen in
advance rather than derived from the observed distribution. No interpretation may be placed on the
classification until corrected.
