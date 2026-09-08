# Migrationsvertrag

## Ziel

Eine Migration ist nur erfolgreich, wenn die alte Website vollständig in der ThemeJS2-Struktur funktioniert und sich der redaktionelle Informationsbestand nicht verändert hat. Technische Struktur darf sich ändern; Inhalt darf sich nur nach einer separaten, konkreten Freigabe ändern.

## Unveränderliche Ausgangsbasis

- `.old/` enthält vor der ersten Transformation alle von Git versionierten Dateien des Ausgangsstands mit identischen relativen Pfaden und Dateiinhalten.
- Nach Erstellung des Inventars bleibt `.old/` unverändert. Ein später geänderter oder unvollständiger Sicherungsstand macht den Audit ungültig.
- `.old/` ist keine Zielimplementierung. Eine Seite oder ein Asset gilt nicht als migriert, wenn es ausschließlich dort vorhanden ist.

## Geschützte Inhalte

Ohne ausdrückliche Inhaltsfreigabe bleiben exakt erhalten:

- alle veröffentlichten und unveröffentlichten Seiten einschließlich Fehler-, Rechts- und Kontaktseiten;
- Überschriften, Absätze, Listen, Tabellen, Zitate, Beschriftungen, Linktexte, Alt-Texte, Schreibweisen und Zeichensetzung;
- interne und externe Linkziele, Telefonnummern, E-Mail-Adressen, Adressen, Öffnungszeiten und sonstige Kundendaten;
- externe Bild- und Medien-URLs;
- lokale redaktionelle Medien bytegleich, nachgewiesen über SHA-256;
- Permalinks und veröffentlichte Routen.

Layout-Attribute, Frontmatter-Schlüssel, Komponenten-Tags und technische Includes dürfen verändert werden, soweit ThemeJS2 dies erfordert und die sichtbare Bedeutung gleich bleibt. Ein scheinbarer Tippfehler ist keine technische Änderung.

## Seitennachweis

Jede inventarisierte Quellseite erhält genau einen Eintrag in `.migration/page-map.json`. Jeder Eintrag nennt Quell- und Zielpfad. Das Ziel muss existieren, darf nicht auf eine zweite Quellseite zeigen und muss denselben expliziten Permalink behalten. Zusätzliche Zielseiten sind nur zulässig, wenn sie mit einem nichtleeren Grund unter `additional_pages` dokumentiert sind.

## Bildnachweis

Markdown-Bilder, HTML-`img`-Quellen, CSS-`url(...)`-Referenzen und ein Frontmatter-Feld `image` werden seitenweise verglichen. Lokale Mediendateien werden zusätzlich bytegleich geprüft. Ein neues Format, eine neu komprimierte Datei oder ein Ersatzmotiv ist auch bei gleichem Erscheinungsbild eine Inhaltsänderung und benötigt Freigabe.

## Abbruchbedingungen

Halte an und frage nach, wenn eine Quellseite keiner eindeutigen Zielseite zugeordnet werden kann, ein alter Layout-Vertrag keine gleichwertige vorhandene ThemeJS2-Komposition besitzt, redaktioneller Text für die neue Struktur geändert werden müsste, ein Asset fehlt, eine Route geändert werden soll oder eine neue beziehungsweise erweiterte NTL-/NTE-Komponente erforderlich wird.

## Definition of Done

- `.old/` stimmt mit dem Inventar überein.
- Jede Quellseite ist genau einmal zugeordnet und jede zusätzliche Zielseite begründet.
- Text-, Link- und Bildsequenzen stimmen für jede Zuordnung überein.
- Alle lokalen Medien stimmen bytegleich überein.
- Die geschützten Werte aus `docs/_data/` sind im Ziel weiterhin vorhanden.
- ThemeJS1- und Webpack-Runtime werden nicht mehr für die Zielwebsite geladen.
- `npm update`, `npm run build` und die verfügbare Jekyll-Prüfung sind erfolgreich.
- Der Pull Request nennt Quellstand, Seitenzahl, Audit-Ergebnis und verbleibende Abweichungen.
