# Typography

![Typographyu overview](images/typography_overview.png)

## Typography hierarchy
Our selected typography helps in structuring our user's experience based on the visual impact that it has on the user interface content. 
It defines what is the first noticeable piece of information or data based on the font shape, size, color, 
or type and it highlights some pieces of text over the rest. Some typographic elements used in Halstack Design System include headers, 
body, taglines, captions, and labels.

Make sure you include all the different typographic variants in order to enhance the application's content structure, including the Heading component which defines different levels of page and section titles



## Font family

For our sans-serif `font-family`, we use the humanist typeface Open Sans, designed by Steve Matteson and licensed under the [Apache License, Version 2.0.](https://www.apache.org/licenses/LICENSE-2.0.html)

| Token                       | Description                                   | Property            | Value                        | 
| :---                        | :---                                          | :---                | :---                         |  
| `type-sans`                 | _Default font family sans-serif_              | `font-family`       | 'Open Sans', sans-serif;     | 

## Weight

In order to add contrast between typographic elements in the UI, Halstack uses four different and well balanced `font-weight` values.

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-light`                | _Set font weight as light (300)_              | `font-weight`       | 300          | 
| `type-regular`              | _Set font weight as regular (400)_            | `font-weight`       | 400          | 
| `type-semibold`             | _Set font weight as semibold (600)_           | `font-weight`       | 600          | 
| `type-bold`                 | _Set font weight as bold (700)_               | `font-weight`       | 700          | 


## Scale

As we approached the foundational elements with simplification and standardization in mind, the typographic scale is one of the most important elements to create hierarchy. Our type scale provides eight relative values based on a root font size of 16px, making it scalable and accesible. 

### Base

| Token                       | Description                                   | Property            | Value(px)   | 
| :---                        | :---                                          | :---                | :---        |  
| `type-scale-root`           | _Set the root font size_                      | `font-size`         | 16          |

### Type scale

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

## Formatting

### Style

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-italic`               | _Set font style as italic_                    | `font-style`        | italic       | 
| `type-normal`               | _Set font style as normal_                    | `font-style`        | normal       | 

### Letter spacing

We calibrate our `letter-spacing` at large scales to provide a better legibility and readability of our text.

| Token                       | Description                                   | Property            | Value(em)    | 
| :---                        | :---                                          | :---                | :---         | 
| `type-spacing-tight-02`     | _Set letter spacing as -0.025em_              | `letter-spacing`    | -0.025       |
| `type-spacing-tight-01`     | _Set letter spacing as -0.0125em_             | `letter-spacing`    | -0.0125      |
| `type-spacing-normal`       | _Set letter spacing as 0em_                   | `letter-spacing`    | 0            | 
| `type-spacing-wide-01`      | _Set letter spacing as 0.025em_               | `letter-spacing`    | 0.025        |
| `type-spacing-wide-02`      | _Set letter spacing as 0.05em_                | `letter-spacing`    | 0.05         |
| `type-spacing-wide-03`      | _Set letter spacing as 0.1em_                 | `letter-spacing`    | 0.1          | 

### Leading

We use a ratio of 1:1.5 as a standard `line-height` value. A body font of 16px (1rem) returns a value of 24px (1.5rem), which is the main reference measurement for the vertical organization.

| Token                       | Description                                   | Property            | Value(em)    | 
| :---                        | :---                                          | :---                | :---         | 
| `type-leading-compact-03`   | _Set line height as 1em_                      | `line-height`       | 1            | 
| `type-leading-compact-02`   | _Set line height as 1.25em_                   | `line-height`       | 1.25         |
| `type-leading-compact-01`   | _Set line height as 1.365em_                  | `line-height`       | 1.365        |
| `type-leading-normal`       | _Set line height as 1.5em_                    | `line-height`       | 1.5          |
| `type-leading-loose-01`     | _Set line height as 1.75em_                   | `line-height`       | 1.75         |
| `type-leading-loose-02`     | _Set line height as 2em_                      | `line-height`       | 2            |
 

### Capitalization

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-initial`              | _Preserve default value_                      | `text-transform`    | initial      | 
| `type-uppercase`            | _Transform text to uppercase_                 | `text-transform`    | uppercase    |

### Text decoration

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         | 
| `type-no-line`              | _Unset all present decorations_               | `text-decoration`   | none         | 
| `type-underline`            | _Underline the text_                          | `text-decoration`   | underline    | 
| `type-line-through`         | _Put a strikethrough the text_                | `text-decoration`   | line-through |

## Type styles

## Headings

**`headings-h1`**

```
headings-h1: {
  font-family:      type-sans;
  font-weight:      type-light;
  font-size:        type-scale-08; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-tight-01;
  line-height:      type-leading-compact-01;  
}
```

**`headings-h2`**

```
headings-h2: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-07; 
  font-style:       type-normal;
  text-transform:   initial; 
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-compact-01;  
}
```

**`headings-h3`**

```
headings-h3: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-06; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal; 
}
```

**`headings-h4`**

```
headings-h4: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-05; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal; 
}
```

**`headings-h5`**

```
headings-h5: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-04; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal; 
}
```

## Body

**`body-01`**

```
body-01: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-03; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal; 
}
```
**`body-02`**

```
body-02: {
  font-family:      type-sans;
  font-weight:      type-semibold;
  font-size:        type-scale-03; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal; 
}
```
**`body-03`**

```
body-03: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-02; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal;
}
```

**`body-04`**

```
body-04: {
  font-family:      type-sans;
  font-weight:      type-semibold;
  font-size:        type-scale-02; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal;
}
```

## Additional styles

**`caption`**

```
caption: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-01; 
  font-style:       type-italic;
  text-transform:   initial;
  letter-spacing:   type-spacing-normal;
  line-height:      type-leading-normal;
}
```

**`overline`**

```
overline: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-02; 
  font-style:       type-normal;
  text-transform:   uppercase;
  letter-spacing:   type-spacing-wide-02;
  line-height:      type-leading-normal;
}
```
____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/principles/typography/README.md)
