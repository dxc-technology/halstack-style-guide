# Dialog

A modal dialog is a message box or child window that requires user interaction before returning to the parent window. These boxes appear on top of the open parent window that is currently displayed on the screen.

## Appereance

The dialog appearance is widely recognizable by the users, as it appears in the center of the screen, above the content of the applications as a call to the user to interact or put the focus in the content shown inside that box.
This dialog disables the main content until the user explicitly interacts with the modal dialog, so it requires immediate attention by the user.

* The dialog always should have a title to introduce the actions or information that will get displayed on the screen. Also, it can contain a descriptive text or a phrase related to the action that triggered the dialog.
* Can have some combinations of actions, like buttons to accept/cancel the action. There can be one, two or more buttons.
* If the dialog is not including action buttons, an implicit element 'X' con be used to close the dialog at any time that the user considers.

### Modes

There is only one mode designed for the set of themes and combinations. As the modal is a special component because it has an overlay that separates into a new layer the content of the interface to the component, the same mode can be used for all of the scenarios.

![Definition of the mode with different content inside it](images/dialog_mode_content.png)


### States

Some basic states can be defined in the modal component. In case the modal is closed, there should be a trigger to open it in the actual screen.
Once the model is open, many interactions can take place, but they should follow the standards declared for the specific components, so the modal is just a container and other components can be placed inside.

A property that is inherited to the modal is the 'X' handler to close it or clicking out of the box to perform the same action. Then, there are only two actions that change the state of the modal itself once it is opened.

Clicking on the X icon or outside the box will trigger an action to close the modal properly.



## Design Specifications

![Specifications for the design of the dialog](images/dialog_specs.png)

## Color

| Tokens                | value       |
| -------------------   | ----------- |
| `overlayColor`        |     #000000 |
| `backgroundColor`     |     #FFFFFF |
| `scrollBarThumbColor` |     #666666 |
| `scrollBarTrackColor` |     #D9D9D9 |

### Specifications for desktop and tablet (landscape mode)

| Property               |  value |
| ---------------------  | ----------------- |
| `border-radius`        |               4px |
| `min-width`            |             800px |
| `max-width`            |               80% |
| Title `font-size`      |              24px |
| Body `font size`       |              16px |
| `font-weight`          |           Regular |
| 'X' icon size          |           24x24px |
| `margin`               |              32px |
| Title icon space       |              12px |

#### Padding

padding | value
-- | --
`xxsmall` | 6px
`xsmall` | 16px
`small` _(default)_ | 24px
`medium` | 36px
`large` | 48px
`xlarge` | 64px
`xxlarge` | 100px

And also apply different values to each side of the component:
`top` `bottom` `left` `right`

### Specifications for tablet (portrait mode)

| Property         | Value   |
| ---------------  | ------  |
| `min-width`      | 92%     |
| `max-width`      | 92%     |


### Specifications for phone

| Property           |   Value |
| ------------------ | ------  |
| `padding`          |  36px   |
| `min-width`        |  92%    |
| `max-width`        |  80%    |
| Title `font-size`  |  20px   |



## Overlay

The overlay element makes possible to get the user attention into the dialog creating a layer between the actual application and the modal information showed in the user interface.

Specifications for overlay

| Property |               Value |
| -------- | ------------------: |
| Width    |             `100vw` |
| Height   |             `100vh` |
| Color    | `#000, 0.7 opacity` |



### Combining with other UI elements

There are some elements that require some guidance to use it on the dialog component, based on the nature of the component or the behavior that it has in the ecosystem. Due to resource loading or prompting messages for the user, special guides are defined to incorporate these scenarios.

For the case that the application has a modal opened and it needs to load data from the server, we can represent this situation to the user in several ways.

- One option can be to stick to the default implementation of the spinner component and use it in the overlay mode, overlapping the loading element to the rest of the interface components and make it clear that the application is getting some resources from the APIs.
- Another approach, to avoid render an overlay on top of another overlay is to integrate the loading indicator into the modal window. This can be done placing the spinner near the title of the dialog, on the right side and the small variations of the component. Using this way we make explicit to the user that the applications are working on something without the need to distract the attention from the dialog.

Both approaches are equally valid, and its use depends on the context of the application and the content of the dialog.

If the application needs to render some type of alert regarding information or prompting an error to the user, the behaviour of the component varies from the definition that is taken in a normal scenario.

In the case that there is an error with an input field, the action to take is the one mentioned in the component's guidelines, highligthing the field to make remarkable for the user that the specific input is wrong. Then, the alert message should be placed in the right upper corner of the screen to not modify the content of the dialog and avoid the scrolling when new content is added. The alert should remain till the error is corrected or the user interacts with it to close it.

### User Interface Design Considerations

- Modal dialog boxes should overlay only a portion of the underlying page to keep the user oriented within the workflow.
- The modal dialog should emerge from the top of the screen and be centered horizontally on the parent page. The top of the modal should align with the bottom of the banner on the parent page. Modals should be sized according to the content
- Modals that contain tables or lists may use the available width of the device, allowing for an exterior margin where the parent page is still visible under the dialog box. Modal height, in all instances is dependent on content
- Every effort should be made to ensure that the dialog boxes do not need to scroll, either horizontally or vertically, to display the information. Some exceptions may apply
- Modal dialog features should be used sparingly, as they disrupt workflow, but can be advantageous when used properly
- Informational modals are merely assistive and should display only read-only data
- Interactive modals require a user response, either to a procedural option or to further define data on the underlying page with additional entry

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/878a0090-5cac-4084-8e1c-6c61f61bf552/variables/

