# Herkunft der Osman2-Projektreferenz

`references/osman2-project-reference/` ist ein struktureller Snapshot aus dem Default-Branch des Repositories `dermatthes/leu-web-osman2` beim GitHub-Tree `ce56eb54a559f01055655aa5aa1bd65b36d6b9e2`; ausschließlich abschließende Leerzeichen und überzählige Leerzeilen am Dateiende wurden normalisiert. Er zeigt die praktisch eingesetzte ThemeJS2-/Vite-Struktur; der zugehörige ThemeJS2-Vergleichsstand ist Commit `54f6c16f201d9c5f5dd2937943cb0a2ebbc3795`.

Enthalten sind `AGENTS.md`, die Builddateien sowie `docs/_config.yml`, `docs/_includes/`, `docs/_layouts/` und `docs/_src/`. Bewusst nicht enthalten sind Kundeninhaltsseiten, Kundendaten, Collections, Logos, Bilder und generierte Assets; vorhandene benannte Theme- und Layoutvarianten bleiben als strukturelle Beispiele enthalten und dürfen nur bei nachgewiesener Eignung übernommen werden. Die Referenz ist kein blind zu kopierendes Gerüst: `workspace:*`, Paketname, Theme-Importe, Navbar, Footer und kundenspezifische Varianten müssen für das konkrete Ziel geprüft und angepasst werden.

Ist bei der späteren Migration ein neuerer `_root/`- oder Osman2-Stand verfügbar, vergleiche dessen Struktur mit diesem Snapshot und verwende die neueren kompatiblen Strukturteile. Übernimm dabei keine Demo- oder Kundeninhalte. Halte die verwendete ThemeJS2-Version beziehungsweise den Commit im Pull Request fest.
