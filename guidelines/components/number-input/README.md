# Number input

The number-input is a text-input component that only allows numerical values and it has controls for incrementing or decrementing them.

## Usage

Considerations for the use of the number-input component:

* Don't use the number-input component for amounts. Use a text-input instead
* Always enable typing in the input field
* Avoid using the component when large values are expected

## States
### Input

States: **Enabled**, **hover**, **focus**, **error** and  **disabled**

![Input states example](images/number_input_states.png)

_Input states example_

### Spin button

States: **Enabled**, **hover**, **focus**, **active** and  **disabled**

![Spin button states example](images/number_action_states.png)

_Spin button states example_


## Anatomy

![Anatomy of the number-input component](images/number_anatomy.png)

1. Label
2. Helper text _(Optional)_
3. Suffix _(Optional)_
4. Container
5. Spin button increase
6. Spin button decrease
7. Error indicator
8. Error message
9. Value


## Design specifications


![Design specifications of the number-input component](images/number_specs.png)

_Design specifications of the number-input component_


The number-input `color`, `typography`, `border`, `spacing`, `width` and `margin` specifications are inherited from the text-input, for reference [check the text-input component documentation](https://developer.dxc.com/design/guidelines/components/text-input). 



## Accessibility
<!--

Add WCAG success criterion and WAI-ARIA design pattern and example when available

### WCAG 

* Understanding WCAG 2.2 - [SC x.x name of the success criterion](url)
-->

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [3.21 Spinbutton](https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton)
* WAI-ARIA Authoring practices 1.2 - ["Date Picker Spin Button" design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/examples/spinbutton/datepicker-spinbuttons.html)



## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/numberInput)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/numberInput)
* [Adobe XD component](https://xd.adobe.com/view/946f8b3d-f07c-475b-adcd-0abe2239d592-c13c/)

____________________________________________________________

* [Edit this page on GitHub](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/number-input/README.md)

