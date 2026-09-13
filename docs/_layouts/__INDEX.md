# Layouts

10_blanc → 20_body → 50_navbar → 60_footer → 70_main.

`index.html` rendert Kategorie-Karten, `legal/legal.html` einen Legal-Inhaltsrahmen.

Nur die Demo wählt `_includes/_styles/<variante>/navbar.html` und `footer.html`
über `use_navbar` und `use_footer`; `false` deaktiviert den jeweiligen Bereich.
Alternative Layout-Dateien werden nicht benötigt.
