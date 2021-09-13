# Toggle group

Toggle buttons can be used to put together related options that share a common attribute modification.
It allows the user to switch from one selected option to another in the same control, having one option selected at a time. Also, there can be another variation that allows selecting multiple options from the current toggle group.


## Appearance

The appearance of the toggle looks like button component, because it is based on the same specifications to keeping consistency along with the application, but in this case are offered fewer visual modes.

![Toggle appearance](images/toggle_appearance.png)

## Modes

The selection of the toggle group can be mutually exclusive or multiple. Depending on the context a user may need to select more than one option at once.

## States

Different states are defined in the life cycle of the component:
__Enabled__, __Hover__, __selected__ and __disabled__.

![Toggle states](images/toggle_states.png)

## Design tokens

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



## Design Specifications

![Toggle specifications](images/toggle_specs.png)


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

## Icon Usage

Inside the toggle button, it is possible to use icons to represent recognizable actions.
The specifications for icon usage differs a little bit in relation to text usage.

The size of the icons should be 20 by 20 pixels, it must be centered respecting to the box that contains it vertically and horizontally. 
The ideal padding for each option is 10 pixels for top and bottom and 12 pixels to right and left sides.

The behavior in regard to colors and interactions are the same that for the previous.

## User Interface Design Considerations

Toggles should be used in place of radio buttons whenever the options are
- Minimal in number, i.e. 3 or 4 maximum choices where only one selction is required
- Opposites of each other


## Links and references
https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/badbf3be-4d04-4189-a99d-43e37ed4afc9/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/toggle/README.md)
