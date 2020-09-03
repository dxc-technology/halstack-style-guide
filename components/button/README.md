## Overview

Buttons are basic interface elements that initialize an action or function when the user interacts with them. The appearance of the button should suggest the user takes an action that leads to different scenarios.

These elements that reinforce to the user the necessity to interact are called CTA (Call to Action) components, which basically are designed to capture user attention and improve the user experience within the application.

## Appereance

Into DXC Design System you will find several buttons with different shades, colors, and sizes, each of them carefully designed following best practices to fit in every application that will be built or integrated with this system.

### Modes

We can identify four different modes that imply some visual changes according to color, border or shadow attributes.
Modes: __primary__, __secondary__, __text button__.

![Button modes example](images/button_modes.png)

For taking into consideration, the main background colors for the application would be white or black, so the use of any button with such colors is a great option. In case that the user wants to customize color or contrast, it is recommended follow best practices and check the accessibility in any case.

### States

The states are the different behaviors of the button component based on the interaction of the user.
For the desktop version, we contemplate four different states by which can pass.

States: __default__, __disabled__, __hover__, __active__ and __focus__.  

![Button state example](images/button_states.png)

## Theming and tokens

#### Primary button

| Tokens        | Themable      | Default value |
| ------------- |:-------------:| -------------:| 
| backgroundColor      | `true` | `yellow`|
| textColor      | `true` | `black`  |
| disabledOpacity | `false`     | `0.34 opacity`  |
| hoverBackgroundColor | `true`     | `black`  |
| hoverTextColor | `true`     | `yellow`  |

#### Secondary button

| Tokens        | Themable      | Default value |
| ------------- |:-------------:| -------------:|
| backgroundColor      | `false` | `transparent` |
| outlinedColor      | `true` | `yellow`  |
| textColor | `true`     | `black`  |
| disabledOpacity | `false`     | `0.34 opacity`  |
| hoverOutlinedColor | `true`     | `black`  |
| hoverTextColor | `true`     | `black`  |

#### Text button

| Tokens        | Themable      | Default value |
| ------------- |:-------------:| -------------:|
| backgroundColor      | `false` | `transparent` |
| textColor | `true`     | `black`  |
| disabledOpacity | `false`     | `0.34 opacity`  |
| hoverBackgroundColor | `true`     | `black`  |
| hoverTextColor | `true`     | `black`  |

## DXC Technology theme



More details in the link below:
https://xd.adobe.com/view/afb409f4-884d-4236-6cf2-4766bee75b52-d985/screen/af07084e-1cfb-4663-be72-6f6345da9646/

## Design Specifications

To define the button design specifications, several properties were identified and assigned immutable values ​​that make the component recognizable along applications, independently of the customizable styles given.

With the default theme, the components will get *black* as a primary color for the text and *yellow* as an accent color for the background.
To keep the consistency through the design system, the font used is *Open Sans*, which includes all the font variations: Light *(200)*, Regular *(400)*, Semibold *(600)*, Bold *(700)* and Extrabold *(800)*.

Using button ripple is a good practice of including interaction effects. By default it is implemented because it helps to generate feedback from a flat design, communicating the final user what action is taking place.
Sometimes the purpose should be different, so there is the possibility to inactive this feature.

| Property           | Value|
|--------------------|------:|
| Margin            | `15px` |
| Padding right/left | `30px` |
| Padding top/bottom | `12px` |
| Border Radius | `4px` |
| Border thickness| `2px` |
| Min. height| `43px` |
| Min. width| `122px` |
| Max. width| `420px` |
| Font size| `14px` |
| Font weight| `Regular` |
| Capitalization | `Uppercase` |

![Button specification](images/button_specs.png)

### Icon Usage

It is not limited the content of a button like so the user can place icons inside of a button to reinforce the action accordingly to the meaning.

Any icon can be used in the DXC Design System, so it is apt to the user to choose between one of the multiple options that are offered through internet but it is recommended to use the same library of icons along the application to keeping concistency.

Also, another point to consider is that the icon can go before or after the text with a separation of 10 pixels respecting the main button's text. To keeping the consistency, the icon sizes were defined based on the content and the implementation of the icons, resulting in the following:

*Do not use icons mainly for visual interest, the glyph must add information and clarification to the action that would be performed in the context of the button.

![Button with icon examples](images/button_icon.png)

A button with an icon and no text is also allowed in the design system.


### User Interface Design Considerations

Here, you can find more considerations in the using of buttons:

- In instances where buttons are vertically stacked, buttons should be the same length.
- Horizontally displayed buttons are dependent on the amount of text, so button lengths may vary, always considering the minimum and maximum established sizes.
- Text or images on a button should always be centered.
- There must be 24 pixels of space between horizontally displayed buttons.
- Upper case text should be used on all buttons.
- Button location, not dictated by workflow, should be centered or right aligned at the section/page margin. This can be defined by the application but should be consistent throughout.
