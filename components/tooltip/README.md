# Tooltip

A tooltip brings a brief, extra information or provides context. Appears when user interacts with an element on the User Interface of an application.

## Usage

Tooltips innately hide information and can be used they are used mainly in desktop browsers. They provide additional information without 

### Do's

* Tooltips are strictly used only to display extra/additional explanation for the user in a plain text format.
* Do display short and brief content when using tooltips.
* Do use tooltips when the content is affected by an ellipsis, in order to display the full content.

### Dont's

* Tooltips should not be a part of the primary task to be completed by the user
* Avoid using tooltips when the information can be displayed in other format (e.g. helper text)
* Do not overuse tooltips in the same UI screen, use another patterns to provide help instead (e.g. coach marks, open a panel with all the help information, etc..)
* Do not use tooltips to communicate critical information (e.g. error messages, warning alerts), dialogs, modals or alerts can be used instead.
* Do not use a tooltip if need to provide rich information (e.g. action buttons, links, images), use a popover or dialog instead.
* Avoid obscuring content when displaying the tooltip.

## Formatting

### Anatomy

> TO-DO Create anatomy image

Tooltips should be concise but can be rendered with one or more lines of text.

* Only text
* Only icon
* Text with icon


### Placement & Alignment

> TO-DO Create explanation image about positioning the tooltip

* Can be placed in 4 directions from the trigger area (top, right, bottom, left).
* Tooltip should appear always placed next to the trigger area, avoid placing this component far away in the UI.

### Content

* When using icons always place the on the left instead the UI is meant for RTL.
* Multiple lines of text can be used, avoid long explanations or instructions, try to be as brief as possible.
* Elements like images, links or other rich content can't be placed. Use a popover instead.


### Behavior and interaction

Tooltips can be triggered by hovering or clicking by mouse or through keyboard focus from Interactive elements (Buttons, Links, Icon buttons) or Non-interactive elements (Icons, Abbreviations, Truncated text).

They are dismissed when the pointer is moved out from the trigger or pressing  keyboard escape key. If the tooltip was triggered when the triggering area receive focus, will be dismissed when the focus is moved to another element.

**Timing**

* Use a delay before opening the tooltip to be sure the triggering was intended by the user.
* A delay can be added when dismissing the tooltip

**Appereance**

* Fade in and fade out transitions can be used to show/hide the tooltip.

## Specs 
## Accesibility

https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html

https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip

## Design tokens
## Links & resources
