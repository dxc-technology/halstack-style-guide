import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import Figure from "../../../common/Figure";
import Image from "next/image";
import headerSpecs from "./images/header_specs.png";
import headerAnatomy from "./images/header_anatomy.png";
import headerResponsive from "./images/header_responsive.png";
import DocFooter from "../../../common/DocFooter";

const HeaderSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Header design specifications">
          <Image src={headerSpecs} alt="Header design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Figure caption="Header distribution example">
          <Image src={headerAnatomy} alt="Header distribution example" />
        </Figure>
        <DxcList type="number">
          <DxcText>Brand image</DxcText>
          <DxcText>Application name</DxcText>
          <DxcText>Navigation links</DxcText>
          <DxcText>Header dropdown</DxcText>
          <DxcText>Container</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Core token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>backgroundColor</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>contentColor</Code>
              </td>
              <td align="left">Content</td>
              <td align="left">
                <Code>color-black</Code>
              </td>
              <td align="left">#000000</td>
            </tr>
            <tr>
              <td align="left">
                <Code>underlinedColor</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>color-black</Code>
              </td>
              <td align="left">#000000</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerHoverColor</Code>
              </td>
              <td align="left">Menu:hover</td>
              <td align="left">
                <Code>color-grey-200</Code>
              </td>
              <td align="left">#e6e6e6</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerFocusColor</Code>
              </td>
              <td align="left">Menu:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerFontColor</Code>
              </td>
              <td align="left">Menu label</td>
              <td align="left">
                <Code>color-black</Code>
              </td>
              <td align="left">#000000</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerIconColor</Code>
              </td>
              <td align="left">Menu icon</td>
              <td align="left">
                <Code>color-black</Code>
              </td>
              <td align="left">#000000</td>
            </tr>
            <tr>
              <td align="left">
                <Code>menuBackgroundColor</Code>
              </td>
              <td align="left">Menu</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>overlayColor</Code>
              </td>
              <td align="left">Overlay</td>
              <td align="left">
                <Code>color-grey-800-a</Code>
              </td>
              <td align="left">#000000b3</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Core token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>hamburguerFontFamily</Code>
              </td>
              <td align="left">Menu label</td>
              <td align="left">
                <Code>font-family-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerFontStyle</Code>
              </td>
              <td align="left">Menu label</td>
              <td align="left">
                <Code>font-style-normal</Code>
              </td>
              <td align="left">normal</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerFontSize</Code>
              </td>
              <td align="left">Menu label</td>
              <td align="left">
                <Code>font-scale-01</Code>
              </td>
              <td align="left">0.75rem / 12px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hamburguerFontWeight</Code>
              </td>
              <td align="left">Menu label</td>
              <td align="left">
                <Code>font-weight-semibold</Code>
              </td>
              <td align="left">600</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Property</th>
              <th align="left">Element</th>
              <th align="left">Core token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>border-width</Code>
              </td>
              <td align="left">Underline</td>
              <td align="left">
                <Code>border-width-2</Code>
              </td>
              <td align="left">2px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>border-style</Code>
              </td>
              <td align="left">Underline</td>
              <td align="left">
                <Code>border-style-solid</Code>
              </td>
              <td align="left">solid</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Size</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Poperty</th>
              <th align="left">Element</th>
              <th align="left">Core token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>height</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">-</td>
              <td align="left">64px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>width</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">-</td>
              <td align="left">100%</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          The margin only applies to the <Code>margin-bottom</Code> of the
          header component.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>margin</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xxsmall</Code>
              </td>
              <td>6px</td>
            </tr>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>16px</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>36px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>48px</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>64px</td>
            </tr>
            <tr>
              <td>
                <Code>xxlarge</Code>
              </td>
              <td>100px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Padding</HeadingLink>
        <DxcText as="p">
          The variable padding only applies to the content area, the{" "}
          <Code>padding-left</Code> applied to the brand area is fixed (20px).
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>padding</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xxsmall</Code>
              </td>
              <td>6px</td>
            </tr>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>16px</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>36px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>48px</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>64px</td>
            </tr>
            <tr>
              <td>
                <Code>xxlarge</Code>
              </td>
              <td>100px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          Different values can be applied to each side of the component:{" "}
          <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>,{" "}
          <Code>right</Code>.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>
          Responsive version for mobile and tablet
        </HeadingLink>
        <DxcText as="p">
          Due to the applications are accessible from a laptop, tablet and
          mobile it is necessary to think and design a header version for the
          corresponding device. The design for smaller devices tries to keep the
          consistency respect to the other versions, allowing the user
          experiences a similar interaction although the space available is
          less.
        </DxcText>
        <Figure caption="Header menu responsive version">
          <Image src={headerResponsive} alt="Header menu responsive version" />
        </Figure>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/header/specs/HeaderSpecsPage.tsx" />
    </DxcStack>
  );
};

export default HeaderSpecsPage;
