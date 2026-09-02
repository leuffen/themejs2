# Layer-Konzept für das Osman-Theme

## Ausgangslage

`theme/osman/` ist bereits sinnvoll nach Tokens, HTML-Defaults, Komponenten und semantischen Klassen gegliedert. Die Reihenfolge wird aktuell aber ausschließlich über die Reihenfolge der Includes in `theme/osman/_theme.scss` bestimmt.

Dadurch entstehen einige Probleme:

- Später geladene Komponentenregeln können Utilities überschreiben.
- Website-Anpassungen müssen teilweise höhere Spezifität verwenden.
- Selektoren mit IDs wie `nte-nav#osman-main-navigation-horizontal` sind schwer zu überstimmen.
- Der vorhandene `@content`-Hook liegt zu früh; danach geladene Theme-Regeln können Website-Anpassungen wieder überschreiben.
- Es ist nicht eindeutig, welche Styles Theme-Basis und welche bewusst überschreibbare Komponentendarstellungen sind.
- `!important` bei `ntl-hero --height-offset` verhindert bequeme Overrides.
- Einige Werte sind direkt in Komponenten hinterlegt, beispielsweise `#fff`, Abstände oder Farben. Diese sind nicht über die öffentliche `--theme-*`-API anpassbar.

## Vorgeschlagenes Layer-Modell

Es soll ein generisches Modell für alle Themes vorbereitet werden, auch wenn zunächst nur Osman migriert wird:

```scss
@layer reset, schemes, themes, website;

@layer themes {
  @layer tokens, base, typography, elements, components, patterns, utilities;
}
```

Die Priorität steigt von links nach rechts:

1. **`reset`**  
   Nextrap Reset.

2. **`schemes`**  
   Globale Scheme-Selektoren und Runtime-Voraussetzungen auf `:root`.

3. **`themes.tokens`**  
   Öffentliche `--theme-*`-Defaults, Mapping auf `--nt-*` und die Runtime-Token-Ableitungen.

4. **`themes.base`**  
   Root-Darstellung wie Schriftfamilie, Textfarbe und Zeilenhöhe.

5. **`themes.typography`**  
   Die von Nextrap materialisierten Typografieklassen und nativen Textregeln.

6. **`themes.elements`**  
   Elementklassen sowie globale Defaults für native Elemente wie Links, Tabellen und Listen.

7. **`themes.components`**  
   NTL-/NTE-Varianten einschließlich Navbar, Hero, Card Row, Accordion und Input.

8. **`themes.patterns`**  
   Osman-spezifische semantische Klassen wie `.opening-hours`, `.warning-heading` und `.icon-grid`.

9. **`themes.utilities`**  
   Nextrap Utilities. Diese stehen innerhalb des Themes absichtlich zuletzt.

10. **`website`**  
   Alle Anpassungen der Website. Diese gewinnen unabhängig von der Selektor-Spezifität gegen normale Theme-Deklarationen.

## Zuordnung der vorhandenen Dateien

### `themes.tokens`

```text
theme/osman/_runtime-settings.scss
```

Zusätzlich:

```scss
@include nextrapBase.runtime-theme-scoped();
```

Die bestehende Trennung bleibt erhalten:

- `--theme-*` ist die öffentliche, bequem überschreibbare Theme-API.
- `--nt-*` ist das Mapping und die Low-Level-API.
- Abgeleitete Nextrap-Werte werden nicht dupliziert.

### `themes.base`

```scss
font-family: var(--nt-font-family);
color: var(--nt-text);
line-height: var(--nt-line-height);
```

### `themes.typography`

```scss
@include nextrapTypography.style-typography();
```

### `themes.elements`

```text
theme/osman/html-elements/_defaults.scss
theme/osman/html-elements/a/
theme/osman/html-elements/main/
```

Zuerst wird die allgemeine Elements-API materialisiert, danach folgen die Osman-Defaults. Normale `ul` ohne explizite `.list`-Basisklasse erhalten dadurch standardmäßig die Kombination aus `list()` und `list-diamond()`:

```scss
@include nextrapElements.style-elements();

:where(ul:not(.list)) {
  @include nextrapElements.list();
  @include nextrapElements.list-diamond();
}
```

Eine Website kann diesen Layer gezielt ergänzen. Er bleibt durch die registrierte Reihenfolge immer nach Typography und vor Components.

### `themes.components`

```text
theme/osman/elements/**
```

Sowie die momentan direkt in `_theme.scss` definierten Regeln für:

- `nte-navbar`
- `nte-nav`
- Buttons
- Komponenten-Mixins

Die bestehenden Partials müssen dafür grundsätzlich nicht einzeln mit `@layer` versehen werden. Sie werden von `_theme.scss` innerhalb des passenden Layers geladen.

### `themes.patterns`

```text
theme/osman/classes/**
theme/osman/tools/**
src/features/_data-kicker.scss
```

### `themes.utilities`

```scss
@include nextrapUtils.style-utils();
```

Utilities sollen bewusst nach Base, Komponenten und Patterns ausgegeben werden, damit eine Utility wie eine Farb-, Display- oder Spacing-Klasse nicht zufällig von einem später geladenen Theme-Partial neutralisiert wird.

## Aufbau von `_theme.scss`

Das `theme()`-Mixin bleibt die öffentliche API. Intern übernimmt es die Layer-Zuordnung:

```scss
@mixin theme() {
  @layer themes.tokens {
    @include nextrapBase.runtime-theme-scoped();
    @include meta.load-css("./_runtime-settings.scss");
  }

  @layer themes.base {
    // Root-Eigenschaften
  }

  @layer themes.typography {
    // Typografie
  }

  @layer themes.elements {
    // Elementklassen und native HTML-Defaults
  }

  @layer themes.components {
    // NTL/NTE-Mixins und Partials
  }

  @layer themes.patterns {
    // Semantische Klassen und Tools
  }

  @layer themes.utilities {
    @include nextrapUtils.style-utils();
  }

  @layer website {
    @content;
  }
}
```

Der letzte Block behebt zugleich das Problem des bestehenden `@content`-Hooks: Inhalte, die eine Website beim Include übergibt, landen garantiert nach dem Theme.

## Verwendung in der Website

### Globale Theme-Anpassung

```scss
:where(.theme-osman) {
  @include osman.theme() {
    --theme-primary: #005d75;
    --theme-radius: 0;
    --theme-container-max: 1200px;
  }
}
```

Damit bleibt die derzeitige Mixin-API erhalten, aber der übergebene Content wird künftig wirksam im `website`-Layer ausgegeben.

### Größere Website-spezifische Anpassungen

```scss
@layer website {
  :where(.theme-osman) {
    --theme-primary: #005d75;

    ntl-card-row.style-default::part(container) {
      max-width: 1180px;
    }

    nte-nav#osman-main-navigation-horizontal {
      --some-documented-property: ...;
    }
  }
}
```

Obwohl das Theme teilweise ID-Selektoren verwendet, gewinnt der spätere `website`-Layer. Die Website muss keine noch spezifischeren Selektoren oder `!important` einsetzen.

### Bestehende Websites

Nicht gelayertes Website-CSS gewinnt bei normalen Deklarationen ebenfalls gegen gelayertes Theme-CSS. Dadurch bleiben einfache bestehende Overrides zunächst funktionsfähig. Langfristig sollte Website-CSS trotzdem ausdrücklich in `@layer website` liegen, damit die Kaskade nachvollziehbar bleibt.

## Override-Vertrag für Website-Entwickler

Die Website soll Anpassungen in dieser Reihenfolge umsetzen:

1. **`--theme-*` überschreiben**  
   Für Farben, Schrift, Radius, Containerbreite und andere globale Designentscheidungen.

2. **Dokumentierte Komponentenvariablen verwenden**  
   Für Anpassungen einer konkreten NTL-/NTE-Instanz.

3. **Im `website`-Layer ein exportiertes `::part()` ansprechen**  
   Für eine echte Website-Ausnahme.

4. **Direkten Selektor verwenden**  
   Nur wenn keine Variable oder Part-API existiert.

5. **`--nt-*` direkt überschreiben**  
   Nur als Low-Level-Escape-Hatch.

6. **Kein `!important` verwenden**  
   Weder Theme noch Website sollen die Layer-Reihenfolge damit umgehen.

## Notwendige Bereinigungen

### `!important` entfernen

In `theme/osman/elements/ntl-hero/_style-default.scss` steht:

```scss
--height-offset: 12.75rem !important;
```

CSS-Layer lösen `!important` nicht sinnvoll. Bei wichtigen Deklarationen kehrt sich die Layer-Priorität sogar um. Dieser Wert soll ohne `!important` oder über die Komponenten-API gesetzt werden.

### Harte Werte prüfen

Beispiele:

- `background: #fff`
- `color: #585b63`
- `border: 1px solid #e7e4e1`
- feste Spacing-Werte

Nicht jeder Wert benötigt eine neue Variable. Wiederkehrende Designentscheidungen sollen aber auf bestehende semantische `--nt-*`-Tokens umgestellt werden. Einmalige strukturelle Werte dürfen in der Komponentenvariante bleiben.

### Media Queries separat migrieren

In `_warning-heading.scss` und `nte-offcanvas/_style-default.scss` existieren klassische Media Queries. Das betrifft nicht direkt die Layer-Migration, verstößt aber gegen die aktuelle Responsive-Konvention. Dies soll als getrennte Bereinigung behandelt werden, damit die Cascade-Umstellung nicht gleichzeitig das responsive Verhalten verändert.

## Empfohlene Umsetzung in zwei Schritten

### Schritt 1: Layer-Infrastruktur

Voraussichtlich betroffen:

- `theme/osman/_theme.scss`
- `docs/_src/style.scss`
- `docs/theme-architecture.md`

Dabei:

- globale Layer-Reihenfolge registrieren;
- bestehende Includes den sieben Theme-Unterlayern zuordnen;
- `@content` in `website` verschieben;
- Reset und Scheme-Ausgabe layern;
- keine Komponentenstruktur verändern.

### Schritt 2: Override-Härtung

Danach:

- `!important` entfernen;
- unnötig harte Farben auf bestehende Tokens umstellen;
- eine kleine Override-Demo oder Testseite ergänzen;
- prüfen, ob ungenutzte Dateien wie `nte-card/nte-card.scss`, `nte-offcanvas/` und `_site-shell.scss` absichtlich nicht geladen werden;
- responsive Altregeln getrennt bereinigen.

## Prüfung

Die Migration soll mindestens diese Fälle testen:

- `--theme-primary` wird von der Website überschrieben.
- Link- und HTML-Defaults lassen sich im `website`-Layer ändern.
- Ein Website-Override gewinnt gegen den vorhandenen Nav-ID-Selektor.
- Utilities gewinnen innerhalb des Themes gegen Base- und Komponentenregeln.
- Desktop- und Mobile-Darstellung bleiben visuell unverändert.
- Das kompilierte CSS enthält die Layer in der festgelegten Reihenfolge.
- Es entstehen keine ungelayerten Theme-Regeln, ausgenommen unkritische globale Dinge wie `@font-face`.

Damit ist das Theme intern klar geordnet, während die Website mit niedriger Spezifität und ohne `!important` sowohl Tokens als auch konkrete Komponenten überschreiben kann.
