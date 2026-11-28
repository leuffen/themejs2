# Layouts

Website-Layouts verwenden die gemeinsame Kette
`10_blanc → 20_body → blank → website-*`. `blank` reicht Inhalt direkt
weiter. Jeder Website-Frame enthält seine Navbar, den optionalen Page-Header,
genau einen Content Pane und seinen Footer direkt in derselben Datei.

| Layout | Navbar | Footer |
| --- | --- | --- |
| `website-default` | bisherige Dommer-Navbar | kompakter Default-Footer |
| `website-mueller` | Default | Müller |
| `website-osman` | Osman mit Topbar | Osman |
| `website-raven` | Topbar | Raven |
| `website-unify` | Unify | Unify |

`website-default` ist neutral; das visuelle Profil kommt aus dem jeweiligen
Scope in `docs/_config.yml`. Die vorhandenen Styles benötigen bei Osman,
Müller, Raven, Unify und ePraxis weiterhin `body_class: theme-<name>` am
HTML-Element. `theme_profile` setzt zusätzlich die bestehende Body-Klasse und am
Default-Frame einen neutralen Profil-Wrapper. Dieser erhält Dommers
vorhandene Direktkind-Selektoren trotz der technischen Body-Wrapper.
Diese Layout-Migration ändert die SCSS-Entries nicht.

## Seitenschalter und Parameter

`show_navbar`, `show_title` und `show_footer` sind global standardmäßig
`true`. Nur ein explizites `false` blendet den jeweiligen Bereich aus.
Damit entfallen eigene Navbar-only-, Footer-only- und None-Layouts.
Startseiten mit einem eigenen Hero setzen `show_title: false`.

`navigation_root` steht auf jeder Demo-Seite, zum Beispiel
`themes/mueller`. `ptags: [nav, footer-nav]` nimmt die Seite in die beiden
Navigationen dieses Bundles auf; `short_title` und `order` bestimmen
Beschriftung und Reihenfolge. Die mobilen Menüs verwenden dieselben Links
über den vorhandenen Relocator.

`brand_url` kommt aus den Bundle-Defaults und fällt auf `/` zurück.
`location_id` fällt auf `default` zurück; die Layouts lesen den Standort
aus `site.data.general.standorte`. Der Page-Header verwendet `title`,
optional `description`, `hero_image` und `hero_image_alt`.

Osman und Raven verwenden `contact_url` mit `location.termin_url` als
Fallback. Unify verwendet zusätzlich `about_url`, `products_url`,
`faq_url`, `resources_url`, `services_url` und `references_url`.
Seine optionalen Linkziele fallen auf `brand_url` beziehungsweise `/`
zurück. Die Demo-Ziele stehen im Unify-Scope der Konfiguration.

Artikel- und Collection-Layouts ergänzen `website-default` um ihren
Inhaltsrahmen. Nicht verwendete Layout-Kopien und Alias-Layouts entfallen.
