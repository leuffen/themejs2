# Einheitlicher Footer-Vertrag für Nutzprojekte

## Ziel

Alle Kunden-Repositories verwenden dieselbe Footer-Struktur, dieselben Pfade und denselben Datenvertrag. Kundenwünsche werden durch standardisierte Daten und optionale Bereiche ausgedrückt, nicht durch kopierte Footer-Dateien, Kundennamen in Selectoren oder eigene Buildpipelines.

Der Footer bleibt Teil des Jekyll-Website-Rahmens. Er wird nicht als neue JavaScript-Web-Component implementiert. So bleiben Inhalt und Struktur auch ohne Node-, Sass- oder Vite-Toolchain änderbar.

## Beobachtungen aus den Pilotprojekten

| Projekt | Guter Ansatz | Problem für den Standard |
|---|---|---|
| Osman | aktuelle ThemeJS2-Utilities, semantische Bereiche und eingecheckte Assets | großer Inline-Style-Block, gemischte Osman-/Raven-Namen, hart codierte Links und Social-Platzhalter |
| Salchow | Kontakt, Info, Navigation und Öffnungszeiten stammen überwiegend aus Daten und Includes | parallele Footer-Dateien, dynamische Auswahl und per Seiten-URL wechselnder Credit |
| Raven | Footer-Inhalt und Rahmen sind getrennt | ThemeJS1-/Joda-Struktur und Markdown-Ausgabe sind nicht mit dem aktuellen Website-Rahmen vereinheitlicht |

Keine Pilotversion wird unverändert zum Standard. Der Ziel-Footer übernimmt die Datenorientierung von Salchow, die aktuelle Utility-Basis von Osman und die klare Trennung von Inhalt und Darstellung aus Raven.

## Architekturentscheidung

### Kein reiner Utility-Footer

Utilities sollen Raster, Flex-Verhalten, Abstände, Ausrichtung, Typografiegrößen und responsive Zustände ausdrücken. Ein ausschließlich aus Utilities gebauter Footer würde jedoch wiederkehrende Semantik, Zustände und Tokenzuordnungen im Markup verteilen und spätere Frameworkänderungen in jedes Kunden-Repository tragen.

### Keine neue Footer-Web-Component

Eine neue NTL-/NTE-Komponente würde JavaScript- und Package-Lifecycle in eine Struktur bringen, die Jekyll bereits statisch und zugänglich erzeugen kann. Strukturänderungen müssten dann unter Umständen erneut gebaut werden. Eine Komponente ist erst gerechtfertigt, wenn eigenständiges Verhalten, Shadow-DOM-Kapselung oder eine wiederverwendbare interaktive API benötigt wird.

### Empfohlener Hybrid

Der Standard besteht aus:

1. einem kanonischen semantischen Liquid-/HTML-Layout in \`docs/_layouts/60_footer.html\`;
2. vorhandenen Style Elements und Style Utils für die normale Komposition;
3. einem kleinen gemeinsamen \`.site-footer\`-Style-Vertrag für Zustände, die nicht sinnvoll als Utility ausgedrückt werden;
4. Theme- und Kundenwerten als CSS Custom Properties;
5. Inhalten und optionalen Bereichen aus \`docs/_data/defaults.yaml\`, \`docs/_data/general.yml\`, Navigationstags und bestehenden Includes;
6. gezielten Ausnahme-Overrides ausschließlich in \`docs/assets/site.css\` unter \`@layer website\`.

## Kanonische Struktur

Der DOM-Vertrag bleibt in allen Kunden-Repositories gleich:

\`\`\`text
footer.site-footer
├── .site-footer__primary
│   ├── .site-footer__navigation
│   ├── .site-footer__contact      (optional)
│   ├── .site-footer__description  (optional)
│   └── .site-footer__hours        (optional)
├── .site-footer__secondary
│   ├── .site-footer__legal
│   └── .site-footer__social       (optional)
└── .site-footer__credit
    ├── .site-footer__copyright
    ├── .site-footer__provider
    └── .site-footer__edit-link
\`\`\`

Die optionalen Bereiche werden nur gerendert, wenn ihre Konfiguration aktiv ist und verwertbare Daten vorhanden sind. Leere Überschriften, leere Links und \`href="#"\` werden nicht ausgegeben.

## Datenvertrag

Die gemeinsame Konfiguration liegt unter einem einzelnen \`footer\`-Knoten in \`docs/_data/defaults.yaml\`:

\`\`\`yaml
footer:
  show_navigation: true
  show_contact: true
  show_description: false
  show_openhours: true
  show_social: false
  show_credit: true
  credit:
    label: Webdesign für Ärzte
    href: https://leuffen.de
    logo: /assets/leuffen-logo-white.svg
\`\`\`

Regeln:

- Kundenname, Anschrift, Telefon, E-Mail, Domain und Kurzbeschreibung kommen aus \`general.yml\`.
- Öffnungszeiten kommen aus \`openhours.yml\` und dem vorhandenen Include.
- Navigation kommt aus den vereinbarten \`ptags\`; Links werden nicht im Layout hart codiert.
- Social Links werden als Daten mit echter URL geführt und nur bei vorhandener URL ausgegeben.
- Der Provider-Credit ist deterministisch. Er wechselt nicht abhängig von URL, Seitentitel, Zeit oder Zufall.
- Kundentexte, Logos und URLs stehen nie im gemeinsamen Style-Vertrag.
- Neue Optionen werden nur aufgenommen, wenn sie eine allgemeine, wiederverwendbare Entscheidung ausdrücken.

## Style-Vertrag

### Zuständigkeit der Utilities

Vorhandene Utilities steuern:

- Container und Raster;
- Flex- und Grid-Anordnung;
- responsive Richtung und Ausrichtung;
- Standardabstände;
- Schriftgrößen und Textausrichtung;
- sichtbare Standard-Border;
- einfache Linkdarstellung.

### Zuständigkeit der semantischen Footer-Styles

Der kleine gemeinsame Footer-Style darf nur wiederkehrende Footer-Verantwortung enthalten:

- Mapping der Footer-Tokens auf Hintergrund, Text, Border und Linkzustände;
- robuste Breiten- und Overflow-Regeln;
- fokussierbare Provider- und Edit-Links;
- konsistente Navigation ohne Listenmarker;
- notwendige semantische Zustände, die nicht durch vorhandene Utilities abgedeckt sind.

Er enthält keine Kundenfarben, keine festen Kundeninhalte, keine Kundennamen und keine Selektoren wie \`#footer-osman\` oder \`.raven-footer__*\`.

### Runtime-Tokens

Der gemeinsame Vertrag verwendet vorhandene semantische Tokens und eine kleine öffentliche Footer-Oberfläche:

\`\`\`css
.site-footer {
  --footer-background: var(--nt-body-secondary);
  --footer-text: var(--nt-text);
  --footer-border: var(--nt-border);
  --footer-link: currentColor;
  --footer-credit-background: color-mix(in srgb, var(--footer-background), #000 12%);
}
\`\`\`

Kundenspezifische Werte dürfen ohne Build in \`docs/assets/site.css\` überschrieben werden:

\`\`\`css
@layer website {
  :where(.theme-osman) .site-footer {
    --footer-background: var(--nt-body-secondary);
    --footer-credit-background: rgba(0, 0, 0, 0.18);
  }
}
\`\`\`

Neue Footer-Variablen werden nur ergänzt, wenn dieselbe Designentscheidung mehrere unabhängige Regeln steuert und nicht bereits durch ein vorhandenes \`--nt-*\`-Token dargestellt wird.

## Varianten und Ausnahmen

Der Standard verwendet zunächst genau eine Footer-Struktur. Die Konfiguration darf Bereiche ein- und ausblenden, aber weder andere Templates auswählen noch die DOM-Reihenfolge austauschen.

Eine spätere allgemeine Variante ist nur zulässig, wenn:

1. mindestens zwei plausible, kundenunabhängige Einsatzzwecke vorliegen;
2. Datenvertrag und DOM-Semantik gleich bleiben;
3. die Variante keine Kunden- oder Personennamen trägt;
4. der Unterschied nicht bereits mit Tokens, Utilities oder optionalen Bereichen ausdrückbar ist;
5. Desktop, Tablet und Mobile mit variierenden Textlängen und Linkanzahlen geprüft wurden.

Kundenspezifisches CSS ist ein dokumentierter Escape Hatch, kein normaler Konfigurationsweg. Wiederholt sich ein Override, wird es in den gemeinsamen Token-, Utility- oder Footer-Vertrag überführt.

## Unzulässige Muster

- parallele Dateien wie \`footer-osman.html\` oder \`footer-raven.html\`;
- Kundennamen in IDs, Klassen oder öffentlichen Optionen;
- mehrseitig dupliziertes Inline-CSS;
- hart codierte Kunden-Navigation;
- Social Links ohne echte Ziel-URL;
- zufällige oder URL-abhängige Credits;
- \`!important\` zur Überwindung der Theme-Spezifität;
- neue Footer-Komponenten nur für visuelle Unterschiede;
- Änderungen an kompiliertem Dist-CSS als dauerhafte Kundenanpassung.

## Migration der Pilotkunden

### Osman

- bestehende semantische Inhalte auf \`.site-footer__*\` umbenennen;
- Raven-Reste und ungenutzte Regeln entfernen;
- Navigation und Social Links aus Daten erzeugen;
- großen Inline-Style-Block durch Utilities und gemeinsamen Style-Vertrag ersetzen;
- Farben in \`docs/assets/site.css\` ablegen.

### Salchow

- dynamische \`use_footer\`-Dateiauswahl entfernen;
- Default- und Osman-Footer auf die kanonische Struktur zusammenführen;
- URL-abhängige Credit-Auswahl durch eine feste Datenkonfiguration ersetzen;
- vorhandene Kontakt-, Öffnungszeiten- und Navigations-Includes weiterverwenden.

### Raven

- Inhalt aus \`footer.md\` in denselben Daten- und Include-Vertrag überführen;
- Joda-Wrapper bei der ThemeJS2-Migration durch die kanonische Layoutstruktur ersetzen;
- Raven-Farben als Runtime-Tokens ausdrücken;
- keine Raven-spezifische Footer-Datei übernehmen.

## Prüfung vor Einführung als Standard

Mindestens zu prüfen sind:

- alle optionalen Bereiche jeweils ein- und ausgeschaltet;
- fehlende Telefonnummer, E-Mail, Social Links oder Öffnungszeiten;
- kurze und lange Praxisnamen;
- wenige und viele Navigationslinks;
- lange deutsche Linkbezeichnungen;
- Desktop-, Tablet- und Mobile-Zustände;
- Tastaturfokus und sinnvolle Landmark-/ARIA-Beschriftung;
- ausreichender Farbkontrast;
- keine leeren Links oder Überschriften;
- Änderungen an \`general.yml\`, \`defaults.yaml\`, Layout und \`site.css\` ohne Vite-Build;
- visuelle Gleichheit der gemeinsamen Footer-Struktur in \`docs\` und \`_root\`.

## Einführungsreihenfolge

1. Vertrag und kanonisches Markup in ThemeJS2 und \`_root\` umsetzen.
2. Osman als Referenz migrieren und mit variierenden Daten prüfen.
3. Salchow auf denselben Footer reduzieren.
4. Raven im Zuge der ThemeJS2-Migration übernehmen.
5. Erst nach erfolgreicher Gegenprüfung neue Kunden aus der Vorlage erzeugen.
