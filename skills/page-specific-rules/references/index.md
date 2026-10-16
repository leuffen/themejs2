# Haupt-Startseite: SEO, Welcome und FAQ

Gilt ausschließlich für die tatsächliche Homepage (`index.md` im
Document Root bzw. eindeutig als Startseite verwendete Datei).
Analysiere vor dem Schreiben die verbindlichen SEO-Vorgaben und
Nutzerfragen im Projektkontext. Übernimm den dort ausdrücklich
vorgegebenen Homepage-Titel im vorhandenen ersten sichtbaren
Above-the-Fold-Titel/Hero-Textblock, ohne dessen technische
Struktur, Heading-Level oder Layout zu ändern. Verändere nicht
blind den Jekyll-Front-Matter-`title`, wenn der Kontext einen
sichtbaren SEO-Titel für den ersten Block meint. Die übrigen
SEO-Ziele im vorhandenen Text umsetzen, keine Keywords erfinden.

Zusätzliche **belegte** nutzerrelevante Aussagen dürfen nur in den
vorhandenen einleitenden Willkommens-/Hero-Text integriert werden.
Ausführlichere Fragen und Antworten gehören in die **bestehende**
FAQ-/Accordion-Section. **Explizite eng begrenzte Ausnahme vom
Adapt-Struktur-Lock:** Dort dürfen zusätzliche Accordion-Einträge
durch Duplizieren eines vollständigen vorhandenen passenden
Accordion-Elements mit unveränderter Syntax und Parametern
hinzugefügt werden, sofern der Projektkontext relevante Fragen
tatsächlich belegt. Das erlaubt weder neue FAQ-Sections noch
neue Überschriften-/Layoutbereiche oder Änderungen an bestehenden
Accordion-Markern. Ohne vorhandenes Accordion keine neuen
Accordion-Elemente erfinden; nutze passende bestehende Texte.

## Offene Sprechstunde im oberen Ribbon

Prüfe anhand belegter, aktueller Praxisangaben, ob zusätzlich zu den
regulären Sprechstundenzeiten eine offene Sprechstunde angeboten wird.
Nur dann ersetze im vorhandenen oberen Ribbon (`ntl-card-row.style-ribbon`)
die Karte „Notfälle“ durch „Offene Sprechstunde“. Zeige dort eine
übersichtliche Markdown-Tabelle mit den ausdrücklich belegten Tagen,
Uhrzeiten und gegebenenfalls Hinweisen zur Anmeldung; erfinde keine
Zeitslots und leite offene Sprechstundenzeiten nicht aus regulären
Öffnungszeiten ab. Die normale Karte „Sprechstundenzeiten“ und ihr
`components/site/opening-hours.html`-Include bleiben unverändert;
die offene Sprechstunde wird zusätzlich und getrennt dargestellt.
Übertrage die bisherige relevante Notfallinformation als Frage und
Antwort in die bereits vorhandene FAQ-/Accordion-Section, sofern sie
dort nicht schon inhaltlich vollständig steht; vermeide doppelte
Notfallantworten. Bewahre dabei insbesondere die Unterscheidung
zwischen ärztlichem Bereitschaftsdienst und lebensbedrohlichem
Notfall anhand verifizierter Angaben. Diese gezielte Ersetzung der
Notfall-Karte, die Tabelle an ihrer Stelle und das Verschieben der
Notfalltexte sind eine ausdrückliche Ausnahme vom Structure Lock:
Die umgebende Ribbon-Section, sonstige Karten, vorhandene
FAQ-Elementsyntax und alle anderen Layouts bleiben erhalten.
Ohne belegtes Angebot einer offenen Sprechstunde keine Ribbon-Karte
ersetzen, keine Tabelle hinzufügen und keine Notfallinformation
verschieben.

Vorhandene Hinweise, besonders „Aktuelle Hinweise zum Coronavirus“,
Bilder, Statement-Komponenten, Liquid und Includes unangetastet
lassen. Die Datenschutz- und Impressumsregeln bleiben unberührt.
