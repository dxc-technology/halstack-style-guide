import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import contentUsageTabImage from "./images/tabs_content.png";
import typographyUsageTabImage from "./images/tabs_typography.png";

const TabsUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">
          Tabs organize and allow navigation between groups of content that are
          related and at the same level of hierarchy.
        </DxcText>
        <HeadingLink level={3}>Do´s</HeadingLink>
        <DxcList>
          <DxcText>
            Use tabs for navigation when dividing content into different
            sections.
          </DxcText>
          <DxcText>
            The content should have the same level of hierarchy.
          </DxcText>
          <DxcText>
            Tabs can contain icons and text. Text labels should be short and
            have a clear relation to content.
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Dont´s</HeadingLink>
        <DxcList>
          <DxcText>
            Don’t use tabs to move through sequential content that needs to be
            read in a particular order.
          </DxcText>
          <DxcText>
            Avoid using tabs for comparing content across multiple tabs, such as
            different sizes of the same item.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Content</HeadingLink>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left:</strong> Text labels should clearly and succinctly
                describe the content of the tab they represent.
              </DxcText>
              <DxcText as="p">
                <strong>Center:</strong> Tab content should contain a cohesive
                set of items that share a common characteristics.
              </DxcText>
              <DxcText as="p">
                <strong>Right</strong>: Tab labels should appear in a single
                row. They can use a second line if needed, with truncated text.
              </DxcText>
            </>
          }
        >
          <Image src={contentUsageTabImage} alt="image" />
        </Figure>
        <HeadingLink level={3}>Typography</HeadingLink>
        <DxcText as="p">
          Avoid to use all caps for tab labels. ALL CAPS is rarely a good idea
          because it’s harder to read.{" "}
        </DxcText>
        <Figure
          caption="Is recommended to use sentence-case capitalization and semibold
            style for tab labels."
        >
          <Image alt="image" src={typographyUsageTabImage} />
        </Figure>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/tabs/usage/TabsUsagePage.tsx" />
    </DxcStack>
  );
};

export default TabsUsagePage;
