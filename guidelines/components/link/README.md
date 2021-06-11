# Link

Links are used as navigational elements. They may appear isolated, inside a sentence or paragraph, or following the content.

### States

States: **enabled**, **hover**, **focus**, **active**, **visited** and **disabled**

![Example of the link component states](images/link_states.png)

_Example of the link component states_

## Design Specifications

![Design specifications for link component](images/link_specs.png)

_Design specifications for link component_

### Color

| Tokens                              | Value       |
| ---------------------------------   | ----------- |
| `fontColor`                         |   #005FCC   |
| `visitedFontColor`                  |   #8800F6   |
| `underlinedBackgroundColor`         |   #005FCC   |
| `visitedUnderlinedBackgroundColor`  |   #8800F6   |
| `disabledColor`                     |   #D9D9D9   |
| `disabledUnderlinedBackgroundColor` |   #D9D9D9   |
| `hoverFontColor`                    |   #006BF6   |

### Margin

| Margin    | value  |
| --------- | ------ |
| `xxsmall` | 6px    |
| `xsmall`  | 16px   |
| `small`   | 24px   |
| `medium`  | 36px   |
| `large`   | 48px   |
| `xlarge`  | 64px   |
| `xxlarge` | 100px  |

### Typography

| Property                    | value       |
| --------------------------- | ----------- |
| `font-size`                 | 1rem/16px   |
| `font-weight`               | 400         |


### Border

| Property                      | Element                      |  Value      |
| ----------------------------- | ----------------             | ----------- |
| `border-bottom`               | `link` container (on hover)  |   1px       |


## Icon Usage

An icon can be used either in the normal or underlined mode to represent more graphical the purpose of the link, placing the icon before or after the link that is representing.

![Icon usage for the link component](images/link_icon.png)

_Icon usage for the link component_

### Icon specs

| Property                      | Element                |  Value      |
| ----------------------------- | ----------------       | ----------- |
| `height/width`                |  icon                  |   16/16px   |
| `padding-left`                |  icon                  |   4px       |

### User Interface Design Considerations

- Provide visual cue to suggest clickability for all types of links
- Distinguish the visited and unvisited for navigation links
- Clearly explain where the link will take you to
- Front-load the most relevant keyword

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/7d626918-c972-43d1-86f1-a0eb6f4ae0c4/variables/

