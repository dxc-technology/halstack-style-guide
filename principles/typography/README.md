# Typography

![Screen Shot 2021-04-16 at 11 12 12](https://user-images.githubusercontent.com/44420072/115002049-99f92800-9ea4-11eb-982f-fff2155212eb.png)

## Typography hierarchy
Our selected typography helps in structuring our user's experience based on the visual impact that it has on the user interface content. 
It defines what is the first noticeable piece of information or data based on the font shape, size, color, 
or type and it highlights some pieces of text over the rest. Some typographic elements used in Halstack Design System include headers, 
body, taglines, captions, and labels. Our design system leverages Open Sans font and all its variants that cover all the needs and requirements mentioned above. 
Make sure you include all the different typographic variants in order to enhance the application's content structure, including the Heading component which defines different levels of page and section titles

## Core tokens

### Family

| Token                       | Description                                   | Property            | Value                        | 
| :---                        | :---                                          | :---                | :---                         |  
| `type-sans`                 | _Default font family sans-serif_              | `font-family`       | 'Open Sans', sans-serif;     | 

### Weight

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-light`                | _Set font weight as light (300)_              | `font-weight`       | 300          | 
| `type-regular`              | _Set font weight as regular (400)_            | `font-weight`       | 400          | 
| `type-semibold`             | _Set font weight as semibold( 600)_           | `font-weight`       | 600          | 


### Scale

| Token                       | Description                                   | Property            | Value(px)    | 
| :---                        | :---                                          | :---                | :---         |  
| `type-scale-01`             | _Set the font size as 12px_                   | `font-size`         | 12           |       
| `type-scale-02`             | _Set the font size as 14px_                   | `font-size`         | 14           | 
| `type-scale-03`             | _Set the font size as 16px_                   | `font-size`         | 16           | 
| `type-scale-04`             | _Set the font size as 20px_                   | `font-size`         | 20           | 
| `type-scale-05`             | _Set the font size as 24px_                   | `font-size`         | 24           | 
| `type-scale-06`             | _Set the font size as 34px_                   | `font-size`         | 34           | 
| `type-scale-07`             | _Set the font size as 48px_                   | `font-size`         | 48           | 
| `type-scale-08`             | _Set the font size as 60px_                   | `font-size`         | 60           | 

### Style

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-italic`               | _Set font style as italic_                    | `font-style`        | italic       | 
| `type-normal`               | _Set font style as normal_                    | `font-style`        | normal       | 

### line height

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         | 
| `type-spacing-01`           | _Set letter spacing as normal_                | `letter-spacing`    | normal       | 
| `type-spacing-02`           | _Set letter spacing as 0.1_                   | `letter-spacing`    | 0.1          | 
| `type-spacing-03`           | _Set letter spacing as 0.15_                  | `letter-spacing`    | 0.15         | 
| `type-spacing-04`           | _Set letter spacing as 0.25_                  | `letter-spacing`    | 0.25         | 
| `type-spacing-05`           | _Set letter spacing as 0.4_                   | `letter-spacing`    | 0.4          |
| `type-spacing-06`           | _Set letter spacing as 0.5_                   | `letter-spacing`    | 0.5          |
| `type-spacing-07`           | _Set letter spacing as 0.2_                   | `letter-spacing`    | 2            | 

### Capitalization

| Token                       | Description                                   | Property            | Value        | 
| :---                        | :---                                          | :---                | :---         |  
| `type-initial`              | _Preserve default value_                      | `text-transform`    | initial      | 
| `type-uppercase`            | _Transform text to uppercase_                 | `text-transform`    | uppercase    |

## Type styles

## Headings

**`headings-h1`**

```
headings-h1: {
  font-family:      type-sans;
  font-weight:      type-regular;
  font-size:        type-scale-08; 
  font-style:       type-normal;
  text-transform:   initial;
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-01;
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
  letter-spacing:   type-spacing-07;
}
```
