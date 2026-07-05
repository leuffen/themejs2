---
name: modify-theme
description: Create or modify the css theme.
---

# Modify Theme

This skill is used to create or modify the themes inside the `theme/` folder.

For each theme a dedicated directory is created inside the `theme/` folder (theme folder). The name of the directory is the name of the theme.

## Rules inside a theme folder

Keep new themes aligned with `theme/medic/` and `theme/epraxis/`:

- Create one folder per theme in `theme/<theme-name>/`.
- Add a `_theme.scss` file as the entry point. It should wrap all theme styles in `.theme-<theme-name>` and load the theme parts with `@include meta.load-css(...)`.
- Put element styles into `elements/`. Every element gets its own directory, for example `elements/ntl-card/` or `elements/ntl-hero/`.
- Inside each element directory, use `<element-name>.scss` as the main file, for example `ntl-card.scss`.
- Put element variants / modifiers into partials in the same directory. Name them with a leading underscore and the modifier class name, for example `_style-footer.scss`, `_style-ribbon.scss`, `_featured.scss`.
- Modifier classes should be short and descriptive and are used as `&.style-footer`, `&.style-ribbon`, `&.featured`, etc.
- Optional shared theme files can live in folders like `classes/`, `mixins/`, `tools/`, `variant/`, or `html-elements/` when needed.

## Rules for creating new themes

You will be provided with a specific task. If also provided with screenshots, you should use the browser-screenhot skill to
to analyze the current screenshot and html structure and compare it to the provided design screenshot. 

## Do's

- Use the variables from nextrap styles. 
- Verify the new Screenshot looks like the provided design screenshot. If not, ask the user for clarification.
- If `part` attributes are missing in the shadowdom - ask the user to add them. 


## Farben, Schriftarten und Abstände

Farben, Schriftarten und Abstände werden ausschließlich in der `docs/_src/style.scss` definiert. Siehe nextrap/styles.
Definiere diese dort per overrides. 


## Breakpoints

Breakpoints are handled by the elements itself by adding a `mode="desktop|tablet|mobile"` attribute to the layout-element. The
breakpoint can be adjusted by adding a "--breakpoint: sm|md|lg|xl|xxl" css variable to the layout-element. The default breakpoint is `xl`.

For Containers the `--nt-container-width` should be used.


## Do's

- Ersetzte Bilder, Icons, Logos in Vorlagen-Screenshots durch Platzhalterbilder (falls nicht anders angegeben). Nutze
  für Bilder object-fit: cover und aspect-ratio (wenn nötig), damit diese responsive bleiben.
- Du kannst Bootstrap Icons nutzen. Ersetze custom Icons durch Bootstrap Icons falls die Icons nicht im Design vorgegeben sind.
- Nutze ausschließlich den Text-Style von nextrap/typography. Erstelle keine eigenen styles für a, p, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote, etc. Nutze die Styles von nextrap/typography. (Außer explizit gewünscht)

## Dont's

- Always avoid media queries for breakpoints. See breakpoints section on how to handle breakpoints.
- Do not edit files inside the vendor or node_modules folders. If you need to change something there, ask the user to do it
- Do not edit files inside the workspaces folder. If you need to change something there, ask the user to do it or ask for permission to do it.
- Do not modify the overall structure of the theme folder. If you need to change something there, ask the user to do it
- Do not add any content into content css attributes. If you need to modify a section inside the docs/_includes or docs/_layouts folder, ask the user to do it
- Do not add universal selectors like p, a, .btn, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote, etc. into into element styles. They should be adjusted using either style="" attribute or helper classes like mt-1, (see nextrap/style-tools)
