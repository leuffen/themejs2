---
description: Zweispaltiger Formularbereich mit gemeinsamer oberer Kante.
---

# Formular und Begleitinformationen

## Markdown

```markdown
## Kontakt aufnehmen
{: layout="ntl-2col.style-form" }

#[nte-input type="text" name="name" label="Ihr Name"]

#[nte-input type="email" name="email" label="E-Mail"]

Informationen zur Verarbeitung Ihrer Anfrage.
{: .aside }
```

## Verwendung

Eingaben bleiben im Hauptbereich `main`; Hinweise, Kontaktwege oder
eine zweite Eingabegruppe gehören in `aside`. Der Style sorgt für
volle Eingabebreite und eine gemeinsame obere Kante. Er richtet keinen
Versand ein: `form`, Validierung und Endpoint stellt der Consumer.

Keine eigenen Modifier. `reverse-desktop` und `with-justify-*` sind
dokumentierte Nextrap-Ausnahmen.

[Zugehöriger Style](_style-form.scss)
