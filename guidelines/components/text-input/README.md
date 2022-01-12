# Text input

Text inputs are input fields typically used in forms that allow the user to enter text data in a structucolor-red format.

## Usage

Use text inputs in forms to help people enter, select, and search for text. Common text input types include: Usernames, descriptions, URLs, phone numbers, credit cards, emails, addresses or plain text searches

### Do's

* Do use fixed-width inputs for content that has a specific, known length (e.g. postcode, phone number).
* Do use sentence for any input text case with standard, local grammar, and punctuation rules.
* Do use helpful and clear text for labels, error messages, and helper texts


### Dont's

* Do not use text input for text longer than a single line (e.g. name, phone number). Use the text-area instead.
* Do not disable copy and paste.
* Do not display a pop-up error message after validating
* Avoid masking label, keep it always visible.

## States

Text input states: **enabled**, **hover**, **focus**, **error** and **disabled**.

![Example of the text input component states](images/input_states.png)

_Example of the text input component states_


## Anatomy

![Text input anatomy](images/input_anatomy.png)

1. Label text
2. Helper text (Optional)
3. Error indicator
4. Clear action (Optional)
5. Input action (Optional)
6. Input container
7. Placeholder text
8. Error message
9. Prefix

## Content

### Actions

#### Clearing content

Clear actions allow user to remove the content of the text input.

![Example of text input with a clear content action button](images/input_actions_clear.png)

_Example of text input with a clear content action button_

#### Custom actions

Text inputs can have an additional custom action. 

![Example of text input with an additional action](images/input_actions_custom.png)

_Example of text input with an additional action_

### Prefixes and suffixes

Prefixes and suffixes help the user to understand the purpose of the text input.

![Icon or text prefixes and suffixes usage](images/input_prefix_suffix.png)

_Icon or text prefixes and suffixes usage_

## Helper text

Helper text can be used as additional instructions to the user when filling in the form. It should be always visible even in a focus state.

![Text input helper text example](images/input_helper_text.png)

_Text input helper text example_

### Usage

Do:

* Keep helper text as short and specific as possible.
* Only use helper text when truly necessary to avoid overloading the user.
* Should give an example or an explanation of the field

Don’t:

* Helper text should not run longer than the input area.


## Design Specifications

![Specifications for text input component](images/input_specs.png)

_Specifications for text input component_

## Color

### Base

| Component token          | Element            | Token                   | Value             |
| :----------------------- | :----------------- | :---------------------- | :---------------- |
| `labelFontColor`         | Label              | `color-black`           | #000000           |
| `valueFontColor`         | Value              | `color-black`           | #000000           |
| `helperTextFontColor`    | Helper text        | `color-black`           | #000000           |
| `placeholderFontColor`   | Placeholder        | `color-grey-600`        | #808080           |
| `enabledBorderColor`     | Border:enabled     | `color-black`           | #000000           |
| `actionIconColor`        | Action icon        | `color-black`           | #000000           |
| `actionBackgroundColor`  | Action             | `color-transparent`     | #transparent      |

### Interactive

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
| `hoverActionBackgroundColor`    | Action:hover                | `color-grey-100`        | #f2f2f2         |
| `focusActionBorderColor`        | Action:focus                | `color-blue-600`        | #0095ff         |
| `activeActionBackgroundColor`   | Action:active               | `color-grey-300`        | #cccccc         |
| `disabledActionBackgroundColor` | Action:disabled             | `color-transparent`     | transparent     |
| `hoverActionIconColor`          | Action icon:hover           | `color-black`           | #000000         |
| `focusActionIconColor`          | Action icon:focus           | `color-black`           | #000000         |
| `activeActionIconColor`         | Action icon:active          | `color-black`           | #000000         |
| `disabledActionIconColor`       | Action icon:disabled        | `color-grey-500`        | #999999         |



### Suffix/Prefix

| Component token          | Element          | Token                   | Value             |
| :----------------------- | :--------------- | :---------------------- | ----------------- |
| `suffixColor`            | Suffix           | `color-grey-700`        | #666666           |
| `prefixColor`            | Prefix           | `color-grey-700`        | #666666           |
| `disabledSuffixColor`    | Suffix:disabled  | `color-grey-400`        | #bfbfbf           |
| `disabledPrefixColor`    | Prefix:disabled  | `color-grey-400`        | #bfbfbf           |



### Typography

| Component token           | Element              | Token                   | Value             |
| :------------------------ | :------------------- | :---------------------- | :---------------- |
| `fontFamily`              | All                  | `font-family-sans`      | Open Sans         |
| `labelFontSize`           | Label                | `font-scale-02`         | 0.875rem / 14px   |
| `labelFontWeight`         | Label                | `font-weight-bold`      | 600               |
| `labelFontStyle`          | Label                | `font-style-normal`     | normal            |
| `labelLineHeight`         | Label                | `font-leading-loose-01` | 1.715em           |
| `valueFontSize`           | Value                | `font-scale-03`         | 1rem / 16px       |
| `valueFontWeight`         | Value                | `font-weight-regular`   | 400               |
| `valueFontStyle`          | Value                | `font-style-normal`     | normal            |
| `helperTextFontSize`      | Helper text          | `font-scale-01`         | 12px              |
| `helperTextFontWeight`    | Helper text          | `font-weight-regular`   | 400               |
| `helperTextFontStyle`     | Helper text          | `font-style-normal`     | normal            |
| `helperTextLineHeight`    | Helper text          | `font-leading-normal`   | 1.5em             |
| `optionalLabelFontWeight` | Optional indicator   | `font-weight-regular`   | 400               |



| Property        | Element        | Token                   | Value           |
| :-------------- | :------------- | :---------------------- | :-------------- |
| `font-size`     | Error message  | `font-scale-01`         | 0.75rem / 12px  |
| `font-weight`   | Error message  | `font-weight-regular`   | 400             |
| `line-height`   | Value          | `font-leading-normal`   | 1.5em           |
| `line-height`   | Error message  | `font-leading-normal`   | 1.5em           |
| `font-size`     | Placeholder    | `font-scale-03`         | 1rem / 16px     |
| `font-weight`   | Placeholder    | `font-regular`          | 400             |



### Spacing

| Component token           | Element              | Token                   | Value             |
| :------------------------ | :------------------- | :---------------------- | :---------------- |
| `inputMarginTop`          | Input container      | `spacing-02`            | 0.25rem / 4px     |
| `inputMarginBottom`       | Input container      | `spacing-02`            | 0.25rem / 4px     |


| Property        | Element         | Token             | Value           |
| :-------------- | :-------------- | :---------------- | :-------------- |
| `margin-left`   | Error icon      | `spacing-02`      | 0.25rem / 4px   |
| `margin-left`   | Action          | `spacing-02`      | 0.25rem / 4px   |
| `margin-left`   | Prefix          | `spacing-02`      | 0.25rem / 4px   |
| `padding-right` | Prefix          | `spacing-03`      | 0.5rem / 8px    |
| `padding-left`  | Suffix          | `spacing-03`      | 0.5rem / 8px    |
| `margin-left`   | Suffix          | `spacing-02`      | 0.25rem / 4px   |
| `margin-right`  | Suffix          | `spacing-02`      | 0.25rem / 4px   |
| `padding-left`  | Input           | `spacing-03`      | 0.5rem / 8px    |
| `padding-right` | Input           | `spacing-03`      | 0.5rem / 8px    |
| `padding-left`  | Input container | `spacing-03`      | 0.5rem / 8px    |
| `padding-right` | Input container | `spacing-03`      | 0.5rem / 8px    |

### Border

| Property        | Element               | Token                  | Value               |
| :-------------- | :-------------------- | :--------------------- | :------------------ |
| `border`        | Input container       | `border-width-1`       | 1px                 |
| `border`        | Input container       | `border-style-solid`   | solid               |
| `border`        | Input container:focus | `border-width-1`       | 1px                 |
| `border`        | Input container:focus | `border-style-solid`   | solid               |
| `box-shadow`    | Input container:focus | `-`                    | 0 0 0 2px           |
| `box-shadow`    | Input container:error | `-`                    | 0 0 0 2px           |

### Width

| Width                | Value |
| -------------------- | ----- |
| `small`              | 240px |
| `medium` (_default_) | 360px |
| `large`              | 480px |
| `fillParent`         | 100%  |


### Margin

| Margin      | Value |
| ----------- | ----- |
| `xxsmall`   | 6px   |
| `xsmall`    | 16px  |
| `small`     | 24px  |
| `medium`    | 36px  |
| `large`     | 48px  |
| `xlarge`    | 64px  |
| `xxlarge`   | 100px |

And also apply different values to each side of the component:
```top``` ```bottom``` ```left``` ```right```


## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [1.3.1: Information and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
* Understanding WCAG 2.2 - [3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
* Understanding WCAG 2.2 - [3.3.2: Labels and Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) 
* Understanding WCAG 2.2 - [3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) 
* Understanding WCAG 2.2 - [4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) 


## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/textInput)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/textInput)
* [Adobe XD component](https://xd.adobe.com/view/a8c4a40a-e4ef-4161-8917-8172a165d626-fd97/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/text-input/README.md)
