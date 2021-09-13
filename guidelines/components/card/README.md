# Card

Cards are a container of information, actions and data with a hierarchy to make easy scanning the content.
A card can be defined as a unit, so it has all the information within it, making the component useful to show images, text, and interactive elements.

The structure of the card can be seen as blocks, each block is optional to be displayed but the overall element should make a cohesive design, even if it includes text, images or other elements.

## Appearance

Even a card is defined as a unit by itself, it is common to represent cards in a set, with a grid structure in which each card has different information but from the same field.

### Modes

The card component doesn't have modes, instead the component has many ways of configuration with images, custom containers and background colors to adapt it to the needs of the UI.

![Card modes](images/card_modes.png)

### States

The only state that is controlled in the card component is the hover. As it is needed visual feedback to give the user a notion of which card is involve in the action, the rest of the states are directly dependent on the components defined inside of the card.

![Card states](images/card_states.png)


## Design Specifications

### Color

| Component token     | Element                     | Core token                  | Value         |
| :------------------ | :-------------------------- | :---------------------------| :------------ |
| `backgroundColor`*  | Container                   | `color-white`               | `#ffffff`     |

* The `background-color` token belongs to the box component, changes made on that component will affect the card element.

### Margin

Margin properties can be applied independently to `top`, `right`, `bottom` and `left` sides of the card container.

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px


### Padding

Padding properties can be applied independently to `top`, `right`, `bottom` and `left` sides of the card container.


padding | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px


### Border

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `border-width`           | Container        | `border-width-0`           | 0                |
| `border-style`           | Container        | `border-style-none`        | none             |
| `border-radius`          | Container        | `border-radius-medium`     | 0.25rem / 4px    |


### Size

| Component token                             | Element                      | Core token             | Value   |
| :------------------------------------------ | :--------------------------- | :--------------------- | :------ |
| `height`                                    | Container height             | -                      | 220px   | 
| `width`                                     | Container width              | -                      | 400px   |


| Property                                    | Element                      |  Value   |
| :------------------------------------------ | :--------------------------- |  :------ |
| `max-width`                                 | Image                        |  140px   | 




### Spacing

| Property                     |   Value |
| ---------------------------- | ------- |
| Space title-subtitle         |   `4px` |
| Space main info to paragraph |  `20px` |
| Space actions to photo       |  `20px` |

![Card specifications](images/card_specs.png)

### User Interface Design Considerations

- Organize the card collection so thery are easy to use, take a layout that presents the information in a clear way and apply the same styles for every card
- If a collection want be create, won't use different card styles, use the same to keep consistency

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/cca4ba93-1008-40ce-a7a5-89fbc21f665f/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/card/README.md)
