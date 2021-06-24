# Alert

All web-based product applications are expected to feature the same design and transition standards for message types. Mobile apps will follow guidelines specific to those devices.

## Appereance

The appearance of the alert is conditioned based on the type of alert that the applications wants to show to the user and the type of mode that is chosen to represent it. Starting with the type of alert, in Halstack Design System we have defined the following categories:

### Information

Informational messages are used exclusively to assist the user with directional or explanatory text about a complex or seldom used process.

![information alert](images/alert_specs_info.png)

### Success

Success messages should be used to assure user that a system calculation or data submission was completed correctly. This type of message should only be used in situations where confirmation is necessary, i.e. final submission of an application. It should not be used to notify the user of every function successfully performed by the system. These only disrupt user workflow and should be evident without continual verification.

![success alert](images/alert_specs_success.png)

### Warning

Alert or warning messages should be displayed when there is a potential obstacle in completing a process as intended or there may be inadequate or incompatible system data that needs to be corrected before continuing. These messages should provide the user with both the problem and the solution needed to continue.

![warning alert](images/alert_specs_warning.png)

### Error

Error messages convey a critical system problem that requires user and/or technical intervention to correct. Error messages should contain a solution to the problem or information on how to proceed if technical assistance is required. When error validation appears, the corresponding field associated with the error will display with a red indicator.

![error alert](images/alert_specs_error.png)

## Modes

There are two different modes for the alert component, each of them should be used according to the information that want to be given to the user, defined in the application level.

Modes: **condensed**, **multiline** 

### Condensed

In the condensed version, the message is short and concise, avoiding word that plead, belittle or intimidate the user. It is only one line with some information about the actions that took place and the reason of the alert.

In this mode the notification should appears in the up right corner of the screen, appearing with an animation from the right side and staying visible for 10 seconds or instead with the click of the user after it dissapears.

![Alert mode for the condensed version](images/alert_mode_condensed.png)

### Multi-line

If the message type wants to be displayed in multiple lines because the user needs more information to understand the reason of the alerts and there is an explanaition of how to avoid it, this mode is recommendable.

The position to be displayed is the same that the condensed one, in the up right corner of the interface. The difference with the previous mode is for this case that the user must interact with the alert message to close it.

![Alert mode for the multiple lines with more information](images/alert_mode_multi.png)


## States

Actually the alert component doesn't have states, only the action that is performed when user clicks on the 'X' icon that hiddes the alert message or a clicking in a button, that will behave as the states defined in the button component.

The both actions that alert will get are the one that for some reason appears in the screen and the one that for overtime or by an action of the user the message dissapears from the interface.

## Design tokens

| Tokens       | Default value |
| ------------ | ------------: |
| overlayColor |     `#000000` |
| infoColor    |     `#0C5BA7` |
| infoBackgroundColor    |     `#E3F2FE` |
| successColor |     `#239642` |
| successBackgroundColor |     `#E7F9ED` |
| warningColor |     `#F5CA38` |
| warningBackgroundColor |     `#FEF8E3` |
| errorColor   |     `#C81722` |
| errorBackgroundColor   |     `#FFE3E6` |
| focusColor   |     `#005FCC` |


## Design Specifications



### Component width

The alert component has a property that is customizable depending on the context and the scenario where the component is used. This property defines the size of the alert and it can get multiple values according to the needs of the application.

Widths for alert component: **fill content**, **fit parent**, **small**, **medium** and **large**.


| Property         |  value            | 
| :---                |     :---             |   
| `small`          |  280px           |  
| `medium`     |  480px           | 
| `large`          |  820px           |  
| `fillParent`    |  -                   | 
| `fitContent`  |  -                   | 


* _Fill parent_ - It is used when the width will be adapted to the content of the alert itself.
* _Fit parent_ - This property defines that the alert will expand as much as the width of the parent, so it is directly dependent of the parent where is rendered.
* _Small_ - A small width for ocassions when the message is short, also applicable in mobile.
* _Medium_ - It is the average size, this option will fit well in a high percetange of the applications.
* _Large_ - A largest option to make the alert more visible in the screen and explain in detail what is causing the alert message.

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

![alert specifications](images/alert_specs.png)


## User Interface Design Considerations

- Incorporate messages into the application when necessary to keep users informed of important changes.
- Messages should use positive rhetoric. Avoid using negatives. (e.g. Use “City is required.” instead of “You didn’t enter a city.”)
- Always use active instead of passive voice.
- Be concise. Avoid words that plead, belittle or intimidate (i.e. please,wrong, or else)
- Non-entry of a non-required entry field should never generate an edit message or warning message, nor deny user forward movement.
- If possible, dialog messages must always display in full without any scroll bar.
- Dialog messages will retract only when the user closes the dialog or completes through interaction.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/8c8ff3dd-9b8e-4b1a-8f84-fc68ac6ff5ef/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/alert/README.md)
