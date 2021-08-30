# Heading

Heading component is an essential element that contributes to define a great hierarchy within the application. It helps to give semantic meaning to the content as well as contributing to define a good structure for SEO (search engine optimization). The implementation will rely on the use of HTML tags.
## Usage

Navigating through the `Headings-H1` and `Headings-H3` give a user an overview of a page and how its content is structured. The `Headings-H4` and `Headings-H5` elements provide a quick understanding of the details in each section.

### Do's

* Use `Heading` components from `H1` to `H5` when creating content hierarchy in the page. 
* Use headings for page headings and for specific sections of content.
* Use purposeful words to summarize the content that follows.

### Dont's

* Do not style text to give the visual appearance of headings.
* Avoid "stacking" headings without any body content in between.


## Appearance

The Open Sans typeface has 5 different weights, from light to extra-bold but Halstack use three variations, light, regular and bold. For each variation, it exists an italic form that is used in some scenarios. The font size goes from 60 pixels for the more prominent heading to 20 pixels for the lowest title level.

![Variations of the heading](images/heading.png)

There are several scenarios where the use of heading is just right when we are talking about the title for a section, header of a table, a definition of the elements that will appear below the title or an introduction for a paragraph. 

Apart from that, many of the design system components are making use of headings in their implementation (e.g., card, dialog, sidenav and so on). 

## Design tokens

### Color

An inherit color from the definition of the application is received, so the component could change his color based on that parameter. There is no specific color tokens for this component.

### Typography

#### Hal-Headings-H1

| Property            | Value                     | Token                     | 
| :------------------ | :------------------------ | :------------------------ |  
| `font-family`       | 'Open Sans', sans-serif;  | `font-family-sans`        | 
| `font-weight`       | 300                       | `font-light`              | 
| `font-size`         | 60px / 3.75rem            | `font-scale-08`           | 
| `font-style`        | regular                   | `font-normal`             | 
| `text-transform`    | initial                   |                           | 
| `letter-spacing`    | -12.5px / -0.0125em       | `font-tracking-tight-01`  | 
| `line-height`       | 81.9px/  1.365em          | `font-leading-compact-01` |

#### Hal-Headings-H2

| Property            | Value                     | Token                     | 
| :------------------ | :------------------------ | :------------------------ | 
| `font-family`       | 'Open Sans', sans-serif;  | `font-family-sans`        | 
| `font-weight`       | 400                       | `font-regular`            | 
| `font-size`         | 48px / 3rem               | `font-scale-07`           | 
| `font-style`        | regular                   | `font-normal`             | 
| `text-transform`    | initial                   |                           | 
| `letter-spacing`    | 0px / 0em                 | `font-tracking-normal`    | 
| `line-height`       | 65.52px / 1.365em         | `font-leading-compact-01` | 

#### Hal-Headings-H3

| Property            | Value                     | Token                     | 
| :------------------ | :------------------------ | :------------------------ | 
| `font-family`       | 'Open Sans', sans-serif;  | `font-family-sans`        | 
| `font-weight`       | 400                       | `font-regular`            | 
| `font-size`         | 32px / 2rem               | `font-scale-06`           | 
| `font-style`        | regular                   | `font-normal`             | 
| `text-transform`    | initial                   |                           | 
| `letter-spacing`    | 0px / 0em                 | `font-tracking-normal`    | 
| `line-height`       | 48px / 1.5em              | `font-leading-normal`     | 

#### Hal-Headings-H4

| Property            | Value                     | Token                     | 
| :------------------ | :------------------------ | :------------------------ | 
| `font-family`       | 'Open Sans', sans-serif;  | `font-family-sans`        | 
| `font-weight`       | 400                       | `font-regular`            | 
| `font-size`         | 24px / 1.5rem             | `font-scale-05`           | 
| `font-style`        | regular                   | `font-normal`             | 
| `text-transform`    | initial                   |                           |
| `letter-spacing`    | 0px / 0em                 | `font-tracking-normal`    | 
| `line-height`       | 36px / 1.5em              | `font-leading-normal`     | 

#### Hal-Headings-H5

| Property            | Value                     | Token                     | 
| :------------------ | :------------------------ | :------------------------ | 
| `font-family`       | 'Open Sans', sans-serif;  | `font-family-sans`        | 
| `font-weight`       | 400                       | `font-regular`            | 
| `font-size`         | 20px / 1.25rem            | `font-scale-04`           | 
| `font-style`        | regular                   | `font-normal`             | 
| `text-transform`    | initial                   |                           | 
| `letter-spacing`    | 0px / 0em                 | `font-tracking-normal`    | 
| `line-height`       | 30px / 1.5em              | `font-leading-normal`     | 



## Accesibility

* Heading components should be in order. That means an `Headings-H1` is followed by an `Headings-H2`, an `Headings-H2` is followed by a `Headings-H2` or `Headings-H3` and so on.
* Keep heading tags consistent. Inconsistently implementing headings can create confusion and frustration for users using assistive technologies.
* Headings are not interactive elements and therefore have no keyboard or pointer interaction.

### WCAG 2.1 Related Success Criterion

* SC 1.3.1 - [Info and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
* SC 2.4.6 - [Headings and labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)


## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/heading/README.md)
