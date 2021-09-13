# Timepicker

A time input is a user interface element where the user can type or select a time in a predefined format.

## Usage

#### Do:
Keep helper text as short and specific as possible.
Only use helper text when truly necessary to avoid overloading the user.
Should give an example or an explanation of the field.

#### Don’t:
Helper text should not run longer than the input area.

### Required
Required time fields are displayed in the same way the component text-input does.

## Variants

- to be discussed

![Examples of time picker input states](images/Time_Varient.png)


_Examples of time picker varients_

## States

### Time-input

States: **enabled**, **hover**, **focus**, **focus-suffix**, **error**, and **disabled**.

![Examples of time picker input states](images/Time_Helper_Text.png)

_Examples of time picker required input_

### Time pop-up

States: **enabled**, **hover**, **focus**, **focus-suffix**, **error**, and **disabled**.

![Examples of the time pop-up states](images/Time_Popup.png)

_Examples of the time pop-up states_


## Anatomy

![Time picker Anatomy](images/Time_Anatomy.png)

_Anatomy of Time picker_

1. Label (Optional)
2. Placeholder
3. Error message
4. Secondary Icon
5. Primary Icon
6. Input Outline

## Design specifications

### Time-input

![time-input specifications](images/Time_Specs.png)

_Structure and spacing for time picker inputs_

#### Height

| Property                              | Value     |
| ------------------------------------- | --------- |
| `height` (default)                    |      32px |
| `height` (selected)                   |      48px |
| `height` (selected + auxiliar text)   |      73px |

#### Width

| Property            |  Value           | 
| ------------------- |  -------------   |   
| `medium`_(default)_ |  240px           | 
| `large`             |  480px           |  
| `fillParent`        |  -               | 

#### Margin

Different values can be applied to each side of the component:
```top``` ```bottom``` ```left``` ```right```

margin | Value
-- | --
`xxsmall` | 6px
`xsmall` | 16px
`small` | 24px
`medium` | 36px
`large` | 48px
`xlarge` | 64px
`xxlarge` | 100px

#### Typography

| Property                      | Element          |  Value      |
| ----------------------------- | ---------------- | ----------- |
| `font-size`                   |  label enabled   |   16px      |
| `font-size`                   |  label           |   12px      |
| `font-size`                   |  placeholder     |   16px      |
| `font-size`                   |  assistive text  |   12px      |
| `font-weight`                 |  all             |   400       |

#### Other specs

| Property                            | Value     |
| ----------------------------------- | --------- |
| `border-width` enabled              |   1px     |
| `border-width` focus                |   2px     |
| Icon size                           |   20x20px |
| Distance between text and underline |   7px     |

### Time pop-up

- to be discussed

![time-popup specifications](images/Time_Selection_Specs.png)

_Structure and spacing for time picker time pop-up_

![time-popup specifications](images/Time_Popup_with_Hour_and_Am-Pm_Selection.png)

![time-popup specifications](images/Time_Popup_with_Hour,Minute_and_Am-Pm_Selection.png)

![time-popup specifications](images/Time_Popup_with_Hr-Min-Sec_Selection.png)


#### Color

- to be discussed

| Tokens                              | Value       |
| ---------------------------------   | ----------- |
| `pickerSelectedDateBackgroundColor` |     #5f249f |
| `pickerSelectedDateColor`           |     #FFFFFF |
| `pickerBackgroundColor`             |     #FFFFFF |
| `pickerFontColor`                   |     #000000 |
| `pickerActualDate`                  |     #D9D9D9 |
| `pickerHoverDateBackgroundColor`    |     #D0BDDB |
| `pickerHoverDateFontColor`          |     #000000 |
| `scrollBarThumbColor`               |     #666666 |
| `scrollBarTrackColor`               |     #D9D9D9 |
| `focusColor`                        |     #005FCC |


#### Typography

- to be discussed

| Property                      | Element          |  Value      |
| ----------------------------- | ---------------- | ----------- |
| `font-size`                   |  year selector   |   16px      |
| `font-size`                   |  current month   |   13px      |
| `font-size`                   |  day             |   13px      |
| `font-weight`                 |  year selector   |   600       |
| `font-weight`                 |  current month   |   400       |
| `font-weight`                 |  day             |   400       |

#### Padding

- to be discussed

| Property                      | Element               |  Value      |
| ----------------------------- | ----------------      | ----------- |
| `padding`                     |  calendar container   |   16px      |
| `padding-left/right`          |  month container      |   8px       |
| `padding-left/right`          |  year selector        |   16px      |
| `padding-top/bottom`          |  separator            |   8px       |

#### Sizing

- to be discussed

| Property                      | Element                |  Value      |
| ----------------------------- | ----------------       | ----------- |
| `height/width`                |  selected date circle  |   28/28px   |
| `height/width`                |  year selection caret  |   24/24px   |
| `height/width`                |  calendar top controls |   24/24px   |

## Helper text

Helper text can be used as additional instructions to the user when filling in the form. It should be visible even on focus state and it can be replaced by an error message until the error is fixed in order to prevent adding more lines of text.

## Accesibility

- to be discussed

### WCAG 2.2
Understanding WCAG 2.2 - SC 2.4.7: Focus Visible
Understanding WCAG 2.2 - SC 1.4.13: Content on Hover or Focus

#### WAI-ARIA 1.2
WAI-ARIA authoring practices 1.2 - 3.9 Dialog modal
WAI-ARIA authoring practices - Time picker design pattern

## Links and references

* [Angular CDK component](url)
* [React CDK component](url)

____________________________________________________________

* [Edit this page on GitHub](url)
