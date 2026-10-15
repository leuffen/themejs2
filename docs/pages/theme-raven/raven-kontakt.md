---
layout: website
body_class: theme-raven
use_navbar: osman
use_footer: raven
title: Raven – Kontakt & Termin
ptags: [arzt, nav]
---

<!-- Der bestehende Raven-Kontakt wird als eigene Demo-Seite gezeigt. -->
## Kontakt & Anfahrt
{: layout="ntl-2col.with-justify-top.surface-white" data-kicker="OCP Darmstadt" section-style="--cols: 5;" }

**OCP Darmstadt**  
Dres. Behr, Erben, Primbs, Rau  
Rheinstraße 97  
64295 Darmstadt

Telefon: (06151) 780750

<nte-consent-blocker class="style-default aside">
  <template>
    <iframe src="https://www.google.com/maps?q=Rheinstra%C3%9Fe%2097%2C%2064295%20Darmstadt&output=embed" title="Karte zum OCP Darmstadt" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </template>
</nte-consent-blocker>

---
{: layout="nte-accordion.style-default.bottom[exclusive]" }

### Anreise mit Bus und Bahn

Für die Anreise mit öffentlichen Verkehrsmitteln nutzen Sie bitte die aktuellen Verbindungen zur Rheinstraße 97 in Darmstadt.

### Anreise mit dem Auto

Am Standort beziehungsweise im Umfeld stehen gebührenpflichtige Parkmöglichkeiten zur Verfügung.

### Barrierefreier Zugang

Die Praxis befindet sich im 2. Obergeschoss und ist mit dem Fahrstuhl barrierefrei erreichbar.

---
{: layout="2;tj-form"}

## Schreiben Sie uns
{: layout="2.1;ntl-2col.style-form" .top }

#[nte-input.style-default type="text" name="name" label="Name" required]
#[nte-input.style-default type="email" name="email" label="E-Mail" required]
#[nte-input.style-default type="text" name="telefon" label="Telefon"]

---
{: layout=".aside" }

#[nte-input.style-default type="textarea" name="nachricht" label="Nachricht" required]
#[nte-input.style-default type="checkbox" name="datenschutz" label="Ich akzeptiere die Datenschutzerklärung" required]
#[button type="submit" class="btn btn-primary" > Absenden]


<!-- Die Schluss-Section bietet einen klaren Kontaktweg im Raven-Theme. -->
## Fragen zu Ihren Beschwerden?
{: layout="ntl-2col.style-card.reverse" .aside data-kicker="Kontakt & Termin" section-style="--cols: 6;" }

[Kontakt & Termin]({{ '/pages/theme-raven/raven-kontakt.html' | relative_url }}){: .btn .btn-accent .btn-lead }
