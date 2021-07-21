# Tabs

Tabs allow the user to interact across the sections to switch from one set of content to another, making the transition easily from one peer to the other.

![image](https://user-images.githubusercontent.com/44420072/114732577-ecbace80-9d42-11eb-81d3-bbba349ef99f.png)

* [Usage](#usage)
* [States](#states)
* [Anatomy](#anatomy)
* [Placement and alignment](#placement-and-alignment)
* [Content](#content)
* [Behavior and interaction](#behavior-and-interaction)
* [Design specifications](#design-specifications)
* [Accessibility](#accessibility)
* [Links and references](#links-and-references)


## Usage

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.

### Do’s

* Use tabs for navigation when dividing content into different sections.
* The content should have the same level of hierarchy.
* Tabs can contain icons and text. Text labels should be short and have a clear relation to content.

### Dont’s

* Don’t use tabs to move through sequential content that needs to be read in a particular order.
* Avoid using tabs for comparing content across multiple tabs, such as different sizes of the same item.


## States

Tabs can get different states based on user interaction. States: inactive, enabled, hover, pressed, focus and disabled.

![image](https://user-images.githubusercontent.com/44420072/114732868-28559880-9d43-11eb-907d-fe912fc654bf.png)


## Anatomy

![image](https://user-images.githubusercontent.com/44420072/114733004-44593a00-9d43-11eb-8813-5fabf7f0281d.png)

1. Container
2. Active icon (Optional if there’s a label)
3. Active text label (Optional if there’s an icon)
4. Active tab indicator
5. Inactive icon (Optional if there’s a label)
6. Inactive text label (Optional if there’s an icon)
7. Tab item
8. Divider

## Placement and alignment

### Placement

There are two variations of tabs, default and container. They are hierarchically the same and should never be nested within each other. Tabs are usually placed above the content under the header o general navigation.

![image](https://user-images.githubusercontent.com/44420072/114733166-694dad00-9d43-11eb-90a8-2fa046b0f4c0.png)

_**Left**:A standalone tab that can also be nested within components._

_**Right**:Emphasized tab always paired with an attached background container._

#### Desktop

**Default**

When used for main navigation place tabs above the header using 100% of the width of the screen.

![image](https://user-images.githubusercontent.com/44420072/114733461-a44fe080-9d43-11eb-8c34-fe2d17dd898e.png)

_Center horizontally in container is allowed when there is few tabs._

![image](https://user-images.githubusercontent.com/44420072/114733505-af0a7580-9d43-11eb-8db5-0c09019f1df5.png)

_Use an indicator when there are elements hidden in scrollable tabs._

**Container**

When used for panel navigation place tabs in the top of the panel using all available width. Scrollable tabs are allowed when there is not enough space available.

![image](https://user-images.githubusercontent.com/44420072/114733861-fc86e280-9d43-11eb-8182-2bc2845d5835.png)

_Using scrollable tabs for panel navigation._

#### Mobile

**Main navigation**
  
When used for main navigation place tabs above the header using 100% of the width of the screen. 

![image](https://user-images.githubusercontent.com/44420072/114734039-250edc80-9d44-11eb-9b8d-80d2e9a39c4f.png)

_**Left**: Main navigation tabs are place above the content._

_**Right**: Don’t stack more than 4 fixed tabs._

**Panel navigation**

![image](https://user-images.githubusercontent.com/44420072/114734714-c39b3d80-9d44-11eb-9de3-799d43ebc418.png)

_When used for panel navigation tabs are placed in the top of the panel using all available width._

### Alignment

Tabs are always displayed horizontally in a single row. They can be left aligned or entered depending on the content and context.

![image](https://user-images.githubusercontent.com/44420072/114734969-05c47f00-9d45-11eb-9ab6-00c43d2467db.png)

_**Left**: Tabs are always displayed in a single row._

_**Right**: Don’t place tabs below one another._

## Content

![image](https://user-images.githubusercontent.com/44420072/114735093-2391e400-9d45-11eb-80a7-f18ae6dbce8e.png)

_**Left**: Text labels should clearly and succinctly describe the content of the tab they represent._

_**Center**: Tab content should contain a cohesive set of items that share a common characteristics._

_**Right**: Tab labels should appear in a single row. They can use a second line if needed, with truncated text._

### Typography

Avoid to use all caps for tab labels. ALL CAPS is rarely a good idea because it’s harder to read. 

![image](https://user-images.githubusercontent.com/44420072/114735257-49b78400-9d45-11eb-9ae5-9b16111cb376.png)

_Is recommended to use sentence-case capitalization and semibold style for tab labels._


## Behavior and interaction

### Main navigation

Users can navigate between tabs by tapping a tab, or by performing a swipe gesture over content in mobile devices.

### Panel navigation

Interacting with the tabs makes the content scrolls to the point that is associated with that specific tab, while the tabs keep fixed at the top of the container. 

![image](https://user-images.githubusercontent.com/44420072/114735443-74094180-9d45-11eb-8432-f505f6656904.png)

_Do not use main navigation if they only affect an specific panel._

![image](https://user-images.githubusercontent.com/44420072/114735498-85524e00-9d45-11eb-96d7-3034001ba7b9.png)

_The use of scrollable tabs in panel navigation could cause swipe interferences with OS navigation._

_Do not use main navigation if they only affect an specific panel._


## Design specifications

### Min / Max width

![image](https://user-images.githubusercontent.com/44420072/114735588-a024c280-9d45-11eb-877c-fedadcb645d7.png)

### Fixed tabs

![image](https://user-images.githubusercontent.com/44420072/114735619-a9ae2a80-9d45-11eb-82e4-249c488b85e3.png)

_48px height fixed tabs._

![image](https://user-images.githubusercontent.com/44420072/114735668-b6328300-9d45-11eb-9a57-59b8cb8d4223.png)

_72px height fixed tabs._

### Scrollable tabs

![image](https://user-images.githubusercontent.com/44420072/114735754-c77b8f80-9d45-11eb-814f-62c861972cfd.png)

_Use a scroll indicator in scrollable tabs._

### Notification tabs

![image](https://user-images.githubusercontent.com/44420072/114735832-d82c0580-9d45-11eb-9932-e2a8ae47a5b9.png)

_Notification badges are always positioned aligned with label/icon in 48px tab container and at top right of the 72px tab container._

### Design Tokens

| Token                     | Default value (HEX) | Default value (hsl)  |  Calculated value (hsl)              |
| :---                      | :---                | :---                 |  :---                                |  
| `selectedFontColor`       | #5f249f             |                      |                                      | 
| `selectedIconColor`       | #5f249f             |                      |  selectedFontColor                   | 
| `selectedUnderlineColor`  | #5f249f             |                      |  selectedFontColor                   | 
| `backgroundColor`         | #FFFFFF             |                      |                                      | 
| `fontColor`               | #666666             | (0, 0%, 40%)         |                                      | 
| `disabledFontColor`       | #BFBFBF             | (0, 0%, 75%)         |  fontColor (lightness + 35%)         | 
| `focusOutline`            | #5f249f             |                      |  selectedFontColor                   | 
| `divider`                 | #BFBFBF             |                      |  fontColor (lightness + 35%)         | 
| `hoverBackgroudColor`     | #f2eafa             | (280, 53%, 95%)      |  selectedFontColor (lightness + 58%) | 
| `pressedBackgroundColor`  | #e5d5f6             | (280, 53%, 90%)      |  selectedFontColor (lightness + 53%) | 


## Accessibility

Each tab must have a unique title that clearly describes tab panel content. This is particularly helpful for users of 
assistive technologies so they have the necessary information to efficiently navigate the content.

Content authors need to ensure the content that is added to the tab panel is accessible. For example, if you add an image to the panel you need to include alternative text to pass accessibility testing.

[W3C WAI-ARIA Tab Design Pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel) covers the usage of ARIA names.

### Keyboard interactions

| key | description | 
| :---         |     :---     |         
| `Enter or Space`  | Activates the tab if it was not activated automatically on focus.   | 
| `Tab`  | When focus moves into the tab list, places focus on the active tab element. When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is typically either the first focusable element inside the tab panel or the tab panel itself.    |
| `Left-arrow`  | Moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab    |
| `Right-arrow`  | Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab    |


## Links & Resources

* [React component](https://developer.dxc.com/tools/react/next/#/components/tabs)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/tabs)
* [UI-Kit](https://github.com/dxc-technology/halstack-style-guide/tree/master/Halstack%20UI-Kit)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/tabs/README.md)
