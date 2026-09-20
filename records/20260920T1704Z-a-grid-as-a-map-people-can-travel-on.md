---
record: 20260920T1704Z-a-grid-as-a-map-people-can-travel-on
date: 2026-09-20T17:04Z
source_digest: 0e0ed1f5b31eec7c62bc0d438725eccb475dc10a8c625b60639b6e39d0886449
supersedes: none
---

# A grid drawn as a map people can travel on, and what a billion local runs did and did not buy

## The decision

A drawing engine that had been drawing electrical detail was turned to drawing the electricity network
the way a metro map draws a railway: stations, lines, interchanges, and a ticket from one place to
another. The detailed engineering tools stay behind the map for the engineer. What would falsify the
decision: if a person with no electrical training cannot, in two taps, find a station, see what it
connects to, and read an honest statement of what the map does not know.

## Measurements (each produced by a named local script; no network, no language model in the loop)

- Ticket router: 1,001,329,472 station-to-station routes on a multi-voltage graph of 1,743 stations
  and 1,972 links, at 9.8 million routes a second on 8 low-priority workers; 1,001,331,646 oracle
  cases, 0 failures. Of routed pairs, 92.5% crossed a link with no alternative, and 78% of all
  station pairs had no route. Both figures describe the open-map drawing, not the network.
- Layout learning: 132,733,566 layouts at 1.1 million a second. The score on 50 held-out windows
  fell from 249.5 to 147.5. The first 921,600 layouts reached 148.7; the remaining 131.8 million
  bought 1.2 points. 32 of 59 deeper passes were rolled back by the held-out guard.
- Capacity ranking under declared assumed tables: 5.9 million cases of an enumerated 88 billion,
  8 of 8 oracles pass, power balance to 5 parts in 10 trillion. Results are ranks and bands only.
- Open-map topology at one voltage: 6,227 line spans became 1,246 station-to-station links;
  3,793 km of 14,036 km was dropped, 2,243 km of it at junction vertices that are not stations;
  the component count fell monotonically across a snap sweep from 50 m to 2 km with no plateau.

## Defects found in our own work

1. An index that finds existing code across all our repositories was not consulted before building.
   An existing engineering library of 22 modules, each with a proof, was found only afterwards.
2. A data file whose manifest declared its line ends snapped to stations was reported as snapped
   without being opened. 1,184 of about 12,450 line ends coincide with a station.
3. Snapping line ends only is the wrong method: lines pass station areas without touching the point,
   and tees are not stations. No tolerance is defensible when the sweep has no plateau.
4. Several builders editing copies of one file could not be merged; three of four failures were
   line-ending changes that made whole files read as changed. Small patch files applied one at a
   time by a local script, each behind a syntax check and the library's own tests, merged cleanly.
5. Two of eight independently written checkers were themselves wrong; one could not fail at all,
   yet supplied half the cases in a reported total.

## What the measurements decide

More runs were not the constraint. The layout curve was flat after the first pass; the router
finished a billion in minutes; the limit was the quality of the graph. The next work is topology:
junction vertices as nodes, stations joined to the spans that pass them, duplicate spans removed,
and a zero-removal baseline before any outage study, so that an island in the result is a fact
about the network and not about the drawing.

Open map data carries its attribution and share-alike terms into every derived table.
No warranty is given.
