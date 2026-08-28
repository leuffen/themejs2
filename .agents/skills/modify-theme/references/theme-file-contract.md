# Theme File Contract

Lies diese Reference vor dem Erstellen oder Bearbeiten von Theme-SCSS. Sie definiert Repository-Invarianten; Design-spezifische Entscheidungen bleiben im Theme-Workflow.

## Theme-Struktur

```text
theme/<theme-name>.scss
theme/<theme-name>/
├── _theme.scss
├── _runtime-settings.scss
├── elements/
│   └── <element>/<element>.scss
├── classes/       # reusable semantic classes, only when needed
├── tools/         # theme tools, only when needed
├── variant/       # only when justified
└── html-elements/ # only when justified
```

- Folge einer vorhandenen Root Entry File für `theme/<theme-name>.scss`; erfinde kein anderes Export Pattern.
- Erstelle optionale Ordner nicht vorsorglich und ändere die Theme-Struktur nicht ohne User Approval.
- `_theme.scss` enthält das einzige `theme()` Entry Mixin, die Runtime-Initialisierung, Root Defaults und die `meta.load-css`-Aufrufe. Definiere unter `theme/**` keine weiteren Mixins.
- Halte Component-, Variant- und Content-Flow-Deklarationen aus `_theme.scss` heraus. Lade gemeinsamen Main-Content-Rhythmus über ein eigenes `elements/tj-content-pane/`-Partial.
- Halte jeden Output über den verwendenden Selector `:where(.theme-<theme-name>)` gescoped. Erzeuge niemals globales Theme-CSS.

## Content Flow und Section-Rhythmus

- Jedes Theme mit `tj-content-pane` muss den wiederkehrenden vertikalen Rhythmus seiner direkten Layout-Kinder vorgeben. Verwende dafür das vorhandene `--nt-spacing-section`; führe kein paralleles `--nt-content-space` ein.
- Lege diese Regel in `elements/tj-content-pane/_content-spacing.scss` ab und lade sie über `elements/tj-content-pane/tj-content-pane.scss`.
- Entscheide einmal pro Theme, ob der Abstand als `padding-block` am Layout-Host, Parent `gap` oder Sibling-Margin umgesetzt wird. Nutze Host-Padding, wenn eine Section-Fläche den Abstand optisch mittragen soll.
- Scope die Regel auf direkte, tatsächlich verwendete Layout-Hosts wie `section`, `ntl-2col`, `ntl-card-row` oder `ntl-card-grid`. Verwende kein breites `tj-content-pane > *`, da vor dem Content-Pane-Arrangement auch normaler Kramdown-Content direkt im Pane liegt.
- Default-Section-Abstände dürfen im Demo- oder Seiten-Markup keine `py-*`, `my-*`, `mt-*` oder vergleichbare Utility erfordern. Utilities bleiben ausdrücklich abweichenden Einzelinstanzen vorbehalten.
- Verschachtelte Layouts erhalten durch den globalen Content Flow keinen weiteren Section-Abstand. Eigene Hero-, Ribbon- oder vergleichbare Kompositionen dürfen im Theme gezielt vom Default-Rhythmus abweichen.
- Der Content Flow steuert den Abstand zwischen Inhaltsbereichen. Component-Styles steuern interne Parts, Slot-Gaps und variant-spezifisches Padding, aber keine Außenabstände zu unabhängigen Layout-Geschwistern.

## Variants, Selector und Classes

- Lege je Style File nur eine Class, einen Modifier oder ein Child Pairing ab; der Dateiname muss den Selector erkennen lassen.
- Lege jedes `style-*`, `with-*` und jeden einfachen Modifier wie `reverse` in einer eigenen Datei ab.
- Verwende `style-*` ausschließlich für `ntl-*`- oder `nte-*`-Elemente. Reine Theme-CSS-Klassen im Light DOM erhalten keinen `style-*`-Namen.
- Ein Element darf nur eine `style-*`-Class besitzen. Verwende kein `variant-*`.
- `with-*`-Modifier müssen mit `style-default` kombinierbar bleiben.
- Setze visuelle Default-Deklarationen niemals auf einen bloßen NTL-Selector; verwende `.style-default`.
- Klassifiziere eine Class, bevor du sie ergänzt:
  - Component Structure, Part, Slot, State, Modifier oder gebundenes Child Pairing an `ntl-*`/`nte-*` → `elements/**`;
  - wiederverwendbare semantische Darstellung im Light DOM, z. B. ein Listenmuster wie `hero__specialties` → `classes/**`;
  - Utility-ähnliches Verhalten → vorhandene Utility verwenden oder gemeinsame Utility-Änderung vorschlagen; nicht in einer Element-Datei definieren.
- Reine Theme-Klassen in `classes/**` beschreiben das Content-Muster selbst statt einer Komponenten-Variante und sollen mit Standard-Markdown wie `ul`/`li`, Überschriften, Absätzen, Links oder Bildern funktionieren.
- Verwende keine kunden-, personen-, seiten- oder Demo-spezifischen Namen.
- Überschreibe keine bloßen `p`, `a`, Überschriften, Listen, Bilder, `.btn` oder andere Utilities. Ein Kramdown-Child mit allgemeiner Class darf über ein Theme-gebundenes Parent/Child Pairing oder eine wiederverwendbare semantische Class gestylt werden.
- Nutze vorhandene Utilities oder `--nt-*`-Variablen für Farbe und bewusst lokale Spacing-Ausnahmen auf Markup-Ebene; bette keine einmaligen Designwerte ein.
- Füge Autoren-Content niemals über CSS `content` ein.
- Ergänze bei einer Default-Komponente kein `padding-top`, außer es wird ausdrücklich verlangt.

Lies [element-child-structure.md](element-child-structure.md) für Entry Files, Parent/Child Placement und Mode-Reihenfolge.

## Vor dem Styling prüfen

- Lies `.ai-usage-info.md`, Beispiele, Public Mixins, Parts, Slots und States der relevanten Komponente, bevor du ihre Theme-Styles änderst.
- Würde die Verbesserung eines Shared Mixins mehr als fünf Zeilen Theme-CSS ersetzen, halte an und schlage die allgemeine Mixin-Änderung vor, bevor du einen Workaround schreibst.
- Umgehe keine fehlenden Shadow-DOM-Parts oder Slots; fordere die gemeinsame API-Änderung über den Komponentenplan-Workflow an.

## Responsive-Vertrag

- Ergänze keine Media Queries.
- Bevorzuge Lösungen ohne breakpoint-spezifische Zusatzklassen.
- Braucht eine eigene Theme-Klasse im Light DOM dennoch ein responsives Verhalten, aktiviere es über die vorhandene responsive Klassenlogik im Markup, z. B. `hero__specialties xl:desktop`. Die Baseline bleibt in der semantischen Theme-Klasse; die responsive Klasse schaltet nur den zusätzlichen Zustand.
- NTL-Komponenten stellen `mode="mobile|tablet|desktop"` bereit; setze Mode Rules auf die Komponente, der dieses Attribut gehört.
- Verwende die responsive Klassenlogik nicht, um die interne Breakpoint-Logik von `ntl-*`-Elementen nachzubauen oder zu überschreiben.
- Children erhalten `mode` nicht automatisch. Adressiere das Child in einer Card Row ausgehend von `ntl-card-row[mode="..."]`, nicht über `nte-card[mode="..."]`.
- Ordne Deklarationen als allgemein, Mobile, Tablet, Desktop an und lasse ungenutzte Modes weg.
- Verwende `--breakpoints: sm|md|lg|xl|xxl`; der Default ist `xl`.
- Verwende `--nt-container-width` für den Content Container statt eines eigenen Width Systems.

## Bilder und Icons

- Halte die Bildauswahl im Content; verwende [placeholder-images.md](placeholder-images.md), wenn kein Bild geliefert wurde.
- Verwende zuerst die Image API der Komponente. Nutze andernfalls `object-fit: cover` und bei Bedarf `aspect-ratio`.
- Ersetze fehlende Logos oder Icons aus der Referenz durch neutrale Platzhalter, sofern der User keine Assets liefert.
- Bootstrap Icons dürfen nicht spezifizierte Custom Icons ersetzen. Bilde ein eigenes Icon Set nur auf ausdrücklichen Auftrag nach.

## Visuelle Prüfung

- Verwende den Skill `browser-screenshot-with-puppeteer`.
- Prüfe sowohl die gerenderte Seite als auch ihre Autoren-/HTML-Struktur, bevor du entscheidest, dass CSS allein genügt.
- Vergleiche Hierarchie, Rhythmus, Palette, Typography, Flächen, responsive Komposition und Robustheit bei veränderten Textlängen, Bildern und Elementanzahlen.
- Ignoriere Navbar, Footer und Tools, die nur zur Developer Preview gehören.
- Prüfe das Ergebnis nach der Implementierung. Bleibt eine wesentliche Abweichung von der Referenz, beschreibe sie und frage, ob sie akzeptiert oder der Scope erweitert werden soll.
