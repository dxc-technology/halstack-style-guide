# Colors

![Screen Shot 2021-04-15 at 12 50 25](https://user-images.githubusercontent.com/44420072/114857941-27774200-9de9-11eb-9884-5a006e1378e6.png)



Color is a key design element that helps in guiding the user's perception order. For example, strong colors (e.g. DXC Purple) must be used in Call to Actions (CTAs) or highly interactive components, while other lighter colors (e.g. DXC Light Grey) are assigned to elements with lower relevance in the visual interface. When UI components follow a well defined hierarchy and they are aligned with good design practices, they contribute to create a compelling, effective, and usable digital product. Every detail counts.

Also, there are other colors beyond DXC's default palette allowed in Halstack Design System. These are standard red, green, blue, and amber colors used in our User Feedback components such as error messages, alerts, and information boxes. However, these colors must not be used outside this context in other components.

Finally, Halstack Design System caters for some calculated variations of the primary palette (e.g. tints and shades) to be applied into the secondary modes of some UI components. This is because we believe that these calculated variations don't alter the proposed visual language and the overall visual attributes of the components.

## Color Tokens

### Color palette

#### Greyscale

| Name                | Value (HEX)  | Value (hsl)      | 
| :---                | :---         | :---             |
| `Hal-Black`         | #000000      | (0, 0%, 0%)      |
| `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `Hal-Grey-L-95`     | #f2f2f2      | (0, 0%, 95%)     |
| `Hal-Grey-L-75`     | #bfbfbf      | (0, 0%, 75%)     |
| `Hal-Grey-L-60`     | #999999      | (0, 0%, 60%)     |
| `Hal-Grey-S-40`     | #666666      | (0, 0%, 40%)     |
| `Hal-Black`         | #000000      | (0, 0%, 0%)      |


#### Purple

| Name                | Value (HEX)  | Value (hsl)      | 
| :---                | :---         | :---             |
| `Hal-Purple-L-95`   | #f5ebf9      | (283, 53%, 95%)  |
| `Hal-Purple-L-90`   | #ead8f3      | (280, 53%, 90%)  |
| `Hal-Purple-S-37`   | #6f2c91      | (280, 53%, 37%)  |
| `Hal-Purple-D-30`   | #5a2475      | (280, 53%, 30%)  |


#### Blue

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Blue-L-50`     | #0095ff      | (205, 100%, 50%) |
| `Hal-Blue-S-35`     | #0067b3      | (205, 100%, 35%) |
| `Hal-Blue-D-20`     | #003c66      | (205, 100%, 20%) |

#### Red

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Red-S-41`      | #d0011b      | (352, 99%, 41%)  |
| `Hal-Red-D-30`      | #980115      | (352, 99%, 30%)  |

#### Green

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Green-S-39`    | #24a148      | (137, 63%, 39%)  |

#### Yellow

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Yellow-S-57`   | #f7cf2b      | (48, 93%, 57%)   |



### Color usage

| Token                       | Description                                   | Name                | 
| :---                        | :---                                          | :---                |  
| `ui-background-01`          | _Default page background_                     | `Hal-White`         | 
| `ui-background-02`          | _Alternate page background_                   | `Hal-Grey-L-95`     | 
| `interactive-01`            | _Primary interactive color_                   | `Hal-Purple-S-37`   | 
| `interactive-02`            | _Secondary interactive color_                 | `Hal-Blue-S-30`     | 
| `danger-01`                 | _Danger button variant_                       | `Hal-Red-S-41`      | 
| `container-background-01`   | _Primary background color on containers_      | `Hal-Purple-S-37`   | 
| `container-background-02`   | _Background color on light containers_        | `Hal-White`         | 
| `container-background-03`   | _Background color on dark containers_         | `Hal-Black`         | 
| `text-01`                   | _Primary text_                                | `Hal-Black`         | 
| `text-02`                   | _Secondary text_                              | `Hal-Grey-S-40`     | 
| `text-03`                   | _Text on dark backgrounds_                    | `Hal-White`         | 
| `text-error`                | _Error messages_                              | `Hal-Red-S-41`      | 
| `link-01`                   | _Primary link color_                          | `H-Blue-L-50`       | 
| `link-02`                   | _Secondary link color_                        | `Hal-Blue-S-35`     | 
| `icon-01`                   | _Primary con color_                           | `Hal-Purple-S-37`   | 
| `icon-02`                   | _Icon color on light background_              | `Hal-Black`         | 
| `icon-03`                   | _Icon color on dark background_               | `Hal-White`         | 
| `feedback-error`            | _Error_                                       | `Hal-Red-S-41`      | 
| `feedback-success`          | _Success_                                     | `Hal-Green-S-39`    | 
| `feedback-warning`          | _Warning_                                     | `Hal-Yellow-S-57`   | 
| `feedback-info`             | _Info_                                        | `Hal-Blue-L-50`     | 
| `ui-overlay`                | _Background overlay_                          | `Hal-Black`         | 
| `ui-line`                   | _dividers; underline_                         | `Hal-Grey-L-75`     | 
| `focus-01`                  | _Primary focus underline/outline_             | `Hal-Purple-S-37`   | 
| `focus-02`                  | _Secondary focus underline/outline_           | `Hal-Blue-S-35`     | 
| `hover-01`                  | _Hover primary on light color_                | `Hal-Purple-L-95`   | 
| `hover-02`                  | _Hover primary on dark color_                 | `Hal-Purple-D-30`   | 
| `hover-03`                  | _Tertiary hover color_                        | `Hal-Black`         | 
| `hover-background`          | _Background hover color on light containers_  | `Hal-Grey-L-95`     | 
| `hover-background-selected` | _hover on selected background color_          | `Hal-Grey-L-60`     | 
| `hover-danger`              | _Danger hover color_                          | `Hal-Red-D-30`      | 
| `pressed-01`                | _Pressed primary on light color_              | `Hal-Purple-L-95`   | 
| `pressed-02`                | _Pressed primary on dark color_               | `Hal-Purple-D-20`   | 
| `pressed-03`                | _Pressed secondary color_                     | `Hal-Blue-D-20`     | 
| `pressed-danger`            | _Danger pressed color_                        | `Hal-Red-D-20`      | 
| `selected-background`       | _Background selected color_                   | `Hal-Grey-L-75`     | 
| `disabled-01`               | _Background disabled color_                   | `Hal-Grey-L-95`     | 
| `disabled-02`               | _Text disabeld color_                         | `Hal-Grey-L-75`     | 
| `link-visited`              | _Visited link color_                          | `Hal-Purple-S-37`   | 
