# Theme architecture

ThemeJS2 uses four styling layers with intentionally different responsibilities.

## 1. Nextrap base tokens

`--nt-*` describes the design scale and common semantics. New themes should use the runtime token graph from `@nextrap/style-base` so mechanically derived values remain live CSS values.

Typical inputs are brand colors, neutral color, typography, base radius and container width. Hover/active colors, surfaces, borders and radius variants are derived by CSS.

## 2. Theme semantics

`--theme-*` describes only cross-component design language. Keep this set deliberately small.

Examples:

```css
--theme-corner: var(--nt-radius);
--theme-corner-small: var(--nt-border-radius-sm);
--theme-corner-large: var(--nt-border-radius-xl);
--theme-content-gap: var(--nt-space-4);
--theme-section-gap: var(--nt-space-7);
--theme-border: var(--nt-border-width) solid var(--nt-border);
```

A semantic token should normally have multiple independent consumers. Do not introduce variables such as `--theme-card-header-radius` or `--theme-hero-content-padding`; those duplicate the component structure in a second naming API.

## 3. Component mixins and parts

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

## 4. Customer/project layer

Customer themes should primarily override base inputs or the small semantic layer:

```css
.theme-customer-square {
  --nt-primary: #005d75;
  --theme-corner: 0;
  --theme-corner-small: 0;
  --theme-corner-large: 0;
}
```

True exceptions can target a part directly:

```css
.theme-customer-square ntl-hero::part(content) {
  max-width: 60rem;
}
```

## Decision order

1. Change a Nextrap base input when the design scale changes.
2. Change a `--theme-*` semantic when a cross-component design decision changes.
3. Use an existing component mixin for a known component variant.
4. Style an exported `::part()` for a precise component adjustment.
5. Add raw customer-specific selectors only for genuine exceptions.

Avoid `!important`; fix cascade ownership or component defaults instead where possible.

## Sass vs CSS

Sass remains responsible for selectors, mixin composition, loops/code generation and conditional bundle structure. CSS custom properties are responsible for runtime values and mechanical derivation. This keeps customer configuration runtime-overridable without turning each component into a large custom-property API.
