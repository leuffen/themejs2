---
description: Produkteinstieg mit Nutzenversprechen und eigenständiger Tarifkarte.
---

# Produktangebot mit Tarifauswahl

## Markdown

```markdown
## Das passende Angebot
{: layout="ntl-2col.style-saas-hero" section-style="--cols: 7;" }

Stellen Sie Ihr Produkt und den Nutzen vor.

[Mehr erfahren](./produkt.html){: .btn .btn-primary }

### Ihr Tarif
{: layout="div.aside" section-slot="aside" }

Wählen Sie einen passenden Einstieg.

- **Basis** – für kleine Teams.
- **Erweitert** – für zusätzliche Möglichkeiten.
{: .plan-options }

[Angebot anfragen](./kontakt.html){: .btn .btn-primary }
```

## Verwendung

Das Nutzenversprechen bleibt in `main`; die mit `section-slot="aside"`
markierte Tarifgruppe bildet die zweite Spalte. Die Gruppe kann Angebote
auflisten oder bereits vorhandene native Radiofelder enthalten; dieser
Style implementiert keine Preisberechnung und keinen Checkout.
Geeignet für Softwaretarife oder gestufte Serviceangebote.

Die Kindklassen `saas-reviews`, `review-stars`, `plan-options` und
`plan-contact` kennzeichnen Bewertungen, Auswahl und Kontaktinhalt.
Mobile und mittlere Modi stapeln Aussage und Tarifkarte. Keine eigenen
Host-Modifier; `reverse-desktop` ist eine Nextrap-Ausnahme.

[Zugehöriger Style](_style-saas-hero.scss)
