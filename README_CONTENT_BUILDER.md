# Content Builder Usage

## Hierarchy

To bring structure to the markdown we can use section elements:
- **Headings** (`#`, `##`, `###`, etc.) create a section with the provided heading text
- **Horizontal rules** (`---`) create a section without a heading

**Headings** have automatically the same level as the number of `#` characters.

**Horizontal rules** use the level of the previous section + 0.5. E.g. 2.5 for a horizontal rule after a `##` heading.

The initial level can be overwritten by setting it in the `layout` attribute:

```md
## Heading 1
{: layout="1" }

---
{: layout="2" }
```

Any other markdown or HTML content will be added to the current section until a new section is created.

## Components

For more complex layouts, we can use our predefined components.
To use a component we need to set the `layout` attribute to the name of the component, e.g. `ntl-2col` for a two column layout.

```md
## Two Column Layout
{: layout="ntl-2col" }
```

Many components support child content:
- HTML or markdown content will be added to the default slot of the component
- To add content to a named slot, we can specify the attribute: ```test{: slot="named-slot" }```
- Depending on the component, the slot can also be targeted using a specific class: ```test{: .aside }```
- But most often the slot will be automatically determined by the element itself. E.g. the card component will automatically render any found image in the image slot.
- When using section elements like headings, we need to ensure that level is set higher than the parent. Else it will not be recognized as child.

## Questions

- When using bold text like `**test**` at the start of a line, the text and everything following is not rendered. Is this interpreted as heading? When using `__test__` it works fine.  

