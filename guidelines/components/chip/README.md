# Chip

Chips are elements that represent status, complementary information, or association between elements.

## Appereance

A rounded component defined by a label or a graphic element to indicate the information to be communicated to the user. Can be clickable on the icons, to perform an action in form of triggering a dialog or a modification in other element of the user interface. Also, they can be static or use it to categorize a different kinds of data.

### States

The only state that the design system specifies for the chip component is the hover interaction, which is very basic, changing the cursor from default to pointer in the case that the element is clickable. With the static version, the hover action doesn't need to be contemplated.

![Chip states](images/Chip_Specs.png)


## Design Specifications

## Padding

| Property		        | Element		        | Value	|
| ---------------------	| --------------------- | ----- |
| `padding`		        | calendar container	| 16px	|
| `padding-left/right`	| month container	    | 8px	|
| `padding-left/right`	| year selector		    | 16px	|
| `padding-top/bottom`	| separator	        	| 8px	|


## Other specs 

| Property		    | Description			        | Value		    |
| ----------------- | ----------------------------- | -------------	|
| `height`		    | Icon size			            | 24px		    |
| `width`		    | Icon size			            | 24px		    |
| `border`		    | Border			            | 2px solid	    |
| `width`	  	    | Container        		        | fit-content	|
| `border-radius`	| Container Radius		        | 80px		    |
| `border`		    | Focus outline			        | 2px		    |
| 			        | Space between text and icon	| 8px		    |


## Typography

| Property  	| Element	| Value	|
| ------------- | --------- | ----- |
| `font-size`	| label 	| 16px	|
| `font-weight`	| all		| 400	|


## Design Tokens

| Tokens		    |	Description 		    |	Default value	|
| ----------------- | ------------------------- | ----------------- |
| ``			    |	backgroundColor	    	|	#e6e6e6		    |
| `Hal-Grey-S-40`	|	outlinedColor		    |	#666666		    |
| `Hal-Black`		|	fontcolor		        |	#000000		    |
| ``			    |	disabledBackgroundColor	|	#eeeeee		    |
| `Hal-Grey-L-60`	|	disabledFontColor	    |	#999999		    |

![Chip specs](images/Chip_Specs.png)

### User Interface Design Considerations

- Use the color with some meaning, not for purely decoration
- Do not use chips instead of buttons they have a total different aim in the UI
- Make clear and simple the content of the label
- Use chips to make tasks easier for the user

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/6809ad30-8c5e-44e1-8e93-d85a3aa887f3/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/chip/README.md)
