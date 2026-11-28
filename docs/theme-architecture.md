# Gemeinsame Theme-Architektur

ThemeJS2 veröffentlicht genau ein Sass-Mixin `theme()` über `index.scss`.
`theme/index.scss` registriert sämtliche Styles. Der TypeScript-Entry
registriert weiterhin die Web Components; Sass ersetzt keine Komponenten.

## Einbindung

```scss
@use "@leuffen/themejs2" as themejs;

:where(:root) {
  @include themejs.theme();
}
```

Der `:where(...)`-Scope hat Spezifität 0. Für normale Websites steht die
optionale Variant auf `body`, etwa `class="variant-dommer"`. Im Jekyll-Frame
erzeugt `theme_profile: dommer` diese Klasse. Der gemeinsame Entry erzeugt
den Runtime-Tokenbaum sowohl im Root-Scope als auch am jeweiligen
Variant-Träger. Dadurch reagieren abgeleitete Farben, Größen und Abstände
auf dessen Eingaben. Auch Grundtypografie wird dort ausgewertet.

## Zuständigkeiten

| Ablage | Verantwortung |
| --- | --- |
| `theme/elements/<tag>/_style-*.scss` | Funktionale Komposition einschließlich Parts, Slots, responsiver Regeln und Modifier |
| `theme/elements/id_<id>/_style-*.scss` | Begründete feste Frame-Bereiche, etwa `#header` und `#footer` |
| `theme/variants/_variant-*.scss` | Je ein `variant-*`-Mixin mit einer Klasse und ausschließlich bekannten `--nt-*`-Deklarationen |
| `theme/misc/<name>/_*.scss` | Verbleibende wiederverwendbare Content-Muster und dokumentierte Ausnahmen |

Style-Dateien exportieren ein `style-<name>()`-Mixin, das den passenden
Element-Selektor registriert. Ein CSS-Entry im Elementverzeichnis bindet
seine Mixins ein. `theme/index.scss` lädt diese Entries und Misc-Partials
mit `meta.load-css` im passenden Layer; reine Mixin-Dateien werden mit
`@use` und `@include` aufgerufen. Der Root-Entry exportiert ausschließlich
`theme()`.

Zu jedem Style gehört eine benachbarte `.usage.md`. Ihr Front Matter
enthält nur `description`. NTL und im Content nutzbare Elemente beginnen
mit Markdown und Kramdown-Attributen für `tj-content-pane`; reine
Frame-Elemente verwenden HTML. Die Sidecars liegen außerhalb der Demo.

## Komposition und visuelle Werte

Pro Element gilt höchstens eine `style-*`-Klasse. Ohne expliziten Style
wählen NTL/NTE automatisch `style-default`. Funktionsunterschiede werden
durch ihren Namen erkennbar, beispielsweise `style-testimonial`,
`style-pricing`, `style-form` oder `style-hero`. Eng verwandte Darstellungen
teilen sich einen Style und dessen dokumentierte Modifier.

```markdown
## Erfahrungen
{: layout="ntl-2col.style-testimonial.testimonial-portrait" }

> Eine verständliche Beratung hat mir sehr geholfen.

Anna Beispiel

![Porträt](/assets/human.svg)
{: .aside }
```

Eine `variant-*` ändert Farben, Schriften, Rahmen und visuelle Abstände.
Slots, Reihenfolge, Spalten und Umbrüche bleiben beim gewählten Element-Style.
Eine Variantenänderung schaltet deshalb keine funktionale Komposition um.
Es gibt kein paralleles `--theme-*`-Token-System.

## Cascade

Der Entry deklariert vor der ersten CSS- oder Font-Ausgabe:

```scss
@layer reset, schemes, themes, website;
@layer themes {
  @layer tokens, base, typography, elements, components, patterns, utilities;
}
```

| Layer | Inhalt |
| --- | --- |
| `reset` | Nextrap Reset |
| `schemes` | Dokumentweites Light-/Dark-Schema |
| `themes.tokens` | Runtime-Ableitungen, Defaults und Variants |
| `themes.base`, `themes.typography` | Grunddarstellung, Fonts und Typografie |
| `themes.elements`, `themes.components` | Native Elemente, feste IDs und Web Components |
| `themes.patterns` | Misc und Content-Muster |
| `themes.utilities` | Nextrap Utilities |
| `website` | Website-spezifische Anpassungen |

Der `website`-Layer hat bei normalen Deklarationen Vorrang.
`!important` kehrt die Layer-Reihenfolge um und ist kein Override-Konzept.
Die Basis verwendet semantische `--nt-*`-Variablen; Website-Anpassungen
setzen sie auf demselben Element, das die Variant trägt.

## Migration

Separate Theme-Entries, das alte `shared/` und `all.scss` sind entfernt.
Consumer verwenden den gemeinsamen Root-Entry. Aus `theme-osman` wird
`variant-osman`; die Komposition wird ausdrücklich an der Instanz gewählt.
Die bestehenden Demo-Inhalte sind auf diese Namen umgestellt.

`website-default` übernimmt seine optionalen Navbar-Modifier aus
`navbar_classes` und die horizontalen Nav-Modifier aus `nav_classes`.
Ohne Werte bleiben `-default-dark` und `-default-overlay` deaktiviert.
Der Dommer-Scope aktiviert sie ausdrücklich. `show_navbar`, `show_title`
und `show_footer` bleiben für die Sichtbarkeit des Frames zuständig.

Historische Entwicklungsnotizen sind keine Nutzungsanleitung. Verbindlich
für weitere Änderungen sind `AGENTS.md` und `AGENTS/2_Theme.md`.
