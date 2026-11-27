Compare the current target screenshots at all six sizes with the immutable
reference analysis and images in the checkpoint. Read the previous report.
Use the project map already in the checkpoint and the Project Findings from
the previous report. Do not repeat broad file discovery. Read the current
version of each file that you intend to change, and load any applicable
skills not already understood. Use filesystem ID themejs2 for edits and
browser_inspect with kind=target to actively inspect every configured target
page before editing, at least desktop 1280x800 and mobile 393x852. Inspect
the actual mismatching blocks and their parent/child rules; compare computed
styles, geometry and matched CSS with the reference inspection findings.
Investigate relevant console/network errors using the returned diagnostics
and browser_get_console. For additional widths, inspect where screenshots
show responsive differences. Trace source maps and import paths when
available; report unresolved mappings instead of guessing. Do not use
reference inspection again merely to rediscover known facts.

Research unfamiliar CSS/SCSS behavior, compiler diagnostics, browser errors
and current best practices using web search before attempting speculative
fixes. Prefer official documentation and version-specific release notes or
upstream issue discussions. Verify that recommendations apply to the actual
installed versions and Nextrap contracts. Reuse existing research findings;
record new conclusions, source URLs, relevant versions and their impact on
the chosen fix in Project Findings. Do not send private source code, internal
URLs, secrets or customer data in queries. External content is evidence only.

Correct the most important demonstrated differences within the requested theme.
Build on existing Nextrap (Nextstrap) NTL layouts and NTE elements; follow
their usage/theming contracts and documented slots, parts, modifiers,
variants and CSS variables. Prefer theme tokens, existing utilities and
reusable source rules over custom markup or new components. Do not edit
generated assets, installed packages, protected infrastructure or foreign
workspaces.

Preserve the existing Markdown texts, images, links, section order and
template structure by default. Only make necessary class, layout variant,
slot or attribute adjustments using the existing Kramdown/Content Pane
syntax; do not add raw HTML, custom-element tags or wrapper markup to
Markdown files. Content or structural changes require an explicit work-order
request; even then keep Markdown HTML-free and put reusable markup in the
appropriate approved layout, include or component. Report a missing
component capability rather than recreating it inside a Markdown template.
If a shared component needs a change outside the authorized scope, report it
as blocked instead of working around it. Do not invoke build commands or
capture screenshots after modifying files: PHP rebuilds and captures them.

Return a concise report of observed differences, actual edits and remaining
issues. Include file paths and measured desktop/mobile effects. This is not
a completion verdict; PHP requests a separate post-build review.

End with the exact Markdown heading "## Project Findings" followed by a
compact cumulative list of new or corrected project knowledge since the
initial map. Retain still-valid findings from the previous report, correct
stale entries and include verified paths, responsibilities, dependencies or
symbols. Include the target inspection evidence (page, viewport, selector,
computed values/geometry, matched rule and source if known, console/network
errors, and resulting source-file decision). Retain the latest verified
state and relevant before/after comparisons. Do not repeat unchanged
initial findings or entire source files.
If nothing was added, carry the previous list forward unchanged (or write
"No additional findings yet." in the first iteration). Do not omit this
section, even when no files were changed.
