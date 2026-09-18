# INDEX

Distilled public records from the GlobalGrid2050 working notes. Read [POLICY.md](POLICY.md) first:
it states what is published, what is excluded as a matter of policy, and how each record is keyed.

`key` is the SHA-256 of the record file. `source` is the SHA-256 of the private working note it was
distilled from, so the two can be matched later by anyone holding both, without the original ever
being published.

Verify any row with `sha256sum <file>`. If a key does not match its file, this index is wrong and
should be reported rather than trusted.

| date (UTC) | record | key | source |
|---|---|---|---|
| 2026-09-18T22:55Z | [Verification by key, and what it found](records\20260918T2255Z-verification-by-key.md) | `890cfec48e98fec8...` | `57c3d1365e95a284...` |
| 2026-09-18T23:15Z | [Content deduplication across a 65 repository estate](records\20260918T2315Z-estate-deduplication.md) | `d665a1d637379b52...` | `207862af77e04575...` |

## Full digests

| record | key | source_digest |
|---|---|---|
| `20260918T2255Z-verification-by-key.md` | `890cfec48e98fec80e87c1b4997a2256681de73da414bb47cd9c136e58e77b2f` | `57c3d1365e95a2843b3e3613ea67603a9fa6784dcdfe3f47bf1ced128893bb51` |
| `20260918T2315Z-estate-deduplication.md` | `d665a1d637379b52e11505ac56ab519935312d67fbc94ca8dc9cf443f01cd7aa` | `207862af77e045755118242aba5f0668e606e95610079523aea20daa036e0a6b` |

## Coverage

The private working notes number 159 documents at the time of this index. Distillation has begun
with the most recent and is incomplete. The backlog is stated here rather than implied away, and
this index will report the count as it changes.
