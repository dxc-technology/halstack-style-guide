# Table

Data table is a component with a high rate of usage within the applications. It allows to show the user a big amount of information in a simple and simplified way. All the information contained in the table has a grid structure, defining columns and rows to place the data and allow the users to scan, analazy, compare and filter that information.

## States

Some other components defined in the design system are used in the table component as the [checkbox](https://developer.dxc.com/design/guidelines/components/checkbox), [button](https://developer.dxc.com/design/guidelines/components/button) or [select](https://developer.dxc.com/design/guidelines/components/select). For concrete specifications about states, please, consider to see the documentation of each component.

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


## Accessibility

### WCAG

* Understanding WCAG 2.2 - [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
* Understanding WCAG 2.2 - [Success Criterion 1.3.2: Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence)
* Understanding WCAG 2.2 - [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
* Understanding WCAG 2.2 - [Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order)
* Understanding WCAG 2.2 - [Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)
* Understanding WCAG 2.2 - [Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)
* Understanding WCAG 2.2 - [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)

### WAI-ARIA

* WAI-ARIA Authoring Practices 1.2 - [3.23 Table](https://www.w3.org/TR/wai-aria-practices-1.2/#table)
* WAI-ARIA Authoring Practices 1.2 - [Sortable Table Example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html)

## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/resultsetTable)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/resultsettable) 
* [Adobe XD component](https://xd.adobe.com/view/7c1326a5-31f5-4d55-8e5f-36a064d51273-2940/)  

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/table/README.md)
