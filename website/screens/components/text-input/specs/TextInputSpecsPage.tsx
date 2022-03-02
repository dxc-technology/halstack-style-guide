import {
  DxcText,
  DxcTable,
  DxcLink,
  DxcStack,
  DxcList,
} from "@dxc-technology/halstack-react";
import Image from "next/image";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";
import Figure from "../../../common/Figure";
import inputStates from "./images/input_states.png";
import inputAnatomy from "./images/input_anatomy.png";
import inputSpecs from "./images/input_specs.png";

const TextInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>States</HeadingLink>
        <DxcText as="p">
          Text input states: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Example of the text input component states.">
          <Image
            src={inputStates}
            alt="Example of the text input component states."
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Anatomy</HeadingLink>
        <Image src={inputAnatomy} alt="Text input anatomy." />
        <DxcList type="number">
          <DxcText>Label text</DxcText>
          <DxcText>Helper text (Optional)</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Clear action (Optional)</DxcText>
          <DxcText>Input action (Optional)</DxcText>
          <DxcText>Input container</DxcText>
          <DxcText>Placeholder text</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Prefix</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Design Specifications</HeadingLink>
        <Figure caption="Specifications for text input component.">
          <Image
            src={inputSpecs}
            alt="Specifications for text input component."
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Color</HeadingLink>
        <HeadingLink level={3}>Base</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>labelFontColor</code>
              </td>
              <td>Label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>valueFontColor</code>
              </td>
              <td>Value</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontColor</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>placeholderFontColor</code>
              </td>
              <td>Placeholder</td>
              <td>
                <code>color-grey-600</code>
              </td>
              <td>#808080</td>
            </tr>
            <tr>
              <td>
                <code>enabledBorderColor</code>
              </td>
              <td>Border:enabled</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>actionIconColor</code>
              </td>
              <td>Action icon</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>actionBackgroundColor</code>
              </td>
              <td>Action</td>
              <td>
                <code>color-transparent</code>
              </td>
              <td>#transparent</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Interactive</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>hoverBorderColor</code>
              </td>
              <td>Border:hover</td>
              <td>
                <code>color-purple-500</code>
              </td>
              <td>#a46ede</td>
            </tr>
            <tr>
              <td>
                <code>focusBorderColor</code>
              </td>
              <td>Border:focus</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <code>errorBorderColor</code>
              </td>
              <td>Border:error</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <code>hoverErrorBorderColor</code>
              </td>
              <td>Border:hover on error</td>
              <td>
                <code>color-red-600</code>
              </td>
              <td>#fe0123</td>
            </tr>
            <tr>
              <td>
                <code>disabledBorderColor</code>
              </td>
              <td>Border:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>errorMessageColor</code>
              </td>
              <td>Error message</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <code>disabledContainerFillColor</code>
              </td>
              <td>Input container:disabled</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>disabledLabelFontColor</code>
              </td>
              <td>Label:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>disabledValueFontColor</code>
              </td>
              <td>Value:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>disabledHelperTextFontColor</code>
              </td>
              <td>Helper text:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>disabledPlaceholderFontColor</code>
              </td>
              <td>Placeholder:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>hoverActionBackgroundColor</code>
              </td>
              <td>Action:hover</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>focusActionBorderColor</code>
              </td>
              <td>Action:focus</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <code>activeActionBackgroundColor</code>
              </td>
              <td>Action:active</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <code>disabledActionBackgroundColor</code>
              </td>
              <td>Action:disabled</td>
              <td>
                <code>color-transparent</code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <code>hoverActionIconColor</code>
              </td>
              <td>Action icon:hover</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>focusActionIconColor</code>
              </td>
              <td>Action icon:focus</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>activeActionIconColor</code>
              </td>
              <td>Action icon:active</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>disabledActionIconColor</code>
              </td>
              <td>Action icon:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Suffix/Prefix</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>suffixColor</code>
              </td>
              <td>Suffix</td>
              <td>
                <code>color-grey-700</code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <code>prefixColor</code>
              </td>
              <td>Prefix</td>
              <td>
                <code>color-grey-700</code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <code>disabledSuffixColor</code>
              </td>
              <td>Suffix:disabled</td>
              <td>
                <code>color-grey-400</code>
              </td>
              <td>#bfbfbf</td>
            </tr>
            <tr>
              <td>
                <code>disabledPrefixColor</code>
              </td>
              <td>Prefix:disabled</td>
              <td>
                <code>color-grey-400</code>
              </td>
              <td>#bfbfbf</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>fontFamily</code>
              </td>
              <td>All</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <code>labelFontSize</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>labelFontWeight</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-weight-bold</code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <code>labelFontStyle</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>labelLineHeight</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-leading-loose-01</code>
              </td>
              <td>1.715em</td>
            </tr>
            <tr>
              <td>
                <code>valueFontSize</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-scale-03</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>valueFontWeight</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>valueFontStyle</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontSize</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-scale-01</code>
              </td>
              <td>12px</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontWeight</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontStyle</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>helperTextLineHeight</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>optionalLabelFontWeight</code>
              </td>
              <td>Optional indicator</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Error message</td>
              <td>
                <code>font-scale-01</code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Error message</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>line-height</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>line-height</code>
              </td>
              <td>Error message</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Placeholder</td>
              <td>
                <code>font-scale-03</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Placeholder</td>
              <td>
                <code>font-regular</code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Spacing</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>inputMarginTop</code>
              </td>
              <td>Input container</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>inputMarginBottom</code>
              </td>
              <td>Input container</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>margin-left</code>
              </td>
              <td>Error icon</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>margin-left</code>
              </td>
              <td>Action</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>margin-left</code>
              </td>
              <td>Prefix</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>padding-right</code>
              </td>
              <td>Prefix</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>padding-left</code>
              </td>
              <td>Suffix</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>margin-left</code>
              </td>
              <td>Suffix</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>margin-right</code>
              </td>
              <td>Suffix</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>padding-left</code>
              </td>
              <td>Input</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>padding-right</code>
              </td>
              <td>Input</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>padding-left</code>
              </td>
              <td>Input container</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>padding-right</code>
              </td>
              <td>Input container</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container:focus</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container:focus</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>Input container:focus</td>
              <td>
                <code>-</code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>Input container:error</td>
              <td>
                <code>-</code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Width</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Width</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>small</code>
              </td>
              <td>240px</td>
            </tr>
            <tr>
              <td>
                <code>medium</code> (<em>default</em>)
              </td>
              <td>360px</td>
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
              <td>100%</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Margin</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Margin</th>
              <th>Value</th>
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
        <DxcText>
          And also apply different values to each side of the component:{" "}
          <code>top</code> <code>bottom</code> <code>left</code>{" "}
          <code>right</code>.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Accessibility</HeadingLink>
        <HeadingLink level={3}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
              text="
            1.3.1: Information and Relationships"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification"
              text="3.3.1: Error Identification"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
              text="3.3.2: Labels and Instructions"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
              text="3.3.3: Error Suggestion"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
              text="
            4.1.2: Name, Role, Value"
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/text-input/specs/TextInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TextInputSpecsPage;
