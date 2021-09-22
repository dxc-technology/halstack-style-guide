# Input-password

The input-password component is very much like the input-text, with the difference that their value is obscured by default(by replacing its characters with dot symbol ("•") and the mask can be toogled on/off using the show and hide component action.

## Usage

### Do

* Use the component input-password when the value expected is a password and need to be secured
* Provide the requirements in the helper text

### Don't

* Show the validation of the input-password until the component loses the focus
* Disable the copy/paste input functionality

## States

The component password has the following states:

States: **Enabled**, **Hover**, **Focus**, **Error** and **Disabled**.

![Input-password component states](images/password_states.png)

_Input-password component states_

## Anatomy

![Component anatomy example](images/password_anatomy.png)

_Component anatomy example_

1. Label
2. Helper text _(Optional)_
3. Input container
4. Show/Hide action
5. Error icon
6. Error message
7. Input value

## Actions

![Show and hide action to toggle the value visibility](images/password_actions.png)

_Show and hide action to toggle the value visibility_

The value of the input can be toggled on or off using the default action the component provides. The input-password can be also clearable.

## Design specifications

![Input-password component specifications](images/password_specs.png)

_Input-password component specifications_

### Color

| Component token          | Element            | Token             | Value             |
| :----------------------- | :----------------- | :---------------- | :---------------- |
| `labelFontColor`         | Label              | `black`           | #000000           |
| `valueFontColor`         | Value              | `black`           | #000000           |
| `helperTextFontColor`    | Helper-text        | `black`           | #000000           |
| `enabledOutlineColor`    | Outline:enabled    | `black`           | #000000           |
| `ActionIconColor`        | Action icon        | `black`           | #000000           |
| `ActionBackgroundColor`  | Action             | `transparent`     | #transparent      |

#### Interactive

| Component token                 | Element                     | Token                   | Value           |
| :------------------------------ | :-------------------------- | :---------------------- | :-------------- |
| `hoverBorderColor`              | Border:hover                | `color-purple-500`      | #a46ede         |
| `focusBorderColor`              | Border:focus                | `color-blue-600`        | #0095ff         |
| `errorBorderColor`              | Border:error                | `color-red-700`         | #d0011b         |
| `hoverErrorBorderColor`         | Border:hover on error       | `color-red-600`         | #fe0123         |
| `disabledBorderColor`           | Border:disabled             | `color-grey-500`        | #999999         |
| `errorMessageColor`             | Error message               | `color-red-700`         | #d0011b         |
| `errorIconColor`                | Error icon                  | `color-red-700`         | #d0011b         |
| `disabledContainerFillColor`    | Input container:disabled    | `color-grey-100`        | #f2f2f2         |
| `disabledLabelFontColor`        | Label:disabled              | `color-grey-500`        | #999999         |
| `disabledValueFontColor`        | Value:disabled              | `color-grey-500`        | #999999         |
| `disabledHelperTextFontColor`   | Helper text:disabled        | `color-grey-500`        | #999999         |
| `disabledPlaceholderFontColor`  | Placeholder:disabled        | `color-grey-500`        | #999999         |
| `hoverActionBackgroundColor`    | Action:hover                | `color-grey-100`        | #f2f2f2         |
| `focusActionBackgroundColor`    | Action:focus                | `color-grey-100`        | #f2f2f2         |
| `activeActionBackgroundColor`   | Action:active               | `color-grey-300`        | #cccccc         |
| `disabledActionBackgroundColor` | Action:disabled             | `color-transparent`     | transparent     |
| `hoverActionIconColor`          | Action icon:hover           | `color-grey-500`        | #999999         |
| `focusActionIconColor`          | Action icon:focus           | `color-grey-500`        | #999999         |
| `disabledActionIconColor`       | Action icon:disabled        | `color-grey-500`        | #999999         |


### Typography

| Property        | Element        | Token                   | Value           |
| :-------------- | :------------- | :---------------------- | :-------------- |
| `font-family`   | Label          | `font-family-sans`      | Open Sans       |
| `font-size`     | Label          | `font-scale-02`         | 0.875rem / 14px |
| `font-weight`   | Label          | `font-weight-bold`      | 600             |
| `line-height`   | Label          | `font-leading-loose-01` | 1.75em          |
| `font-family`   | Value          | `font-family-sans`      | Open Sans       |
| `font-size`     | Value          | `font-scale-03`         | 1rem / 16px     |
| `font-weight`   | Value          | `font-regular`          | 400             |
| `font-family`   | Error message  | `font-family-sans`      | Open Sans       |
| `font-size`     | Error message  | `font-scale-01`         | 0.75rem / 12px  |
| `font-weight`   | Error message  | `font-weight-regular`   | 400             |
| `line-height`   | Error message  | `font-leading-normal`   | 1.5em           |


### Spacing


| Property        | Element         | Token             | Value           |
| :-------------- | :-------------- | :---------------- | :-------------- |
| `margin-left`   | Error icon      | `spacing-02`      | 0.25rem / 4px   |
| `margin-left`   | Action          | `spacing-02`      | 0.25rem / 4px   |
| `padding-left`  | Input           | `spacing-03`      | 0.5rem / 8px    |
| `padding-left`  | Input container | `spacing-03`      | 0.5rem / 8px    |
| `padding-right` | Input container | `spacing-03`      | 0.5rem / 8px    |
| `margin-top`    | Input container | `spacing-02`      | 0.25rem / 4px   |
| `margin-bottom` | Input container | `spacing-02`      | 0.25rem / 4px   |

### Border

| Property        | Element               | Token                    | Value           |
| :-------------- | :-------------------- | :----------------------- | :-------------- |
| `border-width`  | Input container       | `border-width-1`         | 1px             |
| `border-style`  | Input container       | `border-style-solid`     | solid           |
| `border-radius` | Input container       | `border-radius-medium`   | 0.25rem / 4px   |
| `box-shadow`    | Input container:focus | `-`                      | 1px solid       |


## Accesibility
### WCAG 

* Understanding WCAG 2.2 - [SC 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
* Understanding WCAG 2.2 - [SC 3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion)
* Understanding WCAG 2.2 - [SC 3.3.7 Accessible Authentication](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication)


### WAI Web Accessibility Tutorials

* Forms - [Full Password Example](https://www.w3.org/WAI/tutorials/forms/examples/password/)


## Links and references

<!--

* [Angular CDK component](url)
* [React CDK component](url)

-->
____________________________________________________________

* [Edit this page on GitHub](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/input-password/README.md)

