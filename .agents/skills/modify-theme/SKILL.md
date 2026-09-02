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

## Komponenten-spezifische Theme-Verträge

Bevor du Styles für eine konkrete `ntl-*`- oder `nte-*`-Komponente entwickelst oder änderst, suche im jeweiligen Komponenten-Package nach einem lokalen Theming-Skill unter einem dieser Pfade:

- `.agent/skills/<component>-theming/SKILL.md`
- `.agents/skills/<component>-theming/SKILL.md`

Lies jeden passenden `*-theming`-Skill vollständig und verwende ihn als verbindlichen Komponenten-Vertrag für diese Styles. Dieser globale Theme-Skill ergänzt den lokalen Vertrag nur für allgemeine Theme-Regeln, Token-Architektur, Demo-Abgrenzung und Wiederverwendungsentscheidungen, die im Komponenten-Skill nicht bereits spezifischer geregelt sind.

Sind mehrere Komponenten betroffen, lies und beachte den lokalen `*-theming`-Skill jeder betroffenen Komponente.

### Styling-Vertrag

Wenn ein benötigter Style oder eine benötigte Funktion offensichtlich in einem
zugrunde liegenden Package fehlt oder fehlerhaft ist, darf der Theme-Code das
Problem nicht einfach überschreiben oder mit einem lokalen Theme-Hack
umgehen. Prüfe zuerst das zugrunde liegende Package. Frage den User, ob die
Funktion direkt im Package korrigiert werden soll oder ob der User diese
Änderung selbst übernehmen möchte. Eine Package-Änderung darf erst nach dieser
Klärung umgesetzt werden.

- Setze niemals visuelle Deklarationen auf einen bloßen `ntl-*`-Selector. Seine Entry-Datei darf diesen Selector nur zum Laden von Variant-Dateien verwenden.
- Verwende `style-*` ausschließlich für `ntl-*`- oder `nte-*`-Elemente und deren dokumentierte Varianten.
- Lege jede NTL-Darstellung in einer benannten Variant wie `&.style-default`, `&.style-header` oder `&.style-testimonial` ab.
- NTL-Komponenten wählen automatisch `style-default`, wenn kein Style angegeben ist. Style den Default über `.style-default`; ergänze die Class im Demo-Markup nicht nur zur Aktivierung.
- Ergänze eine weitere `style-*`-Variant nur für eine allgemeine Darstellung, niemals für einen Kunden, eine Person, eine Seite oder Beispiel-Content.
- Style NTE-Content über seine dokumentierte API oder eine eigene allgemeine Variant. Hängt das Styling von einer NTL-Komposition ab, bleibt es innerhalb dieser NTL-Variant und verwendet die Child-Pairing-Struktur aus [references/element-child-structure.md](references/element-child-structure.md).
- Lege Theme-Styles für eine konkrete `ntl-*`- oder `nte-*`-Komponente immer unter `theme/<theme-name>/elements/<component-name>/` ab. Verwende dort einen komponentenspezifischen Entry wie `nte-navbar.scss`, der die zugehörigen `_style-*.scss`-Varianten lädt. Platziere solche Komponenten-Styles nicht lose im zentralen Theme-Entry, damit Struktur, Variante und Komponentenvertrag am gleichen Ort nachvollziehbar bleiben.
- Vermeide einen bloßen Theme-weiten NTE-Override, außer der Auftrag verlangt ausdrücklich die Änderung jeder Instanz in diesem Theme.
- Für reine Theme-CSS-Klassen im Light DOM verwende keine `style-*`-Namen. Nutze stattdessen eine semantische Klassenfunktion wie bei `hero__specialties`: Die Klasse beschreibt das wiederverwendbare Content-Muster selbst und nicht eine NTL-/NTE-Variant.
- Solche reinen Theme-Klassen sollen mit Standard-Markdown wie `ul`/`li`, Überschriften, Absätzen, Links oder Bildern funktionieren und nur dann ergänzt werden, wenn vorhandene Utilities oder Komponenten nicht ausreichen.

### Slot- und Variantenentscheidung

Ordne beim Seaming zuerst jeden Content nach seiner Rolle einem dokumentierten Slot zu und entscheide erst danach über Styling. Eine gewünschte Position rechtfertigt weder einen semantisch falschen Slot noch eine neue Style-Variante.

Gehe für jede Darstellung in dieser Reihenfolge vor:

1. dokumentierte Standard-Slots und Default-Komposition der Komponente;
2. vorhandene CSS-Variablen auf der konkreten Instanz;
3. vorhandene Utilities wie `.surface-*`, `.bg-*`, Border oder eine bewusst lokale Spacing-Ausnahme;
4. vorhandene Modifier wie `.reverse`, `.breakout-*` oder `.with-*`;
5. eine wiederverwendbare semantische Light-DOM-Class für ein eigenständiges Content-Muster;
6. erst danach eine weitere vollständige `style-*`-Baseline.

Lege keine neue `style-*`-Variante nur für Spaltenbreite, Background oder Surface, Border, Radius, Spacing, Reverse, Breakout oder Alignment an. Eine zusätzliche Variante muss eine eigene wiederverwendbare Part-/Child-Darstellung und responsive Komposition bilden; dokumentiere dafür mindestens zwei plausible Einsatzfälle.

Der wiederkehrende vertikale Rhythmus zwischen direkten Layout-Kindern eines `tj-content-pane` ist keine lokale Spacing-Ausnahme. Definiere ihn einmal im Theme mit `--nt-spacing-section`, normalerweise in einem `tj-content-pane`-Partial. Demo- und Seiten-Markup darf für diesen Default-Rhythmus keine `py-*`, `my-*`, `mt-*` oder vergleichbare Utility benötigen. Solche Utilities sind nur für eine ausdrücklich abweichende einzelne Instanz zulässig.

Der Theme-Content-Flow steuert den Section-Abstand am Layout-Host. Eine NTL-Variante steuert nur ihre internen Parts, Slots und Gaps sowie bewusst variant-spezifisches Padding. Scope Content-Flow-Regeln auf direkte Layout-Kinder, damit verschachtelte Layouts keinen zusätzlichen Section-Abstand erhalten.

Für `ntl-2col` gilt standardmäßig: Hauptinhalt nach `main`, zweite Spalte nach `aside`, `top`/`bottom` über die volle Wrapperbreite und `header`/`footer` über die volle Containerbreite. Soll nur eine Überschrift seitlich stehen, ordne sie `aside` zu und verwende `.reverse` beziehungsweise `.reverse-desktop`; verschiebe nicht `header` und `wrapper` per Theme-CSS in Spalten. Setze `--cols` normalerweise pro Instanz über Content Pane `section-style`.

### Kramdown-Content-Vertrag

Content muss in Kramdown bearbeitbar bleiben. Bevorzuge ein vorhandenes NTL-Layout mit Standard-Markdown wie Überschriften, Absätzen, Bildern, Links, `ul`-/`ol`-Listen oder Blockquotes. Weise allgemeine Classes und Attribute über Kramdown Attribute Lists zu, wenn das genügt; erstelle kein NTE nur zum Styling eines Standard-Content-Elements.

In Markdown-Dokumenten sollen lange Wörter in `h1`, `h2` und `h3` gezielt mit `&shy;` trennbar gemacht werden, wenn sonst unschöne oder instabile Zeilenumbrüche entstehen. Bevorzuge manuelle Trennstellen im Inhalt statt aggressiver automatischer Worttrennung per CSS.

- **DO:** Gib `layout` direkt an der Überschrift an, deren Section das Layout besitzen soll. Lasse den Index weg, wenn er aus der Überschrift ableitbar ist: `## Titel` gefolgt von `{: layout="ntl-2col.style-default" }`.
- **DO:** Verwende `hr[layout]` nur für einen Layout-Wrapper oder eine Layout-Steuerung ohne eigene Überschrift, etwa um mehrere bereits betitelte Bereiche gemeinsam zu umschließen.
- **DON'T:** Stelle einer Überschrift kein `hr[layout]` voran, wenn die Überschrift das Layout selbst besitzen kann. Das HR öffnet eine zusätzliche Zwischenebene, während die folgende Überschrift eine weitere Section auf ihrer Heading-Ebene erzeugt.
- **DON'T:** Setze keinen expliziten Layout-Index wie `2;` oder `1.5;`, wenn die Heading-Ebene den Index bereits eindeutig vorgibt.

Direkte Kinder eines `tj-content-pane` sollen grundsätzlich `ntl-*`-Layouts sein. Freie Light-DOM-Blöcke, reine Theme-Klassen oder einzelne Standard-Markdown-Elemente direkt unter dem Pane sind nur als große, ausdrücklich begründete Ausnahme zulässig. Bevorzuge in solchen Fällen fast immer die Einordnung in ein passendes vorhandenes `ntl-*`-Layout.

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
3. Suche vor dem Styling oder Seaming jeder Komponente in ihrem Package- oder Komponentenverzeichnis nach komponentenspezifischen `.agents/skills` und lies den passenden Skill vollständig. Verwende insbesondere dessen Szenarien und Regeln für Slots, Content-Platzierung und erlaubte Kompositionen als Komponenten-Contract. Prüfe danach ergänzend die relevanten APIs von Style Base, Style Utils, Style Typography und NTL/NTE sowie das ähnlichste vorhandene Theme; ordne jede Designregel einem Token, Utility, einer Komponentenkomposition oder einer allgemeinen `style-*`-Variante zu.
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
- Verwende semantische Farben, die vorhandene Spacing Scale, insbesondere `--nt-spacing-section` für den Theme-eigenen Content Flow, `--nt-text-gap`, Typography, Utilities und Component Mixins wieder.
- Buttons sollen typografisch in der Regel etwas kräftiger wirken als normaler Fließtext. Bevorzuge daher im Theme eine leicht höhere Schriftstärke für Buttons als für den Standardtext, ohne sie unnötig schwer oder plakativ zu machen.
- Behandle Pixelwerte des Designers als Hinweis auf den relativen Rhythmus. Wähle das nächstliegende vorhandene Spacing Token, statt Einzelwerte zu erhalten.
- Setze `--gutter-x` und `--gutter-y` immer mit Längeneinheit, vorzugsweise in `px` wie `0px`, `16px` oder `24px`. Verwende niemals einheitslose Werte wie `0`, da Gutter-Werte in Komponentenberechnungen per `calc()` als Längen weiterverarbeitet werden.
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
- Bevorzuge Lösungen, die ganz ohne breakpoint-spezifische Zusatzklassen auskommen.
- Wenn eine eigene Theme-Klasse dennoch ein responsives Verhalten braucht, aktiviere dieses über die vorhandene responsive Klassenlogik im Markup statt über Media Queries, z. B. `hero__specialties xl:desktop`. Die Theme-Klasse enthält die Baseline; die responsive Klasse schaltet nur den zusätzlichen Desktop-Zustand zu.
- Verwende dieses Muster nur für eigene Theme-Klassen oder Light-DOM-Strukturen, nicht für `ntl-*`-Elemente mit eigener Breakpoint-Logik. Bei `ntl-*`-Komponenten bleiben responsive Regeln an deren dokumentiertem `mode`-Attribut und Parts gescoped.
- Folge dem Ablauf für responsive und visuelle Prüfung aus [references/theme-file-contract.md](references/theme-file-contract.md).
- Lege den Vorschlag vor und frage nach, bevor du mehr als fünf Dateien änderst oder das Ergebnis eine neue Token-Kategorie beziehungsweise Header-/Footer-Arbeit benötigt.
