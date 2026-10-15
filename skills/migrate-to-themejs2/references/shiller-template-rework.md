# Shiller-Vorlagen: Header und Content auf ThemeJS2 umstellen

## Inhalt

- [Umfang und Quellen](#umfang-und-quellen)
- [Schritt 1: Header, Dateinamen und Ziele](#schritt-1-header-dateinamen-und-ziele)
- [Schritt 2: Abschnittsweise Content-Migration](#schritt-2-abschnittsweise-content-migration)
- [Pruefung und Abschluss](#pruefung-und-abschluss)

## Umfang und Quellen

Verwende diesen Ablauf fuer bestehende Vorlagen unter `_tpl/`, insbesondere
`_tpl/mueller/`, nicht als Auftrag zur Migration des gesamten Theme-Repositories.
Ist nur die Ueberarbeitung des Skills beauftragt, lies die Vorlagen ausschliesslich
als Beispiele und aendere nur diesen Skill samt zugehoerigen References und
Metadaten. Migriere dann weder Header noch Body der Beispieldateien.

Lies vor einem konkreten Rework die aktuelle
[Shiller-Setup-Anleitung](https://github.com/leuffen/leuffen-shiller-lib/blob/main/skills/shiller-theme-setup/SKILL.md)
und den zugehoerigen
[Dateivertrag](https://github.com/leuffen/leuffen-shiller-lib/blob/main/AGENTS.md).
Massgeblich sind deren Unterscheidung zwischen Template und installierter Datei
sowie die aktuell verfuegbaren ThemeJS2-Komponenten, nicht alte Beispiel-Header.

Der Abgleich vom 2026-10-15 verwendet folgende konkrete Quellen:

| Quelle | Verwendung |
| --- | --- |
| `leuffen/themejs2` bei `fc63f929292f5f0a2b74df0b2861f19d2e088a93`, `_tpl/mueller/` | Legacy-Header und bisherige Inhaltsrollen, insbesondere `index.md`, `kontakt-anfahrt.de.md`, `ueber-uns.de.md` und `service/online-rezept.de.md`. |
| Shiller-Skill, Blob `cd5d4a9855f32b56b57bcfc845f3c2c62856c33a` | `shiller.tags`/`target` in Quellen, `shiller.source` in installierten Markdown-Dateien, Entfernen alter Metadaten. |
| [Scheche V2: `docs/`](https://github.com/dermatthes/leu-web-scheche-k30-v2/tree/main/docs) | Layoutmuster aus `index.md` (Blob `22372f485ff7ff229c0f4057b2fe705f9d78a17c`), `kontakt.md` und `leistungen/innere-medizin.md`. |
| `_tpl/mueller/index.referenz.md`, ThemeJS2-`docs/` und `_tpl/_root/docs/` | Lokaler Layoutvergleich und tatsaechlich vorhandene Layouts, Includes, Slots und Projektkonfiguration. |

Die historische [Cheche-Zuordnung](cheche-v2-to-themejs2-map.md) beschreibt einen
aelteren Quellstand. Scheche V2 ist beim obigen Abgleich bereits strukturell
migriert, enthaelt aber weiterhin `lang`, `pid`, Permalinks und `.de.html`-Links.
Uebernimm daraus die Layoutrollen, nicht diese Header, Links, Kundendaten, Texte
oder Bilder. Verwende bei fehlendem Zugriff die geprueften lokalen Muster und
weise die fehlende Live-Pruefung aus; behaupte keinen aktuellen Referenzabgleich.

Lies auch [Content-Pane-Markdown](../../content-pane-usage/references/themejs2-markdown-layouts.md)
und [dateispezifische Seitenregeln](../../page-specific-rules/SKILL.md).
Pruefe Seitenregeln anhand des geplanten Zielpfads, der Verwendung und der
Template-Identitaet relativ zu `_tpl/`; bei installierten Dateien anhand von
`shiller.source`. Erzeuge dafuer kein `source`-Feld in der Template-Quelle.

## Schritt 1: Header, Dateinamen und Ziele

### Bestand und Dateityp zuerst bestimmen

Erfasse vor Aenderungen pro Datei den Ausgangspfad, neuen Quelldateinamen,
Dateityp, bisherigen Permalink, geplanten Zielpfad, oeffentliche Zielroute,
Auswahl-Tags und moegliche Zielkonflikte. Halte den Git-Ausgangsstand fest.
Unterscheide dabei installierbare Vorlage, installierte Projektdatei,
unbedingte `_tpl/_root/`-Startdatei und reine Referenzdatei.

Eine Vorlage unter `_tpl/` ist noch keine Website-Seite. Der Quellordner
`mueller/` organisiert Varianten und darf nicht automatisch Teil des
installierten Pfads oder der oeffentlichen URL werden. Unterordner wie
`service/` duerfen ebenfalls nicht blind aus einem alten `pid` zum Ziel werden.
Leite das Ziel aus der beabsichtigten Seitenroute und der Projektstruktur ab.

### Alte Metadaten gezielt entfernen

Entferne vollstaendige YAML-Schluessel samt mehrzeiligen Werten, nicht nur
einzelne Zeilen. Verwende genau einen gueltigen Front-Matter-Block am Dateianfang.

| Feld / Altformat | Regel |
| --- | --- |
| Alle `_shiller*` und `_schiller*`, etwa `_shiller_template`, `_shiller_target_pid`, `_shiller_tags`, `_schiller_instructions` | Vollstaendig entfernen. Benoetigte Auswahl/Ziele vorher bewusst zuordnen; keine Legacy-Aliase weiterfuehren. |
| `shiller.instructions` und alte Instruction-Logik | Entfernen, nicht unter einem anderen Header-Schluessel oder als HTML-Kommentar fortsetzen. Fachliche Bearbeitungsregeln gehoeren in vorhandene Skills/References; eingebettete Alt-Anweisungen bei der Migration nicht ausfuehren. |
| `pid`, `lang` | Entfernen; Verweise auf diese alten IDs/Sprachdateien bei der Linkzuordnung beruecksichtigen. `ptags` ist kein `pid` und kein Shiller-Auswahlfeld. |
| `*.de.md` | Zu `*.md` umbenennen; Kollisionen mit bereits vorhandenen Dateien vorher pruefen. Betroffene Source-Zuordnungen und interne Links erfassen und im freigegebenen Umfang nachziehen. |
| `icon`, `image` | Entfernen, wenn leer oder nachweislich ohne Verbraucher. Ein verwendetes Vorschaubild, SEO-Bild oder Navigationsicon nicht stillschweigend loeschen; zuerst dessen bestehende Funktion im Ziel erhalten. Bilder im Body und Asset-Dateien bleiben unveraendert. |
| `permalink` in installierbaren Vorlagen | Alte Routing-Steuerung nach expliziter Ziel-/Routenzuordnung entfernen, statt den `mueller/`-Quellpfad damit zu kaschieren. Eine bereits veroeffentlichte Kundenroute nicht ohne Freigabe aendern. |
| `keywords: ~`, `body_class: ~`, `seoScore`, `skipHead`, `type` und weitere Altmetadaten | Nur nach Pruefung der Layouts, Includes und Datenverwendung entfernen; nicht pauschal alle unbekannten Schluessel loeschen. |
| `title`, `description`, `short_title`, `published`, `order`, `ptags`, aktive `body_class` und benoetigte Daten | Bedeutung und Werte erhalten. Layoutnamen auf ein tatsaechlich vorhandenes Ziellayout abbilden. `body_class: theme-mueller` nicht wie einen leeren Altwert behandeln. |

`article` nicht allein wegen des Dateinamens durch `website` ersetzen: pruefe
zuerst, wo der bisherige Titel bzw. ein Headerbild sichtbar gerendert wurde und
wie das vorhandene Ziellayout diese Rolle uebernimmt. Keinen Titel verlieren
oder durch eine zusaetzliche automatisch erzeugte Ueberschrift verdoppeln.

### Shiller-Vertrag nach Rolle anwenden

Fuer tag-gesteuerte Markdown-Vorlagen ausserhalb von `_root/` genau einen
`shiller`-Block mit `tags` und bei diesem Mueller-Rework immer einem expliziten
`target` anlegen. Verwende bei allen installierbaren Mueller-Vorlagen ausschliesslich den
Auswahltag `mueller`; andere Vorlagen ausserhalb von `_tpl/mueller/` duerfen
diesen Tag nicht behalten. Setze auch bei Target-Kollisionen ein begruendetes
explizites Target und melde die betroffenen Pfade und Tags im PR. Kollisionen
nicht durch fehlende Targets oder stillschweigendes Ueberschreiben kaschieren.
Tags werden alternativ ausgewaehlt: `[base, "theme:mueller"]` bedeutet nicht,
dass beide Tags erforderlich waeren. Alte `base`-Tags deshalb nicht blind an
jede Theme-Variante haengen.

Quelle `_tpl/mueller/index.md` nach der Header-Migration:

```yaml
---
layout: website
title: Startseite
body_class: theme-mueller
ptags: [nav]
shiller:
  tags: ["mueller"]
  target: index.md
---
```

`_tpl/mueller/index.referenz.md` bleibt eine reine Referenz ohne Shiller-Tags
und Target; ihren Content nicht als installierbare Seite behandeln.
Die uebrigen benoetigten Metadaten der konkreten Seite ebenfalls erhalten;
das Beispiel ist keine Whitelist zum Loeschen anderer Felder.
`target: index.md` bedeutet `<Document Root>/index.md`, standardmaessig
`docs/index.md`. Schreibe Targets dokumentwurzelrelativ ohne fuehrenden Slash,
`docs/`, `_tpl/` oder den blossen Variantenordner `mueller/`. Ein Target ist ein
Dateipfad mit `.md`, keine Browser-URL und kein alter `pid`.

| Quelle nach Dateinamenbereinigung | Ziel / Entscheidung |
| --- | --- |
| `_tpl/mueller/index.md` | `index.md`, nicht `mueller/index.md`. |
| `_tpl/mueller/ueber-uns.md` | `ueber-uns.md`. |
| `_tpl/mueller/service/online-rezept.md` mit bisheriger Route `/online-rezept` | `online-rezept.md`, nicht automatisch `service/online-rezept.md`. |
| `_tpl/mueller/leistungen/leistung1.md` | Bei einer vorgesehenen Leistungs-Unterseite `leistungen/leistung1.md`; fachliche Unterordner nicht pauschal abflachen. |
| `kontakt-anfahrt.md` und vorhandenes `kontakt.md` | Beide bisherigen Dateien beanspruchen `/kontakt`. Beiden Dateien ein explizites Target zuordnen und den Konflikt fuer den Nutzer ausweisen; weder stillschweigend ueberschreiben noch Inhalte zusammenlegen oder loeschen. |
| `leistungen.md`, `leistungen/index.md` und `_tpl/leistungen.mueller.md` | Uebersichtsrolle und Zielroute vergleichen; gleichwertige Ausgabeziele wie `/leistungen/` nicht mehrfach belegen. Auch Varianten ausserhalb von `mueller/` einbeziehen. |
| `_tpl/mueller/index.referenz.md` | Nur Layoutreferenz, nicht automatisch als zweite Startseite taggen oder installieren. |

Die von Shiller installierte Markdown-Datei erhaelt stattdessen:

```yaml
shiller:
  source: mueller/index.md
```

Darin keine `tags`, `target` oder `instructions` belassen. `source` ist der
Pfad der tatsaechlichen Vorlage relativ zum konfigurierten `_tpl/`-Verzeichnis,
nicht der Zielpfad, ein `node_modules/`-Pfad, eine URL oder ein alter
`_shiller_template`-Wert. Shiller schreibt ihn beim Kopieren. Bei einer
manuellen Projektmigration nur eine nachweislich vorhandene Quelle eintragen;
keine Provenienz erfinden. In der Template-Quelle keinen Selbstverweis setzen.

Nicht-Markdown-Vorlagen verwenden bei Bedarf `.template` mit Shiller-Header;
installiert wird nur der Body unter dem Target, ohne diesen Header und ohne
`.template`-Suffix. `_tpl/_root/` bleibt die unbedingte Startstruktur mit dem
separaten Shiller-Kopiervertrag; nicht blind dieselbe Tag-/Target-Regel auf
alle Startdateien anwenden oder das Grundgeruest in diesem Rework umbauen.

### Dateipfad und Browser-Link getrennt pruefen

Fuehre eine explizite Tabelle `alte Referenz -> Zieldatei -> Browser-URL`.
Ersetze interne Seitenlinks auf `.md`/`.de.md` durch die tatsaechliche Zielroute;
bereinige alte `.de.html`-Verweise nur anhand derselben Zuordnung. Beispiele:
`ueber-uns.de.md` verweist nach der Umstellung auf die Route der installierten
`ueber-uns.md`, nicht auf `_tpl/mueller/ueber-uns.md`; der Startseitenlink bleibt
`/`, waehrend das Shiller-Target `index.md` lautet.

Ob `/kontakt`, `/kontakt.html` oder `/kontakt/` ausgeliefert wird, entscheidet
die reale Jekyll-/Hosting-Konfiguration, nicht `shiller.target` allein.
Insbesondere ist `permalink: pretty` in der geprueften `_tpl/_root/docs/_config.yml`
auskommentiert. Behaupte deshalb nicht, dass das Entfernen von `permalink`
automatisch extensionlose oder Verzeichnis-URLs erzeugt. Weise ungeklaerte
Routen als Konflikt aus; keine unbestellte Hosting-/Build-Aenderung vornehmen.

Pruefe Markdown-Links, Referenzlinks, HTML-Links, Card-`slot="link"` und
Liquid-Verweise. Erhalte Linktexte, Anker und Queryparameter sowie externe
URLs, `mailto:`, `tel:` und Download-Dateien. Ein echtes `.md`-Downloadziel
nicht mit einem internen Seitenlink verwechseln. In bestehenden Kundenprojekten
bleibt der strenge Routenschutz des Migrationsvertrags bestehen; eine
Normalisierung ist keine Erlaubnis, veroeffentlichte URLs zu brechen.

## Schritt 2: Abschnittsweise Content-Migration

Beginne erst nach der Header-/Zielpruefung. Bei einem reinen Header-Auftrag
bleibt der Body unveraendert; betroffene Links fuer den naechsten Schritt notieren. Bei beauftragter Content-Migration bleiben Texte,
Ueberschrifteninhalte, Links, Bild-URLs, Alt-Texte, Reihenfolge und Kundendaten
unveraendert; nur die nachfolgenden technischen Strukturwechsel sind erlaubt.
Nimm die in Mueller vorhandenen Inhalte, nicht die Inhalte von Scheche.

Ordne jeden alten Abschnitt zuerst einer Inhaltsrolle zu. Ersetze `use:`,
`#sec-*`, `#hero-*`, `accordion()` und `--joda-use` nicht durch globale
Textsubstitution. Pruefe nach jeder Umstellung die erzeugte Section-Hierarchie.
Direkte Kinder des Content Pane bleiben NTL-Layouts; NTE-Elemente wie ein
Akkordeon gehoeren in die passende Inhaltssection.

| Alte Rolle / Steuerung | Zielmuster und Umformatierung |
| --- | --- |
| `#hero-max` / `#hero-slide` | Aussen `layout="2;ntl-hero.hero-box"`; bisheriges Hintergrundbild mit `slot="bg"`; Text/CTA in einem eigenen HR-Block `layout="2.5;.box.-lg:w-100"`, Headline mit `layout="3"`. Kein Scheche-Logo oder zusaetzliche Texte kopieren. Andere Hero-Rollen wie `#hero-title-small` nur nach passender vorhandener Variante zuordnen. |
| `#hero-ribbon` | Eigenstaendiger HR-Abschnitt `layout="2;ntl-card-row.style-ribbon.align-buttons"`; vorhandene Teilbereiche als gleichrangige H3-Karten erhalten. News, Notfall und Sprechzeiten bleiben inhaltlich vollstaendig. |
| `#button-group` | Vorhandene, fuer diese Aktionengruppe passende Card-/Button-Komposition waehlen; keinen der vorhandenen Anmelde-, Termin-, Rezept- oder Zuweiserlinks durch den einzelnen Scheche-Hero-CTA ersetzen. |
| `#sec-card-2col` / `#sec-card-feature` | `layout="ntl-2col"`; Bilder und Texte ihrer Rolle zuordnen, Kicker wie unten umstellen. Benoetigte Varianten/Slots aus dem aktuellen Komponentenvertrag nehmen, nicht aus alten Klassen ableiten. |
| `#sec-multi-card` | `layout="ntl-card-row"`; Unterkarten als gleichrangige H3 mit ihren Bildern, Texten und Aktionen. Breiten am Section-Element setzen, z. B. `section-style="--cols: 4;"` fuer die drei Karten im Scheche-Muster. Die alte Kartenanzahl `cols:3` ist nicht blind `--cols:3`. |
| `accordion()` | HR mit `layout="nte-accordion"` innerhalb des passenden NTL-Abschnitts; vorhandene H3 samt Body werden Eintraege. Nach dem Akkordeon einen folgenden CTA/Absatz auf die Elternebene zurueckfuehren, statt ihn zum letzten Eintrag zu machen. |
| `#sec-testimonial-ribbon` | HR mit `layout="2;ntl-2col.style-testimonial"`; Portrait, vollstaendiges Zitat und Attribution erhalten. Nicht als Kicker umdeuten. |
| `#cta-base` / reiner Kontaktabschluss | `layout="ntl-2col.style-cta"` und bei voller Breite `section-style="--cols: 12;"`; alle vorhandenen Texte/Links erhalten. Eine bestehende Abschluss-CTA bleibt Abschluss, keine neue CTA bei reiner Migration erfinden. |
| `#cta-form`, `#e-form`, alte `[input ...]`-/`[textarea ...]`-Syntax | Zuerst den vorhandenen Formularvertrag pruefen. Ermittle zuerst die aktuelle Formularsyntax aus `docs/` und der Scheche-V2-
Referenz und migriere jedes Feld einzeln. Felder, Namen, Pflichtstatus,
Auswahlwerte, Versandziel, Consent und Rueckmeldungen erhalten. Nicht durch einen Kontaktbutton ersetzen oder nur das Wrapper-Layout austauschen. Fehlt eine gleichwertige vorhandene Funktion, als blockiert melden statt eine neue API zu erfinden. |
| `#infobox`, sonstige Sonderabschnitte | Bedeutung, Warnstufe, Icon und vollstaendigen Text erfassen und eine vorhandene gleichwertige Komposition belegen. Nicht ersatzlos entfernen, weil Scheche diesen Abschnitt nicht besitzt. |

### Kicker und Section-Grenzen

Wende die ausfuehrliche Kicker-Regel in der
[Cheche-Zuordnung](cheche-v2-to-themejs2-map.md)
an: Nur H2/H3/H4 mit unmittelbar folgendem Blockquote werden umgestellt.
Der alte Heading-Text wird `data-kicker`, der Zitatblock wird zum Heading-Text;
Heading-Ebene und beide Texte bleiben erhalten. Beispiel:

```markdown
## Unsere Praxis
{: layout="use: #sec-card-2col"}

> Medizin fuer die ganze Familie
```

```markdown
## Medizin fuer die ganze Familie
{: layout="ntl-2col" data-kicker="Unsere Praxis"}
```

Attribute stehen ohne Leerzeile direkt unter dem zugehoerigen Block. Normale
Zitate und Testimonials bleiben Zitate. Bestehende IDs und Attribute erhalten,
Attributwerte korrekt maskieren. Pruefe Kicker-Text und Heading separat, weil
ein einfacher Textsequenzvergleich den Attributinhalt nicht sicher erfasst.

Nutze `---` plus Layout-Attribut fuer Wrapper ohne eigene Ueberschrift, nicht
zusaetzliche erfundene Headings. H1/H2 starten normalerweise auf Ebene 2,
H3 auf Ebene 3; ein HR ohne expliziten Index liegt auf der letzten festen
Ebene plus 0,5. Beende ein Akkordeon/Unterlayout explizit, wenn nachfolgender
Inhalt sonst darin verbleibt. Im geprueften Leistungsbeispiel fuehrt ein
HR mit `layout="2.5"` den Terminlink zurueck in den uebergeordneten Bereich.
Pruefe die tatsaechliche Struktur, statt diese Zahl ueberall einzusetzen.

### Bilder, Includes, Kontakt und Shortcuts

Erhalte Einzelbilder, Alt-Texte und Bildreihenfolge. Fasse zusammengehoerige
Folgen von mindestens zwei Bildern wie in der bestehenden Migrationsregel
mit `layout="nte-image"` zusammen; in einer Seitenspalte zusaetzlich `.aside`.
Ein Hero-Hintergrund verwendet dagegen `slot="bg"`. Keine Bilder zwischen
Abschnitten zusammenziehen, durch Scheche-Motive ersetzen oder optimieren.

Ersetze `el/openhours.html` durch das vorhandene
`components/site/opening-hours.html` und `el/address.html` durch
`components/contact/address.html`, jeweils nach Pruefung der Aufrufparameter
und unveraenderter Kundendaten. Erhalte jede sichtbare Oeffnungszeitenzeile in
`site.data.openhours.table`, aber importiere keine Scheche-Oeffnungszeiten.
Andere Legacy-Includes gemaess der Cheche-Zuordnung einzeln klassifizieren.

Migriere `<map ... --joda-use: map()>` zu der vorhandenen Consent-geschuetzten
Kartenstruktur. Scheche zeigt `nte-consent-blocker` mit inaktivem
`<template><iframe ...></iframe></template>`; URL, Anschrift und Titel stammen
weiter aus den bisherigen Projektdaten/Liquid-Werten. Keine Adresse aus der
Referenz hart codieren und das iframe nicht vor Consent aktiv laden.

Alte einzelne `[i ...]`-Elemente bei aktivem `text-block`-Pre-Parser in die
aktuelle Zeilen-Shortcut-Notation `#[i ...]` ueberfuehren. Jeder Shortcut steht
auf einer eigenen vollstaendigen Zeile, nie inline in einer Heading oder einem
Link. Bei alten Icons innerhalb von Button-Links erst eine geeignete vorhandene
Button-/Markup-Struktur waehlen und Klickziel sowie Linktext erhalten; kein
mechanisches Ersetzen durch ungueltige Inline-Shortcuts. Raw-HTML bleibt fuer
wirklich verschachtelte Strukturen wie den Consent-Block erlaubt.

### Impliziten Default-Style erhalten

Entferne bei der Migration explizite `.style-default`-Varianten sowie
`style-default`-Angaben, wenn damit nur der automatische Framework-Default
wiederholt wird. Ohne explizite `style-*`-Variante setzt das Framework den
Default selbst. Eine bewusst abweichende `style-*`-Variante bleibt erhalten;
keine neue Default-Klasse erzeugen. Pruefe die neuen Layout-Attribute im
aktuellen ThemeJS2-Vertrag.

## Pruefung und Abschluss

Pruefe die beiden Schritte getrennt und dokumentiere offene Faelle statt
fehlende Abbildung durch Loeschen oder neue Komponenten zu verdecken:

1. **Header und Installation:** YAML gueltig; keine alten Shiller-Aliase,
   `pid`, `lang` oder `.de.md`-Dateinamen im bearbeiteten Umfang; Auswahl-Tags
   und dokumentwurzelrelative Targets eindeutig; Referenzdateien nicht im
   Installationssatz; echte Installation in einem entbehrlichen Testprojekt
   liefert die geplanten Pfade ohne `mueller/`-Praefix und bei Markdown nur
   `shiller.source` innerhalb des Shiller-Blocks. Bestehende Projekte nicht
   fuer einen ungezielten `shiller install`/`revert`-Versuch ueberschreiben.
2. **Inhalt und Ausgabe:** jeden Ausgangsabschnitt zuordnen; Texte, Kicker,
   Bilder, Formulare, Consent, Links und Downloadziele nachweisen; keine alten
   `use:`-/Joda-Abhaengigkeiten in fertig migrierten Abschnitten; Hero, Karten,
   Akkordeon-Enden, Bildgruppen und Schluss-CTA in der Zielausgabe pruefen.
   Benoetigte Include-/Komponentenfunktion und tatsaechliche Routen rendern.
3. **Umfang:** Bei reinem Regelauftrag nur Regeln, Beispiele, Referenzpfade
   und Diff pruefen. Keine `.old/`, `.migration/`, neuen Tests, Paket-/Lockfile-
   Updates oder generierten Builds im Theme-Repository anlegen. Bei einem
   spaeteren Template-Rework nur die beauftragten Vorlagen bearbeiten und
   notwendige Installations-/Renderpruefungen getrennt ausweisen. Fuer eine
   vollstaendige Kundenprojektmigration gilt weiterhin der komplette Audit-
   und Buildablauf des Hauptskills, ohne Abschwaechung seiner Schutzregeln.

Nenne im Pull Request die geaenderten Skill-Dateien bzw. den tatsaechlich
migrierten Vorlagenumfang, Quellstand, Zielkonflikte und ausgefuehrte Pruefungen.
Ein aktualisierter Regelsatz ist noch keine ausgefuehrte Seitenmigration.
