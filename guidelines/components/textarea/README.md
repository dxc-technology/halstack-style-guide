# Textarea

A textarea allows the users enter a multi-line, free-form text.

## Usage

* Use the texarea when you need users to enter a text longer than a single line
* Avoid using the text area when complex questions can break up in simpler ones 
## States


States: **Enabled**, **hover**, **focus**, **error** and **disabled**.

![Textarea component states example](images/textarea_states.png)

_Textarea component states example_
## Anatomy


![Anatomy image](images/textarea_anatomy.png)

1. Label
2. Helper text _(Optional)_
3. Placeholder/Value
4. Container
5. Resizer
6. Error message


## Design specifications

![Component design specifications](images/textarea_specs.png)

_Component design specifications_

The input-password `color`, `typography`, `border`, `width` and `margin` specifications are inherited from the input-text, for reference [check the input-text component documentation](). 

The textarea doesn't have the following text-input elements, therefore, their listed styles don't apply:

* Action
* Prefix / Suffix
* Error indicator


### Spacing


| Property        | Element           | Token             | Value           |
| :-------------- | :---------------- | :---------------- | :-------------- |
| `padding-left`  | Texarea container | `spacing-8`      | 1rem / 16px     |
| `padding-right` | Texarea container | `spacing-8`      | 1rem / 16px     |
| `margin-top`    | Texarea container | `spacing-4`      | 0.5rem / 8px    |
| `margin-bottom` | Texarea container | `spacing-4`      | 0.5rem / 8px    |



## Accesibility

### WCAG 

* Understanding WCAG 2.2 - [1.3.1: Information and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
* Understanding WCAG 2.2 - [3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
* Understanding WCAG 2.2 - [3.3.2: Labels and Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) 
* Understanding WCAG 2.2 - [3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) 
* Understanding WCAG 2.2 - [4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) 

### WAI-ARIA

* WAI-ARIA Accessible Rich Internet Applications 1.2 - [`textbox` role](https://www.w3.org/TR/wai-aria-1.2/#textbox)


## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/textarea)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/textarea)
* [Adobe XD component](https://xd.adobe.com/view/aef66774-aaaf-44ea-b00d-e2bfc34b392f-fba5/)

____________________________________________________________

* [Edit this page on GitHub](url)

