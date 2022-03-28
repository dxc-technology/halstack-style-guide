import PageLayout from "../../common/PageLayout";
import {
  DxcHeading,
  DxcText,
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
            We provide tools for designers that help them to create any application using Halstack design system. 
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Design guidance</HeadingLink>

          <DxcText as="p">The design system principles and component usage</DxcText>


        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Design kits</HeadingLink>

          <DxcText as="p">We have available and Adobe XD public library that is constantly updated with </DxcText>

          <DxcLink
              href="https://shared-assets.adobe.com/link/732533f4-d925-487e-4761-9a760574cfac"
              text="Adobe XD public library"
            />{" "}
        </DxcStack>
        
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
      </DxcStack>
    </PageLayout>
  );
};

export default Design;