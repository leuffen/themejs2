---
name: modify-theme
description: Use when developing or refining reusable Nextstrap themes, including from design references. Output a token-based theme and content demo using existing NTL layouts/NTE elements; exclude site copying and header/footer work unless requested.
---

# Modify Theme

When a reference exists, translate its recurring visual language—hierarchy, palette, typography, surfaces, and rhythm—into Nextstrap tokens and theme-scoped variants. Do not transfer its site data or one-off structure. The result must remain robust with different people, copy lengths, images, and item counts.

## Nextstrap model

| Type | Prefix | Responsibility | Examples |
| --- | --- | --- | --- |
| Layout | `ntl-` | Composes major content regions and controls responsive layout. | `ntl-2col`, `ntl-card-row` |
| Element | `nte-` | Provides reusable content inside layouts or normal content flow. | `nte-card`, form and media elements |

Layouts may compose elements: for example, `ntl-card-row` lays out multiple `nte-card` children. Keep layout behavior in NTL styles and content-element behavior in NTE styles.

### Styling contract

- Never put visual declarations on a bare `ntl-*` selector. Its entry file may use that selector only to load variant files.
- Put every NTL presentation in a named variant such as `&.style-default`, `&.style-header`, or `&.style-testimonial`.
- NTL components select `style-default` automatically when no style is specified. Style the default through `.style-default`; do not add the class to demo markup merely to activate it.
- Add another `style-*` variant only for a generic presentation—not for a client, person, page, or sample content.
- Style NTE content through its documented API or its own generic variant. If the styling depends on an NTL composition, keep it inside that NTL variant and use the child-pairing structure in [references/element-child-structure.md](references/element-child-structure.md).
- Avoid a bare theme-wide NTE override unless the user explicitly wants every instance in that theme to change.

## Customer input and boundaries

Implement a customer addition for the current layout, but express it as a reusable token, composition, option, or generic `style-*` variant that can handle other customers and content. Never name or constrain it around the requesting customer. If the request cannot be generalized without harming the component model, explain that and ask before adding a one-off solution.

| Layer | Contains | Excludes |
| --- | --- | --- |
| Theme | Tokens and generic visual variants | Customer text, assets, fixed item counts, site structure |
| Content layout | NTL composition with NTE content elements | Header, navbar, footer |
| Content | Text, images, links, and repeated data | Theme decisions |
| Site shell | Header, navbar, footer, and their structure | Included only on a separate explicit request |

- When images are unavailable or may be replaced, read [references/placeholder-images.md](references/placeholder-images.md). Use its mandatory portrait fallbacks and choose other entries by content purpose.
- Keep image selection in content or demo data, not in theme styles or component APIs. Seek additional stock candidates only when the curated reference has no suitable category.
- When customer input suggests another presentation, prefer a generic variant usable with different content over content-specific selectors or markup.

## Workflow

1. Inventory the reference's recurring design rules rather than isolated pixel values.
2. Inspect the relevant Style Base, Style Utils, Style Typography, NTL/NTE APIs and the closest existing theme; map every rule to a token, utility, component composition, or generic `style-*` variant.
3. Apply the reuse decision below before introducing any shared capability.
4. Implement the smallest theme-specific layer and verify it through the demo and screenshots.

Prefer a coherent Nextstrap interpretation over pixel-perfect reproduction. Preserve the reference's character while using existing primitives.

## Reuse before extension

Use this order:

1. Existing component and API.
2. Composition of existing layouts, elements, and utilities.
3. Theme-scoped styling through documented tokens, mixins, parts, slots, states, or a generic variant.
4. Generic extension of the owning shared Nextstrap package.
5. New component in the owning shared Nextstrap package.

### Required component plan

Stop before steps 4 or 5. Approval to develop the theme does not approve a new or extended NTL/NTE component.

Present a compact plan for every proposed component and have the user validate it before creating files or implementation. Include:

| Item | Required information |
| --- | --- |
| Type and name | NTL or NTE plus its proposed public prefixed name |
| Purpose | Its single responsibility and role in the current layout |
| Existing options | The closest components or compositions considered and why each is insufficient |
| Reuse | Other customers, content shapes, layouts, or themes that can use the capability |
| Alternatives | At least a small visual compromise and recomposition or extension of an existing component |

Group multiple proposals into one short plan, but cover every component individually. Proceed only after explicit validation of that plan.

Shared component behavior belongs to Nextstrap Layouts for NTL or Nextstrap Elements for NTE, never hidden in a theme. The theme contains only its token values and theme-specific variant styling. Do not add an API solely to reproduce one reference section. If Shadow DOM lacks a required part, slot, or API, ask instead of bypassing encapsulation.

## Theme and token architecture

- Follow the current `theme/osman/` runtime pattern: expose a `theme()` mixin, call `nextrapBase.runtime-theme-scoped()`, then load `_runtime-settings.scss`.
- Store theme-scoped values in `_runtime-settings.scss` using existing semantic `--nt-*` roles. Do not create a parallel token system.
- Register the theme selector in `docs/_src/style.scss`; do not store its token values there.
- Load theme parts with `meta.load-css`. Keep the theme scoped under `:where(.theme-<name>)`.
- Reuse semantic colors, the existing spacing scale, `--nt-content-space`, `--nt-text-gap`, typography, utilities, and component mixins.
- Treat designer pixel values as evidence of relative rhythm. Choose the closest existing spacing token instead of preserving one-off values.
- Do not add custom color, spacing, typography, breakpoint, shadow, or other theme variables without approval.
- For an intentionally dark-only reference, create only the dark token set and select it by default through the existing Style Base scheme API. Do not invent a light palette or custom switch.

## Files and selectors

- Put one class, modifier, or child pairing in each style file and make its filename identify the selector.
- Use `classes/` only for genuinely reusable semantic styles. Do not encode names from the design or demo.
- Do not override generic utilities or unscoped HTML elements when Style Base, Style Utils, or Style Typography can express the result.
- Read [references/element-child-structure.md](references/element-child-structure.md) before adding or restructuring element styles.
- Do not modify `vendor`, `node_modules`, or `workspaces`. Ask before touching `workspaces`, `docs/_includes`, or `docs/_layouts`.

## Demo

- Add one representative Markdown demo under `docs/pages/`; demonstrate components, not the source website.
- Use reduced representative content instead of copying the complete reference.
- Prefer `ntl-2col` for alternating image/text sections and its existing reverse behavior for swapped columns.
- Prefer `ntl-card-row` with `nte-card` children for card groups.
- Use existing NTL/NTE components for other structures where possible.

## Responsive behavior and verification

- Use the `mode="mobile|tablet|desktop"` API from `@trunkjs/responsive`; do not add media queries.
- Put mode rules on the component that owns the `mode` attribute. Order rules as general, mobile, tablet, desktop and omit unused modes.
- Use existing breakpoint and container APIs rather than custom widths.
- Verify palette, hierarchy, rhythm, typography, surfaces, component composition, and responsive behavior with the repository screenshot skill.
- Ignore developer-only preview tools during comparison.
- Before changing more than five files, or when the result needs a new token category or header/footer work, present the proposal and ask.
