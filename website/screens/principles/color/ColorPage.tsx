import PageLayout from "../../common/PageLayout";
import {
  DxcHeading,
  DxcText,
  DxcTable,
  DxcStack,
  DxcLink,
} from "@dxc-technology/halstack-react";
import colorOverview from "./images/color_overview.png";
import colorFamilies from "./images/color_families.png";
import Figure from "../../common/Figure";
import Image from "@/common/Image";
import HeadingLink from "../../common/HeadingLink";
import DocFooter from "../../common/DocFooter";
import Code from "../../common/Code";

const Color = () => {
  return (
    <PageLayout>
      <DxcStack gutter="xxxlarge">
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Color" weight="bold"></DxcHeading>
          <Figure caption="Base Halstack core colors">
            <Image src={colorOverview} alt="DXC Colors" />
          </Figure>
          <DxcText as="p">
            <strong>
              The color palette is an essential asset as a communication
              resource of our design system.
            </strong>
          </DxcText>
          <DxcText as="p">
            Halstack color palette brings a unified consistency and helps in
            guiding the user&#39;s perception order. Our color palette is based
            in the{" "}
            <DxcLink
              href="https://en.wikipedia.org/wiki/HSL_and_HSV#:~:text=The%20HSL%20representation%20models%20the,paint%20corresponds%20to%20a%20high%20%22"
              text="HSL model"
              newWindow
            />
            . All our color families are calculated using the lightness value of
            the standard DXC palette colors.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Color Tokens</HeadingLink>
          <DxcText as="p">
            Halstack uses tokens to manage color. Appart from a multi-purpose
            greyscale family, purple and blue are the core color families used
            in our set of components. Additional families as red, green and
            yellow help as feedback role-based color palettes and must not be
            used outside this context.
          </DxcText>
          <HeadingLink level={3}>Core color tokens</HeadingLink>
          <Figure caption="Core color families values">
            <Image src={colorFamilies} alt="Core color families values" />
          </Figure>
          <HeadingLink level={4}>Absolutes</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-white</Code>
                </td>
                <td align="left">#ffffff</td>
                <td align="left">(0, 0%, 100%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-black</Code>
                </td>
                <td align="left">#000000</td>
                <td align="left">(0, 0%, 0%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-transparent</Code>
                </td>
                <td align="left">transparent</td>
                <td align="left">-</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Greyscale</HeadingLink>
          <HeadingLink level={5}>Solid variants</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-grey-50</Code>
                </td>
                <td align="left">#fafafa</td>
                <td align="left">(0, 0%, 98%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-100</Code>
                </td>
                <td align="left">#f2f2f2</td>
                <td align="left">(0, 0%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-200</Code>
                </td>
                <td align="left">#e6e6e6</td>
                <td align="left">(0, 0%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-300</Code>
                </td>
                <td align="left">#cccccc</td>
                <td align="left">(0, 0%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-400</Code>
                </td>
                <td align="left">#bfbfbf</td>
                <td align="left">(0, 0%, 75%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-500</Code>
                </td>
                <td align="left">#999999</td>
                <td align="left">(0, 0%, 60%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-600</Code>
                </td>
                <td align="left">#808080</td>
                <td align="left">(0, 0%, 60%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-700</Code>
                </td>
                <td align="left">#666666</td>
                <td align="left">(0, 0%, 40%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-800</Code>
                </td>
                <td align="left">#4d4d4d</td>
                <td align="left">(0, 0%, 30%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-900</Code>
                </td>
                <td align="left">#333333</td>
                <td align="left">(0, 0%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={5}>Trasparent variants</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Token</th>
                <th align="left">Opacity</th>
                <th align="left">Value (hsla)</th>
                <th align="left">Value (#RRGGBBAA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-grey-50-a</Code>
                </td>
                <td align="left">0.02</td>
                <td align="left">hsla(0,0%,0% / 0.02)</td>
                <td align="left">#00000005</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-100-a</Code>
                </td>
                <td align="left">0.05</td>
                <td align="left">hsla(0,0%,0% / 0.05)</td>
                <td align="left">#0000000d</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-200-a</Code>
                </td>
                <td align="left">0.1</td>
                <td align="left">hsla(0,0%,0% / 0.1)</td>
                <td align="left">#0000001a</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-300-a</Code>
                </td>
                <td align="left">0.2</td>
                <td align="left">hsla(0,0%,0% / 0.2)</td>
                <td align="left">#00000033</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-400-a</Code>
                </td>
                <td align="left">0.3</td>
                <td align="left">hsla(0,0%,0% / 0.3)</td>
                <td align="left">#0000004d</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-500-a</Code>
                </td>
                <td align="left">0.4</td>
                <td align="left">hsla(0,0%,0% / 0.4)</td>
                <td align="left">#00000066</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-600-a</Code>
                </td>
                <td align="left">0.5</td>
                <td align="left">hsla(0,0%,0% / 0.5)</td>
                <td align="left">#00000080</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-700-a</Code>
                </td>
                <td align="left">0.6</td>
                <td align="left">hsla(0,0%,0% / 0.6)</td>
                <td align="left">#00000099</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-800-a</Code>
                </td>
                <td align="left">0.7</td>
                <td align="left">hsla(0,0%,0% / 0.7)</td>
                <td align="left">#000000b3</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-grey-900-a</Code>
                </td>
                <td align="left">0.8</td>
                <td align="left">hsla(0,0%,0% / 0.8)</td>
                <td align="left">#000000cc</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Purple</HeadingLink>
          <DxcText as="p">
            The core Purple family serves as the primary action color.
          </DxcText>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-purple-50</Code>
                </td>
                <td align="left">#faf7fd</td>
                <td align="left">(269, 63%, 98%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-100</Code>
                </td>
                <td align="left">#f2eafa</td>
                <td align="left">(269, 63%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-200</Code>
                </td>
                <td align="left">#e5d5f6</td>
                <td align="left">(269, 63%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-300</Code>
                </td>
                <td align="left">#cbacec</td>
                <td align="left">(269, 63%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-400</Code>
                </td>
                <td align="left">#b182e3</td>
                <td align="left">(269, 63%, 70%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-500</Code>
                </td>
                <td align="left">#a46ede</td>
                <td align="left">(269, 63%, 65%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-600</Code>
                </td>
                <td align="left">#7d2fd0</td>
                <td align="left">(269, 63%, 50%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-700</Code>
                </td>
                <td align="left">#5f249f</td>
                <td align="left">(269, 63%, 38%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-800</Code>
                </td>
                <td align="left">#4b1c7d</td>
                <td align="left">(269, 63%, 30%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-purple-900</Code>
                </td>
                <td align="left">#321353</td>
                <td align="left">(269, 63%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Blue</HeadingLink>
          <DxcText as="p">
            The core Blue family serves as the accent color.
          </DxcText>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-blue-50</Code>
                </td>
                <td align="left">#f5fbff</td>
                <td align="left">(205, 100%, 98%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-100</Code>
                </td>
                <td align="left">#e6f4ff</td>
                <td align="left">(205, 100%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-200</Code>
                </td>
                <td align="left">#cceaff</td>
                <td align="left">(205, 100%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-300</Code>
                </td>
                <td align="left">#99d5ff</td>
                <td align="left">(205, 100%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-400</Code>
                </td>
                <td align="left">#66bfff</td>
                <td align="left">(205, 100%, 70%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-500</Code>
                </td>
                <td align="left">#33aaff</td>
                <td align="left">(205, 100%, 60%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-600</Code>
                </td>
                <td align="left">#0095ff</td>
                <td align="left">(205, 100%, 50%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-700</Code>
                </td>
                <td align="left">#0086e6</td>
                <td align="left">(205, 100%, 45%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-800</Code>
                </td>
                <td align="left">#0067b3</td>
                <td align="left">(205, 100%, 35%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-blue-900</Code>
                </td>
                <td align="left">#003c66</td>
                <td align="left">(205, 100%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Red</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-red-50</Code>
                </td>
                <td align="left">#fff5f6</td>
                <td align="left">(352, 99%, 98%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-100</Code>
                </td>
                <td align="left">#ffe6e9</td>
                <td align="left">(352, 99%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-200</Code>
                </td>
                <td align="left">#ffccd3</td>
                <td align="left">(352, 99%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-300</Code>
                </td>
                <td align="left">#fe9aa7</td>
                <td align="left">(352, 99%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-400</Code>
                </td>
                <td align="left">#fe677b</td>
                <td align="left">(352, 99%, 70%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-500</Code>
                </td>
                <td align="left">#fe344f</td>
                <td align="left">(352, 99%, 60%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-600</Code>
                </td>
                <td align="left">#fe0123</td>
                <td align="left">(352, 99%, 50%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-700</Code>
                </td>
                <td align="left">#d0011b</td>
                <td align="left">(352, 99%, 41%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-800</Code>
                </td>
                <td align="left">#980115</td>
                <td align="left">(352, 99%, 30%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-red-900</Code>
                </td>
                <td align="left">#65010e</td>
                <td align="left">(352, 99%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Green</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-green-50</Code>
                </td>
                <td align="left">#f7fdf9</td>
                <td align="left">(137, 63%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-100</Code>
                </td>
                <td align="left">#eafaef</td>
                <td align="left">(137, 63%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-200</Code>
                </td>
                <td align="left">#d5f6df</td>
                <td align="left">(137, 63%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-300</Code>
                </td>
                <td align="left">#acecbe</td>
                <td align="left">(137, 63%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-400</Code>
                </td>
                <td align="left">#82e39e</td>
                <td align="left">(137, 63%, 70%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-500</Code>
                </td>
                <td align="left">#59d97d</td>
                <td align="left">(137, 63%, 60%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-600</Code>
                </td>
                <td align="left">#2fd05d</td>
                <td align="left">(137, 63%, 50%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-700</Code>
                </td>
                <td align="left">#24a148</td>
                <td align="left">(137, 63%, 39%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-800</Code>
                </td>
                <td align="left">#1c7d38</td>
                <td align="left">(137, 63%, 30%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-green-900</Code>
                </td>
                <td align="left">#135325</td>
                <td align="left">(137, 63%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Yellow</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-yellow-50</Code>
                </td>
                <td align="left">#fffdf5</td>
                <td align="left">(48, 93%, 98%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-100</Code>
                </td>
                <td align="left">#fef9e6</td>
                <td align="left">(48, 93%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-200</Code>
                </td>
                <td align="left">#fdf4ce</td>
                <td align="left">(48, 93%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-300</Code>
                </td>
                <td align="left">#fbe89d</td>
                <td align="left">(48, 93%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-400</Code>
                </td>
                <td align="left">#fadd6b</td>
                <td align="left">(48, 93%, 70%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-500</Code>
                </td>
                <td align="left">#f7cf2b</td>
                <td align="left">(48, 93%, 57%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-600</Code>
                </td>
                <td align="left">#f6c709</td>
                <td align="left">(48, 93%, 50%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-700</Code>
                </td>
                <td align="left">#c59f07</td>
                <td align="left">(48, 93%, 40%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-800</Code>
                </td>
                <td align="left">#947705</td>
                <td align="left">(48, 93%, 30%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-yellow-900</Code>
                </td>
                <td align="left">#624f04</td>
                <td align="left">(48, 93%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={4}>Orange</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Value (hex)</th>
                <th align="left">Value (hsl)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>color-orange-50</Code>
                </td>
                <td align="left">#fefaf5</td>
                <td align="left">(32, 90%, 98%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-100</Code>
                </td>
                <td align="left">#fef3e7</td>
                <td align="left">(32, 90%, 95%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-200</Code>
                </td>
                <td align="left">#fce7cf</td>
                <td align="left">(32, 90%, 90%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-300</Code>
                </td>
                <td align="left">#facf9e</td>
                <td align="left">(32, 90%, 80%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-400</Code>
                </td>
                <td align="left">#f7b76e</td>
                <td align="left">(32, 90%, 70%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-500</Code>
                </td>
                <td align="left">#f59f3d</td>
                <td align="left">(32, 90%, 60%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-600</Code>
                </td>
                <td align="left">#f38f20</td>
                <td align="left">(32, 90%, 54%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-700</Code>
                </td>
                <td align="left">#c26c0a</td>
                <td align="left">(32, 90%, 40%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-800</Code>
                </td>
                <td align="left">#915108</td>
                <td align="left">(32, 90%, 30%)</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>color-orange-900</Code>
                </td>
                <td align="left">#613605</td>
                <td align="left">(32, 90%, 20%)</td>
              </tr>
            </tbody>
          </DxcTable>
        </DxcStack>
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/principles/colors/README.md" />
      </DxcStack>
    </PageLayout>
  );
};

export default Color;
