---
description: Kompakte Einladung mit einem Eingabefeld und zugehöriger Aktion.
---

# Anmeldung mit einem Feld

## Markdown

```markdown
## Neuigkeiten erhalten
{: layout="ntl-2col.style-subscribe" }

Tragen Sie sich für aktuelle Informationen ein.

### Anmeldung
{: layout="form.hero-form" section-slot="aside" section-action="/anmeldung" section-method="post" }

#[nte-input type="email" name="email" label="E-Mail" required]
#[button type="submit" class="btn btn-primary" > Anmelden]
```

## Verwendung

Einladung und Erklärung bleiben in `main`; das Formular wird als
direktes Kind `aside` zugeordnet. Das gemeinsam geladene `hero-form`-Pattern
stellt die Formularfläche bereit. Desktop ordnet ein Feld und seine Aktion
nebeneinander an, kleine und mittlere Modi stapeln sie.
Passend für Newsletter oder eine kurze Interessentenanmeldung.

Das Ziel `/anmeldung` ist ein Platzhalter; der Consumer muss einen
geeigneten Endpoint und die notwendigen Einwilligungen bereitstellen.
Keine eigenen Host-Modifier. Nextrap-Modifier bleiben dokumentierte
Bibliotheksausnahmen.

[Zugehöriger Style](_style-subscribe.scss)
