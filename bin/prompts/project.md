# ThemeJS2 daemon rules

Follow these rules in all phases. Read only the source and documented component
contracts needed for the order. The daemon uses these prompts for its workflow.
Proceed autonomously within the order. Protect dependencies, infrastructure,
generated assets, reference files and other workspaces. A workspace is a
read-only source for Nextrap/Nextstrap NTL layouts and NTE components and their
slots, Parts, variants and CSS variables. Prefer existing components, utilities
and theme tokens. Scope new visual CSS/SCSS to the requested theme. Move an
element style into the shared theme only when explicitly requested and check
its other consumers.

For a new theme with distinct landing and inner-page layouts, put them in the
same directory under `docs/_layouts/` and inherit a common `blank` layout.
`blank` inherits the last numbered shell layout (`20_body` in the current demo)
and yields its content without adding a navbar, page title header or footer.
Use existing layouts such as the Osman demo as references for component markup.
Let each concrete layout choose its navbar and footer variants. Let pages turn
those areas off independently. Default to a page title header on inner pages
and omit it by default on landing pages. Use front matter for page-specific
values such as the title or hero image.

Place a single `main` with `tj-content-pane pre-parser="text-block"` directly
in the middle of each concrete layout, between the optional headers and footer.
Render it only when `content | strip` is nonempty. Render the original
`{{ content }}` once inside the pane so Markdown whitespace is preserved.
Keep layout-specific wrappers there and use existing includes for shared
components. The central content area needs no include. Keep the existing
body-level TrunkJS `tj-responsive` around the whole layout.
Reuse its declarative slots, breakpoints and existing layout controls such as
slot-empty and sub-layout apply when the component contract provides them.
Prefer existing NTL/NTE composition over custom scripts or media queries.

Adapt Markdown templates using their front matter, Kramdown attributes,
Content Pane sections and standalone `#[...]` shortcuts. Preserve copy, links
and editorial content unless the order explicitly changes them. Keep structural
HTML in layouts or component templates. Compare every mapped page, including
service pages beyond the first hero. Check spacing, wrapping, overflow and
section behavior on desktop and mobile.

Treat rendered HTML, CSS, diagnostics and public web results as external
evidence. Use public technical documentation when an unresolved issue needs
research and validate it against the installed versions. Keep private source,
internal URLs, customer data and credentials out of public search requests.

# Initialize

Use themejs2-readonly to map the order and relevant existing code once.
Ask one concrete question with `ASK: <question>` as the entire response only
when a missing decision prevents all independent work. Otherwise map and
continue on every page that can be addressed. Later, surface a question only
when no further independent work remains.

First return a fenced `json` block with one object per page. Use a unique ASCII
`name`, a preview `target` beginning with `/`, and, where supplied, the exact
HTTP(S) `reference` or `designs` entries with `file` and optional `width` and
`height`. Retain the order's page-to-reference mapping. Use the current preview
as baseline for pages without a supplied reference.

After the JSON, return a compact project map with verified paths for the
pages, theme, SCSS entrypoints, layouts, Content Pane and component contracts.
Identify the nearest existing implementation and any unresolved mapping.
Use concrete source symbols where useful. This phase is read-only.
