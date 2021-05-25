## Overview

A select component is a right choice to preventing users from entering errors in input data because the options are predefined, also they conserve screen space and it is possible to show several options in a reduced space.
The main use of select components is inside a form fill, letting the user select an option from the list as an input.

## Appearance

Select is widely recognizable, despite the options are not shown at the first instance, an icon with a down arrow indicates that clicking in the field the list will be visible.
In the input, the placeholder has defined the attribute that will get the value and when the options list is shown. 

* The options list will be displayed immediately above the placeholder, to get visible all the time which form fill attribute is the user filling.
* In case that an option is selected when the dropdown turns visible, it should be at the top of the dropdown whenever this would be possible.
* Multiple option selection will get an appearance with a checkbox that indicates the elements from the list that are selected or not.


## States

### Select input

States are defined for select component based on the interactions that the user can reproduce. The states are: **enabled**, **focus** and **disabled** 

![Select states](images/select_states.png)

### Options list

The options have two states: **hover** and **selected**

![Option list states](images/select_option_states.png)



## Design tokens

| Tokens                        | Default value |
| ----------------------------- | ------------: |
| selectedOptionBackgroundColor |     `#D9D9D9` |
| color                         |     `#000000` |
| hoveredOptionBackgroundColor  |     `#F2F2F2` |
| error                         |     `#D0011B` |
| scrollBarThumbColor           |     `#666666` |
| scrollBarTrackColor           |     `#D9D9D9` |
| disabledColor                 |     `#B1B1B1` |
| focusColor                    |     `#005FCC` |

## Multiple selection

Using the select component there is the option to use an alternative to take multiple selections. This allows the user to select more than one option from the list.
To indicate which items are selected and which not, the design for multiple selections integrates a checkbox pairing with each option from the dropdown.

![Select multiple option](images/select_multi.png)

## Design Specifications

#### Size

width | value
-- | --
```small``` | 60px
```medium``` | 240px
```large``` | 480px
```fillParent``` | -

#### Margin

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px

Different values can be applied to each side of the component:
```top``` ```bottom``` ```left``` ```right```

### Select input

Select input specifications are the same as the [text-input](https://developer.dxc.com/design/components/text-input)

### Options list

| Property for single     |                           Value |
| ----------------------- | ------------------------------: |
| List item padding       |           6px 16px |
| Height (default)        | auto - adapted to the content |
| Font size               |                          16px |
| Font weight             |                       Regular |
| Icon size               |                    20px x 20px|
| Spacing between icon and label | 12px  |

| Property for multiple   |                 Value |
| ----------------------- | --------------------: |
| List item padding       |             6px 16px |
| Font size               |                16px |
| Font weight             |             Regular |
| Checkbox size           |         20px x 20px |
| Icon size               |                    20px x 20px|
| Spacing between checkbox and label | 12px  |
| Spacing between icon and label | 12px  |



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

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/5d47790c-8718-4e0a-acc4-3deea3a0a8fa/variables/

