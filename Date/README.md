
## DXC Date Visual Guidelines

#### Overview

A date input is a user interface element where the user can type or select a date in a predefined format. The date format depends on an ISO definition for each contry and the preference of use within the application. It is a good practice to give to the user some type of hint about the date format and in many cases there is a second way to select the date with a date picker control. 

In this component both options will be available to the user, so if the user gets stuck typing the correct format of the data it has an additional option with graphic representation that is easily use.
It is common to find a date picker in these scenarios: date of birth, date range or as an input to filter based in some criteria.

If the state of the input is empty, it should give a hint in the placeholder about the format required. Also, as the design system is based in some of the Angular Material guidelines, that format would be visible in case that the input component is selected or filled.

##### *Appereance*



###### Modes

There are three modes for the date input with slightly changed that follows the design of the rest inputs. A thin line under the input container with description and labeling, and some animations that activate when the user interacts with the component.
Modes: __basic__, __basic with custom icon__ and __basic with custom format__.
<br>
<div> <img src="images/date_modes.png"/></div>

###### States

Eleven different states are defined in the life cycle of the component: __normal__, __icon pressed__, __input pressed__, __partially disabled__, __completely disabled__, __selected__, __entered__ and __disabled pop up__.
<br>

<div> <img src="images/date_states.png"/> </div>

##### *Design Specifications*

The specifications for dates are similar to the ones used with the input text component. In the case that the field will be read-only, the look and feel will be the same for both components.

The text within the input should always be align right. By default, the font size for this type of component is 16 pixels. When the field is empty and it has some hint the space between the text and the line below the input should be 12 pixels.

The thickness of the border should be 1 pixel but in the case that the input will be selected, the width would change to 2 pixels with an animation between the two states inherit from angular material default behaviour.


| Property           | Value|
|--------------------|------:|
| Margin             | `10px`|
| Height             | `34px`|
| Min widht          | `230px` |
| Border thickness   | `1px/2px` |
| Font size (with text)| `16px` |
| Font weight        | `Regular` |
| Icon size       | `18x18(px)` |
| Distance between text and underline | `12px` |

