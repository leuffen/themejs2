# themejs2

> [!IMPORTANT] 
> *At some point, I decided to split this project in two:*
> 
> - a) this repository, a **gem-based jekyll theme**
> - b) an (example) blog which merely consumes this theme
> 
> If you want to undo this structure, revert this repo back to [commit caabf7b33141ad78e625c87f662269d0008edfdc](https://github.com/leuffen/themejs2/commit/caabf7b33141ad78e625c87f662269d0008edfdc)

## Purpose

This project is supposed to be a "meta" jekyll theme, to be used on multiple websites.
The primary, urgent purpose is to provide styling for the ePraxis content site.


## Development


### Starting

This Project uses [kickstart](https://nfra.infracamp.org/)

Clone the repository and run `kickstart` in the root directory. Inside the container run `kick dev` to execut the development server defined in `.kick.yml`.


Clone the nextrap monorepo into workspace and run `npm update`.

```
mkdir -p ~/workspaces
git -C ./workspaces/ clone git@github.com:nextrap/nextrap-monorepo.git
npm update
```

### Project Structure

Since this repository is supposed to be a meta-theme (=to have multiple themes in a single repo), every typical jekyll folder (`_data`, `_includes`, ...) has several sub-folders where sub-theme-specific files live.

The `*/shared` folder is a special case: In those, files that may be used by multiple or all sub-themes live.