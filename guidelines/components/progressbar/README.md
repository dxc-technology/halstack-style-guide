# Progress-bar

Progress indicators offer visibility of system status to the user, giving feedback to indicate that the application is taking some time to processing data. The main aim of these components is to reduce the user's uncertainty about offering something to look at while the user is waiting for the end.

A progress bar should be used in any scenario that will take more than 1 second in performing the action, for anything that takes less than that time, it will be distracting for the user.

## Appearance

The appearance of the progress bar is recognized by the user as a long bar that indicated the part of the action that is completed filling the space available. It is used in many operative systems as part of file transferring, looking for updates or installation process.

### Modes

There are two modes for the progress bar components, depend on the tracking progress.
One mode is a determinate state that goes from 0 to 100% in a linear progression.
The other one is indeterminate, so it hasn't defined limits for the duration, there is no number indicator to estimate the remaining time.

A third mode can be added based on the context of use. The simplified version of the progress bar has been thought to use on responsive versions of the component, making the interface more clear with a minimalistic component. It also can contain information about the progress or a label to indicate the action.

Modes: **determinate**, **indeterminated**, and **simplified**.

![Alert mode for normal progress bar](images/progressbar_mode.png)

### States

Three different states can be defined, but in this case, they are not related to the interaction of the user.

- The progress bar is empty
- The progress bar is in process
- The progress bar is done

These states corresponding with the progress of the process in the application.

## Design tokens

| Tokens       | Default value |
| ------------ | ------------: |
| trackLine    |     `#6F2C91` |
| totalLine    |     `#CECECE` |
| fontColor    |     `inherit` |
| overlayColor |     `#000000` |

## Design Specifications

| Property              |   Value |
| --------------------- | ------: |
| Min. width            | `100px` |
| Max. width            |   `80%` |
| Height                |   `9px` |
| Spacing text with bar |   `8px` |
| Font size             |  `12px` |

![Specifications for progress bar component](images/progressbar_specs.png)

Overlay

| Property    |   Value |
| ----------- | ------: |
| Max. Width  | `100vw` |
| Max. Height | `100vh` |

![Theaming for progress bar component](images/progressbar_overlay.png)

### User Interface Design Considerations

- Do not use this type of component in actions that will take less than 1 minute to the system
- Use the determinate type if it is possible, the user can have an estimation on how it is gonna take
- Add additional information to clarify to the user the action for which is waiting ("Sending documents...")

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/4e8e4cd9-901f-45e7-886c-3855e98046ad/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/progressbar/README.md)
