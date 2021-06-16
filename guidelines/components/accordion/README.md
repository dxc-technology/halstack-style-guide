# Accordion

Accordions are used to group similar content and hide or show it depending on user needs or preferences. Accordions give users more granular control over the interface and help digest content in stages, rather than all at once.

![image](https://user-images.githubusercontent.com/44420072/114667152-6a5ceb00-9cff-11eb-8d7a-bbe98463d0b9.png)


## Usage

The accordion component delivers large amounts of content in a small space through progressive disclosure.

### Do’s

* Displaying and grouping additional information.
* To shorten pages and reduce scrolling when content is not crucial to read in full.
* Adding granular control over the information on a given page.

### Dont’s

* When most of the content on the page is needed to answer user questions.
* To display a list of clickable options, dropdown should be used instead.
* Displaying critical system information or a primary action to be taken on the page. (for example, alerts, confirmation or cancellation buttons).

## States

The accordion header can get four different states based on user interaction. States: enabled, hover, focus and disabled

![image](https://user-images.githubusercontent.com/44420072/114667271-90828b00-9cff-11eb-971a-b3aa87544300.png)


## Formatting

### Anatomy

![image](https://user-images.githubusercontent.com/44420072/114667360-af811d00-9cff-11eb-91cf-96c8483d036b.png)

1. Header
2. Active icon (Optional)
3. Active text label 
4. Additional information
5. Caret icon for Expand/collapse
6. Expanded panel

### Placement and alignment

#### Placement

Accordions can be placed with main page content or placed inside of a container such as a side panel or tile.

![image](https://user-images.githubusercontent.com/44420072/114667774-30401900-9d00-11eb-90fe-9dec668bfe04.png)

#### Alignment

By default the chevron icon is placed on the end side of the header. This allows for the title on the start side to align with other type elements in the layout.

![image](https://user-images.githubusercontent.com/44420072/114675409-79946680-9d08-11eb-8f9c-569f8f55171b.png)

_**Left**. Place chevron icon at the end of the accordion header._

_**Right**. Don’t place caret icon on the left.._

### Behavior and interaction

The accordion component has two main states: collapsed and expanded. The chevron icon at the end of the accordion indicates which state the accordion is in. Accordions begin by default in the collapsed state with all content panels closed. Starting in a collapsed state gives the user a high level overview of the available information.

* Trigger collapsed and expanded states when clicking on either the header or icon.
* Use icons and animation to easily reflect collapsed and expanded states.
* Use a chevron icon to indicate the expand/collapse behavior.
     * When the panel expands, the chevron icon rotates 180 degrees counterclockwise.
     * When the panel collapses, the chevron icon rotates 180 degrees clockwise.

![image](https://user-images.githubusercontent.com/44420072/114668145-ab093400-9d00-11eb-9d98-9873cfdb5c55.png)

_Examples of collapsed vs expanded accordions._

![image](https://user-images.githubusercontent.com/44420072/114668488-1a7f2380-9d01-11eb-8983-4f31ca9e8b4b.png)

_**Left**. Trigger collapsed and expanded states when clicking on either 
the header or icon._

_**Right**. Leave the header without caret or use a button to trigger 
the expand/collapse action._

#### Accordion group

Accordion headers are stacked vertically and different hierarchy levels are allowed.

![image](https://user-images.githubusercontent.com/44420072/114674447-86648a80-9d07-11eb-99fc-acf9cecdcad7.png)

_The expandable section of an accordion group can contain different types of plain information or clickable components._

![image](https://user-images.githubusercontent.com/44420072/114674497-94b2a680-9d07-11eb-80f8-5890dc811d6b.png)

_When one accordion panel is expanded, the rest of the group should be collapsed._

#### Mobile

In small devices, extremely long pages are detrimental to the user experience. Collapsing information minimizes excessive scrolling and gives an overview of the structure and content available on the page.

![image](https://user-images.githubusercontent.com/44420072/114674747-d80d1500-9d07-11eb-91ee-62ed4cb53e84.png)

_**Left**. Use 100% of the available screen width._

_**Right**. Mobile accordion expanded._

### Content

The accordion component can contain other components, images, tables, and every custom feature that can be supported inside the element container.

![image](https://user-images.githubusercontent.com/44420072/114675553-a779ab00-9d08-11eb-9783-fbfc5352db2d.png)

_**Left**. Nesting is allowed. Use in parent accordion Open Sans Semibold._

_**Right**. Icons can be used as a complement to the header label._

#### Additional information

Extra information label can be shown at the end of the accordion header when needed.

* Icons and images can not be used.
* Only add extra information when there is plenty space in the accordion header, in mobile devices is not displayed.
* Try always to use a descriptive header so is no necessity to add extra information.
* Additional information content will be truncated 48px before reaching the accordion title. Title display has priority when space is limited.

![image](https://user-images.githubusercontent.com/44420072/114675724-dbed6700-9d08-11eb-8f23-6ebc66375214.png)



#### Typography

Different typographic styles can be used to create hierarchy between accordion headers.

![image](https://user-images.githubusercontent.com/44420072/114675783-edcf0a00-9d08-11eb-97fc-3d127e3f7de4.png)

_Use of Open Sans Semibold, Regular and Light Italic to difference between titles, content and additional information._

## Specs

### min-width

![image](https://user-images.githubusercontent.com/44420072/114676019-2969d400-9d09-11eb-84be-3a6cc7310e1e.png)

_Accordion min width._

### Desktop

![image](https://user-images.githubusercontent.com/44420072/114676090-38508680-9d09-11eb-81ed-0cb5f29d250d.png)

_Accordion header with additional information._

![image](https://user-images.githubusercontent.com/44420072/114676129-42728500-9d09-11eb-8964-f967248cf0f5.png)

_Accordion header with icon and additional information._

![image](https://user-images.githubusercontent.com/44420072/114676161-4dc5b080-9d09-11eb-907c-0e8de63317c2.png)

_Accordion group._

![image](https://user-images.githubusercontent.com/44420072/114676183-58804580-9d09-11eb-9496-99f2371d7987.png)

_Nested Accordions._

### Mobile

![image](https://user-images.githubusercontent.com/44420072/114676312-76e64100-9d09-11eb-9ba7-76964b93e3ae.png)

_Accordion header._

![image](https://user-images.githubusercontent.com/44420072/114676357-82396c80-9d09-11eb-801a-dc05f4b09558.png)

_Accordion group._

## Accesibility

[W3C WAI-ARIA Accordion Design Pattern](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html) covers the usage of ARIA names, state and roles.

### Keyboard interactions

| key | description | 
| :---         |     :---     |         
| `Enter or Space`  | When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel. When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.   | 
| `Tab`  | Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.    |
| `Shift + Tab`  | Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.    |

### Usability known issues

#### Printing 
Accordions are often not well suited for printing documents and require people to print snippets of content at a time. 

## Design Tokens

| Token | Default value (HEX) | Default value (hsl) |  Calculated value (hsl) |
| :---         |     :---     |          :--- |         :--- |  
| `backgroundColor`  | #FFFFFF    |  (0, 0%, 100%)   | | 
| `fontColor`  |  #666666 |(0, 0%, 40%)|  | 
| `arrowColor`  |  #6F2C91  |(280, 53%, 37%)| | 
| `hoverBackgroundColor` | #F5EBF9 |(280, 53%, 95%)| arrowColor (lightness + 53%) | 
| `disabledFontColor` | #BFBFBF |(0, 0%, 75%)| fontColor (lightness + 35%) | 
| `focusOutline` | #6F2C91 |(280, 53%, 37%)| arrowColor | 

## Related links

* [React component](https://developer.dxc.com/tools/react/next/#/components/accordion)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/accordion)
* [UI-Kit](https://github.com/dxc-technology/halstack-style-guide/tree/master/Halstack%20UI-Kit)


[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/accordion/README.md)
