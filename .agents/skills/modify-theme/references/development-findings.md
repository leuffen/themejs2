# Development and CI findings

Use this file as a temporary knowledge base for non-obvious errors and verified solutions found during local development or CI. It is not the permanent rules source: mature findings must be promoted into `SKILL.md` or the relevant technical reference.

## Usage

- Read relevant `verified` findings before implementation, build troubleshooting, or CI diagnosis.
- Record a finding when the cause and solution are reusable beyond one accidental local state.
- Do not record simple typos, transient service outages, missing personal credentials, or unverified guesses.
- Treat only `verified` entries as actionable. A `candidate` documents an observation that still needs proof.

## Entry format

```markdown
## FINDING-YYYY-MM-DD-short-name

- Status: candidate | verified | promoted | obsolete
- Context: local | CI | both
- Applies to: affected theme, package, component, command, or workflow
- Trigger: minimal conditions that reproduce the problem
- Symptom: exact error or observable failure
- Root cause: confirmed technical cause
- Solution: smallest verified fix or workaround
- Verification: command, CI run, screenshot, or other evidence
- Rule candidate: concise rule that would prevent recurrence
- Promoted to: rule file and section, once promoted
```

Keep error text, commands, selectors, paths, API names, and technical explanations in English. Include links to CI runs or logs when available, but never copy secrets or credentials.

## Promotion into rules

Promote a finding when its cause and solution are verified and it is recurring, broadly applicable, or costly enough to prevent proactively.

1. Add the smallest decision-changing rule to the appropriate destination:
   - shared workflow or scope → `SKILL.md`;
   - SCSS, selectors, responsive behavior, or verification → `theme-file-contract.md`;
   - parent/child file placement → `element-child-structure.md`;
   - header, navbar, or footer behavior → `header-footer.md`.
2. Avoid copying the full incident into the rule. Preserve only the general prevention or required action.
3. Set the finding to `promoted` and link `Promoted to` to the authoritative rule.
4. Keep the promoted entry as evidence; the destination rule becomes the source of truth.

## Findings

No confirmed findings have been recorded yet.
