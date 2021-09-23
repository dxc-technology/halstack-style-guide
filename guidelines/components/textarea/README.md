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

| Component token          | Element            | Token                   | Value             |
| :----------------------- | :----------------- | :---------------------- | :---------------- |
| `labelFontColor`         | Label              | `color-black`           | #000000           |
| `valueFontColor`         | Value              | `color-black`           | #000000           |
| `helperTextFontColor`    | Helper-text        | `color-black`           | #000000           |
| `enabledOutlineColor`    | Outline:enabled    | `color-black`           | #000000           |


#### Interactive

| Component token                 | Element                     | Token                   | Value           |
| :------------------------------ | :-------------------------- | :---------------------- | :-------------- |
| `hoverBorderColor`              | Border:hover                | `color-purple-500`      | #a46ede         |
| `focusBorderColor`              | Border:focus                | `color-blue-600`        | #0095ff         |
| `errorBorderColor`              | Border:error                | `color-red-700`         | #d0011b         |
| `hoverErrorBorderColor`         | Border:hover on error       | `color-red-600`         | #fe0123         |
| `disabledBorderColor`           | Border:disabled             | `color-grey-500`        | #999999         |
| `errorMessageColor`             | Error message               | `color-red-700`         | #d0011b         |
| `disabledContainerFillColor`    | Input container:disabled    | `color-grey-100`        | #f2f2f2         |
| `disabledLabelFontColor`        | Label:disabled              | `color-grey-500`        | #999999         |
| `disabledValueFontColor`        | Value:disabled              | `color-grey-500`        | #999999         |
| `disabledHelperTextFontColor`   | Helper text:disabled        | `color-grey-500`        | #999999         |
| `disabledPlaceholderFontColor`  | Placeholder:disabled        | `color-grey-500`        | #999999         |



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
| `line-height`   | Value          | `font-leading-normal`   | 1.5em           |
| `font-family`   | Error message  | `font-family-sans`      | Open Sans       |
| `font-size`     | Error message  | `font-scale-01`         | 0.75rem / 12px  |
| `font-weight`   | Error message  | `font-weight-regular`   | 400             |
| `line-height`   | Error message  | `font-leading-normal`   | 1.5em           |


### Spacing


| Property        | Element         | Token             | Value           |
| :-------------- | :-------------- | :---------------- | :-------------- |
| `padding-left`  | Input container | `spacing-03`      | 1rem / 16px     |
| `padding-right` | Input container | `spacing-03`      | 1rem / 16px     |
| `margin-top`    | Input container | `spacing-02`      | 0.5rem / 8px    |
| `margin-bottom` | Input container | `spacing-02`      | 0.5rem / 8px    |

### Border

| Property        | Element               | Token                    | Value           |
| :-------------- | :-------------------- | :----------------------- | :-------------- |
| `border-width`  | Input container       | `border-width-1`         | 1px             |
| `border-style`  | Input container       | `border-style-solid`     | solid           |
| `border-radius` | Input container       | `border-radius-medium`   | 0.25rem / 4px   |
| `box-shadow`    | Input container:focus | `-`                      | 1px solid       |

### Width

| Width                | Value |
| -------------------- | ----- |
| `small`              | 240px |
| `medium` (_default_) | 360px |
| `large`              | 480px |
| `fillParent`         | 100%  |



## Accesibility

### WCAG 

* Understanding WCAG 2.2 - [1.3.1: Information and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
* Understanding WCAG 2.2 - [3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
* Understanding WCAG 2.2 - [3.3.2: Labels and Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) 
* Understanding WCAG 2.2 - [3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) 
* Understanding WCAG 2.2 - [4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) 

### WAI-ARIA

* WAI-ARIA Accessible Rich Internet Applications 1.2 - [`textbox` role](https://www.w3.org/TR/wai-aria-1.2/#textbox)


## Links and references



* [Angular CDK component](https://developer.dxc.com/tools/react/next/#/components/textarea)
* [React CDK component](https://developer.dxc.com/tools/angular/next/#/components/textarea)

____________________________________________________________

* [Edit this page on GitHub](url)

