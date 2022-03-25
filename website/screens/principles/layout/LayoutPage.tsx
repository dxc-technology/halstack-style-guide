import PageLayout from "../../common/PageLayout";
import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../common/HeadingLink";
import DocFooter from "../../common/DocFooter";
import standardLayout from "./images/standard_layout.png";
import sidenavLayout from "./images/sidenav_layout.png";
import asideLayout from "./images/aside_layout.png";
import pairedLayout from "./images/paired_layout.png";
import symmetricalLayout from "./images/symmetrical_layout.png";

const Layout = () => {
  return (
    <PageLayout>
      <DxcStack gutter="xxxlarge">
        <DxcStack gutter="large">
          <HeadingLink level={1}>Layout</HeadingLink>
          <DxcText as="p">
            Since not all applications have the same layout, we have a
            predefined layout configuration factored into our design system so
            designers and developers don&#39;t start from a blank page. The most
            common screen configurations in our applications have been
            considered when building our design principles and component
            catalog.
          </DxcText>
          <DxcText as="p">
            Side navigation, tab navigation, flow navigation, and more are valid
            experience patterns to navigate in your applications built with
            Halstack Design System. This is all about thinking and considering
            what is the best approach for your users, what is the best
            organization to display your content, and make a nicer and clearer
            User Experience. That simple.
          </DxcText>
          <DxcText as="p">
            Every application that will be designed into the DXC environment
            should fulfill a series of requirements to give consistency with the
            applications using the design system.
          </DxcText>
          <DxcText as="p">
            There are generic elements that each application should implement in
            most cases, making the design cohesive across the set of
            applications.
          </DxcText>
          <DxcText as="p">
            Regarding this principle, we offer a set of prebuilt layouts to be
            used in different scenarios and identified as a pattern in most of
            our applications.
          </DxcText>
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Application Layout</HeadingLink>
          <DxcText as="p">
            A widely used layout in many applications, keeping it simple, with
            three main areas with hierarchical distribution and a defined role.
            Header, main content, and footer.
          </DxcText>
          <DxcText as="p">
            Easy to adapt to a changing environment, referring to other devices
            like mobile and tablet, the structure of the content and the
            alignment of the components won&#39;t be affected by the lack of
            space, maintaining the same order and flow.
          </DxcText>
          <DxcText as="p">
            The main content is the most customizable part, acting as the main
            content of the application and the main focus where the user will
            find the relevant information about the site.
          </DxcText>
          <DxcText as="p">
            Behind the scenes, there are some aspects that we are controlling,
            like the definition of a minimum height to the main space making by
            default the layout adaptive to the viewport height even if there is
            no content inside the main section. If the main area has content
            taller than the viewport size, the container will become scrollable.
          </DxcText>
          <DxcText as="p">
            Maximum width is set for the main area of 1320 pixels, giving enough
            whitespace to the UI and the elements to breath, and keeping the
            content center on the screen to call the attention of the user.
          </DxcText>
          <DxcText as="p">
            Margins from the left and right sides are also other aspects that
            the component itself is controlling, adapting it depending on the
            device and the needs of the applications.Additionally, a margin area
            is defined following the spacing with other components of the layout
            with these values:- Margin for desktop: 64 pixels (top), 80 pixels
            (bottom), 15.6% (left/right)- Margin for tablet: 48 pixels (top), 64
            pixels (bottom), 9.6 (left/right)- Margin for mobile: 36 pixels
            (top), 48 pixels (bottom), 6.4% (left/right)
          </DxcText>
          <DxcText as="p">
            The specifications of the header and footer will remain the same in
            the rest of the layouts, with the following values:- Header: 68
            pixels (height), 100% (width)- Footer: 128 pixels (height), 100%
            (width)
          </DxcText>
          <Image src={standardLayout} alt="Standard layout" />
          <HeadingLink level={3}>
            Application Layout with side navigation
          </HeadingLink>
          <DxcText as="p">
            In technical applications and documentation sites, where you need to
            show an overview of all the items available, a side navigation bar
            can be included as part of the application layout.
          </DxcText>
          <DxcText as="p">
            This sidenav component works like an index of a book, displaying
            several actionable items that trigger an action, refreshing the
            information of the main content area, or navigating to another
            resource in the page hierarchy.
          </DxcText>
          <DxcText as="p">
            As opposed to the previous layouts, in this case, the sidenav needs
            to adopt a different behavior in responsive mode, due to the lack of
            spacing for touchable devices. So in case of keeping it visible as
            it can be configured in the desktop version, the component can be
            triggered to show and hide the content inside of it, improving the
            user experience and letting the main content enough space on the
            screen.
          </DxcText>
          <DxcText as="p">
            Specifications for the layout:- Sidenav: 300 pixels (width), 100%
            (height)- Main content margins for desktop: 64 pixels (top), 80
            pixels (bottom), 8.6% (right), 5.4% (left)- Main content margins for
            tablet: 48 pixels (top), 64 pixels (bottom), 9.6 (left/right)- Main
            content margins for mobile: 36 pixels (top), 48 pixels (bottom),
            6.4% (left/right)
          </DxcText>
          <DxcText as="p">
            If the sidenav is used in push mode, once the component is hidden by
            the left side of the screen, the main content will take all the
            available space, increasing the size of the left margin to match
            with the value of the right margin.
          </DxcText>
          <DxcText as="p">
            The content will be rendered in the middle of the screen and the
            look will be similar to the one reproduced using the standard
            layout.
          </DxcText>
          <Image src={sidenavLayout} alt="Side navigation" />
          <HeadingLink level={3}>
            Application Layout with secondary aside navigation
          </HeadingLink>
          <DxcText as="p">
            A component that can be included as part of the application layout
            in certain occasions, is the secondary aside navigation bar. It
            shows different types of descriptive icons or actions that will
            represent some current selections of the status of the interface.
            Both elements can be interchangeable in terms of position due to the
            requirements of the applications and the importance of the actions
            associated with each element.
          </DxcText>
          <DxcText as="p">
            For that class of layout, the height of the content won&#39;t
            increase based on the content itself, on the other side, the area
            will have a scroll area to maintain the distribution and not lose
            focus of the current hierarchy of the interface.
          </DxcText>
          <DxcText as="p">
            In terms of responsive design, the aside element will stay at the
            same position and accessible at any time of the interaction process.
          </DxcText>
          <DxcText as="p">
            Same specifications apply for all the components mentioned before,
            adding the measures of the aside element:- Aside: 88 pixels (width),
            100% (height)This layout is thought to be adaptive to the viewport,
            meaning that in case the content overflow the available space, the
            container will display a scrollbar to access all the information
            inside it.
          </DxcText>
          <Image src={asideLayout} alt="Aside navigation" />
        </DxcStack>
        <DxcStack gutter="large">
          <HeadingLink level={2}>Content Layout</HeadingLink>
          <HeadingLink level={3}>Two column layout</HeadingLink>
          <DxcText as="p">
            A special layout that is designed for certain scenarios where the
            content and the dual-view are key.
          </DxcText>
          <DxcText as="p">
            Every side of the interface can be customized with custom content
            with a relation between. It can be an image related to the content
            on his right/left, a login page with detail information on the near
            side, or a table with actions that will make some effect on the
            information of the other part of the UI, like filtering, searching
            or highlight. Even it can be used as a splash screen during the
            loading of the application.
          </DxcText>
          <DxcText as="p">
            Thinking about the distribution on mobile and tablet, the left part
            always is on top and the right side will be positioned at the
            bottom. So take it present at the time of design and place the
            information on each side.
          </DxcText>
          <DxcText as="p">
            There should be a relationship aspect between the two columns, to
            preserve size and scaling. So we can establish a rule going from 1/4
            to 3/4 where, 1/4 is the minimum value that a column can take and
            3/4 is the maximum value to be expanded by one single column.
          </DxcText>
          <DxcText as="p">
            Accordingly, the other column should take the rest of available
            space based on the ratio selected for each of them, making the 100%
            of the screen width.
          </DxcText>
          <Image src={pairedLayout} alt="Two column layout" />
          <HeadingLink level={3}>Symmetrical layout</HeadingLink>
          <DxcText as="p">
            A flexible layout to distribute the content through three flexible
            columns in the main area of the screen.
          </DxcText>
          <DxcText as="p">
            As a layout component, it doesn&#39;t provide any control of the
            content inside of each section, but it is intended mainly for back
            office applications, where the user needs to have a higher amount of
            information compared with a standard user interface application.
          </DxcText>
          <DxcText as="p">
            Even the relevant part of the screen is the middle column as it has
            a larger space and it will be updated with relevant information
            about the service, both columns on the sides can be used to display
            additional information to complement the main part of the screen,
            actionable items related with the business or even news and updates
            from some topics of importance.
          </DxcText>
          <DxcText as="p">
            Specifications for paired layout:- Main margin for desktop: 64
            pixels (top), 80 pixels (bottom), 15.6% (left/right)- Side columns:
            270 pixels (width), 64 pixels (margin top), 80 pixels (margin
            bottom)
          </DxcText>
          <Image src={symmetricalLayout} alt="Symmetrical layout" />
        </DxcStack>
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/principles/layout/LayoutPage.tsx" />
      </DxcStack>
    </PageLayout>
  );
};

export default Layout;