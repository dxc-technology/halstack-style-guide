import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";
import accordionPlacement from "./images/accordion_placement.png";
import accordionAlignment from "./images/accordion_alignment.png";
import accordionBehavior from "./images/accordion_behavior.png";
import accordionTriggers from "./images/accordion_triggers.png";
import Figure from "@/common/Figure";
import Image from "@/common/Image";

const AccordionUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">
          The accordion component delivers large amounts of content in a small
          space through progressive disclosure.
        </DxcText>
        <HeadingLink level={3}>Do&#39;s</HeadingLink>
        <DxcList>
          <DxcText>Displaying and grouping additional information.</DxcText>
          <DxcText>
            To shorten pages and reduce scrolling when content is not crucial to
            read in full.
          </DxcText>
          <DxcText>
            Adding granular control over the information on a given page.
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Don&#39;ts</HeadingLink>
        <DxcList>
          <DxcText>
            When most of the content on the page is needed to answer user
            questions.
          </DxcText>
          <DxcText>
            To display a list of clickable options, dropdown should be used
            instead.
          </DxcText>
          <DxcText>
            Displaying critical system information or a primary action to be
            taken on the page. (for example: alerts, confirmation or
            cancellation buttons).
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Placement and alignment</HeadingLink>
        <HeadingLink level={4}>Placement</HeadingLink>
        <DxcText as="p">
          Accordions can be placed with main page content or placed inside of a
          container such as a side panel or tile.
        </DxcText>
        <Figure caption="Component placement examples">
          <Image src={accordionPlacement} alt="Component placement examples" />
        </Figure>
        <HeadingLink level={4}>Alignment</HeadingLink>
        <DxcText as="p">
          By default the chevron icon is placed on the end side of the header.
          This allows for the title on the start side to align with other type
          elements in the layout.
        </DxcText>
        <Image src={accordionAlignment} alt="Component elements alignment" />
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
        <HeadingLink level={3}>Behavior and interaction</HeadingLink>
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
        <Image src={accordionTriggers} alt="Accordion trigger usage" />
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcStack>
  );
};

export default AccordionUsagePage;
