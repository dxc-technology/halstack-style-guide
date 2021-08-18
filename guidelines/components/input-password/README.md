# Input-password

The input-password component is very much like the input-text, with the difference that their value is obscured by default(by replacing its characters with dot symbol ("•") and the mask can be toogled on/off using the show and hide component action.

## Usage

* Use the component input-password when the value expected is a password and need to be secured
* When creating a password, provide the requirements in the helper text
* Show the validation of the input-password only when the component loses the focus


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


## Design specifications

![Input-password component specifications](images/password_specs.png)

_Input-password component specifications_

### Color

| Component token          | Element            | Token             | Value             |
| ------------------------ | ------------------ | ----------------- | ----------------- |
| `labelFontColor`         | Label              | `black`           | #000000           |
| `valueFontColor`         | Value              | `black`           | #000000           |
| `helperTextFontColor`    | Helper-text        | `black`           | #000000           |
| `enabledOutlineColor`    | Outline:enabled    | `black`           | #000000           |
| `ActionIconColor`        | Action icon        | `black`           | #000000           |
| `ActionBackgroundColor`  | Action             | `transparent`     | #transparent      |

#### Interactive

| Component token                 | Element                     | Token             | Value           |
| ------------------------------- | --------------------------- | ----------------- | --------------- |
| `hoverOutlineColor`             | Outline:hover               | `purple-500`      | #a46ede         |
| `focusOutlineColor`             | Outline:focus               | `purple-500`      | #a46ede         |
| `errorOutlineColor`             | Outline:error               | `red-700`         | #d0011b         |
| `disabledOutlineColor`          | Outline:disabled            | `grey-500`        | #999999         |
| `errorMessageColor`             | Error message               | `red-700`         | #d0011b         |
| `errorIconColor`                | Error icon                  | `red-700`         | #d0011b         |
| `disabledContainerFillColor`    | Input container:disabled    | `grey-100`        | #f2f2f2         |
| `disabledLabelFontColor`        | Label:disabled              | `grey-500`        | #999999         |
| `disabledValueFontColor`        | Value:disabled              | `grey-500`        | #999999         |
| `disabledHelperTextFontColor`   | Helper text:disabled        | `grey-500`        | #999999         |
| `disabledPlaceholderFontColor`  | Placeholder:disabled        | `grey-500`        | #999999         |
| `hoverActionBackgroundColor`    | Action:hover                | `grey-100`        | #f2f2f2         |
| `focusActionBackgroundColor`    | Action:focus                | `grey-100`        | #f2f2f2         |
| `activeActionBackgroundColor`   | Action:active               | `grey-300`        | #cccccc         |
| `disabledActionBackgroundColor` | Action:disabled             | `transparent`     | transparent     |
| `hoverActionIconColor`          | Action icon:hover           | `grey-500`        | #999999         |
| `focusActionIconColor`          | Action icon:focus           | `grey-500`        | #999999         |
| `disabledActionIconColor`       | Action icon:disabled        | `grey-500`        | #999999         |


### Typography

| Property        | Element        | Token                   | Value           |
| --------------- | -------------- | ----------------------- | --------------- |
| `font-family`   | Label          | `type-sans`             | Open Sans       |
| `font-size`     | Label          | `type-scale-02`         | 0.875rem / 14px |
| `font-weight`   | Label          | `type-bold`             | 600             |
| `line-height`   | Label          | `type-leading-loose-01` | 1.75em          |
| `font-family`   | Value          | `type-sans`             | Open Sans       |
| `font-size`     | Value          | `type-scale-03`         | 1rem / 16px     |
| `font-weight`   | Value          | `type-regular`          | 400             |
| `font-family`   | Error message  | `type-sans`             | Open Sans       |
| `font-size`     | Error message  | `type-scale-01`         | 0.75rem / 12px  |
| `font-weight`   | Error message  | `type-regular`          | 400             |
| `line-height`   | Error message  | `type-leading-normal`   | 1.5em           |



### Spacing


| Property        | Element         | Token             | Value           |
| --------------- | --------------- | ----------------- | --------------- |
| `margin-left`   | Error icon      | `spacing-02`      | 0.25rem / 4px   |
| `padding-left`  | Input           | `spacing-03`      | 0.5rem / 8px    |
| `padding-left`  | Input container | `spacing-03`      | 0.5rem / 8px    |
| `padding-right` | Input container | `spacing-03`      | 0.5rem / 8px    |
| `margin-top`    | Input container | `spacing-02`      | 0.25rem / 4px   |
| `margin-bottom` | Input container | `spacing-02`      | 0.25rem / 4px   |

### Border

| Property        | Element               | Token             | Value           |
| --------------- | --------------------- | ----------------- | --------------- |
| `border`        | Input container       | `-`               | 1px solid       |
| `box-shadow`    | Input container:focus | `-`               | 1px solid       |


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

