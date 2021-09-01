# Checkbox

Checkboxes are inputs that offer to the user the possibility to select one or more options from a range of attributes.

## Usage

* Use to select more than one option from a list
* Use to toggle a single option on or off
* Don't use checkboxes when only one item can be selected, use a readio button instead

## States

The following states are defined in the life cycle of the component: **Unselected**, **hover unselected**, **focus unselected**, **disabled unselected**, **selected**, **hover selected**, **focus selected** and **disabled selected**.

![Example of the component states](images/checkbox_states.png)

_Example of the component states_

## Anatomy

![Anatomy of the checkbox component](images/checkbox_anatomy.png)

1. Group label _(Optional)_
2. Helper text _(Optional)_
3. Checkbox input
4. Checkbox label

## Design Specifications

![Design specifications for the checkbox component](images/checkbox_specs.png)

_Design specifications for the checkbox component_

### Color


| Component token                      | Element                           | Core token               | Value        |
| :----------------------------------- | :-------------------------------- | :----------------------- | :----------- |
| `backgroundColorChecked`             | Fill                              | `color-blue-800`         | #0067b3      |
| `hoverBackgroundColorChecked`        | Fill:hover                        | `color-blue-700`         | #0086e6      |
| `disabledBackgroundColorChecked`     | Fill:disabled                     | `color-grey-400`         | #bfbfbf      |
| `borderColor`                        | Border                            | `color-blue-800`         | #0067b3      |
| `hoverBorderColor`                   | Border:hover                      | `color-blue-700`         | #0086e6      |
| `disabledBorderColor`                | Border:disabled                   | `color-grey-400`         | #bfbfbf      |
| `checkColor`                         | Check mark                        | `color-white`            | #ffffff      |
| `disabledCheckColor`                 | Check mark:disabled               | `color-white`            | #ffffff      |
| `focusColor`                         | Outline:focus                     | `color-blue-600`         | #0095ff      |
| `fontColor`                          | Checkbox Label                    | `color-black`            | #000000      |
| `disabledFontColor`                  | Label:disabled                    | `color-grey-400`         | #bfbfbf      |
| `labelFontColor`                     | Group label                       | `color-black`            | #000000      |
| `disabledLabelFontColor`             | Group label:disabled              | `color-grey-400`         | #bfbfbf      |
| `helperFontColor`                    | Helper text                       | `color-black`            | #000000      |
| `disabledHelperFontColor`            | Helper text:disabled              | `color-grey-400`         | #bfbfbf      |
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

| Property               | Element                | Value        | Token            |
| :--------------------- | :--------------------- | :----------- | :--------------- |
| `font-size`            | Checkbox label         | 14px         | `font-scale-02`  |
| `font-weight`          | Checkbox label         | 400          | `font-regular`   |
| `font-size`            | Group label            | 14px         | `font-scale-02`  |
| `font-weight`          | Checkbox label         | 600          | `font-bold`      |
| `font-size`            | Helper text            | 12px         | `font-scale-01`  |
| `font-weight`          | Checkbox label         | 400          | `font-regular`   |

### Border

| Property               | Element            | Value      | Token            |
| :--------------------- | :----------------- | :--------  | :--------------- |
| `border-radius`        | Checkbox input     | 2px        | `rounded-small`  |
| `border-radius`        | Focus outline      | 4px        | `rounded-medium` |
| `border-width`         | Checkbox input     | 2px        | -                |
| `border-width`         | Focus outline      | 2px        | -                |


## Stack

Checkbox options may be either vertically or horizontally stacked.

![Checkbox group stacking types](images/checkbox_stack.png)

_Checkbox group stacking types_

| Stacking type     | Usage                                                                                                                               |
| :---------------- | :-----------------------------------------------------------------------------------------------------------------------------------|
| **Vertical**      | Checkboxes are independent of a category. The vertical spacing between stacked checkboxes should be 8px.                            |
| **Horizontal**    | Cheboxes are related or belong to the same category. The horizontal spacing between horizontally stacked checkboxex should be 24px. |


## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 1.3.1; Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
* Understanding WCAG 2.2 - [SC 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### WAI-ARIA 1.2

* WAI-ARIA Authoring Practices 1.2 - [3.7 Checkbox](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox)

## Links and references

- [React component]()
- [Angular component]()

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/checkbox/README.md)
