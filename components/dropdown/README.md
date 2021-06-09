# Dropdown

The use of dropdowns has its advantages but it depends on the screen support. Dropdowns are a standard widget, so the users know how to interact with them. The options available in a dropdown component are static, so this prevents from erroneous data entered by the user since it only shows a range of correct values for that input.


## Appearance

Dropdowns have a similar look and behaviour to select components, the difference is that while select is only to collect user's data into a form, dropdown can be used in a variety of scenarios.

* Dropdowns can be useful as a list of items that will be shown when the user clicks or hovers their main parent that will trigger the pop up with the options.
* An arrow linked with the label of the dropdown should be shown to indicate the user that more options are available but are currently hidden.
* By default, every dropdown will be extending underneath his main container if the space in the screen is enough to contain all the size declared for the pop-up.
* Once an option is selected by the user, the main container has to reflect the option chosen and the dropdown has to be closed after the user's click.

If there is a special case when the dropdown couldn't be displayed below the selector because it is hiding important information reducing discoverability and scanability in the website then consider to use other options to display the information or customize the position of the pop up to fitting the necessities of the application.


## States

### Dropdown button

States: **enabled**, **hover**, **focus**, **active** and **disabled**.

![Dropdown button states](images/dropdown_states.png)

### Option list

States: **enabled**, **hover**, **focus** and **selected**:

![Dropdown option list states](images/dropdown_option_list_states.png)


## Design Specifications

### Color

| Tokens                    | Value       |
| -----------------------   | ----------- |
| `backgroundColor`         |     #FFFFFF |
| `fontColor`               |     #000000 |
| `dropdownBackgroundColor` |     #FFFFFF |
| `dropdownFontColor`       |     #000000 |
| `hoverBackgroundOption`   |     #FFFFFF |
| `hoverBackgroundColor`    |     #FFFFFF |
| `scrollBarThumbColor`     |     #666666 |
| `scrollBarTrackColor`     |     #D9D9D9 |
| `focusColor`              |     #005FCC |

### Width

width | Value
-- | --
`small` | 60px
`medium` _(default)_ | 240px
`large` | 480px
`fitContent` | -
`fillParent` | -

### Margin

margin | Value
-- | --
`xxsmall` | 6px
`xsmall` | 16px
`small` | 24px
`medium` | 36px
`large` | 48px
`xlarge` | 64px
`xxlarge` | 100px

### Padding

| Property        | Element         | Value     |
| --------------- | ----------      | --------- |
| `padding-left` | Dropdown button  | 16px      |
| `padding-left` | Options list     | 16px      |
| `padding-right`| Dropdown button  | 16px      |
| `padding-right`| Options list     | 16px      |


### Border

| Property        | Element         | Value     |
| --------------- | ----------      | --------- |
| `border-radius` | Dropdown button | 4px       |
| `border-radius` | Options list    | 4px       |
| `border-width`  | Focus outline   | 2px       |


### Typography

| Property        | Element         | Value     |
| --------------- | ----------      | ----------|
| `font-size`     | Dropdown button | 1rem/16px |
| `font-size`     | List item       | 1rem/16px |
| `font-weight`   | Dropdown button | 400       |
| `font-weight`   | List item       | 400       |


## Iconography


| Property          | Element         | Value     |
| ---------------   | ----------      | ----------|
| `height`/ `width` | Caret           | 24/24px   |
| `height`/ `width` | Custom icon     | 20/20px   |



![Dropdown specifications](images/dropdown_specs.png)

## Icon Usage

It is allowed the use of icons within the dropdown component. There are several options of configuration, the icon can be placed before or after the label, also the icon can be the unique content of the dropdown placeholder and options, so the final goal of this is to keep consistency with the rest of the components of the design system such as buttons or selects, that have the same behavior.

![Icon usage](images/dropdown_icon_usage.png)

## User Interface Design Considerations

- Consider the number of options (binary decisions or a few items) to decide to implement one component that represent in a better way the data, i.e. radio button or switch toggle.
- For a large number of well specified options, consider to use an autocomplete field to filter the amount of options while typing.
- Consider the input, might be that a text input would fit better than a dropdown.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/7ea088c7-538c-400f-ac77-722eabc1ecf2/variables/

