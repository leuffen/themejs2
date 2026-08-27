# Header- und Footer-Ablauf

Lies diese Referenz nur, wenn Header, Navbar oder Footer ausdrücklich beauftragt wurden. Halte diesen Umfang vom Inhalts-Theming getrennt.

## Planung

- Kläre, welche Bereiche des Website-Rahmens enthalten sind und ob nur das visuelle Styling oder auch die Struktur betroffen ist.
- Ein in einer Designvorlage sichtbarer Header oder Footer ist keine Freigabe für dessen Umsetzung.
- Änderungen an `docs/_includes` oder `docs/_layouts` benötigen eine ausdrückliche Freigabe.

## Repository-Integration

- Header-, Navbar- und Footer-Markup in Demos ist nur beispielhaft; Jekyll stellt die produktiven Elemente bereit.
- Richte Navbar-Arbeit an `docs/_includes/_styles/default/navbar.scss` aus.
- Richte Footer-Arbeit an `docs/_includes/_styles/default/footer.scss` aus.
- Lässt sich das gewünschte Ergebnis nicht mit den Default-Styles ausdrücken, erstelle je nach Bedarf `docs/_includes/_styles/<theme>/navbar.scss` oder `footer.scss`.
- Wähle eine Theme-spezifische Umsetzung im Frontmatter mit `use_navbar: <theme>` oder `use_footer: <theme>`.

## Prüfung

- Prüfe den Website-Rahmen getrennt von der Inhalts-Theme-Demo.
- Teste ihn mit unterschiedlichen Navigationsbezeichnungen, Linkanzahlen, Kontaktdaten und Footer-Inhalten.
- Halte Kundentexte, Logos und Bilder in Inhalt oder Konfiguration; verwende Platzhalter, wenn Assets fehlen.

