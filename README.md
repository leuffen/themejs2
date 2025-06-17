# themejs2

![Screenshot of epraxis theme](/docs/img/screenshot-24-06-17.png)

> [!IMPORTANT] 
> *At some point, I simplified the project's structure to a basic jekyll setup and removed all dead code.*
> 
> If you want to undo this structural change or see the old files, revert this repo back to [commit caabf7b33141ad78e625c87f662269d0008edfdc](https://github.com/leuffen/themejs2/commit/caabf7b33141ad78e625c87f662269d0008edfdc)


## Goals

- To make a jekyll theme powering a range of sites which also utilize [nextrap](https://github.com/nextrap/nextrap-monorepo) components

## Development

### Structure

The project currently follows a basic jekyll layout.
*This will likely change in the future.*

Since this project is intended to be a "meta theme", each folder (such as `include/`) includes subfolders named after the different subthemes, as well as a `shared` folder.
This way, we can choose whether a given functionality is general or for a given theme only.


### Starting

This Project uses [kickstart](https://nfra.infracamp.org/)

Clone the repository and run `kickstart` in the root directory. Inside the container run `kick dev` to execut the development server defined in `.kick.yml`.

### CSS

Currently, we are using vanilla CSS, hardcoded within the repo.
This will likely be changed to a more dynamic SCSS/Sass buildchain utilizing nextrap CSS soon.

Furthermore, the project is currently using a lot of in-file `<style>` tags. This is a pragmatic way to "encapsulate" components, so that they can later be refactored into components.

The remaining CSS should likely be abstracted, and made more compatible with nextrap CSS. However, the best way for this abstraction is not yet clear.

### Integrating Nextrap Components

Clone the nextrap monorepo into workspace and run `npm update`.

```
mkdir -p ~/workspaces
git -C ./workspaces/ clone git@github.com:nextrap/nextrap-monorepo.git
npm update
```


