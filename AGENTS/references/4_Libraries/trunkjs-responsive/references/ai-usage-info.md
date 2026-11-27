# @trunkjs/responsive — AI Usage

Responsive styling is already active. Use existing classes and
`@trunkjs/responsive` breakpoints instead of custom resize logic or one-off
media queries.

## Class syntax

Breakpoint ranges are `[from, to)`:

| Syntax | Active when |
| --- | --- |
| `-md:x` | `< md` |
| `md:x` | `>= md` |
| `md-:x` | `>= md` |
| `md-xl:x` | `>= md && < xl` |
| `md:a.b` | apply both `a` and `b` |
| `base:md:a:xl:b` | `base` below md, `a` from md, `b` from xl |

## Complete example

```html
<div
  class="card -md:d-none md-xl:d-block.shadow xl:d-flex"
  style="width:100%;color:black"
  style-md="width:50%"
  style-xl="width:33%;color:red"
>
  Content
</div>
```

This combines base/multiple classes, breakpoint ranges, and inline styles.

## Runtime arbitrary values

Square-bracket utilities compile in the browser, without build-time extraction
or precompilation.

```html
<div class="width-[100%]:md:width-[50%]:xl:width-[33.333%]"></div>
<p class="md:text-size-[22px]">Content</p>
```

Reuse the existing layout-level `tj-responsive`; do not add page/component
wrappers. Its optional `layer` assigns generated rules to a cascade layer.
Use underscores for spaces: `width-[calc(100%_-_2rem)]`.

Utilities cover sizing, spacing, typography, positioning, selected flex/grid
dimensions, border size/radius, opacity, and z-index. `text-size` aliases
`font-size`. URLs and arbitrary property names are unsupported.

## Agent rule

Arbitrary values are an exception. Apply this order:

1. Reuse Nextrap semantic or utility classes.
2. Add responsive breakpoint syntax where needed.
3. If classes are insufficient, set documented `--nt-*` variables inline or
   through `style-{bp}`; do not invent variables.
4. Only then use `style`/`style-{bp}` for element-specific values.
5. Use bracket utilities only for rare one-off values clearer in class syntax.

For recurring spacing, typography, or layout values, create or request shared
design tokens or utilities, not bracket-based scales.

## Responsive styles

`style-{breakpoint}` declarations merge by property; later breakpoints override
only declared properties.

Default breakpoints: `xs 0`, `sm 576`, `md 768`, `lg 992`, `xl 1200`, `xxl 1400`.

