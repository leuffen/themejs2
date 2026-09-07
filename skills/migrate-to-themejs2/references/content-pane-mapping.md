# Content Pane and element migration

This reference is distilled from the current `@trunkjs/content-pane` skills in
`trunkjs/trunkjs-monorepo`. When the installed version differs, its public
README, package-local skills, exports, and tests are authoritative.

## Content Pane rules

- Wrap authored page output in `<tj-content-pane>` through ThemeJS2's current
  `default.html` or `website.html`; do not retain `<joda-content>`.
- Keep the heading hierarchy. `h1` and `h2` infer index `2`, `h3` infers `3`,
  and subsequent heading levels follow their number.
- Put each Kramdown attribute line directly below its heading, horizontal rule,
  or other target block without a blank line.
- Prefer inferred indexes. Use `layout="3;ntl-2col.style-default"` only when the
  heading tree cannot express the boundary.
- Current controls are `=i` to append to an existing section, `!i` to keep an
  element without creating a section, and `/i` to close a horizontal-rule
  wrapper. Normalize legacy `+i` and `-i` to `=i` and `!i` during migration.
- A selector may include tag, id, classes, and attributes, for example
  `layout="ntl-2col#services.style-default.reverse"`.
- Sub-layout selectors such as `.aside` belong to the content of their owning
  component and depend on that component's slot-routing contract.

## Legacy patterns and current targets

These are starting points observed in the ThemeJS1-old structure and the
ThemeJS2-new baseline. Match the intended DOM, slots, content
order, and responsive behavior before applying a target; do not perform global
text replacement.

| Legacy pattern | ThemeJS2 / Content Pane target | Verification |
|---|---|---|
| `<joda-content>` | `<tj-content-pane>` from the current page layout | Confirm every page body is inside exactly one intended pane. |
| `<joda-split>` and `layout="use: ..."` | Heading/HR-owned Content Pane `layout="[i;]selector"` | Confirm the same source blocks enter the same visual section and slots. |
| `use: #hero-max` | `ntl-hero.style-default.hero-box` | Verify heading, image/background, box content, and explicit index. |
| `use: #hero-ribbon` | a verified `ntl-card-row.style-ribbon*` composition | Choose `style-ribbon` or `style-ribbon-top` from the actual design; preserve card order. |
| `use: #sec-card-2col` | `ntl-2col.style-default`, optionally `.reverse` | Verify column assignment and mobile order. |
| `use: #sec-multi-card; cols:N` | a verified `ntl-card-row` style | Preserve all cards; confirm column/count behavior rather than copying `cols`. |
| `use: accordion()` | `nte-accordion.style-default` | Verify each legacy title/body pair becomes one accordion item. |
| `use: #sec-testimonial-ribbon` | a verified `ntl-card-row.style-ribbon*` composition | Preserve quotation, attribution, media, and ordering. |
| `use: #sec-card-feature` | a verified `ntl-2col` or card composition | Select from the actual source structure; no automatic mapping is safe. |
| `use: #cta-base` | a verified ThemeJS2 CTA composition, commonly `ntl-2col...with-bg-primary` | Preserve CTA wording, target, and prominence. |
| `use: #cta-form` | `tj-form` with verified nested layout, commonly `ntl-2col...with-justify-top` | Preserve fields, labels, consent text, destinations, and submission behavior. |
| `<liweco-news>` | current announcements element, presently `<leuffen-announcements>` | Preserve feed/source configuration and visible fallback content. |
| `<liweco-collapse-openhour-table>` | current `el/openhours.html` output in a verified layout | Preserve every opening-hours value and accessibility semantics. |
| `<liweco-vacation-modal>` | current ThemeJS2 vacation element, presently `<leuffen-vacation-modal>` | Verify the installed package and data contract before renaming. |

## Element integration

Use the current ThemeJS2 entrypoint and declared dependencies so custom elements
are registered before Content Pane applies layout selectors. Reuse published
`nte-*`, `ntl-*`, and `tj-*` elements; do not recreate their markup as legacy
includes or add parallel components. For nested layouts, verify slot routing,
named slots, `.aside`/`.header`/`.footer` selectors, and responsive order in the
rendered DOM.

Structural conversion may change tags and attributes, but never the authored
text or data they present.
