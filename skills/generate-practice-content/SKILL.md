---
name: generate-practice-content
description: >-
  Erstelle oder überarbeite deutsche, patientenorientierte Webseitentexte
  für Arzt- und Zahnarztpraxen mit @leuffen/themejs2. Verpflichtend bei neuer
  Praxis-Startseite, Leistungsseite, Kontakttext, grundlegender Textrevision
  oder dazugehörigen SEO-Titeln und Meta-Descriptions. Verbinde Projektkontext,
  Faktenvalidierung, Internetrecherche und Schreiben in genau einem Skill mit
  getrennten Prüfschritten für Sprache, Verständlichkeit, Relevanz, SEO und
  DACH-Werberecht; beachte ausdrückliche rechtliche Kontextausnahmen.
---

# Deutsche Praxistexte generieren

Schreibe für Patienten, nicht für Praxisinhaber. Bearbeite nur die beauftragten
Seiten. Dieser Skill steuert einen zusammenhängenden Ablauf; Validatoren sind
Prüfrollen, keine weiteren Skills. Eine KI-Prüfung ist keine Rechtsfreigabe.

## Referenzen gezielt laden

- Vor Beginn: [Kontext, Fakten und Ausgabe](references/context-and-output.md).
- Vor Schreiben und Leserprüfung:
  [Patientensprache und Seitenaufbau](references/patient-copy.md).
- Vor Suchrecherche und SEO-Endprüfung: [SEO](references/seo.md).
- Vor rechtlichen Festlegungen und Schlussprüfung:
  [Werberecht DACH](references/legal-dach.md); relevante Länder vertiefen.

Bei ThemeJS2-Dateiänderungen zusätzlich den im Paket vorhandenen
`skills/edit-themejs2-site/SKILL.md` und dessen passende Seitentyp-Reference
lesen. Front Matter, `schiller`, Liquid, Permalinks, Layouts und Attribute
bewahren. Keine fremden Metadatenschemata oder H1-Automatik unterstellen.
Keine Laufzeit, Komponenten oder andere Seiten beiläufig ändern. Ein Skill-Link
ist keine Zusicherung, dass eine Laufzeit die Referenz automatisch lädt.

## Arbeitsablauf

### 1. Kontext und Fakten vorab validieren

Projektregeln, `.shiller.yml`, deren `context_file`, Zielseite, referenzierte
`schiller.instructions` und relevante Bestandsseiten lesen. Relative
Konfigurationspfade vom Document Root aus auflösen. Freigegebenen Kontext von
Demo-Daten und Fremdmaterial trennen; fehlende Quellen konkret benennen.

Ein internes Briefing erstellen: Zielseite, Seitentyp, Fachrichtung, Land/Region,
Patienten und Anliegen, echte Leistungen, exakte Namen/Titel, Patientenkreis,
Abrechnung, Tonalität, Praxisziele, reale Kontaktwege, Suchintention und Scope.
Die Rechtsprüfung standardmäßig aktivieren; ausdrückliche Ausnahmen nach der
Kontext-Reference auswerten. Namen/Titel unverändert übernehmen. Praxisfakten
als bestätigt, fehlend oder widersprüchlich einordnen. Bestätigt heißt durch
die genannte Quelle gedeckt, nicht unabhängig begutachtet. Kritische Lücken
klären oder die betroffene Aussage weglassen, niemals kreativ schließen.

### 2. Inhalt auswählen und recherchieren

Aus Patientenfrage, Seitentyp und Bestand eine knappe Gliederung ableiten.
Vorhandene Recherche zuerst nutzen, dann offene fachliche und suchbezogene
Fragen gezielt online recherchieren. Originalquellen öffnen; Datum, Aussage,
Beleg und Grenzen intern festhalten. Medizinische Aussagen an Fachquellen
prüfen, nicht an Wettbewerberwerbung. Ein gefundenes Verfahren belegt kein
Praxisangebot. Unbelegte Erkenntnisse nicht in Tatsachen umwandeln.

Suchintention, natürliche Suchbegriffe und zuständige Zielseite vor dem Volltext
bestimmen. Keine SISTRIX-Messwerte oder Spitzenrankings ohne echten Abruf
behaupten. Eine systematische Untersuchung bestplatzierter Praxen nur bei
entsprechendem Zusatzauftrag durchführen.

### 3. Schreiben

Aus bestätigtem Briefing und Recherche eine vollständige Fassung erstellen.
Warm, konkret und verständlich schreiben; Projektstil beachten, ohne Fakten
zu erweitern. Allgemeine Einführungen erlauben, aber keine erfundene Erfahrung,
Ausstattung oder Betreuungsqualität behaupten. Patientenfrage früh beantworten.
Argumentierende Passagen vom tatsächlichen Anliegen zum gewünschten Zustand
und zu sachlich abgewogenen Möglichkeiten führen. Kontaktinformationen nicht
in eine künstliche Problemdramaturgie zwingen.

### 4. Sprache bereinigen

AI-Slop, Werbefloskeln, leere Verstärker, schematische Gegensätze und doppelte
Gedanken entfernen. Keine mechanische Wortverbotsliste verwenden. Nach jedem
Schnitt wichtige Fakten, eigenständige Gedanken und Einschränkungen bewahren;
eine gestrichene Floskel nicht durch eine unbelegte Behauptung ersetzen.

### 5. Patientenverständlichkeit prüfen

Aus Sicht der Zielgruppe ohne medizinisches Vorwissen lesen. Titel, Einstieg,
Fachbegriffe, Bezüge und CTA prüfen. Ohne Autorenbegründung paraphrasieren:
Worum geht es? Für wen passt das Angebot? Was bleibt offen? Was geschieht beim
nächsten Schritt? Mehrdeutigkeiten korrigieren. Eine simulierte Leserrolle
niemals als echte Patientenbefragung ausgeben.

### 6. Relevanz prüfen

Jeden Abschnitt einer Patientenfrage, notwendigen Einordnung oder Handlung
zuordnen. Folgenlose Sätze streichen, entscheidungsrelevante Lücken melden.
Patientenkreis, Praxisziele und Kontaktweg gegen das Briefing prüfen. Keine
zusätzlichen Seiten oder FAQ nur für mehr Text anlegen. Organisatorische
Entlastung darf wichtige Patienteninformationen nicht verdecken.

### 7. SEO und Fakten am Ergebnis prüfen

Suchintention, tatsächlichen HTML-Title, H1, Meta-Description, passende H2,
Text und interne Links auf Übereinstimmung prüfen. Keine Leistungen, Titel
oder Orte für SEO erfinden. Metadaten anhand des wirklichen Layouts zuordnen;
keine zweite H1 erzeugen, wenn das Layout sie bereits rendert. Ohne gerendertes
Ergebnis nur die Quelltextprüfung bestätigen.

Alle Namen, Titel, Praxisbehauptungen und medizinischen Aussagen erneut mit
Kontext und Quellen abgleichen, auch nach sprachlichen Abschwächungen.
Erfundenes, Widersprüche und medizinisch riskante Fehlaussagen sperren die
betroffene Endfassung unabhängig von rechtlichen Kontextausnahmen.

### 8. Recht zuletzt prüfen und Ergebnis übergeben

Die Endfassung einschließlich Metadaten, CTA und vorliegendem Bildkontext nach
der DACH-Reference prüfen. Ausnahmen mit genauem Scope als übersprungen
protokollieren; die Texterstellung deswegen nicht erneut stoppen. Alle nicht
ausgenommenen Kategorien weiter prüfen.

Eindeutige offene Verstöße außerhalb des Ausnahme-Scopes korrigieren oder die
betroffene Fassung als Entwurf zur Klärung ausweisen. Unsicherheit nicht als
sicheres Verbot, Prüflücken nicht als bestanden ausgeben. Nach inhaltlichen
Korrekturen betroffene Checks und zuletzt die Rechtsprüfung wiederholen.
Ohne Änderungsanlass keine identischen Recherchen erneut ausführen.

## Rollen, Nachweis und Freigabe

Wenn echte Subagents verfügbar sind, Recherche und unabhängige Leser-, Fach-
und Rechtschecks in getrennten Rollen ausführen. Ein Autor integriert Befunde.
Reviewer erhalten Fassung, Zielgruppe, Faktenbasis und ihren Prüfauftrag;
die frische Leserprobe zunächst ohne Autorenabsicht und frühere Urteile.
Ohne Subagents nacheinander prüfen und als sequenziellen Selbstcheck ausweisen;
keine unabhängigen oder menschlichen Freigaben erfinden.

Pro Fassung einen kompakten Nachweis mit Stelle, Befund, Korrektur, Quelle und
Status je Check führen. Saubere Texte und Metadaten getrennt von Recherche,
Ausnahmen und offenen Punkten ausgeben. Interne Nachweise nicht beiläufig
im Website-Build veröffentlichen. Schreibauftrag, rechtlichen Prüfstatus und
Publikationserlaubnis getrennt behandeln.
