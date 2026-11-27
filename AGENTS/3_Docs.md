# § 3 Docs-Verzeichnis

`docs/` ist die Beispielwebsite für ThemeJS2. GitHub Pages rendert und
veröffentlicht sie für Entwickler, die Themes, Komponenten und Varianten im
Browser vergleichen. Dieselben Dateien sind die Basis der lokalen Demo.
Der Einstieg `docs/index.md` ist unter [localhost:4000](http://localhost:4000/)
erreichbar, sobald die lokale Entwicklung läuft.

Halte Struktur und Verwendung von `docs/` möglichst nah an den Zielrepositories:
gleiche Layouts, Komponenten, Datenquellen und Front-Matter-Felder für gleiche
Aufgaben. Demo-Inhalte und -Pfade gehören in Seiten oder Konfiguration.
Verlinke veröffentlichte Beispiele auf der Startseite mit ihrem Dateipfad als
Beschriftung. Ihre URLs folgen Dateiname und Verzeichnis.

```text
docs/
|-- index.md
|-- _config.yml
|-- _data/
|   |-- openhours.yml
|   |-- general.yml
|   `-- defaults.yaml
|-- _includes/
|   `-- components/
|       |-- navigation/
|       `-- site/
|-- _layouts/
|   |-- 10_blanc.html
|   |-- 20_body.html
|   `-- blank.html
|-- _src/
|   |-- index.ts
|   `-- style.scss
|-- assets/
|   |-- dist/                 (Build-Ausgabe)
|   `-- leuffen/
`-- themes/
    `-- [stylename]/
        |-- [stylename]-start.md        (Startseite)
        |-- [stylename]-leistungen.md   (Leistungen)
        `-- ...                        (weitere Markdown-Seiten)
```

## § 3.1 `_data/`

`docs/_data/` ist die verbindliche Quelle für Stammdaten in der Demo und
in Kundenprojekten. `general.yml` enthält allgemeine Website- und
Standortdaten, `defaults.yaml` gemeinsame Standardwerte und
`openhours.yml` Öffnungszeiten und Meldungen. Greife in Demos über
`site.data` auf diese Werte zu. Beziehe wiederverwendete Angaben wie
Praxisnamen, Adressen und den Namen im Copyright aus den Datensätzen.
Für Standortdaten ist `site.data.general.standorte.default` der
Standard. Eine Demo kann einen anderen Standort aus `standorte` wählen.

Externe Systeme geben das Datenformat vor. Änderungen an Struktur,
Feldnamen, Typen oder Formaten unter `_data/` erfordern vorab eine
separate manuelle Freigabe. Der Dokument-Head in `10_blanc.html`
serialisiert den vollständigen Open-Hours-Datensatz für JavaScript:

```liquid
window.openhours = {{ site.data.openhours | jsonify }};
```

## § 3.2 `_includes/`

Includes sind wiederverwendbare Bausteine für Layouts und Seiten. Lege
einen Include nur an, wenn er an mindestens zwei Stellen verwendet wird.
Die vorhandenen Includes und ihre Schnittstellen sind vorgegeben.
Verwende sie mit ihren vorhandenen Parametern und passe bei Bedarf das
aufrufende Layout oder die Seite an. Neue Includes und Änderungen an
bestehenden Includes erfordern vorab eine separate Freigabe. Für
gemeinsame Pfade gilt [§ 5.11](../AGENTS.md#-511-include-namen-und-_root-als-quelle-der-wahrheit).

Verwende für Hauptnavigation und Footer-Navigation die vorgesehenen
Includes `components/navigation/main.html` und
`components/navigation/footer.html`. SEO-relevante Daten rendert Jekyll
beim Build ins HTML. Der Include `components/site/opening-hours.html`
gibt die Öffnungszeiten aus `site.data.openhours.table` als semantische
HTML-Tabelle aus. Die Tabelle muss bereits im ausgelieferten HTML stehen.
Die JavaScript-Daten unterstützen dynamische Funktionen wie Meldungen.

## § 3.3 `_layouts/`

### § 3.3.1 Init-Block

Jekyll baut den gemeinsamen Dokumentrahmen aus `10_blanc.html` und
`20_body.html`. `10_blanc.html` initialisiert das HTML-Dokument und
den technischen `<head>` mit Meta-Angaben, Assets und Open-Hours-Daten.
`20_body.html` erbt von `10_blanc` und stellt den `<body>` mit den
gemeinsamen Laufzeitbausteinen bereit. `blank.html` erbt von `20_body`
und reicht den Seiteninhalt weiter. Eine konkrete Seite kann mit
`layout: blank` direkt den initialisierten Dokumentrahmen verwenden.
Website-Layouts bauen ebenfalls auf `blank` auf. Die Layoutketten
bestehender Demos sind in [§ 5.8](../AGENTS.md#-58-demo-layouts-und-seitenverzeichnis)
und [§ 5.10](../AGENTS.md#-510-zusammenspiel-und-synchronisation-der-beiden-versionen)
beschrieben.

### § 3.3.2 Website-Default und Varianten

Der Standard-Frame ist als `docs/_layouts/website-default.html` vorgesehen.
Seiten wählen ihn mit `layout: website-default` im Front Matter oder über
Config-Defaults, ohne `.html`. Includes sind Bausteine innerhalb des Layouts,
nicht der Mechanismus zur Layout-Auswahl.

Aktuell fehlt `website-default.html`: `default.html` nutzt `layout: website`;
`website.html` bindet Navbar, Content und Footer per Includes ein. Dommer nutzt
`layout: theme-dommer`. Die [Frame-Referenz](references/3_Docs/_layouts/Website.Default.html)
entspricht dem Dommer-Layout und trägt noch den alten Dateinamen.

Der Frame zeigt Navbar, optionalen Page-Header, `{{ content }}` im Main-Bereich
und Footer. Unterseiten nutzen denselben Page-Header mit ihren
Front-Matter-Werten.

`show_navbar`, `show_title` und `show_footer` steuern die drei Frame-Bereiche.
Alle sind standardmäßig aktiv; `false` blendet den jeweiligen Bereich aus.

Konfiguriere den Standard-Frame über seine Parameter, statt ihn umzubauen.
Erfordern Page-Header, Navbar oder Footer deutlich anderes HTML, nutze ein
Layout nach `website-<variantenname>.html`. Kunden- und Demo-Seiten wählen es
über `layout`.

## § 3.4 Reservierter SCSS-Bereich

Der zusätzliche SCSS-Bereich ist für User Styles in Zielrepositories
reserviert und in der Demo ungenutzt. Wird er unter `docs/` angelegt, dient er
nur als Beispiel für solche Ergänzungen.

## § 3.5 `_src/`

`docs/_src/` ist der feste Entry Point für JavaScript und Styles:
`index.ts` bindet das Theme-Paket und `style.scss` ein. Die Struktur wird
überarbeitet; dokumentiert ist hier nur der aktuelle Stand.

## § 3.6 `assets/`

`docs/assets/dist/` enthält die JavaScript- und CSS-Builds. Weitere Assets
unter `docs/assets/` sind Logos und Vendor-Dateien für Kundenprojekte, etwa
Leuffen-Logos unter `leuffen/`, sowie Testdaten und Testlogos. Unterscheide
Demo-Material von den im Kundenprojekt benötigten Assets.

## § 3.7 `themes/`

### § 3.7.1 Vollständige Demo-Websites

`docs/themes/[stylename]/` enthält vollständige Website-Bundles aus
Markdown-Seiten. Beispiel: `dommer/`. Ein Bundle umfasst „Start“, Leistungen,
optional Kontakt und weitere Unterseiten, mit Dateinamen wie im Listing oben.
Inhalte werden bereitgestellt oder auf ausdrückliche Nachfrage von einer
anderen Website übernommen und als Markdown erstellt.

### § 3.7.2 Auf das Bundle begrenzte Navigation

Setze im Front Matter jeder Demo-Seite `navigation_root: themes/dommer`
mit dem jeweiligen Bundle-Pfad. So bleiben mehrere Websites mit eigenen
Unterseiten und Navigationen parallel nutzbar, ohne die globale Navigation
umzustellen. Diese Eingrenzung dient nur Development und Demo, nicht den
Zielrepositories.

### § 3.7.3 Layout und sichtbare Frame-Bereiche

Vorgesehen ist `layout: website-default` gemäß § 3.3.2; andere Website-Layouts
sind bei Bedarf möglich. Gemeinsame Layout-Defaults stehen in `_config.yml`
(§ 3.8), Overrides im Front Matter der Seite.

Die `show_*`-Schalter gelten gemäß § 3.3.2. Startseiten mit eigenem Hero setzen
`show_title: false`, um einen zusätzlichen Page-Header zu vermeiden. Navbar
und Footer bleiben ohne Override sichtbar.

## § 3.8 `_config.yml`

`docs/_config.yml` enthält die Jekyll-Konfiguration. Setze gemeinsame Werte
wie `layout` je Theme-Verzeichnis unter `defaults` mit passendem Path-Scope.
Seiten können sie im Front Matter überschreiben. Bundle-Defaults dürfen
andere Demos nicht unbeabsichtigt beeinflussen.

`navigation_root` bleibt im Front Matter der Demo-Seiten (§ 3.7.2).
