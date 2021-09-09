# Switch

Switch toggles are elements that can get two simple states, each of them has an impact on the system and it can be switched on or off, there are no more options.
If the switch toggle is on one state, the action to change it will modify to value of the element to the contrary.

The main difference to using a switch toggle instead of other components with a similar purpose like radio buttons or checkboxes are the immediate effect that they should take. This grants the users control on the application, changing preferences and configuration settings.

With the use of switch toggle, it is not needed a submit button to do the appropriate action, because the action takes place at the moment that the switch is turned on or off.


## Usage

- Switch toggles should be used in place of radio buttons whenever the options are opposites of each other (i.e. yes/no, on/off, etc).
- Try to present your lists vertically, with one choice per line.


## States

Five different states are defined in the life cycle of the component: **unselected enabled**, **unselected focus**, **unselected disabled**, **selected enabled**, **selected focus** and **selected disabled**

![Switch component states](images/switch_states.png)

_Switch component states_

## Anatomy

![Switch component anatomy](images/switch_anatomy.png)

1. Label
2. Thumb
3. Track

### Stacking

![Switch linear structure](images/switch_stacking.png)

In some application the use of several switches based on the requirements could appear, that why we provide some indications in the case that the user needs to use stacked switches.

### Label position

![Switch label position options example](images/switch_label_position.png)

_Switch label position options example_

* Labels before the switch indicate what the switch is for
* Labels after the switch indicate the state of the switch
## Design Specifications


![Switch design specifications](images/switch_specs.png)

_Switch design specifications_


## Color

| Tokens                                | Default value |
| ------------------------------------- | ------------: |
| `checkedTrackBackgroundColor`           |     #5f249f |
| `disabledCheckedTrackBackgroundColor`   |     #D0BDDB |
| `checkedthumbBackgroundColor`           |     #FFFFFF |
| `uncheckedThumbBackgroundColor`         |     #FFFFFF |
| `uncheckedTrackBackgroundColor`         |     #D9D9D9 |
| `disabledUncheckedTrackBackgroundColor` |     #D9D9D9 + 0.12 opacity |
| `fontColor`                             |     #000000 |
| `disabledFontColor`                     |     #000000 + 0.12 opacity |
| `focusColor`                            |     #005FCC |

#### Sizes

| Property                   |         Value |
| -------------------------- | ------------: |
| Toggle bar                 |          36px |
| Focused ripple             |       42x42px |
| Toggle button              |       24x24px |

#### Margin

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

#### Typography

| Property                   |         Value |
| -------------------------- | ------------: |
| Font size (with text)      |        `16px` |
| Font weight                |     `Regular` |

#### Spacing

| Property                   |         Value |
| -------------------------- | ------------: |
| Spacing between label and toggle |        `12px` |





## Links and references

- [React CDK component](https://developer.dxc.com/tools/react/next/#/components/switch)
- [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/switch)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/switch/README.md)

