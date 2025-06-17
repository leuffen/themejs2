# How to write CSS

- Use terse class names. Do not use BEM. Most CSS will eventually move into the Shadow DOM of sub-components, so there is little reason to use super long identifiers
- When naming classes, get inspiration from how bootstrap names classes (especially the brevity): [Cheat Sheet](https://bootstrap-cheatsheet.themeselection.com/)

## File Structure

- All css lives somewhere in `assets/*/css`. 
- Avoid inline styles.
- Think about whether css belongs to a specific theme (e.g. `epraxis`) or is shared between all themes (in that case, put in `assets/shared/css/*`)
- Within each of these folders, understand the existing css files and adapt accordingly

- The project is supposed to be compatible with next-rep. Therefore, you will always utilize `shared/css/nextrap-reset.css` and `nextrap-use-variables.css` (the specific *value* of the variables may be overwritten in `assets/$themename/variables.css`) 