
# Forms

A form is a group of related input controls. Forms can be presented as dedicated pages or dialogs depending on the use case.

* [Structure](#structure)
* [Variants](#variants)
* [Anatomy](#anatomy)
* [Alignment](#alignment)
* [Form validation](#form-validation)
* [Required vs optional](#required-vs-optional)
* [Progressive disclosure](#progressive-disclosure)
* [Helping users](#helping-users)
* [Layout](#layout)
* [Accessibility](#accessibility)


## Structure


Form elements should move in a single direction so they should only be distributed through:

* One column when the progression of the form is vertical
* One row when the progression is horizontal. 

Horizontally stacking input fields in a vertically moving form is only acceptable when they’re related, for example, name and surname.


![image](https://user-images.githubusercontent.com/44420072/114583890-59ba5f80-9c82-11eb-8945-a2ef1182d570.png)


## Variants

Depending on the use case, Forms may be presented as dedicated pages or dialogs.

![Form pattern variants](images/form_variants.png)

_Form pattern variants_

### Page form

For more complex, lengthier or multistep requests for user input.


| Type | Description | Linked to |
| :---         |     :---     |   :---     | 
| Regular | Full page form | |
| Accordion Forms | To group similar content and hide or show it depending on user needs or preferences | [Accordion](components/accordion/README.md) |
| Multistep Forms | Provides a linear and mandatory step progression through a defined process | [Wizard](components/wizard/README.md)|

### Dialog form

For critical, infrequent requests for user input often related to editing and management tasks.

* Use a dialog form when dealing with less than five inputs.
* Do not hide information in accordions or tabs.

## Anatomy

![image](https://user-images.githubusercontent.com/44420072/114606499-9e9ec000-9c9b-11eb-9da9-7f1202d4f396.png)


1. **Text inputs**: Enable users to input free-form text.
2. **Data inputs**: Information can be entered through a variety of non-free form input fields (checkboxes, radio buttons, dropdowns and selects, file uploader, date pickers, toggles, etc.)
3. **Buttons**: Allows users to submit or exit a form.


### Text inputs

These controls enable users to provide input on forms by selecting from a set of pre-determined options or a limited range of values. Carbon provides a variety of data input components that enable a user to make a selection. Each component was created to serve a specific use case.

| Type | Description | 
| :---         |     :---     | 
| [Input-text](components/text-input/README.md) | To capture several words maximum | 
| [Text-area](components/text-input/README.md) | To capture multiple lines of text	 |  

### Data inputs

These controls enable users to provide input on forms by selecting from a set of pre-determined options or a limited range of values. Consider how many options you need to present as well as how many items the user may need to select.

| Type | Description | 
| :---         |     :---     | 
| [Radio button](components/radio/README.md) | To select only one option from two or more choices |
| [Checkbox](components/checkbox/README.md) | To select or deselect one or more choices |  
| [Toogle group](components/toggle/README.md) | To choose one of two binary options or select multiple options  |
| [Date picker](components/date/README.md) | To input/select a date from a calendar	 |  
| [Slider](components/slider/README.md) | To select one number from a numerical range	 |  
| [Switch](components/switch/README.md) | To activate or deactivate an option	 |  
| [Upload](components/upload/README.md)| To upload/attach a file or multiple files to a form		 |  

### Buttons

Use a primary button for the main action, a secondary button for secondary actions like Cancel or Discard.

| Type | Description | 
| :---         |     :--- |
| [Button](components/text-input/README.md) | Initialize an action or function when the user interacts with them | 

## Alignment

| Type | Description | 
| :---         |     :--- |
| Left-aligned | Non-dialog, in-page forms | 
| Right-aligned | Multistep forms/wizards when the primary action implies a navigation step forward | 
| Center-aligned | All forms that are presented in dialogs | 

## Form validation

Validation should be shown inline and can happen in real-time or on form submission. Real-time validation should confirm correct content or assist a user to input the correct information to prevent them from attempting to submit the form with possibly incorrect information. The validation should appear when the user has clicked away from the text field and always be visible and not placed in a tooltip.

When present, the validation message is placed directly below the input replacing the [helper text](#helping-users) until the error is fixed.

### Errors

An error indicates content that can’t be submitted or was found to be invalid after submission and needs to be corrected. 

![image](https://user-images.githubusercontent.com/44420072/115582483-4d10b980-a2c9-11eb-9dff-5766aac00ded.png)


_**Left**: `text-input` error message prompting the user there is an icorrect value._

_**Right**: Alert component showing an error after submitting._

#### User errors to handle

* Incorrectly formatting data
* Leaving a mandatory field blank
* Leaving a mandatory field incomplete

## Required vs optional

All fields in a form are assumed required, with optional fields being tagged as so in the label. An excess of optional fields should be avoided.

## Progressive disclosure

The user goal when interacting with a form should be taken into account when deciding whether a field needs to be disabled or hidden from the interface.

**Disabled fields**

Disable a field if a user does not have access grants for an item, but still needs disclosure to it. 

* The field is still displayed in the form, but cannot be edited. If it can become editable to the user (depending on certain conditions, like pressing a button or completing another field), it should stay disabled until then.
* Disabled fields give extra thought for the user about why it is not available. 
* The visual distinction between disabled/enabled fields should be very explicit and clear. Be sure to always include a help text below the field, explaining why it’s disabled.

**Hidden fields**

Hide a field if a user doesn’t need disclosure or access to an item. 

* This option is relevant specifically for system security measures when some information should not be available in the user interface.
* Hiding fields allows for progressive disclosure. 

For example, as the user enters data in a form or makes a selection, more fields may be displayed or hidden, but the user only has to focus on the necessary fields to complete a task.

## Helping users 

Helper text can be used as additional instructions to the user when filling in the form. It should be visible even on focus state and it can be replaced by an error message until the error is fixed in order to prevent adding more lines of text. More information can be found in the [helper text section](components/text-input/README.md) of the `text-input` component.

## Layout

### Form headings

| Token             | Description            | 
| :---              | :---                   |
| `headings-h3`     | Form title             | 
| `headings-h4`     | Form section title     | 
| `headings-h5`     | Form sub-section title | 

### Spacing

Every part of a UI should be intentional including the empty space between elements. The amount of space between items creates relationships and hierarchy. In Halstack we create hierarchy through our spacing scale. Use the component scale to create hierarchy between text inputs, data inputs, sections and form buttons.

| Element             | Description                                         | Full page            |  Modal               |
| :---                | :---                                                | :---                 | :---                 |
| Individual inputs   | Spacing between inputs                              | 32px / `spacing-07`  | 24px / `spacing-06`  |
| Sections            | Spacing between sections                            | 40px / `spacing-08`  | 32px / `spacing-07`  |
| Buttons             | Spacing between last form element and buttons       | 48px / `spacing-09`  | 48px / `spacing-09`  |

## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)
* Understanding WCAG 2.2 - [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
* Understanding WCAG 2.2 - [SC 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
* Understanding WCAG 2.2 - [SC 3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
* Understanding WCAG 2.2 - [SC 3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
* Understanding WCAG 2.2 - [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
  
### Related content

* [W3C Guidance for creating forms that meet WCAG](https://www.w3.org/WAI/tutorials/forms/instructions/)


_________________________

[Edit this page on GitHub](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/patterns/form/README.md)



