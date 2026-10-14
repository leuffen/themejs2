---
name: edit-themejs2-scss
description: Bearbeitet SCSS- und CSS-Styles in Kundenprojekten mit @leuffen/themejs2. Verwenden bei Änderungen unter docs/_src/, Theme-Imports, Schriftarten, Farbvariablen und CSS Cascade Layer Overrides.
---

# ThemeJS2: SCSS und CSS bearbeiten

## Einstieg und Dateien

Bearbeite in einem kopierten Kundenprojekt die Quelldateien unter `docs/_src/`.
Die zentrale Entry-Datei ist `docs/_src/style.scss` (im ThemeJS2-Paket als
`_tpl/_root/docs/_src/style.scss` vorgegeben). Zusätzliche Partials können
unter `docs/_src/` liegen und werden explizit aus `style.scss` eingebunden.
Schreibe nicht in generierte Dateien unter `docs/assets/`; die werden gebaut.
Prüfe vor jeder Änderung die tatsächliche Projektkonfiguration und bestehende
Styles. ThemeJS2 enthält die Basisregeln und Komponentenstyles.

## Einfaches Setup

```scss
@use "@leuffen/themejs2/theme/raven" as theme;

// Lädt Reset, Scheme, Layer und das Theme global für die ganze Website.
@include theme.global();

// Individuelle Werte der Website überschreiben die Theme-Defaults.
@layer website {
  html {
    --nt-primary: #3f4632;
    --nt-font-family: "Work Sans", sans-serif;
    --nt-font-family-header: var(--nt-font-family);
  }
}
```

Die Primärfarbe `--nt-primary` in der Website ausdrücklich setzen; für die
Schrift `--nt-font-family` und bei Bedarf `--nt-font-family-header`
verwenden. Weiterhin stehen die Theme-Vorgaben als Fallback zur Verfügung.
Andere Themes statt Raven über ihren veröffentlichten Einstiegspunkt laden.
`theme.global()` ist für ein einzelnes Theme auf der gesamten Website;
die Multi-Theme-Demo kann weiterhin `theme.theme()` in ihren Selektoren nutzen.

## Vorhandene Schrift einbinden und Schriftgrößen ändern

Die Schriftmodule liegen bereits unter `@leuffen/themejs2/font/`. Keine
zusätzlichen Font-Dateien oder `@font-face`-Blöcke anlegen, wenn ein passendes
SCSS-Fontmodul vorhanden ist. Für Open Sans das vorhandene Modul mit
`sass:meta` als CSS laden und anschließend die Theme-Tokens überschreiben:

```scss
@use "sass:meta";
@use "@leuffen/themejs2/theme/raven" as theme;

@include theme.global();

// Lädt die vorhandenen Open-Sans-Definitionen aus ThemeJS2.
@include meta.load-css("@leuffen/themejs2/font/opensans-regular");

@layer website {
  html {
    --nt-primary: #3f4632;
    --nt-font-family: "Open Sans", sans-serif;
    --nt-font-family-header: var(--nt-font-family);
    --nt-font-size: 1.125rem;
    --nt-font-size-header: clamp(2rem, 4vw, 3.5rem);
    --nt-fs-h2: 2rem;
  }
}
```

`--nt-font-size` bestimmt die Basis-Schriftgröße; `--nt-font-size-header`
die große Überschriftengröße und `--nt-fs-h2` die zweite
Überschriftenebene. Die konkrete Auswirkung hängt von den Theme- und
Komponentenregeln ab. Die Include-Zeile lädt die Font-Definitionen; erst
`--nt-font-family` wählt die neue Schrift aktiv aus. Für andere Schriftarten
vorhandene SCSS-Dateien unter `themejs2/font/` prüfen und deren tatsächliche
`font-family`-Bezeichnung übernehmen.

## Layer-Reihenfolge

Die globale Reihenfolge wird ausschließlich von `theme.global()` deklariert:

```scss
@layer reset, schemes, themes, website;
@layer themes {
  @layer tokens, base, typography, elements, components, patterns, utilities;
}
```

`reset` normalisiert native Browserstile; `schemes` initialisiert
Farbschemata. Im `themes`-Layer liegen der Reihe nach Tokens, Basis,
Typografie, Elemente, Komponenten, Patterns und Utilities. `website` hat
bei normalen Deklarationen Vorrang vor diesen Theme-Layern, unabhängig von
der Selektor-Spezifität; bei `!important` kehrt sich die Layer-Priorität um.
Keine zusätzliche Layer-Reihenfolge im Kundenprojekt definieren.

## Zusätzliche Regeln

Website-Anpassungen gehören nach dem `global()`-Aufruf in den
`website`-Layer. CSS/SCSS in einem bereits existierenden benannten Layer
ergänzt diesen Layer und ersetzt ihn nicht.

```scss
// Einfache Anpassung der Website, ohne Theme-Komponenten zu verändern.
@layer website {
  .page-title {
    letter-spacing: -.02em;
  }

  .btn {
    border-radius: 0;
  }
}
```

Für größere Änderungen ein Partial `docs/_src/_custom.scss` erstellen:

```scss
// docs/_src/style.scss: Nach dem Theme-Aufruf einbinden.
@use "./custom";
```

```scss
// docs/_src/_custom.scss
@layer website {
  .page-title {
    letter-spacing: -.02em;
  }
}
```

Für globale Farben und Typografie zuerst `--nt-*`-Tokens verwenden, dann
dokumentierte Komponentenvariablen oder `::part()` nutzen. Direkte
Selektor-Overrides nur für tatsächliche Website-Ausnahmen. Keine Änderungen
in `node_modules`, am zentralen Theme oder an generiertem CSS vornehmen, wenn
ausschließlich ein Kundenprojekt angepasst werden soll. Keine zusätzlichen
`!important`-Deklarationen einführen.

## Prüfung

Vorhandenes Build-Kommando des Kundenprojekts ausführen (typisch
`npm run build` beziehungsweise `vite build`). Kontrollieren, dass Fonts
auslieferbar sind, `--nt-primary` greift, eigene Overrides wirken, die
Layer-Reihenfolge erhalten bleibt und bestehende Komponenten unverändert sind.
