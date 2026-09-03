# Redaktionelles Lebenslauf-Profil

Eine kompakte Lebenslauf-Vorlage für persönliche Profilseiten, Bewerbungsseiten oder Speaker-Vitas. Der Schwerpunkt liegt auf einer starken Einleitung und einer klar scanbaren Stationenliste.

## Profilkopf

```html
<header class="resume-profile">
  <p class="resume-profile__eyebrow">Lebenslauf</p>
  <h1>Alex Beispiel</h1>
  <p class="resume-profile__role">Produktdesign · Design-Systeme · UX-Strategie</p>
  <p class="resume-profile__summary">
    Gestaltet digitale Produkte mit Fokus auf robuste Systeme, klare Oberflächen
    und eine enge Verbindung zwischen Gestaltung und Umsetzung.
  </p>
</header>
```

Der Profilkopf trennt Rolle und Kurzprofil bewusst vom Namen. So bleibt die Hierarchie auch bei längeren Berufsbezeichnungen stabil und der Einstieg funktioniert sowohl als vollständige Seite als auch als eingebetteter Abschnitt.

## Stationen

```html
<section class="resume-timeline" aria-labelledby="experience-title">
  <h2 id="experience-title">Erfahrung</h2>

  <article class="resume-entry">
    <p class="resume-entry__period">2023–heute</p>
    <div>
      <h3>Leitung Produktdesign · Beispiel GmbH</h3>
      <p>Design-System, Produktstrategie und teamübergreifende UX-Prozesse.</p>
    </div>
  </article>

  <article class="resume-entry">
    <p class="resume-entry__period">2020–2023</p>
    <div>
      <h3>Senior UX Designer · Studio Beispiel</h3>
      <p>Digitale Plattformen, Prototyping und Nutzerforschung für B2B-Produkte.</p>
    </div>
  </article>
</section>

<style>
.resume-profile {
  max-width: 48rem;
  margin-bottom: 3rem;
}

.resume-profile__eyebrow,
.resume-entry__period {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.65;
}

.resume-profile h1 {
  margin: 0.25rem 0;
  font-size: clamp(2.4rem, 7vw, 5rem);
  line-height: 0.95;
}

.resume-profile__role {
  margin: 1rem 0 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.resume-profile__summary {
  max-width: 42rem;
  font-size: 1.05rem;
  line-height: 1.65;
}

.resume-timeline {
  display: grid;
  gap: 1.25rem;
  max-width: 48rem;
}

.resume-entry {
  display: grid;
  grid-template-columns: minmax(7rem, 0.28fr) 1fr;
  gap: 1rem;
  padding-block: 1rem;
  border-top: 1px solid color-mix(in srgb, currentColor 16%, transparent);
}

.resume-entry h3,
.resume-entry p {
  margin-top: 0;
}

@media (max-width: 36rem) {
  .resume-entry {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
}
</style>
```

Die Zeitangabe erhält auf größeren Bildschirmen eine eigene schmale Spalte und fällt mobil automatisch über den Inhalt. Dadurch bleibt die Vita schnell erfassbar, ohne eine dekorative Zeitleisten-Grafik zu benötigen. Als Optionen eignen sich eine Akzentfarbe für Zeitangaben, ergänzende Schlagwörter für Technologien oder Kompetenzen sowie eine dritte Meta-Zeile für Ort oder Beschäftigungsart.
