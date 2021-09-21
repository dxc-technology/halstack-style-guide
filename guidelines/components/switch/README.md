# Switch

Switch toggles are elements that can get two simple states, each of them has an impact on the system and it can be switched on or off, there are no more options.
If the switch toggle is on one state, the action to change it will modify to value of the element to the contrary.

## Usage

- Switch toggles should be used in place of radio buttons whenever the options are opposites of each other (i.e. yes/no, on/off, etc).
- Whenever is possible stack the switch component vertically.
- Switches have immediate effect over the application, changing preferences and configuration settings. Don't use a submit button.

## States

Five different states are defined in the life cycle of the component: **unselected enabled**, **unselected focus**, **unselected disabled**, **selected enabled**, **selected focus** and **selected disabled**

![Switch component states](images/switch_states.png)

_Switch component states_

## Anatomy

![Switch component anatomy](images/switch_anatomy.png)

1. Label
2. Thumb
3. Track

## Stacking

![Switch stacking options](images/switch_stacking.png)

_Switch stacking options_

In some application the use of several switches based on the requirements could appear, that why we provide some indications in the case that the user needs to use stacked switches.

## Label position

![Switch label position options example](images/switch_label_position.png)

_Switch label position options example_

| Position         | Description                                               |
| :--------------- | :-------------------------------------------------------- |
| **Label before** | Labels before the switch indicate what the switch is for  |
| **Label after**  | Labels after the switch indicate the state of the switch  |


## Design Specifications


![Switch design specifications](images/switch_specs.png)

_Switch design specifications_


### Color

| Component token                           | Element                         | Core token          | Value     |
| :---------------------------------------- | :------------------------------ | :------------------ | :-------- |
| `labelFontColor`                          | Label                           | `color-black`       | #000000   |
| `disabledLabelFontColor`                  | Label:disabled                  | `color-grey-400`    | #bfbfbf   |
| `thumbBackgroundColor`                    | Thumb                           | `color-white`       | #ffffff   |
| `focusThumbBorderColor`                   | Thumb:focus                     | `color-blue-600`    | #0095ff   |
| `unselectedTrackBackgroundColor`          | Track unselected                | `color-grey-400`    | #bfbfbf   |
| `selectedTrackBackgroundColor`            | Track selected                  | `color-purple-700`  | #5f249f   |
| `disableudUnselectedTrackBackgroundColor` | Track:disabled unselected       | `color-grey-100`    | #f2f2f2   |
| `disabledSelectedTrackBackgroundColor`    | Track:disabled selected         | `color-purple-100`  | #f2eafa   |


### Typography

| Component token                           | Element                         | Core token            | Value        |
| :---------------------------------------- | :------------------------------ | :-------------------- | :----------- |
| `labelFontFamily`                         | Label                           | `font-family-sans`    | Open sans    |
| `labelFontSize`                           | Label                           | `font-scale-02`       | 1rem / 16px  |
| `labelFontWeight`                         | Label                           | `font-weight-regular` | 400          |
| `labelFontStyle`                          | Label                           | `font-style-normal`   | normal       |


### Size

| Component token                           | Element                         | Core token            | Value        |
| :---------------------------------------- | :------------------------------ | :-------------------- | :----------- |
| `thumbHeight`                             | Thumb                           | -                     | 24px         |
| `thumbWidth`                              | Thumb                           | -                     | 24px         |
| `trackHeight`                             | Track                           | -                     | 12px         |
| `trackWidth`                              | Track                           | -                     | 60px         |
| `focusHeight`                             | Focus indicator                 | -                     | 40px         |
| `focusWidth`                              | Focus indicator                 | -                     | 40px         |


### Border

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `border-width`           | Track            | `border-width-0`           | 0                |
| `border-style`           | Track            | `border-style-none`        | none             |
| `border-radius`          | Track            | `border-radius-full`       | 9999px           |
| `border-width`           | Thumb            | `border-width-0`           | 0                |
| `border-style`           | Thumb            | `border-style-none`        | none             |
| `border-radius`          | Thumb            | `border-radius-full`       | 9999px           |
| `border-width`           | Focus border     | `border-width-2`           | 2px              |
| `border-style`           | Focus border     | `border-style-solid`       | solid            |
| `border-radius`          | Focus border     | `border-radius-full`       | 9999px           |

### Margin

margin | value
-- | --
`xxsmall` | 6px
`xsmall` | 16px
`small` | 24px
`medium` default | 36px
`large` | 48px
`xlarge` | 64px
`xxlarge` | 100px

And also apply different values to each side of the component:
`top` `bottom` `left` `right`



### Spacing

| Property                  | Element                         | Core token            | Value                |
| :------------------------ | :------------------------------ | :-------------------- | :------------------- |
| `padding`                 | Thumb                           | `spacing-03`          | 0.5rem / 8px         |
| `margin-left/right`*      | Switch                          | `spacing-03`          | 0.5rem / 8px         |
| `padding`                 | Track                           | `spacing-04`          | 0.75rem / 12px       |

_*Depending of the position of the label_

## Links and references

- [React CDK component](https://developer.dxc.com/tools/react/next/#/components/switch)
- [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/switch)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/switch/README.md)

