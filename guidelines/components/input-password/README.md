# Input-password

The input-password component is very much like the input-text, with the difference that their value is obscured by default(by replacing its characters with dot symbol ("•") and the mask can be toogled on/off using the show and hide component action.

## Usage

* Use the component input-password when the value expected is a password and need to be secured
* When creating a password, provide the requirements in the helper text
* Show the validation of the input-password only when the component loses the focus


## States

The component password has the following states:

States: **Enabled**, **Hover** and **Focus**

<!--

![States image](path to the image)

_Image caption_
-->

## Anatomy

<!--

In the anatomy section an image displays all the elements that are part of the component and as a caption a list of the numerical references present on the image providing the names of each element.

![Anatomy image](path to the image)

_Image caption_

1. Element 1
2. Element 2

-->

## Design specifications

<!--

The design specifications section provides developers the information needed to apply the correct visual properties of the component.

![Specs image](path to the image)

_Image caption_

-->

### Color

| Component token          | Element            | Token             | Value             |
| ------------------------ | ------------------ | ----------------- | ----------------- |
| `labelFontColor`         | Label              | `Hal-Black`       | #000000           |
| `valueFontColor`         | Value              | `Hal-Black`       | #000000           |
| `helperTextFontColor`    | Helper-text        | `Hal-Black`       | #000000           |
| `enabledOutlineColor`    | Outline:enabled    | `Hal-Black`       | #000000           |
| `ActionIconColor`        | Action icon        | `Hal-Black`       | #000000           |
| `ActionBackgroundColor`  | Action             | `transparent`     | #transparent      |

#### Interactive

| Component token                 | Element                     | Token             | Value           |
| ------------------------------- | --------------------------- | ----------------- | --------------- |
| `hoverOutlineColor`             | Outline:hover               | `Hal-Purple-L-65` | #a46ede         |
| `focusOutlineColor`             | Outline:focus               | `Hal-Purple-L-65` | #a46ede         |
| `errorOutlineColor`             | Outline:error               | `Hal-Red-S-41`    | #d0011b         |
| `disabledOutlineColor`          | Outline:disabled            | `Hal-Grey-L-60`   | #999999         |
| `errorMessageColor`             | Error message               | `Hal-Red-S-41`    | #d0011b         |
| `errorIconColor`                | Error icon                  | `Hal-Red-S-41`    | #d0011b         |
| `disabledContainerFillColor`    | Input container:disabled    | `Hal-Grey-L-95`   | #f2f2f2         |
| `disabledLabelFontColor`        | Label:disabled              | `Hal-Grey-L-60`   | #999999         |
| `disabledValueFontColor`        | Value:disabled              | `Hal-Grey-L-60`   | #999999         |
| `disabledHelperTextFontColor`   | Helper text:disabled        | `Hal-Grey-L-60`   | #999999         |
| `disabledPlaceholderFontColor`  | Placeholder:disabled        | `Hal-Grey-L-60`   | #999999         |
| `hoverActionBackgroundColor`    | Action:hover                | `Hal-Grey-L-95`   | #f2f2f2         |
| `focusActionBackgroundColor`    | Action:focus                | `Hal-Grey-L-95`   | #f2f2f2         |
| `activeActionBackgroundColor`   | Action:active               | `Hal-Grey-L-80`   | #cccccc         |
| `disabledActionBackgroundColor` | Action:disabled             | `transparent`     | transparent     |
| `hoverActionIconColor`          | Action icon:hover           | `Hal-Grey-L-60`   | #999999         |
| `focusActionIconColor`          | Action icon:focus           | `Hal-Grey-L-60`   | #999999         |
| `disabledActionIconColor`       | Action icon:disabled        | `Hal-Grey-L-60`   | #999999         |


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

<!--
Add WCAG success criterion and WAI-ARIA design pattern and example when available

### WCAG 

* Understanding WCAG 2.2 - [SC x.x name of the succes criterion](url)

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [x.x title of the section](url)
* WAI-ARIA Authoring practices 1.2 - ["Name" design pattern](url)
-->


## Links and references

<!--

* [Angular CDK component](url)
* [React CDK component](url)

-->
____________________________________________________________

* [Edit this page on GitHub](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/input-password/README.md)

