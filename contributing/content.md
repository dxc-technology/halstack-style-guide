# Content

* [Markdown](#markdown)
* [Writing content](#writing-content)
* [Sections](#sections)
    * [Creating hierarchy](#creating-hierarchy)
    * [Bottom links](#bottom-links)
* [Component specifications](#component-specifications)
    * [Spec tables](#spec-tables)
    * [Using escaping backticks](#using-escaping-backticks)


## Markdown

Our documentation pages are written in markdown. [Check the markdown guide for the basic syntax](https://www.markdownguide.org/basic-syntax/).

## Writing content

* Keep sentences and paragraphs short and focused.
* Be clear and concise by removing unnecessary words.
* Use sentence case for everything, including component names

## Sections

Our components documentation is divided in 4 main different sections:

* **Introduction**: Brief description of the component.
* **Usage**: How the component should be used.
* **Anatomy**: All the individual elements that are part of the component.
* **Design specs**: How the component is built.

Other sections to consider adding to a component documentation:

* States
* Variants
* Placement and aligment
* Behavior and interaction
* Content
* Accessibility

### Creating hierarchy

All documentation pages should follow the same hierarchy:

| Item       | Purpose                       | Markdown syntax |
| ---------- | ----------------------------- | --------------- |
| `h1`       | Component or principle name   | `#`             |
| `h2`       | General sections              | `##`            |
| `h3`       | Subsections                   | `###`           |
| `h4`, `h5` | Any needed subdivisions       | `####`, `#####` |


The title and sections for every page follow the same syntax across all our documentation. You can check a more complete [heading markdown syntax guide](https://www.markdownguide.org/basic-syntax/#headings). Below you can find an example of how one of our component documentation hierarchy is built:

```

# Select
   ## Usage
   ## States
      ### Text-input
      ### Options list
   ## Anatomy
   ## Design specs
   ## Accesibility

```
_Example of a component documentation page headings hierarchy_
  

### Bottom links

Every page should have a dedicated section at the bottom with related links, in this section are included:

* **Angular CDK component**: link to the latest released angular component
* **React CDK component**: link to the latest released react component
* **Adobe XD component**: link to the latest Adobe XD view component page
* **Edit this page in GitHub**: link to the `README.md` of the page in the master branch

Use the following template to add the “links and references“ section to any documentation page:

```

## Links and references

[Angular CDK component]()
[React CDK component]()
[Adobe XD component]()

_________________________

[Edit this page on GitHub]()

```

_Example of the “links and references“ section_

## Component specifications

Component specifications are mainly based on tables, in order to be consistent across all our documentation pages

* Always put the value column in the last place

Table example

```

| Property        | Element          | Token       | Value     |
| --------------- | ---------------- | ----------- | --------- |
| `property-1`    | element-1        | `token-1`   | value-1   |
| `property-2`    | element-2        | `token-2`   | value-2   |
| `property-3`    | element-3        | `token-3`   | value-3   |

```

