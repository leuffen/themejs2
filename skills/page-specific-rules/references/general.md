# General: Praxiskontext und SEO-Metadaten

Gilt für `_data/general.yml` (gegebenenfalls `.yaml`). Verwende
ausschließlich belegte Daten aus dem Projektkontext und das zugehörige
Schema `general.yml.d.json`, sofern vorhanden. Erhalte YAML-Keys,
Reihenfolge, Einrückung, Kommentare und Datentypen; bearbeite nur
freigegebene Werte.

- `name` ist der offizielle Praxisname aus dem Kontext, etwa
  `Praxis am Waldhof`.
- `name2` ist **nur** ein eigenständiger, sinnvoll abweichender
  Zusatzname, etwa der belegte Arztname ohne vorangestelltes „Praxis“.
  Ist der Arztname bereits im Praxisnamen enthalten oder kein echter
  Zusatz belegt, setze `name2: ~` (YAML-null, nicht der Text „~“).
  Ein bestehender Key wird nicht entfernt. Das gilt gleichermaßen
  für `standorte.default.name` und `standorte.default.name2`,
  jeweils anhand der tatsächlichen Standortdaten.
- `title` muss den für die Website vorgegebenen SEO-Titel **exakt
  aus dem Projektkontext** übernehmen, nicht eigenständig generieren.
- `desc` (nicht `description`) ist die Website-Description aus dem
  Kontext; übernimm sie, falls dort vorhanden, ohne Fakten zu erfinden.

Alle übrigen Felder nach ihren jeweiligen Schema-Beschreibungen und
expliziten Kontextdaten behandeln. Keine zusätzlichen Keys oder
Sections anlegen.


## Google Maps Links

Passe die Adresse in den vorhanden Google Maps Links an. (Also die URL in `map_url` und `map_link`.) 

## Redirect Link

Falls nichts anderes angegeben ist der der termin_link auf "/online-termin" zu setzen (d.h. auf die Services Seite).

Grund: Alle Terminlinks im Text sollen auf /termin laufen - dieser leitet dann zentral entweder auf Doctolib oder
die online-termin Seite weiter. So kann man die Terminlinks zentral steuern und muss nicht in allen Texten die Links ändern.
