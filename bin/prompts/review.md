After a build, call `browser_capture` separately for each target URL and
viewport from `capture-plan`. If no files changed, reuse the earlier target
captures when available. Compare against the original reference at each
configured viewport for live pages. Check structure and seaming, geometry and rhythm, typography,
details and responsive robustness. Check console/network diagnostics.
Compare short and long content examples at the applicable configured
viewports. Check whether text wraps or clips, sections overlap, items lose
their alignment, spacing shifts unexpectedly, or horizontal scrolling
appears. Report the page, viewport and content variant for each issue.
If no suitable example is available, mark the case as untested rather than
claiming that the layout is robust.
Use the screenshots and corresponding rendered body to identify affected elements. Call
browser_inspect with kind=target only for unresolved questions about
computed styles or geometry. Inspect one element and viewport per call with
a selector that matches exactly one node; inspect parent and child elements
separately. Read target CSS/SCSS and imports from the current checkout via
read-only filesystem tools, not from browser-loaded stylesheets. If a winning
rule still needs verification, query it in the browser one element and viewport
at a time. Use browser_get_console when investigating errors. Compare
measurements with the reference and pre-edit findings. Only read-only browser
and filesystem inspection and public technical web research are permitted;
do not modify files or initiate a new build.
Research unresolved errors or compatibility questions when necessary and
retain applicable source URLs and conclusions in Project Findings. Verify the existing Nextrap NTL/NTE
composition and that Markdown content/structure remains intact unless the
work order explicitly allowed a change; no new raw HTML in Markdown.
Do not claim success on unverified viewports or missing design references.

Return a compact cumulative working report, at most 2500 tokens. Its first
line must be exactly one of STATUS: DONE, STATUS: CONTINUE, STATUS: BLOCKED.
DONE requires that all requested target pages have been visually verified
at the available capture sizes, no material discrepancies remain and the build succeeded.
BLOCKED indicates an issue requiring user intervention or external changes.
Include measured findings, changes from this and prior iterations, remaining
discrepancies, decisions that must be retained, and the next action.

Before Project Findings, add the exact heading "## To-do" and the full
current list of open tasks as short, prioritized bullets. Update the edit
report's list based on the review: add new tasks and remove completed or
obsolete ones. Use `- Keine offenen Aufgaben.` if nothing remains.

End with the exact Markdown heading "## Project Findings" and the cumulative
findings from the edit report. Preserve every still-valid new finding since
the initial project map, including verified paths and responsibilities;
correct or remove stale ones only when supported by the current evidence.
Record the post-build inspection with page, viewport, selector, actual
computed values, geometry, relevant rule/source and console/network errors.
Distinguish measured improvements from unresolved issues.
Do not repeat the initial map. If there are no additional findings, use
"No additional findings yet." Never omit this section.
