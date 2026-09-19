---
record: 20260919T1545Z-engineering-record-21-hour-work-period
date: 2026-09-19T15:45Z
source_digest: 2a628be8eb387878278a76fd3f119b582f10fc3eac59d2b5d0492f66db615d96
supersedes: none
---

# Engineering record of a 21 hour work period

| | |
|---|---|
| Period | 2026-09-18T18:30Z to 2026-09-19T15:45Z |
| Scope | GlobalGrid2050 estate: line register (Kuiper), conductor sections, capacity data, unattended operation |
| Status | Issued for information. Not a design. Provided as is, without warranty of any kind. |
| Author | AI assistant, under direction of the estate owner. Public edition; private matters are excluded by design. |

## 1. Summary

1.1 A register of every line in every commit of the estate was built, counted three ways and rendered: 37,929,255,811 lines, 9,940 commits, 70 repositories.
1.2 Seven numbered proofs were published between 12:55Z and 13:55Z, each checked by a script that did not build it. Publication is now by timer, one per twenty minutes at most, no assistant in the loop.
1.3 Three scheduled jobs now run on free hosted runners with the local machine switched off.
1.4 A conductor drawing defect was found by the owner, confirmed against the standard, corrected and brought under test.
1.5 A licence question on 132 kV underground cable route data was researched and closed: the data may not be drawn or redistributed.
1.6 The cost of assistant steps was measured, stated as a law and placed under an executable guard.

## 2. Line register (Kuiper)

2.1 Placement law, applied at every zoom: radius = square root of key; angle = key x golden angle. The law is invertible, so the number of keys in any ring is obtained by arithmetic, not by search.
2.2 Keys are issued in commit time order. Intervals with no commits are issued keys also (600 per second, capped at 14 days). Dark rings on the display are therefore elapsed time.
2.3 Verification: any key resolves to repository, commit, path, line and text through git alone. Several thousand keys were resolved; none failed. Three independent counts agree. Addresses of existing keys did not move when 20 new commits arrived.
2.4 Defects raised and closed in the period: lost graphics context reported as complete; a rendering throttle reported as a machine limit (measured capacity was higher by three orders of magnitude); an invented empty centre; self test labels contradicting the geometry they tested.

## 3. Conductor sections

3.1 Defect: the 6 mm² class 5 conductor was drawn with overlapping wires and a ragged outline. The page self test passed, because no test measured overlap or roundness.
3.2 Cause: a law for distributing points was used to place discs.
3.3 Requirement: BS EN 50618:2014 requires tin coated class 5 conductors (5.1.1, 5.1.2), a practically circular finished cable (5.3.2) and ovality within 15 % (7.3.3). For 1 x 6 mm²: insulation 0.7 mm, sheath 0.8 mm, overall diameter upper limit 7.4 mm (Table 1). Clauses and single values are cited; the standard is not reproduced.
3.4 Correction: a full ring of wires is seated on a round wall; the remainder are displaced until none overlap. Deterministic. Result for 84 wires: closest approach 1.00 wire diameters (was 0.81), rim 30 of 30 seated (was 3), ovality 0.5 % (was 4.6 %). Compaction of the 400 mm² conductor is drawn as keystone sections that conserve metal area exactly.
3.5 New tests, failing closed: no overlap; all wires inside the wall; rim fully seated; ovality within 15 %; compaction conserves metal; compacted layers close at the stated diameter.
3.6 Finding: a nominal conductor size is a resistance, not an area. IEC 60228 sets maximum resistance and, for class 5, maximum wire diameter. At 17.241 ohm mm²/km the least copper meeting 5.09, 3.39 and 1.95 ohm/km is 3.39, 5.09 and 8.84 mm², that is 85 to 88 % of nominal. Published conductor diameters for those sizes give a fill of 0.72 to 0.74 at that metal and 0.84 to 0.85 at full nominal; bunched round wires settle near 0.75. Copper purity accounts for 1 to 2 %.
3.7 Finding: an uncompacted concentric conductor of k layers has fill (3k²+3k+1)/(2k+1)², which falls towards 3/4 and not below it.
3.8 Open: whole cable section (insulation, sheath); conductor diameter as an input where one is published; 400 mm² at 1500 V DC and 0.6/1 kV AC; 1600 mm² 132 kV. Thicknesses without a public clause are to be marked CANDIDATE.

## 4. Capacity data

4.1 Three phase power = 1.732 x voltage x current. At 132 kV: 229 MVA at 1000 A, 274 MVA at 1200 A, 300 MVA at 1312 A. This converts current to power. It is not a cable rating. A rating requires IEC 60287 for the route.
4.2 Estimate, marked CANDIDATE: one buried circuit of 1600 mm² aluminium 132 kV XLPE cable carries 230 to 280 MVA continuously, 300 MVA in favourable conditions. Charging current reduces the capacity of long routes.
4.3 Signal: new 132 kV cable is announced in public records (planning, streetworks, consents, operator development plans) before capacity maps change.
4.4 Repository Ventusltd/132kV records daily, from the operator's public catalogue, the identifier, licence, record count and modified date of every dataset mentioning 132 kV. No records are copied. Opening values: underground cables 2,437 records; overhead lines 683; poles and towers 7,313.

## 5. Licence determination

5.1 Question: may a public map or public repository draw or hold the 132 kV underground cable routes published under the operator's shared data licence for connections?
5.2 Method: the licence was obtained and read in full; each finding was checked by three independent verifiers instructed to refute it.
5.3 Determination: NO. The licence grants a revocable, non-transferable right to access, view and store for a stated purpose (2.1). It forbids redistribution in whole or part (3.1.6), derived data (3.1.4) and any machine learning or artificial intelligence use (3.1.7).
5.4 Permitted: publication of catalogue metadata; linking to the operator's page; use of the operator's CC BY 4.0 datasets (overhead lines, poles and towers, circuit operational data) with the operator's required attribution line: operator name, dataset name, dataset URL, date of last update.
5.5 Control: geometry from any shared data licence dataset is not downloaded, stored, drawn, simplified, aggregated or passed to any model. Record: Ventusltd/132kV, stones/.

## 6. Unattended operation

| Job | Repository | Interval | First result |
|---|---|---|---|
| Estate harvest | kuiper-belt | 6 h | 59 public repositories, 0 missed, 46,225,159 lines standing in 41,551 files |
| Time stone | time-stone | 1 h | 67 public repositories and 4 live pages watched; append only ledger |
| Catalogue watch | 132kV | 24 h | 24 datasets recorded |
| Checking engineer | kuiper-belt | each push | privacy, sums, syntax, key order: pass |

All jobs fail closed, write nothing when a source does not answer, and commit only on change. None requires an assistant, payment or the local machine.

## 7. Assistant steps as the scarce resource

7.1 Measured on one long conversation: the cost of an assistant step rises with the length of the conversation, because the whole conversation is read again on every step. A helper process running beside a long conversation roughly doubled the rate. Waiting cost nothing. Local scripts, local models and hosted runners on public repositories cost nothing at the margin. The figures are excluded from this record by policy.
7.2 Law L25 (Ventusltd/law): steps cost, waiting does not. An executable guard takes two readings, a time limit and a reserve; it exits 1 when the projection falls below the reserve and exits 2 when it cannot measure.
7.3 Controls adopted: work from a short orders file, not from a long conversation; bundle commands; restart context every four hours; one additional agent at most; anything done twice becomes a script on a free machine.

## 8. Disclosure control

8.1 A guard holding digests, not names, of identifiers that are not public runs before every publication and in continuous integration. One match and nothing is written.
8.2 Excluded from all public output: private repository names; customer, tender, price and contract detail; standards text beyond clause and single value; third party trademarks, product names and images; personal data.

## 9. Operating arrangement from 15:30Z

Three sessions, one orders file. L1 sets scope and reviews about every three hours. L2 answers analysis questions in writing. L3 builds and tests iterations. A Python timer publishes the oldest iteration that scored full marks and was tested after its last edit. If none qualifies, nothing is published. There are no deadlines: a failed iteration is recorded as a result.

## 10. Open items

10.1 Licence files for time-stone and 132kV: owner decision.
10.2 Proofs 5, 9 and 10 of the earlier series: publication not confirmed.
10.3 Self test `selftest=new` does not complete headless.
10.4 Cable table row count: 225 parsed against 239 expected; to be reconciled.
10.5 Law L8 to use the metal coated class 5 resistance for solar cable.
