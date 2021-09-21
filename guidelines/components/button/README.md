# Button

Buttons are basic interface elements that initialize an action or function when the user interacts with them. The appearance of the button should suggest the user takes an action that leads to different scenarios.

These elements that reinforce to the user the necessity to interact are called CTA (Call to Action) components, which basically are designed to capture user attention and improve the user experience within the application.


## Usage


- In instances where buttons are vertically stacked, buttons should be the same length.
- Horizontally displayed buttons are dependent on the amount of text, so button lengths may vary, always considering the minimum and maximum established sizes.
- Text or icon on a button should always be centered.
- There must be 8 pixels of space between horizontally displayed buttons.

## Variants

We can identify three different variants that imply some visual changes according to color and border attributes.

Variants: **primary**, **secondary** and **text**.

![Example of the button component variants](images/button_variants.png "Example of the button component variants")
_Example of the button component variants_

## States

The states are the different behaviors of the button component based on the interaction of the user.
For the desktop version, we contemplate five different states by which can pass.

States: **enabled**, **hover**, **focus**, **active** and **disabled**.

![Button component states](images/button_states.png "Button component states")
_Button component states_

## Design Specifications


![Design specifications for button component](images/button_specs.png "Design specifications for button component")
_Design specifications for button component_

### General


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

#### Typography 

| Component token            | Property         | Core token              | Value     |
| :------------------------- | :--------------- | :---------------------- | --------- |
| `labelFontLineHeight`      | line-height      | `font-leading-normal`   | 1.5 em    |
| `labelLetterSpacing`       | letter-spacing   | `font-spacing-wide-01`  | 0.025 em  |


 ### Primary
 
 #### Color
 
 ##### Base

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `primaryBackgroundColor`            | Button container            | `color-purple-700`       | #5f249f     |
| `primaryFontColor`                  | Label                       | `color-white`            | #ffffff     | 

 ##### Interactive

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `primaryHoverBackgroundColor`       | Container fill:hover	    | `color-purple-800`       | #4b1c7d     |
| `primaryActiveBackgroundColor`      | Container fill:active	    | `color-purple-900`       | #321353     |
| `primaryDisabledBackgroundColor`    | Container fill:disabled     | `color-grey-100`         | #f2f2f2     |
| `primaryDisabledFontColor`          | Label:disabled              | `color-grey-500`         | #999999     |
| `secondaryFocusBorderColor`	      | Container border:focus      | `color-blue-600`         | #0095ff     |

#### Border

| Component token                | Element          | Core token                 | Value            |
| :----------------------------- | :--------------- | :------------------------- | :--------------- |
| `primaryBorderThickness`       | Container        | `border-width-0`           | 0                |
| `primaryBorderStyle`           | Container        | `border-style-none`        | none             |
| `primaryBorderRadius`          | Container        | `border-radius-medium`     | 0.25rem / 4px    |



#### Typography

| Component token         | Element           | Core token           | Value                      |
| :---------------------- | :---------------- | :------------------- | :------------------------- |
| `primaryFontFamily`     | Label             | `font-family-sans`   | 'Open Sans', sans-serif    |
| `primaryBorderStyle`    | Label             | `font-scale-03`      | 1 rem / 16px               |
| `primaryBorderRadius`   | Label             | `font-regular`       | 400                        |


#### Padding

| Component token             | Element          | Core token     | Value             |
| :-------------------------- | :--------------- | :------------- | :---------------- |
| `primaryPaddingTop`         | Label            | `spacing-04`   | 0.75 rem / 12px   |
| `primaryPaddingBottom`      | Label            | `spacing-04`   | 12px / 0.75 rem   |

### Secondary

#### Color

##### Base

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `secondaryBackgroundColor`          | Container fill              | `transparent`            | transparent |
| `secondaryFontColor`                | Label                       | `color-purple-700`       | #5f249f     |
| `secondaryBorderColor`              | Container border            | `color-purple-700`       | #5f249f     |

##### Interactive

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `secondaryHoverBackgroundColor`     | Container fill:hover        | `color-purple-700`       | #5f249f     |
| `secondaryActiveBackgroundColor`    | Container fill:active       | `color-purple-900`       | #321353     |
| `secondaryDisabledBackgroundColor`  | Container fill:disabled     | `color-transparent`	   | transparent |
| `secondaryDisabledFontColor`        | Label:disabled              | `color-grey-500`         | #999999     |
| `secondaryFocusBorderColor`	      | Container border:focus      | `color-blue-600`         | #0095ff     |
| `secondaryDisabledBorderColor`	  | Container border:disabled   | `color-grey-500`         | #999999     |

#### Border

| Component token                  | Element          | Core token                 | Value            |
| :------------------------------- | :--------------- | :------------------------- | :--------------- |
| `secondaryBorderThickness`       | Container        | `border-width-1	`          | 1px              |
| `secondaryBorderStyle`           | Container        | `border-style-solid`       | solid            |
| `secondaryBorderRadius`          | Container        | `border-radius-medium`     | 0.25rem / 4px    |


#### Typography

| Component token                 | Element          | Core token           | Value                      |
| :------------------------------ | :--------------- | :------------------- | :------------------------- |
| `secondaryFontFamily`           | Label            | `font-family-sans`   | 'Open Sans', sans-serif    |
| `secondaryFontSize`             | Label            | `font-scale-03`      | 16px / 1 rem               |
| `secondaryFontWeight`           | Label            | `font-regular`       | 400                        |


#### Padding

| Component token                | Element          | Core token  | Value              |
| :----------------------------- | :--------------- | :---------- | :----------------- |
| `secondaryPaddingTop`          | Label            | `-`         | 10px / 0.75 rem    |
| `secondaryPaddingBottom`       | Label            | `-`         | 10px / 0.75 rem    |


### Text

#### Color

##### Base

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `textBackgroundColor`               | Container fill              | `transparent`            | transparent |
| `textFontColor`                     | Label                       | `color-purple-700`       | #5f249f     |

###### Interactive

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `textHoverBackgroundColor`          | Container fill:hover        | `color-purple-100`       | #f2eafa     | 
| `textActiveBackgroundColor`         | Container fill:active       | `color-purple-200`       | #e5d5f6     | 
| `textDisabledBackgroundColor`       | Container fill:disabled     | `color-grey-100`         | #f2f2f2     | 
| `textDisabledFontColor`             | Label:disabled              | `color-grey-500`         | #999999     |
| `secondaryFocusBorderColor`	      | Container border:focus      | `color-blue-600`         | #0095ff     | 


#### Border

| Component token             | Element          | Core token                 | Value            |
| :-------------------------- | :--------------- | :------------------------- | :--------------- |
| `textBorderThickness`       | Container        | `border-width-0`           | 0                |
| `textBorderStyle`           | Container        | `border-style-none`        | none             |
| `textBorderRadius`          | Container        | `border-radius-medium`     | 0.25rem / 4px    |



#### Typography

| Component token              | Element          | Core token           | Value                      |
| :--------------------------- | :--------------- | :------------------- | :------------------------- |
| `textFontFamily`             | Label            | `font-family-sans`   | 'Open Sans', sans-serif    |
| `textFontSize`               | Label            | `font-scale-03`      | 16px / 1 rem               |
| `textFontWeight`             | Label            | `font-regular`       | 400                        |


#### Padding

| Component token              | Element          | Core token           | Value             |
| :--------------------------- | :--------------- | :------------------- | :---------------- |
| `textPaddingTop`             | Label            | `spacing-04`         | 12px / 0.75 rem   |
| `textPaddingBottom`          | Label            | `spacing-04`         | 12px / 0.75 rem   |




## Icon Usage

Any icon can be used in Halstack Design System, so it is apt to the user to choose between one of the multiple options that are offered through internet but it is recommended to use the same library of icons along the application to keeping concistency.

* Icon can go before or after the text with a separation of 8 pixels respecting the main button's text. 
* Do not use icons mainly for visual interest, the glyph must add information and clarification to the action that would be performed in the context of the button.
* A button with an icon and no text is also allowed in the design system.

![Icon usage examples](images/button_icon.png "Icon usage examples")

_Icon usage examples_

## Links and references

* [Angular CDK component](https://clicktime.symantec.com/3KG6rdmTz1vDaXhBTFLnHVX7Vc?u=https%3A%2F%2Fdeveloper.dxc.com%2Ftools%2Fangular%2Fnext%2F%23%2Fcomponents%2Fbutton)
* [React CDK component](https://clicktime.symantec.com/38Ybc495gf78pcUbWtvBoxs7Vc?u=https%3A%2F%2Fdeveloper.dxc.com%2Ftools%2Freact%2Fnext%2F%23%2Fcomponents%2Fbutton)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/button/README.md)
