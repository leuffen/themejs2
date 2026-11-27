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

Apply the element-by-element checklist in project.md § 2.7 to each reference
and target, including sections below the fold. Explicitly compare transparency,
backgrounds and overlays, button dimensions and padding, clickable areas,
label/icon alignment and consistency between equivalent controls. Inspect live
reference and target elements when these values are unclear; label values
inferred from static designs as estimates. Record unavailable states or content
examples as coverage gaps, not as verified matches.

#### § 3.3 Priorisiertes Backlog und Befunde

Compare each target with its reference and return a compact coverage matrix
by page, viewport and section or element group, with checked detail criteria,
findings and untested or inapplicable cases. Do not stop at overall similarity.
Add `## To-do` with a prioritized backlog of concrete differences. For each
item give the page, viewport, observed vs expected result and acceptance
check. Group differences that have the same cause. Prioritize structural,
responsive and usability defects before cosmetic differences, but retain
transparency, button sizing and other detail discrepancies until resolved.
Separate optional design recommendations from required corrections; do not add
unapproved recommendations to the actionable backlog. Mark read-only verification
pages in the report and keep out-of-scope work out of the edit backlog.
End with the exact heading
`## Project Findings` and verified inspection findings for the checkpoint.
