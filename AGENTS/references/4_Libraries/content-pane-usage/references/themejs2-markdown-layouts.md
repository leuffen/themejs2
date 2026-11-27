# Content Pane: Markdown und Layout

## Inhalt

- [Kramdown: ein Block und seine Attribute](#kramdown-ein-block-und-seine-attribute)
- [Layout-Index und Section-Grenzen](#layout-index-und-section-grenzen)
- [HTML, Jekyll und Shortcuts](#html-jekyll-und-shortcuts)

ThemeJS2-Beispiele zu `content-pane-usage` und `content-pane-layout`:
Content Pane formt Headings zum Section-Tree und `layout`-Attribute zu
Layout-Elementen. Jekyll-Front-Matter erhalten.

Bei Content-Änderungen Section-Tree, `layout`, IDs, Klassen, Slots und
Komponenten erhalten. Neue Strukturen nur bei ausdrücklich beauftragtem
Seitenaufbau oder Layout-Umbau verwenden.

## Kramdown: ein Block und seine Attribute

Kramdown-Attribute stehen direkt nach dem Block, ohne Leerzeile. Das gilt
auch für Tabellen, Links, Bilder und HRs.

```markdown
## Unsere Leistungen
{: layout="ntl-2col.style-default" section-style="--cols: 6;" }

Ein kurzer Einleitungstext.

### Diagnostik

Fachliche Details.
```

Heading und `layout` gehören zur selben Section. H1/H2 liefern Index 2,
H3 Index 3 usw. Explizite Indizes nur nutzen, wenn der Heading-Tree die
Container-Grenze nicht ausdrücken kann.

## Layout-Index und Section-Grenzen

- layout="ntl-2col" erzeugt ein Element auf der abgeleiteten Ebene.
- layout="3;ntl-2col" erzeugt ein Element auf der expliziten Ebene 3.
- layout="=3;" hängt Inhalt an die vorhandene Section der Ebene 3 an.
- layout="!;" belässt das Element ohne neue Section.
- layout="/3;" beendet die Ebene 3 und tiefere Ebenen (nur HR).
- layout="/;" schließt den aktuellen HR-Wrapper (nur HR).
- layout="nte-card#kontakt.highlighted[data-kind=info]" unterstützt
  CSS-Selector-Syntax einschließlich ID, Klassen und Attributen.
- Attribute mit dem Präfix section- gehören zur erzeugten Section;
  etwa section-class und section-style, jeweils ohne Präfix übertragen.
- Veraltete +i/-i-Syntax nicht für neue Inhalte verwenden.

Headinglose Container erhalten ein HR mit `layout`. Der abgeleitete Index
ist die letzte feste Section-Ebene plus 0,5:

```markdown
## Häufige Fragen

Einleitender Absatz außerhalb des Akkordeons.

---
{: layout="nte-accordion.style-default[exclusive]" }

### Wie vereinbare ich einen Termin?

Über die im Projektkontext genannte Kontaktmöglichkeit.

### Was sollte ich mitbringen?

Nur belegte Angaben aufführen.
```

Für mehrere gleichrangige Sections: HR-Wrapper mit explizitem Index und
Closing-Control verwenden:

```markdown
---
{: layout="1;div.page-background" }

## Einstieg

Einführung.

## Weitere Inhalte

Details.

---
{: layout="/1;" }
```

## HTML, Jekyll und Shortcuts

Markdown und Kramdown bevorzugen; Raw HTML nur für anders nicht sinnvoll
darstellbare verschachtelte Strukturen. Mit `text-block`-Pre-Parser im Frame
stehen einzelne Elemente als Shortcut auf eigener Zeile:

```markdown
#[i class="bi bi-shield-check" aria-hidden="true"]
#[nte-input.style-default type="email" name="email" label="E-Mail"]
```

Shortcuts nie inline in Headings, Links oder Fließtext setzen. Sie beginnen
mit Tag, optional `#ID`, `.Klassen` und HTML-Attributen; `>` eröffnet inneres
HTML. Void-Elemente (`img`, `input`) haben keinen inneren Content.
Den Pre-Parser nie für nicht vertrauenswürdigen HTML-Content aktivieren.

Referenzen aus TrunkJS: packages/content-pane/skills/content-pane-usage/SKILL.md,
packages/content-pane/skills/content-pane-layout/SKILL.md und
packages/content-pane/skills/content-pane-usage/references/best-practices.md.
