---
name: edit-themejs2-site
description: Bearbeite Markdown-Seiten, Jekyll-Layouts, Includes und Daten eines aus @leuffen/themejs2 installierten Projekts. Bei jeder solchen Website-Bearbeitung diesen Skill lesen; für responsive Klassen und Content Pane zusätzlich die passenden Skills im selben Paket.
---

# ThemeJS2-Projektdateien bearbeiten

1. Lies die Projektkonfiguration `.shiller.yml` im Document Root, falls vorhanden, und die projektspezifischen Informationen aus der dort genannten `context_file`. Relative Konfigurationspfade beziehen sich auf den Document Root. Prüfe für jede zu bearbeitende Markdown-Datei das Jekyll Front Matter einschließlich `schiller`. Der `schiller`-Block bleibt in installierten Markdown-Dateien erhalten.
2. Falls `schiller.instructions` angegeben ist, lies **alle** referenzierten Anleitungen vor dem Editieren. `tpl:/pfad` bezeichnet eine Datei relativ zu `template_dir` aus `.shiller.yml`; die Anleitungen gehören zum installierten npm-Paket und werden nicht als Website-Dateien kopiert. Fehlt eine Referenz, melde den Pfad konkret und erfinde keine Regeln.
3. Bearbeite die Datei im Projekt unter ihrem installierten Zielpfad. `_tpl/_root/` ist die Vorlage für die Grundinstallation; andere Dateien direkt unter `_tpl/` können per `schiller.tags` ausgewählt werden. `schiller.target` ist immer relativ zum Document Root: `index.md` bezeichnet etwa `docs/index.md`; verschiedene Varianten können denselben Zielpfad anbieten. Der `docs/`-Baum aus `_tpl/_root/` wird in den gewählten Document Root kopiert, andere `_root`-Dateien in dessen Projektwurzel. Beachte, dass erneutes `schiller init` oder `schiller install` vorhandene Ziele überschreibt.
4. Erhalte Jekyll Front Matter, Permalinks, Layout-Kette, Liquid-Includes, Überschriftenhierarchie und Kramdown-Attribute. Wähle vorhandene `ntl-*`-Layouts und `nte-*`-Elemente sowie Standard-Markdown vor neuen HTML-Strukturen. Für `layout`-Attribute lies [Content Pane Layout](../content-pane-layout/SKILL.md) und [Content Pane Usage](../content-pane-usage/SKILL.md); für responsive Klassen und `style-{breakpoint}` lies [TrunkJS Responsive](../trunkjs-responsive/SKILL.md).
5. Prüfe betroffene Dateien auf gültiges Front Matter, auflösbare Includes und Anleitungen, interne Links und die tatsächliche Darstellung an schmalen und breiten Viewports. Bei Änderungen an Theme-Styles, gemeinsamen Komponenten oder öffentlich genutzten Include-Pfaden gelten zusätzlich die Regeln des jeweiligen Quell-Repositories; ändere diese Strukturen nicht beiläufig bei einer Seitenbearbeitung.

Die Kundenvorlage unter `_tpl/_root/docs/_layouts/default.html` verwendet `<tj-content-pane pre-parser="text-block">`. Schreibe einzelne HTML-Elemente in Markdown dort möglichst als eigene `#[...]`-Zeile; für komplex verschachtelte Strukturen bleibt HTML möglich.

## Verbindliche Inhaltsregeln

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
