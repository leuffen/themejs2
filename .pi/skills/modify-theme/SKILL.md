---
name: modify-theme
description: Create or modify the css theme.
---

# Modify Theme

This skill is used to create or modify the themes inside the `theme/` folder.

For each theme a dedicated directory is created inside the `theme/` folder (theme folder). The name of the directory is the name of the theme.

Jeder Theme enthält mindestens eine `.md` datei in `docs/pages`. Wenn Du die entsprechende Datei nicht findest, frage den User.
Die Datei ist über das Screenshot-Tool unter der entpspechenden URL erreichbar.

## Rules inside a theme folder

Keep new themes aligned with `theme/medic/` and `theme/epraxis/`:

- Create one folder per theme in `theme/<theme-name>/`.
- Add a `_theme.scss` file as the entry point. It should wrap all theme styles in `.theme-<theme-name>` and load the theme parts with `@include meta.load-css(...)`.
- Put element styles into `elements/`. Every element gets its own directory, for example `elements/ntl-card/` or `elements/ntl-hero/`.
- Inside each element directory, use `<element-name>.scss` as the main file, for example `ntl-card.scss`.
- Optional shared theme files can live in folders like `classes/`, `tools/`, `variant/`, or `html-elements/` when needed.

## Project-specific Theme Architecture

For `theme/**/elements/**` use these rules strictly:

- `_theme.scss` only loads element entry files via `@include meta.load-css(...)`.
- All theme styles must be loaded inside `.theme-<theme-name>` so theme switching works reliably.
- Never create unscoped global styles.
- Every element has one entry file: `elements/<element>/<element>.scss`.
- The entry file only contains `meta.load-css(...)`, no own styles.
- Do not define mixins inside `theme/**`.
- Define exactly one class or one child pairing per file.
- Naming:
  - `_style-default.scss` -> `&.style-default`
  - `_with-*.scss` -> `&.with-*`
  - `_reverse.scss` -> `&.reverse`
- Child pairings must always be defined on the child element, never on the parent.
- Example: `elements/ntl-2col/ul/ul.scss` and not `elements/ntl-2col/_style-diamond.scss`.
- If a class is applied to `ul`, its styles belong into `ul/`.
- Even child pairings are never global; they are always loaded through `_theme.scss` and therefore prefixed by `.theme-<theme-name>`.

## Rules for creating new themes

You will be provided with a specific task. If also provided with screenshots, you should use the browser-screenhot skill to
to analyze the current screenshot and html structure and compare it to the provided design screenshot. 


## Rules for CSS Classes

- Use semantic class names. Avoid design-specific class names like `opening-hours__top` or `hero__image`.
- Use only these naming patterns:
  - `style-default`
  - `with-*`
  - simple modifiers like `reverse`
- Do not use `variant-*`.
- Keep `with-*` classes combinable with `style-default`.


## Do's

- Use the variables from nextrap styles. 
- Verify the new Screenshot looks like the provided design screenshot. If not, ask the user for clarification.
- If `part` attributes are missing in the shadowdom - ask the user to add them.


## Farben, Schriftarten und Abstände

Farben, Schriftarten und Abstände werden ausschließlich in der `docs/_src/style.scss` definiert. Siehe nextrap/styles.
Definiere diese dort per overrides. 

## HTML Sections

In HTML Dateien oder embedded HTML in Markdown Datein gelten folgende Regeln:

- Lege keine spezifischen CSS Klassen für einzelne Elemente an (außer diese wiederholen sich auch in anderen Dateien).
- Nutze die responsive API von @trunkjs/responsive.
- Wenn Du Farben aus dem Theme oder Abstände referenzierst, nutze entweder direkt die util-klassen aus nextrap/style-utils oder die CSS Variablen aus nextrap/styles, die du direkt in den style="" Attributen referenzierst.
- Für wiederkehrende Elemente, die nur in einer Datei vorkommen, lege eine eiegene <style> Sektion in der HTML Datei an und nutze diese für die wiederkehrenden CSS Klassen. Diese CSS Klassen aollten nur in dieser Datei genutzt werden. (z.B. für die Abstände zwischen den einzelnen Elementen, die nur in dieser Datei vorkommen). Nutze dabei CSS Nesting, um die Klassen auf ein z.B. <footer> element zu bescrhänken.

## Breakpoints

Breakpoints are handled by the elements itself by adding a `mode="desktop|tablet|mobile"` attribute to the layout-element. The
breakpoint can be adjusted by adding a "--breakpoint: sm|md|lg|xl|xxl" css variable to the layout-element. The default breakpoint is `xl`.

For Containers the `--nt-container-width` should be used.


## Navigationsleisten und Footer

Betrachte die Elemente in Navbar und Footer als vorschläge. Die korrekten Element werden immer von Jekyll eingesetzt.
Orientiere dich bei der Navbar an `docs/_includes/_styles/default/navbar.scss` und bei Footer an `docs/_includes/_styles/default/footer.scss`.

Wenn ein Footer|Navbar vom default abweicht und die Abweichung nicht per CSS umgesetzt werden kann - dann leg eine
eigene _styles/<theme>/navbar.scss oder _styles/<theme>/footer.scss an. Benutze diese in der Markdown-Datei indem 
du `use_navbar: <theme>` oder `use_footer: <theme>` in der Frontmatter angibst.

Kümmer dich nicht drum, wenn entwickerfooter oder entwicklernavbar oder sonstige tools im screenshot zu sehen sind. Diese werden später
ausgeblendet.

## Do's

- Ersetzte Bilder, Icons, Logos in Vorlagen-Screenshots durch Platzhalterbilder (falls nicht anders angegeben). Nutze
  für Bilder object-fit: cover und aspect-ratio (wenn nötig), damit diese responsive bleiben.
- Du kannst Bootstrap Icons nutzen. Ersetze custom Icons durch Bootstrap Icons falls die Icons nicht im Design vorgegeben sind.
- Nutze ausschließlich den Text-Style von nextrap/typography. Erstelle keine eigenen styles für a, p, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote, etc. Nutze die Styles von nextrap/typography. (Außer explizit gewünscht)
- Definiere keine globalen text-, bild- oder element-styles. Wenn Styles für HTML-Elemente nötig sind, lege sie als theme-scoped Element- oder Child-Pairing-Dateien unter `elements/**` an, damit sie immer unter `.theme-<theme-name>` geladen werden.
- Definiere zusätzliche tools unter <themeDir>/tools/_<className>.scss e.g. _text-truncate.scss for a text truncate tool.
- Wenn Du eine Variation eines Elements erstellst, prüfe zuerst, ob das zugrunde liegende Nextrap-Element bereits passende APIs oder Mixins anbietet. Definiere aber keine eigenen Mixins im Theme-Ordner.
- Wenn du ein Element änderst, sieh zunächst in die .ai-usage-info.md des elements und schau dir danach die Beispiele und mixins an. Falls eine Funktion mehr als 5 Zeilen Code benötigt und es durch eine Änderung des Mixins einfacher wäre, frage den User das Mixin zu ändern.
- Suggest changes to the markdown file if the changes make sense (like modify class or modifiers or renaming elements). But ask the user before changing.
- Benutze die Standardelemente aus "@nextrap/layout". Nutze davon die mixins um die element für das Theme zu stylen.
- Lege Varianten in eigenen Dateien an und halte dich an `style-default`, `with-*` und einfache Modifier wie `reverse`.
- 

## Dont's

- Always avoid media queries for breakpoints. See breakpoints section on how to handle breakpoints.
- Do not edit files inside the vendor or node_modules folders. If you need to change something there, ask the user to do it
- Do not edit files inside the workspaces folder. If you need to change something there, ask the user to do it or ask for permission to do it.
- Do not modify the overall structure of the theme folder. If you need to change something there, ask the user to do it
- Do not add any content into content css attributes. If you need to modify a section inside the docs/_includes or docs/_layouts folder, ask the user to do it
- Do not add unscoped universal selectors like p, a, .btn, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote, etc. Theme switching must work via `.theme-<theme-name>`. If such selectors are needed, define them only as theme-scoped element or child-pairing styles under `elements/**`.
- Do not create design-specific classes like .opening-hours__top. Instead suggest to style the element using style="" attribute or helper classes like mt-1, (see nextrap/style-tools)
- Do not overwrite --nt-* variables in the theme class unless told so
- Do not add global css variables. If you need to do it, ask the user and add them to the theme mixin.
- Never define lightdom child element styles for text styling, lists etc. inside layout elements styles or ask the user if it is allowed.
- Du darfst keine eigenen Abstände, farben, text-styles usw definieren. Außer der User gibt dir die Erlaubnis. Begründe, warum du nicht anders kannst.
- Do not modify styles for more than one element at once. If you need to do it, ask the user and explain why.
- Do not modify the default styles of an layout element by name (e.g. ntl-card etc). Use semantic classes  or variants to modify without affecting other instances of the element.
- Do not adjust the element style directly. For default elements edit element.style-default for the default styling. Elements can only have one style-* class at a time. If nothing is set, the element will add style-default automatically.
- Do not define mixins within the theme folder of this project. If you need to do it, ask the user and add them to the element mixin.
