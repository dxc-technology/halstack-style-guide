# Alert

Alert messages are meant to provide contextual feedback about important changes in the interface.

* [Usage](#usage)
* [Types](#types)
* [Variants](#variants)
* [Design specifications](#design-specifications)
* [Accessibility](#accessibility)
* [Links and references](#links-and-references)

## Usage

- Incorporate messages into the application when necessary to keep users informed of important changes.
- Messages should use positive rhetoric. Avoid using negatives. (e.g. Use “City is required.” instead of “You didn’t enter a city.”)
- Always use active instead of passive voice.
- Be concise. Avoid words that plead, belittle or intimidate (i.e. please,wrong, or else)
- Non-entry of a non-required entry field should never generate an edit message or warning message, nor deny user forward movement.
- If possible, dialog messages must always display in full without any scroll bar.
- Dialog messages will retract only when the user closes the dialog or completes through interaction.

## Types

| Name            | Description |
| --------------- | ----------- |
| **Information**     | Informational messages are used exclusively to assist the user with directional or explanatory text about a complex or seldom used process |
| **Warning**         | Alert or warning messages should be displayed when there is a potential obstacle in completing a process as intended |
| **Error**          | Error messages convey a critical system problem that requires user and/or technical intervention to correct |
| **Success**         | Success messages should be used to assure user that a system calculation or data submission was completed correctly |


## Variants

### Inline

In this variant the notification should appears in the up right corner of the screen, appearing with an animation from the right side and staying visible for 10 seconds or instead with the click of the user after it dissapears.

### Modal

## Content

Depending on the content that need to be displayed, more detailed descriptions can be added to the alert component as children.

![alert custom content](images/alert_mode_multi.png)




## Design Specifications

![alert specifications](images/alert_specs.png)

### Color

|   Component token               |   Element                     |   Core token                  |   Value       |
| ------------------------------- | ----------------------------- | ----------------------------- | ------------- |
|   `infoIconColor`               |   Icon                        |   `Hal-Blue-S-35`             |   `#0067b3`   |
|   `successIconColor`            |   Icon                        |   `Hal-Green-S-39`            |   `#24a148`   |
|   `warningIconColor`            |   Icon                        |   `Hal-Yellow-S-57`           |   `#f7cf2b`   |
|   `errorIconColor`              |   Icon                        |   `Hal-Red-S-41`              |   `#d0011b`   |
|   `infoBackgroundColor`         |   Container background        |   `Hal-Blue-L-95`             |   `#e6f4ff`   |
|   `successBackgroundColor`      |   Container background        |   `Hal-Green-L-95`            |   `#eafaef`   |
|   `warningBackgroundColor`      |   Container background        |   `Hal-Yellow-L-95`           |   `#fef9e6`   |
|   `errorBackgroundColor`        |   Container background        |   `Hal-Red-L-95`              |   `#ffe6e9`   |
|   `titleFontColor`              |   Label                       |   `Hal-Black`                 |   `#000000`   |
|   `contentFontColor`            |   Content                     |   `Hal-Black`                 |   `#000000`   |
|   `focusColor`                  |   Action:focus                |   `Hal-Blue-S-35`             |   `#0067b3`   |
|   `boxShadowColor`              |   Container                   |   -                           |   `#00000012` |
|   `overlayColor`                |   Overlay                     |   -                           |   `#000000B3` |



### Width

The alert component has a property that is customizable depending on the context and the scenario where the component is used. This property defines the size of the alert and it can get multiple values according to the needs of the application.

Widths for alert component: **fill content**, **fit parent**, **small**, **medium** and **large**.


| Property         |  value            | 
| :---                |     :---             |   
| `small`          |  280px           |  
| `medium`     |  480px           | 
| `large`          |  820px           |  
| `fillParent`    |  -                   | 
| `fitContent`  |  -                   | 


### Condensed

| Property                   |              Value |
| -------------------------- | -----------------: |
| Padding right/left         |        `12px/12px` |
| Width                      | `Predefined sizes` |
| Height                     |             `48px` |
| Border Radius              |              `4px` |
| Font size                  |             `12px` |
| Font weight                |     `Regular/Bold` |
| Space between text and '-' |              `8px` |
| Icon size                  |          `24x24px` |

### Multi-line

| Property                    |              Value |
| --------------------------- | -----------------: |
| Padding right/left          |             `12px` |
| Width                       | `Predefined sizes` |
| Border Radius               |              `4px` |
| Font size                   |             `12px` |
| Font weight                 |     `Regular/Bold` |
| Space between text and icon |             `12px` |
| Icon size                   |          `24x24px` |


## Accessibility


## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/8c8ff3dd-9b8e-4b1a-8f84-fc68ac6ff5ef/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/alert/README.md)
