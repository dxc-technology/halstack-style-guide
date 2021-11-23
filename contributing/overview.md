# Overview

You can contribute to the Halstack design system documentation in several ways:

* [Giving feedback](#giving-feedback)
* [Bug reports and feature requests](#bug-reports-and-feature-requests)
* [Content guidelines](#content-guidelines)
* [Editing pages](#editing-pages)
* [Creating pages](#creating-pages)

## Giving feedback

Halstack design system is free to use and contributors help us to make it awesome. In order to manage the feedback we have different channels depending of the nature of the topic, the following flow will help you to find the correct forum to provide your feedback:


![Feedback_flow](https://user-images.githubusercontent.com/44420072/143018131-01a29532-f1ca-4700-af86-0e23a2ce6197.png)

_Feedback process flow_



## Bug reports and feature requests

Before opening a [new issue](https://github.com/dxc-technology/halstack-style-guide/issues/new/choose) consider the following;

* **Avoid duplicates**: Before opening a new issue please always check that the issue has not been already opened.
* **Use labels**: Labels help us organizing the open issues, find a label that suits better to your feature/bug and add it.

If the issue is related to our CDKs please open it in the correct repositories:

* [halstack-angular](https://github.com/dxc-technology/halstack-angular/issues/new/choose)
* [halstack-react](https://github.com/dxc-technology/halstack-react/issues/new/choose)

### Bug report

Open a [bug report](https://github.com/dxc-technology/halstack-style-guide/issues/new?assignees=&labels=&template=bug_report.md) when there are:

* Typos in the documentation
* Incorrect or misleading information 
* Broken or outdated links

### Feature request

All the enhancements, new component or feature requests are handle via [feature requests](https://github.com/dxc-technology/halstack-style-guide/issues/new?assignees=&labels=&template=feature_request.md). Every user of Halstack design system can use this method for requesting improvements.

* Proposed and accepted features are included by the core mantainers 
* Any feature can be crafted and submitted to this repo as a [pull request](#pull-requests).

## Content guidelines

The following guidelines are meant to help contributors to create and edit content from Halstack design system:

* [Writing content](content.md)
* [Image usage](images.md)
* [Designing components](design.md)


## Editing pages

### From our documentation site

At the bottom of every of our [documentation pages](https://developer.dxc.com/design/guidelines/principles/overview) you will find an `edit this page on GitHub` link that will redirect to the `README.md` file.


### Pull requests

To update any of our documentation pages you can follow the following procedures:

* **Standard**: fork our repository and then make a contribution. See how you can [create a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to propose changes you've made to a fork of the upstream repository.
* **Regular contributors**: depending of contribution and the expected release, the PR can be done to a release branch or a feature branch. Feature branches are created on demand.

:heavy_exclamation_mark: **Don't forget to check our contribution guidelines before submitting your pull request:**

[DXC Assure Digital Platform contribution guidelines](https://github.com/dxc-technology/halstack-style-guide/blob/3.2.0/CONTRIBUTING.md#contributing-via-github-pull-requests
).

## Creating pages

Our documentation is organized following the structure:

```
guidelines  
|   catalog.json
|
└───components 
│   │
│   └───component_folder
│       │    miniature.png
│       │    README.md
│       │   
│       └─── images
|                image_example.png   
│          
└───principles
    │   color
    │   typography
    |   ...
 
```
Follow these steps when creating new content:

1. Create a new folder inside `guidelines/principles` or `guidelines/components`
2. This folder should contain a `README.md` file and a `images` folder
3. Only add the `miniature.png` file when adding a new component, no needed for principles

Every component documentation or priciples added should follow the same structure.

### Editing the catalog.json file

In order to update the content in our documentation site the `catalog.json` file need to track the new additions:

```
{
  "principles": [  ],
  "components": [  ]
}
```

Inside the `principles` or `components` array add the following:

```
 {
      "key": "overview",
      "name": "Overview"
    },
```

* **key**: name of the folder placed inside `guidelines/principles` or `guidelines/components`
* **name**: this value will be displayed in [Developer central](https://developer.dxc.com/design/guidelines/principles/overview) site navigation







