---
description: 'Bisher keine Beschreibung'
layout: article
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
    <iframe src="{{ site.data.general.map_url }}" title="Anfahrt zur Praxis" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </template>
</nte-consent-blocker>

{% include components/contact/address.html %}

**Unsere Praxis im 1. OG ist barrierefrei über den Aufzug erreichbar ???!!!**

---
{: layout="nte-accordion"}

### [i class="bi bi-bus-front-fill text-primary"] Anfahrt mit Bus und Bahn

Anfahrtsbeschreibung mit Bus und Bahn

### [i class="bi bi-bicycle text-primary"] Anfahrt mit dem Fahrrad

Anfahrtsbeschreibung mit dem Fahrrad

### [i class="bi bi-car-front-fill text-primary"] Anfahrt mit dem Auto

Anfahrtsbeschreibung mit dem Auto





## Schreiben Sie uns. Wir melden uns umgehend bei Ihnen.
{: layout="ntl-2col.style-cta"}


---
{: layout="2;tj-form" }

#[nte-input type="text"  name="Name" required]
#[nte-input type="email" name="E-Mail" required]
#[nte-input type="tel" name="Telefon" required]
---
{: layout="2;tj-form" }

#[nte-input type="textarea" name="Ihre Nachricht" required style="height: 120px;"]
#[nte-input type="checkbox" name="Datenschutz" label="Ich akzeptiere die Datenschutzbestimmungen" required]
#[button type="submit" class="btn btn-primary" > Absenden]