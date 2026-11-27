# Referenzanalyse

## Regeln

### § 3 Referenzanalyse

#### § 3.1 Referenzen und Baselines

Analyze each configured reference separately before editing. Use
`browser_capture` once per live URL and configured viewport from capture-plan.
Use supplied images or PDFs directly. Capture each local target at each
configured viewport as the baseline. Derive criteria from the work order
when a page has no supplied reference.

#### § 3.2 Komponentenabgleich und Messungen

Map the sections, layout, typography and spacing to existing NTL/NTE
composition and theme tokens. Use `browser_inspect` with kind=reference when
a specific computed value, geometry or rule is unclear. Use a selector
matching a single element per call. Record measured values, viewport, source
location when available and relevant console/network diagnostics. Distinguish
estimates from measurements and note missing design sizes.

#### § 3.3 Priorisiertes Backlog und Befunde

Compare each target with its reference and return a brief section matrix.
Add `## To-do` with a prioritized backlog of concrete differences. For each
item give the page, viewport, observed vs expected result and acceptance
check. Group differences that have the same cause. Prioritize structure and
responsive defects before spacing and details. Mark read-only verification
pages in the report and keep out-of-scope work out of the edit backlog.
End with the exact heading
`## Project Findings` and verified inspection findings for the checkpoint.
