Compare the current target screenshots at the configured viewport sizes with the immutable
reference analysis and images in the checkpoint. Read the previous report.
Use the project map already in the checkpoint and the Project Findings from
the previous report. Do not repeat broad file discovery. Read the current
version of each file that you intend to change, and load any applicable
skills not already understood. Use filesystem ID themejs2 for edits.
Before editing, call `browser_capture` separately for each configured target
URL and viewport from `capture-plan`. Use the screenshots and rendered body to
identify affected elements. Read source files from the local checkout. Call
browser_inspect with kind=target only when a specific question remains.
Inspect one element and viewport per call using a selector that matches exactly one
node. Inspect parent or child elements in separate calls, never with a grouped
selector. Compare computed styles and geometry with the reference findings.
Read the target CSS/SCSS source and imports from the current checkout using
the local filesystem tools, not from browser-loaded stylesheets. Use browser
rules only if needed to resolve the winning declaration, sequentially for
one element and viewport at a time.
Investigate relevant console/network errors using the returned diagnostics
and browser_get_console. Inspect additional widths only for specific responsive questions. Trace source maps and import paths when
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
capture screenshots after modifying files: PHP rebuilds before the review requests its own captures.

Check content robustness for each changed layout: identify existing short
and long content examples in the allowed demos or configured pages. Include
few and many repeated items where relevant. Do not alter customer content
or add unapproved demo pages to create variations. Tell the review which
examples are available and which cases still lack a test fixture.

Return a concise report of observed differences, actual edits and remaining
issues. Include file paths and measured desktop/mobile effects. This is not
a completion verdict; PHP requests a separate post-build review.

Before Project Findings, add the exact heading "## To-do". Give the full
current list of open tasks as short, prioritized bullets. Recheck the saved
list: add newly discovered tasks and remove completed or obsolete ones. Use
`- Keine offenen Aufgaben.` if nothing remains. Do not repeat unchanged
background information in the task list.

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
