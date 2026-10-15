---
name: edit-site
description: Bearbeite Markdown-Seiten, Jekyll-Layouts, Includes und Daten eines aus @leuffen/themejs2 installierten Projekts. Bei jeder solchen Website-Bearbeitung diesen Skill lesen; für responsive Klassen und Content Pane zusätzlich die passenden Skills im selben Paket.
---

# Website-Dateien bearbeiten

1. Lies die Projektkonfiguration `.shiller.yml` im Document Root, falls vorhanden, und die projektspezifischen Informationen aus der dort genannten `context_file`. Relative Konfigurationspfade beziehen sich auf den Document Root. Prüfe für jede zu bearbeitende Markdown-Datei das Jekyll Front Matter einschließlich `schiller`. Der `schiller`-Block bleibt in installierten Markdown-Dateien erhalten.
2. Sobald sichtbare Website-Texte erzeugt oder redaktionell geändert werden, lade verpflichtend [Generate Website Content](../generate-website-content/SKILL.md) und dessen passende Schreibstil-, SEO- und Fach-References. Für rein technische Datei- oder Style-Änderungen ist dieser Schreib-Skill nicht erforderlich. Lade vor einer Inhaltsänderung die passenden `page-specific-rules` und Seitentyp-References. `schiller.instructions` ist kein unterstützter Regelkanal und darf weder ausgewertet noch neu erzeugt werden. Maßgeblich sind Dateipfad, `shiller.source` (falls vorhanden) und tatsächliche Verwendung.
4. Erhalte Jekyll Front Matter, Permalinks, Layout-Kette, Liquid-Includes, Überschriftenhierarchie und Kramdown-Attribute. Wähle vorhandene `ntl-*`-Layouts und `nte-*`-Elemente sowie Standard-Markdown vor neuen HTML-Strukturen. Für `layout`-Attribute lies [Content Pane Layout](../content-pane-layout/SKILL.md) und [Content Pane Usage](../content-pane-usage/SKILL.md); für responsive Klassen und `style-{breakpoint}` lies [TrunkJS Responsive](../trunkjs-responsive/SKILL.md).
5. Prüfe betroffene Dateien auf gültiges Front Matter, auflösbare Includes und Anleitungen, interne Links und die tatsächliche Darstellung an schmalen und breiten Viewports. Bei Änderungen an Theme-Styles, gemeinsamen Komponenten oder öffentlich genutzten Include-Pfaden gelten zusätzlich die Regeln des jeweiligen Quell-Repositories; ändere diese Strukturen nicht beiläufig bei einer Seitenbearbeitung.

Die Kundenvorlage unter `_tpl/_root/docs/_layouts/default.html` verwendet `<tj-content-pane pre-parser="text-block">`. Schreibe einzelne HTML-Elemente in Markdown dort möglichst als eigene `#[...]`-Zeile; für komplex verschachtelte Strukturen bleibt HTML möglich.

## CTA am Ende neu generierter Seiten

Bei einer neu generierten Seite oder einem ausdrücklich verlangten
vollständigen Neuaufbau soll das letzte Inhaltslayout eine vorhandene,
zum aktiven Theme passende CTA-Section sein, sofern eine solche existiert.
Deren Link muss zu einer belegten und erreichbaren Aktion führen.
Bei bloßer Übernahme oder Aktualisierung bestehender Inhalte bleibt die
vorhandene Struktur unverändert; keine CTA-Section ergänzen oder verschieben.

## Verbindliche Inhaltsregeln

### Bestehende Seiten: nur Text ändern (Structure Lock)

Bei Kontextwechsel, Datenkopie, Kundenanpassung oder redaktionellem Austausch
bestehender Markdown-Dateien ist die Ausgangsdatei die verbindliche
Strukturvorlage. Ersetze ausschließlich sichtbare Textinhalte und ausdrücklich
beauftragte inhaltliche Werte (etwa belegte Kontaktdaten oder Linkziele).
Bewahre Front-Matter-Begrenzer `---`, Einrückung, Schlüssel, Datentypen,
Reihenfolge und Schachtelung; ändere weder `schiller`/`shiller`-Metadaten
noch Layout-, Style-, Slot-, Formular- oder Komponentenattribute. Markdown-
Marker und ihre Anzahl/Position bleiben bestehen: insbesondere `#` bis
`######`, Listenmarker `-`, Blockquotes `>`, Trenner `---`,
Kramdown-Zeilen `{: ... }`, Liquid-Tags, HTML und eigenständige
`#[...]`-Shortcuts. Ersetze einen Shortcut niemals durch HTML oder
normalen Text; ändere darin weder Selector, Tag, Klassen, Attribute,
Anführungszeichen noch Klammern. Inhalt hinter Überschriften oder in
vorhandenen Textabsätzen darf geändert werden, nicht aber die Marker oder
Abschnittsgrenzen. Bestehende Section-Reihenfolge, Hierarchie,
Layouts und Style-Varianten sind unveränderlich.

Zusätzliche Elemente oder Duplikate sind nur zulässig, wenn der konkrete
Auftrag sie verlangt; kopiere dafür einen vollständigen passenden
Originalblock samt Markern/Attributen, ohne die Struktur innerhalb des
Blocks umzuformen. Ein allgemeiner Wunsch nach neuen Kontexttexten
autorisiert keine neuen Sections, CTA, Layoutwechsel, Normalisierung
des YAML-Headers, automatische Markdown-Formatierung oder Migration.
Falls der neue Text nicht in die vorhandene Struktur passt, stoppe die
betroffene Stelle und melde den Konflikt statt sie kreativ umzubauen.

Vergleiche vor Abschluss Ausgangsdatei und Ergebnis zeilenweise; jede
Änderung außerhalb der freigegebenen Text-/Datenwerte ist rückgängig zu
machen. Prüfe besonders Front-Matter-Grenzen und -Schlüssel, Überschriften-
marker, Kramdown-Attributblöcke, `#[...]`-Zeilen, Liquid, Sections,
Style- und Layoutwerte. Keine Prüfung als bestanden melden, wenn
unbeabsichtigte Strukturänderungen übrig sind.


Erhalte die vorhandene technische Struktur der Zieldatei und passe nur
Inhalte an den Projektkontext an. Formuliere sachlich und knapp, vermeide
Superlative oder Garantien und halte Demonstrationsinhalte klar als
fiktiv erkennbar. Erfinde weder Kontaktdaten noch Leistungen, URLs oder
sonstige fachliche Angaben. Ein vorhandenes Layout oder Formular wird
nur auf ausdrücklichen Auftrag umgebaut.

## References nach Seitentyp

Lies die jeweils passende Reference **vor** einer inhaltlichen Änderung;
nicht pauschal alle Seitenmuster in jede Bearbeitung laden:

- [Markdown und Content-Elemente](references/markdown-elemente.md): bei
  gewöhnlichen Markdown-Seiten, NTL-/NTE-Auswahl und Inhaltskomposition.
- [Startseite](references/startseite.md): bei `index.md`, Homepage oder
  einem neuen Startseitenlayout.
- [Leistungsseiten](references/leistungen.md): bei Leistungsübersicht,
  Leistungsdetails oder deren Neuaufbau.
- [Kontaktseite](references/kontakt.md): bei Kontaktdaten, Anfahrt,
  Karte, Formularkomposition oder Kontaktseiten-Layouts.

Für Kramdown und Content-Pane-Sections außerdem die
[ThemeJS2-Layout-Beispiele](../content-pane-usage/references/themejs2-markdown-layouts.md)
lesen, für Breakpoint-Klassen die
[Responsive-Content-Beispiele](../trunkjs-responsive/references/themejs2-responsive-content.md).
Diese Links sind Teil des veröffentlichten npm-Pakets. Ein Skill-Link löst
allein noch kein automatisches Nachladen durch die bisherige Shiller-Lib aus.

## Verpflichtende dateispezifische Regeln

Bei jedem Öffnen, Lesen, Anlegen, Kopieren oder Ändern einer Datei
unter `docs/` (auch unter `_tpl/_root/docs/`) unabhängig von der
Dateiendung zuerst [page-specific-rules](../page-specific-rules/SKILL.md)
laden und dessen Zuordnungstabelle auf Dateipfad, Wildcards und
Seitenverwendung anwenden. Alle passenden References vor der
inhaltlichen Bearbeitung lesen; bei rechtlichen Seiten haben deren
speziellere Regeln Vorrang, insbesondere vor CTA-Ergänzungen.
