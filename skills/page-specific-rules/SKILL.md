---
name: page-specific-rules
description: Verpflichtende dateispezifische Regeln für das Öffnen, Anlegen und Ändern beliebiger Dateien im docs-Verzeichnis von ThemeJS2-Websites. Ordnet anhand von Dateipfad, `shiller.source`, Wildcards und tatsächlicher Seitenverwendung passende References zu, insbesondere für Impressum und Datenschutz.
---

# Dateispezifische Seitenregeln

Beim **Öffnen, Lesen, Anlegen, Kopieren oder Ändern jeder Datei unter `docs/`**
diesen Skill laden, unabhängig von der Endung (z. B. Markdown, HTML, YAML,
JSON). Das gilt auch für die entsprechenden installierten Dokumentwurzeln
und die Vorlagen unter `_tpl/_root/docs/`.

Vor der Bearbeitung relativen Pfad, Dateinamen, Front Matter einschließlich
`shiller.source` und die tatsächliche Verwendung der Seite prüfen.
`shiller.source` bezeichnet die ursprüngliche Template-Datei relativ zum
konfigurierten `template_dir` (dem `_tpl/`-Verzeichnis), nicht den
installierten Zielpfad. Für den Abgleich diesen Source-Pfad separat
prüfen und nicht durch den aktuellen Zielpfad ersetzen. So greifen
Regeln auch nach Umbenennung einer installierten Seite. Glob-Muster gelten für den
Pfad relativ zu `docs/`; `**/` umfasst auch die Verzeichniswurzel.
Ein Tabelleneintrag passt, wenn **entweder** das Dateimuster auf den
Zielpfad passt, das Source-Muster auf `shiller.source` passt **oder**
die angegebene Seitenverwendung zutrifft. Fehlt `shiller.source`,
bleiben Zielpfad und Verwendung entscheidend. Source-Muster sind
relativ zu `template_dir` und werden nicht gegen den Zielpfad geprüft.
Vergleiche ohne Beachtung der Groß-/Kleinschreibung. Eine erkennbar als
Impressum oder Datenschutz eingesetzte Datei muss auch bei abweichendem
Dateinamen der passenden Regel zugeordnet werden. Treffen mehrere
Einträge zu, alle passenden References laden; spezifischere Regeln
haben bei Widersprüchen Vorrang. Passt kein Eintrag, keine weitere
Reference laden. Die Auswahl erfolgt **vor** jeder Inhaltsänderung.

## Zuordnungstabelle

| Dateimuster / Verwendung | `shiller.source`-Muster | Regelbeschreibung | Reference | Wann laden |
| --- | --- | --- | --- | --- |
| `**/impressum*.md`, `**/impressum*.html`, `**/impressum*.yml`, `**/impressum*.yaml`, `**/impressum*` oder Verwendung als Impressum | `**/impressum*` (z. B. `_root/docs/legal/impressum.de.md`) | Vorlage strikt beibehalten, ausschließlich belegte rechtliche Angaben austauschen und fehlende Angaben markieren | [Impressum](references/impressum.md) | Beim Öffnen, Anlegen, Kopieren oder Ändern |
| `**/datenschutz*.md`, `**/datenschutz*.html`, `**/datenschutz*.yml`, `**/datenschutz*.yaml`, `**/datenschutz*` oder Verwendung als Datenschutzerklärung | `**/datenschutz*` (z. B. `_root/docs/legal/datenschutz.de.md`) | Datenschutzvorlage vollständig und unverändert kopieren | [Datenschutz](references/datenschutz.md) | Beim Öffnen, Anlegen, Kopieren oder Ändern |

Die Tabelle ist für spätere datei- und verwendungsspezifische Regeln
erweiterbar. Neue Regeln erhalten immer Zielmuster bzw. Verwendung,
ein optionales `shiller.source`-Muster, eine
knappe Beschreibung, den Reference-Pfad und den Ladezeitpunkt.

## Unveränderlichkeit bei reinen Kontext- und Textupdates

Diese Zuordnung entscheidet **welche** inhaltlichen Regeln gelten; sie
erteilt keine Erlaubnis, bestehende Templates umzubauen. Bei Datenkopie,
Kontextwechsel und Austausch von Kundentexten ist die vorhandene Datei
strukturell unveränderlich: Front Matter samt `---` und Schlüsselstruktur,
Markdown-Überschriften/Listen/Blockquotes, `{: ... }`-Attribute,
`#[...]`-Shortcuts, Liquid, Sections, Layout-, Style- und
Formularelemente bleiben exakt erhalten. Nur sichtbare Texte und explizit
freigegebene Datenwerte werden ersetzt. Neue oder duplizierte Elemente
dürfen nur auf konkreten Auftrag als vollständige Strukturblöcke
hinzukommen; innerhalb solcher Blöcke wird keine Syntax umgeschrieben.
Die Text-only- und Diff-Prüfungen aus `edit-themejs2-site` gelten auch
für Dateien ohne Treffer in der Zuordnungstabelle. Bei Widerspruch
zwischen Textinhalt und unveränderlicher Struktur den Konflikt melden.

Dieser Skill ergänzt [edit-themejs2-site](../edit-themejs2-site/SKILL.md)
und dessen bestehende Projektdaten-, Front-Matter- und Layoutregeln.
Bei rechtlichen Seiten sind die spezifischeren References maßgeblich:
keine zusätzliche CTA, Gestaltung oder automatisch eingefügte Inhalte.
Die Regeln verpflichten den bearbeitenden Agenten zum Laden; sie
implementieren keinen automatischen Dateisystem-Hook.
