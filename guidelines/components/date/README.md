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

The input-date `color`, `typography`, `border`, `spacing`, `width` and `margin` specifications are inherited from the input-text, for reference [check the input-text component documentation](). 

The input-date doesn't have the following text-input elements, therefore, their listed styles don't apply:

* Prefix / Suffix


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
