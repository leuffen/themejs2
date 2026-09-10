# Layout-Index

| Datei | Funktion |
| --- | --- |
| `10_blanc.html` | Äußerste HTML-Dokumenthülle mit Head und globalen Dokument-Metadaten. |
| `20_body.html` | Body-Hülle; lädt Loader und responsive Laufzeit um den Seiteninhalt. |
| `30_script.html` | Script-/Template-Stufe; rendert Element-Templates und globale Laufzeit-Komponenten. |
| `50_navbar.html` | Demo-Dispatcher für `_styles/<use_navbar>/navbar.html`; umschließt den folgenden Inhalt. |
| `60_footer.html` | Demo-Dispatcher für `_styles/<use_footer>/footer.html`; folgt auf den Inhalt. |
| `70_main.html` | Hauptinhalt mit Feedback-Komponente und globalem Include. |
| `article.html` | Artikel-/Magazin-Layout für Posts und die `wissen`-Collection. |
| `author.html` | Autorenseite mit den einem Autor zugeordneten Artikeln. |
| `blanco.html` | Minimaler Seitenrahmen ohne Navbar und Footer. |
| `category.html` | Übersichtsseite für Beiträge einer Kategorie. |
| `default.html` | Standardlayout für allgemeine Seiten. |
| `landing-page.html` | Landingpage mit Hero, optionalem CTA und Inhaltsbereich. |
| `partner.html` | Partnerseite mit Metadaten und zugeordneten Artikeln. |
| `topic.html` | Themenseite mit Beschreibung und zugeordneten Artikeln. |
| `website.html` | Website-Inhaltslayout auf Basis des Hauptseitenrahmens. |
| `legal/impressum.html` | Layout für Impressums-/Legal-Inhalte. |
| `blog-epraxis.html` | Spezifisches Blog-Seitenlayout der ePraxis-Demo. |
| `homepage.html` | Homepage-Seitenlayout für die Demo-/Website-Struktur. |

Die Variantenauswahl gehört nur zur Demo. Die Kundenlayouts unter
`_root/docs/_layouts/` enthalten jeweils ein ausgewähltes Fragment direkt.
Auswahl und Übernahme: [Architektur](../../ARCHITECTURE.md#übergang-von-docs-zum-kundenprojekt).
