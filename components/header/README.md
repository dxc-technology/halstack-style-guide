The header is an important component in the interface, it is the area dedicated for the navigation across the application, the first element that the user sees when he accesses to the web page and a known place where information relative to core information, sign in or search can be found.


## Overview

A variety of headers can be presented over the internet, with many differences between them, position (vertical/horizontal), size, color and so on.
Some of the most used elements in the header are: brand identity elements, links to basic categories, links to social networks, basic contact, sign in and login options, search field or switch for languages.

## Appearance

The header of the design system should be concise and clearly structured. Each item has its own space designated and the main areas are the following ones: Company logo, custom area, language, navigation, and account.

- Custom logo: In this area should be placed the company logo, it will go on the left side of the header, respecting the specifications that are defined in the below sections.
- Custom area: This area should be used to place items that want to be displayed in the application header and they are not offered by default. The center region will be the container of the custom content.
- Language: The language selector can be configured to appears in the header. It will offer the user a way to change the language of the whole application using a custom component already defined. 
- Navigation: The links and dropdowns with a navigational purpose should be placed on the right side of the header. There are several ways to represent a dropdown element in the menu that will be explained later on.
- Account: In the case that the application manages accounts, the element for the login and register options should be positioned on the far right except in the tablet and mobile version that will be covered in the following sections.

*All the items should be easily configurable, i.e. If the application has only one language, the language selection must not be displayed on the header.

Here is an example of the content distribution:

![Header distribution](images/header_distribution.png)

### Modes

Following the convention of the modes that can be found in a component, two main modes are defined for the header.
Modes: __basic__ and __underlined__.

![Header modes](images/header_modes.png)

### States

The states of the component menu are just a few, as the component implements other components from the design system, the states and modes are inheriting from those components, so in case that the developer needs more information, please check the dropdown and select components.

In any case, in this document, it will be shown the main states that the component can go through.

    Normal state
![Header normal state](images/header_normal_state.png)

    Hover state
![Header hover state](images/header_hover_state.png)

    Language selection
![Header language selection](images/header_language_dropdown_state.png)

    Login options
![Header hover state](images/header_account_dropdown_state.png)

    Settings with user logged
![Header hover state](images/header_settings_dropdown_state.png)

    Services with user logged
![Header hover state](images/header_services_dropdown_state.png)


## Theming and tokens

| Tokens        | Themable      | Default value |
| ------------- |:-------------:| -------------:|
| backgroundColor | `true` | `black` |
| underlinedColor | `true`     | `black`  |
| textColor     | `true`     | `computed`  |
| backgroundColorMenu | `true`     | `#D9D9D9`  |
| textColorMenu | `true`     | `computed`  |

## DXC Technology theme

![Header light modes](images/header_modes_light.png)
![Header hover dropdown](images/header_settings_dropdown_state.png)
![Header hover dropdown](images/header_modes_light_dropdown.png)

https://xd.adobe.com/view/afb409f4-884d-4236-6cf2-4766bee75b52-d985/screen/7965bd24-3ef3-427d-92de-0d2aac880402/specs/

## Design Specifications

Design specifications for main structure:

| Property           | Value|
|--------------------|------:|
| Padding right | `60px` |
| Padding left | `20px` |
| Padding top/bottom | `15px` |
| Height | `64px` |
| Min. width| `1024px` |
| Distance between icons | `20px` |
| Distance between icons and links | `40px` |
| Distance between language and navigation | `150px` |

![Header specifications](images/header_design_specifications.png)

Design specifications for items:

| Property           | Value|
|--------------------|------:|
| Icon size | `22x22px` |
| Distance between flag icon and caret | `12px` |
| Distance between account icon and username | `10px` |

![Header specifications for items](images/header_design_specs_basic.png)

Design specifications for items:

| Property           | Value|
|--------------------|------:|
| Logo size | `181x32px` |
| Line thickness | `2px` |
| Link font size | `14px` |
| Link font weight | `bold` |
| Space between icon and sublabel | `8px` |
| Sublabel font size | `10px` |
| Sublabel font weight | `bold` |
| Distance between icons with sublabels | `40px` |
| Distance between icons with sublabels to underline | `10px` |

![Header specifications for underlined option](images/header_specs_underlined.png)

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

| Property           | Value|
|--------------------|------:|
| Logo size | `181x32px` |
| Padding right | `40px` |
| Padding left | `20px` |
| Max width | `768px` |

Specifications for mobile

| Property           | Value|
|--------------------|------:|
| Logo size | `150x26px` |
| Padding | `20px` |
| Max width | `425px` |
| Min height | `64px` |
| Distance between hamburguer and login (425px) | `40px` |
| Distance between icons with sublabels | `20px` |
| Distance between icons | `20px` |

Specifications for responsive menu

| Property           | Value|
|--------------------|------:|
| Logo variation | `45x32px` |
| Padding | `20px` |
| Width | `100vw` |
| Height | `100vh` |
| Distance first item menu to logo | `52px` |
| Distance between menu items | `20px` |
| Distance between subitems | `20px` |
| Distance between subitems to parent | `15px` |
| Close icon margin top | `24px` |
| Distance between languages options | `15px` |

![Header specifications for responsive version](images/header_responsive_specs.png)

## Use of the custom area

![Header usage of custom area](images/header_custom.png)

## User Interface Design Considerations
- Try to avoid to place items inside the custom area, the header has already all the element necessaries for navigability, use it only in exceptional cases.
- The only way that the header's height should increase is when the company logo needs to be more large to be visible, in other cases the height must be 64 pixels.
- If the hierarchy of the menu will contain many items, please consider taking the hamburguer approach for mobile and tablet version in the desktop interface.
