---
name: migrate-to-themejs2
description: Migriert Cheche-artige ThemeJS1-/Webpack-Websites in die ThemeJS2-/Vite-Struktur und weist vollständig nach, dass Seiten, redaktionelle Texte, Links und Bilder unverändert übernommen wurden. Verwenden, wenn ein bestehendes Kunden-Repository auf die bei Osman2 eingesetzte ThemeJS2-Projektform gehoben werden soll; nicht für reine Theme-Entwicklung ohne Inhaltsmigration.
---

# Migrate to theme.js 2

Migriere die Website-Struktur, niemals den Inhalt. Jeder redaktionelle Text, jede Seite und jedes Bild aus dem Ausgangsstand muss im Ziel nachweisbar vorhanden sein. Eine technisch erfolgreiche Build-Ausgabe genügt nicht als Migrationsnachweis.

## Verbindliche Vorbereitung

1. Lies [references/migration-contract.md](references/migration-contract.md) vollständig.
2. Lies die Repository-Regeln des Quellprojekts und alle dadurch verpflichtenden Skills. Wenn Theme-, NTL- oder NTE-Code geändert werden muss, lies zusätzlich den im Zielprojekt geltenden `modify-theme`-Skill und die komponentenspezifischen Theming-Skills.
3. Arbeite auf einem eigenen Branch. Prüfe vor dem Kopieren, dass der Arbeitsbaum sauber ist und `.old/` noch nicht existiert. Existiert `.old/` bereits, verändere oder ersetze es nicht, sondern validiere seine Herkunft oder frage nach.
4. Kopiere alle von Git versionierten Dateien des Ausgangsstands mit Pfaden, Dateimodi und Symlinks nach `.old/`. Kopiere weder `.git/` noch unversionierte Abhängigkeiten wie `node_modules/` oder `vendor/`. Ab diesem Moment ist `.old/` schreibgeschützt und die alleinige Beweisquelle für den Ausgangsinhalt.
5. Erzeuge vor der ersten Transformation Inventar und Seitenzuordnung:

   ```bash
   python3 <skill-dir>/scripts/migration_audit.py snapshot \
     --source .old \
     --output .migration/themejs1-inventory.json
   python3 <skill-dir>/scripts/migration_audit.py init-map \
     --inventory .migration/themejs1-inventory.json \
     --output .migration/page-map.json
   ```

Committe `.old/`, `.migration/themejs1-inventory.json`, `.migration/page-map.json` und den späteren Prüfbericht gemeinsam mit der Migration, sofern der Nutzer nichts anderes verlangt. Sie machen die Vollständigkeit im Pull Request nachvollziehbar.

## Zielgerüst

Nutze [references/osman2-project-reference](references/osman2-project-reference) als maßgebliche Target-Struktur für die Verzeichnisnamen und Include-Pfade einer Cheche-Migration. Der Snapshot bildet den aktuellen Osman2-Stand ab; ein `_root/`-Stub aus `themejs2` dient ergänzend zur Prüfung von veröffentlichten Abhängigkeiten und Startfähigkeit, darf die dokumentierte Osman2-Verzeichnisstruktur aber nicht stillschweigend zurücksetzen. Lies dazu [references/template-provenance.md](references/template-provenance.md).

Übernimm nur Projektstruktur, Build-Konfiguration, Includes und Layoutmuster aus der Referenz. Verwende insbesondere `docs/_src/` als einzigen Vite-Quellordner sowie die Namensräume `docs/_includes/components/`, `docs/_includes/fragments/` und `docs/_includes/helpers/`; lege weder ein Root-`src/` noch die abgelösten Include-Verzeichnisse `do/`, `el/` und `part/` erneut als Target-Struktur an. Verwende die referenzierte `package.json` als Basis: Unter `dependencies` bleibt nur die veröffentlichte semantische Version von `@leuffen/themejs2`, aktive Workspaces und alte ThemeJS1-Abhängigkeiten werden nicht übernommen. Passe Paketname und Theme-Importe an und entferne nicht benötigte Osman-Varianten. Übernimm keine Demo-Seiten, Beispieltexte, Kundendaten, Logos oder generierten Bundles aus einer Vorlage. Behalte die im Quellprojekt vorhandenen Infrastrukturdateien, wenn sie nicht nachweislich mit ThemeJS2 unvereinbar sind. Setze in `.kick.yml` exakt `from: "ghcr.io/nfra-project/kickstart-flavor-jekyll:4.0"` und hinterlege `secrets: open_ai`; abweichende Image-Tags oder eine fehlende OpenAI-Secret-Deklaration dürfen nicht übernommen werden.

## Migration

1. Lies [references/cheche-v2-to-themejs2-map.md](references/cheche-v2-to-themejs2-map.md) und ordne jede Quelldatei bewusst einer Zieldatei zu.
2. Trage für jede vom Inventar erfasste Seite genau einen Zielpfad in `.migration/page-map.json` ein. Behalte den bestehenden Permalink beziehungsweise die veröffentlichte Route bei. Neue notwendige Indexseiten müssen mit Begründung unter `additional_pages` eingetragen werden.
3. Kopiere den redaktionellen Body jeder Seite aus `.old/`. Ändere ausschließlich Frontmatter, Layout-Steuerzeilen und strukturelles Markup, das ThemeJS2 erfordert. Formuliere weder Text um noch korrigiere Rechtschreibung, Zeichensetzung, Überschriften, Linktexte, Alt-Texte oder scheinbare inhaltliche Fehler.
4. Übersetze alte `use: #...`-Layouts nach ihrer Inhaltsrolle in vorhandene NTL-/NTE-Kompositionen. Wende keine pauschale Ersetzung an, wenn die Rolle nicht eindeutig ist. Direkte Kinder von `tj-content-pane` bleiben NTL-Layouts; Standardinhalt bleibt Kramdown-bearbeitbar. Setze im Markdown keine `.style-default`-Klasse: Das Framework ergänzt `style-default` automatisch, wenn keine andere `style-*`-Klasse vorhanden ist; gib deshalb nur abweichende `style-*`-Klassen explizit an.
5. Kopiere lokale Bilder und andere redaktionelle Medien bytegleich, vorzugsweise unter demselben veröffentlichten Pfad. Lasse externe Bild-URLs unverändert. Ersetze, optimiere, konvertiere oder komprimiere kein Bild ohne ausdrückliche Freigabe. Fasse jede zusammengehörige Folge von mindestens zwei Bildern in derselben Inhaltsrolle mit `{: layout="nte-image" }` zusammen; ergänze bei einer Bildgruppe in der Seitenspalte `.aside`. Dadurch übernimmt `nte-image` die Slider-Darstellung, während Reihenfolge, URLs und Alt-Texte unverändert bleiben.
6. Übernimm kundenbezogene Werte aus `docs/_data/`, insbesondere Kontaktdaten, Öffnungszeiten, Übersetzungen, Termin-, Karten- und Pagebuilder-URLs. Überführe die sichtbaren Öffnungszeiten zusätzlich zeilengetreu nach `site.data.openhours.table` und rendere sie mit `components/site/opening-hours.html`, statt eine kundenspezifische Tabelle im Seiteninhalt zu duplizieren. ThemeJS2-spezifische neue Schlüssel dürfen ergänzt werden; vorhandene redaktionelle Werte dürfen nicht stillschweigend geändert werden.
7. Ersetze das Root-Verzeichnis `src/` vollständig durch das referenzierte `docs/_src/` als Vite-Einstieg und ordne weiterhin benötigte projektspezifische Imports bewusst in `docs/_src/index.ts` beziehungsweise `docs/_src/style.scss` ein. Verwende die referenzierte `package.json` mit `@leuffen/themejs2` als einziger Runtime-Abhängigkeit und veröffentlichten semantischen Versionen; generiere `docs/assets/dist/` ausschließlich durch den aktuellen Build.
8. Entferne alte Laufzeitdateien erst, nachdem ihr Inhalt klassifiziert und entweder migriert oder ausdrücklich als generiert beziehungsweise technisch obsolet dokumentiert wurde. `.old/` bleibt erhalten.

Wenn eine Seite eine neue oder erweiterte NTL-/NTE-Komponente, einen komplexen Kramdown-Vertrag oder eine Änderung gemeinsamer Includes beziehungsweise Layoutpfade benötigt, halte vor dieser Erweiterung an und hole die dafür vorgeschriebene Freigabe ein. Diese Migrationsfreigabe genehmigt keine neue öffentliche Komponenten-API.

## Vollständigkeitsprüfung

Führe nach jeder größeren Migrationsetappe und zwingend vor dem Commit aus:

```bash
python3 <skill-dir>/scripts/migration_audit.py verify \
  --source .old \
  --target . \
  --inventory .migration/themejs1-inventory.json \
  --mapping .migration/page-map.json \
  --report .migration/verification-report.json
```

Der Befehl muss ohne Fehler enden. Er prüft die Unverändertheit von `.old/`, die vollständige und eindeutige Seitenzuordnung, veröffentlichte Routen, die Reihenfolge sichtbarer Textsegmente, Link- und Bildreferenzen, kundenbezogene Datenwerte sowie lokale Medien anhand von SHA-256. Die Prüfung ignoriert `.old/` im Ziel, damit die Sicherung fehlende Migrationsergebnisse nicht verdecken kann.

Führe anschließend mindestens `npm update` und `npm run build` aus. Prüfe die erzeugte Website zusätzlich seitenweise: alle inventarisierten Routen müssen rendern, lokale Medien dürfen nicht fehlen, Navigation und interne Links dürfen keine verwaisten Ziele enthalten. Halte bekannte, ausdrücklich genehmigte Abweichungen im Pull Request einzeln fest; schwäche dafür niemals das Inventar oder den Audit pauschal ab.

## Abschluss

Der Pull Request enthält den Migrationsumfang, den Quellstand, die Anzahl zugeordneter Seiten, das Ergebnis des Audits und der Builds sowie offene Freigaben. Melde die Migration nicht als vollständig, solange der Audit fehlschlägt, eine Seite ungeklärt ist, Inhalte nur in `.old/` vorkommen oder ein Bild nicht bytegleich beziehungsweise unter identischer externer URL nachgewiesen ist.
