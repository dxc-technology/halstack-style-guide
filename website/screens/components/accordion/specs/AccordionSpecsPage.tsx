import {
  DxcList,
  DxcText,
  DxcStack,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import accordionStates from "./images/accordion_states.png";
import accordionAnatomy from "./images/accordion_anatomy.png";
import accordionPlacement from "./images/accordion_placement.png";
import accordionAlignment from "./images/accordion_alignment.png";
import accordionBehavior from "./images/accordion_behavior.png";
import accordionTriggers from "./images/accordion_triggers.png";
import accordionGroup from "./images/accordion_group.png";
import accordionMultiExpand from "./images/accordion_multi_expand.png";
import accordionContent from "./images/accordion_content.png";
import accordionHelperText from "./images/accordion_helper_text.png";
import accordionSpecs from "./images/accordion_specs.png";
import Figure from "../../../common/Figure";
import Image from "next/image";
import DocFooter from "../../../common/DocFooter";

const AccordionSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={accordionSpecs} alt="Component design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The accordion header can get four different states based on user
          interaction. States: enabled, hover, focus and disabled
        </DxcText>
        <Figure caption="Accordion states">
          <Image src={accordionStates} alt="Accordion states" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Formatting</HeadingLink>
        <HeadingLink level={4}>Anatomy</HeadingLink>
        <Figure caption="Accordion anatomy">
          <Image src={accordionAnatomy} alt="Accordion anatomy" />
        </Figure>
        <DxcList type="number">
          <DxcText>Header</DxcText>
          <DxcText>Custom icon (Optional)</DxcText>
          <DxcText>Title</DxcText>
          <DxcText>Helper text (Optional)</DxcText>
          <DxcText>Caret icon (Expand/collapse)</DxcText>
          <DxcText>Expanded panel</DxcText>
        </DxcList>
        <HeadingLink level={4}>Placement and alignment</HeadingLink>
        <HeadingLink level={5}>Placement</HeadingLink>
        <DxcText as="p">
          Accordions can be placed with main page content or placed inside of a
          container such as a side panel or tile.
        </DxcText>
        <Figure caption="Component placement examples">
          <Image src={accordionPlacement} alt="Component placement examples" />
        </Figure>
        <HeadingLink level={5}>Alignment</HeadingLink>
        <DxcText as="p">
          By default the chevron icon is placed on the end side of the header.
          This allows for the title on the start side to align with other type
          elements in the layout.
        </DxcText>
        <Figure caption="">
          <Image src={accordionAlignment} alt="Component elements alignment" />
        </Figure>
        <DxcText as="p">
          <em>
            <strong>Left</strong>. Place chevron icon at the end of the
            accordion header.
          </em>
        </DxcText>
        <DxcText as="p">
          <em>
            <strong>Right</strong>. Don’t place caret icon on the left.
          </em>
        </DxcText>
        <HeadingLink level={4}>Behavior and interaction</HeadingLink>
        <Figure caption="Examples of collapsed vs expanded accordions">
          <Image
            src={accordionBehavior}
            alt="Examples of collapsed vs expanded accordions"
          />
        </Figure>
        <DxcText as="p">
          The accordion component has two main states: collapsed and expanded.
          The chevron icon at the end of the accordion indicates which state the
          accordion is in. Accordions begin by default in the collapsed state
          with all content panels closed. Starting in a collapsed state gives
          the user a high level overview of the available information.
        </DxcText>
        <DxcList>
          <DxcText>
            Trigger collapsed and expanded states when clicking on either the
            header or icon.
          </DxcText>
          <DxcText>
            Use icons and animation to easily reflect collapsed and expanded
            states.
          </DxcText>
          <DxcStack gutter="xsmall">
            <DxcText>
              Use a chevron icon to indicate the expand/collapse behavior.
            </DxcText>
            <DxcList type="circle">
              <DxcText>
                When the panel expands, the chevron icon rotates 180 degrees
                counterclockwise.
              </DxcText>
              <DxcText>
                When the panel collapses, the chevron icon rotates 180 degrees
                clockwise.
              </DxcText>
            </DxcList>
          </DxcStack>
        </DxcList>
        <Figure caption="">
          <Image src={accordionTriggers} alt="Accordion trigger usage" />
        </Figure>
        <DxcText as="p">
          <em>
            <strong>Left</strong>. Trigger collapsed and expanded states when
            clicking on either the header or icon.
          </em>
        </DxcText>
        <DxcText as="p">
          <em>
            <strong>Right</strong>. Leave the header without caret or use a
            button to trigger the expand/collapse action.
          </em>
        </DxcText>
        <HeadingLink level={5}>Accordion group</HeadingLink>
        <DxcText as="p">
          Accordion headers are stacked vertically and different hierarchy
          levels are allowed.
        </DxcText>
        <Figure
          caption="The expandable section of an accordion group can contain different
          types of plain information or clickable components."
        >
          <Image src={accordionGroup} alt="image" />
        </Figure>
        <Figure
          caption="When one accordion panel is expanded, the rest of the group should be
          collapsed."
        >
          <Image src={accordionMultiExpand} alt="image" />
        </Figure>
        <HeadingLink level={5}>Mobile</HeadingLink>
        <DxcText as="p">
          In small devices, extremely long pages are detrimental to the user
          experience. Collapsing information minimizes excessive scrolling and
          gives an overview of the structure and content available on the page.
        </DxcText>
        <DxcList>
          <DxcText>In mobile use 100% of the available screen width.</DxcText>
        </DxcList>
        <HeadingLink level={4}>Content</HeadingLink>
        <DxcText as="p">
          The accordion component can contain other components, images,
          DxcTables, and every custom feature that can be supported inside the
          element container.
        </DxcText>
        <Figure caption="">
          <Image src={accordionContent} alt="Nesting and icon usage examples" />
        </Figure>
        <DxcText as="p">
          <em>
            <strong>Left</strong>. Nesting is allowed. Use in parent accordion
            Open Sans Semibold.
          </em>
        </DxcText>
        <DxcText as="p">
          <em>
            <strong>Right</strong>. Icons can be used as a complement to the
            header label.
          </em>
        </DxcText>
        <HeadingLink level={5}>Helper text</HeadingLink>
        <DxcText as="p">
          Helper text can be shown at the end of the accordion header when
          needed.
        </DxcText>
        <DxcList>
          <DxcText>Icons and images can not be used.</DxcText>
          <DxcText>
            Only add a helper text when there is plenty space in the accordion
            header, in mobile devices is not displayed.
          </DxcText>
          <DxcText>
            Try always to use a descriptive header so is no necessity to add
            extra information.
          </DxcText>
          <DxcText>
            Helper text content will be truncated 48px before reaching the
            accordion title. Title display has priority when space is limited.
          </DxcText>
        </DxcList>
        <Figure caption="Accordion helper text example">
          <Image
            src={accordionHelperText}
            alt="Accordion helper text example"
          />
        </Figure>
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
              <th align="left">Value (HEX)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <Code>titleLabelFontColor</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>color-black</Code>
              </td>
              <td align="left">#000000</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledTitleLabelFontColor</Code>
              </td>
              <td align="left">Title:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>arrowColor</Code>
              </td>
              <td align="left">Caret icon</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledArrowColor</Code>
              </td>
              <td align="left">Title:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>iconColor</Code>
              </td>
              <td align="left">Custom icon</td>
              <td align="left">
                <Code>color-purple-700</Code>
              </td>
              <td align="left">#5f249f</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledIconColor</Code>
              </td>
              <td align="left">Custom icon:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>assistiveTextFontColor</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>color-grey-700</Code>
              </td>
              <td align="left">#666666</td>
            </tr>
            <tr>
              <td align="left">
                <Code>disabledAssistiveTextFontColor</Code>
              </td>
              <td align="left">Helper text:disabled</td>
              <td align="left">
                <Code>color-grey-500</Code>
              </td>
              <td align="left">#999999</td>
            </tr>
            <tr>
              <td align="left">
                <Code>hoverBackgroundColor</Code>
              </td>
              <td align="left">Header background:hover</td>
              <td align="left">
                <Code>color-purple-100</Code>
              </td>
              <td align="left">#f2eafa</td>
            </tr>
            <tr>
              <td align="left">
                <Code>focusBorderColor</Code>
              </td>
              <td align="left">Header outline:focus</td>
              <td align="left">
                <Code>color-blue-600</Code>
              </td>
              <td align="left">#0095ff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>backgroundColor</Code>
              </td>
              <td align="left">Container background</td>
              <td align="left">
                <Code>color-white</Code>
              </td>
              <td align="left">#ffffff</td>
            </tr>
            <tr>
              <td align="left">
                <Code>boxShadowColor</Code>
              </td>
              <td align="left">Container shadow</td>
              <td align="left">-</td>
              <td align="left">#0000001a</td>
            </tr>
            <tr>
              <td align="left">
                <Code>accordionGroupSeparatorBorderColor</Code>
              </td>
              <td align="left">Separator</td>
              <td align="left">-</td>
              <td align="left">#0000001a</td>
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
                <Code>titleLabelFontFamily</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>font-family-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif;</td>
            </tr>
            <tr>
              <td align="left">
                <Code>titleLabelFontSize</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>font-scale-03</Code>
              </td>
              <td align="left">16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>titleLabelFontWeight</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>font-regular</Code>
              </td>
              <td align="left">400</td>
            </tr>
            <tr>
              <td align="left">
                <Code>titleLabelFontStyle</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>font-normal</Code>
              </td>
              <td align="left">normal</td>
            </tr>
            <tr>
              <td align="left">
                <Code>assistiveTextFontFamily</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>font-sans</Code>
              </td>
              <td align="left">&#39;Open Sans&#39;, sans-serif;</td>
            </tr>
            <tr>
              <td align="left">
                <Code>assistiveTextFontSize</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>font-scale-03</Code>
              </td>
              <td align="left">16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>assistiveTextFontWeight</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>font-light</Code>
              </td>
              <td align="left">300</td>
            </tr>
            <tr>
              <td align="left">
                <Code>assistiveTextFontStyle</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>font-regular</Code>
              </td>
              <td align="left">italic</td>
            </tr>
            <tr>
              <td align="left">
                <Code>assistiveTextLetterSpacing</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>font-tracking-wide-01</Code>
              </td>
              <td align="left">0.025em</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Iconography</HeadingLink>
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
                <Code>iconSize</Code>
              </td>
              <td align="left">Custom icon/Caret icon</td>
              <td align="left">-</td>
              <td align="left">24x24px</td>
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
                <Code>focusBorderStyle</Code>
              </td>
              <td align="left">Header:focus border</td>
              <td align="left">
                <Code>border-style-solid</Code>
              </td>
              <td align="left">solid</td>
            </tr>
            <tr>
              <td align="left">
                <Code>focusBorderThickness</Code>
              </td>
              <td align="left">Header:focus border</td>
              <td align="left">
                <Code>border-width-2</Code>
              </td>
              <td align="left">2px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>borderRadius</Code>
              </td>
              <td align="left">Accordion container</td>
              <td align="left">
                <Code>border-radius-medium</Code>
              </td>
              <td align="left">0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Size</HeadingLink>
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
                <Code>height</Code>
              </td>
              <td align="left">Header</td>
              <td align="left">-</td>
              <td align="left">48px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>min-width</Code>
              </td>
              <td align="left">Accordion container</td>
              <td align="left">-</td>
              <td align="left">280px</td>
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
                <Code>titleLabelPaddingRight</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>spacing-16</Code>
              </td>
              <td align="left">1rem / 16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>titleLabelPaddingLeft</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>spacing-0 </Code>
              </td>
              <td align="left">0rem / 0px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>titleLabelPaddingTop</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>spacing-0 </Code>
              </td>
              <td align="left">0rem / 0px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>titleLabelPaddingBottom</Code>
              </td>
              <td align="left">Title</td>
              <td align="left">
                <Code>spacing-0 </Code>
              </td>
              <td align="left">0rem / 0px</td>
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
                <Code>padding-left</Code>
              </td>
              <td align="left">Header</td>
              <td align="left">
                <Code>spacing-16</Code>
              </td>
              <td align="left">16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>padding-right</Code>
              </td>
              <td align="left">Header</td>
              <td align="left">
                <Code>spacing-16</Code>
              </td>
              <td align="left">16px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>padding-right</Code>
              </td>
              <td align="left">Helper text</td>
              <td align="left">
                <Code>spacing-24</Code>
              </td>
              <td align="left">24px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>padding</Code>
              </td>
              <td align="left">Caret icon</td>
              <td align="left">
                <Code>spacing-12</Code>
              </td>
              <td align="left">12px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>margin-right</Code>
              </td>
              <td align="left">Custom icon</td>
              <td align="left">
                <Code>spacing-12</Code>
              </td>
              <td align="left">12px</td>
            </tr>
            <tr>
              <td align="left">
                <Code>padding</Code>
              </td>
              <td align="left">Custom content</td>
              <td align="left">
                <DxcLink
                  href="https://github.com/dxc-technology/halstack-style-guide/tree/master/guidelines/principles/spacing#component-spacing-tokens"
                  text="Component spacing"
                />
              </td>
              <td align="left">
                <DxcLink
                  href="https://developer.dxc.com/tools/react/next/#/components/accordion"
                  text="[Prop] padding"
                />
              </td>
            </tr>
            <tr>
              <td align="left">
                <Code>margin</Code>
              </td>
              <td align="left">Accordion container</td>
              <td align="left">
                <DxcLink
                  href="https://github.com/dxc-technology/halstack-style-guide/tree/master/guidelines/principles/spacing#component-spacing-tokens"
                  text="Component spacing"
                />
              </td>
              <td align="left">
                <DxcLink
                  href="https://developer.dxc.com/tools/react/next/#/components/accordion"
                  text="[Prop] margin"
                />
              </td>
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
              href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
              text="SC 2.1.1 Keyboard"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
              text="SC 4.1.2 Name, Role, Value"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#accordion"
              text="3.1 Accordion (Sections With Show/Hide Functionality)"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html"
              text="Accordion Design Pattern"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>Usability known issues</HeadingLink>
        <HeadingLink level={5}>Printing</HeadingLink>
        <DxcText as="p">
          Accordions are often not well suited for printing documents and
          require people to print snippets of content at a time.
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/specs/AccordionSpecsPage.tsx" />
    </DxcStack>
  );
};

export default AccordionSpecsPage;
