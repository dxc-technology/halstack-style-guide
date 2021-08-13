# Documentation templates

In this page you can find templates that will help you when contributing to Halstack Design system, use them to submit enhancements or new assets to our documentation.

* [Component template](#component-template)
* [Pattern template](#pattern-template) (`WIP`)

## Component template

Use this template when documenting components. You can see this template in use for [Accordion](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/accordion/README.md) and [Spinner](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/spinner/README.md). Remove the comments ( `<!--`, `-->`) and start using it.
```
# Component name

<!--Add description for the component-->

## Usage

<!--
This section answers the question: when to use and when not to use this component?

* Reason 1
* Reason 2
* Reason 3
-->

## Variants

<!--

In this section define the variant the component in question has (e.g. the button component has three variants: primary, secondary and text).

Variants: **Variant 1**, **variant 2**

![Variants image](path to the image)

_Image caption_

If the component has no variants this section can be removed.

-->

## States

<!--

Define the different states for the component if there are any.

States: **State 1**, **state 2**

![States image](path to the image)

_Image caption_

-->

## Anatomy

<!--

In the anatomy section an image displays all the elements that are part of the component and as a caption a list of the numerical references present on the image providing the names of each element.

![Anatomy image](path to the image)

_Image caption_

1. Element 1
2. Element 2

-->

## Design specifications

<!--

The design specifications section provides developers the information needed to apply the correct visual properties of the component.

![Specs image](path to the image)

_Image caption_

### Color
### Typography
### Border
### Spacing

-->

## Accesibility

<!--
Add WCAG success criterion and WAI-ARIA design pattern and example when available

### WCAG 

* Understanding WCAG 2.2 - [SC x.x name of the succes criterion](url)

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [x.x title of the section](url)
* WAI-ARIA Authoring practices 1.2 - ["Name" design pattern](url)
-->


## Links and references

<!--

* [Angular CDK component](url)
* [React CDK component](url)

____________________________________________________________

* [Edit this page on GitHub](url)

```
