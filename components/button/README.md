# Button

Buttons are basic interface elements that initialize an action or function when the user interacts with them. The appearance of the button should suggest the user takes an action that leads to different scenarios.

These elements that reinforce to the user the necessity to interact are called CTA (Call to Action) components, which basically are designed to capture user attention and improve the user experience within the application.

## Appereance

In Halstack Design System you will find several buttons with different shades, colors, and sizes, each of them carefully designed following best practices to fit in every application that will be built or integrated with this system.


### Modes

We can identify three different modes that imply some visual changes according to color, border or opacity attributes.

Modes: **primary**, **secondary** and **text**.

![Button modes example](images/button_modes.png)


### States

The states are the different behaviors of the button component based on the interaction of the user.
For the desktop version, we contemplate five different states by which can pass.

States: **enabled**, **hover**, **focus**, **active** and **disabled**.

![Button state example](images/button_states.png)



## Design Specifications


![Button specification](images/button_specs.png)

### Color

#### Primary button

| Tokens                           | Value       |
| ------------------------------   | ----------- |
| `primaryBackgroundColor`         |     #6F2C91 |
| `primaryFontColor`               |     #FFFFFF |
| `primaryHoverBackgroundColor`    |     #000000 |
| `primaryHoverFontColor`          |     #FFFFFF |
| `primaryActiveBackgroundColor`   |     #676767 |
| `disabledPrimaryBackgroundColor` |     #CEB7D9 |
| `disabledPrimaryFontColor`       |     #FFFFFF |
| `focusColor`                     |     #005FCC |

#### Secondary button

| Tokens                           |  Value      |
| ------------------------------   | ------------|
| `secondaryOutlinedColor`         |     #6F2C91 |
| `secondaryBackgroundColor`       | transparent |
| `secondaryFontColor`             |     #000000 |
| `secondaryHoverFontColor`        |     #000000 |
| `secondaryHoverBackgroundColor`  |     #EEEEEE |
| `secondaryActiveBackgroundColor` |     #DBDBDB |
| `disabledSecondaryOutlinedColor` |     #CEB7D9 |
| `disabledSecondaryFontColor`     |     #B1B1B1 |
| `focusColor`                     |     #005FCC |

#### Text button

| Tokens                           | Value       |
| ------------------------------   | ----------- |
| `textBackgroundColor`            | transparent |
| `textFontColor`                  |     #6F2C91 |
| `textHoverBackgroundColor`       |     #000000 |
| `textHoverFontColor`             |     #FFFFFF |
| `textActiveBackgroundColor`      |     #676767 |
| `disabledTextFontColor`          |     #CEB7D9 |
| `focusColor`                     |     #005FCC |

#### Size

The component `width` can adopt the following values:

width | value
-- | --
```small``` | 60px
```medium``` | 240px
```large``` | 480px
```fillParent``` | -
```fitContent``` | -

The component `height` is fixed:

height | value
-- | --
| `min-height`        |      40px |

### Margin

Button `margin` can use the values:

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px

These values can be applied independently to each side of the component:
```top``` ```bottom``` ```left``` ```right```

### Padding

| Property            | Value     |
| ------------------  | --------- |
| `padding-right`     |      24px |
| `padding-left`      |      24px |


### Border

| Property            | Value     |
| ------------------  | --------- |
| `border-radius`     |       4px |
| `border-width`      |       1px |
| `border-width` focus outline      |       2px |


### Typography

| Property            | Value     |
| ------------------  | --------- |
| `font-size`     |       1rem/16px |
| `font-weight`     |       400 |
| `line-height`     |       1.5em |




### Icon Usage

Any icon can be used in Halstack Design System, so it is apt to the user to choose between one of the multiple options that are offered through internet but it is recommended to use the same library of icons along the application to keeping concistency.

* Icon can go before or after the text with a separation of 8 pixels respecting the main button's text. 
* Do not use icons mainly for visual interest, the glyph must add information and clarification to the action that would be performed in the context of the button.
* A button with an icon and no text is also allowed in the design system.

![Button with icon examples](images/button_icon.png)



## User Interface Design Considerations

Here, you can find more considerations in the using of buttons:

- In instances where buttons are vertically stacked, buttons should be the same length.
- Horizontally displayed buttons are dependent on the amount of text, so button lengths may vary, always considering the minimum and maximum established sizes.
- Text or icon on a button should always be centered.
- There must be 24 pixels of space between horizontally displayed buttons.
- Button location, not dictated by workflow, should be centered or right aligned at the section/page margin. This can be defined by the application but should be consistent throughout.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/84bacd8b-f5aa-4369-9fe3-c2cd53165c90/variables/
