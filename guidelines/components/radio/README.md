# Radio button

Radio buttons are elements that let the user select one option within a options group. It is the correct election when it has a list with six elements or fewer items, when the user needs to pick one mutually exclusive choice from the list.
Clicking a non-selected radio button will deselect whatever other button was previously selected in the list.

## Usage

* Labelling should be concise and clearly differentiated with respect to other options.
* By default, one option of the radio group must be pre-selected. Select the safest or convenient option.
* Single radio buttons should not be used.
* If the question that the user needs to responde is as easier as yes/no, it is recommended to use checkbox instead of radio button.


## States

The following states are defined in the life cycle of the component: **enabled**, **focus** and **disabled**.

![Radio button states](images/radio_states.png)

## Stack

Radio buttons may be displayed vertically or horizontally stacked.

![Radio button stacked layout](images/radio_stacked.png)

### Vertical stacking

Short lists of radio buttons should be stacked vertically below a descriptive label to better associate the group. Options that are listed vertically are easier to read.
With this option, try to make one choice per line. Also, avoid nesting whenever is possible, all options should be keep at same level to not generate confusion.

### Horizontal stacking

Multiple radio buttons may be displayed horizontally across the page while keeping them aligned within their respective columns. Here, it is needed to have in consideration that the linear radio buttons represent some challenge, because it's difficult to scan and localize, sometime a vertical position could be better.

In any case, in the specification it is specified the ideal distance between component with label in the same horizontal edge to avoid the problem of pairing and scannability.


## Design Specifications

![Radio button specifications](images/radio_specs.png)

### Color

#### On-light

| Component token                   | Element           | Core token               | Value       |
| :-------------------------------- | :---------------- | :----------------------- | :---------- |
| `color`                           | Radio             | `color-black`            | #000000     |
| `focusColor`                      | Radio:focus       | `color-blue-800`         | #0067b3     |
| `disabledColor`                   | Radio:disabled    | `color-grey-400`         | #bfbfbf     |
| `fontColor`                       | Label             | `color-black`            | #000000     |
| `disabledFontColor`               | Label:disabled    | `color-grey-400`         | #bfbfbf     |

#### On-dark

| Component token                   | Element           | Core token               | Value       |
| :-------------------------------- | :---------------- | :----------------------- | :---------- |
| `colorOnDark`                     | Radio             | `color-white`            | #ffffff     |
| `focusColorOnDark`                | Radio:focus       | `color-blue-600`         | #0095ff     |
| `disabledColorOnDark`             | Radio:disabled    | `color-grey-700`         | #666666     |
| `fontColorOnDark`                 | Label             | `color-white`            | #ffffff     |
| `disabledFontColorOnDark`         | Label:disabled    | `color-grey-700`         | #666666     |


### Size 

| Property              | Element       | Value     |  
| --------------------- | -----------   | --------  | 
| `width`               | radio         | 20px      | 
| `width`               | focus outline | 26px      | 
| `height`              | radio         | 20px      | 
| `height`              | focus outline | 26px      |  

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



## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
* Understanding WCAG 2.2 - [SC 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
* Understanding WCAG 2.2 - [SC 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)

### WAI-ARIA 1.2

* WAI-ARIA Authoring Practices 1.2 - [3.12 Radio group](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton)






## User Interface Design Considerations



## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/578ce690-701e-4daa-869d-70b55ea4f68e/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/radio/README.md)
