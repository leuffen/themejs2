# AGENTS.md





## Schreiben in Worspaces unter ./workspaces/

Nur wenn du vorhost in worspaces zu schreiben:

Wenn in Workspaces unter `workspaces/*/SKILLS.md` eine workspace-spezifische SKILLS-Datei vorhanden ist,
ist sie verpflichtend zu laden und für den jeweiligen Workspace zu befolgen, wenn du in Unterverzeichnisse schreiben
willst.

## Austauschbarkeit von Workspaces und npm-Paketen

Lokale Workspace-Pakete und die entsprechenden veröffentlichten npm-Pakete müssen über identische Package-Imports
austauschbar bleiben. Consumer importieren ausschließlich den Paketnamen und erhalten keine Workspace-spezifischen
Aliases auf TypeScript-Quellen.

Bei `workspaces/themejs2` ist deshalb ausdrücklich folgende Struktur vorgesehen:

- Der Library-Build schreibt `index.js` sowie weitere öffentliche JavaScript-Entrypoints direkt in das
  Workspace-Paket und nicht nach `dist/`.
- `build.emptyOutDir` muss dabei `false` bleiben, damit ein Build mit `outDir: "."` keine Quelldateien löscht.
- `package.json` verweist für `main`, `module` und `exports` auf diese gebauten Dateien, beispielsweise
  `./index.js` und `./functions/formmailer.js`.
- Dieselbe `package.json`-Auflösung gilt sowohl für den npm-Paketinhalt als auch für den Symlink unter
  `node_modules`; dadurch sind Workspace und npm-Paket ohne Änderungen an Consumer-Code oder Vite-Konfiguration
  austauschbar.
- Nach Änderungen an TypeScript-Quellen muss der Library-Build ausgeführt werden; für laufende Entwicklung ist
  der Library-Build im Watch-Modus zu verwenden.
