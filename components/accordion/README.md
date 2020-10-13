## Overview

Accordions are components that can show/hide alternate groups of data within separate panels. Each panel is a container component that displays a group of related data in horizontal or vertical stacks. 

Each component has its titled bar tab that, when clicked, opens the content of the panel. Accordions visually control the amount of relevant data per panel as well as the amount of data displayed in the viewport, reducing the demand for excessive vertical scrolling.

## Appereance

An accordion trigger is always paired with a label that describes the content that can be found inside the accordion and an arrow that indicates that clicking there some action will take place.

The concept of an accordion is not more than a container of information, so the content inside the accordion will rely on the responsibility of the implementation. It can contain other components, images, tables, and every custom feature that can be supported inside the element container.

### Modes

There is only one mode available for the accordion component which works in all the possible scenarios.

![Accordion modes example](images/accordion_modes.png)

### States

The accordion component can get four different states based on user interaction.
States: __normal__, __hover__, __disabled__, __open__.
![Accordion states example](images/accordion_states.png)

## Theming

| Tokens        | Themable      | Default value |
| ------------- |:-------------:| -------------:|
| backgroundColor | `false`     | `#FFFFFF`  |
| textColor | `false`     | `#666666`  |
| hoverTextColor | `false`     | `#000000`  |
| arrowColor | `true`     | `#666666`  |
| hoverBackgroundColor | `false`     | `0.34 opacity`  |
| disabled | `false`     | `0.34 opacity`  |

The hover background color for the trigger of the accordion is calculated from the color defined for the arrow icon.


## Design Specifications

Accordion specifications with the content hidden.

| Property           | Value|
|--------------------|------:|
| Margin            | `1px` |
| Padding right/left | `30px` |
| Padding top/bottom | `20px` |
| Border Radius | `4px` |
| Border thickness (outside)| `2px` |
| Separator | `1px` |
| Min. height| `72px` |
| Min. width| `280px` |
| Max. width| `100%` |
| Font size| `16px` |
| Font weight| `Regular` |


Specifications for the content within the accordion.

| Property           | Value|
|--------------------|------:|
| Margin            | `1px` |
| Padding           | `30px` |
| Height            | `According to the content` |
| Widht             | `The same as the trigger` |

![Accordion states example](images/accordion_specs.png)


## Responsive version

The modes, states, and actions for a responsive version are the same that the ones used in the desktop version. The only difference is the size of the accordion that will fit the device in which this will be displayed.
The minimum width of the component (280px) fits well in small devices.

The hover action isn't allowed on touchable screens, so it will be replaced by the tap action.

![Accordion responsive version](images/accordion_responsive.png)


### User Interface Design Considerations

- Consider using accordions to decrease scroll, placing information inside of each section following the guidelines detailed in the design system for each component
- Make a cohesive relation between accordions, establishing a hierarchy, a series of steps or topics related in the same group of accordions

## Links and references

- https://xd.adobe.com/view/afb409f4-884d-4236-6cf2-4766bee75b52-d985/screen/a39d0282-0329-434e-a69c-8b32644f92cc