The header is an important component in the interface, it is the area dedicated for the navigation across the application, the first element that the user sees when he accesses to the web page and a known place where information relative to core information, sign in or search can be found.

## Overview

A variety of headers can be presented over the internet, with many differences between them, position (vertical/horizontal), size, color and so on.
Some of the most used elements in the header are: brand identity elements, links to basic categories, links to social networks, basic contact, sign in and login options, search field or switch for languages.

## Anatomy


* **Brand**: In this area should be placed the company logo, it will go on the left side of the header.

* **Content**:

   * **Primary navigation**: The links and dropdowns with a navigational purpose should be placed here.
   * **Site options**: Language selector, settings, or other any option that applies globally should be placed here. 
   * **Account**: In the case that the application manages accounts, the element for the login and register options should be positioned on the far right except in the tablet and mobile version that will be covered in the following sections.

Here is an example of the content distribution:

![Header distribution](images/header_distribution.png)

## Modes

Following the convention of the modes that can be found in a component, two main modes are defined for the header.
Modes: **basic** and **underlined**.

![Header modes](images/header_modes.png)




## Design tokens

| Tokens               |  Default value   |
| -------------------- | :--------------: |
| backgroundColor      |    `#FFFFFF`     |
| underlinedColor      |    `#000000`     |
| fontColor            |    `#000000`     |
| backgroundColorMenu  |    `#FFFFFF`     |
| fontColorMenu        |    `#000000`     |
| hamburguerColor      |    `#000000`     |
| hoverHamburguerColor |    `#DBDBBD`     |
| overlayColor         |    `#565656`     |
| focusColor           |    `#005FCC`     |
| logo                 | `DXC Technology` |
| logoResponsive       | `DXC Technology` |

## Design Specifications

Design specifications for main structure:

| Property                                 |    Value |
| ---------------------------------------- | -------: |
| Padding right                            |   `60px` |
| Padding left                             |   `36px` |
| Padding top/bottom                       |   `15px` |
| Height                                   |   `64px` |
| Min. width                               | `1024px` |
| Distance between icons                   |   `20px` |
| Distance between icons and links         |   `40px` |
| Distance between language and navigation |  `150px` |

![Header specifications](images/header_design_specifications.png)

Design specifications for items:

| Property                                           |      Value |
| -------------------------------------------------- | ---------: |
| Logo size                                          | `181x32px` |
| Line thickness                                     |      `2px` |
| Link font size                                     |     `14px` |
| Link font weight                                   |     `bold` |
| Space between icon and sublabel                    |      `8px` |
| Sublabel font size                                 |     `10px` |
| Sublabel font weight                               |     `bold` |
| Distance between icons with sublabels              |     `40px` |
| Distance between icons with sublabels to underline |     `10px` |

![Header specifications for items](images/header_design_specs_basic.png)



## Icon usage and types of dropdown elements

As it was mentioned previously, in the navigation part can coexist, links that will jump to the page that is linked and dropdowns, which are elements that have more information hidden.

For the first type, there is only one type of representation, that is only the text of the link as a label.

![Header links](images/header_links.png)

As is represented in the image, in this case, the header has 3 links to different pages into the website that will navigate when the user clicks on one of the links. This is the only representation that the design system is contemplating to represent links in the header.

The second type of elements that can be included are the dropdowns. In this case, there are 3 different combinations to represent a dropdown trigger.

- Icon only
  ![Using only icons in header](images/header_icon_only.png)

With this choice, only the icon is displayed, once the mouse is hovering it, the dropdown will be displayed.

- Icon with sublabel
  ![Using icons with sublabels](images/header_icon_sublabel.png)

In this case, the icon is accompanied by a sublabel that describes which element/category is describing the icon representation.
Relative to the account item, if the user logs in, then the sublabel will replace the 'login' value by the name of the user.

- Text with caret
  ![Using text with caret](images/header_text_caret.png)

The third option is the use of text paired with a caret icon to represent that more information are available under it.

As can be seen in the images, the 3 different approaches can be combined, using the corresponding schematics for each one and always taking care of the elements surrounding.

## Responsive version for mobile and tablet

Due to the applications are accessible from a laptop, tablet and mobile it is necessary to think and design a header version for the corresponding device.
The design for smaller devices tries to keep the consistency respect to the other versions, allowing the user experiences a similar interaction although the space available is less.

![Header version for tablet](images/header_tablet.png)
![Header version for mobile](images/header_mobile.png)
![Header responsive menu](images/header_responsive_menu.png)

Specifications

Specifications for tablet

| Property      |      Value |
| ------------- | ---------: |
| Logo size     | `181x32px` |
| Padding right |     `40px` |
| Padding left  |     `20px` |
| Max width     |    `768px` |

Specifications for mobile

| Property                                      |      Value |
| --------------------------------------------- | ---------: |
| Logo size                                     | `150x26px` |
| Padding                                       |     `20px` |
| Max width                                     |    `425px` |
| Min height                                    |     `64px` |
| Distance between hamburguer and login (425px) |     `40px` |
| Distance between icons with sublabels         |     `20px` |
| Distance between icons                        |     `20px` |

Specifications for responsive menu

| Property                            |     Value |
| ----------------------------------- | --------: |
| Logo variation                      | `45x32px` |
| Padding                             |    `20px` |
| Width                               |   `100vw` |
| Height                              |   `100vh` |
| Distance first item menu to logo    |    `52px` |
| Distance between menu items         |    `20px` |
| Distance between subitems           |    `20px` |
| Distance between subitems to parent |    `15px` |
| Close icon margin top               |    `24px` |
| Distance between languages options  |    `15px` |

![Header specifications for responsive version](images/header_responsive_specs.png)

## Use of the custom area

![Header usage of custom area](images/header_custom.png)

## User Interface Design Considerations

- Try to avoid to place items inside the custom area, the header has already all the element necessaries for navigability, use it only in exceptional cases.
- The only way that the header's height should increase is when the company logo needs to be more large to be visible, in other cases the height must be 64 pixels.
- If the hierarchy of the menu will contain many items, please consider taking the hamburguer approach for mobile and tablet version in the desktop interface.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/448bb58a-bcfc-4aac-b265-42376a27a591/variables/

