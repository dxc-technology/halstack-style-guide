# Overview

There are different ways to organise the content on the webpage to facilitate the user according to his nature of interaction with the content like forms, tables, lists etc. One of the best ways to organise the webpage is by using groups of related content, this can be achieved by using a dedicated Box component.

# Appearance

Just as the name indicates the content in the webpage can be grouped using the Box Component, which is a simple wrapper component used to organise the layout within the box container.

The Box has properties like margins, padding, borders, shadows, background colors etc. and organise the layout design consisting of interactive / non-interactive components like icons, labels, paragraphs and buttons etc as described in the design specifications.

# Modes

## No-shadow:
Can be used as a container, there's no visual appearance of the box in the UI, just works as a simple <div>

## Shadow depth 1:
Regular visualization of the box, the container can be used to create a clear distinction between different sections of the UI.

## Shadow depth 2:
Basically the same as the previous on but with a deeper shadow.

# Design specifications

The Box component serves as a wrapper component, there could be two types of styling and adjusting properties that can be used with the container.

## Size

In the cases of fillParent and fillContent the box is going to behave as a fluid container occupying the parent leaves for its children or adapting its size to the children it the box has. 

Instead of using a fluid approach, you can set a fixed size. Choosing between small medium and large properties.

| property | value |
| -----| -------|
| small | 48px |
| medium | 240px |
| large | 480px |
| fillParent | - |
| fillContent | - |

## Margin

## Padding

# Content

Any type of content can be place inside the box component.


# User interface considerations


* Organise the group layout with the information presented clearly by applying the styles in the box container.
* Box can be reused accros the UI, avoid using different shadow depths in the same page.
* Use always a minimun padding and always leave enough margin when stacking boxes so the shadows don't ovelap.
