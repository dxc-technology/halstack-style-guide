import PageLayout from "../../common/PageLayout";
import { DxcHeading } from "@dxc-technology/halstack-react";
import HeadingLink from "../../common/HeadingLink";

const Introduction = () => {
  return (
    <PageLayout>
      <h1>Halstack Design System</h1>
      <p>
        Halstack is the DXC Technology&#39;s open source design system for
        insurance products and digital experiences. Our system provides all the
        tools and resources needed to create superior, beautiful but above all,
        functional user experiences.
      </p>
      <HeadingLink elementId="design-principles">
        <h2>Design principles</h2>
      </HeadingLink>
      <p>
        Halstack design principles are the fundamental part of DXC
        Technology&#39;s approach to provide guidance for development teams in
        order to deliver delightful and consistent user experiences to our
        customers:
      </p>
      <ul>
        <li>Balance </li>
        <li>Consistency </li>
        <li>Visual hierarchy </li>
      </ul>
      <p>
        All our components, design tokens, accessibility guidelines, responsive
        design techniques, and layout proposals have been carefully curated by
        DXC design and engineering teams with the objective of creating a unique
        visual language and ecosystem for our applications. This is the DXC way
        of creating User Experiences.
      </p>
      <h2 id="open-source">Open Source</h2>
      <p>
        Halstack is an open source design system, this means that we work
        towards DXC Technology bussines needs, but it is open for anyone to use
        and contribute back to.
      </p>
      <p>
        We are charmed to receive external contributions to help us find bugs,
        design new features, or help us improve the project documentation. If
        you&#39;re interested, definitely check out our{" "}
        <a href="https://github.com/dxc-technology/halstack-style-guide/blob/master/contributing/overview.md">
          contribution guidelines
        </a>
        .
      </p>
      <h2 id="our-assets">Our Assets</h2>
      <h3 id="design">Design</h3>
      <p>
        In addition to our design guidelines, we mantain an{" "}
        <a href="https://shared-assets.adobe.com/link/732533f4-d925-487e-4761-9a760574cfac">
          Adobe XD public library
        </a>{" "}
        in order to provide designers all the building blocks needed to quickly
        create solutions four our clients. Helping them focusing on innovation
        and user experience.
      </p>
      <h3 id="code-implementation">Code implementation</h3>
      <p>
        We also have our components documentation available in the following
        frameworks:
      </p>
      <ul>
        <li>
          <a href="https://developer.dxc.com/tools/react/next/#/">
            React documentation
          </a>
        </li>
        <li>
          <a href="https://developer.dxc.com/tools/angular/next/#/">
            Angular documentation
          </a>
        </li>
      </ul>
      <p>
        If you’re using a different framework, you can still build components by
        following our design guidelines.
      </p>
      <h3 id="github">GitHub</h3>
      <p>
        Our code implementation is available in the following GitHub public
        repositories:
      </p>
      <ul>
        <li>
          <a href="https://github.com/dxc-technology/halstack-style-guide">
            halstack-style-guide
          </a>
          : Design guidelines
        </li>
        <li>
          <a href="https://github.com/dxc-technology/halstack-react">
            halstack-react
          </a>
          : React CDK
        </li>
        <li>
          <a href="https://github.com/dxc-technology/halstack-angular">
            halstack-angular
          </a>
          : Angular CDK
        </li>
      </ul>
      <p>
        <a href="https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/principles/overview/README.md">
          Edit this page on Github
        </a>
      </p>
    </PageLayout>
  );
};

export default Introduction;
