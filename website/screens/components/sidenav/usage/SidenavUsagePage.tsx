import { DxcText, DxcList, DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import sidenavVariants from "./images/sidenav_variants.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const SidenavUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Use the sidenav element to improve the discoverability of the application, making the
            navigation links accessible to the users.
          </DxcText>
          <DxcText>
            Keep in mind the type of the devices that you are developing for, and handle the
            behavior in a way that doesn&#39;t block or reduce the available space of the main area
            in the application
          </DxcText>
          <DxcText>
            Try to follow and order for the sidenav content and make use of hierarchy to
            differentiate between a title and a link
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
      <HeadingLink level={3}>Variants</HeadingLink>
      <Figure caption="Example of the overlay and push sidenav variants">
        <Image src={sidenavVariants} alt="Example of the overlay and push sidenav variants"/>
      </Figure>
        <DxcText as="p">
          Two different modes can be set in the element, according to the needs of the application
          and the relation between the main content and the sidenav.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>overlay</strong>
              </td>
              <td>Content is covered by the sidenav container when displayed</td>
            </tr>
            <tr>
              <td>
                <strong>push</strong>
              </td>
              <td>Content is pushed right when displayed</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/sidenav/usage/SidenavUsagePage.tsx" />
    </DxcStack>
  );
};

export default SidenavUsagePage;
