---
layout: website
body_class: theme-osman
title: Osman – Elementübersicht
description: "Elemente und Kompositionen aller OSMan-Unterseiten zur visuellen Kontrolle."
use_navbar: osman
use_footer: osman
ptags:
  - arzt
  - subnav
pid: site
---

<!-- Das Inventar hält die geprüften Seiten und die Zuordnung zu den sichtbaren Beispielen fest. -->
## OSMan: Elemente der Unterseiten
{: #osman-inventar layout="ntl-2col" section-style="--cols: 12;" }

[Aktuelle Startseite]({{ '/pages/theme-osman/osman-start.html' | relative_url }}) · [Default-Elemente und Typografie]({{ '/pages/theme-osman/osman-default.html' | relative_url }})

Die Startseite zeigt Hero, Öffnungszeiten-Tabelle, Meldungen, Aktionskarten, Leistungskarten mit Akkordeons, Warnbereich, Kooperationen und Mitgliedschaften. Die folgenden Sections ergänzen die auf den übrigen Seiten verwendeten Kompositionen. Kundenlinks führen zur OSMan-Website; das Kontaktformular ist eine lokale Vorschau ohne Versand.

**Prüfung:** Desktop und Mobil vergleichen, lange Überschriften und Spaltenwechsel kontrollieren, Akkordeons öffnen und schließen, Galerien bedienen sowie Formularfelder und Kartenfreigabe mit Maus und Tastatur prüfen. Navbar und Footer werden über die vorhandene OSMan-Variante des Theme-Beispiels angezeigt.

**Quellenstand:** `dermatthes/leu-web-osman2@8441247e38e9dda403b42a41f45446b48bd7dd07`. Alle 17 HTML-/Markdown-Seiten unter `docs/` sowie der vCard-Export wurden erfasst; Includes und Layouts wurden für die zusätzlich erzeugten Elemente berücksichtigt.

| Quellseite unter `docs/` | Elemente | Prüfabschnitt |
| --- | --- | --- |
| `index.md` | Hero, Ribbon-/Leistungskarten, Meldungen, Notfall, Logos | [Startseite]({{ '/pages/theme-osman/osman-start.html' | relative_url }}) |
| `leistungen/index.md` | Navigationskarten ohne Bild | [Übersichtskarten]({{ page.url | relative_url }}#osman-karten) |
| `leistungen/diagnostik.md` | Galerie, Reverse, Top-Ausrichtung, lange Texte | [Galerie]({{ page.url | relative_url }}#osman-galerie) · [Reverse-Galerie]({{ page.url | relative_url }}#osman-galerie-reverse) |
| `leistungen/therapien.md` | Video in Aside und lange Akkordeons | [Video und Akkordeon]({{ page.url | relative_url }}#osman-video) |
| `ueber-uns/index.md` | Übersichtskarten mit Bild, Diamantliste | [Übersichtskarten]({{ page.url | relative_url }}#osman-karten) |
| `ueber-uns/praxis.md` | Bild/Text, Reverse und hervorgehobene Angaben | [Barrierefreiheit]({{ page.url | relative_url }}#osman-praxis) |
| `ueber-uns/team.md` | Porträt mit Kicker, Logos im Bottom-Slot | [Porträt]({{ page.url | relative_url }}#osman-portraet) · [Logo-Raster]({{ page.url | relative_url }}#osman-logos) |
| `ressourcen/index.md` | Karten mit Vorschautext und Bild | [Übersichtskarten]({{ page.url | relative_url }}#osman-karten) |
| `ressourcen/altersbedingte-makuladegeneration.md` | Kicker, Reverse, lange Fachtexte | [Artikel]({{ page.url | relative_url }}#osman-artikel) |
| `ressourcen/diabetes-mellitus.md` | Listen mit hervorgehobenen Einleitungen, CTA | [Artikelliste]({{ page.url | relative_url }}#osman-artikelliste) |
| `kontakt/index.md` | Adressblock mit Telefon, Fax und E-Mail | [Kontakt und Karte]({{ page.url | relative_url }}#osman-anfahrt) |
| `kontakt/anfahrt.md` | Consent-Blocker im Top-Slot, Aside-Text | [Kontakt und Karte]({{ page.url | relative_url }}#osman-anfahrt) |
| `kontakt/schreiben-sie-uns.md` | Kontaktlinks, Eingaben, Textarea, Checkbox, Formularfooter | [Kontakt]({{ page.url | relative_url }}#osman-kontakt) · [Formular]({{ page.url | relative_url }}#osman-formular) |
| `pages/bewerten.md` | Großer externer CTA | [Bewertung]({{ page.url | relative_url }}#osman-bewertung) |
| `legal/datenschutz.md` | Textüberschriften, Adresszeilen, lange Links | [Rechtstext-Muster]({{ page.url | relative_url }}#osman-rechtstext) |
| `legal/impressum.md` | H3, Zeilenumbrüche, Diamantliste, externe Links | [Impressum-Muster]({{ page.url | relative_url }}#osman-impressum) |
| `404.html` | Zentrierte Fehlermeldung, Lead, großer Icon-Button | [Fehlerseite]({{ page.url | relative_url }}#osman-fehler) |
| `vcard..html` | vCard-Download; kein HTML-Seitenlayout | [Kontaktdatei](https://www.augenarzt-osman.de/praxis.vcf) |

<!-- Repräsentiert die Ausgabe von components/navigation/section-cards.html mit und ohne Vorschaubild. -->
## Übersichtskarten
{: #osman-karten layout="ntl-card-row" section-style="--cols: 4;" }

### Diagnostik

Moderne Untersuchungsverfahren helfen uns, Ursachen frühzeitig zu erkennen und Behandlungen präzise zu planen.

[Diagnostik](https://www.augenarzt-osman.de/leistungen/diagnostik.html){: .link }
{: .footer }

### Praxis

![Praxis](https://cdn.leuffen.de//osman-k21/v2/18/c_gfedcba/DSC06603.webp)

Lernen Sie unsere Augenpraxis in Wiesbaden kennen – gut erreichbar, modern ausgestattet und auf persönliche Betreuung ausgerichtet.

[Praxis](https://www.augenarzt-osman.de/ueber-uns/praxis.html){: .link }
{: .footer }

### Altersbedingte Makuladegeneration

![Altersbedingte Makuladegeneration](https://cdn.leuffen.de//osman-k21/v2/43/246-217_cba/AMD2.webp)

Erfahren Sie mehr über Symptome, Diagnostik und Behandlung der altersbedingten Makuladegeneration.

[Altersbedingte Makuladegeneration](https://www.augenarzt-osman.de/ressourcen/altersbedingte-makuladegeneration.html){: .link }
{: .footer }


<!-- Prüft die Originalkomposition aus docs/leistungen/diagnostik.md; Texte und Layout-Modifier bleiben erhalten. -->

## Untersuchung bei Sehminderung oder Sehstörung
{: #osman-galerie layout="ntl-2col.style-default.with-justify-top"}

Um die Sehkraft zu erhalten oder wiederherzustellen, ist es ratsam, auftretende Sehminderungen oder Sehstörungen von einem Facharzt abklären zu lassen. Die Ursachen können dabei sowohl innerhalb des Auges liegen als auch neurologischer Natur sein. Zu Beginn steht eine gründliche Anamnese durch einen Augenarzt, bei der der Patient seine auftretenden Beschwerden und deren Verlauf detailliert beschreibt. Dies kann möglicherweise bereits erste Hinweise auf die potenzielle Ursache liefern.

Anschließend erfolgt eine genaue Refraktionsbestimmung, um festzustellen, ob eine vorliegende Fehlsichtigkeit die Sehminderung verursacht. Danach wird die Sehfunktion und die verschiedenen Augenabschnitte untersucht. In unserer [Augenpraxis Osman](https://www.augenarzt-osman.de/) kommen hierbei modernste Techniken wie die OCT (Optische Kohärenztomographie) und die Angiographie zum Einsatz.

Diese diagnostischen Verfahren ermöglichen es uns, hochauflösende Bilder der Netzhaut und ihrer Blutgefäße zu erstellen, um Anomalien oder Schäden zu erkennen. Basierend auf der Kombination dieser diagnostischen Verfahren können die potenziellen Ursachen für die Sehprobleme identifiziert und entsprechende [Therapien](https://www.augenarzt-osman.de/leistungen/therapien.html) eingeleitet werden.


![Gerät zur modernen Augendiagnostik](https://cdn.leuffen.de//leu-stock/v2/80/77-51_gfedcba/AdobeStock_386634192_Editorial_Use_Only.webp)
![Augenuntersuchung in der Augenpraxis Osman](https://cdn.leuffen.de//osman-k21/v2/15/c_gfedcba/DSC05900.webp)
![Fachärztliche Augenuntersuchung](https://cdn.leuffen.de//leu-stock/v2/79/95-71_gfedcba/AdobeStock_284428528.webp)
{: layout="nte-image" .aside }

<!-- Prüft die Originalkomposition aus docs/leistungen/diagnostik.md; Texte und Layout-Modifier bleiben erhalten. -->

## Glaukom (Grüner Star)
{: #osman-galerie-reverse layout="ntl-2col.style-default.reverse.with-justify-top"}

Das Glaukom, umgangssprachlich auch Grüner Star genannt, ist eine Augenerkrankung, die den Sehnerv schädigen und unbehandelt zu einem permanenten Verlust des Sehvermögens führen kann. Es gehört zu den weltweit häufigsten Ursachen für irreversible Blindheit. Ein Glaukom tritt auf, wenn der Druck im Inneren des Auges (Intraokulardruck) über einen längeren Zeitraum erhöht bleibt und dadurch den Sehnerv und die Nervenfasern in der Netzhaut schädigen kann.

Es existieren verschiedene Formen von Glaukom, wobei das Offenwinkelglaukom die am häufigsten vorkommende ist. Die Schädigung des Sehnervs aufgrund des erhöhten Augeninnendrucks verläuft oft schmerzlos und schreitet in der Regel langsam voran. Eine rechtzeitige Diagnose und Behandlung können diese schwerwiegenden Folgen verhindern oder zumindest verlangsamen. Je früher das Glaukom erkannt wird, desto besser sind die Chancen, das Sehvermögen zu erhalten.

Es ist wichtig zu betonen, dass ein normaler Augeninnendruck allein nicht ausschließt, dass ein Patient an einem Glaukom erkrankt ist. Für eine umfassende Beurteilung und Diagnose des Glaukoms sowie die Festlegung geeigneter Behandlungsmaßnahmen sind in der Regel verschiedene diagnostische Tests erforderlich. Dazu gehören in unserer Augenpraxis die Messung des Augeninnendrucks, die Gesichtsfelduntersuchung, die Hornhautdickenmessung, die Gonioskopie, die OCT der Papille und die HRT.

![Untersuchung zur Glaukomdiagnostik](https://cdn.leuffen.de//leu-stock/v2/45/b_gfedcba/eye-doctor-in-face-mask-eye-level-with-his-patient-2022-11-12-10-44-32-utc.webp)
![Gerät zur Glaukomdiagnostik](https://cdn.leuffen.de///osman-k21/v2/22/127-91_cba/Glaukom-Heidelberg.webp)
{: layout="nte-image" .aside }

<!-- Prüft die Originalkomposition aus docs/leistungen/therapien.md; Texte und Layout-Modifier bleiben erhalten. -->

## Therapie bei Netzhauterkrankungen & Netzhautdegeneration
{: #osman-video layout="ntl-2col.style-default.with-justify-top"}

Regelmäßige Kontrolltermine zur Überprüfung der Netzhaut sind besonders für Patienten mit Diabetes oder Kurzsichtigkeit empfehlenswert, da Netzhautschädigungen oft lange Zeit unbemerkt bleiben können und eine frühzeitige Erkennung der Schädigungen den Therapieerfolg maßgeblich beeinflusst. Spezielle Augentropfen bewirken eine Pupillenerweiterung, um eine präzise Netzhautüberprüfung durch das augenärztliche Fachpersonal zu ermöglichen.

Zusätzliche Einblicke in die Schichten der normalerweise transparenten Netzhaut werden mithilfe der optischen Kohärenztomographie (OCT) gewonnen. Dies erleichtert die Diagnose und Früherkennung von Veränderungen und Erkrankungen. In unserer auf Makula- und Netzhauterkrankungen spezialisierten Augenpraxis in Wiesbaden bieten wir verschiedene Therapiemöglichkeiten an:

<div class="service-video aside">
  <iframe src="https://www.youtube-nocookie.com/embed/xmEvZxYFVVc?si=wR_w6qB7DQcLB8cf" title="Video zur Laserretinopexie" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

---
{: layout="nte-accordion.style-default"}

#### Laserretinopexie bei Netzhautdegeneration, Netzhautrissen und Netzhautforamina (Netzhautlöchern)

Die Laserretinopexie ist ein bewährtes Verfahren zur Behandlung von Netzhautdegeneration, Netzhautrissen und Netzhautforamina (Netzhautlöchern). Dabei wird ein gebündelter Laserstrahl gezielt auf betroffene Netzhautbereiche gerichtet. Dies ermöglicht die Versiegelung der Defekte, um Blutungen zu stoppen und Ablagerungen zu behandeln. Die Lasertherapie kann so dazu beitragen, das Fortschreiten der Erkrankung zu verlangsamen und das Sehvermögen zu erhalten oder zu verbessern.

Der Anwendungsgrad und die erforderliche Anzahl der Sitzungen variieren je nach Schwere der Erkrankung und individuellem Gesundheitszustand.

#### Anti-VEGF intravitreale Injektionen bei Netzhauterkrankungen

Anti-VEGF intravitreale Injektionen können bei Netzhauterkrankungen wie AMD und diabetischer Retinopathie eingesetzt werden (siehe dazu auch: [Anti-VEGF intravitreale Injektionen bei Makulaerkrankungen](https://www.augenarzt-osman.de/leistungen/therapien.html#anti-vegf-intravitreale-injektionen-bei-makulaerkrankungen)). Sie werden direkt in den Glaskörper des Auges injiziert, um den vaskulären endothelialen Wachstumsfaktor (VEGF) zu blockieren, welcher für die übermäßige Bildung schädlicher Blutgefäße in der Netzhaut verantwortlich ist.

Die Injektionen können das Fortschreiten der Erkrankung verlangsamen und das Sehvermögen erhalten. Wiederholte Injektionen sind oft notwendig.

#### Intravitrealen Implantate bei Netzhauterkrankungen

Intravitreale Implantate werden bei Erkrankungen wie feuchter altersbedingter Makuladegeneration (AMD) oder diabetischer Retinopathie eingesetzt. Hierbei werden winzige Implantate direkt in den Glaskörper des Auges eingebracht. Dadurch erfolgt eine langanhaltende und kontrollierte Freisetzung von Arzneimitteln, um die Krankheit zu behandeln oder ihr Fortschreiten zu verlangsamen.

Die Behandlung sollte regelmäßig vom Augenarzt überwacht werden, um gegebenenfalls Anpassungen am Therapieplan vornehmen zu können und den allgemeinen Therapieerfolg zu kontrollieren. (siehe dazu auch: [Intravitrealen Implantate bei Makulaerkrankungen](https://www.augenarzt-osman.de/leistungen/therapien.html#intravitreale-implantate-bei-makulaerkrankungen) )

<!-- Prüft die Originalkomposition aus docs/ueber-uns/praxis.md; Texte und Layout-Modifier bleiben erhalten. -->

## Gut erreichbar und barrierefrei
{: #osman-praxis layout="ntl-2col.style-default.reverse"}

Die Buslinien **6, 16, 3, 33, 28, 22 und N10** halten in unmittelbarer Nähe an der Haltestelle Landesbibliothek. Parkmöglichkeiten finden Sie in den nahegelegenen Parkhäusern **Luisenplatz**, **Luisenforum** und **Rhein Main Congress Center**.

Der Zugang zur Praxis ist über einen Aufzug **barrierefrei** möglich.

![](https://cdn.leuffen.de//osman-k21/v2/16/c_gfedcba/DSC05957.webp)

<!-- Prüft die Originalkomposition aus docs/ueber-uns/team.md; Texte und Layout-Modifier bleiben erhalten. -->

## Bassel Osman
{: #osman-portraet layout="ntl-2col.style-default" data-kicker="Facharzt für Augenheilkunde"}

Nach erfolgreichem Abschluss seines Medizinstudiums absolvierte Bassel Osman eine Weiterbildung in Chirurgie am Beirut Medical Center der Amerikanischen Universität (AUB-MC), Libanon. Daran schloss sich eine Weiterbildung an der Augenklinik des Universitätsklinikums Gießen und Marburg an, die das gesamte Spektrum der Augenheilkunde umfasste – insbesondere die Diagnostik und Therapie von Makula- und Netzhauterkrankungen sowie verschiedene Laserbehandlungen.

Es folgten Stationen als operierender Facharzt für Augenheilkunde in mehreren Augenpraxen in Niedersachsen. Seine umfangreiche Weiterbildung und langjährige Erfahrung ermöglichen eine moderne, persönliche und verlässliche Betreuung.

![](https://cdn.leuffen.de//osman-k21/v2/13/c_gfedcba/DSC05780.webp)

<!-- Prüft die Originalkomposition aus docs/ueber-uns/team.md; Texte und Layout-Modifier bleiben erhalten. -->

## Mitgliedschaften und Weiterbildung
{: #osman-logos layout="ntl-2col.style-default.reverse"}

Bassel Osman ist Mitglied in verschiedenen renommierten Fachgesellschaften und legt großen Wert auf regelmäßige Weiterbildung, um Patientinnen und Patienten jederzeit moderne Diagnostik und Behandlung auf aktuellem fachlichem Stand anbieten zu können.

- Euretina
- Bundesverband Deutscher Ophthalmochirurgen (BDOC)
- Berufsverband der Augenärzte Deutschlands (BVA)
- Deutsche Ophthalmologische Gesellschaft (DOG)
- Retinologische Gesellschaft
- European Society of Cataract and Refractive Surgeons (ESCRS)
{: .list .list-diamond }

![Bundesverband Deutscher Ophthalmochirurgen (BDOC)](https://cdn.leuffen.de//osman-k21/v2/63/57-13_a/01Bundesverband-Deutscher-Ophthalmochirurgen-BDOC.webp)
![Euretina](https://cdn.leuffen.de//osman-k21/v2/62/144-73_cba/02Euretina.webp)
![Berufsverband der Augenärzte Deutschlands (BVA)](https://cdn.leuffen.de//osman-k21/v2/61/128-41_edcba/03Berufsverband-der-Augenaerzte-Deutschlands-BVA.webp)
![Deutsche Retinologische Gesellschaft](https://cdn.leuffen.de//osman-k21/v2/60/374-133_cba/04Deutche-Retinologische-Gesellschaft.webp)
![Deutsche Ophthalmologische Gesellschaft (DOG)](https://cdn.leuffen.de//osman-k21/v2/59/64-33_dcba/05Deutsche-Ophthalmologische-Gesellschaft-DOG.webp)
![European Society of Cataract and Refractive Surgeons (ESCRS)](https://cdn.leuffen.de//osman-k21/v2/58/337-202_cba/06European-Society-of-Cataract-and-Refractive-Surgeons-ESCRS.webp)
{: .icon-grid style="--icon-grid-cell-min: 10rem; --icon-grid-item-max-width: 11rem;" slot="bottom"}

<!-- Prüft die Originalkomposition aus docs/ressourcen/altersbedingte-makuladegeneration.md; Texte und Layout-Modifier bleiben erhalten. -->

## Worauf Sie achten sollten?
{: #osman-artikel layout="ntl-2col.style-default.reverse" data-kicker="Zwei Gesichter der Makuladegeneration"}

Es wird zwischen zwei Formen der Makuladegeneration unterschieden:

- Trockene Makuladegeneration
- Feuchte Makuladegeneration
{: .list .list-diamond }

**Trockene Makuladegeneration**

Die trockene Makuladegeneration schreitet in der Regel langsam voran und führt zu einer allmählichen Verschlechterung des Sehens. Diese Sehminderung entsteht durch Ablagerungen in der Netzhaut, sogenannte Drusen, die die Versorgung der Netzhaut mit Nährstoffen beeinträchtigen. Da die Sehzellen der Makula besonders stoffwechselaktiv sind, beginnt der Zellverlust oft in diesem Bereich. Zu Beginn der Erkrankung ist der Verlust noch nicht direkt spürbar.
Erste Symptome der trockenen AMD werden häufig beim Lesen bemerkt, etwa durch Unschärfe, Verzerrung gerader Linien oder das Wahrnehmen grauer Schatten. Diese Symptome verschlimmern sich mit der Zeit und können schließlich zum Verlust des zentralen Sehens führen. Regelmäßige Kontrollen sind wichtig, da die trockene AMD in eine feuchte Form übergehen kann, bei der eine frühzeitige Therapie entscheidend ist.

**Feuchte Makuladegeneration**

Bei Sauerstoffmangel in der Netzhaut, der durch die genannten Risikofaktoren bedingt ist, wird der Wachstumfaktor VEGF freigesetzt, um neue aber undichte Gefäße zu bilden, wodurch die Netzhaut versucht, dieses Defizit durch die Bildung neuer Blutgefäße zu kompensieren. Diese neu gebildeten Gefäße sind jedoch minder entwickelt und porös, was dazu führt, dass Flüssigkeit oder Blut aus den Gefäßen in die Netzhaut tritt. Dies führt zu einem sogenannten Makulaödem, das sich durch verzerrtes und welliges Sehen bemerkbar macht.

![](https://cdn.leuffen.de//osman-k21/v2/49/29-39_ba/AMD12.webp)

<!-- Prüft die Originalkomposition aus docs/ressourcen/diabetes-mellitus.md; Texte und Layout-Modifier bleiben erhalten. -->

## Behandlungsmöglichkeiten
{: #osman-artikelliste layout="ntl-2col.style-default.reverse" data-kicker="Lasertherapie und intravitreale Injektionen"}

Sind bereits fortgeschrittene diabetische Veränderungen an der Netzhaut aufgetreten, ist eine dringende augenärztliche Behandlung erforderlich. Diese kann beispielsweise Lasertherapien oder intravitreale Injektionen umfassen.

- **Lasertherapie**: Durch gezielte Laseranwendungen können abnorme Blutgefäße verödet werden, was das Fortschreiten der diabetischen Retinopathie verlangsamt und das Risiko eines Sehverlusts verringert.
- **Intravitreale Injektionen (IVOM)**: Diese moderne Therapieoption wird zur Behandlung des diabetischen Makulaödems eingesetzt. Dabei wird ein Medikament direkt in den Glaskörper des Auges injiziert. Die IVOM-Therapie wird in der Regel in mehreren Sitzungen durchgeführt, abhängig von der Schwere des Makulaödems und der individuellen Reaktion des Patienten auf die Behandlung.
{: .list .list-diamond }

Regelmäßige Nachuntersuchungen sind wichtig, um den Verlauf der Erkrankung zu überwachen und gegebenenfalls Anpassungen in der Therapie vorzunehmen.

[Termin vereinbaren](https://www.augenarzt-osman.de/kontakt/){: .btn .btn-primary }

<!-- Prüft die Originalkomposition aus docs/kontakt/anfahrt.md; Texte und Layout-Modifier bleiben erhalten. -->

## Hier finden Sie uns
{: #osman-anfahrt layout="ntl-2col.style-default" data-kicker="Kontakt & Anfahrt"}


<!-- Lädt die Karte erst nach Zustimmung und verwendet ein eigenes, kollisionsfreies Demo-Template. -->
<template id="osman-demo-map-template"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.4509365261574!2d8.234400876779077!3d50.07784361412184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbddfeafd235f%3A0xe3f7b92f3f028056!2sRheinstra%C3%9Fe%2059%2C%2065185%20Wiesbaden!5e0!3m2!1sde!2sde!4v1691521076122!5m2!1sde!2sde" title="Karte zur Augenpraxis Osman" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></template>

<nte-consent-blocker class="google-maps-consent" slot="top" style="--default-template-selector: #osman-demo-map-template;"></nte-consent-blocker>

<!-- Statische Ausgabe des Address-Includes mit den Standortdaten des Quellcommits. -->
<p>Augenpraxis Osman<br>
Rheinstr. 59<br>
65185 Wiesbaden<br><br>
<span>Telefon:</span> <b><a href="tel:+49611303048" title="Telefon" class="text-decoration-none">(0611) 30 30 48</a></b><br>
<span>Telefax:</span> <b>(0611) 16 66 690</b><br>
<span>E-Mail:</span> <a href="mailto:info@augenarzt-osman.de" title="E-Mail" class="text-decoration-none">info@augenarzt-osman.de</a><br></p>

Der Zugang zur Praxis ist über unseren Aufzug **barrierefrei** möglich.

---
{: layout=".aside" }


Sie erreichen uns mit den **Buslinien 6, 16, 3, 33, 28, 22 und N10** (Haltestelle Landesbibliothek).

**Parkhäuser in der Nähe:**
- Luisenplatz
- Luisenforum
- Rhein Main Congress Center
{: .list .list-diamond }

<!-- Zeigt das vollständige Kontaktformular einschließlich Footer; der abbrechbare Submit bleibt lokal. -->

## Schreiben Sie uns. Wir melden uns umgehend bei Ihnen.
{: #osman-kontakt layout="ntl-2col.style-default"}

Für Rückfragen und Terminwünsche sind wir gerne für Sie da. Nutzen Sie die für Sie passende Kontaktmöglichkeit.

- **Telefon:** [(0611) 30 30 48](tel:+49611303048)
- **E-Mail:** bitte nutzen Sie untenstehendes Kontaktformular.
- **Online-Terminvergabe:** schnell und bequem über unsere Praxisseite
{: .list .list-diamond }

[Termin online buchen](https://termine.augenarzt-osman.de/appointment/search){: .btn .btn-primary target="_blank" rel="noopener"}


---
{: layout="2;tj-form#osman-demo-form" }

## Schreiben Sie uns
{: #osman-formular layout="2.1;ntl-2col.style-default.with-justify-top" .top }

#[nte-input.style-default.hoverlabel type="text" name="name" label="Name" required]
#[nte-input.style-default.hoverlabel type="email" name="email" label="E-Mail" required]
#[nte-input.style-default.hoverlabel type="text" name="telefon" label="Telefon"]

---
{: layout=".aside" }

#[nte-input.style-default.hoverlabel type="textarea" name="nachricht" label="Nachricht" required]
#[nte-input.style-default type="checkbox" name="datenschutz" label="Ich akzeptiere die Datenschutzerklärung" required]
#[button type="submit" class="btn btn-primary" > Absenden]

---
{: layout=".footer.small"}

Bitte senden Sie uns per E-Mail keine medizinischen Notfälle. In dringenden Fällen kontaktieren Sie uns bitte telefonisch oder wenden Sie sich außerhalb der Sprechzeiten an den augenärztlichen Bereitschaftsdienst.

Wenn Sie uns schreiben, melden wir uns schnellstmöglich bei Ihnen zurück.

<!-- Verhindert ausschließlich für dieses Demoformular den global registrierten Formmailer-Aufruf. -->
<script>
document.addEventListener('tj-form-submit', function (event) {
  if (event.target.id !== 'osman-demo-form') return;
  event.preventDefault();
  document.getElementById('osman-demo-form-status').textContent = 'Demo geprüft – es wurde keine Nachricht versendet.';
}, true);
</script>
<p id="osman-demo-form-status" role="status">Formularvorschau – kein Nachrichtenversand.</p>


<!-- Prüft die Originalkomposition aus docs/pages/bewerten.md; Texte und Layout-Modifier bleiben erhalten. -->

## Online bewerten
{: #osman-bewertung layout="ntl-2col.style-default"}

Ihre Meinung ist uns wichtig. Wenn Sie mit unserem Service zufrieden waren, freuen wir uns sehr über eine Bewertung bei Google. Ihre Rückmeldung hilft auch anderen Patientinnen und Patienten bei der Orientierung.

![](https://cdn.leuffen.de//leu-stock/v2/260/134-87_gfedcba/AdobeStock_860408697.webp)

[Jetzt bei Google bewerten](https://g.page/r/CYxj2x5Bp8TsEBM/review){: .btn .btn-primary .btn-lg target="_blank" rel="noopener"}

<!-- Prüft die Typografie der Legal-Seiten; die Auszüge sind keine Datenschutzerklärung dieser Demo. -->
## Rechtstext-Muster: Datenschutz
{: #osman-rechtstext layout="ntl-2col" section-style="--cols: 12;" }

Darstellungsprobe aus der Datenschutzseite: Adresszeilen, Unterüberschrift und langer externer Link.

### Fragen?

Augenpraxis Osman  
Rheinstraße 59  
65185 Wiesbaden  
E-Mail: [info@augenarzt-osman.de](mailto:info@augenarzt-osman.de)

### Analyse-Tools und Plugins

Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:  
[https://www.google.de/intl/de/policies/privacy/](https://www.google.de/intl/de/policies/privacy/)

<!-- Erhält die Überschriftenhierarchie und Zeilenumbrüche der Impressum-Inhalte im Theme-Content-Flow. -->
## Rechtstext-Muster: Impressum
{: #osman-impressum layout="ntl-2col" section-style="--cols: 12;" }

### Gesetzliche Berufsbezeichnung

Bassel Osman  
Facharzt für Augenheilkunde  
Erwerb der Approbation im Jahr 2014 in Dresden  
Facharztanerkennung für Augenheilkunde im Jahr 2021 in Hannover

### Zuständige Kammer

Landesärztekammer Hessen  
Hanauer Landstraße 152  
60314 Frankfurt am Main  
[https://www.laekh.de/](https://www.laekh.de/)

### Zuständige Kassenärztliche Vereinigung

Kassenärztliche Vereinigung Hessen  
Europa-Allee 90  
60486 Frankfurt am Main  
[https://www.kvhessen.de/](https://www.kvhessen.de/)

### Berufsrechtliche Regelungen

- Berufsordnung für Ärzte
- Heilberufegesetz
- Gebührenordnung für Ärzte (GOÄ)
{: .list .list-diamond }

### Hinweis

Auf dieser Website verwenden wir aus Gründen der besseren Lesbarkeit die männliche Form bei Personenbezeichnungen und personenbezogenen Hauptwörtern. Diese Begrifflichkeiten sind geschlechtsneutral und gelten grundsätzlich für alle Geschlechter. Die Verwendung der verkürzten Sprachform dient ausschließlich redaktionellen Zwecken und enthält keinerlei Wertung.

Patienten können die Regelungen auf folgender Internetseite einsehen:  
[https://www.laekh.de/aerzte/berufsrecht/berufsordnung](https://www.laekh.de/aerzte/berufsrecht/berufsordnung)

<!-- Betten die unveränderte HTML-Fehlermeldung der Quellseite in einen eigenen Prüfabschnitt ein. -->
## Fehlerseite
{: #osman-fehler layout="ntl-2col" section-style="--cols: 12;" }

<section class="container py-5 text-center" aria-labelledby="error-title">
  <div class="mx-auto" style="max-width: 48rem; padding: 4rem 1rem 8rem;">
    <p class="text-primary fw-semibold mb-2">Fehler 404</p>
    <h1 id="error-title" class="display-5 mb-3">Seite nicht gefunden</h1>
    <p class="lead mb-4">Die von Ihnen angeforderte Seite ist nicht verfügbar. Möglicherweise wurde sie verschoben, gelöscht oder die Adresse ist nicht korrekt.</p>
    <a class="btn btn-primary btn-lg" href="https://www.augenarzt-osman.de/" aria-label="Zur Startseite der Augenpraxis Osman">
      <i class="bi bi-house-door-fill" aria-hidden="true"></i>
      Zur Startseite
    </a>
  </div>
</section>

<!-- Schließt den Rundgang mit schnellen Rückwegen zu den beiden weiteren OSMan-Prüfseiten ab. -->
## Weiter prüfen
{: layout="ntl-2col" }

[Zum Seiteninventar]({{ page.url | relative_url }}#osman-inventar) · [Zur Startseite]({{ '/pages/theme-osman/osman-start.html' | relative_url }}) · [Zur Typografie]({{ '/pages/theme-osman/osman-default.html' | relative_url }})
