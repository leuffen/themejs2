# Clean Contact Card

Ein ruhiges, einspaltiges Kontaktformular für Service-, Praxis- oder Unternehmensseiten. Die Gestaltung priorisiert klare Feldhierarchie, gute Lesbarkeit und eine eindeutige primäre Aktion.

## Formular

```html
<form class="contact-card">
  <div class="contact-card__field">
    <label for="contact-name">Name</label>
    <input id="contact-name" name="name" type="text" autocomplete="name" />
  </div>

  <div class="contact-card__field">
    <label for="contact-email">E-Mail</label>
    <input id="contact-email" name="email" type="email" autocomplete="email" />
  </div>

  <div class="contact-card__field">
    <label for="contact-message">Nachricht</label>
    <textarea id="contact-message" name="message" rows="5"></textarea>
  </div>

  <button class="contact-card__submit" type="submit">Nachricht senden</button>
</form>
```

Die Felder stehen bewusst untereinander, damit Blickführung, Tastaturbedienung und mobile Darstellung ohne zusätzliche Layoutlogik funktionieren. Labels bleiben dauerhaft sichtbar und werden nicht durch Placeholder ersetzt.

## Styling

```css
.contact-card {
  display: grid;
  gap: 1rem;
  max-width: 38rem;
  padding: 1.5rem;
  border: 1px solid color-mix(in srgb, currentColor 16%, transparent);
  border-radius: 1rem;
  background: var(--surface, #fff);
}

.contact-card__field {
  display: grid;
  gap: 0.4rem;
}

.contact-card__field input,
.contact-card__field textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border: 1px solid color-mix(in srgb, currentColor 24%, transparent);
  border-radius: 0.65rem;
  background: transparent;
  color: inherit;
  font: inherit;
}

.contact-card__field input:focus-visible,
.contact-card__field textarea:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.contact-card__submit {
  justify-self: start;
  padding: 0.75rem 1.1rem;
  border: 0;
  border-radius: 999px;
  background: var(--primary, #1f2937);
  color: var(--on-primary, #fff);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
```

Die Karte verwendet wenige neutrale Design-Tokens und bleibt dadurch theme-fähig. Als Optionen eignen sich eine zweispaltige Feldanordnung ab größeren Breakpoints, ein sekundärer Hinweistext unter dem Button oder Statuszustände für Fehler und Erfolg; die Grundstruktur sollte dabei unverändert bleiben.
