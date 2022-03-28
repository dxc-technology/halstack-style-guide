import PageLayout from "../../common/PageLayout";
import {
  DxcHeading,
  DxcText,
  DxcList,
  DxcStack,
  DxcLink,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../common/HeadingLink";
import DocFooter from "../../common/DocFooter";

const Design = () => {
  return (
    <PageLayout>
      <DxcStack gutter="xxxlarge">
        <DxcStack gutter="large">
          <DxcHeading
            level={1}
            text="Design"
            weight="bold"
          ></DxcHeading>
          <DxcText as="p">
            Halstack is the DXC Technology&#39;s open source design system for
            insurance products and digital experiences. Our system provides all
            the tools and resources needed to create superior, beautiful but
            above all, functional user experiences.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Design kits</HeadingLink>

          <DxcLink
              href="https://shared-assets.adobe.com/link/732533f4-d925-487e-4761-9a760574cfac"
              text="Adobe XD public library"
            />{" "}
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Component usage</HeadingLink>

        </DxcStack>
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
      </DxcStack>
    </PageLayout>
  );
};

export default Design;