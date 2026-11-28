---
description: Gemeinsame Aktionskarte mit getrennten Bereichen für Aussage und Kontaktinformationen.
---

# Kontaktkarte mit zwei Bereichen

## Markdown

```markdown
## Gemeinsam starten
{: layout="ntl-2col.style-card" section-style="--cols: 7;" }

Beschreiben Sie den nächsten Schritt.

[Termin vereinbaren](./kontakt.html){: .btn .btn-primary }

**Kontakt**
{: .aside }

[Kontaktformular öffnen](./kontakt.html)
{: .aside }
```

## Verwendung

Der Hauptinhalt bleibt in `main`, die mit `.aside` markierten
direkten Absätze bilden den zweiten Kartenbereich. Die Karte verbindet
eine Handlungsaufforderung mit Kontaktwegen oder ergänzenden Links.
Sie nutzt eine dunkle Fläche aus den vorhandenen Primär-/Sekundärrollen.

Keine eigenen Modifier. `reverse` und `reverse-desktop` sind die
dokumentierten Nextrap-Modifier zum Tauschen der beiden Spalten.

[Zugehöriger Style](_style-card.scss)
