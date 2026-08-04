---
name: modify-theme
description: Create or modify the css theme.
---

# Modify Theme

Use this skill for creating or modifying themes under `theme/`.

## Grundregeln

- Jedes Theme liegt in `theme/<theme-name>/` und orientiert sich an `theme/medic/` und `theme/epraxis/`.
- Jedes Theme hat mindestens eine `.md`-Datei in `docs/pages`. Wenn sie fehlt: User fragen.
- Screenshots/Visual Checks über den Skill `browser-screenshot-with-puppeteer` erstellen.
- Bei Design-Screenshots: aktuelle Seite + HTML-Struktur prüfen, mit Vorlage vergleichen, Ergebnis verifizieren; bei Abweichungen User fragen.
- Developer-Footer/Navbar/Tools in Screenshots ignorieren; sie werden später ausgeblendet.
- Demos sind nur Beispiele: Styling muss mit wechselnden Textlängen, Bildern, Anzahl von Elementen usw. robust funktionieren; dafür z.B. Flexbox mit `grow`/`shrink` nutzen.
- Wenn benötigte Shadow-DOM-`part` Attribute fehlen: User bitten, sie zu ergänzen.

## Theme Entry `_theme.scss`

- `_theme.scss` ist der Theme-Einstieg und scoped alles unter `:where(.theme-<theme-name>)`.
- Keine ungescopten globalen Styles erzeugen.
- Theme-Teile nur mit `@include meta.load-css(...)` laden.
- Direkte CSS-Regeln in `_theme.scss` nur für Main-Content-Spacing:
  `ntl-2col`, `ntl-card-row`, `ntl-card-grid` mit `margin-top/bottom: var(--nt-content-space)`.
- Keine weiteren direkten CSS-Regeln in `_theme.scss`.
- `@include nextrapBase.nextrap-theme($theme, ())` verwenden, aber keine `--nt-*` Variablen in der Theme-Klasse überschreiben, außer explizit erlaubt.

## Ordnerstruktur

```text
theme/<theme-name>/
├── _theme.scss
├── elements/
│   └── <element>/<element>.scss
├── classes/   # wiederverwendbare semantische Klassen
├── tools/     # zusätzliche Tools, z.B. _text-truncate.scss
├── variant/   # nur falls nötig
└── html-elements/ # nur falls nötig
```

- Jedes Element hat genau eine Entry-Datei: `elements/<element>/<element>.scss`.
- Entry-Dateien enthalten nur `@use "sass:meta";` und `@include meta.load-css(...)`, keine eigenen Styles.
- Keine Mixins in `theme/**` definieren.
- Theme-Struktur nicht außerhalb dieser Regeln ändern, ohne den User zu fragen.
- Details und Beispiele: `references/element-child-structure.md`.

## Element-/Child-Struktur

- Pro Datei genau eine Klasse, ein Modifier oder ein Child-Pairing.
- Dateiname muss das gestylte Ziel zeigen.
- Parent-Dateien stylen nur Parent, dessen Parts/Slots/States/Layout:
  - `_style-default.scss` → `&.style-default`
  - `_with-*.scss` → `&.with-*`
  - `_reverse.scss` → `&.reverse`
- Styles für Child-Elemente gehören in `elements/<parent>/<child>/**`:
  - `<child>/_in-style-default.scss` → `&.style-default { <child> { ... } }`
  - Beispiel: `elements/ntl-card-row/ntl-card/_in-style-ribbon.scss`, nicht `ntl-card` in `ntl-card-row/_style-ribbon.scss`.
- Wenn eine Klasse auf einem Child sitzt, liegt sie im Child-Ordner.
  Beispiel: `elements/ntl-2col/ul/ul.scss`, nicht `elements/ntl-2col/_style-diamond.scss`.
- Child-Pairings bleiben immer theme-scoped, weil sie über `_theme.scss` geladen werden.
- Child-Pairings nur unter `elements/<parent>/<child>/**`, wenn sie wirklich an diese Parent/Child-Struktur gebunden sind; sonst `classes/` nutzen.

## Reihenfolge in Style-Dateien



In jeder `_style-*`, `_with-*`, `_reverse` und `_in-*` Datei:

1. Genereller Style ohne Mode-Einschränkung
2. `&[mode="mobile"]`
3. `&[mode="tablet"]` falls nötig
4. `&[mode="desktop"]` falls nötig

Mode-Blöcke nicht zwischen generelle Regeln mischen. Nicht benötigte Mode-Blöcke weglassen.

## Klassen und Varianten

- Semantische Klassennamen verwenden; keine design-spezifischen Namen wie `.opening-hours__top` oder `.hero__image`.
- Erlaubte Muster: `style-default`, `with-*`, einfache Modifier wie `reverse`.
- Kein `variant-*`.
- `with-*` muss mit `style-default` kombinierbar bleiben.
- Ein Element darf nur eine `style-*` Klasse haben; ohne Klasse setzt das Element selbst `style-default`.
- Default-Styles nie direkt am Elementnamen ändern; stattdessen `element.style-default` bearbeiten.
- Varianten immer in eigene Dateien legen.
- Markdown-/Markup-Änderungen vorschlagen, wenn Klassen/Modifier/Renamings sinnvoll sind; vor Änderung User fragen.

## Reusability

- Wiederverwendbare Styles nach `classes/`, z.B. `.opening-hours`, `.text-strong`, `.feature-icon`, `.footer`, `.aside`.
- Element-Styles nur in `elements/**`, wenn sie von Parts, Slots, element-spezifischer Struktur, States oder Modifiern abhängen.
- Keine Utility-artigen Klassen in Element-Dateien definieren.
- Vor jeder neuen Klasse prüfen: elementgebunden oder wiederverwendbar? Wiederverwendbar → `classes/`.
- Utility-/Helper-Klassen wie `.btn`, Spacing-, Text- oder Flex-Utilities nicht in Element-/Variant-Dateien überschreiben, außer explizit erlaubt. Erst Layout, Wrapper, Slots oder lokale semantische Klassen nutzen.

## Nextrap, Farben, Typografie, Abstände

- Standard-Elemente aus `@nextrap/layout` verwenden.
- Vor Varianten prüfen, ob Nextrap-Elemente passende APIs/Mixins bieten.
- Element-`.ai-usage-info.md`, Beispiele und Mixins lesen, bevor ein Element geändert wird.
- Wenn >5 Zeilen CSS durch eine Mixin-Änderung einfacher wären: User bitten, das Mixin zu ändern.
- Farben, Fonts und Abstände ausschließlich in `docs/_src/style.scss` als Nextrap-Overrides definieren.
- Im Theme bestehende Nextrap-Variablen/Utilities nutzen; keine eigenen Farben, Abstände oder Text-Styles ohne Erlaubnis. Falls nötig, begründen.
- Für interne Textabstände `--nt-text-gap` verwenden.
- Text-Styling aus `nextrap/typography` nutzen; keine eigenen Styles für `a`, `p`, `h1`–`h6`, `ul`, `ol`, `li`, `blockquote` usw., außer explizit gewünscht.
- Keine globalen CSS-Variablen hinzufügen; falls nötig User fragen und ins Theme-Mixin aufnehmen lassen.

## Breakpoints

- Keine Media Queries im Theme: sie sind per JS nicht veränderbar.
- `ntl-*` Elemente setzen per JavaScript automatisch `mode="mobile|tablet|desktop"`.
- Das `mode`-Attribut wirkt auch auf Unterelemente/Child-Pairings; Styles deshalb über `&[mode="..."]` am Element schreiben, das den Mode trägt.
- Childs bekommen den Mode nicht automatisch selbst. Beispiel: Bei `ntl-card` in `ntl-card-row` hat nur `ntl-card-row` `mode`; Child-Styles müssen sich am Parent-Mode orientieren (`&[mode="mobile"] { ntl-card { ... } }`, nicht `ntl-card[mode="mobile"]`).
- Breakpoints werden über die CSS-Variable `--breakpoints: sm|md|lg|xl|xxl` gesteuert; Default ist `xl`.
- Containerbreite über `--nt-container-width`.
- SCSS-Mode-Regeln immer in der Reihenfolge: mobile, tablet, desktop.

## HTML / Markdown Sections

- Keine spezifischen CSS-Klassen für einzelne einmalige Elemente; vorhandene Utilities bevorzugen.
- Responsive API von `@trunkjs/responsive` nutzen.
- Farben/Abstände im Markup über Nextrap-Utilities oder CSS-Variablen im `style=""` referenzieren.
- Wiederkehrende Klassen, die nur in einer Datei vorkommen: lokale `<style>`-Sektion in dieser HTML/Markdown-Datei, per CSS Nesting auf einen Root wie `footer` scopen.
- Kein Inhalt über CSS-`content` einfügen.
- Wenn Änderungen in `docs/_includes` oder `docs/_layouts` nötig wären: User fragen.

## Navbar und Footer

- Navbar/Footer-Elemente in Demos sind Vorschläge; Jekyll setzt die echten Elemente ein.
- Navbar an `docs/_includes/_styles/default/navbar.scss` orientieren.
- Footer an `docs/_includes/_styles/default/footer.scss` orientieren.
- Wenn Abweichungen nicht per CSS lösbar sind: eigene `_styles/<theme>/navbar.scss` oder `_styles/<theme>/footer.scss` anlegen und in Frontmatter `use_navbar: <theme>` bzw. `use_footer: <theme>` setzen.

## Bilder und Icons

- Bilder/Icons/Logos aus Vorlagen durch Platzhalter ersetzen, falls nichts anderes angegeben ist.
- Für Bilder `object-fit: cover` und bei Bedarf `aspect-ratio` nutzen.
- Bootstrap Icons dürfen genutzt werden; Custom Icons durch Bootstrap Icons ersetzen, wenn nicht fest vorgegeben.

## Verbote

- Nicht in `vendor`, `node_modules` oder `workspaces` ändern. Für `workspaces` vorher Erlaubnis einholen.
- Nicht mehr als ein Element gleichzeitig stylen/ändern, außer User erlaubt es nach Erklärung.
- Keine ungescopten Text-, Bild-, Element- oder Utility-Selektoren wie `p`, `a`, `.btn`, `h1`–`h6`, `ul`, `ol`, `li`, `blockquote` usw.
- Light-DOM-Text-/Listen-Styles in Layout-Elementen vermeiden; nur mit Erlaubnis und dann als theme-scoped Child-Pairing.
- Keine design-spezifischen Klassen; lieber Utilities oder `style=""` verwenden.
- Kein `padding-top` auf Default-Elemente, außer explizit gefordert.
- Keine eigenen Theme-Mixins definieren.
- Keine Helper/Utility-Overrides ohne explizite Erlaubnis.
- Keine globale Strukturänderung ohne Rückfrage.
