# themejs2

> [!IMPORTANT] 
> *Note: At some point, I decided to split this project in two
> 
> - a) this repository, a **gem-based jekyll theme**
> - b) an (example) blog which merely consumes this theme
> 
> If you want to undo this structure, revert this repo back to [commit caabf7b33141ad78e625c87f662269d0008edfdc](https://github.com/leuffen/themejs2/commit/caabf7b33141ad78e625c87f662269d0008edfdc)

Next Generation Theme JS


## Starting

This Project uses [kickstart](https://nfra.infracamp.org/)

Clone the repository and run `kickstart` in the root directory. Inside the container run `kick dev` to execut the development server defined in `.kick.yml`.


## Development (Components)

Clone the nextrap monorepo into workspace and run `npm update`.

```
mkdir -p ~/workspaces
git -C ./workspaces/ clone git@github.com:nextrap/nextrap-monorepo.git
npm update
```


