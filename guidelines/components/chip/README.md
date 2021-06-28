# Chip

Chips are elements that represent status, complementary information, or association between elements.

## Usage

* Do not use chips instead of buttons they have a total different aim in the UI
* Make clear and simple the content of the label
* Use chips to make tasks easier for the user

## States

The only interactive element on the chip component is the prefix/suffix and its states are: **enabled** and **focus**:

![Chip prefix and suffix states](images/chip_states.png)

_Chip prefix and suffix states_

## Design Specifications

![Component chip design specifications](images/chip_specs.png)

_Component chip design specifications_

### Color

| Component token           | Element                   | Token             | Value     |
| ------------------------- | ------------------------- | ----------------- | --------- |
| `backgroundColor`         | Chip container            | `Hal-Grey-S-90`   | #e6e6e6   |
| `disabledBackgroundColor` | Chip container:disabled   | `Hal-Grey-S-95`   | #f2f2f2   |
| `fontcolor`               | Label                     | `Hal-Black`       | #000000	  |
| `fontcolor`               | Label:disabled            | `Hal-Grey-L-60`   | #999999	  |
| `focusColor`              | Focus outline             | `Hal-Blue-s-35`   | #0067b3	  |


### Size

| Property		    | Element			                  | Value		      |
| --------------- | ----------------------------- | -------------	|
| `height`		    | Chip container		            | 40px		      |
| `height`		    | Prefix/Suffix		              | 24px		      |
| `width`		      | Prefix/Suffix				          | 24px		      |

### Spacing

| Property		          | Element		            | Value	|
| ---------------------	| --------------------- | ----- |
| `padding-left/right`	| Chip container		    | 16px	|
| `margin`	            | Prefix/Suffix			    | 8px	  |


### Border

| Property		    | Element			                  | Value		      |
| --------------- | ----------------------------- | -------------	|
| `border`		    | Focus outline			            | 2px solid	    |
| `border-radius`	| Chip container		            | 80px		      |


### Typography

| Property  	  | Element	  | Value	|
| ------------- | --------- | ----- |
| `font-size`	  | Label 	  | 16px	|
| `font-weight`	| Label		  | 400	  |



## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/6809ad30-8c5e-44e1-8e93-d85a3aa887f3/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/chip/README.md)
