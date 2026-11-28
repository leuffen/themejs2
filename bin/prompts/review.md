# Review

## Regeln

### § 4 Review

#### § 4.1 Vorschau und Prüfumfang

Review with read-only filesystem and browser tools. If verified-changes is
empty, reuse the pre-edit target captures. Otherwise open each target with
`browser_open` at each configured width and height after the build, then call
`browser_screenshot`. The build closes the previous browser session; query new
nodeIds before inspecting elements. Compare structure, spacing, typography,
responsive behavior and relevant `browser_get_console` diagnostics.
Inspect specific elements when the screenshot leaves a concrete question.
Check short and long content, clipping, overlap and horizontal overflow where
fixtures are available. Call out untested cases.

Repeat the element-by-element checklist in project.md § 2.7 for the affected
sections and equivalent controls across mapped pages. Compare before/after
captures and reference evidence at the same viewport. Verify transparency and
contrast on actual backgrounds, button dimensions, padding and clickable areas,
label/icon alignment, surface details and responsive fit. Resolve concrete
uncertainties with targeted `browser_get_computed_styles` and
`browser_inspect_node` measurements for nodes from `browser_query_selector`;
a successful build or an overall visual match is not evidence that these
details are correct.
Check affected shared consumers for regressions. Do not claim interaction or
keyboard verification when the available tools cannot exercise those states.
Use bounded element captures for sections below the fold as described in
project.md § 2.8. Retain unavailable lazy-loaded content and touch states as
coverage gaps.

#### § 4.2 Status und Abschlusskriterien

Start with exactly one line: STATUS: DONE, STATUS: CONTINUE or STATUS: BLOCKED.
DONE requires a successful build and verification of all requested targets
with no material discrepancies. All applicable detail criteria must be
accounted for in the coverage matrix; unresolved required detail checks remain
open even when structure and the overall impression match. Optional design
recommendations alone do not prevent DONE. A required check that cannot be
performed needs an explicit blocker or decision, not an assumed pass.
BLOCKED means a decision or other external input is required, or there was no
net file change.

#### § 4.3 Kurzbericht

Under `## Kurzbericht`, write in German. Give one short line for what was done,
one per verified changed path describing the actual edit, and one for the
next step. If user input is the only way forward, use that last line for one
specific question. Use verified-changes as the authoritative list of paths.

#### § 4.4 Details, Backlog und Befunde

Under `## Details` retain a concise cumulative account for the next iteration:
verified effects, unresolved discrepancies and decisions. Retain the compact
page/viewport/element coverage matrix with checked criteria and untested or
inapplicable cases. Distinguish required corrections from optional
recommendations. Include `## To-do` with the current prioritized backlog, or
`- Keine offenen Aufgaben.`.
End with `## Project Findings` and retain still-valid cumulative findings with
their paths, measurements and sources. Keep the entire report within 2500 tokens.
