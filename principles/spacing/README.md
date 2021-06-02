
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
| `spacing-00`  | 0      | 0    | 
| `spacing-01`  | 0.125  | 2    | 
| `spacing-02`  | 0.25   | 4    | 
| `spacing-03`  | 0.5    | 8    | 
| `spacing-04`  | 0.75   | 12   | 
| `spacing-05`  | 1      | 16   | 
| `spacing-06`  | 1.5    | 24   | 
| `spacing-07`  | 2      | 32   | 
| `spacing-08`  | 2.5    | 40   | 
| `spacing-09`  | 3      | 48   | 
| `spacing-10`  | 3.5    | 56   | 
| `spacing-11`  | 4      | 64   | 
| `spacing-12`  | 5      | 80   |
| `spacing-13`  | 6      | 96   | 
| `spacing-14`  | 7      | 112  | 



## Component spacing tokens

Most components across Halstack can adopt our component spacing tokens as `margin` or `padding` in every direction in order to create white space between components.

![Padding properties](images/spacing_padding.png)

_Usage of the `medium` token for `left` `right` `bottom` and `top` `padding` properties._


| Component token   | Core token    |
| :---              | :---          |
| `xxsmall`         | `spacing-03`  |
| `xsmall`          | `spacing-05`  |
| `small`           | `spacing-06`  |
| `medium`          | `spacing-07`  |
| `large`           | `spacing-09`  |
| `xlarge`          | `spacing-11`  |
| `xxlarge`         | `spacing-14`  | 

