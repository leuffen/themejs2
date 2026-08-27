---
name: modify-theme
description: Entwickelt wiederverwendbare Nextstrap-Themes, auch aus Designvorlagen. Ergebnis sind ein tokenbasiertes Theme und eine Inhalts-Demo mit vorhandenen NTL-/NTE-Komponenten; Website-Kopie sowie Header-/Footer-Arbeit sind ohne ausdrücklichen Auftrag ausgeschlossen.
---

# Theme entwickeln

Wenn eine Vorlage existiert, übertrage ihre wiederkehrende visuelle Sprache – Hierarchie, Farbwelt, Typografie, Flächen und Rhythmus – in Nextstrap-Tokens und Theme-gebundene Varianten. Übernimm keine Website-Daten oder einmaligen Strukturen. Das Ergebnis muss mit unterschiedlichen Personen, Textlängen, Bildern und Elementanzahlen funktionieren.

## Nextstrap-Modell

| Typ | Präfix | Verantwortung | Beispiele |
| --- | --- | --- | --- |
| Layout | `ntl-` | Komponiert große Content-Bereiche und steuert das responsive Layout. | `ntl-2col`, `ntl-card-row` |
| Element | `nte-` | Stellt wiederverwendbaren Content innerhalb von Layouts oder im normalen Content Flow bereit. | `nte-card`, Formular- und Media-Elemente |

Layouts dürfen Elements komponieren: `ntl-card-row` ordnet beispielsweise mehrere `nte-card`-Children an. Halte Layout-Verhalten in NTL-Styles und das Verhalten von Content-Elementen in NTE-Styles.

### Styling-Vertrag

- Setze niemals visuelle Deklarationen auf einen bloßen `ntl-*`-Selector. Seine Entry-Datei darf diesen Selector nur zum Laden von Variant-Dateien verwenden.
- Lege jede NTL-Darstellung in einer benannten Variant wie `&.style-default`, `&.style-header` oder `&.style-testimonial` ab.
- NTL-Komponenten wählen automatisch `style-default`, wenn kein Style angegeben ist. Style den Default über `.style-default`; ergänze die Class im Demo-Markup nicht nur zur Aktivierung.
- Ergänze eine weitere `style-*`-Variant nur für eine allgemeine Darstellung, niemals für einen Kunden, eine Person, eine Seite oder Beispiel-Content.
- Style NTE-Content über seine dokumentierte API oder eine eigene allgemeine Variant. Hängt das Styling von einer NTL-Komposition ab, bleibt es innerhalb dieser NTL-Variant und verwendet die Child-Pairing-Struktur aus [references/element-child-structure.md](references/element-child-structure.md).
- Vermeide einen bloßen Theme-weiten NTE-Override, außer der Auftrag verlangt ausdrücklich die Änderung jeder Instanz in diesem Theme.

### Kramdown-Content-Vertrag

Content muss in Kramdown bearbeitbar bleiben. Bevorzuge ein vorhandenes NTL-Layout mit Standard-Markdown wie Überschriften, Absätzen, Bildern, Links, `ul`-/`ol`-Listen oder Blockquotes. Weise allgemeine Classes und Attribute über Kramdown Attribute Lists zu, wenn das genügt; erstelle kein NTE nur zum Styling eines Standard-Content-Elements.

Verlange von Autoren keine komplex verschachtelten Wrapper, Slot Trees oder eigenen HTML-Strukturen. Benötigt eine Komponente Markup, das über Standard-Markdown mit Classes und Attributen hinausgeht:

1. halte vor der Implementierung an;
2. zeige die exakt erforderliche Autorenstruktur;
3. erkläre, warum ein vorhandenes NTL mit Markdown-Content oder ein vorhandenes NTE das Ergebnis nicht liefern kann;
4. nenne die einfachere Kramdown-kompatible Alternative und ihren visuellen Trade-off;
5. hole eine ausdrückliche Developer Approval für den komplexen Content-Vertrag ein.

Eine Theme- oder Komponentenplan-Freigabe ersetzt diese zusätzliche Developer Approval nicht.

## Kundeneingaben und Abgrenzung

Setze eine Kundenergänzung zunächst für das aktuelle Layout um, drücke sie aber als wiederverwendbares Token, Komposition, Option oder allgemeine `style-*`-Variante aus, die andere Kunden und Inhalte unterstützt. Benenne oder begrenze sie niemals nach dem anfragenden Kunden. Lässt sich die Anforderung nicht sinnvoll verallgemeinern, erkläre das und frage vor einer Einzellösung nach.

| Ebene | Enthält | Schließt aus |
| --- | --- | --- |
| Theme | Tokens und allgemeine visuelle Varianten | Kundentexte, Assets, feste Elementanzahlen, Website-Struktur |
| Inhaltslayout | NTL-Komposition mit NTE-Inhaltselementen | Header, Navbar, Footer |
| Inhalt | Texte, Bilder, Links und wiederholte Daten | Theme-Entscheidungen |
| Website-Rahmen | Header, Navbar, Footer und deren Struktur | Nur mit separatem ausdrücklichem Auftrag enthalten |

- Wird Arbeit am Website-Rahmen ausdrücklich beauftragt, lies vor der Planung [references/header-footer.md](references/header-footer.md). Lade oder verwende diesen Ablauf nicht für gewöhnliches Inhalts-Theming.
- Fehlen Bilder oder dürfen sie ersetzt werden, lies [references/placeholder-images.md](references/placeholder-images.md). Verwende die verbindlichen Portrait-Fallbacks und wähle andere Einträge nach ihrem Inhaltszweck.
- Halte die Bildauswahl in Inhalts- oder Demo-Daten, nicht in Theme-Styles oder Komponenten-APIs. Suche weitere Stockmotive nur, wenn die kuratierte Referenz keine passende Kategorie enthält.
- Deutet eine Kundeneingabe auf eine weitere Darstellung hin, bevorzuge eine allgemeine Variante für unterschiedliche Inhalte gegenüber inhaltsspezifischen Selektoren oder Markup.

## Ablauf

1. Lies [references/development-findings.md](references/development-findings.md) und beachte die für die Aufgabe relevanten Einträge.
2. Erfasse wiederkehrende Designregeln der Vorlage statt einzelner Pixelwerte.
3. Prüfe die relevanten APIs von Style Base, Style Utils, Style Typography und NTL/NTE sowie das ähnlichste vorhandene Theme; ordne jede Regel einem Token, Utility, einer Komponentenkomposition oder einer allgemeinen `style-*`-Variante zu.
4. Wende vor jeder gemeinsamen neuen Fähigkeit die nachfolgende Wiederverwendungsentscheidung an.
5. Implementiere die kleinste Theme-spezifische Schicht und prüfe sie mit Demo und Screenshots.
6. Ergänze neue wiederverwendbare Fehler und Lösungen dort knapp als `TODO`, `DON’T` oder `EXAMPLE`. Übernimm ausgereifte Einträge in die passende Rule und entferne sie danach aus der Liste.

Bevorzuge eine schlüssige Nextstrap-Interpretation gegenüber einer pixelgenauen Kopie. Bewahre den Charakter der Vorlage mit vorhandenen Bausteinen.

## Wiederverwenden vor Erweitern

Gehe in dieser Reihenfolge vor:

1. Vorhandenes NTL mit normalem Kramdown-Inhalt, Klassen und Attributen.
2. Vorhandenes NTL mit vorhandenen NTE-Komponenten und Utilities.
3. Theme-gebundenes Styling über dokumentierte Tokens, Mixins, Parts, Slots, Zustände, Child-Pairings oder eine allgemeine Variante.
4. Allgemeine Erweiterung der zuständigen gemeinsamen Nextstrap-Komponente.
5. Neue NTE-Komponente.
6. Neue NTL-Komponente.

### Verbindlicher Komponentenplan

Halte vor Schritt 4, 5 oder 6 an. Die Freigabe zur Theme-Entwicklung genehmigt keine neue oder erweiterte NTL-/NTE-Komponente.

Lege für jede vorgeschlagene Komponente einen kompakten Plan vor und lasse ihn bestätigen, bevor Dateien oder Implementierungen entstehen. Er muss enthalten:

| Punkt | Erforderliche Information |
| --- | --- |
| Typ und Name | NTL oder NTE sowie der vorgeschlagene öffentliche Name mit Präfix |
| Zweck | Eine einzelne Verantwortung und die Rolle im aktuellen Layout |
| Vorhandene Möglichkeiten | Die ähnlichsten geprüften Komponenten oder Kompositionen und warum sie jeweils nicht genügen |
| Kramdown-Vertrag | Die von Autoren verwendete Markdown-Form; erforderliche komplexe Verschachtelungen ausdrücklich kennzeichnen |
| Wiederverwendung | Weitere Kunden, Inhaltsformen, Layouts oder Themes, die die Fähigkeit nutzen können |
| Alternativen | Mindestens eine kleine visuelle Abweichung sowie Neukomposition oder Erweiterung einer vorhandenen Komponente |

Fasse mehrere Vorschläge in einem kurzen Plan zusammen, behandle aber jede Komponente einzeln. Fahre erst nach ausdrücklicher Bestätigung dieses Plans fort.

Gemeinsames Komponentenverhalten gehört für NTL in Nextstrap Layouts und für NTE in Nextstrap Elements; verstecke es niemals in einem Theme. Das Theme enthält nur seine Token-Werte und Theme-spezifisches Variant-Styling. Ergänze keine API nur zur Nachbildung einer einzelnen Referenz-Section. Fehlt im Shadow DOM ein erforderlicher Part, Slot oder eine API, frage nach, statt die Encapsulation zu umgehen.

## Theme- und Token-Architektur

- Lies und befolge vor dem Erstellen oder Bearbeiten von Theme-SCSS [references/theme-file-contract.md](references/theme-file-contract.md).
- Folge dem aktuellen Runtime Pattern aus `theme/osman/`: Stelle ein `theme()`-Mixin bereit, rufe `nextrapBase.runtime-theme-scoped()` auf und lade anschließend `_runtime-settings.scss`.
- Speichere Theme-gebundene Werte in `_runtime-settings.scss` mit vorhandenen semantischen `--nt-*`-Rollen. Erstelle kein paralleles Token-System.
- Registriere den Theme-Selector in `docs/_src/style.scss`; speichere dort keine Token-Werte.
- Lade Theme-Parts mit `meta.load-css`. Halte das Theme unter `:where(.theme-<name>)` gescoped.
- Verwende semantische Farben, die vorhandene Spacing Scale, `--nt-content-space`, `--nt-text-gap`, Typography, Utilities und Component Mixins wieder.
- Behandle Pixelwerte des Designers als Hinweis auf den relativen Rhythmus. Wähle das nächstliegende vorhandene Spacing Token, statt Einzelwerte zu erhalten.
- Ergänze ohne Freigabe keine eigenen Color-, Spacing-, Typography-, Breakpoint-, Shadow- oder anderen Theme-Variablen.
- Erstelle für eine bewusst Dark-only gehaltene Referenz nur das Dark Token Set und wähle es über die vorhandene Style Base Scheme API als Default. Erfinde weder eine Light Palette noch einen eigenen Switch.

## Dateien und Selector

- Lies [references/element-child-structure.md](references/element-child-structure.md), bevor du Element-Styles ergänzt oder neu strukturierst.
- Verändere weder `vendor` noch `node_modules` oder `workspaces`. Frage nach, bevor du `workspaces`, `docs/_includes` oder `docs/_layouts` anfasst.

## Demo

- Ergänze eine repräsentative Markdown-Demo unter `docs/pages/`; demonstriere Komponenten, nicht die Quellwebsite.
- Verwende reduzierte repräsentative Inhalte, statt die vollständige Vorlage zu kopieren.
- Bevorzuge `ntl-2col` für wechselnde Bild-/Textabschnitte und das vorhandene Reverse-Verhalten für vertauschte Spalten.
- Bevorzuge `ntl-card-row` mit `nte-card`-Kindern für Kartengruppen.
- Verwende für andere Strukturen möglichst vorhandene NTL-/NTE-Komponenten.

## Responsives Verhalten und Prüfung

- Verwende die API `mode="mobile|tablet|desktop"` aus `@trunkjs/responsive`; ergänze keine Media Queries.
- Folge dem Ablauf für responsive und visuelle Prüfung aus [references/theme-file-contract.md](references/theme-file-contract.md).
- Lege den Vorschlag vor und frage nach, bevor du mehr als fünf Dateien änderst oder das Ergebnis eine neue Token-Kategorie beziehungsweise Header-/Footer-Arbeit benötigt.
