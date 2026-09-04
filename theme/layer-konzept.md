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

Zuerst wird die allgemeine Elements-API materialisiert, danach folgen die Osman-Defaults. Normale `ul` ohne explizite `.list`-Basisklasse erhalten nur die neutrale Listenbasis; dekorative Marker wie `list-diamond` werden normalerweise bewusst im Content per Klasse gesetzt:

```scss
@include nextrapElements.style-elements();

:where(ul:not(.list)) {
  @include nextrapElements.list();
}
```

Verzierungen wie `list-diamond` gehören im Regelfall an das jeweilige Markup, z. B. per Kramdown `{: .list .list-diamond }`. Theme-weite oder contentbereich-weite Dekorationen sind nur als bewusst begründete Ausnahme zulässig. Eine Website kann diesen Layer gezielt ergänzen. Er bleibt durch die registrierte Reihenfolge immer nach Typography und vor Components.

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

## Proposal: kurze, eindeutige SCSS-Quellnamen

### Ziel

DevTools zeigt in kompakten Ansichten häufig nur den Dateinamen und kürzt lange Namen zusätzlich. Generische Namen wie `_theme.scss`, `_style-default.scss`, `_base.scss`, `all.scss` oder `index.scss` lassen dann weder Komponente noch Herkunft erkennen.

Der Dateiname nennt deshalb zuerst die betroffene Komponente beziehungsweise den semantischen Block und direkt danach einen kurzen, standardisierten Herkunftscode. Details, die bei einer Kürzung entbehrlich sind, stehen am Ende. Der Verzeichnispfad bleibt ausführlich und bildet Ownership sowie Hierarchie ab; der Basename ist die kompakte Anzeige für den Inspector.

### Kompaktes Schema

```text
_<subject>__<origin>[-<scope>][-<variant>].scss
```

| Segment | Bedeutung | Regel |
|---|---|---|
| `subject` | Komponente, HTML-Ziel oder Klassenblock | steht immer zuerst und verwendet möglichst den echten Tag-/Blocknamen, z. B. `nte-navbar`, `ntl-card-row`, `site-footer`, `html-a` oder `tokens` |
| `origin` | Herkunftsebene | genau einer der festen Kurzcodes `cmp`, `th`, `cth` oder `cus` |
| `scope` | Theme- oder Kundenschlüssel | nur wenn zur Unterscheidung nötig; stabiler, verständlicher Projekt-Kurzname mit höchstens zwölf Zeichen |
| `variant` | optionale Variante oder Rolle | steht zuletzt, weil sie bei einer Kürzung weniger wichtig ist als Komponente und Herkunft |

Das führende `_` kennzeichnet ein Sass-Partial. Alle Segmente verwenden Kleinbuchstaben und Kebab-Case. Doppelte Unterstriche trennen den gut sichtbaren Komponenten-/Blocknamen von der Herkunft; einfache Bindestriche trennen die kurzen Zusatzinformationen.

### Herkunftscodes

| Code | Herkunft | Beispiel | Im Inspector sofort lesbar |
|---|---|---|---|
| `cmp` | Basisstyle aus der Nextweb-/Nextrap-Komponente | `_nte-navbar__cmp.scss` | Navbar, Komponentenbasis |
| `th` | allgemeines ThemeJS2-Theme einschließlich Default-Theme | `_nte-navbar__th-default.scss`, `_nte-navbar__th-osman.scss` | Navbar, Default- beziehungsweise Osman-Theme |
| `cth` | wiederverwendbares kundenspezifisches Theme | `_nte-navbar__cth-salchow.scss` | Navbar, Salchow-Kundentheme |
| `cus` | Anpassung in genau einem Kundenprojekt | `_nte-navbar__cus-salchow.scss` | Navbar, konkrete Salchow-Anpassung |

Die Codes sind kurz, aber nicht projektspezifisch abkürzbar. Ein Team darf beispielsweise nicht parallel `theme`, `t` und `th` verwenden. Der Komponentenname wird nicht zu `nav` verkürzt, wenn das echte Element `nte-navbar` heißt; die direkte Zuordnung zum DOM ist wichtiger als wenige eingesparte Zeichen.

### Komponenten- und Variantenbeispiele

```text
_nte-navbar__cmp.scss
_nte-navbar__th-default.scss
_nte-navbar__th-osman.scss
_nte-navbar__th-osman-offcanvas.scss
_nte-navbar__cth-salchow.scss
_nte-navbar__cus-salchow.scss

_ntl-card-row__cmp.scss
_ntl-card-row__th-osman-ribbon.scss
_nte-card__th-osman-in-ribbon.scss

_site-footer__th-osman.scss
_site-footer__cth-salchow.scss
_site-footer__cus-salchow.scss
```

Bei verschachtelten Komponenten bleibt die tatsächlich gestylte Komponente das erste Segment. Eine Card innerhalb der Ribbon-Variante der Card Row heißt deshalb `_nte-card__th-osman-in-ribbon.scss` und nicht `_ntl-card-row-nte-card-style-ribbon.scss`. So bleibt die relevante DOM-Komponente auch bei gekürzter Anzeige sichtbar.

Nicht komponentenbezogene Dateien verwenden ebenfalls ein kurzes, konkretes Subject:

```text
_tokens__th-osman.scss
_typography__th-osman.scss
_html-defaults__th-osman.scss
_html-a__th-osman.scss
_site-shell__cus-salchow.scss
```

### Verzeichnisstruktur

Die vorhandene Struktur kann erhalten bleiben; der Dateiname wiederholt absichtlich nur die Informationen, die im Inspector benötigt werden:

```text
theme/
├── default/
│   ├── _bundle__th-default.scss
│   ├── _tokens__th-default.scss
│   └── elements/nte-navbar/_nte-navbar__th-default.scss
├── osman/
│   ├── _bundle__th-osman.scss
│   ├── _tokens__th-osman.scss
│   ├── elements/
│   │   ├── nte-navbar/_nte-navbar__th-osman.scss
│   │   └── ntl-card-row/_ntl-card-row__th-osman-ribbon.scss
│   └── classes/_site-footer__th-osman.scss
└── customer/
    └── salchow/
        ├── _bundle__cth-salchow.scss
        └── elements/nte-navbar/_nte-navbar__cth-salchow.scss

docs/_src/
└── customer/
    ├── _site-shell__cus-salchow.scss
    └── _nte-navbar__cus-salchow.scss
```

`bundle` ist der einzige vorgesehene Subject-Name für reine `@use`-/`@forward`-Sammler. Ein style-erzeugendes Partial darf nicht `_all.scss`, `_index.scss`, `_theme.scss`, `_base.scss`, `_defaults.scss` oder `_style-default.scss` heißen. Öffentliche Package-Einstiege dürfen kurz bleiben, müssen aber den Paketnamen tragen, beispielsweise `themejs2.scss` statt `index.scss`.

### Zuordnung vorhandener ThemeJS2-Namen

| Heute | Proposal |
|---|---|
| `all.scss` | `themejs2-all.scss` |
| `index.scss` | `themejs2.scss` |
| `theme/osman/_theme.scss` | `theme/osman/_bundle__th-osman.scss` |
| `theme/osman/_runtime-settings.scss` | `theme/osman/_tokens__th-osman.scss` |
| `theme/osman/elements/nte-navbar/_style-default.scss` | `theme/osman/elements/nte-navbar/_nte-navbar__th-osman.scss` |
| `theme/osman/elements/ntl-card-row/_style-ribbon.scss` | `theme/osman/elements/ntl-card-row/_ntl-card-row__th-osman-ribbon.scss` |
| `theme/osman/elements/ntl-card-row/nte-card/_in-style-ribbon.scss` | `theme/osman/elements/ntl-card-row/nte-card/_nte-card__th-osman-in-ribbon.scss` |
| `theme/osman/html-elements/_defaults.scss` | `theme/osman/html-elements/_html-defaults__th-osman.scss` |
| `theme/osman/classes/_site-footer.scss` | `theme/osman/classes/_site-footer__th-osman.scss` |

Dasselbe Schema gilt für Raven, Mueller, Epraxis und spätere Themes. Die Umbenennung selbst gehört in einen getrennten Implementierungs-PR, weil alle `@use`-/`@forward`-Referenzen und veröffentlichten Sass-Einstiege angepasst und auf Rückwärtskompatibilität geprüft werden müssen.

### Source Maps sind Voraussetzung

Eindeutige SCSS-Namen erscheinen im Browser nur, wenn der Produktionsbuild CSS Source Maps erzeugt und `style.css.map` zusammen mit `style.css` ausliefert. Der Vite-Zielstandard aktiviert daher CSS Source Maps. Die Abnahme öffnet für jede Herkunftsebene mindestens eine Regel in DevTools und bestätigt die Zuordnung zur ursprünglichen SCSS-Datei:

```text
_nte-navbar__cmp.scss
_nte-navbar__th-osman.scss
_nte-navbar__cth-salchow.scss
_nte-navbar__cus-salchow.scss
```

Direkt am Element gesetzte CSS Custom Properties erscheinen absichtlich als `element.style`. Ohne ausgelieferte Source Map zeigt der Inspector für kompiliertes SCSS nur `dist/style.css`; kein Dateinamensschema kann diese technische Grenze ersetzen.

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

---

## Pilotvergleich und Zielstandard für Nutzprojekte

Dieses Kapitel überträgt das Layer-Modell vom Osman-Theme auf die drei Pilotprojekte und definiert die Zielarchitektur für später hunderte gleichartig betreute Kunden-Repositories.

### Vergleich der Pilotstände

| Bereich | Osman | Salchow | Raven |
|---|---|---|---|
| Theme-Paket | `@leuffen/themejs2` | `@leuffen/themejs2` | `@leuffen/themejs1` |
| Build | Vite, ein Haupteinstieg | Vite, getrennte Index- und Embed-Builds | Webpack |
| Produktions-CSS | eingecheckte `style.css` | CSS überwiegend in JavaScript injiziert; Layout referenziert zusätzlich eine fehlende `style.css` | mehrere CSS-Stufen, darunter eine praktisch leere `style.css` |
| Theme-Konfiguration | CSS Custom Properties in SCSS | Sass-Map in SCSS | Sass-Variablen und Nextrap-Bridge |
| Cascade Layers | im Osman-Theme vorhanden, im Nutzprojekt noch nicht vollständig registriert | nicht als Nutzprojektvertrag umgesetzt | nicht vorhanden |
| Änderung ohne JavaScript-Build | Inhalte und Layouts, nicht die Theme-Werte | Inhalte und Layouts, nicht die Theme-Werte | Inhalte und Layouts, nicht die Theme-Werte |

Osman ist die beste technische Ausgangsbasis. Es ist jedoch noch kein Standard: Kundenwerte liegen im kompilierten SCSS, die öffentliche Layer-Reihenfolge wird im Nutzprojekt nicht ausdrücklich registriert und der Ausgabe-/Chunk-Vertrag ist nicht als gemeinsamer Nutzprojektstandard festgelegt. Salchow besitzt sinnvolle zentrale Konfigurationsansätze, kombiniert sie aber mit zwei Buildwegen und CSS-Injection. Raven ist wegen ThemeJS1, Webpack und der historischen Style-Aufteilung eine Migrationsquelle, keine Vorlage.

### Verbindliche Verantwortungsgrenzen

Jedes Nutzprojekt soll dieselben Pfade und Zuständigkeiten besitzen:

| Pfad | Verantwortung | Neuer Vite-Build erforderlich |
|---|---|---|
| `docs/assets/dist/index.js` | stabiler JavaScript-Einstieg | nur bei JavaScript- oder Komponentenänderungen |
| `docs/assets/dist/chunks/*.js` | von Vite erzeugte JavaScript-Chunks | nur bei JavaScript- oder Komponentenänderungen |
| `docs/assets/dist/style.css` | separat gebautes Theme, Elements, Components, Patterns und Utilities | nur bei Framework- oder Themeänderungen |
| `docs/assets/site.css` | projektweite Kunden-Tokens und Website-Overrides im `website`-Layer | nein |
| `docs/_data/general.yml` | Kundenstammdaten einschließlich `addresses.default` und weiterer Adressen | nein |
| `docs/_data/defaults.yaml` | sonstige allgemeine Rahmenwerte, aber keine `show_*`-Schalter für Header/Footer | nein |
| `docs/_layouts/10_blank.html` | Dokumentkopf, Asset-Reihenfolge und optionales Critical-Style-Include | nein |
| `docs/_layouts/20_navbar.html` | direkt editierbares Header-/Navbar-HTML | nein |
| `docs/_layouts/30_footer.html` | Seiteninhalt und direkt editierbares Footer-HTML | nein |
| `docs/_src/style.scss` | Auswahl genau eines Themes und Aufbau des Basis-CSS | ja |

Der produktive Betrieb darf weder Node, Vite, Sass, lokale Workspaces noch ein externes Runtime-CDN voraussetzen. Die einmal erzeugten Dateien unter `docs/assets/dist/` werden eingecheckt und bleiben zusammen mit dem Kunden-Repository auslieferbar.

### Dreistufige Layout-Architektur und lokale Anpassbarkeit

Die Standardvorlage beschränkt den nummerierten Website-Rahmen unter `docs/_layouts/` auf genau drei Dateien:

1. `10_blank.html` enthält Dokumentkopf, Meta-Daten und die feste Reihenfolge der CSS-/JavaScript-Assets.
2. `20_navbar.html` erbt von `10_blank.html` und enthält das vollständige, kundenspezifisch editierbare Header-/Navbar-HTML.
3. `30_footer.html` erbt von `20_navbar.html`, gibt den Seiteninhalt aus und enthält das vollständige, kundenspezifisch editierbare Footer-HTML.

Die bisherigen nummerierten Zwischenlayouts `20_body.html`, `30_script.html`, `50_navbar.html`, `60_footer.html` und `70_main.html` werden in diese drei Verantwortungen zusammengeführt. Header und Footer sind keine über Optionen zusammengesetzten Universaltemplates. Die Vorlage liefert funktionsfähiges Ausgangs-HTML; im Kundenprojekt darf und soll dieses HTML direkt angepasst werden.

Einmalige Instanzwerte stehen möglichst dort, wo sie wirken. Bei einer Navbar kann der verfügbare Platz beispielsweise direkt als dokumentierte CSS Custom Property am Element gesetzt werden:

```html
<nte-navbar
  class="site-header__navbar"
  style="--navbar-available-width: calc(100vw - 18rem); --navbar-height: 5rem"
>
```

Damit ist eine Kundenänderung in der ohnehin zu bearbeitenden Header-Datei auffindbar und benötigt keine zusätzliche SCSS-Datei als indirekte Konfiguration. Dasselbe gilt für einmalige Footer-Spalten, Abstände oder Höhen. Die konkrete Variable muss Teil der dokumentierten Komponenten- oder Klassen-API sein; beliebige interne Werte werden nicht von außen überschrieben.

Für Styles gilt folgende Nähe-Regel:

1. Wiederverwendbare Basisregeln bleiben im Theme unter der zuständigen Element-, Komponenten- oder Klassen-Datei.
2. Einmalige Werte einer Instanz stehen als CSS Custom Properties direkt am HTML-Element.
3. Größere, nur für diesen Header oder Footer geltende Kundenregeln dürfen als klar begrenzter `<style>`-Block im zugehörigen Layout stehen.
4. Regeln, die mehrere Layouts oder Seitenbereiche betreffen, stehen in `docs/assets/site.css`.
5. Gemessenes Critical CSS darf über ein Include im `<head>` von `10_blank.html` eingebettet werden; ohne nachgewiesenen Ladezeitvorteil bleibt externes, cachebares CSS der Standard.

Semantische Klassenkomponenten, die normale Light-DOM-Elemente gestalten, dürfen abweichend von nativen HTML-Defaults und NTL-/NTE-Komponenten BEM (Block, Element, Modifier) verwenden. Sie werden unter `theme/<theme>/classes/` abgelegt, beispielsweise als `theme/osman/classes/_site-footer.scss`, und im `themes.patterns`-Layer ausgegeben. Header-/Footer-Markup referenziert diese Klassen direkt.

### Layer-Vertrag des Nutzprojekts

Jedes Kunden-Stylesheet registriert die Reihenfolge ausdrücklich:

```scss
@layer reset, schemes, themes, website;

@layer themes {
  @layer tokens, base, typography, elements, components, patterns, utilities;
}
```

`docs/_src/style.scss` lädt genau ein Theme. Es enthält keine Kundenfarben und keine kundenspezifischen Komponentenregeln. Scheme-Ausgabe gehört in `schemes`; die Theme-Ausgabe bleibt unter `:where(.theme-<name>)` gescoped.

Kundenwerte liegen als normales, direkt editierbares CSS in `docs/assets/site.css`:

```css
@layer website {
  :where(.theme-osman) {
    --theme-primary: #2b94d6;
    --theme-accent: #2b94d6;
    --theme-radius: 0;
  }
}
```

`site.css` wird nach `dist/style.css` geladen. Damit können Farben, Abstände und gezielte Light-DOM- oder dokumentierte Component-Overrides später ohne JavaScript-Toolchain geändert werden. JavaScript setzt keine visuellen Theme-Werte.

### Öffentliche Token-Grenze

- `--theme-*` bildet die kleine, dokumentierte und browsereditierbare Kunden-API.
- `--nt-*` bleibt die gemeinsame Nextrap-Low-Level- und Ableitungs-API.
- Wiederkehrende Kundenentscheidungen werden auf vorhandene semantische Tokens abgebildet.
- Einmalige Strukturwerte bleiben bei der zuständigen Komponente oder im Website-Rahmen.
- Neue öffentliche Token-Kategorien benötigen eine eigene Entscheidung und dürfen nicht aus einem einzelnen Kundenwunsch entstehen.
- Ungelayertes Kunden-CSS wird nicht als regulärer Override-Weg verwendet.

### Build- und Abhängigkeitsstandard

- Nutzprojekte verwenden veröffentlichte semantische Versionen statt `workspace:*`.
- Vite erzeugt den festen JavaScript-Einstieg `docs/assets/dist/index.js` und die separate CSS-Datei `docs/assets/dist/style.css`; CSS wird nicht in JavaScript injiziert.
- Vite erzeugt und veröffentlicht `docs/assets/dist/style.css.map`, damit DevTools den ursprünglichen, eindeutig benannten SCSS-Source anzeigt.
- Das Standardprojekt verwendet einen JavaScript-Einstieg und erzeugt daraus bei Bedarf gehashte Chunks unter `docs/assets/dist/chunks/`.
- `index.js` darf Chunks importieren; ein erzwungenes Einzelbundle ist nicht Teil des Vertrags. Einstiegspfad, Chunk-Verzeichnis und Asset-Namen werden in Vite ausdrücklich konfiguriert.
- Kundenspezifische Embed- oder Late-Style-Pipelines gehören nicht zur Vorlage.
- `emptyOutDir` verhindert verwaiste Build-Artefakte.
- Ein Produktions-Build wird nur als aktuell bezeichnet, wenn `vite build` erfolgreich abgeschlossen wurde.
- Änderungen an Inhalt, Jekyll-Layouts, Stammdaten oder `site.css` dürfen keinen Vite-Build verlangen.
- Neue Interaktivität oder neue Web Components erfordern weiterhin einen neuen Build; „ohne Build“ gilt nicht für neues JavaScript-Verhalten.

### Zielkonfiguration der drei Pilotkunden

#### Osman

1. Öffentliche Layer-Reihenfolge im Nutzprojekt registrieren.
2. Kunden-Tokens aus `docs/_src/style.scss` nach `docs/assets/site.css` verschieben.
3. Theme-Klasse zentral als Jekyll-Default setzen, statt sie auf Inhaltsseiten zu wiederholen.
4. Vite auf separates `style.css`, stabilen `index.js`-Einstieg und JavaScript-Chunks unter `dist/chunks/` konfigurieren.
5. Abhängigkeit auf eine veröffentlichte ThemeJS2-Version umstellen.
6. Einmal neu bauen und alle benötigten Dist-Dateien einchecken.
7. Als Referenzprojekt für die nachfolgenden Migrationen validieren.

#### Salchow

1. Dieselbe dreistufige Layoutkette und Vite-Ausgabe wie Osman übernehmen.
2. getrennte Index-/Embed-Builds und CSS-Injection entfernen, sofern kein separat belegter kritischer Anwendungsfall besteht.
3. eine echte `docs/assets/dist/style.css` erzeugen und laden.
4. Sass-Map-Kundenwerte nach `docs/assets/site.css` überführen.
5. dynamische Kundenvarianten des Website-Rahmens durch den gemeinsamen Vertrag ersetzen.
6. Abhängigkeit auf eine veröffentlichte ThemeJS2-Version umstellen.
7. Einmal neu bauen und die statischen Assets einchecken.

#### Raven

1. ThemeJS1 und Webpack vollständig durch ThemeJS2 und die Standard-Vite-Konfiguration ersetzen.
2. Das Raven-Theme vor der Kundenmigration auf denselben Layer- und `--theme-*`-Vertrag wie Osman bringen.
3. historische `style_custom`-, `style_late`- und Bridge-Strukturen auflösen.
4. Kunden-Tokens nach `docs/assets/site.css` überführen.
5. die gemeinsame Layoutkette aus `10_blank.html`, `20_navbar.html` und `30_footer.html` übernehmen.
6. Einmal neu bauen und die statischen Assets einchecken.
7. Raven wegen des größten technischen Sprungs zuletzt migrieren und als Gegenprobe für einen zweiten Theme-Typ verwenden.

### Empfohlene Reihenfolge

1. ThemeJS2-Vertrag und `_root`-Vorlage fertigstellen.
2. Osman als Referenz migrieren.
3. Salchow auf denselben Build- und Layoutstand bringen.
4. Raven auf ThemeJS2 migrieren.
5. Erst danach weitere Kunden-Repositories aus `_root` erzeugen.

Die Migrationen erfolgen repositoryweise. Der ThemeJS2-Pull-Request definiert den Standard; jeder Pilotkunde erhält anschließend einen eigenen Pull Request mit seinem einmaligen Migrations-Build.

