# § 4 Libraries

Dieses Dokument bündelt die verbindliche Library-Nutzung. Nutze vorhandene
Komponenten und APIs, bevor du eigene Lösungen entwickelst.

## § 4.1 Nextrap

Nextrap-Elemente, -Layouts und -Styles sind die verbindliche Basis.
Prüfe zuerst den normalerweise gemounteten Workspace `nextrap-monorepo`,
andernfalls `nextrap/nextrap-monorepo`. Eigene Elemente oder Styles sind nur
zulässig, wenn Nextrap keine passende Lösung bietet. Fehlender Zugriff ist
kein Nachweis dafür: Einschränkung benennen und Zugriff klären.

### § 4.1.1 Layouts (`ntl-*`)

| Komponente | Verwendung |
| --- | --- |
| `ntl-2col` | Standardwahl für zweispaltige Content-Sections, etwa Text und Bild; vor einem eigenen Layout prüfen. |
| `ntl-card-row` | zusammengehörige Cards als Reihe |
| `ntl-card-grid` | Cards in einem Grid |
| `ntl-hero` | Hero-Content |

Wähle vorhandene Slots, Modifier und Layout-Optionen, statt dieselbe Struktur
mit eigenen Wrappern nachzubauen. `ntl-2col` bevorzugen, wo es die Anforderung
abdeckt; nicht jedes Layout in zwei Spalten zwingen.

### § 4.1.2 Elements (`nte-*`)

NTE-Komponenten liefern wiederverwendbaren Content und Interaktion, etwa
`nte-card`, `nte-image`, `nte-input`, `nte-accordion` und `nte-slider`.
Navigation und mobile Menüs verwenden unter anderem `nte-navbar`, `nte-nav`,
`nte-burger` und `nte-offcanvas`. Beachte jeweils den Komponentenvertrag für
Slots, Parts, States und responsives Verhalten; Interaktion nicht nachbauen.

### § 4.1.3 Style-Packages

| Package | Aufgabe |
| --- | --- |
| `@nextrap/style-base` | `--nt-*`-Tokens, Runtime-Ableitungen und Schemes |
| `@nextrap/style-reset` | browserübergreifende Reset-Basis |
| `@nextrap/style-elements` | Styles für native HTML-Elemente, etwa Listen und Tabellen |
| `@nextrap/style-utils` | Utilities für unter anderem Spacing, Display und Ausrichtung |
| `@nextrap/style-typography` | Typography und zugehörige Klassen |
| `@nextrap/style-button` | Button-Styles |

Verwende vorhandene Mixins und dokumentierte Variablen, keine parallelen
Token-Systeme. Die zentrale Einbindung und Layer-Zuordnung regelt
[§ 2 Theme-Verzeichnis](2_Theme.md).

## § 4.2 TrunkJS

`trunkjs/trunkjs-monorepo` liefert Content Pane und Responsive. Lies die
Anleitungen zuerst im normalerweise eingebundenen Workspace
`trunkjs-monorepo`; die lokalen References stehen unten.

### § 4.2.1 Content Pane

Website-Content und alle Markdown-Beispiele verwenden Markdown mit
Kramdown-Attributlisten und `tj-content-pane`. Content Pane bildet aus
H2 bis H5 und weiteren Heading-Leveln einen Section-Tree. `layout` kann
die abgeleitete Ebene überschreiben und per Selector Tag, Klassen und
Attribute setzen. `section-*`-Attribute werden ohne Präfix an die erzeugte
Section übertragen; `.klasse` ist der Kramdown-Klassen-Shortcut.

```markdown
## Leistungen
{: layout=".container" section-class="py-4" }

### Beratung
{: layout="ntl-card-row" }

#### Erstgespräch

Informationen zur Beratung.
```

`layout=".container"` erzeugt einen Container; NTL-Layouts setzen
Layout-Komponenten ein. Unterelemente werden nach Komponentenvertrag per
`slot` zugeordnet, auch bei Shadow DOM. Einzelne HTML-Elemente mit aktiviertem
`text-block`-Pre-Parser als eigene `#[...]`-Zeile schreiben, nicht als
umfangreiche Raw-HTML-Blöcke.

Referenzen: [Content Pane Usage](references/4_Libraries/content-pane-usage/SKILL.md),
[Layout-Semantik](references/4_Libraries/content-pane-layout/SKILL.md) und
[Kramdown-Beispiele](references/4_Libraries/content-pane-usage/references/themejs2-markdown-layouts.md).

### § 4.2.2 Responsive

`@trunkjs/responsive` setzt und entfernt Klassen je Breakpoint-Bereich,
etwa `xl:d-flex` oder `-xl:d-none`. `style-{breakpoint}` überschreibt gezielt
einzelne CSS-Properties. Reihenfolge für Content-Anpassungen:

1. Vorhandene Nextrap-Utilities verwenden, bei Bedarf mit Breakpoint-Präfix.
2. Reichen sie nicht aus, dokumentierte `--nt-*`-Variablen setzen, auch direkt
   inline oder über Kramdown-Attribute und `style-{breakpoint}`.
3. Erst danach elementbezogene Einzelwerte über `style`/`style-{breakpoint}`;
   Arbitrary-Value-Klassen nur als seltene Ausnahme.

```markdown
Ein kurzer Hinweis.
{: .d-block .xl:d-flex style="--nt-primary: #174d73; width: 100%" style-xl="width: 50%" }
```

Erfinde keine Variablen. Wiederkehrende Werte gehören in vorhandene Tokens
oder gemeinsame Utilities, wiederverwendbare Theme-Styles nach § 2.
Keine Einmal-Klassen, separaten CSS-Dateien, Media Queries oder Resize-Listener
für Verhalten, das die vorhandenen APIs abdecken. Komponenten mit eigener
Responsive-API verwenden diese; ihre interne Logik nicht nachbauen.
`tj-responsive` ist bereits eingebunden: nicht erneut in Seiten, Includes,
Komponenten oder Package-Entries registrieren.

Referenzen: [TrunkJS Responsive](references/4_Libraries/trunkjs-responsive/SKILL.md),
[technische Referenz](references/4_Libraries/trunkjs-responsive/references/ai-usage-info.md) und
[Responsive-Content](references/4_Libraries/trunkjs-responsive/references/themejs2-responsive-content.md).
