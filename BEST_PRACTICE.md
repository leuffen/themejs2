# Best Practice for Themes

## Jekyll organisation

### Layouts

Layouts are the main structure of your pages. They define how the content is presented. Use them to create a consistent 
look and feel across your site.

Create a dedicated layout for each type of page you have, such as:

- **blog-article-epraxis.html**

Put everything (all html) in this layout. Do not split the file into multiple includes unless 
the includes are reusable across multiple layouts.


#### Styling Guidelines

- the layout should be wrapped in a element with the class name of the include, e.g. `<div class="epraxis-blog-article">`
- 


### Includes

**Includes** are reusable snippets of code that can be included in **multiple** layouts or pages. 

#### Usage

Inlcudes can be used in layouts, posts, or pages. They are useful for:

- Reusable components (e.g., headers, footers, sidebars)
- Address or contact information
- Forms or buttons that are used across multiple pages

#### Design Guidelines

Important: If you use an include only in one layout is it better to put the code directly into the layout file.

There should be as few includes as possible. If applicable, make rich includes that can be configured via parameters.

Every include must start with a comment that describes its purpose and usage. And it must be documented in the README_INCLUDES.md file.


#### Styl
