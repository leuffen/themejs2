# Content Pane usage best practices

## Heading-owned layout

Attach Kramdown attributes directly to the heading for its section:

```markdown
## Products
{: layout="page-section#products.wide"}

Introductory text.

### Product A

Product details.
```

The heading supplies the section level; do not add a redundant layout index.

## Headingless layout between outline levels

For headingless containers, use an HR with attributes on the next line:

```markdown
## Frequently asked questions

This introduction remains outside the component.

---
{: layout="nte-accordion[initial-open-index='0'][exclusive]"}

### First question

First answer.

### Second question

Second answer.
```

The HR uses the last fixed level plus `0.5`: here, between `h2` and `h3`.
It wraps following subsections without an extra heading or index; the intro
stays in the parent. Use this for headingless components, groups, or controls.

## Temporary wrapper and closing control

Use an explicit level only for wrappers spanning siblings that no single
heading can express:

```markdown
---
{: layout="1;page-background"}

## Intro

Intro content.

## Features

Feature content.

---
{: layout="/1;"}

## Outside

Content after the temporary background.
```

The closing HR is a control and is removed from the rendered output.

## Selectors and section attributes

`layout` uses a CSS selector. Prefix section attributes with `section-`:

```markdown
## Feature
{: layout="feature-card#primary.highlighted[data-kind=product]" section-class="wide" section-aria-label="Primary feature"}

Feature content.
```

The selector creates the layout element; `wide` and `aria-label` move to its
section without the `section-` prefix.

## Tables and other attributed blocks

Kramdown attributes always follow the block directly, including tables:

```markdown
| Name | Status |
| --- | --- |
| Alpha | Active |
{: layout="data-table" }
```

A blank line before an attribute breaks its association with the block.

## Demo Viewer

Import Content Pane and wrap the rendered Markdown explicitly:

```ts
import '@trunkjs/content-pane';
import { defineDemo } from '@trunkjs/demo-viewer';
import markdown from './example.md?raw';

export default defineDemo({
  title: 'Content Pane example',
  description: 'Heading-derived layout rendered from Markdown',
  markdown,
  wrapper_html: '<tj-content-pane>{{content}}</tj-content-pane>',
});
```

Without the wrapper, Markdown renders without Content Pane's section tree or
layout transformation.

## Jekyll and website content

Keep Jekyll front matter first. Content Pane attributes belong directly after
their Markdown blocks:

```markdown
---
title: Products
layout: default
---

## Products
{: layout="page-section.products"}

Product overview.
```

With `@trunkjs/content-pane` installed, Markdown is Content Pane input unless
the project specifies otherwise. Preserve Jekyll syntax: Content Pane arranges
the generated HTML.
