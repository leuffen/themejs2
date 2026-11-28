# Iteration

## Regeln

### § 1 Iteration

#### § 1.1 Arbeitsstand und Vorher-Aufnahmen

Work from the reference checkpoint, previous report and previous backlog. The
backlog is working data. Read the current source before editing. Capture each
target/viewport affected by the selected backlog items before editing on
resumed or later iterations. Obey baseline-status and reuse the initialization
baseline for the first fresh iteration. Open the configured URL and viewport
with `browser_open` before `browser_screenshot`. For unresolved CSS or geometry
questions, locate an element with `browser_query_selector`, read the needed
`properties` with `browser_get_computed_styles`, and use `browser_inspect_node`
for geometry and source locations. Confirm final values before attributing
matched rules to local sources and record the evidence.

#### § 1.2 Auswahl und Umsetzung

Select a coherent set of the highest-priority actionable backlog items and
make the edits with filesystem ID themejs2. Address
all mapped pages over the run and keep working on independent issues before
asking a question. Check available short and long content examples and flag
missing coverage. Apply the detail checklist in project.md § 2.7 to the
selected elements and affected equivalents, including transparency, button
geometry, label/icon alignment and relevant responsive states. Use targeted
`browser_get_computed_styles` and `browser_inspect_node` measurements when
screenshots leave these values unclear. Follow project.md § 2.8 for bounded
queries and section captures; keep unverified lazy-loaded or interaction states
visible in the coverage matrix.
Check shared consumers before editing a token or rule; ask before implementing
changes with unresolved side effects and continue independent work.
After structural fixes, work through the remaining actionable detail findings;
do not drop them because the overall page looks similar. Keep optional design
recommendations separate from approved corrections. The host builds changed
files before the separate review.

#### § 1.3 Iterationsbericht

Report the exact paths edited, what changed in each, the observed differences
and what remains. Carry forward the compact page/viewport/element coverage
matrix, updating checked criteria and retaining untested cases for review.
For resolved items, state the acceptance check the post-build review must
verify; do not claim post-build success before that review.
Include `## To-do` with the full prioritized backlog.
End with `## Project Findings` and the compact cumulative findings since the
initial map, including page, viewport, selector, measured styles and relevant
source or diagnostics. Retain still-valid findings and update stale entries.
