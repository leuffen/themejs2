# Markdown-Seiten mit vorhandenen ThemeJS2-Elementen bearbeiten

Dieser Leitfaden gilt für gewöhnliche Website-Inhalte im Document Root.
Technisches Layout und Jekyll-Front-Matter bei normaler Content-Anpassung
erhalten; Texte, Bilder, Links und Metadaten nur anhand des Projektkontexts
aktualisieren. Keine erfundenen Kontaktdaten, Qualifikationen, Leistungen,
Testimonials oder URLs einsetzen.

## Markdown zuerst, Layouts gezielt

- Headings, Absätze, Links, Bilder, Listen und Tabellen normal in Markdown.
- Kramdown-Attribute sofort unter das Element setzen; mit layout am
  Heading oder am HR werden Content-Pane-Sections erzeugt.
- Herkömmliche Fließtexte nicht nur der Optik wegen in HTML umschreiben.
- IDs, Slots, CSS- und Layout-Klassen nur verwenden, wenn das aktive Theme
  und die Komponente sie tatsächlich anbieten.
- Theme-spezifische Klassen nicht als universelle CSS-API voraussetzen.
- HTML-Shortcuts #[...] nur verwenden, wenn text-block aktiviert ist.
- Ein bestehendes Formular oder einen vorhandenen Consent-Blocker nicht
  durch ein optisch ähnliches, aber funktionsloses Markup ersetzen.

## Komponenten-Muster aus den bestehenden ThemeJS2-Demos

- ntl-2col: Text/Bild, Aufmacher, Profil, Kontakt und Detailartikel;
  reverse oder reverse-desktop nur, wenn die Variante aktiv vorhanden ist.
- ntl-card-row: Leistungs- oder Themenübersichten als Kartenraster; H3
  beschreibt einzelne Cards, ggf. mit Bild, Kurztext und Link.
- ntl-hero: visueller Startseiten-Einstieg, wenn das gewählte Theme dieses
  Hero-Layout verwendet; keine Hero-Grafiken erfinden.
- nte-accordion: FAQ, Erläuterungen, schrittweise Inhalte. Eine HR-Section
  umfasst mehrere nachfolgende H3-Fragen.
- nte-image: nur für die im Theme unterstützte Medienkomposition.
- nte-consent-blocker: externe Karten/Inhalte erst nach Einwilligung;
  bestehende Datenschutz- und Consent-Struktur erhalten.
- tj-form und nte-input: nur bei bestehender funktionsfähiger Formular-
  Integration, nicht als bloße Dekoration.

Beispiel einer Kartenübersicht aus der Layout-Sprache von Osman und Raven:

```markdown
## Leistungen
{: layout="ntl-card-row.style-default" section-style="--cols: 3;" }

Unsere Schwerpunkte im Überblick.
{: .header }

### Diagnostik

Abklärung und Untersuchung.

[Details](/leistungen/diagnostik){: .btn .btn-primary }

### Therapie

Individuelle Behandlung.

[Details](/leistungen/therapie){: .btn .btn-primary }
```

Variationen aus ThemeJS2-Demos nicht blind mischen: Die Raven-Startseite
zeigt etwa ntl-2col.style-hero, style-card und Akkordeons, Osman nutzt
ntl-hero sowie ntl-card-row; die verfügbare konkrete Theme-Variante
bestimmt die Auswahl. Unterseiten stärker auf Lesbarkeit und fachliche
Details ausrichten, Startseiten auf Orientierung und Navigation.

Quellen: leuffen/themejs2/docs/pages/theme-raven/raven-start.md,
raven-subpage.md, docs/pages/theme-osman/osman-start.md und
osman-elements.md sowie docs/pages/theme-unify/unify-services.md.
