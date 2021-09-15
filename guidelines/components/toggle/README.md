# Toggle group

Toggle buttons can be used to put together related options that share a common attribute modification.
It allows the user to switch from one selected option to another in the same control, having one option selected at a time. Also, there can be another variation that allows selecting multiple options from the current toggle group.


## Usage

Toggles should be used in place of radio buttons whenever the options are:

* Minimal in number, i.e. 3 or 4 maximum choices where only one selction is required
* Opposites of each other

## Variants

![Toggle component single and multiple variants](images/toggle_variants.png)

_Toggle component single and multiple variants_

The selection of the toggle group can be mutually exclusive (single variant) or multiple (multiple variant).

## States

Different states are defined in the life cycle of the component:
**Unselected enabled**, **unselected hover**, **unselected focus**, **unselected active**, **unselected disabled**, **selected enabled**, **selected hover**, **selected focus**, **selected active** and **selected disabled**

![Toggle button states example](images/toggle_states.png)

_Toggle button states example_


## Anatomy

![Toggle component anatomy](images/toggle_anatomy.png)

1. Container
2. Label/Icon


## Icon Usage

Inside the toggle button, it is possible to use icons to represent recognizable actions. The specifications for icon usage differs a little bit in relation to text usage. The size of the icons should be 24 by 24 pixels, it must be centered respecting to the box that contains it vertically and horizontally. 


## Design Specifications

![Toggle design specifications](images/toggle_specs.png)

_Toggle design specifications_
## Color

| Token          | Value|
|--------------------|------|
| `selectedBackgroundColor` |  #5f249f |
| `selectedBackgroundHoverColor` | #000000 |
| `selectedFontColor` | #FFFFFF |
| `selectedHoverFontColor` | #FFFFFF |
| `unselectedBackgroundColor` | #D9D9D9 |
| `unselectedBackgroundHoverColor` | #EEEEEE |
| `unselectedFontColor` | #000000 |
| `unselectedHoverFontColor` | #000000 |
| `disabledSelectedBackgroundColor` | #D0BDDB |
| `disabledSelectedFontColor` | #FFFFFF |
| `disabledUnselectedBackgroundColor` | #F2F2F2 |
| `disabledUnselectedFontColor` | #B1B1B1 |


### Size

| Property           | Value|
|--------------------|------|
| Min. height| `43px` |

### Margin

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px

And also apply different values to each side of the component:
```top``` ```bottom``` ```left``` ```right```


### Padding

Padding | value
-- | --
| `padding` right/left (item)| 30px |
| `padding` top/bottom (item)| 12px |



### Border

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `border-width`           | Container        | `border-width-0`           | 0                |
| `border-style`           | Container        | `border-style-none`        | none             |
| `border-radius`          | Container        | `border-radius-medium`     | 0.25rem / 4px    |
| `border-width`           | Focus border     | `border-width-2`           | 2                |
| `border-style`           | Focus border     | `border-style-solid`       | solid            |
| `border-radius`          | Focus border     | `border-radius-medium`     | 0.25rem / 4px    |

### Typography

| Property           | Value|
|--------------------|------|
| `font-size`| 14px |
| `font-weight`| Regular |



## Links and references

[React CDK component](https://developer.dxc.com/tools/react/next/#/components/toggleGroup)
[Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/toggleGroup)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/toggle/README.md)
