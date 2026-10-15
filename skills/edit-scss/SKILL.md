---
name: edit-scss
description: Bearbeitet SCSS- und CSS-Styles in Kundenprojekten mit @leuffen/themejs2. Verwenden bei Änderungen unter docs/_src/, Theme-Imports, Schriftarten, Farbvariablen und CSS Cascade Layer Overrides.
---

# SCSS und CSS bearbeiten

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

## Vorhandene Schriften und optische Schriftgröße

Importiere eines der bereits vorhandenen SCSS-Fontmodule über `@use`.
Die Module liefern Body- und Heading-Familie sowie zwei getrennte
Zielmetriken, **ohne** je Schrift eigene CSS-Regeln oder Mixins zu benötigen.

```scss
@use "@leuffen/themejs2/theme/raven" as theme;
@use "@leuffen/themejs2/font/garamond-opensans" as font;

@include theme.global();

@layer website {
  html {
    --nt-primary: #3f4632;
    --nt-font-family: #{font.$font-family-base};
    --nt-font-family-header: #{font.$font-family-header};
    --theme-font-size-adjust: #{font.$font-size-adjust-base};
    --theme-font-size-adjust-header: #{font.$font-size-adjust-header};

    // Optional pro Website manuell statt der importierten Werte setzen:
    // --theme-font-size-adjust: 0.54;
    // --theme-font-size-adjust-header: 0.70;
  }
}
```

Der globale Theme-Entrypoint setzt `font-size-adjust: ex-height` für
Fließtext auf `html` und `font-size-adjust: cap-height` auf
`h1` bis `h6`. Die zwei Zielwerte sind bewusst unabhängig von den
normalen Größen-Tokens `--nt-font-size` und `--nt-font-size-header`.
Mit `font-size-adjust` wird die optische Buchstabenhöhe angeglichen;
die Schriftgröße und Hierarchie des Themes bleiben erhalten.

Die mit `!default` definierten Sass-Variablen dürfen über
`@use ".../font/..." with (...)` überschrieben werden. Alternativ
überschreibe die CSS-Variablen im `website`-Layer wie oben.
Die Ausgangswerte 0.50 (x-Höhe) und 0.66 (Versalhöhe) orientieren sich
an publizierten Font-Metriken von Work Sans. Es sind **gemeinsame
Referenz-Zielhöhen**, keine gemessenen Individualmetriken der anderen
Schriftarten. Quelle: https://fontkind.com/font/work-sans Der Browser ermittelt die tatsächliche
Anpassung anhand der jeweiligen Font-Metriken selbst. Die Werte vor
dem Einsatz auf einer Kundenseite mit den tatsächlich geladenen Fonts
visuell überprüfen und gegebenenfalls kalibrieren.

Verfügbare Fontmodule: `ubuntu`, `work-sans`, `metropolis`,
`opensans-regular`, `opensans-condensed`, `cinzel-opensans`,
`forum-opensans`, `garamond-opensans`, `urbanist-opensans`.
Die mit `@use` geladenen Dateien importieren ihre vorhandenen
`font/_vendor/`-Schriftdefinitionen. Keine eigenen `@font-face`-
Deklarationen und keine festen Ersatz-Schriftgrößen hinzufügen.

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
