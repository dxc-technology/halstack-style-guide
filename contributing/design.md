# Design

## Halstack UI Kit

The Halstack UI Kit is available in two forms:

* [Public XD libary](https://shared-assets.adobe.com/link/732533f4-d925-487e-4761-9a760574cfac)
* [UI Kit versioned file](https://github.com/dxc-technology/halstack-style-guide/raw/master/Halstack%20UI-Kit/UI%20Kit-Halstack_v3.6.0.xd)

At the moment we only have built our library in Adobe XD, if you are interested in contributing by creating the library in another design tool we are delighted, please go to the ["Other contributions" section](#other-contributions) for more information.
## Reusing styles across XD documents

There are two options in order to reuse the styles:

* Using the public library
* Publishing a local library from the UI-kit versioned file

Unless you are working on the library itself is recommneded to use the public library in order to reuse the design assets in other files. **You will receive the updates automatically in your working files**. 

![Access to the assets from the libraries panel](https://user-images.githubusercontent.com/44420072/131477160-c41aba11-18f1-4992-929b-fa3496400f16.png)

_Access to the assets from the libraries panel_

If you want to know more about how to work with XD libraries you can check the article: [Adobe XD Get Started: Components and libraries](https://www.adobe.com/products/xd/learn/get-started-xd-components-libraries.html) whit a useful video to understand how to browse and use library assets (video 05).

### Working with previous versions

If you development team is working with a **previous version of the latest released Halstack CDK**, you can find all the UI Kit files in the [previous releases folder](https://github.com/dxc-technology/halstack-style-guide/tree/master/previous-releases) (Note that if you need to upgrade the version of the components you are using you will need to delete all the instances and relink the again with the proper version/public library)

## Design assets

Between the design assets we store the .xd files for every component documentation images, principles and another useful files as branding assets. All our design assets are located [here](https://github.com/dxc-technology/halstack-style-guide/tree/master/contributing/assets). 

## Adding new components

The process of adding new components to the Halstack design system consists of the following steps:

1. Create a `[component name]_images.xd` file and submit to review
2. Export the artboards as png to an images folder following the [images contribution guidelines](https://github.com/dxc-technology/halstack-style-guide/blob/master/contributing/images.md)
3. Write the component documentation page accordingly to the [content guidelines](https://github.com/dxc-technology/halstack-style-guide/blob/master/contributing/content.md)

In this page we are going to focus in the first step of the process in order to helping halstack contributors to create reusable and compelling components for the design system UI Kit.

### Component starting file

You can use a [template](https://github.com/dxc-technology/halstack-style-guide/blob/master/contributing/assets/templates/template_component_images.xd) to start building your component XD file or use an empty file.

![Component template file example](https://user-images.githubusercontent.com/44420072/131476248-0b53d6d5-6e00-435c-a7d8-2af737880eb3.png)

_Component template file example_


Be sure that you have access to the Halstack Adobe libraries (UI Kit and Assets) and always stick to the color and typography styles of the public library so a change of one of those will affect your component styles also. Adobe XD doesn't apply the color styles to the borders directly, avoid using the color picker and copy and paste the HEX code instead.

### Creating component states

![Button component states panel](https://user-images.githubusercontent.com/44420072/131458834-ba3d1d3e-d367-40e5-98e1-986cceed4bc7.png)

_Button component states panel_

We use Adobe XD instances to add all the states to the main component. Here you have more iformation about [how to work with component states in XD](https://www.adobe.com/products/xd/learn/prototype/component-states/component-states-common-use-cases.html).


**The default state is the :enabled**, appart from that the following states can be added depending of the behaviour of the component to specify special states:

| State                   | Pseudo-classes                               |
| :---------------------- | :------------------------------------------- | 
| Hover                   | `:hover`                                     |
| Focus                   | `:focus`, `:focus-visible`, `:focus-within)` |
| Active                  | `:active`                                    |
| Error                   | `:invalid`, `:user-invalid`                  |
| Selected/Unselected     | -                                            |
| Checked/Unchecked       | `:checked`                                   |
| Visited                 | `:visited`                                   |
| Loading                 | -                                            |
| Disabled                | `:disabled`                                  |
| Read-only               | `:read-only`                                 |

Most of the states have a direct relationship with the CSS pseudo-classes, if you want to know more about them, you can check the [MDN Web Docs Pseudo-classes page](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

### Variants

Sometimes the differences between component variants are big and it is not worthy to use modified instances of a component to create them, in this scenario is aways better

## Other contributions


