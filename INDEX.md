# INDEX

Distilled public records from the GlobalGrid2050 working notes. Read [POLICY.md](POLICY.md)
first: it states what is published, what is excluded as a matter of policy, and how each record is
keyed.

`key` is the SHA-256 of the record's **LF normalised content**, so it reproduces on any machine.
`source` is the SHA-256 of the private working note the record was distilled from, so the two can
be matched later by anyone holding both, without the original ever being published.

Every record is checked on every push by `tools/check-policy.mjs`, which fails closed.

| date (UTC) | record | key | source |
|---|---|---|---|
| 2026-09-18T22:55Z | [Verification by key, and what it found](records/20260918T2255Z-verification-by-key.md) | `890cfec48e98fec8...` | `57c3d1365e95a284...` |
| 2026-09-18T23:15Z | [Content deduplication across a 65 repository estate](records/20260918T2315Z-estate-deduplication.md) | `d665a1d637379b52...` | `207862af77e04575...` |
| 2026-09-19T00:20Z | [Rendering a repository estate as content identifiers](records/20260919T0020Z-estate-as-content-identifiers.md) | `06a6d3424a5d61a0...` | `85e9065738e96173...` |
| 2026-09-19T01:15Z | [Reusing an existing renderer instead of building a second one](records/20260919T0115Z-reuse-before-rebuild.md) | `ec7faad5eb30509b...` | `d62b01784a3fa2d5...` |
| 2026-09-19T15:45Z | [Engineering record of a 21 hour work period](records/20260919T1545Z-engineering-record-21-hour-work-period.md) | `f02b75627f3448d6...` | `2a628be8eb387878...` |
| 2026-09-19T22:06Z | [Dots that answer to other dots: a test of whether the display can compute](records/20260919T2206Z-cells-that-compute.md) | `915ed513f0f4a830...` | `f4e173a369d97dfd...` |
| 2026-09-20T17:04Z | [A grid drawn as a map people can travel on, and what a billion local runs did and did not buy](records/20260920T1704Z-a-grid-as-a-map-people-can-travel-on.md) | `0ebc0bef65ec267a...` | `0e0ed1f5b31eec7c...` |

## Full digests

| record | key | source_digest |
|---|---|---|
| `20260918T2255Z-verification-by-key.md` | `890cfec48e98fec80e87c1b4997a2256681de73da414bb47cd9c136e58e77b2f` | `57c3d1365e95a2843b3e3613ea67603a9fa6784dcdfe3f47bf1ced128893bb51` |
| `20260918T2315Z-estate-deduplication.md` | `d665a1d637379b52e11505ac56ab519935312d67fbc94ca8dc9cf443f01cd7aa` | `207862af77e045755118242aba5f0668e606e95610079523aea20daa036e0a6b` |
| `20260919T0020Z-estate-as-content-identifiers.md` | `06a6d3424a5d61a0550ad81661aa52e6e76e71ac8b2ba616c01bb2aca27448be` | `85e9065738e961737672a71330910bfe31402fe296d1541e0953ca7a87d94f28` |
| `20260919T0115Z-reuse-before-rebuild.md` | `ec7faad5eb30509b5f4c1926be940c24f393dd902513af835166d2bf9902fac6` | `d62b01784a3fa2d5c5728bd0fb3337f3f0d7e1567d185768a787780a7716d6c2` |
| `20260919T1545Z-engineering-record-21-hour-work-period.md` | `f02b75627f3448d6ed6e7c2112b26296acda693c345a7345bf405b2d2e49a595` | `2a628be8eb387878278a76fd3f119b582f10fc3eac59d2b5d0492f66db615d96` |
| `20260919T2206Z-cells-that-compute.md` | `915ed513f0f4a8308f71b304b03196f33087d69f605274d6bc5dd32498c0bb08` | `f4e173a369d97dfda6a0cd2681267d1cd17f61fd80d24364cb3e2084d04535be` |
| `20260920T1704Z-a-grid-as-a-map-people-can-travel-on.md` | `0ebc0bef65ec267a6fad935304ac3539b090a9d6a8b97a025e9403a0011ad3b1` | `0e0ed1f5b31eec7c62bc0d438725eccb475dc10a8c625b60639b6e39d0886449` |

## Coverage

The private working notes number 160 documents at the time of this index. Distillation has begun
with the most recent and is incomplete. Not every note will be published: a note without a
measurement a stranger could check does not earn a record.
