---
description: Vollbreiter FAQ-Bereich mit zentrierter Überschrift und Accordion-Inhalt.
---

# FAQ-Abschnitt

## Markdown

```markdown
## Häufige Fragen
{: layout="ntl-2col.style-faq" }

---
{: layout="nte-accordion[exclusive]" }

### Wie vereinbare ich einen Termin?

Nutzen Sie die angebotenen Kontaktmöglichkeiten.

### Welche Unterlagen benötige ich?

Die zuständige Stelle informiert Sie vorab.
```

## Verwendung

Der Style gibt dem FAQ-Bereich eine zwölfspaltige Inhaltsbreite.
`nte-accordion` bleibt für Aufklappen und Tastaturbedienung zuständig;
der Theme-Style verändert seine Interaktion nicht. Geeignet für
Terminfragen oder Produktfragen. Der HR erzeugt den unbetitelten
Accordion-Wrapper unterhalb der FAQ-Überschrift.

Keine eigenen Modifier. Die vorhandenen Nextrap-Layoutmodifier werden
als Bibliotheksausnahmen weiter eingebunden.

[Zugehöriger Style](_style-faq.scss)
