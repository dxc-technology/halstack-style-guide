# Spinner

Loading spinner is a waiting indicator in the user interface to communicate your users that something is going on with the application and it will take a while. One of the problems that spinners have is that they don't indicate how much time the operation is going to take, for that reason the design system is including different resources to manage this consuming time for the app of taking resources.

One rule to follow with this component if the process is going to take more than 10 seconds, it is recommendable that some features like a counter or some value be linked to the component to make clear to the user the time that is going to take the processing of the information.

## Appearance

The appearance of the component is widely recognized through applications.
In the circular version, the style is a circle with a border that is spinning forever, until the processing is done.

The spinner has an undeterminated state, that means that they don't have logic or stepper process.

## Variants

There are three different variants for the spinner component due to the size or the position: **default**, **tiny** and **overlay**.
The tiny mode has never a label associated, while the default and overlay values can have a paired label.

![Spinner component variants](images/spinner_variants.png)

_Spinner component variants_


## Design Specifications

![Spinner design specifications](images/spinner_specs.png)

_Spinner design specifications_

### Color

| Tokens             | Value                |
| ------------------ | -------------------- |
| `trackCircleColor` |              #5f249f |
| `totalCircleColor` |              #FFFFFF |
| `fontColor`        |              inherit |
| `overlayColor`     | #000000 0.80 opacity |

### Size

| Property        | Element                      | Token            | Value     |
| --------------- | ---------------------------- | ---------------- | --------- |
| `width`         | Spinner container (default)  | -                | 120px     |
| `height`        | Spinner container (default)  | -                | 120px     |
| `width`         | Spinner container (tiny)     | -                | 36px      |
| `height`        | Spinner container (tiny)     | -                | 36px      |
| `max-width`     | Overlay                      | -                | 100vw     |
| `max-height`    | Overlay                      | -                | 100vh     |


### Typography

| Property        | Element          | Token            | Value     |
| --------------- | ---------------- | ---------------- | --------- |
| `font-size`     | Label            | `type-scale-01`  | 12px      |
| `font-weight`   | Label            | `type-regular`   | 400       |

### Border

| Property        | Element                      | Token            | Value        |
| --------------- | ---------------------------- | ---------------- | ------------ |
| `border`        | Spinner circle (default)     | -                | 8.5px solid  |
| `border`        | Spinner circle (tiny)        | -                | 6px solid    |


### User Interface Design Considerations

- Use the spinner component in a process between more than 1 second and less than 10 seconds
- In case that the process will be lower than 10 seconds, a progress indicator and a handler to interrupt the process will be attached to the element
- The text of the action it is not mandatory but recommendable

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/191779dd-dc3e-4b6c-812a-f379a44d6c03/variables/
____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/spinner/README.md)

