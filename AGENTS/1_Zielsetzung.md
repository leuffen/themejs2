# § 1 Zielsetzung

## § 1.1 Einsatzbereich und technische Basis

ThemeJS2 soll als gemeinsames Theme für eine große Bandbreite von Websites
verwendbar sein. Es wurde hauptsächlich für Arzt-Websites entwickelt und
soll künftig auch weitere Einsatzbereiche abdecken.

Das Theme ist ausschließlich für statisch auslieferbare Websites vorgesehen.
Es nutzt die NTE- und NTL-Komponenten mit den Tag-Präfixen `nte-` und `ntl-`
sowie die CSS-Variablen mit dem Präfix `--nt-` als technische Basis.

## § 1.2 Kompilierte Basis im Zielrepository

Die Entwicklung des Themes erfolgt mit SCSS und TypeScript. Im jeweiligen
Zielrepository liegt stets eine fertig kompilierte Version vor: JavaScript
aus TypeScript und CSS aus SCSS. Die Website kann mit diesen Dateien statisch
ausgeliefert werden, ohne das Theme dort erneut kompilieren zu müssen.

Visuelle Anpassungen im Zielrepository erfolgen über CSS-Variablen in den
projektspezifischen User Base Styles. Diese überschreiben die Variablenwerte
der kompilierten Theme-Basis, nicht die generierten Dateien selbst. Für solche
Anpassungen ist kein erneuter SCSS-Build erforderlich.

## § 1.3 Wiederverwendung und Zuständigkeiten

Demos verwenden nach Möglichkeit dieselben Komponenten, Layouts und
Datenverträge wie Kundensysteme. Der Seitenrahmen bleibt im Kundenprojekt
editierbar und kann mit vorhandenen Komponenten und Styles wiederverwendet
werden.

Layouts definieren die Struktur und die verfügbaren Inhalte. Element-Styles
legen die funktionale Darstellung fest. Seitenweite Variants liefern die
visuellen Werte über CSS-Variablen. Bestehende Lösungen werden wiederverwendet,
wenn sie die gewünschte Funktion bereits abdecken.

## § 1.4 Für KI-Nutzung optimieren

ThemeJS2 ist auf die Nutzung durch KI-Agenten auszurichten. Verbindliche
Abhängigkeiten, klare Konventionen und kurze, ausführbare Beispiele begrenzen
den Lösungsraum. Vorhandene Komponenten und dokumentierte Schnittstellen
haben Vorrang vor eigenen Implementierungen.

## § 1.5 Nextrap als verbindliche Basis

Nextrap-Elemente, -Layouts und -Styles sind verbindlich zu verwenden,
einschließlich vorhandener Utilities und `--nt-*`-Variablen. Prüfe zuerst
im normalerweise gemounteten Workspace `nextrap-monorepo`, ob eine passende
Lösung existiert; andernfalls im Repository `nextrap/nextrap-monorepo`.
Eigene Elemente oder Styles sind nur zulässig, wenn Nextrap keine passende
Lösung bietet. Fehlender Zugriff ist kein Nachweis, dass eine Lösung fehlt;
benenne die Einschränkung und kläre den Zugriff.

## § 1.6 TrunkJS Content Pane

`trunkjs/trunkjs-monorepo` liefert mit `@trunkjs/content-pane` und
`@trunkjs/responsive` die gemeinsame TrunkJS-Basis. Prüfe die Anleitungen
zuerst im normalerweise eingebundenen Workspace `trunkjs-monorepo`.

Website-Content und alle Markdown-Beispiele verwenden Markdown mit
Kramdown-Attributlisten und werden über `tj-content-pane` eingebunden.
Content Pane bildet aus H2 bis H5 und weiteren Heading-Leveln einen
Section-Baum. Das `layout`-Attribut kann die abgeleitete Ebene explizit
überschreiben und über einen Selector Element-Tag, Klassen und Attribute
festlegen. `section-*`-Attribute wie `section-class` werden ohne dieses
Präfix an die erzeugte Section übertragen; `.klasse` ist der
Kramdown-Shortcut für eine Klasse.

```markdown
## Leistungen
{: layout=".container" section-class="py-4" }

### Beratung
{: layout="ntl-card-row" }

#### Erstgespräch

Informationen zur Beratung.
```

`layout=".container"` erzeugt einen Container; NTL-Layouts können den
Content in Layout-Komponenten überführen. Deren Unterelemente werden gemäß
dem jeweiligen Komponentenvertrag per `slot` zugeordnet, auch bei Shadow DOM.
Einzelne HTML-Elemente bei aktiviertem `text-block`-Pre-Parser als eigene
`#[...]`-Zeile schreiben, nicht als umfangreiche Raw-HTML-Blöcke.

Referenzen: [Content Pane Usage](references/1_Zielsetzung/content-pane-usage/SKILL.md),
[Layout-Semantik](references/1_Zielsetzung/content-pane-layout/SKILL.md) und
[Kramdown-Beispiele](references/1_Zielsetzung/content-pane-usage/references/themejs2-markdown-layouts.md).

## § 1.7 TrunkJS Responsive

`@trunkjs/responsive` steuert Klassen und Inline-Styles direkt am Element
nach Breakpoints: etwa `xl:d-flex`, `-xl:d-none` oder `style-xl`.
Klassen werden beim Wechsel des Breakpoint-Bereichs gesetzt oder entfernt;
passende Style-Deklarationen überschreiben gezielt einzelne Properties.

Verwende für Content-Anpassungen vorhandene Nextrap-Klassen und Utilities.
Elementbezogene Einzelwerte gehören direkt an das Element beziehungsweise
in seine Kramdown-Attribute, bei Bedarf mit `style-{breakpoint}`. Lege dafür
keine eigenen CSS-Dateien, Einmal-Klassen oder Media Queries an. Die
wiederverwendbaren Theme-Styles gemäß § 2 bleiben davon getrennt.

```markdown
Ein kurzer Hinweis.
{: .d-block .xl:d-flex style="width: 100%" style-xl="width: 50%" }
```

Die vorhandene Einbindung von `tj-responsive` weiterverwenden; nicht erneut
in Seiten oder Komponenten registrieren.

Referenzen: [TrunkJS Responsive](references/1_Zielsetzung/trunkjs-responsive/SKILL.md) und
[Responsive-Klassen und Styles im Markdown](references/1_Zielsetzung/trunkjs-responsive/references/themejs2-responsive-content.md).
