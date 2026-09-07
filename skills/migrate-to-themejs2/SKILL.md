---
name: migrate-to-themejs2
description: Migrate ThemeJS1 and legacy Jekyll websites to ThemeJS2 while preserving authored content verbatim and converting layouts, includes, and TrunkJS Content Pane markup. Use for upgrades of existing ThemeJS1-based website repositories.
---

# Migrate to ThemeJS2

Use the current `leuffen/themejs2/_root` as the target baseline. Treat
`dermatthes/leu-web-scheche-k30-v2` as the legacy example and
`dermatthes/leu-web-osman2` as a migrated example, not as templates to copy
wholesale. Current ThemeJS2 and installed package contracts take precedence
over either example.

## Migration contract

1. Read the target repository's `AGENTS.md` and `SKILLS.md`, if present, and
   inventory every source route, frontmatter field, data value, authored text,
   include, layout, widget, link, and original asset before changing files.
2. Start from the current ThemeJS2 `_root` structure. Do not retrofit the
   ThemeJS1 layout chain, Webpack build, generated assets, or Joda elements.
3. Preserve authored content verbatim and in the same order. Do not rewrite,
   summarize, translate, correct spelling, change punctuation, alter metadata
   values, retarget links, or silently drop content. Changes are limited to
   paths, frontmatter layout names, Liquid/include wiring, Kramdown attributes,
   structural wrappers, and component markup required by ThemeJS2.
4. Account for every source file in a migration ledger with its target path and
   disposition: copied, structurally converted, replaced by the ThemeJS2
   baseline, regenerated, or intentionally omitted with explicit approval.
5. Use [the file mapping](references/file-mapping.md) for project files,
   includes, and layouts. Use [the Content Pane mapping](references/content-pane-mapping.md)
   whenever content contains `layout`, Joda elements, legacy widgets, or
   ThemeJS2 content elements.
6. Stop and ask when no verified ThemeJS2 equivalent exists or a proposed
   conversion could change visible text, meaning, URLs, metadata, legal
   content, form behavior, or externally loaded data.

## Verification

- Compare source and target inventories and confirm that every authored text
  block, heading, list item, table cell, link target, media reference, metadata
  value, and data value is present exactly once.
- Review the content diff separately from structural markup; only the permitted
  structural changes above may differ.
- Run the repository-prescribed Vite and Jekyll checks, including
  `npm run build` where available. Generated `docs/assets/dist` files must come
  from the successful ThemeJS2 build, never from ThemeJS1.
- Render representative routes for every layout family and compare visible text
  and order, headings, links, media, metadata, navigation, includes, forms, and
  responsive behavior. Check the console for Content Pane or custom-element
  errors.

