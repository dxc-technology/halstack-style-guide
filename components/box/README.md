# Overview

There are different ways to organise the content on the webpage to facilitate the user according to his nature of interaction with the content like forms, tables, lists etc. One of the best ways to organise the webpage is by using groups of related content, this can be achieved by using a dedicated Box component.

# Appearance

Just as the name indicates the content in the webpage can be grouped using the Box Component, which is a simple wrapper component used to organise the layout within the box container.

The Box component can be Decorated by using its pre-set CSS properties like margins, padding, borders, shadows, background colors etc. and organise the layout design consisting of interactive / non-interactive components like icons, labels, paragraphs and buttons etc as described in the design specifications. Based on the interaction CSS Animation can be performed as required.

# States

## Default:
Only light grey/white background can be used with no shadow.

## Mouse Over:
On mouse over the box container can show a very light grey background and a light shadow to indicate the component is in focus.

## On Mouse Click (Focus):
When the group is in focus the 1px outline can be applied with the primary colour with a darker shadow.

# Design specifications

The Box component serves as a wrapper component, a user interface framework that provides pre-defined and customizable React components for faster and easy web development
There could be two types of styling and adjusting properties that can be used with the container.
Fluid: The Fluid container wraps the content in it with maxWidth value which is provided as a prop, and this value will be the default value of the container.
For ex
maxWidth value defines the width of the screen that we are targeting.
•	xl: 1920px(extra large)
•	lg: 1280px(large)
•	md: 960px(medium)
•	sm: 600px(small)
•	xs: 0px(extra small)

Fixed: If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed property. The max-width matches the min-width of the current breakpoint.

## Checkboxes
Checkboxes allow the user to select one or more options from a set. 
It is usually best to present checkboxes in a vertical list. More than one column is acceptable as well if the list is long enough that it might require scrolling or if comparison of terms might be necessary. 

## List boxes
List boxes, like checkboxes, allow users to select a multiple items at a time,but are more compact and can support a longer list of options if needed. 

## Message Boxes
A message box is a small window that provides information to users and requires them to take an action before they can move forward.

## Modal Window (pop-up)
A modal window requires users to interact with it in some way before they can return to the system.



# User interface considerations

BoxHeader Component
The BoxHeader component takes care of instantiating a Searchbox component with preconfigured options and a placeholder. Optionally, this component can also display a Remove context check box. You should normally place this component at the top of your box.

Resize
Triggers a resize of the box so that it occupies the full page height and width. This is automatically called whenever the page is resized.
Enable Infinite Scroll
Specifies whether the component should automatically load more results when the user has reached the bottom of the result list.

Box Popup Component
Since the Box Component is designed to be included in the Salesforce console sidebar with a limited amount of space, it might be useful to add sections that can be hidden or shown when the user clicks on them. This component is only a container inside of which you can drop any other content or components.

* Organise the group layout with the information presented clearly by applying the styles in the box container
* If required, the same group can be replicated using styles multiple iterations
