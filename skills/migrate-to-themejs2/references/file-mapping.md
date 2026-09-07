# ThemeJS1 to ThemeJS2 file mapping

Use this as a classification guide, not as permission to overwrite current
ThemeJS2 files. In ThemeJS2, `_root` is the source of truth for the reusable
project structure and public include names.

## Project and content files

| ThemeJS1 source | ThemeJS2 target | Handling |
|---|---|---|
| `package.json`, `package-lock.json` | current `_root/package.json` plus a fresh lockfile | Use ThemeJS2 dependencies and scripts; merge only project identity and verified project-specific dependencies. |
| `webpack.config.js`, legacy `src/index*.ts` | `_root/vite.config.ts`, `_root/docs/_src/*` | Replace with the ThemeJS2 Vite pipeline; re-add only confirmed project entrypoint behavior. |
| `composer.json` | project `composer.json` | Preserve required Jekyll/PHP tooling while keeping the ThemeJS2 project baseline. |
| `docs/_config.yml` | `_root/docs/_config.yml` | Merge collections, defaults, languages, and permalink rules without changing existing public URLs. |
| `docs/_data/*` | `docs/_data/*` | Preserve all values verbatim; adapt keys only where the current ThemeJS2 include contract requires it. |
| authored `docs/**/*.md` and `.html` | equivalent route below `docs/` | Copy prose and metadata verbatim; change only path/frontmatter/layout/component wiring. Preserve permalinks when paths change. |
| original files in `docs/assets/` | `docs/assets/` | Copy originals byte-for-byte and keep referenced paths stable or update every reference without changing the asset. |
| `docs/assets/dist/*`, `docs/_includes/dist/*` | ThemeJS2 build output | Do not copy. Regenerate only with a successful ThemeJS2 build. |
| legacy SCSS and variables | ThemeJS2 `_src` and theme configuration | Transfer verified brand inputs to ThemeJS2 variables; do not carry obsolete component/layout CSS forward blindly. |

Locale suffixes and directory splits in the ThemeJS2-new structure are project choices,
not universal rules. A rename such as `index.de.md` to `index.md` requires a
verified route/permalink match.

## Includes

| ThemeJS1 include | ThemeJS2 disposition | Evidence/notes |
|---|---|---|
| `do/remove-line-breaks.html` | Keep the current ThemeJS2 file | Byte-identical in the legacy and migrated examples and in ThemeJS2 `_root`. |
| `do/trans.html` | Keep the current ThemeJS2 file | Byte-identical across the checked baselines. |
| `el/tag-link-list.html` | Keep the current ThemeJS2 file | Byte-identical across the checked baselines. |
| `do/link.html` | Keep the current ThemeJS2 implementation | Public name is stable; implementation differs, so do not overwrite it with ThemeJS1. |
| `el/address.html` | Keep ThemeJS2 and migrate data keys | Public name is stable; current Liquid and styling differ. Preserve the source address values. |
| `el/navbar.html` | Keep ThemeJS2 and migrate navigation metadata | Public name is stable; ThemeJS2 renders current navigation structures. |
| `el/openhours.html` | Keep ThemeJS2 and migrate data values | Public name is stable; preserve every opening-hours value verbatim. |
| `el/pagebuilder-link.html` | Keep the current ThemeJS2 implementation | Public name is stable; implementation differs. |
| `global.md` | Same path; merge project content | ThemeJS2 provides an empty extension point. Do not discard non-empty legacy content. |
| `minifooter.md` | Copy only if still referenced | It was copied byte-for-byte into ThemeJS2-new but is not part of the ThemeJS2 `_root` baseline. |
| `footer.md` | Convert into `60_footer.html` content/data | No direct ThemeJS2 include exists; preserve its displayed content while using the new footer layout. |
| `fragments.html` | Convert each fragment separately | No direct ThemeJS2 include exists; replace fragment plumbing with current elements/includes without losing content. |
| legacy `dist/*` includes | Regenerate | Generated ThemeJS1 bundles must not enter the ThemeJS2 target. |

Do not rename, add, remove, or move shared ThemeJS2 includes without the
explicit approval required by `leuffen/themejs2/AGENTS.md`.

## Layouts

| ThemeJS1 layout | ThemeJS2 layout | Migration |
|---|---|---|
| `0_blanc.html` | `10_blanc.html` | Use the current ThemeJS2 document/head shell; merge verified project metadata integrations only. |
| `1_body.html` | `20_body.html` | Use the ThemeJS2 loader, image loader, responsive wrapper, and theme switcher. |
| `2_script.html` | `30_script.html` | Retain only still-supported project widgets; use their current element names. |
| `3_1_navbar.html` | `50_navbar.html` | Preserve navigation labels and destinations while using ThemeJS2/Nextrap elements. |
| `3_2_footer.html` | `60_footer.html` | Preserve all footer content and links; use the current footer structure. |
| `3_3_main.html` | `70_main.html` | Use the current `<main>` and feedback-element wrapper. |
| `3_3_1_content.html` | `default.html` or `website.html` | Move page content into the `<tj-content-pane>` wrapper; merge `global.md` at its intended common level. |
| `article.html` | `article.html` / `default.html` | ThemeJS2's article layout is a thin alias to `default`; move old split/layout behavior into page Content Pane markup. |
| `legal.html` | a project legal layout based on `default` | Create only when the legal pages need a shared structural wrapper; preserve legal text verbatim. |
| `legal/impressum.html` | `legal/impressum.html` | Use current data-driven structure and merge project-specific legal content without rewriting it. |
| `website.html` | `website.html` | Use the current Content Pane wrapper. |

The numeric layout chain is structural. Never copy the old numeric files under
new names; begin with the current `_root` versions and merge only verified
project-specific behavior.

