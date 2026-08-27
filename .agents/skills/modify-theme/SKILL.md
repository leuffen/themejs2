---
name: modify-theme
description: Create or modify scoped Nextstrap CSS themes from design references while reusing existing tokens and components. Header, footer, and new components require separate explicit approval.
---

# Modify Theme

Use this skill for creating or modifying themes under `theme/`. Translate a design reference into the Nextstrap system; do not rebuild the referenced website.

## Scope first

The default scope is the visual system and content area:

- Map the reference's color spectrum, typography, surfaces, borders, radii, and spacing rhythm to existing Nextstrap tokens.
- Style existing content components and create a representative demo under `docs/pages/`.
- Use representative placeholder content. Do not copy the complete website or all of its content.
- Do not customize header, navbar, footer, or their includes unless the user explicitly requests that work. Keep the demo's default shell or omit those areas when they are irrelevant.
- Before changing more than five files, present the intended files and ask for approval.

## Workflow

1. Inspect the complete design reference and identify its recurring visual rules, not isolated pixel values.
2. Inspect `@nextrap/style-base`, `@nextrap/style-utils`, `@nextrap/style-typography`, the relevant `@nextrap/layout` elements, their examples, mixins, parts, and `.ai-usage-info.md` files.
3. Inspect the closest existing theme and demo. Prefer the current runtime-token pattern used by `theme/osman/`; do not copy Osman-specific design decisions.
4. Produce an internal mapping from each design need to an existing token, utility, component API, or theme-scoped variant. Choose the closest existing spacing step instead of preserving arbitrary designer pixel values.
5. Implement the smallest theme-specific layer. Verify it with a content-focused demo and screenshots.

Visual fidelity is a constraint, but conceptual consistency wins over pixel-perfect duplication. Preserve the reference's hierarchy, rhythm, contrast, and character while staying inside the Nextstrap component and token model.

## Component decision gate

Use this order for every required design pattern:

1. Existing component with its default API.
2. Existing component composed with other existing components or utilities.
3. Theme-scoped styling through documented mixins, parts, slots, states, or a generic modifier.
4. Extension of an existing component.
5. New component.

Never implement step 4 or 5 without asking first. The request must be short and include:

- the missing capability;
- why the closest existing component or composition is insufficient;
- the proposed extension or component;
- at least two alternatives, normally accepting a small visual compromise and extending/recomposing an existing component.

Do not propose a new component merely to reproduce one section from the reference. If a required Shadow DOM `part`, slot, or API is missing, ask the user to add or approve it rather than working around the encapsulation.

## Theme entry and runtime settings

- Every theme lives in `theme/<theme-name>/` and exposes a root entry `theme/<theme-name>.scss` following an existing theme.
- `_theme.scss` provides a `theme()` mixin that is consumed inside `:where(.theme-<theme-name>)`.
- Start from `@nextrap/style-base`: call `nextrapBase.runtime-theme-scoped()` and then load `./_runtime-settings.scss`.
- Put theme-scoped Nextstrap token overrides in `_runtime-settings.scss`. Use existing `--nt-*` tokens; do not invent a parallel theme token system.
- `docs/_src/style.scss` imports and registers the theme selector. It is not the source of theme-specific token values.
- Load theme parts only with `@include meta.load-css(...)`. Keep direct rules in `_theme.scss` limited to essential theme-root setup and shared content-layout spacing.
- Do not create unscoped global styles or theme mixins beyond the entry `theme()` mixin.

For a design that intentionally has only a dark appearance, create only the dark token set and make dark the demo default through the existing Style Base scheme API. Do not invent a light palette. First verify the current scheme-selector API and follow it instead of adding a custom switch.

## Token and style reuse

- Reuse existing semantic color roles (`primary`, surfaces, text, muted text, borders, states) and adjust their values to the reference's spectrum.
- Reuse the existing spacing scale, `--nt-content-space`, `--nt-text-gap`, component gap variables, and utilities. Designer pixel values are evidence for relative rhythm, not permission for one-off values.
- Reuse Style Base, Style Utils, Style Typography, Style Button, and layout mixins before adding CSS declarations.
- Do not add custom color, spacing, typography, breakpoint, or shadow variables without explicit approval.
- Avoid magic numbers. If component geometry cannot be expressed with existing tokens or mixin parameters, explain the gap and ask.
- Do not override utility classes such as `.btn`, spacing, text, or flex utilities unless explicitly approved.
- Do not redefine base text elements (`a`, `p`, `h1`-`h6`, lists, blockquotes) when typography can express the result.
- For image treatments use existing component APIs; otherwise prefer `object-fit: cover` and an existing aspect-ratio token/API.

## Demo requirements

- Every new theme gets at least one representative Markdown demo under `docs/pages/`.
- The demo demonstrates the theme and component composition, not a copied production page.
- For alternating content sections, prefer existing `ntl-2col` variants such as `reverse` rather than section-specific markup or classes.
- For groups of cards, prefer `ntl-card-row` or the closest existing card layout.
- Use existing Nextstrap elements and utilities for all other content structures where possible.
- Header and footer remain the shared default and are not evaluated as part of a content-theming task unless separately requested.
- Demos must remain robust with different text lengths, images, and item counts; use component layout behavior rather than content-specific dimensions.

## Folder structure

```text
theme/<theme-name>/
├── _theme.scss
├── _runtime-settings.scss
├── elements/
│   └── <element>/<element>.scss
├── classes/       # reusable semantic classes, only when necessary
├── tools/         # additional theme tools, only when necessary
├── variant/       # only when necessary
└── html-elements/ # only when explicitly justified
```

- Do not create empty folders preemptively.
- Each element folder has exactly one entry file: `elements/<element>/<element>.scss`.
- Entry files contain only `@use "sass:meta";` and `@include meta.load-css(...)` calls.
- Do not change global repository structure, `vendor`, `node_modules`, or `workspaces`. Ask before touching `workspaces`, `docs/_includes`, or `docs/_layouts`.
- Read `references/element-child-structure.md` before adding or restructuring element styles.

## Element and child structure

- Put one class, modifier, or child pairing in each style file; its filename must identify the styled target.
- Parent files style only the parent, its parts, slots, states, and layout:
  - `_style-default.scss` -> `&.style-default`
  - `_with-*.scss` -> `&.with-*`
  - `_reverse.scss` -> `&.reverse`
- Put child styles in `elements/<parent>/<child>/**`.
  - `<child>/_in-style-default.scss` -> `&.style-default { <child> { ... } }`
- Use `classes/` only for genuinely reusable semantic styles. Do not create design-specific names tied to a single reference section.
- An element may have only one `style-*` class. `with-*` modifiers must remain combinable with `style-default`. Do not use `variant-*` class names.
- Never change an element's unqualified default selector when the project convention expects `element.style-default`.

## Responsive behavior

- Do not add media queries. `ntl-*` elements expose `mode="mobile|tablet|desktop"` through `@trunkjs/responsive`.
- Put mode rules on the element that owns the `mode` attribute. Children do not automatically receive it.
- Order rules as general, mobile, tablet, desktop; omit unused modes.
- Use the existing `--breakpoints` and `--nt-container-width` APIs rather than custom breakpoints or widths.

## Verification

- Use the repository's browser screenshot skill for visual checks.
- Compare hierarchy, rhythm, palette, typography, surfaces, and responsive composition against the reference.
- Ignore developer-only preview tools. Do not use that instruction to ignore real header/footer differences when those areas were explicitly commissioned.
- If a remaining difference requires a new component/API, a new token category, header/footer work, or more than five changed files, stop and ask with the relevant alternatives.

