# Publication policy for this repository

This repository holds **distilled records**: short, neutral summaries of internal working notes kept
during the development of the GlobalGrid2050 project. It exists so that the method and the
measurements can be checked by anyone, without publishing the working notes themselves.

## What is published

- Measurements, with the command or script that produced them named.
- Decisions of engineering substance, and what would falsify them.
- Defects found in our own work, and how they were found.
- Dates, in UTC, with the offset carried wherever a local time is given.

## What is not published

Records are distilled into neutral professional language. The following are excluded as a matter of
policy, not case by case judgement:

1. **Personal, family, spiritual or philosophical material.** Private guides stay private.
2. **Commercial, financial and contractual detail**, including budgets, rates, spend, and the terms
   or circumstances of any bid or engagement.
3. **Adverse characterisation of any named organisation or individual.** Where a third party's
   product, performance or conduct is discussed internally, it does not appear here. Positive
   attribution of contribution is permitted where the contributor is credited by name in material
   already public.
4. **Comparative claims against named competitors or products.**
5. **Political, economic or ideological framing.** This project is argued on physics, engineering
   and measurement.
6. **Operational and security detail**: host names, file paths, account identifiers, key
   fingerprints, tokens, internal addresses, and anything describing how the working machines are
   reached.
7. **Unpublished third party data**, and anything whose licence does not permit redistribution.

Where a fact must be stated but its subject cannot be named, the record says so plainly rather than
implying more than it can support.

## How a record is keyed

Each record carries two digests:

- **`key`**, the SHA-256 of the published record itself. It names the record permanently.
- **`source_digest`**, the SHA-256 of the private working note it was distilled from.

The source digest lets the original be matched to its published summary later, by anyone holding
both, without the original ever being published. Confirmation without disclosure.

A record is never edited in place. A correction is a new record naming the one it supersedes.

## Verification

Recompute any record's key with `sha256sum <file>` and compare it to `INDEX.md`. If they differ,
the index is wrong and should be reported, not trusted.

## Enforcement

This policy is intended to be executable rather than aspirational. The intended mechanism is a
CVAA vaccine: a named failure mode plus an automated check that fails the build if a published
record contains an excluded class of content, or if any record's key does not match its content.
Until that check exists, this policy is enforced by review, and that limitation is stated here
rather than implied away.

No warranty is given.
