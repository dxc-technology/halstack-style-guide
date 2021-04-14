# Overview

Accordions are used to group similar content and hide or show it depending on user needs or preferences. Accordions give users more granular control over the interface and help digest content in stages, rather than all at once.

![image](https://user-images.githubusercontent.com/44420072/114667152-6a5ceb00-9cff-11eb-8d7a-bbe98463d0b9.png)


# Usage

The accordion component delivers large amounts of content in a small space through progressive disclosure.

## Do’s

* Displaying and grouping additional information.
* To shorten pages and reduce scrolling when content is not crucial to read in full.
* Adding granular control over the information on a given page.

## Dont’s

* When most of the content on the page is needed to answer user questions.
* To display a list of clickable options, dropdown should be used instead.
* Displaying critical system information or a primary action to be taken on the page. (for example, alerts, confirmation or cancellation buttons).

# States

The accordion header can get four different states based on user interaction. States: enabled, hover, focus and disabled

![image](https://user-images.githubusercontent.com/44420072/114667271-90828b00-9cff-11eb-971a-b3aa87544300.png)


# Formatting

## Anatomy

![image](https://user-images.githubusercontent.com/44420072/114667360-af811d00-9cff-11eb-91cf-96c8483d036b.png)

1. Header
2. Active icon (Optional)
3. Active text label 
4. Additional information
5. Caret icon for Expand/collapse
6. Expanded panel

## Placement and alignment

**Placement**

Accordions can be placed with main page content or placed inside of a container such as a side panel or tile.

![image](https://user-images.githubusercontent.com/44420072/114667774-30401900-9d00-11eb-90fe-9dec668bfe04.png)

**Alignment**

By default the chevron icon is placed on the end side of the header. This allows for the title on the start side to align with other type elements in the layout.

![image](https://user-images.githubusercontent.com/44420072/114667928-6087b780-9d00-11eb-8ef9-537093e41503.png)

## Behavior and interaction

The accordion component has two main states: collapsed and expanded. The chevron icon at the end of the accordion indicates which state the accordion is in. Accordions begin by default in the collapsed state with all content panels closed. Starting in a collapsed state gives the user a high level overview of the available information.

* Trigger collapsed and expanded states when clicking on either the header or icon.
* Use icons and animation to easily reflect collapsed and expanded states.
* Use a chevron icon to indicate the expand/collapse behavior.
     * When the panel expands, the chevron icon rotates 180 degrees counterclockwise.
     * When the panel collapses, the chevron icon rotates 180 degrees clockwise.

![image](https://user-images.githubusercontent.com/44420072/114668145-ab093400-9d00-11eb-9d98-9873cfdb5c55.png)

_Examples of collapsed vs expanded accordions._

![image](https://user-images.githubusercontent.com/44420072/114668488-1a7f2380-9d01-11eb-8983-4f31ca9e8b4b.png)

_**Do**: Trigger collapsed and expanded states when clicking on either 
the header or icon. / **Don't**: Leave the header without caret or use a button to trigger 
the expand/collapse action._
