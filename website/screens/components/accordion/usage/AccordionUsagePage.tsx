import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";

const AccordionUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">
          Accordions give users more granular control over the interface and
          help digest content in stages, rather than all at once.
        </DxcText>
        <DxcText as="p">
          The accordion component delivers large amounts of content in a small
          space through progressive disclosure.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Do’s</HeadingLink>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Dont’s</HeadingLink>
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
            taken on the page. (for example, alerts, confirmation or
            cancellation buttons).
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcStack>
  );
};

export default AccordionUsagePage;
