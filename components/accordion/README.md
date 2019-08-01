# DXC Accordion Visual Guidelines

## Overview

Accordions are an open source design feature that can show/hide alternate groups of data within separate panels. Each panel is a container component that displays a group of related data in horizontal or vertical stacks. Each has its own titled bar tab that, when clicked, opens the content of the panel. Accordions visually control the amount of relevant data per panel as well as the amount of data displayed in the viewport, reducing the demand for excessive vertical scrolling

## Appereance



### Modes

There are two different modes for each theme, one is the __default__ for the theme and the other is the __alternative__ option.

![Accordion modes example](images/accordion_modes.png)

### States

The accordion component can get four different states based on the user interaction.
States: __normal__, __hover__, __disabled__, __open__.
![Accordion states example](images/accordion_states.png)

## Theming

### Light theme

Default mode for light theme

White: #FFFFFF     
Black: #000000   
Box shadow opacity: 0.15  
Hover color: #D9D9D9  
Disabled color: #FFFFFF, opacity 0.65  
![Accordion states example](images/accordion_lighttheme_default.png)

Alternative mode for light theme

White: #FFFFFF     
Black: #000000   
Box shadow opacity: 0.15  
Hover color: #212121  
Disabled color: #000000, opacity 0.30 

![Accordion states example](images/accordion_lighttheme_alternative.png)

### Dark theme

Default mode for dark theme

White: #FFFFFF     
Black: #000000   
Box shadow: #FFFFFF, opacity 0.15  
Hover color: #D9D9D9  
Disabled color: #FFFFFF, opacity 0.65  

![Accordion states example](images/accordion_darktheme_default.png)

Alternative mode for dark theme

White: #FFFFFF     
Black: #000000   
Box shadow opacity: 0.15  
Hover color: #212121  
Disabled color: #000000, opacity 0.30 
Border color: #FFFFFF  

![Accordion states example](images/accordion_darktheme_alternative.png)

## Design Specifications

![Accordion states example](images/accordion_specs.png)

### User Interface Design Considerations

- Consider using accordions to decrease scroll, placing information inside of each section following the guidelines detailed in the design system for each component
- Make a cohesive relation between accordions, stablishing a hierarchy, a serie of steps or topics related in the same group of accordions