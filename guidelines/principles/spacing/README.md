# Spacing

In the search of consistent alignment between the elements we provide a spacing scale based on a root values of 8px and 4px. The numbers 4 and 8 are easily multiplied, they provide flexible and consistent, yet distinct enough, steps between them.

![Spacing_overview](images/spacing_overview.png)

The spacing scale can be applied to  `margin`  or  `padding`  properties, as well as to both vertical and horizontal edges. 
The token takes the place of the values normally assigned to this properties.

## Spacing methods

### Fixed spacing

Althouhg the fixed spacing scale is most commonly used for vertical spacing, it can also be applied for horizontal spacing, especially in the case of spacing inside components.

![Spacing methods](images/spacing_types.png)

_**Left**: Horizontal: Used for smaller, more refined spacing needs, inside components._

_**Right**: Vertical: Used for positioning components on a page._

### Fluid spacing

The use of percentages (e.g. 50% or 33%) is a recommended way to divide a page or to control a component `max-width` and `min-width`. Using percentages for top and bottom values of `padding` or `margin` inside of a component or element should be avoided.

## Core spacing tokens

The core spacing scale is used to create space relationships for detail-level designs.

| Token         | rem    | px   | 
| :---          | :---   | :--- | 
| `spacing-0 `  | 0      | 0    | 
| `spacing-2`  | 0.125  | 2    | 
| `spacing-4`  | 0.25   | 4    | 
| `spacing-8`  | 0.5    | 8    | 
| `spacing-12`  | 0.75   | 12   | 
| `spacing-16`  | 1      | 16   | 
| `spacing-24`  | 1.5    | 24   | 
| `spacing-32`  | 2      | 32   | 
| `spacing-40`  | 2.5    | 40   | 
| `spacing-48`  | 3      | 48   | 
| `spacing-56`  | 3.5    | 56   | 
| `spacing-64`  | 4      | 64   | 
| `spacing-80`  | 5      | 80   |
| `spacing-96`  | 6      | 96   | 
| `spacing-112`  | 7      | 112  | 



## Component spacing tokens

Most components across Halstack can adopt our component spacing tokens as `margin` or `padding` in every direction in order to create white space between components.

![Padding properties](images/spacing_padding.png)

_Usage of the `medium` token for `left` `right` `bottom` and `top` `padding` properties._


| Component token     | Core token       | Value        |
| :------------------ | :--------------- | :----------- |
| `xxsmall`           | `spacing-4`     | 4px          |
| `xsmall`            | `spacing-8`     | 8px          |
| `small`             | `spacing-12`     | 12px         |
| `medium`            | `spacing-16`     | 16px         |
| `large`             | `spacing-24`     | 24px         |
| `xlarge`            | `spacing-32`     | 32px         |
| `xxlarge`           | `spacing-48`     | 48px         | 


____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/principles/spacing/README.md)
