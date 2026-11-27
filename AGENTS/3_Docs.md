# § 3 Docs-Verzeichnis

`docs/` ist die Beispielwebsite für ThemeJS2. GitHub Pages rendert und
veröffentlicht sie für Entwickler, die Themes, Komponenten und Varianten im
Browser vergleichen. Dieselben Dateien sind die Basis der lokalen Demo.
Der Einstieg `docs/index.md` ist unter [localhost:4000](http://localhost:4000/)
erreichbar, sobald die lokale Entwicklung läuft.

Halte `docs/` in Struktur und Verwendung möglichst nah an den späteren
Zielrepositories der Kundenprojekte. Verwende für dieselben Aufgaben dieselben
Layouts, Komponenten, Datenquellen und Front-Matter-Felder.
Demo-spezifische Inhalte und Pfade gehören in die Beispielseiten oder ihre
Konfiguration. Verlinke veröffentlichte Beispiele auf der Startseite direkt
mit ihrem Dateipfad als Beschriftung. Ihre URLs folgen dem Dateinamen und
Verzeichnis.

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

Der Standard-Webseitenrahmen soll unter
`docs/_layouts/website-default.html` liegen. Seiten wählen ihn im
Front Matter mit `layout: website-default`, also ohne die Endung `.html`.
Dasselbe Layout-Feld kann in den Defaults der `_config.yml` gesetzt werden.
Includes sind die innerhalb eines Layouts eingebundenen Bausteine, nicht
der Auswahlmechanismus für die Layout-Datei.

Aktuell ist `website-default.html` noch nicht angelegt: `default.html`
verweist über `layout: website` auf `website.html`, das Navbar, Inhalt und
Footer über Includes einbindet. Die Dommer-Demo verwendet dagegen
`layout: theme-dommer`. Die
[vorhandene Rahmenreferenz](references/3_Docs/_layouts/Website.Default.html)
übernimmt dieses Dommer-Layout und trägt noch den alten Dateinamen.
Die vorgesehene Benennung lautet kleingeschrieben `website-default.html`.

Der Rahmen gibt
zuerst die Navbar und bei Bedarf den Page-Header aus. Unterseiten
verwenden denselben Page-Header-Aufbau mit den Werten ihres Front Matter.
Danach setzt das Layout `{{ content }}` in den Hauptbereich ein.
Der Footer schließt die Seite ab.

Die Front-Matter-Schalter `show_navbar`, `show_title` und `show_footer`
steuern Navbar, Page-Header und Footer. Sie sind standardmäßig aktiv.
Setze den jeweiligen Schalter auf `false`, um den Bereich auszublenden.

Verwende den Standardrahmen unverändert und konfiguriere seine Bereiche
über die vorgesehenen Parameter. Erfordert ein deutlich anderer Page-Header,
Footer oder eine andere Navbar eigenes HTML, lege ein Website-Layout nach
dem Muster `website-<variantenname>.html` an. Die betreffenden Kunden-
oder Demo-Seiten wählen diese Variante über ihr `layout`-Feld.

## § 3.4 Reservierter SCSS-Bereich

Ein zusätzlicher SCSS-Bereich ist für benutzerdefinierte Styles in den
Zielrepositories reserviert. In der Demo wird er derzeit nicht genutzt.
Wird er unter `docs/` angelegt, dient er ausschließlich dazu, solche
benutzerdefinierten Ergänzungen beispielhaft zu zeigen.

## § 3.5 `_src/`

`docs/_src/` ist der feste Einbindepunkt für JavaScript und Styles.
`index.ts` bindet das Theme-Paket und `style.scss` ein. Dieser Bereich
beschreibt den aktuellen Stand; seine Struktur wird sich demnächst ändern.
Die geplante Umstrukturierung wird hier noch nicht vorweggenommen.

## § 3.6 `assets/`

`docs/assets/` enthält die statischen Assets der Website. Der Build legt
kompiliertes JavaScript und CSS unter `docs/assets/dist/` ab.

Daneben liegen hier Logos und herstellerspezifische Assets, die auch in
Kundenprojekten verwendet werden, etwa die Leuffen-Logos unter `leuffen/`.
Weitere Dateien können als Demo- und Testmaterial dienen, beispielsweise
Testlogos und Testdaten. Diese Demo-Inhalte sind von den für Kundenprojekte
benötigten Assets zu unterscheiden.

## § 3.7 `themes/`

### § 3.7.1 Vollständige Demo-Websites

`docs/themes/` enthält pro Kunde oder Theme ein eigenes Verzeichnis mit
einem vollständigen Demo-Website-Bundle. Bisher dient `dommer/` als Beispiel.
Ein Bundle umfasst mehrere Markdown-Seiten: normalerweise eine Startseite
mit dem Namen „Start“, eine Leistungsseite und gegebenenfalls eine
Kontaktseite sowie weitere Unterseiten.

Die Inhalte werden bereitgestellt oder auf ausdrückliche Nachfrage von
einer anderen Website übernommen und als Markdown-Seiten erstellt.

### § 3.7.2 Auf das Bundle begrenzte Navigation

Die Seiten setzen im YAML-Front-Matter `navigation_root` auf das eigene
Theme-Verzeichnis, beispielsweise `themes/dommer`. Das Feld dient hier
nur der Entwicklungs- und Demo-Umgebung: Es begrenzt die Navigation auf
das jeweilige Bundle, statt alle Demo-Seiten anzuzeigen.

So lassen sich mehrere vollständige Websites mit eigenen Unterseiten und
Navigationen parallel demonstrieren, ohne die gemeinsame Navigation für
jedes Bundle erneut umstellen zu müssen. Diese zusätzliche Eingrenzung
ist nicht für die späteren Zielrepositories vorgesehen.

### § 3.7.3 Layout und sichtbare Rahmenbereiche

Die Seiten wählen ihren Website-Rahmen über das Feld `layout`.
Regulär ist `layout: website-default` für den Standardrahmen
`docs/_layouts/website-default.html` gemäß § 3.3.2 vorgesehen; abweichende
Website-Layouts werden bei Bedarf gewählt. Gemeinsame
Layout-Vorgaben pro Theme-Verzeichnis können über die Defaults in
`_config.yml` gesetzt werden, einzelne Seiten können sie überschreiben.

`show_navbar`, `show_title` und `show_footer` steuern die sichtbaren
Rahmenbereiche wie in § 3.3.2 beschrieben. Eine Startseite mit eigenem
Hero setzt im Front Matter ausdrücklich `show_title: false`, damit der
Rahmen keinen zusätzlichen Page-Header ausgibt. Navbar und Footer bleiben
ohne abweichende Einstellung sichtbar.

## § 3.8 `_config.yml`

`docs/_config.yml` enthält die Jekyll-Konfiguration der Demo. Unter
`defaults` können für jedes Theme-Verzeichnis eigene Vorgaben über einen
Pfad-Scope gesetzt werden, insbesondere das gemeinsame `layout` des
Website-Bundles. Die Seiten übernehmen diese Vorgaben und können sie im
eigenen Front Matter gezielt überschreiben.

Die bundlebezogene Eingrenzung mit `navigation_root` bleibt im Front Matter
der Demo-Seiten gemäß § 3.7.2. Konfigurationsvorgaben für ein Bundle dürfen
andere Demo-Websites nicht unbeabsichtigt verändern.
