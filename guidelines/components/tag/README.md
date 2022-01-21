# Tag

The Tag represents resources and global terms to identify and linked with a text section to provide to the user more context and information regarding a topic. It usually appears in the top or bottom of the section and multiple tags can be concatenated to generate a series of resources displayed with a visual hierarchy that calls the user's attention.


## Usage

- Use the tag component for highlight properties of a section that want to remark
- Make consistent use of the component accross the application
- Be responsible of the use of background color and icons
- If there are multiple tags, the space between the should be at least 16px


## States

![Component tag states](images/tag_states.png)

Also, this component is static, which means that there is only one difference between the default and hover state, changing the cursor from the default to the pointer cursor. The tag is merely a link to other resource or a place to display some information, so it is not intended that the flow of the component consider all the different states.


## Anatomy

![Component tag anatomy](images/tag_anatomy.png)

1. Icon
2. Label
3. Container



### Icon Usage

![Icon usage examples](images/tag_icon.png)

_Icon usage examples_

* The tag can be displayed with icon and label or only icon
* The icon can be placed before or after
* The icon background color can be defined with the `iconBgColor` component property


## Design Specifications

![Design specification for the tag component](images/tag_specs.png)

_Design specification for the tag component_


### Color

| Component token   | Element          | Core token        | Value      |
| :---------------- | :--------------- | :---------------- | :--------- |
| `fontColor`       | Label            | `color-black`     | `#000000`  |
| `iconColor`       | Icon             | `color-white`     | `#ffffff`  |
| `focusColor`      | Container        | `color-blue-600`  | `#0095ff`  |

*_The `tag` component is using the `box` underneath, the values for the background are inherited from the definition in the component. By default, the background color is white and not themable, so it will be the same for both components._


### Typography

| Component token   | Element          | Core token              | Value           |
| :---------------- | :--------------- | :---------------------- | :-------------- |
| `fontSize`        | Label            | `font-scale-02`         | 0.875rem / 14px |
| `fontStyle`       | Label            | `font-style-normal`     | normal          |
| `fontWeight`      | Label            | `font-weight-regular`   | 400             |

### Shadow

| Property        | Element           | Core token        | Value                           |
| :-------------- | :---------------- | :---------------- | :------------------------------ |
| `box-shadow`    | Container         | `shadow-default`  | 0 4px 6px -1px rgba(0,0,0,0.1)  |
| `box-shadow`    | Container:hover   | `shadow-high`     | 0 8px 14px -2px rgba(0,0,0,0.1) |

*_The `shadow-default` token is used for the `:enabled`, `:focus` and `:disabled` states. The `shadow-high` for `:hover` and `:active`._

### Spacing

| Component token        | Element          | Core token    | Value       |
| :--------------------- | :--------------- | :------------ | :---------- |
| `labelPaddingTop`      | Label            | `spacing-0 `  | 0rem / 0px  |
| `labelPaddingBottom`   | Label            | `spacing-0 `  | 0rem / 0px  |
| `labelPaddingLeft`     | Label            | `spacing-16`  | 1rem / 16px |
| `labelPaddingRight`    | Label            | `spacing-16`  | 1rem / 16px |


### Size

| Component token   | Element          | Core token     | Value      |
| :---------------- | :--------------- | :------------- | :--------- |
| `height`          | Container        | -              | 40px       |
| `iconHeight`      | Icon             | -              | 24px       |


## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/tag)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/tag)
* [Adobe XD component](https://xd.adobe.com/view/f37b0e8f-1e02-48fa-bc31-a7deb148b5dc-a628/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/tag/README.md)
