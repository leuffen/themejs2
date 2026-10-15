# Startseite: Einordnung, Leistungen und nächste Schritte

Diese Anleitung gilt für die Startseite `index.md` im Document Root.
Bei normaler KI-Anpassung die vorhandenen Sections, Layoutvarianten und
Reihenfolge erhalten und nur belegte Inhalte ersetzen. Die folgende
Gliederung ist ein Gestaltungsangebot für einen ausdrücklich gewünschten
Neuaufbau, keine Aufforderung zum automatischen Umbau.

## CTA bei neu generierten Seiten

Wenn die Startseite neu generiert oder ausdrücklich vollständig neu aufgebaut
wird, endet sie mit einer vorhandenen CTA-Section des gewählten Themes,
sofern eine passende Variante existiert. Nutze dafür einen belegten Termin-
oder Kontaktlink. Bei normaler Übernahme einer vorhandenen Startseite dürfen
die Sections nicht nur für diese Regel umsortiert oder ergänzt werden.

## Inhaltliche Reihenfolge

1. Hero mit verständlicher Aussage, Schwerpunkt und einer realen
   Hauptaktion, optional einem vorhandenen Bild.
2. Kompakte Orientierung zu wesentlichen Leistungen und Zielgruppen.
3. Fachliche Positionierung und Vertrauenssignale ohne unbelegte
   Qualitäts- oder Erfolgsversprechen.
4. Übersicht mit wenigen Hauptleistungen und Links zu Detailseiten.
5. Optional Ablauf, FAQ, aktuelle Hinweise und echte Team-Informationen.
6. Kontakt- beziehungsweise Termin-CTA und gegebenenfalls Anfahrt.

Wähle Sections nach vorhandenen Inhalten und angebotenen Komponenten,
nicht nach einer erzwungenen Mindestzahl. Wiederhole Kontaktdaten nur dort,
wo dies der Benutzerführung dient.

## Variante A: Raven-artiger Einstieg

Die Raven-Demo verwendet ein bildorientiertes Zweispalten-Hero und
anschließend Fach-/Leistungssections sowie einen Kontakt-CTA:

```markdown
# Fachlicher Schwerpunkt
{: layout="ntl-2col.style-hero" section-style="--cols: 6;" }

Kurzbeschreibung mit konkretem Nutzen.

[Kontakt](/kontakt){: .btn .btn-primary }

![Passendes Bestandsbild](/assets/hero.webp)

## Unsere Leistungen
{: layout="ntl-card-row.style-default" section-style="--cols: 3;" }

### Bereich A

Kurztext und weiterführender Link.
```

## Variante B: Osman-artiger Einstieg

Bei einem Theme mit ntl-hero kann zuerst eine breite Bild-Section
folgen, anschließend ntl-card-row für Öffnungszeiten, Hinweise und
Leistungslinks. Nur vorhandene Layout-Styles und echte Angaben nutzen;
nicht beide Hero-Varianten gleichzeitig erzwingen.

Die Überschriftenhierarchie und direkt folgende Kramdown-Attribute
sind Bestandteil der Renderstruktur. Quelle:
leuffen/themejs2/docs/pages/theme-raven/raven-start.md sowie
docs/pages/theme-osman/osman-start.md.
