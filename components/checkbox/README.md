## Overview

Checkboxes are inputs that offer to the user the possibility to select one or more options from a range of attributes.

The using of checkbox would be reasonable to proceed with the settings configuration, multiple choices offered, binary response (yes/no), or accept conditions and additional features.

## Appereance

A checkbox has a toggle mode so every checkbox component in the application remaining the same visually. It inherits colors from the definition of the theme, using primary color as the text content of the checkbox and accent color as a background of the box.

### Modes

As it is pointing in the description, the checkbox is a component that can get two defined modes, selected when the option wants to be added or included or unselected when the option should not be included. These options are mapping accordingly with the boolean values true and false.
Modes: **selected** or **unselected**.

![Checkbox modes](images/checkbox_modes.png)

### States

The following states are defined in the life cycle of the component: **enabled**, **hover**, **focus** and **disabled**.

![Checkbox states](images/checkbox_states.png)





## Design Specifications

Specifications for checkbox are simple. The size of the checkbox should display a box 20 x 20 pixels due to improving the touchable area. Depends on the input of the component it can be used different variation as are describe below:

- Checkbox only
- Checkbox with left-positioned label
- Checkbox with right-positioned label


![Checkbox specs](images/checkbox_specs.png)

### Color

| Component Tokens               |   Default value |
| ------------------------------ | --------------: |
| backgroundColorChecked         |       `#0067B3` |
| borderColor                    |       `#0067B3` |
| checkColor                     |       `#FFFFFF` |
| fontColor                      | `black/inherit` |
| disabledBackgroundColorChecked |       `#B1CEE6` |
| disabledBorderColor            |       `#B1CEE6` |
| disabledCheckColor             |       `#FFFFFF` |
| disabledFontColor              |       `#B1B1B1` |
| focusColor                     |       `#005FCC` |

\*There is a relation between the _backgroundColor_ of the component and the _borderColor_ in the case that the checkbox is unselected. The color will be the same for both scenarios.


### Margin

Margin can be set independently for `top`, `right`, `bottom`, `left`.

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px

### Typography

| Property              | Element       | Value     |   Token          |
| --------------------- | -----------   | --------  | ---------        |
| `font-size`           | label         | 16px      | `type-scale-03`  |
| `font-weight`         | label         | 400       | `type-regular`   |

### Border

| Property              | Element       | Value     |   Token          |
| --------------------- | -----------   | --------  | ---------        |
| `border-radius`       | checkbox      | 2px       | `rounded-small`  |
| `border-radius`       | focus outline | 4px       | `rounded-medium` |
| `border-width`        | checkbox      | 2px       | -                |
| `border-width`        | focus outline | 1px       | -                |


## Stack

Checkbox may be either vertically or horizontally stacked.

![Checkbox design specifications for stacked display](images/checkbox_stacked.png)

### Vertical stacking

Checkboxes are independent of a category and they will be displayed horizontally, where device allows. The vertical spacing between stacked checkboxes should be 16px.

### Horizontal stacking

Checkbox is related and have a group label to enhance readability and show association. The horizontal spacing between horizontally stacked checkboxex should be 32px.


## Required

The last property that the checkbox can get is the required attribute that would represent once the checkbox has a paring label, indicating that the selection of that input must be done, in another case the user wouldn't proceed with the application flow.
The representation of a required checkbox is a colored asterisk right before the checkbox label.

![Checkbox design required field](images/checkbox_required.png)

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/2fc249e5-ca58-4175-acf6-2a214df877b7/variables/

