# Text-input

Text inputs are input fields typically used in forms that allow the user to enter text data in a structured format.

## Usage

Use text inputs in forms to help people enter, select, and search for text. Common text input types include: Usernames, descriptions, URLs, phone numbers, credit cards, emails, addresses or plain text searches

### Do's

* Do use fixed width inputs for content that has a specific, known length (e.g. post code, phone number).
* Do use sentence for any input text case with standard, local grammar and punctuation rules.
* Do use helpful and clear text for labels, error messages and helper texts


### Dont's

* Do not use text-input for text longer than a single line (e.g. name, phone number). Use the text-area instead.
* Do not disable copy and paste.
* Do not display pop up error message after validating
* Avoid masking label, keep it always visible.

## Variants


## States

Text-input states: **enabled**, **hover**, **focus**, **error** and **disabled**.

![Example of the text-input component states](images/input_states.png)

_Example of the text-input component states_


## Anatomy

![Text-input anatomy](images/input_anatomy.png)

1. Label text
2. Helper text (Optional)
3. Placeholder text
4. Error message
5. Input action (Optional)
6. Error indicator
7. Input container

## Content

### Actions

#### Clearing content

Clear actions allow user to remove the content of the text-input.

![Example of a text-input with a clear content action button](images/input_actions_clear.png)

_Example of a text-input with a clear content action button_

#### Custom actions

Text-inputs can have an additional custom action. 

![Example of a text-input with an additional action](images/input_actions_custom.png)

_Example of a text-input with an additional action_

### Prefixes and suffixes

Prefixes and suffixes help the user to understando the purpose of the text input.

![Icon or text prefixes and suffixes usage](images/input_prefix_suffix.png)

_Icon or text prefixes and suffixes usage_


## Design Specifications

![Specifications for text-input component](images/input_specs.png)

_Specifications for text-input component_

### Width

| Width                | Value |
| -------------------- | ----- |
| `small`              | 60px  |
| `medium` (_default_) | 240px |
| `large`              | 480px |
| `fitContent`         | -     |
| `fillParent`         | -     |


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

## Color

### On-light

#### Base

| Component token          | Element            | Token             | Value             |
| ------------------------ | ------------------ | ----------------- | ----------------- |
| `labelFontColor`         | Label              | `black`           | #000000           |
| `valueFontColor`         | Value              | `black`           | #000000           |
| `helperTextFontColor`    | Helper-text        | `black`           | #000000           |
| `placeholderFontColor`   | Placeholder        | `grey-600`        | #808080           |
| `enabledOutlineColor`    | Outline:enabled    | `black`           | #000000           |
| `ActionIconColor`        | Action icon        | `black`           | #000000           |
| `ActionBackgroundColor`  | Action             | `transparent`     | #transparent      |

#### Interactive

| Component token                 | Element                     | Token             | Value           |
| ------------------------------- | --------------------------- | ----------------- | --------------- |
| `hoverOutlineColor`             | Outline:hover               | `purple-500`      | #a46ede         |
| `focusOutlineColor`             | Outline:focus               | `blue-600`        | #0095ff         |
| `errorOutlineColor`             | Outline:error               | `red-700`         | #d0011b         |
| `disabledOutlineColor`          | Outline:disabled            | `grey-600`        | #808080         |
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
| `hoverActionIconColor`          | Action icon:hover           | `black`           | #000000         |
| `focusActionIconColor`          | Action icon:focus           | `black`           | #000000         |
| `disabledActionIconColor`       | Action icon:disabled        | `grey-500`        | #999999         |



#### Suffix/Prefix

| Component token          | Element          | Token             | Value             |
| ------------------------ | ---------------- | ----------------- | ----------------- |
| `suffixColor`            | Suffix           | `grey-700`        | #666666           |
| `prefixColor`            | Prefix           | `grey-700`        | #666666           |
| `disabledSuffixColor`    | Suffix:disabled  | `grey-400`        | #bfbfbf           |
| `disabledPrefixColor`    | Prefix:disabled  | `grey-400`        | #bfbfbf           |


### On-dark

#### Base

| Component token                | Element            | Token             | Value           |
| ------------------------------ | ------------------ | ----------------- | --------------- |
| `labelFontColorOnDark`         | Label              | `white`           | #ffffff         |
| `valueFontColorOnDark`         | Value              | `white`           | #ffffff         |
| `helperTextFontColorOnDark`    | Helper-text        | `white`           | #ffffff         |
| `placeholderFontColorOnDark`   | Placeholder        | `grey-100`        | #f2f2f2         |
| `enabledOutlineColorOnDark`    | Outline:enabled    | `white`           | #ffffff         |
| `ActionIconColorOnDark`        | Action icon        | `white`           | #ffffff         |
| `ActionBackgroundColorOnDark`  | Action             | `transparent`     | #transparent    |


#### Interactive

| Component token                       | Element                     | Token             | Value           |
| ------------------------------------- | --------------------------- | ----------------- | --------------- |
| `hoverOutlineColorOnDark`             | Outline:hover               | `purple-500`      | #a46ede         |
| `focusOutlineColorOnDark`             | Outline:focus               | `blue-600`        | #0095ff         |
| `errorOutlineColorOnDark`             | Outline:error               | `red-500`         | #fe344f         |
| `disabledOutlineColorOnDark`          | Outline:disabled            | `grey-500`        | #999999         |
| `errorMessageColorOnDark`             | Error message               | `red-500`         | #fe344f         |
| `errorIconColorOnDark`                | Error icon                  | `red-500`         | #fe344f         |
| `disabledContainerFillColorOnDark`    | Input container:disabled    | `grey-700`        | #666666         |
| `disabledLabelFontColorOnDark`        | Label:disabled              | `grey-500`        | #999999         |
| `disabledValueFontColorOnDark`        | Value:disabled              | `grey-500`        | #999999         |
| `disabledHelperTextFontColorOnDark`   | Helper text:disabled        | `grey-500`        | #999999         |
| `disabledPlaceholderColorOnDark`      | Placeholder:disabled        | `grey-500`        | #999999         |
| `hoverActionBackgroundColorOnDark`    | Action:hover                | `grey-700`        | #666666         |
| `focusActionBackgroundColorOnDark`    | Action:focus                | `grey-700`        | #666666         |
| `activeActionBackgroundColorOnDark`   | Action:active               | `grey-500`        | #999999         |
| `disabledActionBackgroundColorOnDark` | Action:disabled             | `transparent`     | transparent     |
| `hoverActionIconColorOnDark`          | Action icon:hover           | `white`           | #ffffff         |
| `focusActionIconColorOnDark`          | Action icon:focus           | `white`           | #ffffff         |
| `disabledActionIconColorOnDark`       | Action icon:disabled        | `grey-700`        | #666666         |


#### Suffix/Prefix

| Component token                | Element          | Token             | Value           |
| ------------------------------ | ---------------- | ----------------- | --------------- |
| `suffixColorOnDark`            | Suffix           | `white`           | #ffffff         |
| `prefixColorOnDark`            | Prefix           | `white`           | #ffffff         |
| `disabledSuffixColorOnDark`    | Suffix:disabled  | `grey-700`        | #666666         |
| `disabledPrefixColorOnDark`    | Prefix:disabled  | `grey-700`        | #666666         |

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
| `font-family`   | Placeholder    | `type-sans`             | Open Sans       |
| `font-size`     | Placeholder    | `type-scale-03`         | 1rem / 16px     |
| `font-weight`   | Placeholder    | `type-regular`          | 400             |
| `font-family`   | Error message  | `type-sans`             | Open Sans       |
| `font-size`     | Error message  | `type-scale-01`         | 0.75rem / 12px  |
| `font-weight`   | Error message  | `type-regular`          | 400             |
| `line-height`   | Error message  | `type-leading-normal`   | 1.5em           |



### Spacing


| Property        | Element         | Token             | Value           |
| --------------- | --------------- | ----------------- | --------------- |
| `margin-left`   | Error icon      | `spacing-02`      | 0.25rem / 4px   |
| `margin-left`   | Prefix          | `spacing-03`      | 0.5rem / 8px    |
| `padding-right` | Prefix          | `spacing-03`      | 0.5rem / 8px    |
| `margin-right`  | Prefix          | `spacing-03`      | 0.5rem / 8px    |
| `margin-left`   | Suffix          | `spacing-02`      | 0.25rem / 4px   |
| `padding-left`  | Suffix          | `spacing-03`      | 0.5rem / 8px    |
| `margin-right`  | Suffix          | `spacing-03`      | 0.5rem / 8px    |
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



## Helper text

Helper text can be used as additional instructions to the user when filling in the form. It should be always visible even on focus state.

![Text-input helper text example](images/input_helper_text.png)

_Text-input helper text example_

### Usage

Do:

* Keep helper text as short and specific as possible.
* Only use helper text when truly necessary to avoid overloading the user.
* Should give an example or an explanation of the field

Don’t:

* Helper text should not run longer than the input area.

### Specs

| Property        | Element        | Token                   | Value           |
| --------------- | -------------- | ----------------------- | --------------- |
| `margin-top`    | helper-text    | `spacing-02`            | 4px             |
| `font-size`     | helper-text    | `type-scale-01`         | 12px            |
| `font-family`   | helper-text    | `type-sans`             | Open Sans       |
| `line-height`   | Helper text    | `type-leading-normal`   | 1.5em           |
| `color`         | helper-text    | `black`                 | hsl(0, 0%, 0%)  |

### Autocomplete

![Autocomplete functionality for the text input component](images/input_autocomplete.png)

_Autocomplete functionality for the text input component_

### Specs

#### Color

| Component token                     | Element                | Token             | Value           |
| ----------------------------------- | ---------------------- | ----------------- | --------------- |
| `ListOptionFontColor`               | List option text       | `black`           | `#000000`       |
| `sytemMessageFontColor`             | System message         | `grey-700`        | `#666666`       |
| `ErrorMessageBorderColor`           | Error system message   | `red-700`         | `#d0011b`       |
| `ErrorMessageBackgroundColor`       | Error system message   | `red-100`         | `#ffe6e9`       |
| `hoverListOptionBackgroundColor`    | List option:hover      | `grey-100`        | `#f2f2f2`       |
| `activeListOptionBackgroundColor`   | List option:active     | `grey-300`        | `#cccccc`       |

#### Typography

| Property        | Element              | Token                   | Value           |
| --------------- | -------------------- | ----------------------- | --------------- |
| `font-family`   | List option          | `type-sans`             | Open Sans       |
| `font-size`     | List option          | `type-scale-03`         | 1rem / 16px     |
| `font-weight`   | List option          | `type-regular`          | 400             |
| `font-weight`   | List option typed    | `type-bold`             | 600             |
| `font-family`   | System message       | `type-sans`             | Open Sans       |
| `font-size`     | System message       | `type-scale-02`         | 0.875 / 14px    |
| `font-weight`   | System message       | `type-regular`          | 400             |
| `font-family`   | Error message        | `type-sans`             | Open Sans       |
| `font-size`     | Error message        | `type-scale-02`         | 0.875 / 14px    |
| `font-weight`   | Error message        | `type-regular`          | 400             |



## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [1.3.1: Information and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
* Understanding WCAG 2.2 - [3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
* Understanding WCAG 2.2 - [3.3.2: Labels and Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) 
* Understanding WCAG 2.2 - [3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) 
* Understanding WCAG 2.2 - [4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) 


## Links and references

* [Angular CDK component]()
* [React CDK component]()

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/text-input/README.md)

