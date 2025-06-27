# epraxis/post.html include: Internal Documentation

## Variables accepted
- `post` (object): The post data to render (required)
- `is_highlighted` (boolean/string): If true, renders the post in highlighted/tall style (shows excerpt, uses <img>, etc.)
- `is_wide` (boolean/string): If true, adds the `wide_post` class so the post spans both columns in the grid

## Usage
- Typically included from `epraxis/posts.html`, which handles the logic for when to set `is_highlighted` and `is_wide` based on the number and position of posts.
- The include expects these variables to be set correctly by the parent.
- The CSS classes `highlighted_post`, `not_highlighted_post`, and `wide_post` are set conditionally based on these variables.

## Notes
- `is_highlighted` and `is_wide` are usually passed as strings ('true'/'false') due to Liquid behavior.
- The template does not itself determine which post is highlighted or wide; this is the responsibility of the parent include (e.g., posts.html).
