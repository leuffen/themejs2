# themejs2

## Development

- If you are new to the project, the following two discussions may be of interest to you:
  - 

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
