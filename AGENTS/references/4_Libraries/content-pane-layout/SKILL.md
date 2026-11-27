---
name: content-pane-layout
description: "Bei jedem Content-Pane-layout-Attribut in ThemeJS2-Markdown, Kramdown oder HTML lesen. Erklärt Indizes, Section-Baum, Selektoren und Schließkontrollen."
---

# Content Pane layout

`layout` places content in the section tree, then replaces the generated
section with the selector after `;`. The replacement receives its children
and layout-derived ID, classes, and attributes. `section-*` attributes move
to the generated section without the prefix.

The `i` index controls nesting:

```text
layout="x"    infer i; create section, then render selector x
layout="3;x"  use explicit i=3
layout="=3;"  append to the existing section at i=3
layout="!;"   keep the element without creating a section
layout="/3;"  close i=3 and deeper; HR only
layout="/;"   close the current HR wrapper; HR only
```

- Headings infer `i` from their level; `h1` and `h2` both use `2`.
- An HR without explicit `i` uses the last fixed `i + 0.5`.
- Prefer inferred `i`; set it explicitly only when the heading tree cannot
  express the boundary.
- Selector syntax: `layout="card-box#id.cls[attr=value]"`.
- Legacy `+i` means `=i`; legacy `-i` means `!i`.

For Markdown, Kramdown, demos, and Jekyll, also use `content-pane-usage`.
For custom elements, slot routing, and nested component layouts, consult the
upstream TrunkJS `content-pane-content-elements` skill.

For inferred/explicit levels and HR controls, read
[ThemeJS2 Markdown layout examples](../content-pane-usage/references/themejs2-markdown-layouts.md).
