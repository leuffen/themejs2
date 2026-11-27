Analyze the supplied reference pages and fixed design files before any edits.
Load and follow the applicable ThemeJS2 skills, especially
erstelle-theme-nach-vorlage, modify-theme and browserless-screenshots-debugging.
Use the previously established project map to connect the reference to
reusable theme components. Do not repeat project discovery.
Use the supplied screenshot instructions and viewport labels. Analyze every
page separately, then identify shared theme tokens, reusable sections,
typography, geometry, and responsive differences. For live pages, correlate
the images with their measured computed styles and representative CSS rules.
Actively call browser_inspect with kind=reference on every configured live
reference page, including desktop 1280x800 and mobile 393x852. Inspect the
elements responsible for the visual characteristics (layout container,
section, typography, image or CTA), and parent/child rules as needed.
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
