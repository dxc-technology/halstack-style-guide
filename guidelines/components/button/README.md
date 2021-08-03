# Button

Buttons are basic interface elements that initialize an action or function when the user interacts with them. The appearance of the button should suggest the user takes an action that leads to different scenarios.

These elements that reinforce to the user the necessity to interact are called CTA (Call to Action) components, which basically are designed to capture user attention and improve the user experience within the application.


## Usage


- In instances where buttons are vertically stacked, buttons should be the same length.
- Horizontally displayed buttons are dependent on the amount of text, so button lengths may vary, always considering the minimum and maximum established sizes.
- Text or icon on a button should always be centered.
- There must be 24 pixels of space between horizontally displayed buttons.
- Button location, not dictated by workflow, should be centered or right aligned at the section/page margin. This can be defined by the application but should be consistent throughout.

## Variants

We can identify three different modes that imply some visual changes according to color, border or opacity attributes.

Modes: **primary**, **secondary** and **text**.

![Button modes example](images/button_variants.png "Example of the button component variants")


## States

The states are the different behaviors of the button component based on the interaction of the user.
For the desktop version, we contemplate five different states by which can pass.

States: **enabled**, **hover**, **focus**, **active** and **disabled**.

![Button state example](images/button_states.png "Button component states")

## Design Specifications


![Button specification](images/button_specs.png "Design specifications for button component")

 ### Color
 
 #### On-light
 
 ##### Primary
 
 ###### Base

| Component token | Element	| Token | Value |
| --- | --- | --- | --- |
| `primaryBackgroundColor` | Button container | `Hal-Purple-S-38` | `#5f249f` |
| ` primaryFontColor` | Label | `Hal-White`| `#ffffff` |

 ###### Interactive

| Component token | Element | Token | Value |
| --- | --- | --- | --- |
| `primaryHoverBackgroundColor` | Container fill:hover	 | `Hal-Purple-D-30` | `#4b1c7d`
| `primaryActiveBackgroundColor` | Container fill:active	 | `Hal-Purple-D-20` | `#321353`
|  `primaryDisabledBackgroundColor` | Container fill:disabled | `Hal-Grey-L-95` | `#f2f2f2`
|  ` primaryHoverFontColor` | Label:hover | `Hal-White` | `#ffffff`
|  ` primaryActiveFontColor` | Label:active | `Hal-Purple-L-60` | `#ffffff`
|  ` primaryDisabledFontColor` | Label:disabled | `Hal-Grey-L-60` | `#999999`

##### Secondary

###### Base

| Component token | Element | Token | Value|
| --- | --- | --- | --- |
| `secondaryBackgroundColor` | Container fill | `transparent` | `transparent`
| `secondaryFontColor` | Label | `Hal-Purple-S-38` | `#5f249f`
| `secondaryBorderColor` | Container border | `Hal-Purple-S-38` | `#5f249f`

###### Interactive
| Component token | Element | Token |  Value | 
| --- | --- | --- | --- |
|  `secondaryHoverBackgroundColor` | Container fill:hover| `Hal-Purple-L-95`| `#f2eafa`
|  `secondaryActiveBackgroundColor` | Container fill:active| `Hal-Purple-L-90`| `#e5d5f6`
|  `secondaryDisabledBackgroundColor` | Container fill:disabled| `Hal-Grey-L-95`	| `#f2f2f2`
|  `secondaryHoverFontColor` | Label:hover | `Hal-Purple-S-38`| `#5f249f`
|  `secondaryActiveFontColor` | Label:active | `Hal-Purple-S-38`| `#5f249f`
|  `secondaryDisabledFontColor` | Label:disabled| `Hal-Grey-L-60`| 	`#999999`
|  `secondaryDisabledBorderColor`	 |  Container border:disabled | `Hal-Grey-L-60`| `#999999`

##### Text

###### Base
|  Component token|Element|Token|Value
| --- | --- | --- | --- |
| `textBackgroundColor`|Container fill|`transparent`|`transparent`
| `textFontColor`|Label|`Hal-Purple-S-38`|`#5f249f`

###### Interactive
|  Component token | Element | Token | Value |
| --- | --- | --- | --- |
|  `textHoverBackgroundColor` | Container fill:hover | `Hal-Purple-L-95` | `#f2eafa` | 
|  `textActiveBackgroundColor` | Container fill:active | `Hal-Purple-L-90` | `#e5d5f6` | 
|  `textDisabledBackgroundColor` | Container fill:disabled | `Hal-Grey-L-95` | `#f2f2f2` | 
| `textHoverFontColor` | Label:hover | `Hal-Purple-S-38` | `#5f249f` | 
| `textActiveFontColor` | Label:active | `Hal-Purple-S-38` | `#5f249f` | 
| `textDisabledFontColor` | Label:disabled | `Hal-Grey-L-60` | `#999999` | 


### Size

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

## Icon Usage

Any icon can be used in Halstack Design System, so it is apt to the user to choose between one of the multiple options that are offered through internet but it is recommended to use the same library of icons along the application to keeping concistency.

* Icon can go before or after the text with a separation of 8 pixels respecting the main button's text. 
* Do not use icons mainly for visual interest, the glyph must add information and clarification to the action that would be performed in the context of the button.
* A button with an icon and no text is also allowed in the design system.

![Button with icon examples](images/button_icon.png "Icon usage examples")


## Links and references

* [Angular CDK component](https://clicktime.symantec.com/3KG6rdmTz1vDaXhBTFLnHVX7Vc?u=https%3A%2F%2Fdeveloper.dxc.com%2Ftools%2Fangular%2Fnext%2F%23%2Fcomponents%2Fbutton)
* [React CDK component](https://clicktime.symantec.com/38Ybc495gf78pcUbWtvBoxs7Vc?u=https%3A%2F%2Fdeveloper.dxc.com%2Ftools%2Freact%2Fnext%2F%23%2Fcomponents%2Fbutton)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/button/README.md)
