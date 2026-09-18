---
record: 20260918T2255Z-verification-by-key
date: 2026-09-18T22:55Z
source_digest: 57c3d1365e95a2843b3e3613ea67603a9fa6784dcdfe3f47bf1ced128893bb51
supersedes: none
---

# Verification by key, and what it found

## Summary

Over one working day, four factual errors and one latent build defect were found in our own
material by a single method: following every claim to the artefact that settles it, and treating any
claim without one as a candidate rather than a fact.

## The rule adopted

A statement accompanied by a cryptographic key, meaning a commit identifier, a tree hash or a
SHA-256 digest, is a fact: anyone can recompute it on any machine and must obtain the same answer.
A statement without one is a candidate and is written as such. Model-generated text is always a
candidate until a key confirms it. Every time is recorded with its UTC offset. A check that examines
nothing fails rather than passes.

## What the rule found

**A latent validation failure.** Three exact-commit validation workflows and one reachability check
failed at 03:03Z on 2026-09-18. The cause was a file inside a released version that had drifted from
its frozen parent: the checker compared SHA-256 digests and reported
`e82fd469…` against an expected `bc9aff1e…`. The drift had been introduced three days earlier by an
automated re-pinning change and remained undetected because nothing had pushed that path in the
interval. The defect is open at the time of writing.

**A discrepancy between narrative and automated reporting.** Internal progress notes recorded at
03:43Z that nothing was failing, forty minutes after the four failures above. The notes were written
from observation; the gates were written from digests. Only the digests were checkable.

**Four transcription errors in a public-facing document**, each corrected with its source attached:

1. An energy conversion factor of 11.63 was described as applying to barrels of oil equivalent. It
   applies to million tonnes of oil equivalent.
2. A projected figure for solar as a share of global electricity demand had been conflated with a
   figure for installed solar capacity. They are different quantities that share a number.
3. A capacity target had been attributed to the wrong originating body. It is the conclusion of the
   third Terawatt Workshop, Germany, May 2022, as reported in trade press on 1 July 2023.
4. A national primary energy figure was quoted without its reporting year. It is 141 million tonnes
   of oil equivalent for 2019, which is 1,644 TWh at 11.63 TWh per Mtoe.

None of the four were errors of knowledge. All four were unkeyed transcription in a document whose
author knew each underlying fact.

## Redundancy across two hosts

The repository estate was paired onto a second independent hosting provider, authenticated by key
rather than by session so that the process runs unattended.

A commit identifier is a Merkle root over the whole tree, so two hosts reporting the same commit
hold byte-identical contents by construction. Per-file comparison across hosts was therefore
rejected as a check that cannot fail. What a second host does provide is availability and a witness
against history rewriting, which content addressing alone does not cover.

First full pairing run, 2026-09-18: **65 repositories, 52 matched, 11 divergent, 2 not evaluated.**
Key-level certification against an index of 128,369 keys: **95,956 certified (74.75 per cent)**,
below the 95 per cent threshold, so the tool reported and declined to assert entanglement.

**A defect in our own tool was identified by its own output.** The pairing tool pushed the local
working copy rather than the authoritative remote, so where a local copy lagged it propagated that
staleness and then correctly reported the divergence it had just created. Corrected to fetch and
push the remote reference.

## Reconciliation rule

Where two records disagree, the difference is settled by pinned evidence alone, never by recency,
seniority or plausibility. Four verdicts are used: honoured, overreached, not evaluated, disclosed.
A claim grants what it states and not what follows from it by implication. Items that are not
evaluated are listed rather than counted.

## Status

Open at the time of writing: the frozen-file validation failure; re-running the corrected pairing
tool; and three repositories requiring human judgement rather than automation.
