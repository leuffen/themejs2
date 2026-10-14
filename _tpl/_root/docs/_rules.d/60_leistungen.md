---
selector: "leistungen/**/*.md"
---
# Leistungsseiten: Übersicht und fachliche Details

Diese Rule gilt für Markdown unter leistungen/, inklusive
leistungen/index.md. Bei normaler KI-Anpassung Section-Struktur, Links
und Layoutvarianten erhalten. Nur bei ausdrücklich gewünschtem neuen
Seitenaufbau die folgenden Vorlagen als Auswahlmuster verwenden.

## Leistungsübersicht

Der Einstieg erklärt das Leistungsspektrum in Alltagssprache. Für eine
Übersicht mit mehreren verlinkten Angeboten ein ntl-card-row-Raster nutzen,
sofern die gewählte Theme-Variante vorhanden ist. Jede Karte erhält eine
aussagekräftige Überschrift, einen eigenständigen Kurztext und den
zutreffenden Detail-Link; keine Leistungen aus anderen Demos übernehmen.

    # Leistungen
    {: layout="ntl-2col.style-subpage-lead" section-style="--cols: 6;" }

    Was wir anbieten und für wen es geeignet ist.

    ## Schwerpunkte
    {: layout="ntl-card-row.style-default" section-style="--cols: 3;" }

    ### Leistung A

    Kurzbeschreibung.

    [Mehr erfahren](/leistungen/leistung-a){: .btn .btn-primary }

## Einzelne Leistungsseite

1. Klare H1 und kurze fachliche Einordnung.
2. Nutzen, Einsatzbereich und gegebenenfalls Voraussetzungen sachlich
   erläutern; keine pauschalen Erfolgs-, Heilungs- oder Preiszusagen.
3. Längere Erklärtexte lesbar in ntl-2col, falls Bild/Aside geeignet ist.
4. Wiederkehrende Detailfragen als nte-accordion mit echten H3-Fragen.
5. Ein klarer Weg zur zugehörigen Leistung oder Kontaktmöglichkeit.

Für aufeinanderfolgende Text/Bild-Abschnitte kann eine dokumentierte
reverse-desktop-Variante Abwechslung schaffen; nicht durch zufällige
Responsive-Klassen ersetzen. Tabellen für echte strukturierte Daten
verwenden, Karten eher für Auswahl und Navigation.

    ## So läuft die Leistung ab
    {: layout="ntl-2col.with-justify-top.surface-white" }

    Belegte Beschreibung der einzelnen Schritte.

    ---
    {: layout="nte-accordion.style-default[exclusive]" }

    ### Häufige Frage

    Konkrete Antwort.

Als Muster dienen leuffen/themejs2/docs/pages/theme-raven/raven-subpage.md
und docs/pages/theme-osman/osman-elements.md.
