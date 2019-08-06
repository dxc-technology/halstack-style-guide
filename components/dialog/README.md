# DXC Accordion Visual Guidelines

## Overview

A modal dialog is a message box or child window that requires user interaction before returning to the parent window. These boxes appear on top of the open parent window that is currently displayed on the screen. 

## Appereance

The dialog appearance is widely recognizable by the users, as it appears in the center of the screen, above the content of the applications as a call to the user to interact or put the focus in the content shown inside that box.

### Modes

There is only one mode designed for the set of themes and combinations. As the modal is a special component because it has an overlay that separates into a new layer the content of the interface to the component, the same mode can be used for all of the scenarios.

It is true that inside this unique mode it can be chosen some modifications with the insider's components. These are detailed in the following examples:

_Content_: The dialog always should have a title to introduce the actions or information that will get displayed on the screen. Also, it can contain a descriptive text or a phrase related to the action that triggered the dialog.
After that, it can be some combinations of actions, like buttons to accept/cancel the action. There can be one, two or more buttons.
*If the dialog includes the 'X' button, there is no need to display a cancel button to dismiss the action.

![Definition of the mode with different content inside it](images/dialog_mode_content.png)

_Close action_: In this case, the dialog is not including actions throw buttons, but it is an implicit element 'X' to close the dialog at any time that the user considers.

![Definition of the mode with the use of 'X' action](images/dialog_mode_content_X.png)

_Components_: This definition of the dialog is using several components of the design system into this container. As example terms and conditions, information can be shown into a dialog, making the user accepts the conditions using a checkbox and after that a button that will handle the confirmation.
Multiple variations can be defined with this approach, it only depends on the requirements of the applications. 
Just to say, every component should follow their own rules defined in this document.

![Definition of the mode using components](images/dialog_mode_components.png)

_Getting information_: Input fields may appear within the dialog. In this example, some information is required to the user to be filled as first name, date of birth or economic range.
This is just an example to see the type of combinations that can have a place in this container.

![Definition of the mode with several input components to get user's information](images/dialog_mode_inputs.png)


_Separator_: In some cases, it would be good to have a separator between the title and the content, depending on the content inside the container, so there is an option to include it making it clear the part of the dialog header and the dialog content.

![Definition of the mode with a separator](images/dialog_mode_separator.png)

_Header with icons_: It could be useful include icons within the header to indicate the related information that will be treated into the dialog. Also, it can be an assistive visual clue to the description.

![Definition of the mode with a header and icons](images/dialog_mode_headericons.png)

### States

Some basic states can be defined in the modal component. In case the modal is closed, there should be a trigger to open it in the actual screen.
Once the model is open, many interactions can take place, but they should follow the standards declared for the specific components, so the modal is just a container and other components can be placed inside.

A property that is inherited to the modal is the 'X' handler to close it or clicking out of the box to perform the same action. Then, there are only two actions that change the state of the modal itself once it is opened.

Clicking on the X icon or outside the box will trigger an action to close the modal properly.

## Theming

As it was mentioned before, there isn't a specific implementation for each theme, it is the same for the different themes in this design system.

Using of colors:
_White_: #FFFFFF
_Black_: #000000
_Box shadow_: #000000, 0.2 opacity, Y=1, B=3

## Design Specifications

Specifications for desktop and tablet (landscape mode)

| Property           | Value|
|--------------------|------:|
| Padding left/top/rigth | `40px` |
| Padding bottom | `30px` |
| Border Radius | `4px` |
| Min. height | `Depending content` |
| Min. width | `800px` |
| Max. width | `80%` |
| Title font size | `34px` |
| Body font size | `16px` |
| Font weight | `Regular` |
| Space between items | `30px` |
| Separator | `1px` |
| Sparator space top | `10px` |
| Sparator space bottom | `20px` |
| 'X' icon size | `20x20px` |
| Margin top/rigth | `24px/24px` |
| Title icon space | `16px` |


Specifications for tablet (portrait mode)

| Property           | Value|
|--------------------|------:|
| Min. width | `600px` |
| Max. width | `80%` |
| Title font size | `24px` |


Specifications for phone

| Property           | Value|
|--------------------|------:|
| Padding top        | `40px` |
| Padding left/rigth | `20px` |
| Padding bottom     | `30px` |
| Min. width | `346px` |
| Max. width | `80%` |
| Title font size | `20px` |

![Specifications for the design of the dialog](images/dialog_specs.png)

## Overlay

The overlay element makes possible to get the user attention into the dialog creating a layer between the actual application and the modal information showed in the user interface. 

Specifications for overlay

| Property           | Value|
|--------------------|------:|
| Width              | `100vw` |
| Height             | `100vh` |
| Color              | `#000, 0.7 opacity` |

## Responsive version

To accomplish a responsive version of the dialog in different devices, it was designed a version for tablet and mobile that fits the restrictions that involve using the component in less space.

For that, the design system takes some considerations for the use of dialog component in tablet, phone and the variations of multiline content.


![Dialog design for tablet](images/dialog_tablet_portrait.png)

![Dialog design for phone](images/dialog_phone.png)

![Dialog design allowing multiple lines in the header](images/dialog_phone_multiple.png)

### User Interface Design Considerations

- Modal dialog boxes should overlay only a portion of the underlying page to keep the user oriented within the workflow. 
- The modal dialog should emerge from the top of the screen and be centered horizontally on the parent page. The top of the modal should align with the bottom of the banner on the parent page.  Modals should be sized according to the content
- Modals that contain tables or lists may use the available width of the device, allowing for an exterior margin where the parent page is still visible under the dialog box. Modal height, in all instances is dependent on content 
- Every effort should be made to ensure that the dialog boxes do not need to scroll, either horizontally or vertically, to display the information. Some exceptions may apply
- Modal dialog features should be used sparingly, as they disrupt workflow, but can be advantageous when used properly
- Informational modals are merely assistive and should display only read-only data
- Interactive modals require a user response, either to a procedural option or to further define data on the underlying page with additional entry
