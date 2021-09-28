# Radio button

Radio buttons are UI elements that let the user make a mutually exclusive selection from a group of options.

## Usage

* Labelling should be concise and clearly differentiated with respect to other options.
* By default, one option of the radio group must be pre-selected. Select the safest or convenient option.
* Single radio buttons should not be used.
* If the question that the user needs to responde is as easier as yes/no, it is recommended to use checkbox instead of radio button.


## States

The following states are defined in the life cycle of the component: **Unselected enabled**, **unselected hover** **unselected focus**, **unselected disabled**, **selected enabled**, **selected hover**, **selected focus** and **selected disabled**.

![Radio button component states](images/radio_states.png)

_Radio button component states_

## Anatomy

![Radio button component anatomy](images/radio_anatomy.png)

1. Radio input
2. Label

## Stacking

![Radio button stacking options](images/radio_stacking.png)

_Radio button stacking options_


| Name                  | Description           
| :-------------------- | :---------------- 
| Vertical              | Short lists of radio buttons should be stacked vertically below a descriptive label to better associate the group. Options that are listed vertically are easier to read |
| Horizontal            | Multiple radio buttons may be displayed horizontally across the page while keeping them aligned within their respective columns. Here, it is needed to have in consideration that the linear radio buttons represent some challenge, because it's difficult to scan and localize |

*In any case, in the specification it is specified the ideal distance between component with label in the same horizontal edge to avoid the problem of pairing and scannability.


## Design Specifications

![Component design specifications](images/radio_specs.png)

_Component design specifications_

### Color

#### On-light

| Component token                   | Element                 | Core token               | Value       |
| :-------------------------------- | :---------------------- | :----------------------- | :---------- |
| `color`                           | Radio input             | `color-blue-800`         | #0067b3     |
| `hoverColor`                      | Radio input:hover       | `color-blue-900`         | #003c66     |
| `focusColor`                      | Radio input:focus       | `color-blue-600`         | #0095ff     |
| `disabledColor`                   | Radio input:disabled    | `color-grey-500`         | #999999     |
| `fontColor`                       | Label                   | `color-black`            | #000000     |
| `disabledFontColor`               | Label:disabled          | `color-grey-500`         | #999999     |

#### On-dark

| Component token                   | Element                 | Core token               | Value       |
| :-------------------------------- | :---------------------- | :----------------------- | :---------- |
| `colorOnDark`                     | Radio input             | `color-white`            | #e6e6e6     |
| `hoverColor`                      | Radio input:hover       | `color-blue-900`         | #ffffff     |
| `focusColorOnDark`                | Radio input:focus       | `color-blue-600`         | #0095ff     |
| `disabledColorOnDark`             | Radio input:disabled    | `color-grey-500`         | #999999     |
| `fontColorOnDark`                 | Label                   | `color-white`            | #ffffff     |
| `disabledFontColorOnDark`         | Label:disabled          | `color-grey-500`         | #999999     |


### Typography

| Component token       | Element       | Core token            | Value                    |
| :-------------------- | :------------ | :-------------------- | :----------------------- |
| `fontFamily`          | Label         | `font-family-sans`    | 'Open Sans', sans-serif  |
| `fontSize`            | Label         | `font-scale-03`       | 1rem / 16px              |
| `fontWeight`          | Label         | `font-weight-regular` | 400                      |
| `fontStyle`           | Label         | `font-style-normal`   | 400                      |


### Border

| Property              | Element                | Core token                 | Value            |
| :-------------------- | :--------------------- | :------------------------- | :--------------- |
| `border-width`        | Radio input            | `border-width-2`           | 2px              |
| `border-style`        | Radio input            | `border-style-solid`       | solid            |
| `border-width`        | Focus border           | `border-width-2`           | 2px              |
| `border-style`        | Focus border           | `border-style-solid`       | solid            |


### Spacing

| Component token             | Element                | Core token                 | Value            |
| :-------------------------- | :--------------------- | :------------------------- | :--------------- |
| `labelMargin`               | Label                  | `spacing-03`               | 0.5rem / 8px     |
| `groupVerticalSpacing`      | Radio                  | `spacing-05`               | 1rem / 16px      |
| `groupHorizontalSpacing`    | Radio                  | `spacing-07`               | 2rem / 32px      |


### Size 

| Property              | Element                   | Value     |  
| :-------------------- | :------------------------ | :-------  | 
| `width`               | Radio input               | 18px      | 
| `width`               | focus outline             | 24px      | 
| `height`              | Radio input               | 18px      | 
| `height`              | focus outline             | 26px      |  

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

## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
* Understanding WCAG 2.2 - [SC 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
* Understanding WCAG 2.2 - [SC 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)

### WAI-ARIA 1.2

* WAI-ARIA Authoring Practices 1.2 - [3.12 Radio group](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton)



## Links and references

* [React CDK component](https://developer.dxc.com/tools/react/next/#/components/radio)
* [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/radio)
* [Adobe XD component](https://xd.adobe.com/view/e7d8044f-9f1e-4350-b66e-3b16217b2c54-b28b/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/radio/README.md)
