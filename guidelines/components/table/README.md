## Overview

Data table is a component with a high rate of usage within the applications. It allows to show the user a big amount of information in a simple and simplified way. All the information contained in the table has a grid structure, defining columns and rows to place the data and allow the users to scan, analazy, compare and filter that information.

## Appearance

It is difficult to see a design variation of a table regarding the standards definition, because it is the best way to show the data.
Every line of the table represents a register that can be modified, deleted or searchable. The different properties of the register are displayed separated with enough space in the grid representation.
Also, some criteria can be defined to establish some type of sorting, filtering or matching with the properties that the user wants to look for.

This component into the DXC design system is formed by three main parts:

- Table header: Column properties, sorting methods and filtering options can be found in that part. Also the triggers for add items or handle bulk operations can be placed in this area.
- Table body: This is the main information container, where the actions that affects each row can be performed.
- Table footer: The table footer will contain the paginator element, and depending on the configuration, bulk operations can appear inside this section.

Here is an example of each section:

![Table modes](images/table_appereance.png)

## Modes

One mode is defined for the table component, with slightly variations based on the configuration.

Modes: **basic**.

![Table modes](images/table_mode.png)

## States

Some other components defined in the design system are used in the table component as the checkbox or dropdown. For concrete specifications about states, please, consider to see the documentation of each component.

Some of the states that can be found in the table are the ones related to the sorting of columns, the actions per each row and the selection of an entry.

## Design tokens

| Tokens                | Default value |
| --------------------- | :-----------: |
| headerBackgroundColor |   `#6F2C91`   |
| headerFontColor       |   `#FFFFFF`   |
| separatorColor        |   `#D9D9D9`   |
| bodyBackgroundColor   |   `#FFFFFF`   |
| bodyFontColor         |   `#000000`   |
| scrollBarThumbColor   |   `#666666`   |
| scrollBarTrackColor   |   `#D9D9D9`   |

## Design Specifications

Design specifications for table header:

| Property                           |       Value |
| ---------------------------------- | ----------: |
| Max. width                         |      `100%` |
| Padding right                      |      `40px` |
| Padding left                       |      `20px` |
| Space col. name and sort icon      |       `8px` |
| Action bar Min. height             |      `48px` |
| Padding right                      |      `40px` |
| Padding left                       |      `20px` |
| Padding top/bottom                 |      `16px` |
| Icon size                          |   `14x14px` |
| Distance add item and icon         |       `8px` |
| Font size                          |      `14px` |


Filter specifications

| Property               |           Value |
| ---------------------- | --------------: |
| Filter bar Min. height |          `48px` |
| Padding right/left     |     `20px 40px` |
| Padding top/bottom     |          `10px` |
| Filter tag width       | `Adapt content` |
| Font size              |          `14px` |

![Table specifications](images/table_specs.png)

## Responsive version for mobile and tablet

The table layout in the responsive version was restructured due to the less space that the device offers, because it cannot be represented the same amount of information using the same way as in desktop. With that circumstances in mind, each row of the table will take all the available witdh space, dividing the fields in differente rows within the main container row.

Because in the implementation the component won't have columns, each value will have associated the name of the property in each row. This can be redundant but it is the best way to present the information to the user and don't make him confused.

With this approach the table also has a paginator and every row could have their own actions and selection component (checkbox).

## User Interface Design Considerations

- Pagination strips should be used on desktop/laptop and tablet devices, but not on mobile phones.
- The pagination strip should be right aligned below the bottom row of the table.
- The strip is made up of 3 sections; each provides the user with information about the number of items in the table as well as how to access them.
  - Section 1: user may choose how many rows to display per rotation
  - Section 2: dependent on section 1 setting, system shows specific line numbers in the rotation and the number of rotations in the table
  - Section 3: provides navigation within the entire table
    ▪ First rotation in table
    ▪ Previous rotation
    ▪ Specific page number access
    ▪ Next rotation
    ▪ Last rotation in table

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/64333c08-0b79-4652-be10-f55646433e73/variables/
