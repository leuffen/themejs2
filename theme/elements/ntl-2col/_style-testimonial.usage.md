---
description: Zitat mit Urheber und optionalem Porträt; Hochformat über testimonial-portrait.
---

# Testimonial

## Markdown

```markdown
## Erfahrungen aus der Zusammenarbeit
{: layout="ntl-2col.style-testimonial" }

> Die Zusammenarbeit hat unsere täglichen Abläufe vereinfacht.
{: .testimonial-quote }

**Alex Beispiel**
{: .testimonial-person }

Projektleitung
{: .testimonial-role }

![Porträt von Alex Beispiel](./portrait.jpg)
```

## Verwendung

Der Zitattext, die Person und ihre Rolle bleiben in `main`; der direkte
Markdown-Bildabsatz wird `aside`. Ein Porträt ist optional. Die Baseline
zeigt ein Rundporträt, das mobil die Fläche überlappt. Ohne Bild entsteht
kein Bildüberstand. Auch bestehende normale Zitatabsätze bleiben nutzbar.

Der Modifier `testimonial-portrait` verwendet dieselben Inhalte mit einer
Hochformat-Bildbühne und ohne Rundbild-Überlappung. Beispielsweise können
Kundenstimmen und persönliche Erfahrungsberichte dieselbe Komposition nutzen.

```markdown
## Aus unserem Projekt
{: layout="ntl-2col.style-testimonial.testimonial-portrait.reverse-desktop" }

> Wir konnten den neuen Ablauf gemeinsam erfolgreich einführen.
{: .testimonial-quote }

**Sam Beispiel**
{: .testimonial-person }

Teamleitung
{: .testimonial-role }

![Sam bei der Arbeit](./portrait-hochformat.jpg)

[Erfahrungsbericht lesen](./bericht.html){: .btn .btn-secondary }
```

Pro Instanz bleibt genau eine `style-*`-Klasse gesetzt.
`reverse-desktop` ist die dokumentierte Nextrap-Ausnahme für die
Desktop-Reihenfolge; mobil steht das Hochformat immer vor dem Zitat.

[Zugehöriger Style](_style-testimonial.scss)
