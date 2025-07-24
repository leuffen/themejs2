## Structuring Content

This is a living document detailling how editorial content is structured — both on an organisational level as well as technically in our CMS and Jekyll

## Goals and Use Cases

### 1. Building Expertise in Content Management & Static Sites

As development team, we want to learn how a CMS, web components and jekyll work together best.

### 2. Ease of Use and Flexibility for the Editorial Teams


## Considerations and Lessons Learned

### Sub-Folder Structure Within `_posts`

- We could give each post a "primary category" by placing it in a sub-folder like `_posts/patienten-kommunikation`.
- However, jekyll has no direct data-level access to these subfolders (we cannot, without writing a plugin, say "list all posts from `patienten-kommunikation`", for example), so I think there is not much value in building a structure like this
- We can still put posts in sub-folders if that's convenient for the editorial team, but it won't have much effect (except on the url)
- Instead, post categories should be set via metadata. 
  - This is currently done via the `categories` array.