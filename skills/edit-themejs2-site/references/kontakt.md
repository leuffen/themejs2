# Kontaktseite: erreichbare Informationen und Layoutvarianten

Dieser Leitfaden gilt für Kontaktseiten wie `kontakt.md` oder
`kontakt/index.md`. Bei normaler
Anpassung die bestehende Position von Kontaktdaten, Karte, Formular,
Consent-Blocker und Layout-Slots erhalten. Nur nach ausdrücklichem
Layoutauftrag zwischen den folgenden Varianten wechseln.

## Inhalt zuerst

Adresse, Telefon, E-Mail, Sprechzeiten, Terminweg, Barrierefreiheit,
Parkhinweise und ÖPNV nur aus Projektkontext oder bestehenden belegten
Dateien übernehmen. Fehlende Angaben nicht ergänzen. Links als echte
tel:-, mailto:- oder vorhandene Termin-URLs schreiben, wenn zutreffend.
Anfahrt und Erreichbarkeit klar voneinander trennen; Formulare nur
anbieten, wenn die Verarbeitung tatsächlich funktioniert.

## Variante A: Kontaktinformationen oben

Ein klarer Kontaktblock direkt nach der Überschrift, gefolgt von
Anfahrtsbeschreibung und einer optionalen Karte. Das ist besonders
geeignet, wenn Telefonnummer und Adresse im Vordergrund stehen.

```markdown
# Kontakt
{: layout="ntl-2col.with-justify-top.surface-white" }

**Praxisname**

Straße und Ort laut Projektkontext.

[Anrufen](tel:+49000000000){: .btn .btn-primary }

---
{: layout="nte-accordion.style-default.bottom[exclusive]" }

### Anreise

Bestätigte Hinweise zur Anfahrt.
```

Die Telefonnummer ist im Beispiel nur ein Platzhalter und darf niemals
als echte Kundennummer übernommen werden.

## Variante B: Kontakt / Karte im Aside (Raven)

Die Raven-Demo nutzt eine ntl-2col-Section mit Kontaktinformationen im
Hauptinhalt und Consent-Blocker als Aside; darunter optional ein
eigenständiges Formular oder ein CTA:

```markdown
## Kontakt und Anfahrt
{: layout="ntl-2col.with-justify-top.surface-white" section-style="--cols: 5;" }

**Bestätigter Standort**

Straße und Ort aus dem Projektkontext.

<nte-consent-blocker class="style-default aside">
  <template>
    <!-- Hier nur ein bereits bestätigtes iframe aus dem Projekt einsetzen. -->
  </template>
</nte-consent-blocker>
```

Für ein Medien-/Map-Element im Top-Slot statt im Aside nur das
dokumentierte Slot-Muster des aktiven Themes verwenden, wie in der
Osman-Demo bei Kontakt & Anfahrt gezeigt. Karten nie ungefragt
einbetten; bestehende Consent-Logik beibehalten.

## Formular als eigener Abschnitt

Ein Formular mit tj-form und nte-input gehört nur auf die Seite, wenn
Action, Validierung, Datenschutz und Versand bereits funktionsfähig
bereitstehen. Raven zeigt ein eigenes Formularlayout mit style-form,
Top-/Aside-Teilen und Inputs. Keine funktionslosen Buttons als
scheinbare Versandmöglichkeit ergänzen.

Zur Auswahl: Kontaktdaten oben für schnelle Erreichbarkeit, nebeneinander
mit Karte für Standortorientierung, Formular als zusätzliche Handlung.
Die Variante muss zum gewünschten Seitenziel und aktiven Theme passen.

Quellen: leuffen/themejs2/docs/pages/theme-raven/raven-start.md
(Kontakt & Anfahrt, Formular) sowie
docs/pages/theme-osman/osman-elements.md (Top-Slot, Aside, Formular).
