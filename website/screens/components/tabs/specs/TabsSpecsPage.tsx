import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcLink,
  DxcList,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import specsImage from "./images/tabs_specs.png";
import specsFixed from "./images/tabs_fixed_specs.png";
import specsFixed72 from "./images/tabs_fixed_specs72.png";
import specsScrollable from "./images/tabs_scrollable.png";
import specsNotification from "./images/tabs_notification.png";
import statesTabs from "./images/tabs_states_specs.png";
import specsAnatomy from "./images/tabs_anatomy.png";
import tabsPlacement from "./images/tabs_placement.png";
import defaultPlacement from "./images/tabs_default_placement.png";
import scrollablePlacement from "./images/tabs_scrollable_placement.png";
import scrollablePanelNavigation from "./images/tabs_scrollable_panel_navigation.png";
import mobileNavigation from "./images/tabs_mobile_navigation.png";
import panelNavigation from "./images/tabs_panel_navigation.png";
import tabsAlignment from "./images/tabs_alignment.png";
import tabsPanelBehavior from "./images/tabs_panel_behavior.png";
import tabsScrollablePanelBehavior from "./images/tabs_scrollable_panel_behavior.png";
import Figure from "../../../common/Figure";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";

const TabsSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <HeadingLink level={3}>Min / Max width</HeadingLink>
        <Image src={specsImage} alt="image" />
        <HeadingLink level={3}>Fixed tabs</HeadingLink>
        <Figure caption="48px height fixed tabs.">
          <Image src={specsFixed} alt="image" />
        </Figure>

        <Figure caption="72px height fixed tabs.">
          <Image src={specsFixed72} alt="image" />
        </Figure>

        <HeadingLink level={3}>Scrollable tabs</HeadingLink>
        <Figure caption="Use a scroll indicator in scrollable tabs.">
          <Image src={specsScrollable} alt="image" />
        </Figure>
        <HeadingLink level={3}>Notification tabs</HeadingLink>
        <Figure caption="Notification badges are always positioned aligned with label/icon in 48px tab container and at top right of the 72px tab container.">
          <Image src={specsNotification} alt="image" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>States</HeadingLink>
        <DxcText as="p">
          Tabs can get different states based on user interaction. States:
          inactive, enabled, hover, pressed, focus and disabled.
        </DxcText>
        <Image src={statesTabs} alt="image" />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Anatomy</HeadingLink>
        <Image src={specsAnatomy} alt="image" />
        <DxcList type="number">
          <DxcText>Container</DxcText>
          <DxcText>Active icon (Optional if there’s a label)</DxcText>
          <DxcText>Active text label (Optional if there’s an icon)</DxcText>
          <DxcText>Active tab indicator</DxcText>
          <DxcText>Inactive icon (Optional if there’s a label)</DxcText>
          <DxcText>Inactive text label (Optional if there’s an icon)</DxcText>
          <DxcText>Tab item</DxcText>
          <DxcText>Divider</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Placement and alignment</HeadingLink>
        <HeadingLink level={3}>Placement</HeadingLink>
        <DxcText as="p">
          There are two variations of tabs, default and container. They are
          hierarchically the same and should never be nested within each other.
          Tabs are usually placed above the content under the header o general
          navigation.
        </DxcText>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left</strong>: A standalone tab that can also be nested
                within components.
              </DxcText>
              <DxcText as="p">
                <strong>Right</strong>: Emphasized tab always paired with an
                attached background container.
              </DxcText>
            </>
          }
        >
          <Image src={tabsPlacement} alt="image" />
        </Figure>

        <HeadingLink level={4}>Desktop</HeadingLink>
        <DxcText as="p">
          <strong>Default</strong>
        </DxcText>
        <DxcText as="p">
          When used for main navigation place tabs above the header using 100%
          of the width of the screen.
        </DxcText>
        <DxcText as="p">
          <strong>Default</strong>
        </DxcText>
        <DxcText as="p">
          When used for main navigation place tabs above the header using 100%
          of the width of the screen.
        </DxcText>
        <Figure caption="Center horizontally in container is allowed when there is few tabs.">
          <Image src={defaultPlacement} alt="image" />
        </Figure>
        <Figure caption="Use an indicator when there are elements hidden in scrollable tabs.">
          <Image src={scrollablePlacement} alt="image" />
        </Figure>
        <DxcText as="p">
          <strong>Container</strong>
        </DxcText>
        <DxcText as="p">
          When used for panel navigation place tabs in the top of the panel
          using all available width. Scrollable tabs are allowed when there is
          not enough space available.
        </DxcText>
        <Figure caption="Using scrollable tabs for panel navigation.">
          <Image src={scrollablePanelNavigation} alt="image" />
        </Figure>
        <HeadingLink level={4}>Mobile</HeadingLink>
        <DxcText as="p">
          <strong>Main navigation</strong>
        </DxcText>
        <DxcText as="p">
          When used for main navigation place tabs above the header using 100%
          of the width of the screen.
        </DxcText>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left</strong>: Main navigation tabs are place above the
                content.
              </DxcText>
              <DxcText as="p">
                <strong>Right</strong>: Don’t stack more than 4 fixed tabs.
              </DxcText>
            </>
          }
        >
          <Image src={mobileNavigation} alt="image" />
        </Figure>
        <DxcText as="p">
          <strong>Panel navigation</strong>
        </DxcText>
        <Figure caption="When used for panel navigation tabs are placed in the top of the panel using all available width.">
          <Image src={panelNavigation} alt="image" />
        </Figure>
        <HeadingLink level={3}>Alignment</HeadingLink>
        <DxcText as="p">
          Tabs are always displayed horizontally in a single row. They can be
          left aligned or entered depending on the content and context.
        </DxcText>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left</strong>: Tabs are always displayed in a single
                row.
              </DxcText>
              <DxcText as="p">
                <strong>Left</strong>: Tabs are always displayed in a single
                row.
              </DxcText>
            </>
          }
        >
          <Image src={tabsAlignment} alt="image" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Behavior and interaction</HeadingLink>
        <HeadingLink level={3}>Main navigation</HeadingLink>
        <DxcText as="p">
          Users can navigate between tabs by tapping a tab, or by performing a
          swipe gesture over content in mobile devices.
        </DxcText>
        <HeadingLink level={3}>Panel navigation</HeadingLink>
        <DxcText as="p">
          Interacting with the tabs makes the content scrolls to the point that
          is associated with that specific tab, while the tabs keep fixed at the
          top of the container.{" "}
        </DxcText>
        <Figure caption="Do not use main navigation if they only affect an specific panel.">
          <Image src={tabsPanelBehavior} alt="image" />
        </Figure>
        <Figure
          caption={
            <>
              <DxcText as="p">
                The use of scrollable tabs in panel navigation could cause swipe
                interferences with OS navigation.
              </DxcText>
              <DxcText as="p">
                Do not use main navigation if they only affect an specific
                panel.
              </DxcText>
            </>
          }
        >
          <Image src={tabsScrollablePanelBehavior} alt="image" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Color</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>selectedBackgroundColor</Code>
              </td>
              <td>Tab item</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>unselectedBackgroundColor</Code>
              </td>
              <td>Tab item:enabled</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>hoverBackgroundColor</Code>
              </td>
              <td>Tab item:hover</td>
              <td>
                <Code>color-purple-100</Code>
              </td>
              <td>#f2eafa</td>
            </tr>
            <tr>
              <td>
                <Code>pressedBackgroundColor</Code>
              </td>
              <td>Tab item:active</td>
              <td>
                <Code>color-purple-200</Code>
              </td>
              <td>#e5d5f6</td>
            </tr>
            <tr>
              <td>
                <Code>selectedFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>unselectedFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-grey-700</Code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <Code>disabledFontColor</Code>
              </td>
              <td>Label:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>selectedIconColor</Code>
              </td>
              <td>Icon</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>unselectedIconColor</Code>
              </td>
              <td>Icon</td>
              <td>
                <Code>color-grey-700</Code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <Code>disabledIconColor</Code>
              </td>
              <td>Icon:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>focusOutline</Code>
              </td>
              <td>Tab item outline</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>selectedUnderlineColor</Code>
              </td>
              <td>Tab item border botton</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>dividerColor</Code>
              </td>
              <td>Separator</td>
              <td>
                <Code>color-grey-400</Code>
              </td>
              <td>#bfbfbf</td>
            </tr>
            <tr>
              <td>
                <Code>badgeBackgroundColor</Code>
              </td>
              <td>Badge container</td>
              <td>
                <Code>color-red-700</Code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <Code>badgeFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Accessibility</HeadingLink>
        <DxcText as="p">
          Each tab must have a unique title that clearly describes tab panel
          content. This is particularly helpful for users of assistive
          technologies so they have the necessary information to efficiently
          navigate the content.
        </DxcText>
        <DxcText as="p">
          Content authors need to ensure the content that is added to the tab
          panel is accessible. For example, if you add an image to the panel you
          need to include alternative text to pass accessibility testing.
        </DxcText>
        <DxcText as="p">
          <DxcLink
            href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"
            text="W3C WAI-ARIA Tab Design Pattern"
          />{" "}
          covers the usage of ARIA names.
        </DxcText>
        <HeadingLink level={3}>Keyboard interactions</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>key</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>Enter or Space</Code>
              </td>
              <td>
                Activates the tab if it was not activated automatically on
                focus.
              </td>
            </tr>
            <tr>
              <td>
                <Code>Tab</Code>
              </td>
              <td>
                When focus moves into the tab list, places focus on the active
                tab element. When the tab list contains the focus, moves focus
                to the next element in the page tab sequence outside the
                tablist, which is typically either the first focusable element
                inside the tab panel or the tab panel itself.
              </td>
            </tr>
            <tr>
              <td>
                <Code>Left-arrow</Code>
              </td>
              <td>
                Moves focus to the previous tab. If focus is on the first tab,
                moves focus to the last tab. Optionally, activates the newly
                focused tab
              </td>
            </tr>
            <tr>
              <td>
                <Code>Right-arrow</Code>
              </td>
              <td>
                Moves focus to the next tab. If focus is on the last tab
                element, moves focus to the first tab. Optionally, activates the
                newly focused tab
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/tabs/specs/TabsSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TabsSpecsPage;
