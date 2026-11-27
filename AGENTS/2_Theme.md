# § 2 Theme-Verzeichnis

```text
theme/
|-- index.scss                            (theme()-Mixin und Layer)
|-- elements/
|   |-- <tag-name>/                         (z. B. ntl-hero, nte-navbar, table)
|   |   |-- _style-<style-name>.scss         (Klasse: style-<style-name>)
|   |   `-- _style-<style-name>.usage.md           (Usage-Datei)
|   `-- id_<id>/                            (z. B. id_footer)
|       |-- _style-<style-name>.scss
|       `-- _style-<style-name>.usage.md
|-- variants/
|   `-- _variant-<name>.scss
`-- misc/
    `-- <style-name>/                      (z. B. dommer)
        `-- _<name>.scss
```

`theme/` bündelt Element-Styles, seitenweite Variants und noch nicht zugeordnete
Styles unter `misc/`. Element-Styles definieren die funktionale Darstellung,
Variants die visuellen Werte über CSS-Variablen. Dieses Dokument definiert
den verbindlichen Zielzustand: eine gemeinsame Theme-Basis und genau eine
öffentliche SCSS-API für alle Styles, keine separaten Kunden-Themes.

## § 2.1 `theme/elements/`

Jedes Unterverzeichnis enthält die Styles eines HTML-Tags, einer Web
Component oder eines festen Layout-Bereichs. Der HTML- oder
Web-Component-Tag ist direkt der Verzeichnisname. ID-Styles liegen in
`id_<id>/`, zum Beispiel `id_footer/` für `#footer`.

### § 2.1.1 Aufnahmekriterien

Verwende regulär HTML-Tags und Web Components wie NTL oder NTE. Eine
eigenständige ID ist eine begründete Ausnahme für feste Layout-Bereiche.
Verwende im Element-Verzeichnis Tag-Namen und die vorgesehenen ID-Namen.
BEM-Notation ist ausgeschlossen.

Jeder neue Eintrag und jeder eigenständige Style braucht ein konkretes
Beispiel für eine Funktion oder Komposition, die mit vorhandenen Elementen,
Styles und Modifiern nicht abgedeckt ist. Farbvariationen gehören nach
`theme/variants/`. Eine Tabelle mit einer eigenen funktionalen Darstellung
für Öffnungszeiten könnte den Style `table/_style-open-hours.scss`
erhalten, sofern vorhandene Tabellen-Styles die benötigte Darstellung
nicht abdecken.

### § 2.1.2 Struktur eines Elements

Der vollständige Pfad eines Element-Styles lautet
`theme/elements/<element-name>/_style-<style-name>.scss`.
Bei einem HTML-Tag oder einer Web Component entspricht `<element-name>`
dem Tag-Namen. Die Datei definiert die Klasse `style-<style-name>` für
dieses Element.

| SCSS-Datei | Verwendung im Markup |
| --- | --- |
| `theme/elements/table/_style-open-hours.scss` | `<table class="style-open-hours">` |

Pro Element ist höchstens eine `style-*`-Klasse zulässig. Eigene
Default-Regeln für ein Element stehen in
`theme/elements/<element-name>/_style-default.scss`. NTL und NTE wählen
den Default gemäß ihrem Komponentenvertrag automatisch, wenn keine
Style-Variante angegeben ist.

Definiere zugehörige Modifier in derselben Datei. Ein Modifier kann etwa
die Reihenfolge ändern oder für eine dunkle Darstellung bestehende
Hintergrund- und Textrollen umschalten. Nutze für visuelle Werte bevorzugt
vorhandene `--nt-*`-Variablen aus Nextrap Style Base. Binde für NTL- und
NTE-Styles die passenden Nextrap-Mixins ein, wo sie vorhanden sind.
Für Content- und Responsive-Anpassungen gilt die Reihenfolge aus
[§ 4.2.2 Responsive](4_Libraries.md#-422-responsive). Direkte Werte sind nur
eine Ausnahme, wenn passende Variablen und Mixins fehlen. Palettenwerte
liefert die Variant.

Zu jeder SCSS-Datei gehört im selben Verzeichnis eine Usage-Datei
mit demselben Basisnamen und der Endung `.usage.md`, etwa `_style-default.usage.md` zu `_style-default.scss`.
Das Front Matter enthält ausschließlich `description`. Darunter stehen
die Verwendung, relevante Voraussetzungen, unterstützte Modifier und
mindestens ein Beispiel für die eigenständige Funktion.
Ein separates System liest die Usage-Dateien aus. Sie bleiben außerhalb der
Demo-Ausgabe. Das [Usage-Beispiel](references/2_Theme/_style-demonstration.usage.md) zeigt
das Format am dazugehörigen SCSS-Beispiel.

### § 2.1.3 Benennung eines Elements

Benenne Styles kurz nach ihrer Funktion. Trenne mehrere Wörter durch
Bindestriche und lass den Elementnamen aus dem Style-Namen weg. Der
Elementname steht bereits im Verzeichnis und im CSS-Selektor.

Für die Öffnungszeiten-Tabelle heißt die Klasse `style-open-hours`. Die
Datei liegt unter `theme/elements/table/_style-open-hours.scss`.

### § 2.1.4 Modifier

Ein Style-Mixin registriert den Style am zugehörigen Element, zum Beispiel
`table.style-open-hours`. Binde das Mixin über den SCSS-Einstieg des
Elements ein. Definiere Modifier im selben Mixin als zusätzliche Klassen
am selben Element. Das Namensmuster ist `<style-name>-<modifier>`, etwa
`open-hours-vertical`, `open-hours-horizontal` oder `open-hours-dark`.
Ein allgemeiner Klassenname wie `dark` ist nur als ausdrücklich
dokumentierte Ausnahme zulässig.

Zum Beispiel ergibt `class="style-open-hours open-hours-dark"` den
Selektor `table.style-open-hours.open-hours-dark`. Pro Element bleibt
eine `style-*`-Klasse zulässig. Die
[SCSS-Demonstration](references/2_Theme/_style-demonstration.scss) zeigt das Mixin
mit einem Modifier und die Einbindung im Sass-Einstieg.

### § 2.1.5 Format der Usage-Beispiele

Beginne bei NTL und allen im Content-Bereich verwendbaren Elementen mit
einem Markdown-Beispiel. Verwende Kramdown-Attributlisten. Weise einem
Abschnitt seine NTL-Komposition mit dem `layout`-Attribut des
[TrunkJS Content Pane](4_Libraries.md#-421-content-pane) zu. Zeige die
Unterelemente oder Inhaltsabschnitte im selben Beispiel.

```markdown
## Unsere Leistungen
{: layout="ntl-card-row" }

### Beratung

Wir klären gemeinsam, welche Optionen infrage kommen.

### Termin

Vereinbaren Sie einen Termin für das Erstgespräch.
```

Zeige die Style-Varianten und Modifier vorrangig in Markdown, jeweils
in dem Format, das ihre Verwendung erklärt. Ein kurzes HTML-Beispiel
kann am Ende stehen, wenn es eine zusätzliche Verwendung zeigt, etwa
einen Header im Seitenlayout oder Tabellenzeilen mit expliziten
Zeilenüberschriften. Für Elemente, die nur in HTML-Layouts eingesetzt
werden, genügt ein HTML-Beispiel.

## § 2.2 `theme/variants/`

Lege pro seitenweiter Variant genau eine Datei
`theme/variants/_variant-<name>.scss` an. Die Datei exportiert genau ein
Sass-Mixin `variant-<name>`. Das Mixin gibt genau eine CSS-Klasse
`.variant-<name>` aus. Der Klassenblock enthält ausschließlich
CSS-Custom-Property-Deklarationen.

Setze regulär nur vorhandene `--nt-*`-Variablen aus Nextrap Style Base.
Dazu gehören Werte für Schriften, Farben, Rahmen und Hintergründe.
Verwende semantische Defaults und leite weitere Werte nach Möglichkeit
von der Primärfarbe ab. Neue `--theme-*`-Variablen erfordern die
ausdrückliche Zustimmung des Entwicklers.

Für Dommer exportiert `_variant-dommer.scss` das Mixin `variant-dommer`,
das `.variant-dommer` mit den zugehörigen Token-Werten ausgibt.

Das [Variant-Beispiel](references/2_Theme/_variant-demonstration.scss) zeigt eine
Klasse mit einem konkreten Primärwert und weiteren Nextrap-Tokens.

## § 2.3 `theme/index.scss`

### § 2.3.1 Theme-Mixin und Layer

`theme/index.scss` stellt genau ein gemeinsames `theme()`-Mixin für alle
Styles bereit: Nextrap Reset, Runtime-Tokens und Schemes, Typography,
HTML-Defaults, NTE-/NTL-Styles, Variants, Misc und Utilities. Separate
Theme-Entries oder Theme-Mixins für Osman, Dommer usw. entfallen.
SCSS registriert Styles; Web Components registriert der TypeScript-Entry.

Der Entry deklariert die Layer-Reihenfolge vor der ersten CSS-Ausgabe:

```scss
// Hält Website-Overrides nach der Theme-Basis und Utilities nach Komponenten.
@layer reset, schemes, themes, website;
@layer themes {
  @layer tokens, base, typography, elements, components, patterns, utilities;
}
```

| Layer | Inhalt |
| --- | --- |
| `reset` | Nextrap Reset |
| `schemes` | globale Runtime-Scheme-Selektoren |
| `themes.tokens` | Token-Defaults, Runtime-Ableitungen und Variants |
| `themes.base` / `themes.typography` | Basisdarstellung und Typography |
| `themes.elements` / `themes.components` | HTML-Defaults und NTE-/NTL-Styles |
| `themes.patterns` | zusätzliche Klassen, Patterns und Misc |
| `themes.utilities` | Nextrap Utilities |
| `website` | User Base Styles und Website-Overrides |

Für normale Deklarationen steigt die Priorität von links nach rechts.
`!important` kehrt die Layer-Priorität um und ist kein Override-Konzept.
Der aufrufende Scope soll mit `:where(...)` Spezifität 0 behalten, etwa
`:where(:root)` für die Website. Unterschiedliche Darstellungen wählen
Variant-Klassen und CSS-Variablen, keine separaten Theme-Imports.
`:host` gehört dagegen in einen Shadow-DOM-Kontext, nicht in globales CSS.
Layer-Priorität und Selector-Spezifität sind getrennte Mechanismen.

### § 2.3.2 Partials mit `meta.load-css` laden

Lade CSS-ausgebende Partials direkt im passenden Layer mit `meta.load-css`.
So braucht der Theme-Entry nicht für jedes Partial ein `@use` plus einen
zweiten Mixin-Aufruf. Gekürztes Zielbeispiel:

```scss
@use "sass:meta";

// Bindet zusätzliche Dommer-Styles erst beim Aufruf der Theme-Basis ein.
@mixin theme() {
  @layer themes.patterns {
    @include meta.load-css("./misc/dommer/custom");
  }
}
```

Das Beispiel setzt `theme/misc/dommer/_custom.scss` mit CSS-Ausgabe voraus.
`meta.load-css` lädt CSS, exportiert aber keine Sass-Members und ruft keine
Mixins auf. Reine Mixin-Dateien wie die Style- und Variant-Beispiele oben
brauchen weiterhin `@use` plus `@include`, gegebenenfalls in einem gemeinsamen
CSS-Entry. Öffentliche Mixins werden mit `@forward` weitergereicht.

### § 2.3.3 Ein gemeinsamer Export

Der Root-`index.scss` reicht ausschließlich die gemeinsame `theme()`-API aus
`theme/index.scss` weiter. Consumer importieren keine individuellen Dateien
wie `theme/osman.scss` oder `theme/shared.scss`. Bisher getrennte Styles werden
nach `elements/`, `variants/` oder `misc/` überführt und zentral eingebunden;
alte Theme-Entries und ihre Consumer-Imports sind beim Umbau zu entfernen.

Unterverzeichnisse wie `misc/dommer/` gruppieren interne Styles, erzeugen aber
keine eigenen Theme-Exports. Library-Regeln stehen in
[§ 4 Libraries](4_Libraries.md); Public Exports und Consumer-Usage gehören in
eine separate Usage-Dokumentation.

## § 2.4 `theme/misc/`

Sammle Styles, die weder die Kriterien für `elements/` noch für `variants/`
erfüllen, unter `theme/misc/<style-name>/`, etwa `theme/misc/dommer/`.
Das gilt auch für neue Klassen und vorläufige Sonderlösungen, um zunächst
die Funktion herzustellen. Vorhandene Nextrap-Lösungen bleiben vorrangig.

Binde die CSS-Entries über `theme/index.scss` im Layer `themes.patterns` ein.
Nicht direkt in Demo-Entries laden oder unzugeordnete Regeln im zentralen
Mixin sammeln. Dokumentiere Zweck und Ausnahme kurz am jeweiligen Block.
Sobald ein Style die Kriterien für Elements oder Variants erfüllt, ordne ihn
dorthin ein. `misc/` ersetzt keine vorhandene Komponente und hebt Token-,
Scope- oder Komponentenverträge nicht auf.
