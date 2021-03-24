## Overview

A select component is a right choice to preventing users from entering errors in input data because the options are predefined, also they conserve screen space and it is possible to show several options in a reduced space.
The main use of select components is inside a form fill, letting the user select an option from the list as an input.

## Appearance

Select is widely recognizable, despite the options are not shown at the first instance, an icon with a down arrow indicates that clicking in the field the list will be visible.
In the input, the placeholder has defined the attribute that will get the value and when the dropdown is shown, it will be displayed immediately above the placeholder, to get visible all the time which form fill attribute is the user filling. 

In case that an option is selected when the dropdown turns visible, it should be at the top of the dropdown whenever this would be possible.

Multiple option selection will get an appearance with a checkbox that indicates the elements from the list that are selected or not.

### Modes

There is only one mode for the select component: __basic__.
It looks similar to the other inputs from the design system but in this case, it will always indicate with an arrow icon that there is a list with options that allow the user to selecting one or more options.

![Select modes](images/select_modes.png)

## States

Seven states are defined for select component based on the interactions that the user can reproduce. The states are: __normal__, __select with focus__, __select clicked__, __select clicked and option selected__, __select with clicked option and hovered option__, __select animation on click__ and __select input with value__.

![Select states](images/select_states.png)

## Theming and tokens

| Tokens        | Default value |
| ------------- | -------------:| 
| selectedOptionBackgroundColor   | `#F8F8F8`  |
| color   | `#000000`  |
| hoverOptionBackgroundColor   | `#f2f2f2`  |
| error         | `#D0011B`  |
| scrollBarThumbColor | `#666666`|
| scrollBarTrackColor    | `#F8F8F8`  |
| disabledColor      | `#b1b1b1`  |
| focusColor | `#005FCC`  |

## Multiple selection

Using the select component there is the option to use an alternative to take multiple selections. This allows the user to select more than one option from the list.
To indicate which items are selected and which not, the design for multiple selections integrates a checkbox pairing with each option from the dropdown.

![Select multiple option](images/select_multi.png)


## Design Specifications

| Property for single| Value|
|--------------------|------:|
| Padding dropdown   | `20px 10px 20px 20px`|
| Height (default)   | `auto - adapted to the content`|
| Item padding top/bottom   | `10px`|
| Font size  | `16px`|
| Font weight   | `Regular`|


| Property for multiple   | Value|
|--------------------|------:|
| Padding dropdown   | `10px 15px 20px 15px`|
| Space chckbox/text   | `15px`|
| Item padding top/bottom   | `10px`|
| Font size  | `16px`|
| Font weight   | `Regular`|
| Checkbox size   | `20px x 20px`|

| Property for input   | Value|
|--------------------|------:|
| Margin   | `15px`|
| Space text/underline   | `12px`|
| Underline thickness   | `1px`|
| Underline thickness focus  | `2px`|
| Font size  | `16px`|
| Font weight   | `Regular`|
| Icon margin bottom | `20px`|

![Select specifications](images/select_spec.png)

## User Interface Design Considerations

Single selection dropdown

- A dropdown field should allow the user to select one option from a list
- Dropdown fields should always display a label, different from any name in the option list
- If options list is extensive, consider letting user begin typing entry that will suggest possible options
- A default choice should display whenever a specific option will be selected by the user. It should be the first selectable item in the list
- If selection an option in one dropdown field filters options for the next field, subsequent fields should be disabled until the initial selection is complete

Multiple selection dropdown

- If more than one option is applicable, a multi-selection box should be used
- If the list of options is short (4 or less) and users can select more than one option, consider using checkboxes instead of a multi-selection list for simplicity and visual clarity
- Multi-select fields should feature checkboxes for each singles option in the dropdown list, to allow selection on all types of devices. If a 'Select All' option is warranted, it should be placed first in the list

## Links and references

- https://xd.adobe.com/view/afb409f4-884d-4236-6cf2-4766bee75b52-d985/screen/5d47790c-8718-4e0a-acc4-3deea3a0a8fa/

