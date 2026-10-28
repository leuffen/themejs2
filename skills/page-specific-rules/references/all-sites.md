# Allgemeine Inhaltsregeln für alle Seiten

Diese Reference gilt als **Fallback für jede Website-Seite** unter `docs/` sowie für installierte Seiten und die entsprechenden `_tpl/`-Vorlagen. Vor jeder Anpassung zusätzlich passende seitenspezifische References laden. **Spezifische Regeln haben Vorrang, wenn sie ausdrücklich abweichen** (insbesondere bei Impressum und Datenschutz); für alle übrigen Punkte gelten diese allgemeinen Regeln weiter. Reine Konfigurations- und Datendateien sind keine Website-Seiten.

## Inhalte anpassen, Sections erhalten

Bei Übernahme, Kontextwechsel oder redaktioneller Anpassung bestehender Seiten sämtliche sichtbaren Texte, Überschrifteninhalte und bereits vorhandene Beschreibungen auf die tatsächlichen, belegten Daten und den konkreten Seitenzweck abstimmen. **Keine vorhandene Section entfernen, verschieben, hinzufügen oder umstrukturieren** und keine zusätzlichen Elemente, Bilder, Akkordeons oder Überschriften erzeugen. Reihenfolge und Hierarchie der Sections, Markdown-/HTML-Struktur, Kramdown-Attribute `{: ... }`, `#[...]`-Shortcuts, Liquid, Styles, Layouts, Formulare und Front Matter unverändert lassen. Nur ausdrücklich beauftragte oder in einer spezielleren Seitentyp-Reference konkret erlaubte Strukturausnahmen sind zulässig.

**Beispiel Stellenanzeige:** Wird eine vorhandene Jobseite auf eine andere Stelle angepasst, die bestehende Gliederung beibehalten. Stellentitel, Einleitung, Aufgaben, Anforderungen, angebotene Leistungen und allgemeine Arbeitgebertexte innerhalb der bestehenden Blöcke auf die neue, belegte Stelle umformulieren. Weder eine zusätzliche Stellen-Section noch einen neuen Bewerbungsbereich anlegen und keine bestehende Section löschen, nur weil sie inhaltlich angepasst werden muss. Wo der neue Inhalt mit der geschützten Struktur unvereinbar ist, den Konflikt melden statt die Struktur umzubauen. Keine Arbeitsbedingungen, Qualifikationen oder Benefits erfinden.

## Zentrale Stammdaten nicht unnötig wiederholen

Praxis-/Unternehmensname, Anschrift, Telefonnummer, E-Mail, Öffnungszeiten und ähnliche globale Daten werden üblicherweise bereits über Layout, Header, Footer oder zentrale Website-Daten dargestellt. Sie **nicht erneut in einzelnen Seiten ergänzen**, sofern dies nicht ausdrücklich gewünscht ist oder eine spezifische Seitenregel die Angabe verlangt. Vorhandene Pflicht- und Kontaktinhalte, insbesondere auf Kontakt- und Rechtsseiten, bleiben erhalten; dort ausschließlich verifizierte Angaben verwenden. Eine fehlende Wiederholung globaler Daten ist kein Anlass für eine neue Section.

## Keine ungefragten Handlungsaufforderungen

**Keine neuen Buttons, Terminvereinbarungs-CTAs, Kontaktblöcke, Buchungslinks oder andere Handlungsaufforderungen** einfügen, sofern sie nicht ausdrücklich verlangt oder durch eine konkretere Seitentyp-Reference ausdrücklich zugelassen sind. Dies gilt auch bei neu generierten Seiten; eine allgemeine CTA-Empfehlung aus `edit-site` ist keine solche ausdrückliche Freigabe. Vorhandene Buttons und CTA-Sections beim reinen Textupdate strukturell erhalten und nur belegte, zum Inhalt passende Texte bzw. ausdrücklich freigegebene Linkziele anpassen. Bei einem unpassenden bestehenden Link dessen Klärung melden, statt ein Ziel zu erfinden.

## Redaktionelle Endprüfung

Überschrift, Kicker und direkten Folgetext auf Wiederholungen prüfen; `data-kicker` dient nur als visuelle Vorzeile, nicht als SEO-Träger. Aussagen sachlich, fachlich passend und ohne erfundene Leistungen oder Versprechen formulieren. Für vorhandene Bildpositionen zusätzlich `images.md` beachten; nicht belegte Porträts und doppelte echte Bildmotive vermeiden. Abschließend Ausgangsdatei gegen Ergebnis prüfen: Außer den erlaubten sichtbaren Text- und Datenwerten darf sich keine geschützte Struktur geändert haben.
