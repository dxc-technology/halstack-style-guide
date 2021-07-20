# Autocomplete

The autocomplete component, also known as predictive search is an input field that suggests different options to the user based on his input. 

* [Usage](#usage)
* [States](#states)
* [Design Spuecifications](#design-specifications)
* [Links and references](#links-and-references)

## Usage
Consider using this component:

* When the information to fill is complex or large and you want to assist the user with suggestions to make the process easiest and quicker.
* If the options are a few it would be better to use a select component.
+ Make sure that the error coming from the API is understandable for the user.

## States

States: **enabled**, **focus**, **error** and **disabled**.

![Examples of the autocomplete states](images/autocomplete_states.png)

_Examples of the autocomplete states_


## Design Specifications

![Autocomplete specifications](images/autocomplete_specs.png)

_Autocomplete specifications_

The specifications for the autocomplete input can be found in the [text-input specs](https://developer.dxc.com/design/guidelines/components/text-input), the option list can be cheked in [the select documentation](https://developer.dxc.com/design/guidelines/components/select)


### Required and helper text

* A required empty select should show an error message when submitted.
* Helper text can be added to the component, specs are available in the [input](https://developer.dxc.com/design/guidelines/components/text-input) component.

![Examples of the autocomplete required and helper text](images/autocomplete_required_helper.png)

_Examples of the autocomplete required and helper text_

### Synchronous vs asynchronous

Two modes can be defined for the autocomplete component, based on the result set that is going to be searchable:

* **Synchronous**: if all the result set is on the application side, the synchronous mode is the one used.
* **Asynchronous**: if the application needs to interact with the APIs in every action of the user the mode will be asynchronous.


![Handling the error fetching data in async autocomplete component](images/autocomplete_async.png)

_Handling the error fetching data in async autocomplete component_

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/736b626a-87bb-42f4-8871-64701de74177/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/autocomplete/README.md)
