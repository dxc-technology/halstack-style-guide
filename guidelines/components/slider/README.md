# Slider

Slider control allows users to select a specific value or a range of values from a set. Usually, slider presents a relatively large dataset and the way that the user interacts with it is helpful to explore the multiple options swiftly.


## Usage

- Visualize the output of the slider as feedback to the user of the current state.
- As more information can give it to the user, the easier the selection will be.
- If the value has to be specific, give some resource to the user to fill a precise input, i.e. an input next to the slider.


## Variants

The slider has two variants:

| Variant         | Description
| :-------------- | :-------------------------------------------------------------- |
| **Discrete**    | Slider can only get the value marked alongside the total line   |
| **Continous**   | Slider can take every value mapped                              |

![Slider variants](images/slider_variants.png "Slider variants")

_Slider variants_


## States

The slider component has the following states: **enabled**, **hover**, **focus**, **active** and **disabled**.

![Slider component different states example](images/slider_states.png "Slider component different states example")
_Slider component different states example_


## Anatomy

![Slider Anatomy](images/slider_anatomy.png "Slider Anatomy")

1. Label
2. Helper text
3. Floor label _(Optional)_
4. Total line
5. Ceil label _(Optional)_
6. Value input _(Optional)_
7. Tick
8. Thumb
9. Track line


## Slider with input

To accomplish these considerations, some slider's variations were designed with the purpose of offering a great user experience within the application.

![Slider with input example](images/slider_input.png "Slider with input example")

_Slider with input example_



## Design Specifications

![Slider Specifications](images/slider_specs.png "Slider Specifications")

_Slider Specifications_


### Color


| Component token                   | Element             | Core token            | Value   |
| :-------------------------------- | :------------------ | :-------------------- | :------ |
| `fontColor`                       | Floor/Ceil label    | `color-black`         | #000000 |
| `labelFontColor`                  | Label               | `color-black`         | #000000 |
| `helperTextColor`                 | Helper text         | `color-black`         | #000000 |
| `thumbBackgroundColor`            | Thumb               | `color-blue-800`      | #0067b3 |
| `hoverThumbBackgroundColor`       | Thumb:hover         | `color-blue-900`      | #003c66 |
| `focusThumbBackgroundColor`       | Thumb:focus         | `color-blue-800`      | #0067b3 |
| `activeThumbBackgroundColor`      | Thumb:active        | `color-blue-900`      | #003c66 |
| `disabledThumbBackgroundColor`    | Thumb:disabled      | `color-grey-500`      | #999999 |
| `tickMarkBackgroundColor`         | Tick                | `color-blue-800`      | #0067b3 |
| `disabledTickMarkBackgroundColor` | Tick:disabled       | `color-grey-500`      | #999999 |
| `trackLineColor`                  | Track line          | `color-blue-800`      | #0067b3 |
| `disabledTrackLineColor`	        | Track line:disabled | `color-blue-500`      | #999999 |
| `totalLineColor`	                | Total line          | `color-grey-200`      | #e6e6e6 |
| `disabledTotalLineColor`          | Total line:disabled | `color-grey-100`      | #f2f2f2 |
| `focusColor`                      | Focus indicator     | `color-blue-600`      | #0095ff |


### Typography

| Component token                   | Element             | Core token             | Value                     |
| :-------------------------------- | :------------------ | :--------------------- | :------------------------ |
| `fontFamily`                      | Label	              | `font-family`          | 'Open Sans', sans-serif   |
| `fontSize`                        | Label	              | `font-scale-02`        | 0.875rem / 14px           |
| `fontStyle`                       | Label	              | `font-style-normal`    | normal                    |
| `fontWeight`                      | Label	              | `font-weight-semibold` | 600                       |
| `lineHeight`                      | Label	              | `font-leading-loose-01`| 1.715em                   |
| `fontFamily`                      | Helper text	      | `font-family`          | 'Open Sans', sans-serif   |
| `fontSize`                        | Helper text	      | `font-scale-01`        | 0.75rem / 12px            |
| `fontStyle`                       | Helper text	      | `font-style-normal`    | normal                    |
| `fontWeight`                      | Helper text	      | `font-weight-regular`  | 400                       |
| `lineHeight`                      | Helper text	      | `font-leading-normal`  | 1.5em                     |
| `fontFamily`                      | Floor/Ceil label    | `font-family-sans`     | 'Open Sans', sans-serif   |
| `fontSize`                        | Floor/Ceil label    | `font-scale-03`        | 1rem / 16px               |
| `fontWeight`                      | Floor/Ceil label    | `font-weight-regular`  | 400                       |
| `fontStyle`                       | Floor/Ceil label    | `font-style-normal`    | normal                    |


### Spacing

| Property                          | Element             | Core token      | Value                     |
| :-------------------------------- | :------------------ | :-------------- | :------------------------ |
| `margin-left`                     | Floor label         | `spacing-05`    | 1rem / 16px               |
| `margin-right`                    | Ceil label          | `spacing-05`    | 1rem / 16px               |
| `margin-left`                     | Input               | `spacing-07`    | 2rem / 32px               |


### Size

| Property                          | Element             | Core token      | Value                     |
| :-------------------------------- | :------------------ | :-------------- | :------------------------ |
| `height`                          | Total line          | -               | 2px                       |
| `height`                          | Track line          | -               | 2px                       |
| `height`                          | Thumb               | -               | 12px                      |
| `width`                           | Thumb               | -               | 12px                      |
| `height`                          | Thumb:hover*        | -               | 14px                      |
| `width`                           | Thumb:hover         | -               | 14px                      |
| `height`                          | Tick                | -               | 4px                       |
| `width`                           | Tick                | -               | 4px                       |

[*] The thumb element size is 14x14px in the following states: `:hover`, and `:active`.


### Border

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `border-width`           | Track line       | `border-width-0`           | 0                |
| `border-style`           | Track line       | `border-style-none`        | none             |
| `border-radius`          | Track line       | `border-radius-full`       | 9999px           |
| `border-width`           | Thumb            | `border-width-0`           | 0                |
| `border-style`           | Thumb            | `border-style-none`        | none             |
| `border-radius`          | Thumb            | `border-radius-full`       | 9999px           |
| `outline`                | Focus indicator  | -                          | auto 1px         |
| `outline-offset`         | Focus indicator  | -                          | 2px              |


## Accessibility

### WCAG

* Understanding WCAG 2.2 - [SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) 
* Understanding WCAG 2.2 - [SC 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) 
* Understanding WCAG 2.2 - [SC 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
* Understanding WCAG 2.2 - [SC 2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) 
* Understanding WCAG 2.2 - [SC 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) 
* Understanding WCAG 2.2 - [SC 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) 
* Understanding WCAG 2.2 - [SC 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) 

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [3.19 Slider](https://www.w3.org/TR/wai-aria-practices-1.2/#slider)
* WAI-ARIA Authoring practices 1.2 - [Slider example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/slider/slider-1.html)

## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/slider)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/slider)
* [Adobe XD component](https://xd.adobe.com/view/29ee46d1-7a4c-42bf-bd66-16ae62477a6a-7cbd/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/slider/README.md)
