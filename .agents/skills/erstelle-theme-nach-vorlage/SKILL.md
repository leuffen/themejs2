---
name: erstelle-theme-nach-vorlage
description: Gleicht einen neuen oder bestehenden ThemeJS2-/Nextstrap-Style, eine Section oder ein vollständiges Theme visuell an eine vorhandene Vorlage an und prüft die Umsetzung iterativ in Desktop und Mobile. Verwenden, sobald eine Website, ein Screenshot, ein Design oder ein bestehendes Theme als konkrete Stilvorlage dient; nicht für freie Gestaltung ohne Referenz.
---

# Theme nach Vorlage erstellen

Übertrage die visuelle Sprache einer Vorlage in einen wiederverwendbaren Style oder ein Theme. Nutze diesen Ablauf auch dann, wenn nur eine einzelne vorhandene `style-*`-Variante oder Section angeglichen werden soll. Das Ziel ist keine starre Seitenkopie, sondern eine belastbare Nextstrap-Interpretation, die mit editierbarem Kramdown-Content, anderen Textlängen, Bildern und Elementanzahlen funktioniert.

## Verbindliche Grundlage

Lies zuerst den repository-eigenen Skill `../modify-theme/SKILL.md` vollständig und folge seinen Referenzen für Theme-Vertrag und Child-Struktur. Lies zusätzlich für jede verwendete `ntl-*`- oder `nte-*`-Komponente deren lokalen Usage- und Theming-Skill im zuständigen Package.

Ändere gemeinsame Komponenten erst, wenn ihre vorhandenen Slots, Parts, Mixins, Modifier, CSS-Variablen und Beispiele nachweislich nicht ausreichen. Bewahre die Trennung:

- Theme: Tokens, semantische Varianten und wiederverwendbare Light-DOM-Muster.
- Inhaltsseite: Texte, Bildquellen, Links, Reihenfolge und instanzbezogene Variablen.
- NTL: Section-Komposition und responsives Layout.
- NTE: wiederverwendbarer Inhalt innerhalb eines Layouts.
- Website-Rahmen: Navbar, Header und Footer nur bei ausdrücklichem Auftrag.

## Arbeitsroute

1. Lies [Referenz erfassen und zerlegen](references/referenzanalyse.md), bevor du Markup oder Styles planst.
2. Erstelle eine Section-Matrix aus Referenz, passendem NTL/NTE-Seaming, benötigter Variante, Content-Pane-Markup und Desktop-/Mobil-Verhalten.
3. Lies [Implementierung und Content-Vertrag](references/implementierung.md), bevor du Dateien anlegst oder Komponenten stylst.
4. Wenn mindestens zwei unabhängige Section-Styles abzugleichen sind und Subagenten verfügbar sowie autorisiert sind, lies [Multi-Agenten-Abgleich](references/multi-agenten.md) und delegiere pro Section-Style einen abgegrenzten Spezialauftrag. Bleibe bei einer einzelnen Section oder stark gekoppelten Dateien in einem Arbeitsstrang.
5. Implementiere zuerst Theme-Tokens und Content Flow, dann Section für Section. Eine strukturell falsche Section darf nicht durch Pixel-Tuning kaschiert werden.
6. Prüfe jede Section in drei Durchläufen nach [Visuelle Iteration](references/visuelle-iteration.md). Halte nach jedem Durchlauf Desktop-Auswirkung, Mobil-Auswirkung und verbleibenden Änderungsbedarf fest.
7. Falls eine gemeinsame API fehlt, lies und befolge [Upstream-Vorversionen](references/upstream-vorversionen.md), bevor du einen lokalen Override oder einen Upstream-PR erstellst.
8. Kompiliere das vollständige Theme, prüfe den tatsächlichen Diff und kontrolliere die PR-Dateiliste. Generierte Dateien werden nur aufgenommen, wenn Repository-Regeln und aktueller Auftrag dies verlangen; eine ausdrückliche Ausschlussanweisung wie `docs/assets/dist/**` hat Vorrang.

## Qualitätsziel

Eine Section gilt erst als belastbar, wenn:

- Rollen, Slots und Quellreihenfolge semantisch stimmen;
- Desktop und Mobile die Hierarchie und den Rhythmus der Vorlage wiedergeben;
- Styling über dokumentierte Parts, Tokens, Mixins und Parent/Child-Pairings erfolgt;
- alle Autoreninhalte in Kramdown beziehungsweise Content Pane editierbar bleiben;
- keine neue Media Query und kein ungescopter Theme-Selector nötig ist;
- längere Texte, fehlende optionale Inhalte und abweichende Card-Anzahlen das Layout nicht brechen;
- wesentliche verbleibende visuelle Abweichungen ausdrücklich dokumentiert sind.

## Abschlussbericht

Berichte knapp:

- welche Sections in welchen drei Durchläufen verbessert wurden;
- welche Desktop- und Mobile-Wirkung geprüft wurde;
- welche Prüfungen erfolgreich waren oder technisch blockiert blieben;
- welche konkreten Punkte die nächste visuelle Revision braucht;
- welche lokalen Upstream-Vorversionen und zugehörigen PRs existieren;
- welche Dateien tatsächlich im PR enthalten sind.
