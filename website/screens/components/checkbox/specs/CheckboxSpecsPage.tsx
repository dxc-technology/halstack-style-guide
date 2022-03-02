import {
  DxcStack,
  DxcText,
  DxcList,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "next/image";
import HeadingLink from "../../../common/HeadingLink";
import checkboxAnatomy from "./images/checkbox_anatomy.png";
import checkboxSpecs from "./images/checkbox_specs.png";
import checkboxStack from "./images/checkbox_stack.png";
import checkboxStates from "./images/checkbox_states.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const CheckboxSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The following states are defined in the life cycle of the component:{" "}
          <strong>Unselected enabled</strong>, <strong>unselected hover</strong>
          , <strong>unselected focus</strong>,{" "}
          <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>,{" "}
          <strong>selected focus</strong> and <strong>selected disabled</strong>
        </DxcText>
        <Figure caption="Checkbox component states.">
          <Image src={checkboxStates} alt="Checkbox component states." />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Anatomy</HeadingLink>
        <Image src={checkboxAnatomy} alt="Checkbox anatomy." />
        <DxcList type="number">
          <DxcText>Checkbox input</DxcText>
          <DxcText>Label</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Stacking</HeadingLink>
        <DxcText as="p">
          Checkbox may be either vertically or horizontally stacked.
        </DxcText>
        <Figure caption="Checkbox group stacking types.">
          <Image src={checkboxStack} alt="Checkbox group stacking types." />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Type</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Vertical</strong>
              </td>
              <td>
                Related checkboxes that belong to the same category. The
                horizontal spacing between horizontally stacked checkboxes
                should be 8px.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Horizontal</strong>
              </td>
              <td>
                Checkboxes are independent of a category*. The vertical spacing
                between stacked checkboxes should be 32px. Don&#39;t stack more
                than 3 options
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Design Specifications</HeadingLink>
        <Figure caption="Component design specifications.">
          <Image src={checkboxSpecs} alt="Component design specifications." />
        </Figure>
        <HeadingLink level={3}>Color</HeadingLink>
        <HeadingLink level={4}>On-light</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>selectedBackgroundColor</code>
              </td>
              <td>Fill</td>
              <td>
                <code>color-blue-800</code>
              </td>
              <td>#0067b3</td>
            </tr>
            <tr>
              <td>
                <code>selectedHoverBackgroundColor</code>
              </td>
              <td>Fill:hover</td>
              <td>
                <code>color-blue-900</code>
              </td>
              <td>#003c66</td>
            </tr>
            <tr>
              <td>
                <code>selectedDisabledBackgroundColor</code>
              </td>
              <td>Fill:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>borderColor</code>
              </td>
              <td>Border</td>
              <td>
                <code>color-blue-800</code>
              </td>
              <td>#0067b3</td>
            </tr>
            <tr>
              <td>
                <code>hoverBorderColor</code>
              </td>
              <td>Border:hover</td>
              <td>
                <code>color-blue-900</code>
              </td>
              <td>#003c66</td>
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
                <code>checkColor</code>
              </td>
              <td>Check mark</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>disabledCheckColor</code>
              </td>
              <td>Check mark:disabled</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>fontColor</code>
              </td>
              <td>Label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>disabledFontColor</code>
              </td>
              <td>Label:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>focusColor</code>
              </td>
              <td>Outline:focus</td>
              <td>
                <code>color-blue-700</code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>On-dark</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>selectedBackgroundColorOnDark</code>
              </td>
              <td>Fill</td>
              <td>
                <code>color-grey-200</code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <code>selectedHoverBackgroundColorOnDark</code>
              </td>
              <td>Fill:hover</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>selectedDisabledBackgroundColorOnDark</code>
              </td>
              <td>Fill:disabled</td>
              <td>
                <code>color-grey-800</code>
              </td>
              <td>#4d4d4d</td>
            </tr>
            <tr>
              <td>
                <code>borderColorOnDark</code>
              </td>
              <td>Border</td>
              <td>
                <code>color-grey-200</code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <code>hoverBorderColorOnDark</code>
              </td>
              <td>Border:hover</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>disabledBorderColorOnDark</code>
              </td>
              <td>Border:disabled</td>
              <td>
                <code>color-grey-800</code>
              </td>
              <td>#4d4d4d</td>
            </tr>
            <tr>
              <td>
                <code>checkColorOnDark</code>
              </td>
              <td>Check mark</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>disabledCheckOnDark</code>
              </td>
              <td>Check mark:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>fontColorOnDark</code>
              </td>
              <td>Label</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>disabledFontColorOnDark</code>
              </td>
              <td>Label:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>focusColorOnDark</code>
              </td>
              <td>Outline:focus</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Spacing</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>inputMargin</code>
              </td>
              <td>Checkbox input</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>fontFamily</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <code>fontSize</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>fontWeight</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>border-width</code>
              </td>
              <td>Checkbox input</td>
              <td>
                <code>border-width-2</code>
              </td>
              <td>2px</td>
            </tr>
            <tr>
              <td>
                <code>border-style</code>
              </td>
              <td>Checkbox input</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>border-radius</code>
              </td>
              <td>Checkbox input</td>
              <td>
                <code>border-radius-small</code>
              </td>
              <td>0.125rem / 2px</td>
            </tr>
            <tr>
              <td>
                <code>border-width</code>
              </td>
              <td>Focus border</td>
              <td>
                <code>border-width-2</code>
              </td>
              <td>2px</td>
            </tr>
            <tr>
              <td>
                <code>border-style</code>
              </td>
              <td>Focus border</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>border-radius</code>
              </td>
              <td>Focus border</td>
              <td>
                <code>border-radius-medium</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Margin</HeadingLink>
        <DxcText as="p">
          Margin can be set independently for <code>top</code>,{" "}
          <code>right</code>, <code>bottom</code>, <code>left</code>.
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Accessibility</HeadingLink>
        <HeadingLink level={3}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
              text="SC 1.3.1: Info and Relationships"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
              text="SC 4.1.2: Name, Role, Value"
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox"
              text="3.7 Checkbox"
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/checkbox/specs/CheckboxSpecsPage.tsx" />
    </DxcStack>
  );
};

export default CheckboxSpecsPage;
