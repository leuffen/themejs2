---
description: ""
order: 71
ptags: ~
published: true
title: Online Anmeldung
shiller:
  tags: [mueller]
  target: service/online-anmeldung.md
---


## Jetzt als Patient anmelden
{: layout="ntl-2col" data-kicker="Anmeldung für Patienten" .top }

Wir freuen uns sehr über Ihr Interesse an unserer Praxis.

Bitte füllen Sie das untenstehende Formular mit Ihren persönlichen Daten aus. Ihre Daten werden selbstverständlich vertraulich behandelt und nur für interne Zwecke verwendet.


---
{: layout="tj-form" .mt-5}

#[input type="hidden" name="type" value="Anmeldung"]
#[nte-input.hoverlabel type="text" name="name" label="Name" required]
#[nte-input.hoverlabel type="date" name="geburtsdatum" label="Geburtsdatum" required]
#[nte-input.hoverlabel type="email" name="email" label="E-Mail" required]
#[nte-input.hoverlabel type="tel" name="telefon" label="Telefon" required]
#[nte-input.hoverlabel type="text" name="krankenkasse" label="Krankenkasse (optional)"]
#[nte-input.hoverlabel type="text" name="versicherungsnummer" label="Versicherungsnummer (optional)"]
#[nte-input.hoverlabel type="textarea" name="nachricht" label="Ihre Nachricht (optional)" style="height: 120px;"]

#[nte-input type="checkbox" name="datenschutz" label="Ich akzeptiere die Datenschutzbestimmungen" required]
#[button type="submit" class="btn btn-primary" > Absenden]


## Erfahren Sie mehr über uns
{: layout="ntl-2col.style-cta"}

[Home](/){: .btn .btn-primary }
[Kontakt & Anfahrt](/kontakt){: .btn .btn-primary }
