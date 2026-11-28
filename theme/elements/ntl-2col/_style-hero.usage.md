---
description: Einstieg mit Hauptaussage und einer eigenständigen Porträtspalte.
---

# Porträt-Hero

## Markdown

```markdown
## Fachliche Begleitung
{: layout="ntl-2col.style-hero" section-style="--cols: 6;" }

Wir stellen unsere Arbeit und die verantwortliche Person vor.

[Kontakt aufnehmen](./kontakt.html){: .btn .btn-primary }

![Porträt](./portrait.jpg)
```

## Verwendung

Die Hauptaussage bleibt in `main`, das direkte Markdown-Bild wird
automatisch `aside` zugeordnet. Die Bühne nutzt auf Desktop die
Viewport-Höhe; mobil folgt das Porträt nach dem Text im Hochformat.
Geeignet für eine persönliche Vorstellung oder den Einstieg eines
Beratungsangebots. Der Style funktioniert mit jeder `variant-*`-Palette.

Keine eigenen Modifier. Die Nextrap-Modifier `reverse-desktop` und
`with-justify-*` bleiben als dokumentierte Bibliotheksausnahmen verfügbar.

[Zugehöriger Style](_style-hero.scss)
