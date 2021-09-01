# Checkbox

Checkboxes are inputs that offer to the user the possibility to select one or more options from a range of attributes.

## Usage

* Use to select more than one option from a list
* Use to toggle a single option on or off
* Don't use checkboxes when only one item can be selected, use a readio button instead

## States

The following states are defined in the life cycle of the component: **enabled**, **hover**, **focus** and **disabled**.

![Example of the component states](images/checkbox_states.png)

_Example of the component states_

## Anatomy

![Anatomy of the checkbox component](images/checkbox_anatomy.png)

1. Group label _(Optional)_
2. Helper text _(Optional)_
3. Checkbox input
4. Checkbox label

## Design Specifications

![Checkbox specs](images/checkbox_specs.png)

### Color

#### On-light

| Component token                      | Element                           | Core token               | Value        |
| :----------------------------------- | :-------------------------------- | :----------------------- | :----------- |
| `backgroundColorChecked`             | Fill                              | `color-blue-800`         |   #0067b3    |
| `hoverBackgroundColorChecked`        | Fill:hover                        | `color-blue-700`         |   #0086e6    |
| `disabledBackgroundColorChecked`     | Fill:disabled                     | `color-grey-400`         |   #bfbfbf    |
| `borderColor`                        | Border                            | `color-blue-800`         |   #0067b3    |
| `hoverBorderColor`                   | Border:hover                      | `color-blue-700`         |   #0086e6    |
| `disabledBorderColor`                | Border:disabled                   | `color-grey-100`         |   #f2f2f2    |
| `checkColor`                         | Check mark                        | `color-white`            |   #ffffff    |
| `disabledCheckColor`                 | Check mark:disabled               | `color-white`            |   #ffffff    |
| `fontColor`                          | Label                             | `color-black`            |   #000000    |
| `disabledFontColor`                  | Label:disabled                    | `color-grey-500`         |   #999999    |
| `focusColor`                         | Outline:focus                     | `color-blue-800`         |   #0067b3    |


#### On-dark

| Component token                        | Element                           | Core token               | Value        |
| :------------------------------------- | :-------------------------------- | :----------------------- | :----------- |
| `backgroundColorCheckedOnDark`         | Fill                              | `color-blue-600`         |   #0095ff    |
| `hoverBackgroundColorCheckedOnDark`    | Fill:hover                        | `color-blue-800`         |   #0067b3    |
| `disabledBackgroundColorCheckedOnDark` | Fill:disabled                     | `color-grey-700`         |   #666666    |
| `borderColorOnDark`                    | Border                            | `color-blue-600`         |   #0095ff    |
| `hoverBorderColorOnDark`               | Border:hover                      | `color-blue-800`         |   #0067b3    |
| `disabledBorderColorOnDark`            | Border:disabled                   | `color-grey-700`         |   #666666    |
| `checkColorOnDark`                     | Check mark                        | `color-white`            |   #ffffff    |
| `disabledCheckOnDark`                  | Check mark:disabled               | `color-white`            |   #ffffff    |
| `fontColorOnDark`                      | Label                             | `color-white`            |   #ffffff    |
| `disabledFontColorOnDark`              | Label:disabled                    | `color-grey-700`         |   #666666    |
| `focusColorOnDark`                     | Outline:focus                     | `color-blue-600`         |   #0095ff    |


### Margin

Margin can be set independently for `top`, `right`, `bottom`, `left`.

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px

### Typography

| Property              | Element       | Value     |   Token          |
| --------------------- | -----------   | --------  | ---------        |
| `font-size`           | label         | 16px      | `font-scale-03`  |
| `font-weight`         | label         | 400       | `font-regular`   |

### Border

| Property              | Element       | Value     |   Token          |
| --------------------- | -----------   | --------  | ---------        |
| `border-radius`       | checkbox      | 2px       | `rounded-small`  |
| `border-radius`       | focus outline | 4px       | `rounded-medium` |
| `border-width`        | checkbox      | 2px       | -                |
| `border-width`        | focus outline | 2px       | -                |


## Stack

Checkbox may be either vertically or horizontally stacked.

![Checkbox design specifications for stacked display](images/checkbox_stacked.png)

### Vertical stacking

Checkboxes are independent of a category and they will be displayed horizontally, where device allows. The vertical spacing between stacked checkboxes should be 16px.

### Horizontal stacking

Checkbox is related and have a group label to enhance readability and show association. The horizontal spacing between horizontally stacked checkboxex should be 32px.


## Required

The last property that the checkbox can get is the required attribute that would represent once the checkbox has a paring label, indicating that the selection of that input must be done, in another case the user wouldn't proceed with the application flow.
The representation of a required checkbox is a colored asterisk right before the checkbox label.

![Checkbox design required field](images/checkbox_required.png)

## Accessibility

### WCAG 2.2

**Understanding WCAG 2.2** - [SC 1.3.1; Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

* "In a form, the labels for each checkbox can be programmatically determined by assistive technology."

**Understanding WCAG 2.2** - [SC 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

* "For all user interface components the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies."

### WAI-ARIA 1.2

**WAI-ARIA Authoring Practices 1.2** - [3.7 Checkbox](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox)

* "When the checkbox has focus, pressing the Space key changes the state of the checkbox"
* "The checkbox has role checkbox"
* "The checkbox has an accessible label provided by one of the following:
  * Visible text content contained within the element with role checkbox.
  * A visible label referenced by the value of aria-labelledby set on the element with role checkbox.
aria-label set on the element with role checkbox.
When checked, the checkbox element has state aria-checked set to true.
When not checked, it has state aria-checked set to false.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/2fc249e5-ca58-4175-acf6-2a214df877b7/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/checkbox/README.md)
