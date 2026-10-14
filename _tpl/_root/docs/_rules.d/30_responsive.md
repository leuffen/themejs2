---
selector: "**/*.md"
---
# TrunkJS Responsive: Klassen und Styles im Markdown

Diese Rule übernimmt den fachlichen Umfang von
trunkjs/trunkjs-monorepo/packages/responsive/skills/trunkjs-responsive/SKILL.md
und packages/responsive/.ai-usage-info.md. Die Website bindet tj-responsive
bereits über ihren Seitenrahmen ein: keine zweite Registrierung oder einen
zusätzlichen tj-responsive-Wrapper in Content-Sections erzeugen.

Normale Content-Anpassungen verändern vorhandene responsive Klassen, Styles
und Breakpoints nicht. Bei ausdrücklich gewünschten Responsive-Anpassungen
zuerst vorhandene semantische Klassen und Theme-Utilities wiederverwenden.
Keine eigenen Resize-Listener oder einzelnen @media-Regeln hinzufügen, wenn
die vorhandene Responsive-API ausreicht.

## Klassen an Breakpoints koppeln

Ranges sind links inklusive und rechts exklusiv. Standard-Breakpoints:
xs=0, sm=576, md=768, lg=992, xl=1200, xxl=1400 (Pixel).

- -md:d-none gilt unterhalb md.
- md:d-block oder md-:d-block gilt ab md.
- md-xl:d-block gilt ab md bis unter xl.
- md:d-block.shadow aktiviert beide Klassen ab md.
- d-block:md:d-flex:xl:d-none verkettet Zustände über Breakpoints.

Kramdown-Klassen gehören ohne Leerzeile direkt zum vorhergehenden Block:

    - Erstes Leistungsmerkmal
    - Zweites Leistungsmerkmal
    {: .features-list .-md:compact .xl:desktop }

Ein HTML-Element kann Klassen und breakpoint-spezifische Styles
kombinieren:

    <div class="card -md:d-none md-xl:d-block.shadow xl:d-flex"
         style="width:100%;color:black"
         style-md="width:50%"
         style-xl="width:33%;color:red">
      Inhalt
    </div>

style-{breakpoint} ergänzt beziehungsweise überschreibt nur die dort
angegebenen CSS-Properties; die übrigen Properties bleiben wirksam.

## Runtime Arbitrary Values nur als Ausnahme

Klassen wie width-[100%], md:text-size-[22px] oder
width-[100%]:md:width-[50%] werden erst zur Laufzeit im Browser zu
CSS-Regeln. Das ist keine Buildzeit-Vorkompilierung. Ein optionaler layer
am bereits vorhandenen tj-responsive steuert den CSS-Cascade-Layer; nicht
für ein Einzelbeispiel einen weiteren Wrapper in die Seite setzen.
Leerzeichen in Werten als Unterstriche schreiben, zum Beispiel
width-[calc(100%_-_2rem)]. URLs und frei erfundene CSS-Property-Namen
in Klammer-Utilities sind nicht unterstützt.

Reihenfolge der Auswahl: bestehende Klasse, bestehende Klasse mit
Breakpoint, nur bei echtem Einzelwert style-{breakpoint}, erst zuletzt
eine seltene Arbitrary-Value-Klasse. Für wiederkehrende Werte Theme-Token
oder gemeinsame Utility vorziehen. Die bestehenden ThemeJS2-Komponenten
mit eigenem mode-Attribut nicht durch zusätzliche Responsive-Klassen
intern nachbauen.
