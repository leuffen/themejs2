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

## Hero-Buttons verlinken interne Service-Seiten

Bei jedem Adjust der Startseite alle Hero-Buttons pruefen. Jeder
Button muss zur passenden internen Service-Seite fuehren. Externe
Deeplinks, direkte Formular- oder Terminanbieter-URLs sind keine
zulaessigen Hero-Button-Ziele. Die tatsaechlichen internen Routen
anhand der vorhandenen Service-Seiten verifizieren; keine Pfade
erfinden. Fehlt eine passende Service-Seite, den offenen Link melden.
Button-Anzahl, Reihenfolge, Klassen und Layout beibehalten; nur
die Linkziele bei Bedarf korrigieren.

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

## Titelbild der Hero-Section

Pruefe das vorhandene Titel- beziehungsweise Hintergrundbild der
Hero-Section auf der Home-Seite ausdruecklich bei jedem AI-Adjust.
Ersetze seine bestehende Bild-URL durch ein geeignetes, verifiziertes
Bild aus dem Kundenkontext, bevorzugt durch ein kundenindividuelles
Praxisbild. Wenn dort kein passendes Bild vorliegt, verwende ein
fachlich geeignetes freigegebenes Bild aus dem Kontext. Beruecksichtige
Bildbeschreibung, Dateiname, Motiv und Eignung als Hero-Hintergrund.
Das gilt auch bei Markdown-Bildern in einem Hero-Background-Slot.
Bewahre Hero-Layout, Bildposition, Markdown-Syntax und Slot-Attribute.
Keine URL erfinden; fehlt ein passendes Bild, melde die offene Stelle.
Beachte zusaetzlich die allgemeinen Bildregeln, insbesondere dass
echte Bildmotive auf derselben Seite nicht doppelt erscheinen.

## Bewerbungsfoto aus der Vorlage beibehalten

Bei jedem AI-Adjust und Kontextwechsel der Startseite das bereits in
der ursprünglichen Vorlage vorhandene Foto im Bewerbungsabschnitt
(z. B. „Jetzt bewerben“) unverändert übernehmen. Seine Bild-URL bzw.
Dateireferenz und sein Motiv dürfen weder durch Kundenbilder noch
durch generische Bilder oder Platzhalter ersetzt werden. Diese
Bildposition ist ausdrücklich von der Pflicht zum Austausch von
Template-, Demo- und Stockbildern ausgenommen; sie bleibt auch dann
erhalten, wenn für andere Abschnitte neue Kundenbilder vorliegen.
Die Vorgabe hat für genau diese Bildposition Vorrang vor den
allgemeinen Bildregeln und dem folgenden Bild-URL-Abgleich.
Bildposition, Bildsyntax, Section und Layout unverändert lassen.
Entsteht dadurch eine Bilddoppelung, eine andere betroffene
Bildposition anpassen oder den Konflikt melden; das Bewerbungsfoto
nicht austauschen.

## Bild-URLs der Startseite verbindlich anpassen

Prüfe bei jedem AI-Adjust der `index.md` jede vorhandene Markdown-
Bildposition (`![Alt-Text](Bild-URL)`), einschließlich Hero-, Leistungs-,
Team- und sonstiger Abschnittsbilder, gegen die konkrete Bildliste im
Kundenkontext – ausgenommen das unverändert zu übernehmende Bewerbungsfoto
im Abschnitt „Jetzt bewerben“. Ist für die Bildfunktion ein passendes und zulässiges
Motiv mit belegter Bild-URL vorhanden, **ersetze die bisherige
Markdown-Bild-URL durch genau diese Kontext-URL**. Insbesondere dürfen
alte Template-, Demo- und Stockbild-URLs nicht allein aufgrund des
Structure Locks beibehalten werden. Diese Anweisung ist die für
`index.md` ausdrücklich erlaubte Ausnahme von der allgemeinen
Bildreferenz-Erhaltung im Shiller-Adjust-Basisskill. Markdown-Syntax,
Bildpositionen, Sections, Layouts und Liquid unverändert lassen; den
Alt-Text nur dann ändern, wenn er andernfalls sachlich falsch wäre,
insbesondere bei personenbezogenen Motiven. Die verbindlichen
Zuordnungs- und Personenschutzregeln aus `images.md` gelten weiter.
Gibt es keine eindeutig passende freigegebene Bild-URL, keine URL
erfinden oder ein fachlich falsches Motiv einsetzen, sondern die
ungeklärte Bildposition melden. Vor Abschluss alle Markdown-Bild-URLs
der Ausgangsdatei mit dem Ergebnis und der Kontext-Bildliste abgleichen
und nicht ersetzte alte URLs jeweils begründen; das geschützte
Bewerbungsfoto gilt dabei ausdrücklich als begründete Ausnahme.

Vorhandene Hinweise, besonders „Aktuelle Hinweise zum Coronavirus“,
Statement-Komponenten, Liquid und Includes unangetastet lassen.
Die Datenschutz- und Impressumsregeln bleiben unberührt.
