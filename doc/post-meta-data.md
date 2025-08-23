# Blog Post Metadata Documentation

## Required Fields
- `layout`: Template to use (`blog-article-epraxis`)
- `title`
- `subtitle`: Secondary title/description
- `description`: Meta description for SEO
- `published`: Boolean flag for publication status
- `author`: Author name
- `keywords`: Array of SEO keywords
- `image`: Featured image URL
- `categories`: Array of category tags. Should be one or two at most, probably.

- `researched-by`: Content research attribution (`human`, `ai`, `shared`). Used for the reading time info box.
- `written-by`: Content writing attribution (`human`, `ai`, `shared`)
- `formatted-by`: Content formatting attribution (`human`, `ai`, `shared`)

## Optional Fields
- `article_next`: Slug of next article for display at the bottom. If unset, jekyll's built-in `.next` is used.
- `article_previous`: Slug of previous article. If unset, jekyll's `.prev` is used.
- `articles_related`: Array of related article slugs. If not set, "related articles" will be hidden.

## Notes
- Categories should use lowercase, hyphenated values (e.g., `datenschutz`, `organisation`)
