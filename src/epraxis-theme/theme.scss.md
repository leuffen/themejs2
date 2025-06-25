# Theme SCSS

- Holds *all* (S)CSS related to the epraxis theme, and also everything related to utilizing nextrap-CSS in the themejs2 project.

## Why a Single File Only (for now)

- Forwarding/using SCSS variables from other projects (=nextrap-monorepo) is finicky
- We cannot really know yet which code will be shared between themes, so breaking things up into files feels like premature abstractions
- It's not unlikely that once we bring in web components for recurring elements we will find the CSS required in the theme itself to be just a couple dozen lines