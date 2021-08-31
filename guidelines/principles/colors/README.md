# Color


![DXC Colors](images/color_overview.png)

_Base Halstack core colors_

**The color palette is an essential asset as a communication resource of our design system.**

Halstack color palette brings a unified consistency and helps in guiding the user's perception order. Our color palette is based in the [HSL model](https://en.wikipedia.org/wiki/HSL_and_HSV#:~:text=The%20HSL%20representation%20models%20the,paint%20corresponds%20to%20a%20high%20%22). All our color families are calculated using the lightness value of the standard DXC palette colors.


## Color Tokens

Halstack uses tokens to manage color. Appart from a multi-purpose greyscale family, purple and blue are the core color families used in our set of components. Additional families as red, green and yellow help as feedback role-based color palettes and must not be used outside this context.

### Core color tokens

![Core color families values](images/color_families.png)

_Core color families values_


#### Absolutes

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-white`             | #ffffff      | (0, 0%, 100%)    |
| `color-black`             | #000000      | (0, 0%, 0%)      |
| `color-transparent`       | transparent  | -                |

#### Greyscale

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-grey-50`           | #fafafa      | (0, 0%, 98%)     |
| `color-grey-100`          | #f2f2f2      | (0, 0%, 95%)     |
| `color-grey-200`          | #e6e6e6      | (0, 0%, 90%)     |
| `color-grey-300`          | #cccccc      | (0, 0%, 80%)     |
| `color-grey-400`          | #bfbfbf      | (0, 0%, 75%)     |
| `color-grey-500`          | #999999      | (0, 0%, 60%)     |
| `color-grey-600`          | #808080      | (0, 0%, 60%)     |
| `color-grey-700`          | #666666      | (0, 0%, 40%)     |
| `color-grey-800`          | #4d4d4d      | (0, 0%, 30%)     |
| `color-grey-900`          | #333333      | (0, 0%, 20%)     |



#### Purple

The core Purple family serves as the primary action color.

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-purple-50`         | #faf7fd      | (269, 63%, 98%)  |
| `color-purple-100`        | #f2eafa      | (269, 63%, 95%)  |
| `color-purple-200`        | #e5d5f6      | (269, 63%, 90%)  |
| `color-purple-300`        | #cbacec      | (269, 63%, 80%)  |
| `color-purple-400`        | #b182e3      | (269, 63%, 70%)  |
| `color-purple-500`        | #a46ede      | (269, 63%, 65%)  |
| `color-purple-600`        | #7d2fd0      | (269, 63%, 50%)  |
| `color-purple-700`        | #5f249f      | (269, 63%, 38%)  |
| `color-purple-800`        | #4b1c7d      | (269, 63%, 30%)  |
| `color-purple-900`        | #321353      | (269, 63%, 20%)  |


#### Blue

The core Blue family serves as the accent color.

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-blue-50`           | #f5fbff      | (205, 100%, 98%) |
| `color-blue-100`          | #e6f4ff      | (205, 100%, 95%) |
| `color-blue-200`          | #cceaff      | (205, 100%, 90%) |
| `color-blue-300`          | #99d5ff      | (205, 100%, 80%) |
| `color-blue-400`          | #66bfff      | (205, 100%, 70%) |
| `color-blue-500`          | #33aaff      | (205, 100%, 60%) |
| `color-blue-600`          | #0095ff      | (205, 100%, 50%) |
| `color-blue-700`          | #0086e6      | (205, 100%, 45%) |
| `color-blue-800`          | #0067b3      | (205, 100%, 35%) |
| `color-blue-900`          | #003c66      | (205, 100%, 20%) |



#### Red

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-red-50`            | #fff5f6      | (352, 99%, 98%)  |
| `color-red-100`           | #ffe6e9      | (352, 99%, 95%)  |
| `color-red-200`           | #ffccd3      | (352, 99%, 90%)  |
| `color-red-300`           | #fe9aa7      | (352, 99%, 80%)  |
| `color-red-400`           | #fe677b      | (352, 99%, 70%)  |
| `color-red-500`           | #fe344f      | (352, 99%, 60%)  |
| `color-red-600`           | #fe0123      | (352, 99%, 50%)  |
| `color-red-700`           | #d0011b      | (352, 99%, 41%)  |
| `color-red-800`           | #980115      | (352, 99%, 30%)  |
| `color-red-900`           | #65010e      | (352, 99%, 20%)  |

#### Green

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-green-50`          | #f7fdf9      | (137, 63%, 95%)  |
| `color-green-100`         | #eafaef      | (137, 63%, 95%)  |
| `color-green-200`         | #d5f6df      | (137, 63%, 90%)  |
| `color-green-300`         | #acecbe      | (137, 63%, 80%)  |
| `color-green-400`         | #82e39e      | (137, 63%, 70%)  |
| `color-green-500`         | #59d97d      | (137, 63%, 60%)  |
| `color-green-600`         | #2fd05d      | (137, 63%, 50%)  |
| `color-green-700`         | #24a148      | (137, 63%, 39%)  |
| `color-green-800`         | #1c7d38      | (137, 63%, 30%)  |
| `color-green-900`         | #135325      | (137, 63%, 20%)  |


#### Yellow

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-yellow-50`         | #fffdf5      | (48, 93%, 98%)   |
| `color-yellow-100`        | #fef9e6      | (48, 93%, 95%)   |
| `color-yellow-200`        | #fdf4ce      | (48, 93%, 90%)   |
| `color-yellow-300`        | #fbe89d      | (48, 93%, 80%)   |
| `color-yellow-400`        | #fadd6b      | (48, 93%, 70%)   |
| `color-yellow-500`        | #f7cf2b      | (48, 93%, 57%)   |
| `color-yellow-600`        | #f6c709      | (48, 93%, 50%)   |
| `color-yellow-700`        | #c59f07      | (48, 93%, 40%)   |
| `color-yellow-800`        | #947705      | (48, 93%, 30%)   |
| `color-yellow-900`        | #624f04      | (48, 93%, 20%)   |

#### Orange

| Name                      | Value (hex)  | Value (hsl)      | 
| :------------------------ | :----------- | :--------------- |
| `color-orange-50`         | #fefaf5      | (32, 90%, 98%)   |
| `color-orange-100`        | #fef3e7      | (32, 90%, 95%)   |
| `color-orange-200`        | #fce7cf      | (32, 90%, 90%)   |
| `color-orange-300`        | #facf9e      | (32, 90%, 80%)   |
| `color-orange-400`        | #f7b76e      | (32, 90%, 70%)   |
| `color-orange-500`        | #f59f3d      | (32, 90%, 60%)   |
| `color-orange-600`        | #f38f20      | (32, 90%, 54%)   |
| `color-orange-700`        | #c26c0a      | (32, 90%, 40%)   |
| `color-orange-800`        | #915108      | (32, 90%, 30%)   |
| `color-orange-900`        | #613605      | (32, 90%, 20%)   |


____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/principles/colors/README.md)

