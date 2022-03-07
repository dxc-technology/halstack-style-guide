import Image from "@/common/Image";
import buttonSpecsImage from "./images/button_specs.png";
import { DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "../../../common/DocFooter";

const ButtonSpecs = () => {
  return (
    <>
      <p>
        <Image
          src={buttonSpecsImage}
          alt="Design specifications for button component"
        />
        <em>Design specifications for button component</em>
      </p>
      <h3 id="general">General</h3>
      <h4 id="spacing">Spacing</h4>
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
              <code>primaryPaddingLeft</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>spacing-03</code>
            </td>
            <td align="left">0.5rem / 8px</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryPaddingRight</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>spacing-03</code>
            </td>
            <td align="left">0.5rem / 8px</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryPaddingTop</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>spacing-03</code>
            </td>
            <td align="left">0.5rem / 8px</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryPaddingBottom</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>spacing-03</code>
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
              <code>margin-right</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>spacing-03</code>
            </td>
            <td align="left">0.5rem / 8px</td>
          </tr>
          <tr>
            <td align="left">
              <code>margin-left</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>spacing-03</code>
            </td>
            <td align="left">0.5rem / 8px</td>
          </tr>
          <tr>
            <td align="left">
              <code>margin-left</code>
            </td>
            <td align="left">Icon</td>
            <td align="left">
              <code>spacing-03</code>
            </td>
            <td align="left">0.5rem / 8px</td>
          </tr>
        </tbody>
      </DxcTable>
      <h3 id="size">Size</h3>
      <p>
        The component <code>width</code> can adopt the following values:
      </p>
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
              <code>small</code>
            </td>
            <td>60px</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>240px</td>
          </tr>
          <tr>
            <td>
              <code>large</code>
            </td>
            <td>480px</td>
          </tr>
          <tr>
            <td>
              <code>fillParent</code>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <code>fitContent</code>
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
      <p>
        The component <code>height</code> is fixed:
      </p>
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
              <code>min-height</code>
            </td>
            <td>40px</td>
          </tr>
        </tbody>
      </DxcTable>
      <h3 id="margin">Margin</h3>
      <p>
        Button <code>margin</code> can use the values:
      </p>
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
              <code>xxsmall</code>
            </td>
            <td>6px</td>
          </tr>
          <tr>
            <td>
              <code>xsmall</code>
            </td>
            <td>16px</td>
          </tr>
          <tr>
            <td>
              <code>small</code>
            </td>
            <td>24px</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>36px</td>
          </tr>
          <tr>
            <td>
              <code>large</code>
            </td>
            <td>48px</td>
          </tr>
          <tr>
            <td>
              <code>xlarge</code>
            </td>
            <td>64px</td>
          </tr>
          <tr>
            <td>
              <code>xxlarge</code>
            </td>
            <td>100px</td>
          </tr>
        </tbody>
      </DxcTable>
      <p>
        These values can be applied independently to each side of the component:
        <code>top</code> <code>bottom</code> <code>left</code>{" "}
        <code>right</code>
      </p>
      <h4 id="typography">Typography</h4>
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
              <code>labelFontLineHeight</code>
            </td>
            <td align="left">line-height</td>
            <td align="left">
              <code>font-leading-normal</code>
            </td>
            <td>1.5 em</td>
          </tr>
          <tr>
            <td align="left">
              <code>labelLetterSpacing</code>
            </td>
            <td align="left">letter-spacing</td>
            <td align="left">
              <code>font-spacing-wide-01</code>
            </td>
            <td>0.025 em</td>
          </tr>
        </tbody>
      </DxcTable>
      <h3 id="primary">Primary</h3>
      <h4 id="color">Color</h4>
      <h5 id="base">Base</h5>
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
              <code>primaryBackgroundColor</code>
            </td>
            <td align="left">Button container</td>
            <td align="left">
              <code>color-purple-700</code>
            </td>
            <td align="left">#5f249f</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryFontColor</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>color-white</code>
            </td>
            <td align="left">#ffffff</td>
          </tr>
        </tbody>
      </DxcTable>
      <h5 id="interactive">Interactive</h5>
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
              <code>primaryHoverBackgroundColor</code>
            </td>
            <td align="left">Container fill:hover</td>
            <td align="left">
              <code>color-purple-800</code>
            </td>
            <td align="left">#4b1c7d</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryActiveBackgroundColor</code>
            </td>
            <td align="left">Container fill:active</td>
            <td align="left">
              <code>color-purple-900</code>
            </td>
            <td align="left">#321353</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryDisabledBackgroundColor</code>
            </td>
            <td align="left">Container fill:disabled</td>
            <td align="left">
              <code>color-grey-100</code>
            </td>
            <td align="left">#f2f2f2</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryDisabledFontColor</code>
            </td>
            <td align="left">Label:disabled</td>
            <td align="left">
              <code>color-grey-500</code>
            </td>
            <td align="left">#999999</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryFocusBorderColor</code>
            </td>
            <td align="left">Container border:focus</td>
            <td align="left">
              <code>color-blue-600</code>
            </td>
            <td align="left">#0095ff</td>
          </tr>
        </tbody>
      </DxcTable>
      <h4 id="border">Border</h4>
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
              <code>primaryBorderThickness</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-width-0</code>
            </td>
            <td align="left">0</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryBorderStyle</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-style-none</code>
            </td>
            <td align="left">none</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryBorderRadius</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-radius-medium</code>
            </td>
            <td align="left">0.25rem / 4px</td>
          </tr>
        </tbody>
      </DxcTable>
      <h4 id="typography-1">Typography</h4>
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
              <code>primaryFontFamily</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-family-sans</code>
            </td>
            <td align="left">&#39;Open Sans&#39;, sans-serif</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryFontSize</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-scale-03</code>
            </td>
            <td align="left">1 rem / 16px</td>
          </tr>
          <tr>
            <td align="left">
              <code>primaryBorderWeight</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-regular</code>
            </td>
            <td align="left">400</td>
          </tr>
        </tbody>
      </DxcTable>
      <h3 id="secondary">Secondary</h3>
      <h4 id="color-1">Color</h4>
      <h5 id="base-1">Base</h5>
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
              <code>secondaryBackgroundColor</code>
            </td>
            <td align="left">Container fill</td>
            <td align="left">
              <code>transparent</code>
            </td>
            <td align="left">transparent</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryFontColor</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>color-purple-700</code>
            </td>
            <td align="left">#5f249f</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryBorderColor</code>
            </td>
            <td align="left">Container border</td>
            <td align="left">
              <code>color-purple-700</code>
            </td>
            <td align="left">#5f249f</td>
          </tr>
        </tbody>
      </DxcTable>
      <h5 id="interactive-1">Interactive</h5>
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
              <code>secondaryHoverBackgroundColor</code>
            </td>
            <td align="left">Container fill:hover</td>
            <td align="left">
              <code>color-purple-700</code>
            </td>
            <td align="left">#5f249f</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryHoverFontColor</code>
            </td>
            <td align="left">Label:hover</td>
            <td align="left">
              <code>color-white</code>
            </td>
            <td align="left">#ffffff</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryActiveBackgroundColor</code>
            </td>
            <td align="left">Container fill:active</td>
            <td align="left">
              <code>color-purple-900</code>
            </td>
            <td align="left">#321353</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryDisabledBackgroundColor</code>
            </td>
            <td align="left">Container fill:disabled</td>
            <td align="left">
              <code>color-transparent</code>
            </td>
            <td align="left">transparent</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryDisabledFontColor</code>
            </td>
            <td align="left">Label:disabled</td>
            <td align="left">
              <code>color-grey-500</code>
            </td>
            <td align="left">#999999</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryFocusBorderColor</code>
            </td>
            <td align="left">Container border:focus</td>
            <td align="left">
              <code>color-blue-600</code>
            </td>
            <td align="left">#0095ff</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryDisabledBorderColor</code>
            </td>
            <td align="left">Container border:disabled</td>
            <td align="left">
              <code>color-grey-500</code>
            </td>
            <td align="left">#999999</td>
          </tr>
        </tbody>
      </DxcTable>
      <h4 id="border-1">Border</h4>
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
              <code>secondaryBorderThickness</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-width-1 </code>
            </td>
            <td align="left">1px</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryBorderStyle</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-style-solid</code>
            </td>
            <td align="left">solid</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryBorderRadius</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-radius-medium</code>
            </td>
            <td align="left">0.25rem / 4px</td>
          </tr>
        </tbody>
      </DxcTable>
      <h4 id="typography-2">Typography</h4>
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
              <code>secondaryFontFamily</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-family-sans</code>
            </td>
            <td align="left">&#39;Open Sans&#39;, sans-serif</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryFontSize</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-scale-03</code>
            </td>
            <td align="left">16px / 1 rem</td>
          </tr>
          <tr>
            <td align="left">
              <code>secondaryFontWeight</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-regular</code>
            </td>
            <td align="left">400</td>
          </tr>
        </tbody>
      </DxcTable>
      <h3 id="text">Text</h3>
      <h4 id="color-2">Color</h4>
      <h5 id="base-2">Base</h5>
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
              <code>textBackgroundColor</code>
            </td>
            <td align="left">Container fill</td>
            <td align="left">
              <code>color-transparent</code>
            </td>
            <td align="left">transparent</td>
          </tr>
          <tr>
            <td align="left">
              <code>textFontColor</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>color-purple-700</code>
            </td>
            <td align="left">#5f249f</td>
          </tr>
        </tbody>
      </DxcTable>
      <h6 id="interactive-2">Interactive</h6>
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
              <code>textHoverBackgroundColor</code>
            </td>
            <td align="left">Container fill:hover</td>
            <td align="left">
              <code>color-purple-100</code>
            </td>
            <td align="left">#f2eafa</td>
          </tr>
          <tr>
            <td align="left">
              <code>textActiveBackgroundColor</code>
            </td>
            <td align="left">Container fill:active</td>
            <td align="left">
              <code>color-purple-200</code>
            </td>
            <td align="left">#e5d5f6</td>
          </tr>
          <tr>
            <td align="left">
              <code>textDisabledBackgroundColor</code>
            </td>
            <td align="left">Container fill:disabled</td>
            <td align="left">
              <code>color-transparent</code>
            </td>
            <td align="left">transparent</td>
          </tr>
          <tr>
            <td align="left">
              <code>textDisabledFontColor</code>
            </td>
            <td align="left">Label:disabled</td>
            <td align="left">
              <code>color-grey-500</code>
            </td>
            <td align="left">#999999</td>
          </tr>
          <tr>
            <td align="left">
              <code>textFocusBorderColor</code>
            </td>
            <td align="left">Container border:focus</td>
            <td align="left">
              <code>color-blue-600</code>
            </td>
            <td align="left">#0095ff</td>
          </tr>
        </tbody>
      </DxcTable>
      <h4 id="border-2">Border</h4>
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
              <code>textBorderThickness</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-width-0</code>
            </td>
            <td align="left">0</td>
          </tr>
          <tr>
            <td align="left">
              <code>textBorderStyle</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-style-none</code>
            </td>
            <td align="left">none</td>
          </tr>
          <tr>
            <td align="left">
              <code>textBorderRadius</code>
            </td>
            <td align="left">Container</td>
            <td align="left">
              <code>border-radius-medium</code>
            </td>
            <td align="left">0.25rem / 4px</td>
          </tr>
        </tbody>
      </DxcTable>
      <h4 id="typography-3">Typography</h4>
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
              <code>textFontFamily</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-family-sans</code>
            </td>
            <td align="left">&#39;Open Sans&#39;, sans-serif</td>
          </tr>
          <tr>
            <td align="left">
              <code>textFontSize</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-scale-03</code>
            </td>
            <td align="left">16px / 1 rem</td>
          </tr>
          <tr>
            <td align="left">
              <code>textFontWeight</code>
            </td>
            <td align="left">Label</td>
            <td align="left">
              <code>font-regular</code>
            </td>
            <td align="left">400</td>
          </tr>
        </tbody>
      </DxcTable>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
    </>
  );
};

export default ButtonSpecs;
