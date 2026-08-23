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

The theme maps its public inputs onto Nextrap's `--nt-*` inputs. `@nextrap/style-base` then derives mechanical design-system values at runtime in CSS. Do not mirror derived NT values back into theme variables. Direct `--nt-*` overrides are a low-level escape hatch.

## 3. Additional theme semantics

A small number of additional `--theme-*` variables may describe repeated cross-component design language. Do not duplicate component structure in variable names.

## 4. Component styles

Each component gets exactly one directory below `elements/`. That directory contains its entry file and one partial per visual style/variant.

```text
elements/
  ntl-card-row/
    ntl-card-row.scss
    _style-default.scss
    _style-noborder.scss
    _style-ribbon.scss
    _style-ribbon-top.scss

  ntl-hero/
    ntl-hero.scss
    _style-default.scss
```

Do not create nested directories for child components such as `ntl-card-row/nte-card/`. A style partial describes the complete visual composition of that parent variant, including the configuration of nested components that is specific to that variant.

For example:

```scss
&.style-default {
  @include cardRow.default-style(...);

  &::part(container) {
    ...
  }

  &[mode="mobile"] nte-card {
    --image-aspect-ratio: 1;
  }

  &[mode="desktop"] nte-card {
    --image-aspect-ratio: 16/9;
  }
}
```

This keeps all rules needed to understand `ntl-card-row.style-default` in one file. If a nested `nte-card` is styled differently for `style-ribbon`, those rules belong in `_style-ribbon.scss`, not in a second child-component hierarchy.

The component entry file should only load the available styles:

```scss
ntl-card-row {
  @include meta.load-css("./_style-default.scss");
  @include meta.load-css("./_style-noborder.scss");
  @include meta.load-css("./_style-ribbon.scss");
}
```

Use Nextrap mixins for behavior or variants the component already understands. Use exported `::part()` selectors for precise styling. Component-specific custom properties should remain limited; do not introduce variables merely to avoid a clear `::part()` rule.

### Ownership rule

A style partial owns everything that is visually necessary for that variant:

- the parent component mixins and parts;
- responsive/mode-specific rules;
- nested child-component configuration;
- slot/content rules that only make sense in that variant.

A child gets its own top-level component directory only when it has an independent theme style outside the parent composition.

## Native HTML element defaults

Themes should define their intended default appearance for native HTML elements in the `html-elements` layer. When Nextrap provides a semantic base class, check only that base class to opt out.

```scss
:where(table:not(.table)) {
  @include elements.table();
  @include elements.table-striped();
}

:where(ul:not(.list)) {
  // Theme default unordered-list style.
}
```

Utility classes remain composable with these defaults.

## Customer/project layer

A customer normally changes public theme inputs:

```css
.theme-customer {
  --theme-primary: #005d75;
  --theme-radius: 0;
}
```

True component-specific exceptions target a part directly.

## Decision order

1. Change a public `--theme-*` input when the theme design changes.
2. Add/change a theme semantic only for a repeated cross-component decision.
3. Use an existing component mixin for a known component variant.
4. Style an exported `::part()` for a precise component adjustment.
5. Keep child-component rules in the parent style partial when they belong to that composition.
6. Add raw customer-specific selectors only for genuine exceptions.
7. Override `--nt-*` directly only as a low-level escape hatch.

Avoid `!important`; fix cascade ownership or component defaults instead where possible.

## Sass vs CSS

Sass remains responsible for selectors, mixin composition, loops/code generation and conditional bundle structure. CSS custom properties are responsible for runtime values and mechanical derivation.
