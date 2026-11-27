---
name: content-pane-usage
description: Bei Markdown-Seiten und Content-Pane-Inhalten in ThemeJS2 lesen; erklärt Abschnittsstruktur, Kramdown-Attribute und text-block-Shortcuts.
---

# Content Pane Usage

Use this skill when authoring Markdown or consuming Content Pane. With
`@trunkjs/content-pane` installed, treat demos, website content, CMS templates,
and Jekyll Markdown as Content Pane input unless the repository opts out or
specifies another renderer.

`<tj-content-pane>` converts flat heading-based output into a section tree.
Preserve the heading hierarchy and attach Kramdown attributes directly to their
block without a blank line.

For any `layout` attribute, also read `content-pane-layout` for transformation,
selector, and `i`-index semantics. For custom elements routing sections into
slots, consult the upstream TrunkJS `content-pane-content-elements` skill;
this skill covers website authoring.

## Bestehende Markdown-Dateien unverändert strukturieren

Bei Text-/Kontextänderungen keine Layout-Transformation ausführen.
Heading-Marker, Trenner, Kramdown-Attribute samt Position, Section-Grenzen und
`#[...]`-Zeilen exakt erhalten. Shortcut-Syntax, Tags, Selectors, Klassen und
Attribute nicht ändern, als Markdown-Link deuten oder in HTML umschreiben.
Nur vorgesehenen sichtbaren Text bearbeiten. Neue oder duplizierte Blöcke
brauchen einen ausdrücklichen Auftrag und intakte Originalsyntax.

Prüfe den Diff und korrigiere unbeauftragte Strukturänderungen. Regeln für
neue oder migrierte Seiten erlauben keinen Umbau bestehender Seiten.

## Basic usage

```html
<tj-content-pane>
  <h2 layout="page-section#products.wide">Products</h2>
  <h3>Product A</h3>
</tj-content-pane>
```

The customer `docs/_layouts/default.html` already uses
`pre-parser="text-block"`; preserve that wrapper for trusted `#[...]` shortcuts.
Other consumers may replace or disable the parser via `pre-parser`:

```html
<tj-content-pane pre-parser="text-block">
  <p>#[nte-input.field name="email" required]</p>
  <p>#[img.hero src="/hero.jpg" alt="Hero image"]</p>
  <p>#[div.notice role="status" > <strong>Saved</strong>]</p>
</tj-content-pane>
```

Each `#[...]` occupies one line and starts with a tag, optionally followed by
`#id`, `.class`, and space-separated HTML attributes. `>` starts inner HTML.
Void elements (`img`, `input`) take no content; custom elements are paired.

Malformed shortcuts remain unchanged with a warning; arrangement continues.
Use raw inner HTML only for trusted CMS content, never untrusted user input.
`TextBlockPreParser` and `ContentPanePreParser` are public exports for
programmatic use and new pre-parser implementations.

For heading/HR layouts, Demo Viewer, Jekyll, selectors, and closing controls:
[Best-practice examples](references/best-practices.md).

Für Kramdown, HR-Sections, explizite Indizes und `text-block`-Shortcuts:
[ThemeJS2 Markdown und Layout](references/themejs2-markdown-layouts.md).
