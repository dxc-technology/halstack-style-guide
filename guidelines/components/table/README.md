# Table

Data table is a component with a high rate of usage within the applications. It allows to show the user a big amount of information in a simple and simplified way. All the information contained in the table has a grid structure, defining columns and rows to place the data and allow the users to scan, analazy, compare and filter that information.

## States

Some other components defined in the design system are used in the table component as the checkbox or dropdown. For concrete specifications about states, please, consider to see the documentation of each component.

Some of the states that can be found in the table are the ones related to the sorting of columns, the actions per each row and the selection of an entry.

## Anatomy

![Table component anatomy](images/table_anatomy.png)

1. Header
2. Header title
3. Sorting action
4. Body
5. Cell
6. Cell value
7. Paginator


## Design Specifications

![Table design specifications](images/table_specs.png)

_Table design specifications_


### Color

| Component token          | Element         | Core token          | Value     |
| :----------------------- | :-------------- | :------------------ | :-------- |
| `dataBackgroundColor`    | Cell            | `color-white`       | #ffffff   | 
| `dataFontColor`          | Cell value      | `color-black`       | #000000   | 
| `headerBackgroundColor`  | Header          | `color-purple-700`  | #5f249f   |
| `headerFontColor`        | Header title    | `color-white`       | #ffffff   |
| `scrollBarThumbColor`    | Scroll bar      | `color-grey-700`    | #666666   |
| `scrollBarTrackColor`    | Scroll bar      | `color-grey-300`    | #cccccc   |
| `sortIconColor`          | Sort            | `color-white`       | #ffffff   |
| `rowSeparatorColor`      | Divider         | `color-grey-300`    | #cccccc   |


### Typography

| Component token            | Element         | Core token             | Value                    |
| :------------------------- | :-------------- | :--------------------- | :----------------------- |
| `dataFontFamily`           | Cell value      | `font-family-sans`     | 'Open Sans', sans-serif  |
| `dataFontSize`             | Cell value      | `font-scale-02`        | 0.875rem / 14px          |
| `dataFontStyle`            | Cell value      | `font-style-normal`    | normal                   |
| `dataFontWeight`           | Cell value      | `font-weight-regular`  | 400                      |
| `dataFontTextTransform`    | Cell value      | -                      | none                     |
| `dataTextLineHeight`       | Cell value      | -                      | normal                   |
| `headerFontFamily`         | Header title    | `font-family-sans`     | 'Open Sans', sans-serif  |
| `headerFontSize`           | Header title    | `font-scale-02`        | 0.875rem / 14px          |
| `headerFontStyle`          | Header title    | `font-style-normal`    | normal                   |
| `headerFontWeight`         | Header title    | `font-weight-regular`  | 400                      |
| `headerFontTextTransform`  | Header title    | -                      | none                     |
| `headerTextLineHeight`     | Header title    | -                      | normal                   |
| `dataTextAlign`  : "left",
| `headerTextAlign`: "left",

### Border

| Component token          | Element         | Core token             | Value                    |
| :----------------------- | :-------------- | :--------------------- | :----------------------- |
| `rowSeparatorThickness`  | Divider         | `border-width-1`       | 1px                      |
| `rowSeparatorStyle`      | Divider         | `border-style-solid`   | solid                    |
| `headerBorderRadius`     | Header          | `border-radius-medium` | 0.25rem / 4px            |


### Spacing

| Component token          | Element         | Core token             | Value                    |
| :----------------------- | :-------------- | :--------------------- | :----------------------- |
| `dataPaddingTop`         | Cell value      | -                      | 14px                     |
| `dataPaddingBottom`      | Cell value      | `spacing-04`           | 0.75rem / 12px           |
| `dataPaddingRight`       | Cell value      | -                      | 20px                     |
| `dataPaddingLeft`        | Cell value      | `spacing-08`           | 2.5rem / 40px            |
| `headerPaddingTop`       | Header title    | `spacing-05`           | 1rem / 16px              |
| `headerPaddingBottom`    | Header title    | `spacing-05`           | 1rem / 16px              |
| `headerPaddingRight`     | Header title    | -                      | 20px                     |
| `headerPaddingLeft`      | Header title    | `spacing-08`           | 2.5rem / 40px            |


### Iconography

| Property          | Element         | Core token             | Value        |
| :---------------- | :-------------- | :--------------------- | :----------- |
| Width             | Sorting action  | -                      | 14px         |
| Height            | Sorting action  | -                      | 14px         |



## Responsive version for mobile and tablet

The table layout in the responsive version was restructured due to the less space that the device offers, because it cannot be represented the same amount of information using the same way as in desktop. With that circumstances in mind, each row of the table will take all the available witdh space, dividing the fields in differente rows within the main container row.

Because in the implementation the component won't have columns, each value will have associated the name of the property in each row. This can be redundant but it is the best way to present the information to the user and don't make him confused.

With this approach the table also has a paginator and every row could have their own actions and selection component (checkbox).


## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/resultsetTable)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/resultsettable) 
* [Adobe XD component]()  

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/table/README.md)
