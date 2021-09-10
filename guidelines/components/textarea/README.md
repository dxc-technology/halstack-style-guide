# Textarea

A textarea allows the users enter a multi-line, free-form text.

## Usage

* Use the texarea when you need users to enter a text longer than a single line
* Avoid using the text area when complex questions can break up in simpler ones 
## States


States: **Enabled**, **hover**, **focus**, **error** and **disabled**.

![Textarea component states example](images/textarea_states.png)

_Textarea component states example_
## Anatomy


![Anatomy image](images/textarea_anatomy.png)

1. Label
2. Helper text _(Optional)_
3. Placeholder/Value
4. Container
5. Resizer
6. Error message


## Design specifications

![Component design specifications](images/textarea_specs.png)

_Component design specifications_

### Color

| Component token          | Element            | Token             | Value             |
| ------------------------ | ------------------ | ----------------- | ----------------- |
| `labelFontColor`         | Label              | `black`           | #000000           |
| `valueFontColor`         | Value              | `black`           | #000000           |
| `helperTextFontColor`    | Helper-text        | `black`           | #000000           |
| `enabledOutlineColor`    | Outline:enabled    | `black`           | #000000           |


#### Interactive

| Component token                 | Element                     | Token             | Value           |
| ------------------------------- | --------------------------- | ----------------- | --------------- |
| `hoverBorderColor`              | Border:hover                | `purple-500`      | #a46ede         |
| `focusBorderColor`              | Border:focus                | `blue-600`        | #0095ff         |
| `errorBorderColor`              | Border:error                | `red-700`         | #d0011b         |
| `hoverErrorBorderColor`         | Border:hover on error       | `red-600`         | #fe0123         |
| `disabledBorderColor`           | Border:disabled             | `grey-500`        | #999999         |
| `errorMessageColor`             | Error message               | `red-700`         | #d0011b         |
| `disabledContainerFillColor`    | Input container:disabled    | `grey-100`        | #f2f2f2         |
| `disabledLabelFontColor`        | Label:disabled              | `grey-500`        | #999999         |
| `disabledValueFontColor`        | Value:disabled              | `grey-500`        | #999999         |
| `disabledHelperTextFontColor`   | Helper text:disabled        | `grey-500`        | #999999         |
| `disabledPlaceholderFontColor`  | Placeholder:disabled        | `grey-500`        | #999999         |



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
| `padding-left`  | Input container | `spacing-03`      | 1rem / 16px     |
| `padding-right` | Input container | `spacing-03`      | 1rem / 16px     |
| `margin-top`    | Input container | `spacing-02`      | 0.5rem / 8px    |
| `margin-bottom` | Input container | `spacing-02`      | 0.5rem / 8px    |

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



* [Angular CDK component](https://developer.dxc.com/tools/react/next/#/components/textarea)
* [React CDK component](https://developer.dxc.com/tools/angular/next/#/components/textarea)

____________________________________________________________

* [Edit this page on GitHub](url)

