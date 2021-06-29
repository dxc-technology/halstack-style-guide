# Progress-bar

Progress indicators offer visibility of system status to the user, giving feedback to indicate that the application is taking some time to processing data. The main aim of these components is to reduce the user's uncertainty about offering something to look at while the user is waiting for the end.

A progress bar should be used in any scenario that will take more than 1 second in performing the action, for anything that takes less than that time, it will be distracting for the user.

## Appearance

The appearance of the progress bar is recognized by the user as a long bar that indicated the part of the action that is completed filling the space available. It is used in many operative systems as part of file transferring, looking for updates or installation process.

## Determinate or indeterminate   
 
![Determinate progress bar](images/progress_determinate.png)

_Determinate progress bar_

* Determinate indicators display how long a process will take. They should be used in longer processes.

![Indeterminate progress bar](images/progress_indeterminate.png)

_Indeterminate progress bar_

* Indeterminate indicators express an unspecified amount of wait time. They should be used when:
        * The processing time is unknown.
        * The wait time is expected to be short enough that it’s not necessary to display.   


## Design Specifications

### General

#### Color

| Tokens         | value         |
| ------------   | ------------: |
| `trackLine`    |     #5F249F   |
| `totalLine`    |     #E6E6E6   |
| `fontColor`    |     inherit   |
| `overlayColor` |     #000000   |

#### Size

| width                 |   Value |
| --------------------- | ------: |
| Min. width            | `100px` |
| Max. width            |   `80%` |
| Height                |   `8px` |
| Spacing text with bar |  `12px` |
| Font size             |  `14px` |

![Specifications for progress bar component](images/progressbar_specs.png)

Overlay

| Property    |   Value |
| ----------- | ------: |
| Max. Width  | `100vw` |
| Max. Height | `100vh` |

![Theaming for progress bar component](images/progressbar_overlay.png)

### User Interface Design Considerations

#### When to use
* Use a progress bar when it will give people feedback in a long-running process with continuous values.

#### When not to use
* For an unknown amount of time/progress, consider using a loading spinner instead.
* For loading content in a module, consider using a loading skeleton instead.
* For discrete steps, consider using a progress stepper instead.
* For an interactive element that lets people provide input to show progress, use a range slider.
* Do not use this type of component in actions that will take less than 1 minute to the system
* Use the determinate type if it is possible, the user can have an estimation on how it is gonna take
* Add additional information to clarify to the user the action for which is waiting ("Sending documents...")

## Links and references

- https://github.com/dxc-technology/halstack-style-guide/raw/component-progress/Halstack UI-Kit/UI Kit-Halstack_v3.3.0.xd

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/progressbar/README.md)
