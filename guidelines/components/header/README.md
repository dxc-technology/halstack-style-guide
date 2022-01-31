# Header

The header is an important component in the interface, it is the area dedicated for the navigation across the application and helps users understand what the content of the page is about. They appear at the top of a page, above the main content.


## Usage

* Try to avoid to place a large number of items inside the content area
* Avoid increasing the header height
* Halstack components placed as a children should follow their respective guidelines

## Variants

![Header component variants](images/header_variants.png)

_Header component variants_

Following the convention of the variants that can be found in a component, two main variants are defined for the header.
Variants: **default** and **underlined**.



## Anatomy

![Header distribution example](images/header_anatomy.png)

_Header distribution example_


1. Brand image
2. Application name
3. Navigation links
4. Header dropdown
5. Container


## Custom content

* **Application name**: If the application has a specific name, can be placed following the brand image
* **Primary navigation**: The links and dropdowns with a navigational purpose
* **Site options**: Language selector, settings, or other any option that applies 
* **Account**: In the case that the application manages accounts, the element for the login and register options should be positioned on the far right except in the tablet and mobile version that will be covered in the following sections.


## Design Specifications

![Header design specifications](images/header_specs.png)

_Header design specifications_

### Color

| Component token                | Element          | Core token              | Value       |
| :----------------------------- | :--------------- | :---------------------- | :---------- |
| `backgroundColor`              | Container        | `color-white`           | #ffffff     |
| `contentColor`                 | Content          | `color-black`           | #000000     |
| `underlinedColor`              | Container        | `color-black`           | #000000     |
| `hamburguerHoverColor`         | Menu:hover       | `color-grey-200`        | #e6e6e6     |
| `hamburguerFocusColor`         | Menu:focus       | `color-blue-600`        | #0095ff     |
| `hamburguerFontColor`          | Menu label       | `color-black`           | #000000     |
| `hamburguerIconColor`          | Menu icon        | `color-black`           | #000000     |
| `menuBackgroundColor`          | Menu             | `color-white`           | #ffffff     |
| `overlayColor`                 | Overlay          | `color-grey-800-a`      | #000000b3   |

### Typography

| Component token                | Element          | Core token             | Value                   |
| :----------------------------- | :--------------- | :--------------------- | :---------------------- |
| `hamburguerFontFamily`         | Menu label       | `font-family-sans`     | 'Open Sans', sans-serif |
| `hamburguerFontStyle`          | Menu label       | `font-style-normal`    | normal                  |
| `hamburguerFontSize`           | Menu label       | `font-scale-01`        | 0.75rem / 12px          |
| `hamburguerFontWeight`         | Menu label       | `font-weight-semibold` | 600                     |


### Border

| Property                 | Element                | Core token                 | Value            |
| :----------------------- | :--------------------- | :------------------------- | :--------------- |
| `border-width`           | Underline              | `border-width-2`           | 2px              |
| `border-style`           | Underline              | `border-style-solid`       | solid            |

  
### Size

| Poperty                 | Element          | Core token       | Value      |
| :---------------------- | :--------------- | :--------------- | :--------- |
| `height`                | Container        | -                | 64px       |
| `width`                 | Container        | -                | 100%       |


### Margin

The margin only applies to the `margin-bottom` of the header component.

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

The variable padding only applies to the content area, the `padding-left` applied to the brand area is fixed (20px)

padding | value
-- | --
`xxsmall` | 6px
`xsmall` | 16px
`small` | 24px
`medium` | 36px
`large` | 48px
`xlarge` | 64px
`xxlarge` | 100px

Different values can be applied to each side of the component:
`top` `bottom` `left` `right`



## Responsive version for mobile and tablet

Due to the applications are accessible from a laptop, tablet and mobile it is necessary to think and design a header version for the corresponding device. The design for smaller devices tries to keep the consistency respect to the other versions, allowing the user experiences a similar interaction although the space available is less.

![Header menu responsive version](images/header_responsive.png)

_Header menu responsive version_


## Links and references

* [React CDK component](https://developer.dxc.com/tools/react/next/#/components/header)
* [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/header)
* [Adobe XD component](https://xd.adobe.com/view/947422e5-2708-45b4-8974-4968fb97ceb2-c127/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/header/README.md)
