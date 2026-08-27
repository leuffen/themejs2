# Header and footer workflow

Read this reference only when the user explicitly requests header, navbar, or footer work. Keep that scope separate from content theming.

## Planning

- Confirm which site-shell areas are included and whether the request concerns only visual styling or also structure.
- Do not treat a header or footer shown in a design reference as authorization to implement it.
- Changes to `docs/_includes` or `docs/_layouts` require explicit approval.

## Repository integration

- Header, navbar, and footer markup in demos is illustrative; Jekyll supplies the production elements.
- Base navbar work on `docs/_includes/_styles/default/navbar.scss`.
- Base footer work on `docs/_includes/_styles/default/footer.scss`.
- If the requested result cannot be expressed with the default styles, create `docs/_includes/_styles/<theme>/navbar.scss` or `footer.scss` as applicable.
- Select a theme-specific implementation through frontmatter with `use_navbar: <theme>` or `use_footer: <theme>`.

## Verification

- Verify the site shell separately from the content-theme demo.
- Test it with different navigation labels, link counts, contact data, and footer content.
- Keep customer copy, logos, and images in content/configuration; use placeholders when assets are not supplied.

