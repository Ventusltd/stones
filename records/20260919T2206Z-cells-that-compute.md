---
record: 20260919T2206Z-cells-that-compute
date: 2026-09-19T22:06Z
source_digest: f4e173a369d97dfda6a0cd2681267d1cd17f61fd80d24364cb3e2084d04535be
supersedes: none
---

# Dots that answer to other dots: a test of whether the display can compute

## The claim under test

The project draws every numbered line of its code as one dot, placed by a law of the dot's permanent
key, so that no position is stored. During a working session on 19 September 2026 the following claim
was made about that population: every dot can be programmed like a transistor. At the time, the only
thing a program could do to a dot was light it, darken it or move it. That is a lamp, not a gate. The
claim was therefore put to a test that could fail.

## The apparatus

A cell is one dot with a permanent key and no other property. It is dark or lit. A program gives each
cell exactly one rule, and there are two kinds of rule:

- an **input cell** is lit when the person using it says so;
- a **gate cell** is lit unless both of the two cells it answers to were lit one tick earlier.

The second rule is the gate known as NAND, from which every other logic gate can be built. Its
essential property is that one cell's output drives another cell's gate. The one tick delay gives a
change a finite speed through the cells.

Nothing is stored per cell. The state of a cell at a tick is a pure function of its key, the program
and the record of the inputs, worked out backwards from that tick to tick nought, when every gate cell
is dark. The same question gives the same answer on any machine.

Every check reads the lit or dark state of the output cells. None looks at how the program is wired.

## What was measured

| test | cells | result |
|---|---|---|
| half adder, all four input rows | 8 (2 input, 6 gate) | four of four rows correct; identical with the cache switched off |
| the same check against a planted fault (carry rewired) | 8 | fault caught |
| four bit adder, every pair from 0 to 15 | 69 (9 input, 60 gate) | 256 of 256 sums correct; slowest settled at tick 16 |
| propagation: both inputs switched on at tick 10 | 8 | carry first lit at tick 12, never sooner |
| latch: reset, a three tick set pulse, then idle | 4 (2 input, 2 gate) | still lit 26 ticks after the pulse ended; dark again after a later reset pulse |
| the same latch, never reset | 4 | does not settle: lit, dark, lit, dark without end |
| cost of the latch with the cache off | 4 | 25 questions asked for tick 12, 49 for tick 24 |

Command: `node apparatus/cells.test.mjs` in the experiments repository. The figures are written by that
run to `apparatus/cells.result.json`.

## What it shows

1. Cells run by this rule compute. Composition alone was enough to go from one and one to any two
   numbers up to fifteen; nothing was added except more cells obeying the same rule.
2. A change moves through the cells at one cell per tick. What a cell shows is the past of the cells
   it answers to.
3. A working view held earlier the same evening was wrong and is corrected here. It said that memory
   would need one stored bit per dot. The latch remembers with nothing stored in either cell: the
   memory is the history of the inputs, which belongs to the program. What is paid is time, because
   the work grows with the tick asked about. A page may keep a frame to save that time; a frame that
   can be thrown away and rebuilt from the program is a cache, not a stored bit.
4. A memory that is not first put into a known state does not settle. This is recorded because it was
   observed, and because silicon behaves the same way.

## What it does not show

It does not show that any published page of this project computes anything. The pages display and
index; the project's engineering calculations are done by its calculation engine. This record
establishes what cells run by the stated rule can do, in a test anyone can run. The wording agreed
for public pages follows from that: "programmable" describes the display today; "computes" may be
used only of a surface on which this rule is actually running and this test passes.

## How to show it is wrong

Find one row of the half adder's truth table, or one of the 256 sums, that the cells get wrong. Find
two machines that give different states for the same key, program and tick. Or show the latch
forgetting with no reset given. Any one of these ends the claim.

## Where it is written down

- The experiments: entries 16 to 19 of the project's experiment log (repository `faraday`).
- The laws: L26, a dot that answers to other dots is a gate, and gates compute; L27, memory is the
  history of the inputs and what it costs is time (repository `law`).

No warranty is given.
