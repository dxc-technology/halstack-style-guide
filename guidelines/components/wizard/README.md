# Wizard

Wizard represents a stepped workflow as a form of linear and mandatory progression through a defined process with several bullet points where the user need to interact with the content of each step during the workflow.

### Usage

- The horizontal/vertical line should not extend to the left of the first circle or to the right of the last circle
- Do not overwhelmed the component with too many steps, it won't be a good idea for the user workflow neither for the display of the information

## Variants

The wizard component has two variants: **horizontal** and **vertical**.

![Examples of horizontal and vertizal wizard flows](images/wizard_variants.png)

_Examples of horizontal and vertizal wizard flows_

## States

States: **enabled**, **focus**, **selected**, **unvisited** and **disabled**.

![Example of the wizard stepper states](images/wizard_states.png)

_Example of the wizard stepper states_

## Anatomy

![Wizard component anatomy](images/wizard_anatomy.png)

1. Stepper
2. Label
3. Separator
4. Helper text _(Optional)_
5. Step validator _(Optional)_

## Design Specifications

![Wizard stepper specifications](images/wizard_specs_stepper.png)

_Wizard stepper specifications_

![Wizard variants spacing specifications](images/wizard_specs_spacing.png)

_Wizard variants spacing specifications_


### Color

| Component token                          | Element                            | Core token             | Value            |
| :--------------------------------------- | :--------------------------------- | :--------------------- | :--------------- |
| `stepperFontColor`                       | Stepper text                       | `color-black`          | #000000          |
| `selectedStepperFontColor`               | Stepper:selected text              | `color-white`          | #ffffff          |
| `unvisitedStepperFontColor`              | Stepper:unvisited text             | `color-grey-700`       | #666666          |
| `disabledStepperFontColor`               | Stepper:disabled text              | `color-grey-500`       | #999999          |
| `stepperBackgroundColor`                 | Stepper background                 | `color-white`          | #ffffff          |
| `selectedStepperBackgroundColor`         | Stepper:selected background        | `color-purple-700`     | #5f249f          | 
| `unvisitedStepperBackgroundColor`        | Stepper:unvisited background       | `color-grey-700`       | #666666          | 
| `disabledStepperBackgroundColor`         | Stepper:disabled background        | `color-grey-100`       | #f2f2f2          |
| `stepperBorderColor`                     | Stepper border                     | `coor-black`           | #000000          |
| `selectedStepperBorderColor`             | Stepper:selected border            | `color-purple-700`     | #5f249f          |
| `unvisitedStepperBorderColor`            | Stepper:unvisited border           | `color-grey-700`       | #666666          |
| `disabledStepperBorderColor`             | Stepper:disabled border            | `color-grey-100`       | #f2f2f2          |
| `labelFontColor`                         | Label                              | `color-black`          | #000000          |
| `activeLabelFontColor`                   | Label:active                       | `color-black`          | #000000          |
| `disabledLabelFontColor`                 | Label:disabled                     | `color-grey-500`       | #999999          |
| `helperTextFontColor`                    | Helper text                        | `color-black`          | #000000          |
| `helperTextActiveFontColor`              | Helper text: active                | `color-black`          | #000000          |
| `separatorColor`                         | Separator                          | `color-grey-700`       | #666666          |
| `focusColor`                             | Focus outline                      | `color-blue-600`       | #0095ff          |

### Margin

Different values can be applied to each side of the component:
`top` `bottom` `left` `right`

| Margin    | Value |
| --------- | ----- |
| `xxsmall` | 6px   |
| `xsmall`  | 16px  |
| `small`   | 24px  |
| `medium`  | 36px  |
| `large`   | 48px  |
| `xlarge`  | 64px  |
| `xxlarge` | 100px |


### Typography

| Component token                          | Element                            | Core token                | Value            |
| :--------------------------------------- | :--------------------------------- | :------------------------ | :--------------- |
| `stepperFontSize`                        | Stepper text                       | `font-scale-03`           | 1rem / 16px      |
| `stepperFontFamily`                      | Stepper text                       | `font-family-sans`        | Open Sans        |
| `stepperFontStyle`                       | Stepper text                       | `font-style-normal`       | normal           |
| `stepperFontWeight`                      | Stepper text                       | `font-style-regular`      | 400              |
| `stepperFontTracking`                    | Stepper text                       | `font-tracking-wide-02`   | 0.05em           |
| `labelFontSize`                          | Label                              | `font-scale-03`           | 1rem / 16px      |
| `labelFontFamily`                        | Label                              | `font-family-sans`        | Open Sans        |
| `labelFontStyle`                         | Label                              | `font-style-normal`       | normal           |
| `labelFontWeight`                        | Label                              | `font-style-regular`      | 400              |
| `labelFontTracking`                      | Label                              | `font-tracking-normal`    | 0em              |
| `helperTextFontSize`                     | Helper text                        | `font-scale-02`           | 0.875rem / 14px  |
| `helperTextFontFamily`                   | Helper text                        | `font-family-sans`        | Open Sans        |
| `helperTextFontStyle`                    | Helper text                        | `font-style-normal`       | normal           |
| `helperTextFontWeight`                   | Helper text                        | `font-style-regular`      | 400              |
| `helperTextFontTracking`                 | Helper text                        | `font-tracking-normal`    | 0em              |



### Border

| Component token                          | Element                            | Core token             | Value            |
| :--------------------------------------- | :--------------------------------- | :--------------------- | :--------------- |
| `stepperBorderStyle`                     | Stepper border                     | `border-style-solid`   | solid            |
| `stepperBorderWidth`                     | Stepper border                     | `border-width-2`       | 2px              |
| `selectedStepperBorderWidth`             | Stepper border:selected            | `border-width-2`       | 2px              |
| `disabledStepperBorderWidth`             | Stepper border:disabled            | `border-width-2`       | 2px              |
| `stepperBorderWidth`                     | Stepper border-radius              | `border-radius-full`   | 9999px           |
| `separatorBorderWidth`                   | Separator                          | `border-width-1`       | 1px              |
| `separatorBorderStyle`                   | Separator                          | `border-style-solid`   | solid            |


### Spacing


| Property                          | Element                            | Core token             | Value            |
| :-------------------------------- | :--------------------------------- | :--------------------- | :--------------- |
| `margin-left`                     | Label                              | `spacing-04`           | 0.75rem / 12px   |
| `margin-left`                     | Step container                     | `spacing-06`           | 1.5rem / 24px    |
| `margin-right`                    | Step container                     | `spacing-06`           | 1.5rem / 24px    |

### Sizing

| Property                          | Element                            | Core token             | Value            |
| :-------------------------------- | :--------------------------------- | :--------------------- | :--------------- |
| `width`                           | Stepper                            | -                      | 32px             |
| `height`                          | Stepper                            | -                      | 32px             |

### Iconography

| Property          | Element         | Value     |
| ---------------   | ----------      | ----------|
| `height`/ `width` | Custom icon     | 20/20px   |
| `height`/ `width` | Validation icon | 18/18px   |


## Validation

There could be some scenarios in which the content of a step wants to be validated while the user is filling the fields with information or doing relevant actions in every step of the wizard.
For that case, a validation mark can be represented in every step once the user navigate to the next step in the linear progression. This will represent the status of the validation respecting the content, with a success mark or an error mark visible on the step mark.

![Example of wizard step validation](images/wizard_validation.png)

_Example of wizard step validation_

## Content

Different variations of the content can be performed in the stepper:

* Only numbers
* Only icons
* Numbers/icons with stepper label

![Examples of wizard content with an icon](images/wizard_content.png)

_Examples of wizard content with an icon_

## Helper text

Helper text can be added to the wizard component stepper:

![Example of wizard helper text](images/wizard_helper_text.png)

_Example of wizard helper text_

## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
* Understanding WCAG 2.2 - [SC 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
* Understanding WCAG 2.2 - [SC 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
* Understanding WCAG 2.2 - [SC 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)


### WAI-ARIA

* Web accessibility tutorials - [Multi-page forms](https://www.w3.org/WAI/tutorials/forms/multi-page/)


## Links and references

* [React CDK component](https://developer.dxc.com/tools/react/next/#/components/wizard)
* [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/wizard)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/wizard/README.md)
