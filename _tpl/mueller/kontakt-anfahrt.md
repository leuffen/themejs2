---
description: Bisher keine Beschreibung
order: 99
ptags:
- nav
published: true
title: Kontakt & Anfahrt
shiller:
  tags: [mueller]
  target: kontakt-anfahrt.md
---
## Ihre Hausarztpraxis in Neuss Zentrum.
{: layout="ntl-2col" data-kicker="Hier finden Sie uns" }
<nte-consent-blocker class="google-maps-consent" slot="top">
  <template>
    <iframe src="{{ site.data.general.standorte.default.map_url }}" title="Anfahrt zur Praxis" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </template>
</nte-consent-blocker>

{% include components/contact/address.html %}

**Unsere Praxis im 1. OG ist barrierefrei über den Aufzug erreichbar**

---
{: layout="nte-accordion.aside"}

### <i class="bi bi-bus-front-fill text-primary"></i> Anfahrt mit Bus und Bahn

Anfahrtsbeschreibung mit Bus und Bahn

### <i class="bi bi-bicycle text-primary"></i> Anfahrt mit dem Fahrrad

Anfahrtsbeschreibung mit dem Fahrrad

### <i class="bi bi-car-front-fill text-primary"></i> Anfahrt mit dem Auto

Anfahrtsbeschreibung mit dem Auto



---
{: layout="2;tj-form" }

## Schreiben Sie uns
{: layout="2.1;ntl-2col.style-cta" .top }

#[nte-input.style-default.hoverlabel type="text" name="name" label="Name" required]
#[nte-input.style-default.hoverlabel type="email" name="email" label="E-Mail" required]
#[nte-input.style-default.hoverlabel type="text" name="telefon" label="Telefon"]

---
{: layout=".aside" }

#[nte-input.style-default.hoverlabel type="textarea" name="nachricht" label="Nachricht" required]
#[nte-input.style-default type="checkbox" name="datenschutz" label="Ich akzeptiere die Datenschutzerklärung" required]
#[button type="submit" class="btn btn-primary" > Absenden]
