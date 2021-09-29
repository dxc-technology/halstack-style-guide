# Input-date

A date input is a user interface element where the user can type or select a date in a predefined format. 

## Usage

* Use the date input component when you’re asking users for a past, present or future date
* Provide a hint with the date format expected in the placeholder
* Use a concise label to indicate what the date selection refer to

## States

### Input-date

States: **enabled**, **hover**, **focus**, **error**, and **disabled**.

![Examples of date picker input states](images/input_date_states.png)

_Examples of date picker input states_

### Datepicker dialog

States: **enabled**, **hover**, **focus**, and **disabled**.

![Examples of the calendar pop-up states](images/date_popup.png)

_Examples of the calendar pop-up states_

## Anatomy

![Component anatomy example](images/input_date_anatomy.png)

1. Label
2. Helper text _(Optional)_
3. Input container
4. Date button
5. Error indicator
6. Error message
7. Placeholder / value

## Internationalization

The date format depends on an ISO definition for each country and the preference of use within the application.

The format of the date may vary depending on language, region, country or customer. It is a good practice to give to the user some type of hint about the date format and in many cases.

- The default format for the United States is `mm/dd/yyyy`
- The default format for Australia, Europe, Africa, South America most countries of Asia is `dd/mm/yyyy`
- The default format in China is `yyyy/mm/dd`

## Design Specifications

### Input-date

![Input-date design specifications](images/input_date_specs.png)

_Input-date design specifications_

#### Color

| Component token          | Element            | Token                   | Value             |
| :----------------------- | :----------------- | :---------------------- | :---------------- |
| `labelFontColor`         | Label              | `color-black`           | #000000           |
| `valueFontColor`         | Value              | `color-black`           | #000000           |
| `helperTextFontColor`    | Helper-text        | `color-black`           | #000000           |
| `enabledBorderColor`     | Border:enabled     | `color-black`           | #000000           |
| `ActionIconColor`        | Date button icon   | `color-black`           | #000000           |
| `ActionBackgroundColor`  | Date button        | `color-transparent`     | transparent       |

##### Interactive

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
| `hoverActionBackgroundColor`    | Date button:hover           | `color-grey-100`        | #f2f2f2         |
| `focusActionBackgroundColor`    | Date button:focus           | `color-grey-100`        | #f2f2f2         |
| `activeActionBackgroundColor`   | Date button:active          | `color-grey-300`        | #cccccc         |
| `disabledActionBackgroundColor` | Date button:disabled        | `color-transparent`     | transparent     |
| `hoverActionIconColor`          | Date button icon:hover      | `color-grey-500`        | #999999         |
| `focusActionIconColor`          | Date button icon:focus      | `color-grey-500`        | #999999         |
| `disabledActionIconColor`       | Date button icon:disabled   | `color-grey-500`        | #999999         |


#### Typography

| Property        | Element        | Token                      | Value           |
| :-------------- | :------------- | :------------------------- | :-------------- |
| `font-family`   | Label          | `font-family-sans`         | Open Sans       |
| `font-size`     | Label          | `font-scale-02`            | 0.875rem / 14px |
| `font-weight`   | Label          | `font-weight-bold`         | 600             |
| `line-height`   | Label          | `font-leading-loose-01`    | 1.75em          |
| `font-family`   | Value          | `font-family-sans`         | Open Sans       |
| `font-size`     | Value          | `font--scale-03`           | 1rem / 16px     |
| `font-weight`   | Value          | `font-weight-regular`      | 400             |
| `font-family`   | Error message  | `font-family-sans`         | Open Sans       |
| `font-size`     | Error message  | `font--scale-01`           | 0.75rem / 12px  |
| `font-weight`   | Error message  | `font-weight-regular`      | 400             |
| `line-height`   | Error message  | `font-leading-normal`      | 1.5em           |


#### Spacing


| Property        | Element         | Token             | Value           |
| :-------------- | :-------------- | :---------------- | :-------------- |
| `margin-left`   | Error icon      | `spacing-02`      | 0.25rem / 4px   |
| `margin-left`   | Date button     | `spacing-02`      | 0.25rem / 4px   |
| `padding-left`  | Input           | `spacing-03`      | 0.5rem / 8px    |
| `padding-left`  | Input container | `spacing-03`      | 0.5rem / 8px    |
| `padding-right` | Input container | `spacing-03`      | 0.5rem / 8px    |
| `margin-top`    | Input container | `spacing-02`      | 0.25rem / 4px   |
| `margin-bottom` | Input container | `spacing-02`      | 0.25rem / 4px   |

##### Border

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `border-width`           | Input:enabled    | `border-width-1`           | 1px              |
| `border-style`           | Input:enabled    | `border-style-solid`       | solid            |
| `border-width`           | Input:focus      | `border-width-2`           | 2px              |
| `border-style`           | Input:focus      | `border-style-solid`       | solid            |


#### Width

| Width                | Value |
| :------------------- | :---- |
| `small`              | 240px |
| `medium` (_default_) | 360px |
| `large`              | 480px |
| `fillParent`         | 100%  |




### Datepicker dialog

![Date specifications for picker](images/date_popup_specs.png)

_Structure and spacing for date picker calendar pop-up_

#### Color

| Component token                        | Element                        | Core token                   | Value         |
| :------------------------------------- | :----------------------------- | :--------------------------- | :------------ |
| `pickerBackgroundColor`                | Dialog container               | `color-white`                | #ffffff       | 
| `pickerFontColor`                      | Dialog text                    | `color-black`                | #000000       | 
| `pickerActualDateColor`                | Dialog title                   | `color-grey-500`             | #999999       | 
| `pickerHoverDateBackgroundColor`       | Container background           | `color-purple-200`           | #e5d5f6       | 
| `pickerSelectedDateColor`              | Date text:selected             | `color-white`                | #ffffff       | 
| `pickerSelectedDateBackgroundColor`    | Date background:hover          | `color-purple-700`           | #5f249f       | 
| `pickerHoverDateFontColor`             | Date text:hover                | `color-black`                | #000000       | 
| `pickerYearFontColor`                  | Year label                     | `color-black`                | #000000       | 
| `pickerMonthFontColor`                 | Mont label                     | `color-black`                | #000000       | 
| `pickerWeekFontColor`                  | Weekday label                  | `color-black`                | #000000       | 
| `pickerBackgroundColorMonthArrows`     | Month selection controls       | `color-black`                | #000000       |  
| `focusColor`                           | Focus outline                  | `color-blue-600`             | #0095ff         | 

#### Typography

| Property                      | Element          |  Value      |
| ----------------------------- | ---------------- | ----------- |
| `font-size`                   |  Year selector   |   16px      |
| `font-size`                   |  Current month   |   13px      |
| `font-size`                   |  Day             |   13px      |
| `font-weight`                 |  Year selector   |   600       |
| `font-weight`                 |  Current month   |   400       |
| `font-weight`                 |  Day             |   400       |

#### Padding

| Property                      | Element               |  Value      |
| ----------------------------- | ----------------      | ----------- |
| `padding`                     |  Calendar container   |   16px      |
| `padding-left/right`          |  Month container      |   8px       |
| `padding-left/right`          |  Year selector        |   16px      |
| `padding-top/bottom`          |  Separator            |   8px       |

#### Sizing

| Property                      | Element                |  Value      |
| ----------------------------- | ----------------       | ----------- |
| `height/width`                |  Selected date circle  |   28/28px   |
| `height/width`                |  Year selection caret  |   24/24px   |
| `height/width`                |  Calendar top controls |   24/24px   |


## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
* Understanding WCAG 2.2 - [SC 2.1.2: No keyboard trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap)
* Understanding WCAG 2.2 - [SC 2.4.6: Headings and labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)
* Understanding WCAG 2.2 - [SC 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)


### WAI-ARIA 1.2

* WAI-ARIA authoring practices 1.2 - [3.9 Dialog modal](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal)
* WAI-ARIA authoring practices - [Date picker design pattern](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html)


## Links and references

* [React CDK component](https://developer.dxc.com/tools/react/next/#/components/newDate)
* [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/newDate)
* [Adobe XD component]()

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/date/README.md)
