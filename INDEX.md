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

## Full digests

| record | key | source_digest |
|---|---|---|
| `20260918T2255Z-verification-by-key.md` | `890cfec48e98fec80e87c1b4997a2256681de73da414bb47cd9c136e58e77b2f` | `57c3d1365e95a2843b3e3613ea67603a9fa6784dcdfe3f47bf1ced128893bb51` |
| `20260918T2315Z-estate-deduplication.md` | `d665a1d637379b52e11505ac56ab519935312d67fbc94ca8dc9cf443f01cd7aa` | `207862af77e045755118242aba5f0668e606e95610079523aea20daa036e0a6b` |
| `20260919T0020Z-estate-as-content-identifiers.md` | `06a6d3424a5d61a0550ad81661aa52e6e76e71ac8b2ba616c01bb2aca27448be` | `85e9065738e961737672a71330910bfe31402fe296d1541e0953ca7a87d94f28` |

## Coverage

The private working notes number 159 documents at the time of this index. Distillation has begun
with the most recent and is incomplete. Not every note will be published: a note without a
measurement a stranger could check does not earn a record.
