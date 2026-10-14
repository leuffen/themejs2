---
name: content-pane-usage
description: Bei Markdown-Seiten und Content-Pane-Inhalten in ThemeJS2 lesen; erklärt Abschnittsstruktur, Kramdown-Attribute und text-block-Shortcuts.
---

# Content Pane Usage

Use this skill for Markdown authors and normal Content Pane consumers. If
`@trunkjs/content-pane` is installed, assume Markdown in demos, website content,
CMS templates, and Jekyll is interpreted by Content Pane unless the repository
explicitly defines another renderer or opts out.

`<tj-content-pane>` converts flat heading-based output into a section tree.
Preserve the heading hierarchy and attach Kramdown attributes directly to their
block without a blank line.

Whenever an existing or proposed `layout` attribute is involved, also use `content-pane-layout` for its transformation, selector, and `i`-index semantics.

For development of custom elements that route sections into slots, consult the upstream TrunkJS `content-pane-content-elements` skill; this packaged skill covers website authoring.

## Basic usage

```html
<tj-content-pane>
  <h2 layout="page-section#products.wide">Products</h2>
  <h3>Product A</h3>
</tj-content-pane>
```

In ThemeJS2, the customer `docs/_layouts/default.html` already uses
`pre-parser="text-block"`. Preserve that wrapper when authoring trusted `#[...]` shortcuts.
For other consumers the pre-parser can be replaced or disabled through the `pre-parser` attribute
when a caller needs a different parser configuration:

```html
<tj-content-pane pre-parser="text-block">
  <p>#[nte-input.field name="email" required]</p>
  <p>#[img.hero src="/hero.jpg" alt="Hero image"]</p>
  <p>#[div.notice role="status" > <strong>Saved</strong>]</p>
</tj-content-pane>
```

Each `#[...]` shortcut must occupy one line and must start with a tag name. The selector prefix supports `#id` and `.class`; normal space-separated HTML attributes may follow it. `>` starts optional inner HTML. Native void elements such as `img` and `input` must not receive content, while custom elements are created as normal paired DOM elements.

Malformed shortcuts are left unchanged and reported as warnings so Content Pane arrangement can continue. Only enable raw inner HTML for trusted CMS content; do not pass untrusted user input through the text-block pre-parser.

`TextBlockPreParser` and `ContentPanePreParser` are public exports for programmatic use and future pre-parser implementations.

For heading-owned layouts, headingless HR containers, Demo Viewer wrappers,
Jekyll, selectors, and closing controls, read
[Best-practice examples](references/best-practices.md).
