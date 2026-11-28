---
description: Vergleicht Angebote mit Preis, Leistungslisten, optionaler Empfehlung und Aktion.
---

# Preisvergleich

`style-pricing` richtet Preisangebote und Aktionen auf gleicher Höhe aus.
`--cols` bestimmt die Desktop-Breite. Der Preis steht als H4 direkt innerhalb
der Card; `layout="!;"` erhält die Überschrift ohne zusätzlichen Abschnitt.
Ein Row-Footer kann allgemeine Preis- oder Steuerhinweise enthalten.

Die bestehende Child-Klasse `is-featured` hebt ein empfohlenes Angebot hervor.
Ein Absatz mit `pricing-label` ist dessen sichtbare Empfehlung. Ein Element
mit `is-unavailable` innerhalb eines Listeneintrags kennzeichnet eine nicht
enthaltene Leistung. Diese Inhaltsklassen sind dokumentierte Ausnahmen vom
Style-Modifier-Muster; es gibt keine zweite `style-*`-Klasse an einer Card.

## Markdown mit Content Pane

```markdown
## Unsere Angebote
{: layout="ntl-card-row.style-pricing" section-style="--cols: 6;" }

### Basis

Für den Einstieg.

#### 49 € / Monat
{: layout="!;" }

- Persönliche Beratung
- Monatlicher Bericht

[Anfragen](/kontakt.html)
{: slot="footer" }

### Begleitung
{: section-class="is-featured" }

Empfohlen
{: .pricing-label }

#### 89 € / Monat
{: layout="!;" }

- Persönliche Beratung
- Wöchentlicher Bericht

[Anfragen](/kontakt.html)
{: slot="footer" }
```
