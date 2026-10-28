---
name: page-specific-rules
description: Verpflichtende Regeln für alle Website-Seiten unter docs/ mit allgemeinen Fallback-Regeln und spezifischen References für Leistungsseiten, Startseite, Impressum und Datenschutz. Beim Öffnen, Anlegen, Kopieren oder Bearbeiten von Seiten über Dateipfad, shiller.source und Seitenverwendung anwenden.
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
haben bei Widersprüchen Vorrang. Für jede Website-Seite zusätzlich die allgemeine Reference `all-sites.md` laden;
bei Markdown-Seiten außerdem die Bildregeln. Spezifische References gelten
bei Widersprüchen vor `all-sites.md`; für alle nicht abweichend geregelten
Aspekte bleibt `all-sites.md` verbindlich. Trifft keine spezielle Regel zu,
gelten ausschließlich die allgemeinen Regeln (bei Markdown zusätzlich
`images.md`). Keine Inhaltsregel auf reine Konfigurations-/Datendateien
anwenden. Die Auswahl erfolgt **vor** jeder Inhaltsänderung.

## Zuordnungstabelle

| Dateimuster / Verwendung | `shiller.source`-Muster | Regelbeschreibung | Reference | Wann laden |
| --- | --- | --- | --- | --- |
| `**/*.md`, `**/*.html`, `**/*.htm` als Website-Seiten unter `docs/` | Entsprechende Website-Seiten | Inhaltsanpassung bei festgehaltener Section-Struktur, keine ungefragten CTAs oder globalen Kontaktdaten | [Alle Seiten](references/all-sites.md) | Bei jedem Öffnen, Anlegen, Kopieren oder Bearbeiten einer Website-Seite; als Fallback, sofern keine speziellere Regel abweicht |
| `**/*.md` unter `docs/`, einschließlich `index.md` und Unterseiten | `**/*.md` | Porträts nur bei eindeutig belegtem Personenbezug; generische Bilder aus Kontext und konsistente Motivzuordnung über Seiten hinweg | [Bildregeln](references/images.md) | Bei jedem Öffnen, Anlegen, Kopieren oder Bearbeiten einer Markdown-Datei |
| `_data/defaults.yaml` im Document Root | `_root/docs/_data/defaults.yaml` | Vollständig bytegetreu erhalten; keine individuellen Anpassungen | [Defaults](references/defaults.md) | Beim Öffnen, Anlegen, Kopieren oder Ändern |
| `_data/general.yml` oder `_data/general.yaml` | `_root/docs/_data/general.yml` | Praxisname, optionaler Zusatzname, SEO-Titel und Beschreibung anhand des Projektkontexts | [General](references/general.md) | Vor jeder Inhaltsänderung |
| `index.md` im Document Root oder tatsächliche Verwendung als Haupt-Startseite | `**/index*.md` bei eindeutigem Startseiten-Template | SEO-Titel aus dem Projektkontext und zusätzliche belegte Nutzerfragen nur im vorhandenen Willkommensblock oder als zusätzliche Accordion-Einträge in einer bereits vorhandenen FAQ-Section | [Startseite](references/index.md) | Vor jeder Inhaltsänderung |
| `**/leistungen.md`, `**/leistungen/index.md`, `**/leistungen/**/*.md` oder tatsächliche Verwendung als Leistungsübersicht, Leistungszusammenfassung oder Leistungsdetailseite | Entsprechende Muster aus `template_dir`, auch z. B. `_tpl/mueller/leistungen.md` | `leistungen.md` fasst die H3-Leistungen aus `leistungen/index.md` je als H2 mit Kurzbeschreibung und zugeordnetem Bild zusammen; Detailseiten behandeln die einzelne Leistung | [Leistungsseiten](references/leistungen.md) | Vor jeder Inhaltsänderung an Leistungsseiten |
| `**/ueber-uns*.md`, `**/über-uns*.md`, `**/about*.md` oder tatsächliche Verwendung als Über-uns-/Team-Seite | `**/ueber-uns*`, `**/über-uns*`, `**/about*` | Für jeden belegten Arzt eine eigene kopierte H2-Section; vorhandene Mitarbeiter-Card-Column je benanntem Mitarbeiter mit H3 befüllen oder bei fehlenden Namen die Mitarbeiter-Section entfernen | [Über uns](references/ueber-uns.md) | Vor jeder Inhaltsänderung |
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
dürfen nur auf konkreten Auftrag oder aufgrund einer ausdrücklich
zutreffenden Seitentyp-Reference als vollständige Strukturblöcke
hinzukommen; innerhalb solcher Blöcke wird keine Syntax umgeschrieben.
Bei bestehenden `data-kicker`-Attributen darf ausschließlich der
sichtbare Textwert passend zum Abschnitt geändert werden, nicht die
Syntax oder weitere Attribute. Die Über-uns-Reference erlaubt ausschließlich die dort definierten
Duplikationen und das Entfernen der Mitarbeiter-Section bei fehlenden Namen.
Die Leistungsseiten-Reference erlaubt ausschließlich auf der zusammenfassenden
`leistungen.md` die dort definierte Ableitung kompletter H2-Blöcke aus den
H3-Leistungen der `leistungen/index.md`; andere Sections bleiben geschützt.
Die Text-only- und Diff-Prüfungen aus `edit-site` gelten auch
für Dateien ohne Treffer in der Zuordnungstabelle. Bei Widerspruch
zwischen Textinhalt und unveränderlicher Struktur den Konflikt melden.

Dieser Skill ergänzt [edit-site](../edit-site/SKILL.md)
und dessen bestehende Projektdaten-, Front-Matter- und Layoutregeln.
Bei rechtlichen Seiten sind die spezifischeren References maßgeblich:
keine zusätzliche CTA, Gestaltung oder automatisch eingefügte Inhalte.
Die Startseiten-, Über-uns- und Leistungsseiten-References erlauben ausschließlich die dort konkret genannten Ausnahmen. Sonstige zusätzliche Sections, CTAs, Buttons oder Komponenten bleiben verboten. Die Regeln verpflichten den bearbeitenden Agenten zum Laden; sie
implementieren keinen automatischen Dateisystem-Hook.
