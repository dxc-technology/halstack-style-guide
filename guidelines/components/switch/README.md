# Switch

Switch toggles are elements that can get two simple states, each of them has an impact on the system and it can be switched on or off, there are no more options.
If the switch toggle is on one state, the action to change it will modify to value of the element to the contrary.

The main difference to using a switch toggle instead of other components with a similar purpose like radio buttons or checkboxes are the immediate effect that they should take. This grants the users control on the application, changing preferences and configuration settings.

With the use of switch toggle, it is not needed a submit button to do the appropriate action, because the action takes place at the moment that the switch is turned on or off.

## Appereance

The appearance of the component should provide good visual feedback, making clear when the switch is on or off. To make a difference between states colors, shadows and fill properties can be used.

A label can be linked with the component to indicate what action will perform when the change occurs. It should be descriptive and clear about what the component is doing or affecting.

## Modes

Two main modes are represented within the component.

Modes: **on** and **off**.

![Switch modes](images/switch_modes.png)

## States

Five different states are defined in the life cycle of the component: **normal**, **disabled**, **hovered** and **focused**.

![Switch modes](images/switch_states.png)

## Design tokens

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

## Design Specifications

Schematics examples for the switch toggle component with all the variations.

![Switch specifications](images/switch_specs.png)

In some application the use of several switches based on the requirments could appear, that why we provide some indications in the case that the user needs to use stacked or linear switches.

### Linear

The text should have a margin of 16 pixels based on its position. If the text is after the switch, it should define the margin on the right side. Otherwise, if the label of the switch is before the component, the margin has to go on the left side.

![Switch linear structure](images/switch_linear.png)

### Stacked

The spacing between stacked switches should be 24 pixels that is determining by the top/bottom margin of the switch component itself.

![Switch stacked structure](images/switch_stacked.png)

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



## User Interface Design Considerations

- Switch toggles should be used in place of radio buttons whenever the options are opposites of each other (i.e. yes/no, on/off, etc).
- Try to present your lists vertically, with one choice per line.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/c3026d48-f954-4978-91e4-05d323ee078c/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/switch/README.md)

