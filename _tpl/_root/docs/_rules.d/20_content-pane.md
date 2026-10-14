---
selector: "**/*.md"
---
# Content Pane: Markdown und Layout

Diese Rule übernimmt die für Website-Content relevanten Anwendungsregeln von
trunkjs/trunkjs-monorepo/packages/content-pane/skills/content-pane-usage,
content-pane-layout und den zugehörigen Best-Practice-Demos.
Für Markdown, Kramdown und Jekyll gilt: Ist Content Pane Bestandteil der
Website, werden Überschriften zu einer Section-Hierarchie und layout-Attribute
zu Layout-Elementen. Das vorhandene Jekyll-Front-Matter erhalten.

Bei einer normalen Inhaltsanpassung die bestehende Section-Hierarchie, alle
layout-Attribute, IDs, Klassen, Slots und Komponenten unverändert lassen.
Die folgenden Muster für neue Strukturen nur verwenden, wenn ein neuer
Seitenaufbau oder eine Layoutänderung ausdrücklich beauftragt wurde.

## Kramdown: ein Block und seine Attribute

Attribute stets unmittelbar nach dem zugehörigen Block ohne Leerzeile
schreiben. Auch Tabellen, Links, Bilder und horizontale Linien dürfen
Kramdown-Attribute besitzen.

    ## Unsere Leistungen
    {: layout="ntl-2col.style-default" section-style="--cols: 6;" }

    Ein kurzer Einleitungstext.

    ### Diagnostik

    Fachliche Details.

Eine Heading mit layout gehört zur gleichen Section. Die Gliederung ergibt
sich aus den Heading-Leveln: h1 und h2 entsprechen dem Layout-Index 2, h3
entspricht 3, h4 entspricht 4 usw. Explizite Indizes nur einsetzen, wenn
die Gliederung das gewünschte Container-Ende nicht beschreiben kann.

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

Bei einem Container ohne eigene Überschrift stattdessen eine horizontale
Linie mit Layout verwenden. Das HR erhält ohne expliziten Index die Ebene
der letzten festen Section plus 0,5:

    ## Häufige Fragen

    Einleitender Absatz außerhalb des Akkordeons.

    ---
    {: layout="nte-accordion.style-default[exclusive]" }

    ### Wie vereinbare ich einen Termin?

    Über die im Projektkontext genannte Kontaktmöglichkeit.

    ### Was sollte ich mitbringen?

    Nur belegte Angaben aufführen.

Für Layouts, die mehrere gleichrangige Sections umfassen, einen expliziten
HR-Wrapper mit anschließendem Abschluss einsetzen:

    ---
    {: layout="1;div.page-background" }

    ## Einstieg

    Einführung.

    ## Weitere Inhalte

    Details.

    ---
    {: layout="/1;" }

## HTML, Jekyll und Shortcuts

Standard-Markdown und Kramdown bevorzugen. Rohes HTML nur für verschachtelte
Strukturen verwenden, die sich nicht sinnvoll so abbilden lassen.
Ist der optionale Content-Pane-Pre-Parser text-block im Seitenrahmen aktiviert,
einzelne Elemente als eigenen Zeilen-Shortcut schreiben:

    #[i class="bi bi-shield-check" aria-hidden="true"]
    #[nte-input.style-default type="email" name="email" label="E-Mail"]

Shortcuts nicht inline in Überschriften, Links oder Fließtext schreiben.
Bei text-block kann ein Element-Selector aus Tag, #ID und .Klassen mit
normalen HTML-Attributen folgen; > eröffnet optionalen HTML-Inhalt.
Für void-Elemente wie img oder input keinen inneren Inhalt angeben.
Den Pre-Parser niemals für nicht vertrauenswürdigen HTML-Inhalt aktivieren.

Referenzen aus TrunkJS: packages/content-pane/skills/content-pane-usage/SKILL.md,
packages/content-pane/skills/content-pane-layout/SKILL.md und
packages/content-pane/skills/content-pane-usage/references/best-practices.md.
