
## DXC Slider Visual Guidelines

#### Overview

Slider control allows users to select a specific value or a range of values from a set. Usually, slider presents a relatively large dataset and the way that the user interacts with it is helpful to explore several options swiftly.

##### *Appereance*

The appearance of the component is not a big deal, it is represented most of the time with a line where are mapped all the values that can be selected. Apart from that, it is needed a control to move it side by side to pick the desired value.


###### Modes

Three modes are available for a slider control.
- A discrete mode, that only can get the value marked along the slider
- A continuous mode, that can take every value mapped into slider from the beginning to the end.
- A range mode implicitly can be discrete or continuous and is used to select a range that will include all the values inside the range itself.

Modes: __discrete__, __continuos__ or __range__.

<div> <img src="images/slider_modes.png"/></div>

###### States

Seven different states are defined in the life cycle of the component: __enabled__, __disabled__, __hovered__, __focused__, __pressed__, __dragged__ and __lock ups__.
<br >
<div> <img src="images/slider_states_discrete.png"/></div>
<br >
<div> <img src="images/slider_states_cont.png"/></div>
<br >
<div> <img src="images/slider_states_range.png"/></div>

##### *Theming*

###### Dark theme

In the dark theme, the majority of the colors are inverted, getting a good contrast between black and white. In some details, the design team decides to use the official yellow to highlight interactions.

<div> <img src="images/slider_dark.png"/></div>


##### *Design Specifications*

The design specifications for slider are defining in the table below.

| Property           | Value|
|--------------------|------:|
| Margin right/left  | `15px`|
| Slider line thickness   | `1px` |
| Default knob       | `14 x 14px` |
| Selected knob       | `18 x 18px` |
| Min width       | `185px` |
| Small steppers       | `4 x 4px` |
| Space between steppers       | `36px` |
| Separation with lock up       | `10px` |
| Lockup size       | `40 x 40px` |
| Focused ripple       | `42 x 42px` |
| Pressed ripple       | `62 x 62px` |
| Font size (with text)| `16px` |
| Font weight        | `Regular` |
| Knob shape        | `y:3, blur:3` |

<div> <img src="images/slider_specs.png"/></div>

###### User Interface Design Considerations

- Visualize the output of the slider as feedback to the user of the current state.
- As more information can give it to the user, the easier the selection will be. 
- If the value has to be specific, give some resource to the user to fill a precise input, i.e. an input next to the slider.

To accomplish these considerations, some slider's variations were designed with the purpose of offering a great user experience within the application.

<div> <img src="images/slider_special.png"/></div>