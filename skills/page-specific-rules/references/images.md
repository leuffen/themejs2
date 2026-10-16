# Bildregeln für alle Markdown-Seiten

Gilt für **jede** Markdown-Datei unter `docs/` und die daraus
installierten Vorlagen aus `_tpl/`, insbesondere Startseite,
Leistungs- und Teamseiten. Vor Anpassungen den Projektkontext und
den [Katalog für generische Bilder](generic-image-catalog.md) lesen.

## Personenbilder strikt belegen

Ein Porträt eines Arztes, einer Ärztin oder eines Mitarbeiters sowie
ein tatsächliches Teamfoto darf **nur dann** als Darstellung dieser
konkreten Person bzw. dieses konkreten Teams verwendet werden,
wenn der Projektkontext das Bild **ausdrücklich** mit der Person
bzw. dem Team verknüpft und den Namen in der zugehörigen
Bildbeschreibung bzw. dem Alt-Attribut ausdrücklich nennt.
Ein Name im Text, die Anzahl der Ärzte oder ein beliebiges
Stockfoto ist **kein** Nachweis. Keine fremden Stockpersonen als
reale Praxisangehörige ausgeben.

Fehlt diese ausdrückliche Bildzuordnung, ein sachlich passendes,
**nicht personenbezogenes** Platzhalter-/Symbol- oder generisches
medizinisches Motiv aus dem Projektkontext beziehungsweise dem
freigegebenen Katalog wählen. Keine echten Porträts oder erkennbaren
Teamfotos als generischen Ersatz einsetzen. Neutrale Alt-Texte
ohne erfundene Namen verwenden. Keine externen Bildadressen
oder Dateipfade erfinden.

## Praxis- und leistungsbezogene Bildauswahl auf allen Seiten

Prüfe bei jeder Website-Anpassung **sämtliche vorhandenen Bildpositionen
auf allen Seiten** (insbesondere Hero-/Titelbilder, Leistungsbilder,
allgemeine Anschauungsbilder, Team-/Profilbilder und Testimonials).
Erschließe die bisherige Bildfunktion aus Alt-Text, Dateiname,
Seiteninhalt und Position im Layout. Wähle dann anhand der im
Projektkontext belegten Praxisart, Fachrichtung und konkreten Leistungen
ein inhaltlich passendes Ersatzmotiv. Bevorzuge stets geeignete,
praxisindividuelle Bilder aus dem Projektkontext vor generischen Motiven.
Sind dort keine passenden individuellen Motive vorhanden, verwende
freigegebene fachrichtungs- beziehungsweise leistungsspezifische Bilder
aus dem Kontext oder dem kuratierten Bildkatalog. Ein Motiv darf nicht
allein wegen ähnlicher Optik eingesetzt werden, wenn es eine andere
Fachrichtung oder Leistung suggeriert. Tausche unpassende Template- und
Demo-Motive an bestehenden Bildpositionen soweit möglich aus und erhalte
dabei Bildfunktion, Seitenstruktur und geeignete Seitenverhältnisse.
Fehlt eine verifizierbare passende Referenz, erfinde keinen Pfad und
dokumentiere die offene Bildposition.

## Porträtformate nach Seitenfunktion

Für Personenbilder gelten weiterhin die strikten Zuordnungs- und
Platzhalterregeln oben. Wo ein Bild eine konkrete Person oder ein
konkretes Team darstellen soll, aber keine ausdrücklich belegte
Bildzuordnung existiert, verwende die bereits vorhandenen,
freigegebenen Personenplatzhalter statt fremder Stockporträts. In
Testimonial-Sections bevorzuge bei geeigneten und zulässigen
Porträtbildern quadratische Varianten, insbesondere Dateien mit
`1x1` im Dateinamen. Auf Über-uns-, Team- und Arztprofilseiten
bevorzuge dagegen die normalen zugeordneten Profil- beziehungsweise
Porträtaufnahmen; quadratische Testimonial-Crops sind dort nicht die
Standardwahl. Formate nie über die verifizierte Personenidentität oder
die Eignung des Bildmotivs stellen.

## Identische Themen, identische Bildreferenz

Bevor Bilder bearbeitet werden, gleiche den vorhandenen Bildbestand
der Startseite und aller thematisch passenden Unterseiten ab.
Für denselben Leistungsbereich, etwa IGeL-Leistungen, **nach
Möglichkeit dieselbe konkrete Bild-URL/-Referenz** auf Start- und
Leistungsseite verwenden, sofern Motiv, Kontext und Format passen.
Eine bestehende konsistente Zuordnung beibehalten, nicht bei jedem
AI-Adjust-Lauf neu mischen. Die Zuordnung in der Bildliste des
Projektkontexts pflegen, damit sie auch für weitere Dateien gilt.
Abweichungen nur begründet, z. B. bei ungeeignetem Bildformat.

## Bestandsschutz und Vorlagen

Nur ausdrücklich erlaubte Bildreferenzen an **vorhandenen**
Bildpositionen austauschen. Bestehende Sections, Testimonials,
Image-Slots, Liquid, Markdown, HTML und Layouts vollständig erhalten.
Ein Bildwechsel berechtigt nicht zu neuen HTML-Elementen,
Team-Grids oder neuen Sections.

In `_tpl/` enthaltene echte oder scheinbar echte
Arztporträts und Teamfotos sind beim gezielten Vorlagenabgleich
durch freigegebene **unpersönliche generische Motive** zu ersetzen,
ohne die Section oder deren Struktur zu ändern. Wenn keine
passende, verifizierte generische Bildreferenz vorliegt, den
Bildwechsel **nicht erfinden**; die Fundstelle dokumentieren
und bis zur Lieferung des Bildkatalogs offen lassen.
