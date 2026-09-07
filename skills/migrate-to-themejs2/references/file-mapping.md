# ThemeJS1 to ThemeJS2 target architecture

Use this as a classification guide, not as permission to overwrite current
ThemeJS2 files. In ThemeJS2, `_root` is the source of truth for the reusable
project structure and public include names.

## Project and content files

| ThemeJS1 source | ThemeJS2 target | Handling |
|---|---|---|
| `package.json`, `package-lock.json` | current `_root/package.json` plus a fresh lockfile | Use ThemeJS2 dependencies and scripts; merge only project identity and verified project-specific dependencies. |
| `webpack.config.js`, legacy `src/index*.ts` | `_root/vite.config.ts`, `_root/docs/_src/*` | Replace with the ThemeJS2 Vite pipeline; re-add only confirmed project entrypoint behavior. |
| `composer.json` | project `composer.json` | Preserve required Jekyll/PHP tooling while keeping the ThemeJS2 project baseline. |
| `docs/_config.yml` | `_root/docs/_config.yml` | Merge collections, defaults, languages, permalink rules, and one root-scope `body_class` without changing public URLs. |
| `docs/_data/*` | `docs/_data/*` | Preserve all values verbatim; adapt keys only where the current ThemeJS2 include contract requires it. |
| legacy homepage | `docs/index.md` | Move the homepage to the site root and preserve `permalink: /`; do not keep a second homepage below `docs/pages/`. |
| legacy 404 page | `docs/404.html` | Use `layout: website` and `permalink: /404.html`; preserve project-specific visible text when migrating an existing site. |
| authored `docs/**/*.md` and `.html` | equivalent route below `docs/` | Copy prose and metadata verbatim; change only path/frontmatter/layout/component wiring. Preserve permalinks when paths change. |
| original files in `docs/assets/` | `docs/assets/` | Copy originals byte-for-byte and keep referenced paths stable or update every reference without changing the asset. |
| `docs/assets/dist/*`, `docs/_includes/dist/*` | ThemeJS2 build output | Do not copy. Regenerate only with a successful ThemeJS2 build. |
| legacy SCSS and variables | ThemeJS2 `_src` and theme configuration | Transfer verified brand inputs to ThemeJS2 variables; do not carry obsolete component/layout CSS forward blindly. |

Locale suffixes and directory splits in the ThemeJS2-new structure are project
choices, not universal rules. A rename such as `index.de.md` to `index.md`
requires a verified route/permalink match.

## Includes

The ThemeJS2-new target contains only the following reusable include tree:
`components/contact/address.html`,
`components/navigation/{main,footer,section-cards}.html`,
`helpers/i18n/translate.html`, `helpers/urls/pagebuilder.html`, and
`fragments/loader.html`. Do not recreate removed compatibility paths.

| ThemeJS1 include | ThemeJS2 target | Migration |
|---|---|---|
| `el/address.html` | `components/contact/address.html` | Pass the location key and preserve every address/contact value. |
| `do/trans.html` | `helpers/i18n/translate.html` | Rename `val` to `key`; pass language and fallback where needed. |
| `el/nav2.html` | `components/navigation/main.html` | Use `tag`, `lang`, `root`, and `max_depth`; preserve labels, order, and links. |
| footer use of `el/navbar.html` | `components/navigation/footer.html` | Use `tag`, `lang`, and `show_icons`; preserve main and subfooter navigation separately. |
| `el/navtree-index.html` | `components/navigation/section-cards.html` | Pass `base=page.path`; preserve cards, images, summaries, and order. |
| `el/pagebuilder-link.html` | `helpers/urls/pagebuilder.html` | Pass `path=page.path` and `lang=page.lang`. |
| `part/loader.html` | `fragments/loader.html` | Pass the loader image selector when it differs from `img.loader-image`. |
| `global.md` | remove after migrating non-empty content | Move authored content to an explicit page/layout location before removing the include and its capture. |
| `footer.md` | convert into `60_footer.html` content/data | Preserve its displayed content while using the new footer layout. |
| `fragments.html` | convert each fragment separately | Replace fragment plumbing with current elements/includes without losing content. |
| unused `do/*`, `el/*`, `minifooter.md`, TODO and include-side `dist/*` | remove after call-site inventory | Do not carry unused compatibility files or generated assets into the target. |

Do not rename, add, remove, or move shared ThemeJS2 includes without the
explicit approval required by `leuffen/themejs2/AGENTS.md`.

## Layouts and root pages

| ThemeJS1 source | ThemeJS2 target | Migration |
|---|---|---|
| `0_blanc.html` | `10_blanc.html` | Use the current ThemeJS2 document/head shell; merge verified project metadata integrations only. |
| page-level `body_class` | `docs/_config.yml` default | Define the project theme class once under the root-scope defaults and remove repeated page fields. |
| `1_body.html` | `20_body.html` | Use `fragments/loader.html`, the image loader, responsive wrapper, and supported site-wide widgets. |
| `2_script.html` | removed | Move supported site-wide widgets into `20_body.html` or the current entrypoint; `50_navbar.html` extends `20_body.html` directly. |
| `3_1_navbar.html` | `50_navbar.html` | Preserve navigation labels and destinations while using `components/navigation/main.html`. |
| `3_2_footer.html` | `60_footer.html` | Preserve all footer content and links; use `components/navigation/footer.html` and `helpers/urls/pagebuilder.html`. |
| `3_3_main.html` | `70_main.html` | Use the current `<main>` and feedback wrapper without the removed `global.md` capture. |
| `3_3_1_content.html` | `default.html` or `website.html` | Move page content into the `<tj-content-pane>` wrapper. |
| category landing page | `index.html` | Render direct child cards through `components/navigation/section-cards.html`. |
| standalone homepage layout | removed | Use `layout: website` directly from `docs/index.md`. |
| `article.html` | `article.html` / `default.html` | Keep a thin alias where the target still uses one; move old split behavior into Content Pane markup. |
| `legal.html` | `legal/legal.html` | Use a shared wrapper only when required; preserve legal text verbatim. |
| `legal/impressum.html` | `legal/impressum.html` | Use the current data-driven structure and merge project-specific legal content without rewriting it. |
| legacy error route | `docs/404.html` with `layout: website` | Keep the conventional HTML path and a working link to `/`. |

The numeric layout chain is structural. Start with the current `_root`
versions, remove obsolete intermediate layouts, and merge only verified
project-specific behavior.
