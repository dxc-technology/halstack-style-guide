# Card

Cards are a container of information, actions and data with a hierarchy to make easy scanning the content.
A card can be defined as a unit, so it has all the information within it, making the component useful to show images, text, and interactive elements.

The structure of the card can be seen as blocks, each block is optional to be displayed but the overall element should make a cohesive design, even if it includes text, images or other elements.

## Usage

* Organize the card collection so thery are easy to use, take a layout that presents the information in a clear way and apply the same styles for every card
* If a collection want be create, won't use different card styles, use the same to keep consistency


## States

Component states: **Enabled**, **hover** and **focus**.

![Card component states](images/card_states.png)

_Card component states_

## Anatomy

![Card anatomy](images/card_anatomy.png)

1. Card image
2. Custom content
3. Container


## Design Specifications

![Card design specifications](images/card_specs.png)

_Card design specifications_
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
| Space main info to paragraph |  `16px` |
| Space actions to photo       |  `24px` |



## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/card)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/card)
* [Adobe XD component](https://xd.adobe.com/view/6430ac9c-eb36-413a-92bf-41d72005dcd4-3163/)
____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/card/README.md)
