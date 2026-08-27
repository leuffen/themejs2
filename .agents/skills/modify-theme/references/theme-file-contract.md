# Theme file contract

Read this reference before creating or editing theme SCSS. It defines repository invariants; design-specific decisions remain in the theme workflow.

## Theme structure

```text
theme/<theme-name>.scss
theme/<theme-name>/
├── _theme.scss
├── _runtime-settings.scss
├── elements/
│   └── <element>/<element>.scss
├── classes/       # reusable semantic classes, only when needed
├── tools/         # theme tools, only when needed
├── variant/       # only when justified
└── html-elements/ # only when justified
```

- Follow an existing root entry file for `theme/<theme-name>.scss`; do not invent another export pattern.
- Do not create optional folders preemptively or change the theme structure without user approval.
- `_theme.scss` owns the single `theme()` entry mixin, runtime initialization, root defaults, and `meta.load-css` calls. Define no other mixins under `theme/**`.
- Keep component and variant declarations out of `_theme.scss`. If shared main-content margins are required there, limit them to `ntl-2col`, `ntl-card-row`, and `ntl-card-grid` using `var(--nt-content-space)`; put every other component rule in its partial.
- Keep all output scoped through the consuming `:where(.theme-<theme-name>)` selector. Never emit global theme CSS.

## Variants, selectors, and classes

- Put one class, modifier, or child pairing in each style file; the filename must identify its selector.
- Put each `style-*`, `with-*`, and simple modifier such as `reverse` in its own file.
- An element may have only one `style-*` class. Do not use `variant-*`.
- `with-*` modifiers must remain combinable with `style-default`.
- Never place default visual declarations on a bare NTL selector; use `.style-default`.
- Before adding a class, classify it:
  - component structure, part, slot, state, modifier, or bound child pairing → `elements/**`;
  - reusable semantic presentation → `classes/**`;
  - utility-like behavior → use an existing utility or propose a shared utility change; do not define it in an element file.
- Do not use client-, person-, page-, or demo-specific names.
- Do not override bare `p`, `a`, headings, lists, images, `.btn`, or other utilities. A Kramdown child with a generic class may be styled through a theme-scoped parent/child pairing or reusable semantic class.
- Use existing utilities or `--nt-*` variables for markup-level color and spacing; do not embed one-off design values.
- Never insert authored content with CSS `content`.
- Do not add `padding-top` to a default component unless explicitly requested.

Read [element-child-structure.md](element-child-structure.md) for entry files, parent/child placement, and mode ordering.

## Inspect before styling

- Read the relevant component's `.ai-usage-info.md`, examples, public mixins, parts, slots, and states before changing its theme styles.
- If a shared mixin improvement would replace more than five lines of theme CSS, stop and propose the generic mixin change before writing the workaround.
- Do not bypass missing Shadow DOM parts or slots; request the shared API change through the component-plan workflow.

## Responsive contract

- Do not add media queries.
- NTL components expose `mode="mobile|tablet|desktop"`; put mode rules on the component that owns that attribute.
- Children do not receive `mode` automatically. In a card row, target the child from `ntl-card-row[mode="..."]`, not `nte-card[mode="..."]`.
- Order declarations as general, mobile, tablet, desktop and omit unused modes.
- Use `--breakpoints: sm|md|lg|xl|xxl`; the default is `xl`.
- Use `--nt-container-width` for the content container instead of a custom width system.

## Images and icons

- Keep image choice in content; use [placeholder-images.md](placeholder-images.md) when no image is supplied.
- Use the component's image API first. Otherwise use `object-fit: cover` and, when needed, `aspect-ratio`.
- Replace missing reference logos or icons with neutral placeholders unless the user supplies assets.
- Bootstrap Icons may replace unspecified custom icons. Do not reproduce a custom icon set unless explicitly requested.

## Visual verification

- Use the `browser-screenshot-with-puppeteer` skill.
- Inspect both the rendered page and its authored/HTML structure before deciding that CSS alone is sufficient.
- Compare hierarchy, rhythm, palette, typography, surfaces, responsive composition, and robustness with changed text lengths, images, and item counts.
- Ignore developer-only preview navbar, footer, and tools.
- Verify the result after implementation. If a material reference difference remains, describe it and ask whether to accept it or expand the scope.

