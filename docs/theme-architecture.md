# Theme architecture

ThemeJS2 uses four styling layers with intentionally different responsibilities.

## 1. Theme inputs

`--theme-*` is the public, browser-editable configuration of a theme. Brand colors, typography, base radius, container width and similar intentional design choices are defined here.

```css
.theme-osman {
  --theme-primary: #2b94d6;
  --theme-neutral: #6f6f6f;
  --theme-font-family: "Open Sans", sans-serif;
  --theme-radius: .5rem;
  --theme-container-max: 1320px;
}
```

Customer overrides and DevTools experiments should normally change these variables, not Nextrap internals.

## 2. Mapping to Nextrap

The theme maps its public inputs onto Nextrap's `--nt-*` inputs:

```css
--nt-primary: var(--theme-primary);
--nt-neutral: var(--theme-neutral);
--nt-font-family: var(--theme-font-family);
--nt-radius: var(--theme-radius);
--nt-container-max: var(--theme-container-max);
```

`@nextrap/style-base` then derives the mechanical design-system values at runtime in CSS: hover/active colors, surfaces, borders, radius variants and similar tokens.

Do not mirror those derived NT values back into theme variables. For example, there should normally be no `--theme-primary-hover` or `--theme-surface-muted`. They are implementation details derived from the public theme inputs.

Directly overriding `--nt-*` is reserved for debugging Nextrap itself or an intentional low-level escape hatch.

## 3. Additional theme semantics

A small number of additional `--theme-*` variables may describe cross-component design language that is not already represented by a public input.

```css
--theme-corner: var(--theme-radius);
--theme-corner-small: var(--nt-border-radius-sm);
--theme-corner-large: var(--nt-border-radius-xl);
--theme-content-gap: var(--nt-space-4);
--theme-section-gap: var(--nt-space-7);
--theme-border: var(--nt-border-width) solid var(--nt-border);
```

A semantic token should normally have multiple independent consumers. Do not introduce variables such as `--theme-card-header-radius` or `--theme-hero-content-padding`; those duplicate the component structure in a second naming API.

The runtime flow is therefore:

```text
Customer / Browser
      ↓
--theme-* public inputs
      ↓
Theme → Nextrap mapping
      ↓
--nt-* inputs
      ↓
CSS-derived Nextrap tokens
      ↓
Mixins / native defaults / ::part()
```

## 4. Component mixins and parts

Use Nextrap mixins for behavior or variants the component already understands. Use exported `::part()` selectors for precise styling.

```scss
nte-card.style-default {
  @include card.default-style();

  &::part(wrapper) {
    border-radius: var(--theme-corner);
  }
}
```

Parts are preferred over adding component custom properties for every possible visual adjustment: the target is explicit and discoverable and authors do not have to guess variable names.

## Native HTML element defaults

Themes should also define their intended default appearance for native HTML elements. These defaults belong in the theme's `html-elements` layer and should apply to plain semantic markup without requiring utility or component classes.

When Nextrap provides a semantic base class for the same element, that base class owns the styling and the theme default must opt out. Check only the base class, not every utility or variant class. Variants are expected to be used together with their base class.

```scss
:where(table:not(.table)) {
  @include elements.table();
  @include elements.table-striped();
}

:where(ul:not(.list)) {
  // Theme default unordered-list style.
}

:where(ol:not(.list)) {
  // Theme default ordered-list style.
}
```

A plain `<table>` or `<table class="mt-4">` still receives the theme default. A `<table class="table table-striped">` opts into the Nextrap table API because `.table` is present. Likewise, native `ul` and `ol` defaults remain active until `.list` explicitly transfers ownership to the Nextrap list API.

Do not enumerate utility or variant classes in `:not(...)`. Utility classes must remain composable with native defaults, and variants such as table stripes or list styles are subordinate to their semantic base class.

## Customer/project layer

A customer normally changes public theme inputs:

```css
.theme-customer {
  --theme-primary: #005d75;
  --theme-radius: 0;
}
```

The Nextrap mapping and all CSS-derived values follow automatically.

A customer may change an additional theme semantic when the desired behavior intentionally differs from the base input:

```css
.theme-customer {
  --theme-radius: .5rem;
  --theme-corner: 1rem;
}
```

True component-specific exceptions target a part directly:

```css
.theme-customer ntl-hero::part(content) {
  max-width: 60rem;
}
```

## Decision order

1. Change a public `--theme-*` input when the theme design changes.
2. Add or change an additional `--theme-*` semantic only for a repeated cross-component design decision.
3. Use an existing component mixin for a known component variant.
4. Style an exported `::part()` for a precise component adjustment.
5. Add raw customer-specific selectors only for genuine exceptions.
6. Override `--nt-*` directly only as a low-level escape hatch or while debugging Nextrap.

Avoid `!important`; fix cascade ownership or component defaults instead where possible.

## Sass vs CSS

Sass remains responsible for selectors, mixin composition, loops/code generation and conditional bundle structure. CSS custom properties are responsible for runtime values and mechanical derivation. This keeps customer configuration runtime-overridable without turning each component into a large custom-property API.
