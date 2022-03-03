import Image from "next/image";
import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import buttonSpecsImage from "./images/button_specs.png";
import buttonStatesImage from "./images/button_states.png";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import Figure from "../../../common/Figure";

const ButtonSpecs = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>States</HeadingLink>
        <DxcText as="p">
          The states are the different behaviors of the button component based
          on the interaction of the user. For the desktop version, we
          contemplate five different states by which can pass.
        </DxcText>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>active</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Button component states">
          <Image src={buttonStatesImage} alt="Button component states" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Design Specifications</HeadingLink>
        <Figure caption="Design specifications for button component">
          <Image
            src={buttonSpecsImage}
            alt="Design specifications for button component"
          />
        </Figure>
        <HeadingLink level={3}>General</HeadingLink>
        <HeadingLink level={4}>Spacing</HeadingLink>
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
                <Code>primaryPaddingLeft</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryPaddingRight</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryPaddingTop</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryPaddingBottom</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
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
                <Code>margin-right</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>margin-left</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>margin-left</Code>
              </td>
              <td align="left">Icon</td>
              <td align="left">
                <Code>spacing-03</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Size</HeadingLink>
        <DxcText as="p">
          The component <Code>width</Code> can adopt the following values:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>width</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>60px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>240px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>480px</td>
            </tr>
            <tr>
              <td>
                <Code>fillParent</Code>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <Code>fitContent</Code>
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          The component <Code>height</Code> is fixed:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>height</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>min-height</Code>
              </td>
              <td>40px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Margin</HeadingLink>
        <DxcText as="p">
          Button <Code>margin</Code> can use the values:
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
        <DxcText as="p">
          These values can be applied independently to each side of the
          component: <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>,
          <Code>right</Code>.
        </DxcText>
        <HeadingLink level={4}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Property</th>
              <th align="left">Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>labelFontLineHeight</Code>
              </td>
              <td align="left">line-height</td>
              <td align="left">
                <Code>font-leading-normal</Code>
              </td>
              <td>1.5 em</td>
            </tr>
            <tr>
              <td align="left">
                <Code>labelLetterSpacing</Code>
              </td>
              <td align="left">letter-spacing</td>
              <td align="left">
                <Code>font-spacing-wide-01</Code>
              </td>
              <td>0.025 em</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Primary</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <HeadingLink level={5}>Base</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>primaryBackgroundColor</Code>
              </td>
              <td align="left">Button container</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryFontColor</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Interactive</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>primaryHoverBackgroundColor</Code>
              </td>
              <td align="left">Container fill:hover</td>
              <td align="left">
                <Code>color-purple-800</Code>
              </td>
              <td align="left">#4b1c7d</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryActiveBackgroundColor</Code>
              </td>
              <td align="left">Container fill:active</td>
              <td align="left">
                <Code>color-purple-900</Code>
              </td>
              <td align="left">#321353</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryDisabledBackgroundColor</Code>
              </td>
              <td align="left">Container fill:disabled</td>
              <td align="left">
                <Code>color-grey-100</Code>
              </td>
              <td align="left">#f2f2f2</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryDisabledFontColor</Code>
              </td>
              <td align="left">Label:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryFocusBorderColor</Code>
              </td>
              <td align="left">Container border:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
                <Code>primaryBorderThickness</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-width-0</Code>
              </td>
              <td align="left">0</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryBorderStyle</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-style-none</Code>
              </td>
              <td align="left">none</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryBorderRadius</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-radius-medium</Code>
              </td>
              <td align="left">0.25rem / 4px</td>
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
                <Code>primaryFontFamily</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-family-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryFontSize</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-scale-03</Code>
              </td>
              <td align="left">1 rem / 16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>primaryBorderWeight</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-regular</Code>
              </td>
              <td align="left">400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Secondary</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <HeadingLink level={5}>Base</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>secondaryBackgroundColor</Code>
              </td>
              <td align="left">Container fill</td>
              <td align="left">
                <Code>transparent</Code>
              </td>
              <td align="left">transparent</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryFontColor</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryBorderColor</Code>
              </td>
              <td align="left">Container border</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Interactive</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>secondaryHoverBackgroundColor</Code>
              </td>
              <td align="left">Container fill:hover</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryHoverFontColor</Code>
              </td>
              <td align="left">Label:hover</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryActiveBackgroundColor</Code>
              </td>
              <td align="left">Container fill:active</td>
              <td align="left">
                <Code>color-purple-900</Code>
              </td>
              <td align="left">#321353</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryDisabledBackgroundColor</Code>
              </td>
              <td align="left">Container fill:disabled</td>
              <td align="left">
                <Code>color-transparent</Code>
              </td>
              <td align="left">transparent</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryDisabledFontColor</Code>
              </td>
              <td align="left">Label:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryFocusBorderColor</Code>
              </td>
              <td align="left">Container border:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryDisabledBorderColor</Code>
              </td>
              <td align="left">Container border:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
                <Code>secondaryBorderThickness</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-width-1 </Code>
              </td>
              <td align="left">1px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryBorderStyle</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-style-solid</Code>
              </td>
              <td align="left">solid</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryBorderRadius</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-radius-medium</Code>
              </td>
              <td align="left">0.25rem / 4px</td>
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
                <Code>secondaryFontFamily</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-family-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryFontSize</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-scale-03</Code>
              </td>
              <td align="left">16px / 1 rem</td>
            </tr>
            <tr>
              <td align="left">
                <Code>secondaryFontWeight</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-regular</Code>
              </td>
              <td align="left">400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Text</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <HeadingLink level={5}>Base</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>textBackgroundColor</Code>
              </td>
              <td align="left">Container fill</td>
              <td align="left">
                <Code>color-transparent</Code>
              </td>
              <td align="left">transparent</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textFontColor</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Interactive</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Component token</th>
              <th align="left">Element</th>
              <th align="left">Token</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>textHoverBackgroundColor</Code>
              </td>
              <td align="left">Container fill:hover</td>
              <td align="left">
                <Code>color-purple-100</Code>
              </td>
              <td align="left">#f2eafa</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textActiveBackgroundColor</Code>
              </td>
              <td align="left">Container fill:active</td>
              <td align="left">
                <Code>color-purple-200</Code>
              </td>
              <td align="left">#e5d5f6</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textDisabledBackgroundColor</Code>
              </td>
              <td align="left">Container fill:disabled</td>
              <td align="left">
                <Code>color-transparent</Code>
              </td>
              <td align="left">transparent</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textDisabledFontColor</Code>
              </td>
              <td align="left">Label:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textFocusBorderColor</Code>
              </td>
              <td align="left">Container border:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
                <Code>textBorderThickness</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-width-0</Code>
              </td>
              <td align="left">0</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textBorderStyle</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-style-none</Code>
              </td>
              <td align="left">none</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textBorderRadius</Code>
              </td>
              <td align="left">Container</td>
              <td align="left">
                <Code>border-radius-medium</Code>
              </td>
              <td align="left">0.25rem / 4px</td>
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
                <Code>textFontFamily</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-family-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textFontSize</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-scale-03</Code>
              </td>
              <td align="left">16px / 1 rem</td>
            </tr>
            <tr>
              <td align="left">
                <Code>textFontWeight</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-regular</Code>
              </td>
              <td align="left">400</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Accessibility</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
              text="2.4.7: Focus Visible"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/on-input"
              text="3.2.2: On Input"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#button"
              text="Button Design Pattern"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/button/specs/ButtonSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ButtonSpecs;
