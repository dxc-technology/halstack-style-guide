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

### WCAG 2.1

**Understanding WCAG 2.2** - [SC: 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) 

* "A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus."
* "If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing."
* "The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid."


### WAI-ARIA 1.2

**Accessible Rich Internet Applications (WAI-ARIA) 1.2** - [5.3.3 Document Structure Roles / Role: Tooltip](https://www.w3.org/TR/wai-aria-1.2/#tooltip)

* "The tooltip typically becomes visible in response to a mouse hover, or after the owning element receives keyboard focus."
* "Authors should display the tooltip after a short delay (from 1 to 5 seconds)"
* "Authors should ensure that elements with the role tooltip are referenced through the use of `aria-describedby` before or at the time the tooltip is displayed."

**WAI-ARIA Authoring Practices 1.2** - [3.25 Tooltip Widget](https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip)

* "`Escape`: Dismisses the Tooltip."
* "Focus stays on the triggering element while the tooltip is displayed."
* "If the tooltip is invoked when the trigger element receives focus, then it is dismissed when it no longer has focus (onBlur). If the tooltip is invoked with mouseIn, then it is dismissed with on mouseOut."

## Design tokens
## Links & resources
