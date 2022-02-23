import PageLayout from "../../common/PageLayout";
import { DxcHeading } from "@dxc-technology/halstack-react";
import HeadingLink from "../../common/HeadingLink";
import DxcText from "../../common/Text";
import DxcList from "../../common/List";
import DocFooter from "../../common/DocFooter";
import DxcStack from "../../common/Stack";

const Introduction = () => {
  return (
    <PageLayout>
      <DxcStack gutter="xxxlarge">
        <DxcStack gutter="large">
          <DxcHeading
            level={3}
            as="h1"
            text="Halstack Design System"
            weight="bold"
          ></DxcHeading>
          <DxcText>
            Halstack is the DXC Technology&#39;s open source design system for
            insurance products and digital experiences. Our system provides all
            the tools and resources needed to create superior, beautiful but
            above all, functional user experiences.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={4} as="h2">
            Design principles
          </HeadingLink>

          <DxcText>
            Halstack design principles are the fundamental part of DXC
            Technology&#39;s approach to provide guidance for development teams
            in order to deliver delightful and consistent user experiences to
            our customers:
          </DxcText>
          <DxcList>
            <DxcText>Balance </DxcText>
            <DxcText>Consistency </DxcText>
            <DxcText>Visual hierarchy </DxcText>
          </DxcList>
          <DxcText>
            All our components, design tokens, accessibility guidelines,
            responsive design techniques, and layout proposals have been
            carefully curated by DXC design and engineering teams with the
            objective of creating a unique visual language and ecosystem for our
            applications. This is the DXC way of creating User Experiences.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={4} as="h2">
            Open Source
          </HeadingLink>

          <DxcText>
            Halstack is an open source design system, this means that we work
            towards DXC Technology bussines needs, but it is open for anyone to
            use and contribute back to.
          </DxcText>
          <DxcText>
            We are charmed to receive external contributions to help us find
            bugs, design new features, or help us improve the project
            documentation. If you&#39;re interested, definitely check out our{" "}
            <a href="https://github.com/dxc-technology/halstack-style-guide/blob/master/contributing/overview.md">
              contribution guidelines
            </a>
            .
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={4} as="h2">
            Our Assets
          </HeadingLink>
          <HeadingLink level={5} as="h3">
            Design
          </HeadingLink>

          <DxcText>
            In addition to our design guidelines, we mantain an{" "}
            <a href="https://shared-assets.adobe.com/link/732533f4-d925-487e-4761-9a760574cfac">
              Adobe XD public library
            </a>
            in order to provide designers all the building blocks needed to
            quickly create solutions four our clients. Helping them focusing on
            innovation and user experience.
          </DxcText>
          <HeadingLink level={5} as="h3">
            Code implementation
          </HeadingLink>

          <DxcText>
            We also have our components documentation available in the following
            frameworks:
          </DxcText>
          <DxcList>
            <DxcText>
              <a href="https://developer.dxc.com/tools/react/next/#/">
                React documentation
              </a>
            </DxcText>
            <DxcText>
              <a href="https://developer.dxc.com/tools/angular/next/#/">
                Angular documentation
              </a>
            </DxcText>
          </DxcList>
          <DxcText>
            If you’re using a different framework, you can still build
            components by following our design guidelines.
          </DxcText>
          <HeadingLink level={5} as="h3">
            GitHub
          </HeadingLink>

          <DxcText>
            Our code implementation is available in the following GitHub public
            repositories:
          </DxcText>
          <DxcList>
            <DxcText>
              <a href="https://github.com/dxc-technology/halstack-style-guide">
                halstack-style-guide
              </a>
              : Design guidelines
            </DxcText>
            <DxcText>
              <a href="https://github.com/dxc-technology/halstack-react">
                halstack-react
              </a>
              : React CDK
            </DxcText>
            <DxcText>
              <a href="https://github.com/dxc-technology/halstack-angular">
                halstack-angular
              </a>
              : Angular CDK
            </DxcText>
          </DxcList>
        </DxcStack>
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
      </DxcStack>
    </PageLayout>
  );
};

export default Introduction;
