# § 1 Zielsetzung

## § 1.1 Einsatzbereich und technische Basis

ThemeJS2 ist ein Theme für ausschließlich statisch auslieferbare Websites.
Es wurde hauptsächlich für Arzt-Websites entwickelt und soll künftig weitere
Einsatzbereiche abdecken. Basis sind NTE-/NTL-Komponenten (`nte-`, `ntl-`) und
CSS-Variablen mit dem Präfix `--nt-`.

## § 1.2 Kompilierte Basis im Zielrepository

Das Theme wird mit SCSS und TypeScript entwickelt. Jedes Zielrepository
enthält fertige JavaScript- und CSS-Builds zur direkten statischen Auslieferung.
Visuelle Anpassungen überschreiben CSS-Variablen in projektspezifischen User
Base Styles, nicht die generierten Dateien. Dafür ist kein neuer Theme- oder
SCSS-Build nötig.

## § 1.3 Wiederverwendung und Zuständigkeiten

Demos verwenden möglichst dieselben Komponenten, Layouts und Data Contracts
wie Kundenprojekte. Der Frame bleibt im Kundenprojekt editierbar; vorhandene
Komponenten und Styles werden wiederverwendet, wenn sie die Funktion abdecken.

Layouts definieren Struktur und verfügbare Inhalte, Element-Styles die
funktionale Darstellung. Seitenweite Variants liefern visuelle Werte über
CSS-Variablen.

## § 1.4 Für KI-Nutzung optimieren

Optimiere ThemeJS2 für KI-Agenten: klare Konventionen, verbindliche
Abhängigkeiten und kurze Beispiele. Vorhandene Komponenten und dokumentierte
APIs haben Vorrang vor eigenen Implementierungen.

## § 1.5 Verbindliche Libraries

Nextrap und TrunkJS sind verbindliche Grundlagen. Auswahl, Verwendung,
Beispiele und References regelt [§ 4 Libraries](4_Libraries.md).
