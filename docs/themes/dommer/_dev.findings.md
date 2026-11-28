# Initial project map

### Projektkarte

| Bereich | Verifizierter Stand |
|---|---|
| Auftrag und Seiten | `docs/themes/dommer/_AUFTRAG.md`, `dommer-start.md` und `dommer-leistungen.md`. Beide Seiten verwenden bereits `ntl-columns`. |
| Frame | Das im Auftrag genannte `theme-dommer` entspricht `docs/_layouts/website-dommer.html`. `docs/_config.yml` wählt diesen Frame nur für `themes/dommer`. |
| Meldungen und Navigation | `<leuffen-announcements>` steht bereits vor `#navbar`. Die Dommer-Demo hat zusätzlich eine fiktive Ersatzmeldung. Fixierung und Verhalten ohne Meldungen sind im Browser noch zu prüfen. |
| Content Pane | Der Frame übergibt den Markdown-Inhalt einmal an `<tj-content-pane pre-parser="text-block">`. Die lokalen Vertragsreferenzen liegen unter `AGENTS/references/4_Libraries/content-pane-usage/` und `content-pane-layout/`. |
| SCSS und Hero | `theme/dommer/index.scss` existiert bereits und wird über `theme/index.scss` eingebunden. Der vorhandene Hero-Style liegt in `theme/elements/ntl-hero/_style-dommer.scss`, mit gleichnamiger Usage-Datei. Der Demo-Einstieg `docs/_src/style.scss` lädt die gemeinsame Theme-Basis. |

Die Startseitenreferenz führt vom Hero zur Praxisvorstellung und zu den Sprechzeiten. Die Leistungsreferenz zeigt nach dem Hero acht Leistungsblöcke und danach die Sprechzeiten. Das ist die inhaltliche Zuordnung; die einzelne FAQ-Section mit Plus vor dem Link kommt aus dem Auftrag. ([zahnzentral-melle.de](https://zahnzentral-melle.de/))

**Noch nicht geändert oder visuell geprüft.** Diese Phase hat nur Lesezugriff und kein Browserless-Werkzeug. Offen sind der Vorher-Vergleich bei **393 × 852** und **1280 × 800**, die Detailprüfung der Komponentenverträge und anschließend Umsetzung, Build und Nachher-Vergleich.

Der in `AGENTS.md` § 5.1 verlangte Skill `modify-theme` war unter `/opt/.agents/skills/modify-theme/SKILL.md` im bereitgestellten Dateisystem nicht auflösbar; das Werkzeug meldete „Pfad existiert nicht oder liegt außerhalb des Roots“, keine Zugriffsverweigerung. Die lokale Fassung unter `.agents/skills/modify-theme/SKILL.md` und der Browserless-Skill unter `.agents/skills/browserless-screenshots-debugging/SKILL.md` waren lesbar.

## Reference inspection findings

- Die Baseline rendert auf beiden Seiten bereits `ntl-hero.style-dommer` und `ntl-columns`. Die Leistungsseite verwendet zusätzlich den vorhandenen Modifier `dommer-inner`. `theme/dommer/index.scss` ist bereits zentral eingebunden; ein zweiter SCSS-Einstieg ist nicht nötig.
- Das gerenderte Markup zeigt `leuffen-announcements.no-announcements` und zugleich den sichtbaren, separat konfigurierten Demo-Ersatztext. Eine aktive echte Meldung war in der Baseline nicht vorhanden.
- Die gezielte Inspektion der Startseiten-Navbar bei **393 × 852**, DPR 1, ergab `position: relative`, `font-family: system-ui, sans-serif` und `font-size: 16px`. Die Ansicht meldete außerdem ein fehlgeschlagenes Bild; die betroffene Ressource wurde nicht identifiziert.
- Die Referenzseiten sind nur Vergleichsgrundlage. Änderungen betreffen den Dommer-Demo-Frame und seine Seiten; andere Frames und die Kundenvorlage wurden nicht geändert oder visuell geprüft.

# Cumulative updates

Later verified corrections supersede the initial map.

- `docs/_config.yml` weist dem Dommer-Bundle `website-dommer` zu. `docs/_layouts/website-dommer.html` gruppiert Meldung und Navbar in `.dommer-topbar`; `theme/dommer/index.scss` setzt den Wrapper auf `position: sticky`.
- Im zuletzt gerenderten DOM von **Leistungen bei 393 × 852** fehlt `.dommer-topbar`. Die Inspektion von `#navbar` ergab `position: static` und `font-family: system-ui, sans-serif`. Die Ursache der Abweichung ist nicht bestätigt.
- Beide Seiten verwenden bereits `ntl-hero.style-dommer` und `ntl-columns`; die Leistungsseite zusätzlich `dommer-inner`. Der Dommer-SCSS-Einstieg ist bereits zentral eingebunden.
- Die mobile Leistungs-Preview meldete ein fehlgeschlagenes Bild. Die betroffene Ressource wurde nicht identifiziert.
