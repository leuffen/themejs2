---
description: Bildet editierbare Informationsgruppen mit Trennlinien und optional zwei Spalten.
---

# Informationsraster

Das vorhandene Markdown-Muster `card-grid` hält Gruppen aus Überschrift und
Text zusammen. `xl:desktop` aktiviert über TrunkJS zwei Spalten. Das Muster
bleibt unter Misc, weil sein Inhalt aus normalen Sections besteht.

```markdown
## Kontakt
{: layout="ntl-2col" }

---
{: layout=".card-grid" .xl:desktop }

#### Adresse

Musterstraße 12, 12345 Musterstadt.

#### Telefon

[01234 56789](tel:+49123456789)
```

Eine direkte Gruppe mit `table.style-open-hours` nutzt beide Rasterspalten.
Das Muster kann für Kontaktangaben oder kompakte Leistungsinformationen
verwendet werden.
