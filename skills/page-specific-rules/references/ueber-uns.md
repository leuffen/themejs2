# Über uns: Ärzte und Mitarbeitende

Diese Regel gilt für alle tatsächlich als „Über uns“, Praxis-Team oder
Ärztevorstellung verwendeten Seiten, unabhängig vom Dateinamen.

## Ärzte: eine H2-Section je Person

Ermittle ausschließlich aus belegten Projekt- und Kundendaten, welche
Ärztinnen und Ärzte auf der Seite vorgestellt werden sollen. Für jede
dieser Personen muss eine eigene H2-Section vorhanden sein. Verwende
eine bereits bestehende Arzt-H2-Section als vollständige Vorlage und
dupliziere genau diesen Block bei Bedarf je weiterer Person. Übernimm
die gesamte technische Struktur einschließlich der H2-Marker,
Kramdown-Attribute, `#[...]`-Shortcuts, Layout- und Style-Angaben,
Slots und vorhandenen Komponenten unverändert; ändere lediglich die
personenbezogenen Textwerte sowie ausdrücklich zulässige Bildwerte.
Befülle jede Section individuell mit belegtem Namen, Funktion,
Qualifikation und den jeweils vorhandenen Informationen, ohne
Biografien oder Fachgebiete zu erfinden. Ist ein geeignetes, eindeutig
zugeordnetes Arztbild verfügbar, verwende es im vorhandenen Bildfeld;
andernfalls behalte einen bereits vorgesehenen Bildplatzhalter bei
oder setze dort einen eindeutig als Platzhalter gekennzeichneten Wert,
ohne dafür die Section-Struktur umzubauen. Wo die Vorlage kein Bildfeld
hat, nicht eigenmächtig eines hinzufügen.

## Mitarbeitende: vorhandene Card-Column verwenden

Existiert eine Mitarbeiter-Section mit `ntl-card-column` beziehungsweise
dem in der Vorlage verwendeten Card-Column-Layout und sind konkrete
Mitarbeiternamen belegt, bleibt diese Section einschließlich ihres
Layouts bestehen. Verwende für jede genannte Mitarbeiterin und jeden
genannten Mitarbeiter ein H3-Element mit dem belegten Namen und der
zugehörigen Bezeichnung beziehungsweise Funktion. Dupliziere dafür
vorhandene vollständige Mitarbeiter-/H3-Blöcke, ohne deren Markdown-,
Attribut-, Style- oder Komponentenstruktur zu ändern. Bildangaben nur
bei eindeutig belegter Zuordnung austauschen; vorhandene Platzhalter
dürfen erhalten bleiben. Liegen keine konkreten Mitarbeiternamen vor,
entferne die gesamte Mitarbeiter-Section einschließlich der darin
liegenden Card-Column und Platzhalterkarten, statt fiktive Namen oder
generische Mitarbeiterprofile auszugeben. Informationen ohne Namen
genügen nicht für eine personenbezogene Mitarbeiterkarte.

## Abgrenzung und Prüfung

Diese Regeln sind eng begrenzte Ausnahmen vom Structure Lock in
`edit-site` und `page-specific-rules`: zulässig sind ausschließlich
das vollständige Duplizieren vorhandener Arzt- und Mitarbeiterblöcke,
das Aktualisieren ihrer belegten Texte und Bildwerte sowie das
Entfernen der gesamten Mitarbeiter-Section, falls keine Namen belegt
sind. Die Reihenfolge und innere Syntax aller übrigen Sections bleiben
unverändert. Vorhandene `data-kicker`-Textwerte werden passend zum
jeweiligen Abschnitt angepasst, sofern sinnvoll, aber nicht neu
hinzugefügt. Prüfe abschließend, ob genau eine H2-Section je belegtem
Arzt besteht, jede belegte Mitarbeiterperson mit H3 und Funktion
aufgeführt ist und ohne Mitarbeiternamen keine Mitarbeiter-Section
übrig bleibt.
