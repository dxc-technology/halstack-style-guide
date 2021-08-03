# Design Tokens

## Color

### Greyscale

| Name                | Value (hex)  | Value (hsl)      | 
| :---                | :---         | :---             |
| `Hal-White`         | #ffffff      | (0, 0%, 100%)    |
| `Hal-Grey-L-95`     | #f2f2f2      | (0, 0%, 95%)     |
| `Hal-Grey-L-90`     | #e6e6e6      | (0, 0%, 90%)     |
| `Hal-Grey-L-80`     | #cccccc      | (0, 0%, 80%)     |
| `Hal-Grey-L-75`     | #bfbfbf      | (0, 0%, 75%)     |
| `Hal-Grey-L-60`     | #999999      | (0, 0%, 60%)     |
| `Hal-Grey-S-40`     | #666666      | (0, 0%, 40%)     |
| `Hal-Black`         | #000000      | (0, 0%, 0%)      |



### Purple

The core Purple family serves as the primary action color.


| Name                | Value (hex)  | Value (hsl)      | 
| :---                | :---         | :---             |
| `Hal-Purple-L-95`   | #f2eafa      | (269, 63%, 95%)  |
| `Hal-Purple-L-90`   | #e5d5f6      | (269, 63%, 90%)  |
| `Hal-Purple-L-65`   | #a46ede      | (269, 63%, 65%)  |
| `Hal-Purple-S-38`   | #5f249f      | (269, 63%, 38%)  |
| `Hal-Purple-D-30`   | #4b1c7d      | (269, 63%, 30%)  |
| `Hal-Purple-D-20`   | #321353      | (269, 63%, 20%)  |


### Blue

The core Blue family serves as the accent color.

| Name                | Value (hex)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Blue-L-95`     | #e6f4ff      | (205, 100%, 95%) |
| `Hal-Blue-L-80`     | #99d5ff      | (205, 100%, 80%) |
| `Hal-Blue-L-50`     | #0095ff      | (205, 100%, 50%) |
| `Hal-Blue-L-45`     | #0086e6      | (205, 100%, 45%) |
| `Hal-Blue-S-35`     | #0067b3      | (205, 100%, 35%) |
| `Hal-Blue-D-20`     | #003c66      | (205, 100%, 20%) |



### Red

| Name                | Value (hex)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Red-L-95`      | #ffe6e9      | (352, 99%, 95%)  |
| `Hal-Red-L-80`      | #fe9aa7      | (352, 99%, 80%)  |
| `Hal-Red-L-60`      | #fe344f      | (352, 99%, 60%)  |
| `Hal-Red-S-41`      | #d0011b      | (352, 99%, 41%)  |
| `Hal-Red-D-30`      | #980115      | (352, 99%, 30%)  |
| `Hal-Red-D-20`      | #65010e      | (352, 99%, 20%)  |

### Green

| Name                | Value (hex)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Green-L-95`    | #eafaef      | (137, 63%, 95%)  |
| `Hal-Green-L-80`    | #acecbe      | (137, 63%, 80%)  |
| `Hal-Green-S-39`    | #24a148      | (137, 63%, 39%)  |
| `Hal-Green-D-30`    | #1c7d38      | (137, 63%, 30%)  |
| `Hal-Green-D-20`    | #135325      | (137, 63%, 20%)  |


### Yellow

| Name                | Value (hex)  | Value (hsl)      |
| :---                | :---         | :---             |
| `Hal-Yellow-L-95`   | #fef9e6      | (48, 93%, 95%)   |
| `Hal-Yellow-L-80`   | #fbe89d      | (48, 93%, 80%)   |
| `Hal-Yellow-S-57`   | #f7cf2b      | (48, 93%, 57%)   |
| `Hal-Yellow-D-40`   | #c59f07      | (48, 93%, 40%)   |
| `Hal-Yellow-D-30`   | #947705      | (48, 93%, 30%)   |

### Orange

| Name                | Value (hex)  | Value (hsl)      |
| :---                | :---         | :---             |
| `H-Orange-S-54`     | #f38f20      | (32, 90%, 54%)   |

## Typography

### Font family

For our sans-serif `font-family`, we use the humanist typeface Open Sans, designed by Steve Matteson and licensed under the [Apache License, Version 2.0.](https://www.apache.org/licenses/LICENSE-2.0.html)

| Token                       | Description                                   | Property            | Value                        | 
| :---                        | :---                                          | :---                | :---                         |  
| `type-sans`                 | _Default font family sans-serif_              | `font-family`       | 'Open Sans', sans-serif;     | 

### Weight

In order to add contrast between typographic elements in the UI, Halstack uses four different and well balanced `font-weight` values.

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-light`                | _Set font weight as light (300)_              | `font-weight`       | 300          | 
| `type-regular`              | _Set font weight as regular (400)_            | `font-weight`       | 400          | 
| `type-semibold`             | _Set font weight as semibold (600)_           | `font-weight`       | 600          | 
| `type-bold`                 | _Set font weight as bold (700)_               | `font-weight`       | 700          | 


### Scale

As we approached the foundational elements with simplification and standardization in mind, the typographic scale is one of the most important elements to create hierarchy. Our type scale provides eight relative values based on a root font size of 16px, making it scalable and accesible. 

#### Base

| Token                       | Description                                   | Property            | Value(px)   | 
| :---                        | :---                                          | :---                | :---        |  
| `type-scale-root`           | _Set the root font size_                      | `font-size`         | 16          |

#### Type scale

| Token                       | Description                                   | Property            | Value(rem)   | 
| :---                        | :---                                          | :---                | :---         |  
| `type-scale-01`             | _Set the font size as 12px_                   | `font-size`         | 0.75         |       
| `type-scale-02`             | _Set the font size as 14px_                   | `font-size`         | 0.875        | 
| `type-scale-03`             | _Set the font size as 16px_                   | `font-size`         | 1            | 
| `type-scale-04`             | _Set the font size as 20px_                   | `font-size`         | 1.25         | 
| `type-scale-05`             | _Set the font size as 24px_                   | `font-size`         | 1.5          | 
| `type-scale-06`             | _Set the font size as 32px_                   | `font-size`         | 2            | 
| `type-scale-07`             | _Set the font size as 48px_                   | `font-size`         | 3            | 
| `type-scale-08`             | _Set the font size as 60px_                   | `font-size`         | 3.75         | 

### Formatting

#### Style

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-italic`               | _Set font style as italic_                    | `font-style`        | italic       | 
| `type-normal`               | _Set font style as normal_                    | `font-style`        | normal       | 

#### Letter spacing

We calibrate our `letter-spacing` at large scales to provide a better legibility and readability of our text.

| Token                       | Description                                   | Property            | Value(em)    | 
| :---                        | :---                                          | :---                | :---         | 
| `type-spacing-tight-02`     | _Set letter spacing as -0.025em_              | `letter-spacing`    | -0.025       |
| `type-spacing-tight-01`     | _Set letter spacing as -0.0125em_             | `letter-spacing`    | -0.0125      |
| `type-spacing-normal`       | _Set letter spacing as 0em_                   | `letter-spacing`    | 0            | 
| `type-spacing-wide-01`      | _Set letter spacing as 0.025em_               | `letter-spacing`    | 0.025        |
| `type-spacing-wide-02`      | _Set letter spacing as 0.05em_                | `letter-spacing`    | 0.05         |
| `type-spacing-wide-03`      | _Set letter spacing as 0.1em_                 | `letter-spacing`    | 0.1          | 

#### Leading

We use a ratio of 1:1.5 as a standard `line-height` value. A body font of 16px (1rem) returns a value of 24px (1.5rem), which is the main reference measurement for the vertical organization.

| Token                       | Description                                   | Property            | Value(em)    | 
| :---                        | :---                                          | :---                | :---         | 
| `type-leading-compact-03`   | _Set line height as 1em_                      | `line-height`       | 1            | 
| `type-leading-compact-02`   | _Set line height as 1.25em_                   | `line-height`       | 1.25         |
| `type-leading-compact-01`   | _Set line height as 1.365em_                  | `line-height`       | 1.365        |
| `type-leading-normal`       | _Set line height as 1.5em_                    | `line-height`       | 1.5          |
| `type-leading-loose-01`     | _Set line height as 1.75em_                   | `line-height`       | 1.75         |
| `type-leading-loose-02`     | _Set line height as 2em_                      | `line-height`       | 2            |
 

#### Capitalization

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-initial`              | _Preserve default value_                      | `text-transform`    | initial      | 
| `type-uppercase`            | _Transform text to uppercase_                 | `text-transform`    | uppercase    |

#### Text decoration

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         | 
| `type-no-line`              | _Unset all present decorations_               | `text-decoration`   | none         | 
| `type-underline`            | _Underline the text_                          | `text-decoration`   | underline    | 
| `type-line-through`         | _Put a strikethrough the text_                | `text-decoration`   | line-through |

## Spacing

The core spacing scale is used to create space relationships for detail-level designs.

| Token         | rem    | px   | 
| :---          | :---   | :--- | 
| `spacing-00`  | 0      | 0    | 
| `spacing-01`  | 0.125  | 2    | 
| `spacing-02`  | 0.25   | 4    | 
| `spacing-03`  | 0.5    | 8    | 
| `spacing-04`  | 0.75   | 12   | 
| `spacing-05`  | 1      | 16   | 
| `spacing-06`  | 1.5    | 24   | 
| `spacing-07`  | 2      | 32   | 
| `spacing-08`  | 2.5    | 40   | 
| `spacing-09`  | 3      | 48   | 
| `spacing-10`  | 3.5    | 56   | 
| `spacing-11`  | 4      | 64   | 
| `spacing-12`  | 5      | 80   |
| `spacing-13`  | 6      | 96   | 
| `spacing-14`  | 7      | 112  | 

