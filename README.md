# themejs2

![demo screenshot](/doc/img/demo.png)

## Build on:

Reference to the Projects that are used to build this project:

- [Responsive CSS design system from TrunkJS](https://github.com/trunkjs/trunkjs-monorepo/blob/main/packages/responsive/README.md)
- [TrunkJS Content Area](https://github.com/trunkjs/trunkjs-monorepo/blob/main/packages/content-pane/README.md)

### Setup

*This Project uses [kickstart](https://nfra.infracamp.org/)*

- Clone the repository and run `kickstart` in the root directory. Inside the container run `kick dev` to execut the development server defined in `.kick.yml`.
- Clone the nextrap monorepo into workspace and run `npm update`.

```sh
mkdir -p ~/workspaces
git -C ./workspaces/ clone git@github.com:nextrap/nextrap-monorepo.git
npm update
```

- Don't forget to run `npm i`/`npm update` within `kickstart` environment.

### Running It

```sh
kickstart
kick dev
```

### Guides

#### How to Change Styles

- For general changes, adapt the scss in the `nextrap-monorepo`
  - Which should be achievable within this project, since the project should be linked as an npm workspace
- For specific changes, change the CSS of a theme, e.g. `src/epraxis-theme/blog.scss` (not to be confused with the files in `docs/_src`)
