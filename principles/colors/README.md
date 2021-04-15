# Colors

![Screen Shot 2021-04-15 at 12 50 25](https://user-images.githubusercontent.com/44420072/114857941-27774200-9de9-11eb-9884-5a006e1378e6.png)



Color is a key design element that helps in guiding the user's perception order. For example, strong colors (e.g. DXC Purple) must be used in Call to Actions (CTAs) or highly interactive components, while other lighter colors (e.g. DXC Light Grey) are assigned to elements with lower relevance in the visual interface. When UI components follow a well defined hierarchy and they are aligned with good design practices, they contribute to create a compelling, effective, and usable digital product. Every detail counts.

Also, there are other colors beyond DXC's default palette allowed in Halstack Design System. These are standard red, green, blue, and amber colors used in our User Feedback components such as error messages, alerts, and information boxes. However, these colors must not be used outside this context in other components.

Finally, Halstack Design System caters for some calculated variations of the primary palette (e.g. tints and shades) to be applied into the secondary modes of some UI components. This is because we believe that these calculated variations don't alter the proposed visual language and the overall visual attributes of the components.

## Color Tokens


| Token                       | Description                                   | Name                | Value (HEX)  | Value (hsl)      | 
| :---                        | :---                                          | :---                | :---         | :---             |       
| `ui-background-01`          | _Default page background_                     | `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `ui-background-02`          | _Alternate page background_                   | `H-Grey-L-95`       | #f2f2f2      | (0, 0%, 95%)     |
| `interactive-01`            | _Primary interactive color_                   | `Hal-Purple-S-37`   | #6f2c91      | (280, 53%, 37%)  |
| `interactive-02`            | _Secondary interactive color_                 | `Hal-Blue-S-30`     | #0067b3      | (205, 100%, 35%) |
| `danger-01`                 | _Danger button variant_                       | `Hal-Red-S-41`      | #d0011b      | (352, 99%, 41%)  |  
| `container-background-01`   | _Background color on light containers_        | `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `container-background-02`   | _Background color on dark containers_         | `Hal-Purple-S-37`   | #6f2c91      | (280, 53%, 37%)  |
| `text-01`                   | _Primary text_                                | `Hal-Black`         | #000000      | (0, 0%, 0%)      |
| `text-02`                   | _Secondary text_                              | `Hal-Grey-S-40`     | #666666      | (0, 0%, 40%)     |
| `text-03`                   | _Text on dark backgrounds_                    | `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `text-error`                | _Error messages_                              | `Hal-Red-S-41`      | #d0011b      | (352, 99%, 41%)  |
| `link-01`                   | _Primary link color_                          | `H-Blue-L-50`       | #0095ff      | (205, 100%, 50%) |
| `icon-01`                   | _Icon color on light background_              | `Hal-Black`         | #000000      | (0, 0%, 0%)      |
| `icon-02`                   | _Icon color on dark background_               | `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `feedback-error`            | _Error_                                       | `Hal-Red-S-41`      | #d0011b      | (352, 99%, 41%)  |
| `feedback-success`          | _Success_                                     | `Hal-Green-S-39`    | #24a148      | (137, 63%, 39%)  |
| `feedback-warning`          | _Warning_                                     | `Hal-Yellow-S-57`   | #f7cf2b      | (48, 93%, 57%)   |
| `feedback-info`             | _Info_                                        | `H-Blue-L-50`       | #0095ff      | (205, 100%, 50%) |
| `overlay`                   | _Background overlay_                          | `Hal-Black`         | #000000      | (0, 0%, 0%)      |
| `focus-01`                  | _Primary focus underline/outline_             | `Hal-Purple-S-37`   | #6f2c91      | (0, 0%, 0%)      |
| `focus-02`                  | _Secondary focus underline/outline_           | `Hal-Blue-S-30`     | #0067b3      | (205, 100%, 35%) |
| `hover-01`                  | _Primary hover color_                         | `Hal-Purple-L-95`   | #f5ebf9      | (283, 54%, 95%)  |
| `hover-02`                  | _Secondary hover color_                       | `Hal-Purple-D-30`   | #5a2475      | (280, 53%, 30%)  |
| `hover-03`                  | _Tertiary hover color_                        | `Hal-Black`         | #000000      | (0, 0%, 0%)      |
| `hover-background-01`       | _Background hover color on light containers_  | `H-Grey-L-95`       | #f2f2f2      | (0, 0%, 95%)     |
| `hover-danger`              | _Danger hover color_                          | `Hal-Red-D-30`      | #980115      | (352, 99%, 30%)  |
| `pressed-01`                | _Pressed primary color_                       | `Hal-Purple-L-95`   | #f5ebf9      | (283, 54%, 95%)  |
| `pressed-02`                | _Pressed secondary color_                     | `Hal-Purple-D-20`   | #3c184e      | (280, 53%, 20%)  |
| `pressed-background-01`     | _Background pressed color on light containers_| `H-Grey-L-95`       | #f2f2f2      | (0, 0%, 95%)     |
| `pressed-danger`            | _Danger pressed color_                        | `Hal-Red-D-20`      | #65010e      | (352, 99%, 20%)  |
| `disabled-01`               | _Background disabled color_                   | `Hal-Grey-L-95`     | #f2f2f2      | (0, 0%, 95%)     |
| `disabled-02`               | _Text disabeld color_                         | `Hal-Grey-L-75`     | #bfbfbf      | (0, 0%, 75%)     |
| `link-visited`              | _Visited link color_                          | `Hal-Purple-S-37`   | #6f2c91      | (280, 53%, 37%)  |
