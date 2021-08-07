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

1. Floor label _(Optional)_
2. Total line
3. Ceil label _(Optional)_
4. Value input _(Optional)_
5. Tick mark
6. Thumb
7. Track line


## Slider with input

To accomplish these considerations, some slider's variations were designed with the purpose of offering a great user experience within the application.

![Slider with input example](images/slider_input.png "Slider with input example")

_Slider with input example_



## Design Specifications

![Slider Specifications](images/slider_specs.png "Slider Specifications")

_Slider Specifications_


### Color

#### On-Light

| Component token                   | Element             | Core token      | Value   |
| :-------------------------------- | :------------------ | :-------------- | :------ |
| `fontColor`                       | Floor/Ceil label    | `Hal-Black`     | #000000 |
| `thumbBackgroundColor`            | Thumb               | `Hal-Blue-S-35` | #0067b3 |
| `activeThumbBackgroundColor`      | Thumb:active        | `Hal-Blue-D-20` | #003c66 |
| `disabledThumbBackgroundColor`    | Thumb:disabled      | `Hal-Grey-L-75` | #bfbfbf |
| `tickMarkBackgroundColor`         | Tick Mark           | `Hal-Blue-S-35` | #0067b3 |
| `disabledTickMarkBackgroundColor` | Tick Mark:disabled  | `Hal-Grey-L-75` | #bfbfbf |
| `trackLineColor`                  | Track line          | `Hal-Blue-S-35` | #0067b3 |
| `disabledTrackLineColor`	        | Track line:disabled | `Hal-Blue-L-95` | #e6f4ff |
| `totalLineColor`	                | Total line          | `Hal-Grey-L-90` | #e6e6e6 |
| `disabledTotalLineColor`          | Total line:disabled | `Hal-Grey-L-95` | #f2f2f2 |
| `focusColor`                      | Focus outline       | `Hal-Blue-S-35` | #0067b3 |


#### On-Dark

| Component token                           | Element              | Core token        | Value         |
| :---------------------------------------- | :------------------- | :---------------- | :------------ |
| `fontColorOnDark`                         | Floor/Ceil label     | `Hal-White`       | #ffffff       |
| `thumbBackgroundColorOnDark`              | Thumb                | `Hal-Blue-L-50`   | #0095ff       |
| `activeThumbBackgroundColorOnDark`        | Thumb:active         | `Hal-Blue-S-35`   | #0067b3       |
| `disabledThumbBackgroundColorOnDark`	    | Thumb:disabled       | `Hal-Grey-L-60`   | #999999       |
| `tickMarkBackgroundColorOnDark`	          | Tick mark            | `Hal-Blue-L-50`   | #0095ff       |
| `disabledTickMarkBackgroundColorOnDark`   | Tick mark:disabled   | `Hal-Grey-L-60`   | #999999       |
| `trackLineColorOnDark`                    | Track line           | `Hal-Blue-L-50`   | #0095ff       |
| `disabledTrackLineColorOnDark`            | Track line:disabled  | `Hal-Grey-L-60`   | #999999       |
| `totalLineColorOnDark`	                  | Total line           | `Hal-Grey-L-75`   | #bfbfbf       |
| `disabledTotalLineColorOnDark`            | Total line:disabled  | `Hal-Grey-S-40`   | #666666       |
| `focusColorOnDark`                        | Focus outline        | `Hal-Blue-L-50`   | #0095ff       |

### Typography


| Component token                   | Element             | Core token      | Value                     |
| :-------------------------------- | :------------------ | :-------------- | :------------------------ |
| `fontFamily`                      | Floor/Ceil label    | `type-sans`     | 'Open Sans', sans-serif   |
| `fontSize`                        | Floor/Ceil label    | `type_scale_03` | 1rem / 16px               |
| `fontWeight`                      | Floor/Ceil label    | `type_regular`  | 400                       |
| `fontStyle`                       | Floor/Ceil label    | `type_normal`   | normal                    |

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
| `height`                          | Thumb:hover*        | -               | 16px                      |
| `width`                           | Thumb:hover         | -               | 16px                      |
| `height`                          | Tick mark           | -               | 4px                       |
| `width`                           | Tick mark           | -               | 4px                       |

[*] The thumb element size is 16x16px in the following states: `:hover`, `:focus` and `:active`.

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

- [React component](https://developer.dxc.com/tools/react/3/#/components/slider)
- [Angular component](https://developer.dxc.com/tools/angular/3/#/components/slider)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/slider/README.md)
