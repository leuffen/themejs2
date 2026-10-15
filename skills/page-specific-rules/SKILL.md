---
name: page-specific-rules
description: Verpflichtende dateispezifische Regeln für das Öffnen, Anlegen und Ändern beliebiger Dateien im docs-Verzeichnis von ThemeJS2-Websites. Ordnet anhand von Dateipfad, Wildcards und tatsächlicher Seitenverwendung passende References zu, insbesondere für Impressum und Datenschutz.
---

# Dateispezifische Seitenregeln

Beim **Öffnen, Lesen, Anlegen, Kopieren oder Ändern jeder Datei unter `docs/`**
diesen Skill laden, unabhängig von der Endung (z. B. Markdown, HTML, YAML,
JSON). Das gilt auch für die entsprechenden installierten Dokumentwurzeln
und die Vorlagen unter `_tpl/_root/docs/`.

Vor der Bearbeitung relativen Pfad, Dateinamen, Front Matter und die
tatsächliche Verwendung der Seite prüfen. Glob-Muster gelten für den
Pfad relativ zu `docs/`; `**/` umfasst auch die Verzeichniswurzel.
Vergleiche ohne Beachtung der Groß-/Kleinschreibung. Eine erkennbar als
Impressum oder Datenschutz eingesetzte Datei muss auch bei abweichendem
Dateinamen der passenden Regel zugeordnet werden. Treffen mehrere
Einträge zu, alle passenden References laden; spezifischere Regeln
haben bei Widersprüchen Vorrang. Passt kein Eintrag, keine weitere
Reference laden. Die Auswahl erfolgt **vor** jeder Inhaltsänderung.

## Zuordnungstabelle

| Dateimuster / Verwendung | Regelbeschreibung | Reference | Wann laden |
| --- | --- | --- | --- |
| `**/impressum*.md`, `**/impressum*.html`, `**/impressum*.yml`, `**/impressum*.yaml`, `**/impressum*` oder Verwendung als Impressum | Vorlage strikt beibehalten, ausschließlich belegte rechtliche Angaben austauschen und fehlende Angaben markieren | [Impressum](references/impressum.md) | Beim Öffnen, Anlegen, Kopieren oder Ändern |
| `**/datenschutz*.md`, `**/datenschutz*.html`, `**/datenschutz*.yml`, `**/datenschutz*.yaml`, `**/datenschutz*` oder Verwendung als Datenschutzerklärung | Datenschutzvorlage vollständig und unverändert kopieren | [Datenschutz](references/datenschutz.md) | Beim Öffnen, Anlegen, Kopieren oder Ändern |

Die Tabelle ist für spätere datei- und verwendungsspezifische Regeln
erweiterbar. Neue Regeln erhalten immer Muster bzw. Verwendung, eine
knappe Beschreibung, den Reference-Pfad und den Ladezeitpunkt.

Dieser Skill ergänzt [edit-themejs2-site](../edit-themejs2-site/SKILL.md)
und dessen bestehende Projektdaten-, Front-Matter- und Layoutregeln.
Bei rechtlichen Seiten sind die spezifischeren References maßgeblich:
keine zusätzliche CTA, Gestaltung oder automatisch eingefügte Inhalte.
Die Regeln verpflichten den bearbeitenden Agenten zum Laden; sie
implementieren keinen automatischen Dateisystem-Hook.
