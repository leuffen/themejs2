# themejs2

![demo screenshot](/doc/img/demo.png)

## Build on:

Reference to the Projects that are used to build this project:

- [Responsive CSS design system from TrunkJS](https://github.com/trunkjs/trunkjs-monorepo/blob/main/packages/responsive/README.md)
- [TrunkJS Content Area](https://github.com/trunkjs/trunkjs-monorepo/blob/main/packages/content-pane/README.md)

### Setup

*This Project uses [kickstart](https://nfra.infracamp.org/)*

- Clone the repository and run `kickstart` in the root directory. Inside the container run `kick dev` to execute the development server defined in `.kick.yml`.
- Don't forget to run `npm install` within `kickstart` environment.

### Running It

```sh
kickstart
kick dev
```

### Guides

#### How to Change Styles

- For theme-specific changes, edit the CSS of a theme, e.g. `src/epraxis-theme/theme.scss` (not to be confused with the files in `docs/_src`)
- Base styles come from published npm packages: `@nextrap/style-*` and `@trunkjs/*`
