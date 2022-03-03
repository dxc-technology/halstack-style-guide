import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Image from "next/image";
import Code from "../../../common/Code";
import Figure from "../../../common/Figure";
import radioStates from "./images/radio_states.png";
import radioAnatomy from "./images/radio_anatomy.png";
import radioStacking from "./images/radio_stacking.png";
import radioSpecs from "./images/radio_specs.png";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const RadioSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={radioSpecs} alt="Component design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The following states are defined in the life cycle of the component:{" "}
          <strong>unselected enabled</strong>, <strong>unselected hover</strong>
          , <strong>unselected focus</strong>,{" "}
          <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>,{" "}
          <strong>selected focus</strong> and <strong>selected disabled</strong>
          .
        </DxcText>
        <Figure caption="Radio button component states">
          <Image src={radioStates} alt="Radio button component states" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Figure caption="Radio button component anatomy">
          <Image src={radioAnatomy} alt="Radio button component anatomy" />
        </Figure>
        <DxcList type="number">
          <DxcText>Radio input</DxcText>
          <DxcText>Label</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Stacking</HeadingLink>
        <Figure caption="Radio button stacking options">
          <Image src={radioStacking} alt="Radio button stacking options" />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Name</th>
              <th align="left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">Vertical</td>
              <td align="left">
                Short lists of radio buttons should be stacked vertically below
                a descriptive label to better associate the group. Options that
                are listed vertically are easier to read
              </td>
            </tr>
            <tr>
              <td align="left">Horizontal</td>
              <td align="left">
                Multiple radio buttons may be displayed horizontally across the
                page while keeping them aligned within their respective columns.
                Here, it is needed to have in consideration that the linear
                radio buttons represent some challenge, because it&#39;s
                difficult to scan and localize
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          *In any case, in the specification it is specified the ideal distance
          between component with label in the same horizontal edge to avoid the
          problem of pairing and scannability.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <HeadingLink level={5}>On-light</HeadingLink>
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
                <Code>color</Code>
              </td>
              <td align="left">Radio input</td>
              <td align="left">
                <Code>color-blue-800</Code>
              </td>
              <td align="left">#0067b3</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hoverColor</Code>
              </td>
              <td align="left">Radio input:hover</td>
              <td align="left">
                <Code>color-blue-900</Code>
              </td>
              <td align="left">#003c66</td>
            </tr>
            <tr>
              <td align="left">
                <Code>focusColor</Code>
              </td>
              <td align="left">Radio input:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledColor</Code>
              </td>
              <td align="left">Radio input:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>fontColor</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>color-black</Code>
              </td>
              <td align="left">#000000</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledFontColor</Code>
              </td>
              <td align="left">Label:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>On-dark</HeadingLink>
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
                <Code>colorOnDark</Code>
              </td>
              <td align="left">Radio input</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#e6e6e6</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hoverColor</Code>
              </td>
              <td align="left">Radio input:hover</td>
              <td align="left">
                <Code>color-blue-900</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>focusColorOnDark</Code>
              </td>
              <td align="left">Radio input:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledColorOnDark</Code>
              </td>
              <td align="left">Radio input:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>fontColorOnDark</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledFontColorOnDark</Code>
              </td>
              <td align="left">Label:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
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
                <Code>fontFamily</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-family-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td align="left">
                <Code>fontSize</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-scale-03</Code>
              </td>
              <td align="left">1rem / 16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>fontWeight</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-weight-regular</Code>
              </td>
              <td align="left">400</td>
            </tr>
            <tr>
              <td align="left">
                <Code>fontStyle</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>font-style-normal</Code>
              </td>
              <td align="left">400</td>
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
              <td align="left">Radio input</td>
              <td align="left">
                <Code>border-width-2</Code>
              </td>
              <td align="left">2px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>border-style</Code>
              </td>
              <td align="left">Radio input</td>
              <td align="left">
                <Code>border-style-solid</Code>
              </td>
              <td align="left">solid</td>
            </tr>
            <tr>
              <td align="left">
                <Code>border-width</Code>
              </td>
              <td align="left">Focus border</td>
              <td align="left">
                <Code>border-width-2</Code>
              </td>
              <td align="left">2px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>border-style</Code>
              </td>
              <td align="left">Focus border</td>
              <td align="left">
                <Code>border-style-solid</Code>
              </td>
              <td align="left">solid</td>
            </tr>
          </tbody>
        </DxcTable>
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
                <Code>labelMargin</Code>
              </td>
              <td align="left">Label</td>
              <td align="left">
                <Code>spacing-8</Code>
              </td>
              <td align="left">0.5rem / 8px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>groupVerticalSpacing</Code>
              </td>
              <td align="left">Radio</td>
              <td align="left">
                <Code>spacing-16</Code>
              </td>
              <td align="left">1rem / 16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>groupHorizontalSpacing</Code>
              </td>
              <td align="left">Radio</td>
              <td align="left">
                <Code>spacing-32</Code>
              </td>
              <td align="left">2rem / 32px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Size</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th align="left">Property</th>
              <th align="left">Element</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>width</Code>
              </td>
              <td align="left">Radio input</td>
              <td align="left">18px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>width</Code>
              </td>
              <td align="left">focus outline</td>
              <td align="left">24px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>height</Code>
              </td>
              <td align="left">Radio input</td>
              <td align="left">18px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>height</Code>
              </td>
              <td align="left">focus outline</td>
              <td align="left">26px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          Margin can be set independently for <Code>top</Code>,{" "}
          <Code>right</Code>,<Code>bottom</Code>, <Code>left</Code>.
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
              text="SC 1.3.1: Info and Relationships"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
              text="SC 3.3.2: Labels or Instructions"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
              text="SC 2.4.6: Headings and Labels"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton"
              text="3.12 Radio group"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio/specs/RadioSpecsPage.tsx" />
    </DxcStack>
  );
};

export default RadioSpecsPage;
