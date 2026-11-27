Analyze the supplied reference pages and fixed design files before any edits.
Load and follow the applicable ThemeJS2 skills, especially
erstelle-theme-nach-vorlage, modify-theme and browserless-screenshots-debugging.
If no external or file reference was provided, derive the criteria from the
work order and use the first pre-change target captures as the baseline.
Use the previously established project map to connect the reference to
reusable theme components. Do not repeat project discovery.
Use the supplied screenshot instructions and viewport labels. Analyze every
page separately, then identify shared theme tokens, reusable sections,
typography, geometry, and responsive differences. For live pages, correlate
screenshots and the rendered body structure. Use `browser_capture` with the
live reference URL and one viewport from `capture-plan` per call. Request each
configured size separately. Use the body to identify elements and read local
project sources where applicable.
Call browser_inspect with kind=reference only when an unresolved question
requires computed styles, geometry or a winning rule. Inspect one element
and viewport per call with a selector that matches exactly one node. Query parents, children and any necessary rules sequentially, not
with grouped selectors. Use local sources from the current checkout when
available; for external references, use browser rules only as needed to
explain the measured appearance.
Use the console and network diagnostics returned by inspection and call
browser_get_console when investigating errors. Record actual computed
values, box geometry, matching selectors, source/line or source map when
available, responsive changes and relevant errors. Do not invent missing
source locations. For design-file-only references, explicitly note that
live DOM/CSS inspection is unavailable.

Map the reference to existing Nextrap NTL layouts and NTE elements, their
slots, parts, modifiers and theme tokens. Do not copy the original website's
content, HTML or framework. Distinguish measured facts from estimates and
report missing design sizes. Return a compact reference analysis including
the section matrix and target mapping. End with the exact heading
"## Project Findings" and a compact list of verified reference inspection
findings with page, viewport, selector and relevant values/rules/errors.
These findings are persisted and become part of the initial checkpoint.
Do not edit files or capture additional unconfigured pages.
