# Bread crumbs

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

In simple terms, a breadcrumb is a footprint that helps a visitor navigate a website in an organized way.
In technical terms, a breadcrumb is a navigational element used to indicate the current page the user is relative to the page's hierarchy.
Breadcrumbs never cause problems in user testing; people might overlook this small design element, but they never misinterpret breadcrumb trails or have trouble operating them.


## Usage

- Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.
- Only use breadcrumb navigation if it makes sense for your site's structure which can be 3 levels of hierarchy, more then that it can be in dropdown. 
- Include the full navigational path in your breadcrumb navigation. it should be clean and uncluttered in application hierarchy.
- Progress from highest level to lowest.
- Keep your breadcrumb titles consistent with your page titles.



## States

The states are the different behaviors of the button component based on the interaction of the user.
Different states for the component are below

### Breadcrumb path order
![Breadcrumbs component states](images/breadcrumbs_states.png "Breadcrumbs component states")
_Breadcrumbs component states_


### Breadcrumbs dropdown
![Breadcrumbs component breadcrumbs_states_dropdown](images/breadcrumbs_states_dropdown.png "Breadcrumbs component breadcrumbs_states_dropdown")
_Breadcrumbs component breadcrumbs_states_dropdown_


## Anatomy
### Placement
Breadcrumbs are placed in the top left portion of the page. They sit underneath the header and navigation, but above the page title.

![Example of the breadcrumbs component anatomy](images/breadcrumbs_anatomy.png "Example of the breadcrumbs component anatomy")
_Example of the breadcrumbs component anatomy_

1. **Breadcrumbs dropdown**
2. **Separator**
3. **Breadcrumbs path**
4. **Breadcrumbs expanded list**


## Location Based
These illustrate the site’s hierarchy and show the user where they are within that hierarchy.
Location-based breadcrumbs are a representation of a site’s structure. They help visitors understand and navigate your site’s hierarchy, which has multiple levels (usually more than two levels). This type of breadcrumb is very supportive for visitors who enters the site on a deeper level from an external source (e.g. search engine results).


## Design specifications

The design specifications section provides developers the information needed to apply the correct visual properties of the component.

![Design specifications for Breadcrumbs component](images/breadcrumbs_specs.png "Design specifications for Breadcrumbs component")
_Design specifications for Breadcrumbs component_

### Color
 
 ##### Base

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `primaryBackgroundColor`            | Button container            | `Hal-White`              | #ffffff     |
| `primaryFontColor`                  | Label                       | `Hal-Grey-S-40`            | #666666     | 

 ##### Interactive

| Component token                     | Element                     | Token                    | Value       |
| :---------------------------------- | :-------------------------- | :----------------------- | :---------- |
| `primaryActiveBackgroundColor`      | Container fill:active	    | `Hal-White`       | #ffffff     |
| `primaryHoverFontColor`             | Label:hover                 | `Hal-Purple-S-38`            | #7D2FD0     |
| `primaryActiveFontColor`            | Label:active                | `Hal-Grey-S-40`            | #666666      |



### Typography

| Property            | Value     |
| ------------------  | --------- |
| `font-size`         | 1rem/16px |
| `font-weight`       |       400 |
| `line-height`       |     1.5em |

### Padding

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



### Spacing



## Accesibility

Add WCAG success criterion and WAI-ARIA design pattern and example when available

### WCAG 

* Understanding WCAG 2.2 - [SC x.x name of the succes criterion](url)

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [x.x title of the section](url)
* WAI-ARIA Authoring practices 1.2 - ["Name" design pattern](url)



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

