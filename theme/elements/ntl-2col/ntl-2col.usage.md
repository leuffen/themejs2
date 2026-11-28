---
description: Registriert die gemeinsamen Zweispalten-Kompositionen für alle visuellen Variants.
---

# Zweispalten-Kompositionen

## Markdown

```markdown
## Informationen
{: layout="ntl-2col" }

Der Hauptinhalt steht neben einem optionalen Bild.

![Einblick](./einblick.jpg)
```

Der gemeinsame Theme-Entry lädt diese Registrierung automatisch. Consumer
verwenden ausschließlich das öffentliche `theme()`-Mixin aus dem
Root-`index.scss`; einzelne SCSS-Styles werden nicht separat importiert.

Pro Instanz gilt höchstens eine `style-*`-Klasse. Ohne Angabe ergänzt
Nextrap `style-default`. Alle Beispiele setzen das registrierte
`ntl-2col` und Markdown mit Kramdown im `tj-content-pane` voraus.

| Komposition | Usage |
| --- | --- |
| `ntl-2col` | [Verwendung](_style-default.usage.md) |
| `style-card` | [Verwendung](_style-card.usage.md) |
| `style-cta` | [Verwendung](_style-cta.usage.md) |
| `style-faq` | [Verwendung](_style-faq.usage.md) |
| `style-feature` | [Verwendung](_style-feature.usage.md) |
| `style-feature-grid` | [Verwendung](_style-feature-grid.usage.md) |
| `style-form` | [Verwendung](_style-form.usage.md) |
| `style-hero` | [Verwendung](_style-hero.usage.md) |
| `style-logo-cloud` | [Verwendung](_style-logo-cloud.usage.md) |
| `style-saas-hero` | [Verwendung](_style-saas-hero.usage.md) |
| `style-step` | [Verwendung](_style-step.usage.md) |
| `style-subpage-lead` | [Verwendung](_style-subpage-lead.usage.md) |
| `style-subscribe` | [Verwendung](_style-subscribe.usage.md) |
| `style-testimonial` | [Verwendung](_style-testimonial.usage.md) |
| `style-video` | [Verwendung](_style-video.usage.md) |

`main` und `aside` bilden die beiden Spalten. `top` und `bottom` liegen
innerhalb, `header` und `footer` außerhalb des Wrappers. Die vorhandenen
Nextrap-Modifier sind dokumentierte Ausnahmen vom Style-Präfix; eigene
Modifier stehen bei ihrem Style. Seitenweite Paletten werden unabhängig
davon mit einer `variant-*`-Klasse gewählt.

Die gemeinsame Registrierung entfernt einen letzten Absatzabstand in Main
und Aside von Default, Testimonial, CTA und FAQ nur, wenn kein weiterer
regulärer Inhaltsblock oder Accordion folgt.
