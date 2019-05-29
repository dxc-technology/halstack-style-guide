## DXC Button Visual Guidelines

#### Overview

Buttons are basic interface elements that initialize an action or function when the user interacts with them. The appearance of the button should suggest the user takes an action that leads to different scenarios.

These elements that reinforce to the user the necessity to interact are called CTA (Call to Action) components, which basically are designed to capture user attention and improve the user experience within the application.
<br>

##### *Appereance*

Into DXC Design System you will find several buttons with different shades, colors, and sizes, each of them carefully designed following best practices to fit in every application that will be built or integrated with this system.
<br>

###### Modes

We can identify four different modes that imply some visual changes according to color, border or shadow attributes.
Modes: __basic__, __outlined__, __raised__, __flat__.
<br>
<div style="display: flex; justify-content: center;">
<img src="images/button_modes.png" alt="Button modes example">
</div>
<br>

For taking into consideration, the main background colors for the application would be white or black, so the use of any button with such colors is a great option. In case that the user wants to customize color or contrast, it is recommended follow best practices and check the accessibility in any case.

###### States

The states are the different behaviors of the button component based on the interaction of the user.
For the desktop version, we contemplate five different states by which can pass.

States: __default__, __disabled__, __hover__, __clicked__ and __animation__.  

##### *Theming*

Colors used for the design in each theme mode.

###### Light theme

Black; #000000
Yellow: #FFED00
Disable opacity: 0.5
Animation ripple (basic and raised): #666666
Animation ripple (outlined and flat): #EEEEEE
Hover flat type: #E5E5E5

<br>
<div style="display: flex; justify-content: center;">
<img src="images/button_states.png" alt="Button states example">
</div>
<br>

###### Dark theme

Black; #000000
Yellow: #FFED00
White: #FFFFFF
Hover (basic and raised): #212121
Hover (flat): #E5E5E5
Animation ripple (outlined and flat): #171717
Disabled opacity: 0.5
Disable (raised): #D9D9D9
Disable (flat): #666666
Clicked (flat): #FFFFFF 

<br>
<div style="display: flex; justify-content: center;">
<img src="images/button_states_dark.png" alt="Button states example">
</div>
<br>

##### *Design Specifications*

To define the button design specifications, several properties were identified and assigned immutable values ​​that make the component recognizable along applications, independently of the customizable styles given.

With the default theme, the components will get *black* as a primary color for the text and *yellow* as an accent color for the background.
To keep the consistency through the design system, the font used is *Open Sans*, which includes all the font variations: Light *(200)*, Regular *(400)*, Semibold *(600)*, Bold *(700)* and Extrabold *(800)*.

Using button ripple is a good practice of including interaction effects. By default it is implemented because it helps to generate feedback from a flat design, communicating the final user what action is taking place.
Sometimes the purpose should be different, so there is the possibility to inactive this feature.

<div style="display: flex; align-items: center;"> 

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

<img src="images/button_specs.png" style="width: 60%">

</div>
<br>

###### Icon Usage

It is not limited the content of a button like so the user can place icons inside of a button to reinforce the action accordingly to the meaning.

<!-- Both resources, [Material Icons](https://material.io/tools/icons) and [Fontawesome Icons](https://fontawesome.com/icons) -->
Any icon can be used in the DXC Design System, so it is apt to the user to choose between one of the multiple options that are offered through internet but it is recommended to use the same library of icons along the application to keeping concistency.

Also, another point to consider is that the icon can go before or after the text with a separation of 10 pixels respecting the main button's text. To keeping the consistency, the icon sizes were defined based on the content and the implementation of the icons, resulting in the following:

<span style="color: red">*</span>Do not use icons mainly for visual interest, the glyph must add information and clarification to the action that would be performed in the context of the button.
<br>

<div style="display: flex; justify-content: center;">
<img src="images/button_icon.png" alt="Button with icon examples">
</div>
<br>
<br>
A button with an icon and no text is also allowed in the design system.

<br>
<br>

###### User Interface Design Considerations

Here, you can find more considerations in the using of buttons:

- In instances where buttons are vertically stacked, buttons should be the same length.
- Horizontally displayed buttons are dependent on the amount of text, so button lengths may vary, always considering the minimum and maximum established sizes.
- Text or images on a button should always be centered.
- There must be 30 pixels of space between horizontally displayed buttons.
- Upper case text should be used on all buttons.
- Button location, not dictated by workflow, should be centered or right aligned at the section/page margin. This can be defined by the application but should be consistent throughout.
