# Color


![DXC Colors](images/color_overview.png)

_Base Halstack core colors_

**The color palette is an essential asset as a communication resource of our design system.**

Halstack color palette brings a unified consistency and helps in guiding the user's perception order. Our color palette is based in the [HSL model](https://en.wikipedia.org/wiki/HSL_and_HSV#:~:text=The%20HSL%20representation%20models%20the,paint%20corresponds%20to%20a%20high%20%22) and the light (L) and dark (D) varianst are calculated changing the lightness value of the standard (S) DXC palette colors.


## Color Tokens

Halstack uses tokens to manage color. Appart from a multi-purpose greyscale family, purple and blue are the core color families used in our set of components. Additional families as red, green and yellow help as feedback role-based color palettes and must not be used outside this context.

### Core color tokens

![Color families](images/color_families.png)

_Core color families and lightness values_

#### Greyscale

| Name                | Value (HEX)  | Value (hsl)      | 
| :---                | :---         | :---             |
| `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `Hal-Grey-L-95`     | #f2f2f2      | (0, 0%, 95%)     |
| `Hal-Grey-L-75`     | #bfbfbf      | (0, 0%, 75%)     |
| `Hal-Grey-L-60`     | #999999      | (0, 0%, 60%)     |
| `Hal-Grey-S-40`     | #666666      | (0, 0%, 40%)     |
| `Hal-Black`         | #000000      | (0, 0%, 0%)      |



#### Purple

The core Purple family serves as the primary action color.


| Name                | Value (HEX)  | Value (hsl)      | 
| :---                | :---         | :---             |
| `Hal-Purple-L-95`   | #f5ebf9      | (283, 53%, 95%)  |
| `Hal-Purple-L-90`   | #ead8f3      | (280, 53%, 90%)  |
| `Hal-Purple-S-37`   | #6f2c91      | (280, 53%, 37%)  |
| `Hal-Purple-D-30`   | #5a2475      | (280, 53%, 30%)  |
| `Hal-Purple-D-20`   | #3c184e      | (280, 53%, 20%)  |


#### Blue

The core Blue family serves as the accent color.

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Blue-L-95`     | #e6f4ff      | (205, 100%, 95%) |
| `Hal-Blue-L-80`     | #99d5ff      | (205, 100%, 80%) |
| `Hal-Blue-L-50`     | #0095ff      | (205, 100%, 50%) |
| `Hal-Blue-S-35`     | #0067b3      | (205, 100%, 35%) |
| `Hal-Blue-D-20`     | #003c66      | (205, 100%, 20%) |



#### Red

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Red-L-95`      | #ffe6e9      | (352, 99%, 95%)  |
| `Hal-Red-L-80`      | #fe9aa7      | (352, 99%, 80%)  |
| `Hal-Red-S-41`      | #d0011b      | (352, 99%, 41%)  |
| `Hal-Red-D-30`      | #980115      | (352, 99%, 30%)  |
| `Hal-Red-D-20`      | #65010e      | (352, 99%, 20%)  |

#### Green

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Green-L-95`    | #eafaef      | (137, 63%, 95%)  |
| `Hal-Green-L-80`    | #acecbe      | (137, 63%, 80%)  |
| `Hal-Green-S-39`    | #24a148      | (137, 63%, 39%)  |
| `Hal-Green-D-30`    | #1c7d38      | (137, 63%, 30%)  |
| `Hal-Green-D-20`    | #135325      | (137, 63%, 20%)  |


#### Yellow

| Name                | Value (HEX)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Yellow-L-95`   | #fef9e6      | (48, 93%, 95%)   |
| `Hal-Yellow-L-80`   | #fbe89d      | (48, 93%, 80%)   |
| `Hal-Yellow-S-57`   | #f7cf2b      | (48, 93%, 57%)   |
| `Hal-Yellow-D-40`   | #c59f07      | (48, 93%, 40%)   |
| `Hal-Yellow-D-30`   | #947705      | (48, 93%, 30%)   |




### Color usage tokens

The color-usage tokens are a role-based and specify the core tokens that serve those roles in the UI. We use the core families mostly for enabled states, for other states (e.g. hover, pressed, disabled) or purpose every light or dark family variant is used. 



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

## Data visualization colors

> To do section


## Accesibility

> To do section
