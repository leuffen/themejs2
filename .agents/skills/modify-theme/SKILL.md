---
name: modify-theme
description: Entwickelt wiederverwendbare Nextstrap-Themes, auch aus Designvorlagen. Ergebnis sind ein tokenbasiertes Theme und eine Inhalts-Demo mit vorhandenen NTL-/NTE-Komponenten; Website-Kopie sowie Header-/Footer-Arbeit sind ohne ausdrücklichen Auftrag ausgeschlossen.
---

# Theme entwickeln

Wenn eine Vorlage existiert, übertrage ihre wiederkehrende visuelle Sprache – Hierarchie, Farbwelt, Typografie, Flächen und Rhythmus – in Nextstrap-Tokens und Theme-gebundene Varianten. Übernimm keine Website-Daten oder einmaligen Strukturen. Das Ergebnis muss mit unterschiedlichen Personen, Textlängen, Bildern und Elementanzahlen funktionieren.

## Nextstrap model

| Type | Prefix | Responsibility | Examples |
| --- | --- | --- | --- |
| Layout | `ntl-` | Composes major content regions and controls responsive layout. | `ntl-2col`, `ntl-card-row` |
| Element | `nte-` | Provides reusable content inside layouts or normal content flow. | `nte-card`, form and media elements |

Layouts may compose elements: for example, `ntl-card-row` lays out multiple `nte-card` children. Keep layout behavior in NTL styles and content-element behavior in NTE styles.

### Styling contract

- Never put visual declarations on a bare `ntl-*` selector. Its entry file may use that selector only to load variant files.
- Put every NTL presentation in a named variant such as `&.style-default`, `&.style-header`, or `&.style-testimonial`.
- NTL components select `style-default` automatically when no style is specified. Style the default through `.style-default`; do not add the class to demo markup merely to activate it.
- Add another `style-*` variant only for a generic presentation—not for a client, person, page, or sample content.
- Style NTE content through its documented API or its own generic variant. If the styling depends on an NTL composition, keep it inside that NTL variant and use the child-pairing structure in [references/element-child-structure.md](references/element-child-structure.md).
- Avoid a bare theme-wide NTE override unless the user explicitly wants every instance in that theme to change.

### Kramdown content contract

Content must remain authorable in Kramdown. Prefer an existing NTL layout containing standard Markdown output such as headings, paragraphs, images, links, `ul`/`ol` lists, or blockquotes. Assign generic classes and attributes with Kramdown attribute lists when that is sufficient; do not create an NTE merely to style a standard content element.

Do not require authors to build complex nested wrappers, slot trees, or custom HTML structures. If a component would require markup beyond standard Markdown plus classes and attributes:

1. stop before implementing it;
2. show the exact required authored structure;
3. explain why an existing NTL with Markdown content or an existing NTE cannot provide the result;
4. provide the simpler Kramdown-compatible alternative and its visual trade-off;
5. obtain explicit developer approval for the complex content contract.

Theme or component-plan approval does not replace this additional developer approval.

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

1. Lies [references/development-findings.md](references/development-findings.md) und beachte die für die Aufgabe relevanten bestätigten, noch nicht in Regeln überführten Erkenntnisse.
2. Erfasse wiederkehrende Designregeln der Vorlage statt einzelner Pixelwerte.
3. Prüfe die relevanten APIs von Style Base, Style Utils, Style Typography und NTL/NTE sowie das ähnlichste vorhandene Theme; ordne jede Regel einem Token, Utility, einer Komponentenkomposition oder einer allgemeinen `style-*`-Variante zu.
4. Wende vor jeder gemeinsamen neuen Fähigkeit die nachfolgende Wiederverwendungsentscheidung an.
5. Implementiere die kleinste Theme-spezifische Schicht und prüfe sie mit Demo und Screenshots.
6. Dokumentiere neue bestätigte, wiederverwendbare Fehler und Lösungen nach dem Ablauf in `development-findings.md`; überführe ausgereifte Erkenntnisse anschließend in die zuständige konkrete Regel.

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

Shared component behavior belongs to Nextstrap Layouts for NTL or Nextstrap Elements for NTE, never hidden in a theme. The theme contains only its token values and theme-specific variant styling. Do not add an API solely to reproduce one reference section. If Shadow DOM lacks a required part, slot, or API, ask instead of bypassing encapsulation.

## Theme and token architecture

- Before creating or editing theme SCSS, read and follow [references/theme-file-contract.md](references/theme-file-contract.md).
- Follow the current `theme/osman/` runtime pattern: expose a `theme()` mixin, call `nextrapBase.runtime-theme-scoped()`, then load `_runtime-settings.scss`.
- Store theme-scoped values in `_runtime-settings.scss` using existing semantic `--nt-*` roles. Do not create a parallel token system.
- Register the theme selector in `docs/_src/style.scss`; do not store its token values there.
- Load theme parts with `meta.load-css`. Keep the theme scoped under `:where(.theme-<name>)`.
- Reuse semantic colors, the existing spacing scale, `--nt-content-space`, `--nt-text-gap`, typography, utilities, and component mixins.
- Treat designer pixel values as evidence of relative rhythm. Choose the closest existing spacing token instead of preserving one-off values.
- Do not add custom color, spacing, typography, breakpoint, shadow, or other theme variables without approval.
- For an intentionally dark-only reference, create only the dark token set and select it by default through the existing Style Base scheme API. Do not invent a light palette or custom switch.

## Files and selectors

- Read [references/element-child-structure.md](references/element-child-structure.md) before adding or restructuring element styles.
- Do not modify `vendor`, `node_modules`, or `workspaces`. Ask before touching `workspaces`, `docs/_includes`, or `docs/_layouts`.

## Demo

- Ergänze eine repräsentative Markdown-Demo unter `docs/pages/`; demonstriere Komponenten, nicht die Quellwebsite.
- Verwende reduzierte repräsentative Inhalte, statt die vollständige Vorlage zu kopieren.
- Bevorzuge `ntl-2col` für wechselnde Bild-/Textabschnitte und das vorhandene Reverse-Verhalten für vertauschte Spalten.
- Bevorzuge `ntl-card-row` mit `nte-card`-Kindern für Kartengruppen.
- Verwende für andere Strukturen möglichst vorhandene NTL-/NTE-Komponenten.

## Responsive behavior and verification

- Use the `mode="mobile|tablet|desktop"` API from `@trunkjs/responsive`; do not add media queries.
- Follow the responsive and visual-verification procedure in [references/theme-file-contract.md](references/theme-file-contract.md).
- Before changing more than five files, or when the result needs a new token category or header/footer work, present the proposal and ask.
