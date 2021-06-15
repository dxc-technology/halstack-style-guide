# Image usage

Images are used all across the design system documentation:

* [Creating and exporting images](#creating-and-exporting-images)
     * [Sizes](#sizes)
     * [Background](#background)
     * [Format](#format)
     * [Naming](#naming)

* [Include images in the documentation markdown](#include-images-in-the-documentation-markdown)
     * [Image URL](#image-url)
     * [Alternative text](#alternative-text)

## Creating and exporting images

### Sizes

| Width (px)    | Item         | Purpose                                                       |
| ------------- | ------------ |-----------------------------------------------------------    |
| 272           | `miniature`  | component miniature                                           |
| 960           | `half`       | Half width image, small components and cropped images         |
| 1440          | `medium`     | Medium width image, standard components                       |
| 1920          | `large`      | Large width image, large components or big number of items    |

### Background

| value         | Item                       |
| ------------- | -------------------------- |
| transparent   | `miniature`                | 
| #fafafa       | `half`, `medium`, `large`  | 

### Format

Images can be exported in `PNG`, `SVG` formats

### Naming

In order to improve the consistency and the readability across the multiple files follow always the same naming convention.

#### Component images

For images updated or added to an existing/new component:

```
component_name.png 
```

![Example of the images folder of the select component](images/image/naming_example.png)

_Example of the images folder of the select component_

## Include images in the documentation markdown

### Image URL

Link the images to the page images folder:

```
![](images/your_image_name.png)
```

### Alternative text

Always provide an alternative text in the images for accessibility purposes:

```
![alt text goes here](image URL goes here)
```

Add also a caption below the image matching the `Alt text` used:

```
![alt text goes here](image URL goes here)

_caption matching the alt text goes here_
```





