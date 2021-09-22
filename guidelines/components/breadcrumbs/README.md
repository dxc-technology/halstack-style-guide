# Breadcrumbs

The breadcrumbs component is a navigational element that help users to understand where they are within a website’s structure and move between levels. The component is location based, illustrates the hierarchy of the page.


## Usage

- Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.
- Only use breadcrumb navigation when your site page depth is bigger than 3. 
- Include the full navigational path in your breadcrumb navigation. It should be clean and uncluttered in application hierarchy.
- Progress from highest level to lowest.
- Keep your breadcrumb titles consistent with your page titles.



## States

The states are the different behaviors of the button component based on the interaction of the user.
Different states for the component are below

### Breadcrumb path link
![Breadcrumbs path link element states](images/breadcrumbs_states.png "Breadcrumbs component states")

_Breadcrumbs path link element states_


### Breadcrumbs dropdown
![Breadcrumbs dropdown item_states](images/breadcrumbs_states_dropdown.png "Breadcrumbs component breadcrumbs_states_dropdown")

_Breadcrumbs dropdown item_states_


## Anatomy

![Example of the breadcrumbs component anatomy](images/breadcrumbs_anatomy.png "Example of the breadcrumbs component anatomy")

1. **Breadcrumbs dropdown**
2. **Separator**
3. **Breadcrumbs path**
4. **Breadcrumbs expanded list**

## Placement

Breadcrumbs are placed in the top left portion of the page. They sit underneath the header and navigation, but above the page title.

![Image example of the placement]()



## Design specifications

![Design specifications for Breadcrumbs component](images/breadcrumbs_specs.png "Design specifications for Breadcrumbs component")

_Design specifications for Breadcrumbs component_

### Color
 
##### Base

| Component token                     | Element                     | Token                       | Value       |
| :---------------------------------- | :-------------------------- | :-------------------------- | :---------- |
| `FontColor`                         | Path link                   | `color-grey-700`            | #666666     | 



 ##### Interactive

| Component token                      | Element                     | Token                       | Value       |
| :----------------------------------- | :-------------------------- | :-------------------------- | :---------- |
| `unselectedFontColor`                | Path link                   | `color-grey-700`            | #666666     | 
| `unselectedHoverFontColor`           | Path link:hover             | `color-purple-600`          | #7d2fd0     | 
| `unselectedActiveFontColor`          | Path link:active            | `color-purple-700`          | #5f249f     | 
| `selectedFontColor`                  | Path link                   | `color-purple-700`          | #5f249f     | 
| `selectedHoverFontColor`             | Path link:hover             | `color-purple-600`          | #7d2fd0     |  
| `focusColor`                         | Path link:focus             | `color-blue-600`            | #0095ff     | 

### Typography

| Component token                      | Element                     | Token                       | Value       |
| :----------------------------------- | :-------------------------- | :-------------------------- | :---------- |
| `FontFamily`                         | Path link                   | `font-family-sans`          | 'Open Sans', sans-serif | 
| `FontSize`                           | Path link                   | `font-scale-03`             | 1rem / 16px | 
| `FontWeight`                         | Path link                   | `font-weight-regular`       | 400         |  
| `unselectedActiveFontWeight`         | Path link:active            | `font-weight-semibold`      | 600         | 
| `selectedFontWeight`                 | Path link                   | `font-weight-semibold`      | 600         | 
| `LineHeight`                         | Path link                   | `font-leading-normal`       | 1.5rem      | 


### Spacing

| Property            | Value     |
| ------------------  | --------- |
| `padding-right`     |      8px |
| `padding-left`      |      8px |

### Border

| Property            | Value     |
| ------------------  | --------- |
| `border-radius`     |       4px |
| `border-width`      |       1px |
| `border-width` focus outline      |       2px |




## Accesibility

### WCAG 

* Understanding WCAG 2.2 - [SC 2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)
* Understanding WCAG 2.2 - [SC 2.4.8 Location](https://www.w3.org/WAI/WCAG22/Understanding/location.html)
* Understanding WCAG 2.2 - [SC 3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation)

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [Breadcrumb design pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#breadcrumb)
* WAI-ARIA Authoring practices 1.2 - [Breadcrumb Example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/breadcrumb/index.html)


## Best Practices

Breadcrumbs as an additional navigation
Don’t link current page in breadcrumb navigation
Use separators
Select size & padding
Don’t make it the focal point of the design
Breadcrumbs should display the current location in the site’s hierarchical structure, not the session history



## Links and references

* [Angular CDK component](url)
* [React CDK component](url)

____________________________________________________________

* [Edit this page on GitHub](url)

