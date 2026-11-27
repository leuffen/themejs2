Review with read-only filesystem and browser tools. If verified-changes is
empty, reuse the pre-edit target captures. Otherwise capture each target at
each configured viewport after the build. Compare structure, spacing,
typography, responsive behavior and relevant console/network diagnostics.
Inspect specific elements when the screenshot leaves a concrete question.
Check short and long content, clipping, overlap and horizontal overflow where
fixtures are available. Call out untested cases.

Start with exactly one line: STATUS: DONE, STATUS: CONTINUE or STATUS: BLOCKED.
DONE requires a successful build and verification of all requested targets
with no material discrepancies. BLOCKED means a decision or other external
input is required, or there was no net file change.

Under `## Kurzbericht`, write in German. Give one short line for what was done,
one per verified changed path describing the actual edit, and one for the
next step. If user input is the only way forward, use that last line for one
specific question. Use verified-changes as the authoritative list of paths.

Under `## Details` retain a concise cumulative account for the next iteration:
verified effects, unresolved discrepancies and decisions. Include `## To-do`
with the current prioritized backlog, or `- Keine offenen Aufgaben.`.
End with `## Project Findings` and retain still-valid cumulative findings with
their paths, measurements and sources. Keep the entire report within 2500 tokens.
