# Einheitlicher Footer-Vertrag für Nutzprojekte

## Ziel

Der Footer ist bewusst eine kundeneigene HTML-Datei. Die Vorlage liefert gut lesbares Ausgangs-Markup und kleine Standard-Includes; sie versucht nicht, alle Kundenvarianten über Konfigurationsschalter abzubilden. Änderungen an Aufbau, Reihenfolge, Texten und Darstellung bleiben deshalb direkt in `docs/_layouts/30_footer.html` sichtbar und ohne Node-, Sass- oder Vite-Build möglich.

Der Footer wird nicht als JavaScript-Web-Component implementiert. Die Originaldateien der Vorlage bleiben im ThemeJS2-Repository verfügbar, sodass ein Projekt einzelne Abschnitte oder den vollständigen Ausgangsstand bei Bedarf zurückkopieren kann.

## Beobachtungen aus den Pilotprojekten

| Projekt | Guter Ansatz | Problem für den Standard |
|---|---|---|
| Osman | aktuelle ThemeJS2-Utilities, semantische Bereiche und eingecheckte Assets | großer Inline-Style-Block, gemischte Osman-/Raven-Namen, hart codierte Links und Social-Platzhalter |
| Salchow | Kontakt, Info, Navigation und Öffnungszeiten stammen überwiegend aus Daten und Includes | parallele Footer-Dateien, dynamische Auswahl und per Seiten-URL wechselnder Credit |
| Raven | Footer-Inhalt und Rahmen sind getrennt | ThemeJS1-/Joda-Struktur und Markdown-Ausgabe sind nicht mit dem aktuellen Website-Rahmen vereinheitlicht |

Keine Pilotversion wird unverändert zum Standard. Der Ziel-Footer übernimmt die kleinen Daten-/Include-Bausteine von Salchow, die aktuelle Utility-Basis von Osman und die klare Trennung von Inhalt und Darstellung aus Raven. Die kundenspezifischen Pilotabschnitte bleiben als Migrationshinweise erhalten.

## Architekturentscheidung

### Explizites HTML statt Optionsmodell

`docs/_layouts/30_footer.html` enthält das vollständige Footer-HTML. Ob Navigation, Adresse, Öffnungszeiten, Social Links, Beschreibung oder Credit vorkommen und in welcher Reihenfolge sie stehen, entscheidet das Markup selbst.

Es gibt insbesondere keine Footer-Schalter wie diese:

```yaml
footer:
  show_navigation: true
  show_contact: true
  show_openhours: false
```

Solche Optionen bilden die vielen Kundenwünsche nur indirekt ab und verteilen eine einfache Änderung auf Daten und Template. Wer einen Bereich nicht benötigt, entfernt den betreffenden HTML-Block oder Include-Aufruf. Wer eine andere Anordnung benötigt, verschiebt ihn im Footer.

### Standard-Includes als kleine Bausteine

Wiederkehrende Datenausgabe wird nicht kopiert, sondern über fokussierte Includes erzeugt. Die Includes besitzen keine Verantwortung für das gesamte Footer-Layout und treffen keine Entscheidung darüber, ob sie erscheinen.

Vorgeschlagene Struktur:

```text
docs/_includes/site-footer/
├── address.html
├── opening-hours.html
├── navigation.html
├── links.html
├── social-links.html
└── credit.html
```

| Include | Verantwortung | Typische Parameter |
|---|---|---|
| `site-footer/address.html` | Name, Anschrift, Telefon, E-Mail und Maps-Link einer Adresse ausgeben | `address` optional; ohne Angabe `default` |
| `site-footer/opening-hours.html` | vorhandene Öffnungszeiten semantisch ausgeben | `address` optional; ohne Angabe `default` |
| `site-footer/navigation.html` | Haupt- oder Footer-Navigation aus vereinbarten Navigationstags ausgeben | `tag` |
| `site-footer/links.html` | eine benannte, geordnete Linkgruppe ausgeben | `links` oder `tag` |
| `site-footer/social-links.html` | vorhandene Social-Ziele ohne Platzhalter ausgeben | `links` optional |
| `site-footer/credit.html` | festen Provider-/Copyright-Block ausgeben | konkrete Werte oder Datenobjekt |

Die Namen sind absichtlich nach ihrem Inhalt und nicht nach einem Kunden oder einer Position wie `column-2` gewählt. Ein Include gibt nur seinen Baustein aus; Container, Überschriften, Reihenfolge und Klassen des Gesamt-Footers stehen im Layout.

Beispiel:

```liquid
<footer class="site-footer">
  <div class="site-footer__primary">
    <section class="site-footer__address">
      <h2>Kontakt</h2>
      {% include site-footer/address.html %}
    </section>

    <section class="site-footer__hours">
      <h2>Öffnungszeiten</h2>
      {% include site-footer/opening-hours.html %}
    </section>

    <nav class="site-footer__navigation" aria-label="Weitere Informationen">
      {% include site-footer/links.html tag="footer" %}
    </nav>
  </div>
</footer>
```

Für eine Nebenstelle wird nur der Parameter geändert:

```liquid
{% include site-footer/address.html address="branch-hamburg" %}
{% include site-footer/opening-hours.html address="branch-hamburg" %}
```

Ist `address` nicht angegeben, verwendet das Include `site.data.general.addresses.default`. Ein unbekannter expliziter Schlüssel soll nicht stillschweigend auf `default` zurückfallen, damit Tippfehler und fehlende Daten während der Prüfung sichtbar werden.

## Datenvertrag für mehrere Adressen

`docs/_data/general.yml` enthält eine benannte Map unter `addresses`. `default` ist der verbindliche Standarddatensatz; weitere Einträge dürfen nach Standort oder Zweck benannt werden.

```yaml
name: Gemeinschaftspraxis Beispiel

addresses:
  default:
    label: Hauptpraxis
    name: Gemeinschaftspraxis Beispiel
    street: Musterstraße 12
    postal_code: "12345"
    city: Musterstadt
    phone: +49 40 123456
    email: praxis@example.de
    maps_url: https://maps.google.com/?q=Musterstraße+12+Musterstadt
    opening_hours: default

  branch-hamburg:
    label: Zweigpraxis Hamburg
    name: Gemeinschaftspraxis Beispiel
    street: Nebenweg 3
    postal_code: "20095"
    city: Hamburg
    phone: +49 40 654321
    email: hamburg@example.de
    maps_url: https://maps.google.com/?q=Nebenweg+3+Hamburg
    opening_hours: branch-hamburg
```

Telefon, E-Mail und `maps_url` gehören zum jeweiligen Adressdatensatz, weil sie sich je Standort unterscheiden können. `opening_hours` referenziert optional einen Datensatz in `openhours.yml`; fehlt die Referenz, verwendet das Öffnungszeiten-Include denselben Schlüssel wie die Adresse und bei fehlendem Include-Parameter `default`.

### Warum keine Jekyll Collection als Standard

Eine Collection wäre technisch möglich:

```text
docs/_locations/
├── default.md
└── branch-hamburg.md
```

Jede Datei könnte die strukturierten Werte im Front Matter und zusätzlich längeren Standortinhalt enthalten. Das lohnt sich, wenn Standorte eigene Seiten, längere Beschreibungen, Bilder, Sortierung oder individuelle Veröffentlichungslogik benötigen.

Für reine Footer- und Kontaktdaten ist die Map in `general.yml` einfacher: alle Stammdaten sind an einer Stelle sichtbar, `addresses.default` ist direkt adressierbar und Includes benötigen keine `where`-/`find`-Logik über Dokumente. Deshalb bleibt `general.yml` der Standard. Eine Collection ist eine spätere projektspezifische Erweiterung, nicht Teil des gemeinsamen Footer-Vertrags.

## HTML- und Style-Vertrag

### Klassenkomponenten dürfen BEM verwenden

Die Regel für native HTML-Defaults und NTL-/NTE-Komponenten wird für Klassenkomponenten ausdrücklich ergänzt: Semantische Light-DOM-Blöcke wie der Site Footer dürfen BEM (Block, Element, Modifier) verwenden, wenn die Klassen direkt auf normale HTML-Elemente zielen.

Der gemeinsame Block heißt `.site-footer`; Elemente heißen beispielsweise `.site-footer__primary`, `.site-footer__address`, `.site-footer__hours` und `.site-footer__credit`. Allgemeine Varianten dürfen als Modifier wie `.site-footer--compact` formuliert werden. Kunden- oder Personennamen sind keine Modifier.

### Ablage im Theme

Der gemeinsame Basisvertrag liegt unter `theme/<theme>/classes/`, für Osman zunächst in genau einer Datei:

```text
theme/osman/classes/_site-footer.scss
```

Eine einzelne Datei ist zunächst leichter auffindbar und hält den vollständigen Block zusammen. Sie wird erst in mehrere Partials beziehungsweise einen Unterordner aufgeteilt, wenn eigenständig wiederverwendbare Teilblöcke entstehen oder die Datei so groß wird, dass die Trennung die Wartung tatsächlich verbessert. Eine Aufteilung nur nach DOM-Abschnitten ist kein Ziel.

Das Footer-HTML referenziert diese Klassen direkt. Das Theme-SCSS enthält nur wiederverwendbare Basisregeln, Zustände und Token-Mappings. Es enthält keine Kundeninhalte, Kundennamen oder einmaligen Layoutwerte.

### Lokale Kundenanpassungen bleiben lokal

Header/Navbar und Footer müssen häufig von Hand angepasst werden. Alle für die konkrete Instanz wichtigen Werte sollen deshalb im jeweiligen HTML direkt auffindbar sein. Ein einmaliger Wert kann über eine dokumentierte CSS Custom Property direkt am Element stehen:

```html
<footer class="site-footer" style="--site-footer-columns: 3; --site-footer-gap: 2rem">
```

Größere kundenspezifische Regeln dürfen als übersichtlicher, lokal begrenzter `<style>`-Block beim Layout stehen, wenn dadurch die Änderung eindeutig auffindbar bleibt. Wiederverwendbare Basisregeln gehören dagegen in `_site-footer.scss`. Gemessenes Critical CSS kann alternativ über ein Style-Include im `10_blank`-Layout eingebettet werden; ohne nachgewiesenen Ladezeitvorteil bleibt externes, cachebares CSS der Standard.

## Kanonische Ausgangsstruktur

Die Vorlage liefert einen sinnvollen Ausgangspunkt, aber keinen unveränderlichen DOM-Vertrag:

```text
footer.site-footer
├── .site-footer__primary
│   ├── .site-footer__navigation
│   ├── .site-footer__address
│   ├── .site-footer__description
│   └── .site-footer__hours
├── .site-footer__secondary
│   ├── .site-footer__legal
│   └── .site-footer__social
└── .site-footer__credit
```

Kundenprojekte dürfen Bereiche entfernen, ergänzen und umordnen. Die Standard-Includes und BEM-Benennung halten die wiederkehrenden Teile trotzdem verständlich. Leere Überschriften, leere Links und `href="#"` werden nicht ausgegeben.

## Zuständigkeit der Styles

Vorhandene Utilities steuern gewöhnliche Raster-, Flex-, Abstands-, Typografie- und Ausrichtungsaufgaben. `_site-footer.scss` ist für den wiederverwendbaren Blockvertrag zuständig, insbesondere für:

- Mapping der Footer-Tokens auf Hintergrund, Text, Border und Linkzustände;
- robuste Breiten- und Overflow-Regeln;
- fokussierbare Provider- und Edit-Links;
- konsistente Navigation ohne Listenmarker;
- dokumentierte Custom Properties für direkt am HTML gesetzte Instanzwerte.

Kundenfarben und einmalige Maße stehen nah am kundenspezifischen Layout oder in `docs/assets/site.css`, wenn sie mehrere Seitenrahmen betreffen. Ein typischer Basisvertrag kann so beginnen:

```css
.site-footer {
  --site-footer-background: var(--nt-body-secondary);
  --site-footer-text: var(--nt-text);
  --site-footer-border: var(--nt-border);
  --site-footer-link: currentColor;
  --site-footer-columns: 3;
  --site-footer-gap: var(--nt-space-lg);
}
```

Neue Variablen werden nur ergänzt, wenn sie eine verständliche Anpassungsstelle am Block bilden. Einmalige Werte dürfen direkt im Layout stehen, statt eine weitere SCSS-Zwischenschicht zu erzeugen.

## Unzulässige Muster

- `show_navigation`, `show_contact` oder ähnliche Footer-Schalter in `defaults.yaml`;
- dynamische Auswahl paralleler Kunden-Footer;
- Kundennamen in IDs, Klassen oder öffentlichen Optionen;
- über mehrere Dateien verstreute einmalige Header-/Footer-Werte;
- hart codierte Kunden-Navigation innerhalb eines gemeinsamen Includes;
- Social Links ohne echte Ziel-URL;
- zufällige oder URL-abhängige Credits;
- `!important` zur Überwindung der Theme-Spezifität;
- neue JavaScript-Komponenten nur für visuelle Unterschiede;
- Änderungen an kompiliertem Dist-CSS als dauerhafte Kundenanpassung.

## Migration der Pilotkunden

### Osman

- bestehende semantische Inhalte auf `.site-footer__*` umbenennen;
- Raven-Reste und ungenutzte Regeln entfernen;
- wiederkehrende Adress-, Öffnungszeiten- und Linkausgabe auf die Standard-Includes umstellen;
- großen Inline-Style-Block auf einen kleinen lokalen Kundenblock und `_site-footer.scss` reduzieren;
- einmalige Werte direkt beim Footer-Markup sichtbar halten.

### Salchow

- dynamische `use_footer`-Dateiauswahl entfernen;
- Default- und Osman-Footer zu einem direkt editierbaren `30_footer.html` zusammenführen;
- URL-abhängige Credit-Auswahl durch einen festen Include-Aufruf ersetzen;
- vorhandene Kontakt-, Öffnungszeiten- und Navigations-Includes an die neue Benennung anpassen.

### Raven

- Inhalt aus `footer.md` in das explizite `30_footer.html` und die Standard-Includes überführen;
- Joda-Wrapper bei der ThemeJS2-Migration durch die dreistufige Layoutkette ersetzen;
- wiederverwendbare Basisregeln als `.site-footer`-BEM-Block ablegen;
- keine Raven-spezifische Footer-Auswahloption übernehmen.

## Prüfung vor Einführung als Standard

Mindestens zu prüfen sind:

- Footer mit frei entfernbaren und umgeordneten HTML-Bereichen;
- Default-Adresse ohne Include-Parameter und mindestens eine benannte Nebenstelle;
- fehlende Telefonnummer, E-Mail, Maps-URL oder Öffnungszeiten;
- kurze und lange Praxisnamen;
- wenige und viele Navigationslinks;
- Desktop-, Tablet- und Mobile-Zustände;
- Tastaturfokus und sinnvolle Landmark-/ARIA-Beschriftung;
- ausreichender Farbkontrast;
- keine leeren Links oder Überschriften;
- Änderungen an `general.yml`, Layout und lokalem CSS ohne Vite-Build;
- verständliche Rückkopierbarkeit aus der ThemeJS2-Vorlage.

## Einführungsreihenfolge

1. Vertrag, Include-Schnittstellen und Ausgangs-Markup in ThemeJS2 und `_root` festlegen.
2. `.site-footer` zunächst als eine Datei unter `theme/<theme>/classes/` umsetzen.
3. Osman als Referenz migrieren und mit mehreren Adressen prüfen.
4. Salchow auf denselben Include-Vertrag reduzieren.
5. Raven im Zuge der ThemeJS2-Migration übernehmen.
6. Erst nach erfolgreicher Gegenprüfung neue Kunden aus der Vorlage erzeugen.
