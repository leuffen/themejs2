# § 2 Theme-Verzeichnis

```text
theme/
|-- elements/
|   |-- <tag-name>/                         (z. B. ntl-hero, nte-navbar, table)
|   |   |-- _style-<style-name>.scss         (Klasse: style-<style-name>)
|   |   `-- _style-<style-name>.sidecar.md           (Markdown-Sidecar)
|   `-- id_<id>/                            (z. B. id_footer)
|       |-- _style-<style-name>.scss
|       `-- _style-<style-name>.sidecar.md
`-- variants/
    `-- _variant-<name>.scss
```

`theme/` bündelt Element-Styles und seitenweite Variants. Element-Styles
definieren eine funktionale Darstellung. Die Variants liefern visuelle
Werte über CSS-Variablen.

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
Direkte visuelle Werte sind eine Ausnahme, wenn passende Variablen und
Mixins fehlen. Konkrete Palettenwerte liefert die seitenweite Variant.

Zu jeder SCSS-Datei gehört im selben Verzeichnis ein Markdown-Sidecar
mit demselben Basisnamen und der Endung `.sidecar.md`, etwa `_style-default.sidecar.md` zu `_style-default.scss`.
Das Front Matter enthält ausschließlich `description`. Darunter stehen
die Verwendung, relevante Voraussetzungen, unterstützte Modifier und
mindestens ein Beispiel für die eigenständige Funktion.
Ein separates System liest die Sidecars aus. Sie bleiben außerhalb der
Demo-Ausgabe. Das [Sidecar-Beispiel](references/_style-demonstration.sidecar.md) zeigt
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
[SCSS-Demonstration](references/_style-demonstration.scss) zeigt das Mixin
mit einem Modifier und die Einbindung im Sass-Einstieg.

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

Das [Variant-Beispiel](references/_variant-demonstration.scss) zeigt eine
Klasse mit einem konkreten Primärwert und weiteren Nextrap-Tokens.
