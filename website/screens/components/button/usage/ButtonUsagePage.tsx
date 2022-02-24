import Image from "next/image";
import { DxcText } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import buttonIconImage from "./images/button_icon.png";
import buttonStatesImage from "./images/button_states.png";
import buttonVariantsImage from "./images/button_variants.png";
import DocFooter from "../../../common/DocFooter";

const ButtonUsage = () => {
  return (
    <>
      <DxcText as="p">
        Buttons are basic interface elements that initialize an action or
        function when the user interacts with them. The appearance of the button
        should suggest the user takes an action that leads to different
        scenarios.
      </DxcText>
      <DxcText as="p">
        These elements that reinforce to the user the necessity to interact are
        called CTA (Call to Action) components, which basically are designed to
        capture user attention and improve the user experience within the
        application.
      </DxcText>
      <HeadingLink level={3}>
        Usage
      </HeadingLink>
      <ul>
        <li>
          In instances where <Code>buttons</Code> are vertically stacked, buttons should be
          the same length.
        </li>
        <li>
          Horizontally displayed buttons are dependent on the amount of text, so
          button lengths may vary, always considering the minimum and maximum
          established sizes.
        </li>
        <li>Text or icon on a button should always be centered.</li>
        <li>
          There must be 8 pixels of space between horizontally displayed
          buttons.
        </li>
      </ul>
      <h2 id="variants">Variants</h2>
      <p>
        We can identify three different variants that imply some visual changes
        according to color and border attributes.
      </p>
      <p>
        Variants: <strong>primary</strong>, <strong>secondary</strong> and{" "}
        <strong>text</strong>.
      </p>
      <p>
        <figure>
          <Image
            src={buttonVariantsImage}
            alt="Example of the button component variants"
          />
          <figcaption>Example of the button component variants</figcaption>
        </figure>
      </p>
      <table>
        <thead>
          <tr>
            <th align="left">Variant</th>
            <th align="left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">Primary</td>
            <td align="left">
              For the principal call to action on the page; primary buttons
              should only appear once per screen (not including the application
              header or in a modal dialog)
            </td>
          </tr>
          <tr>
            <td align="left">Secondary</td>
            <td align="left">
              For less prominent actions; secondary buttons can be used in
              isolation or paired with a primary button when there are multiple
              calls to action
            </td>
          </tr>
          <tr>
            <td align="left">Text</td>
            <td align="left">
              For the least pronounced actions; often used in conjunction with a
              primary button (e.g. cancel in a modal dialog)
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="states">States</h2>
      <p>
        The states are the different behaviors of the button component based on
        the interaction of the user. For the desktop version, we contemplate
        five different states by which can pass.
      </p>
      <p>
        States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
        <strong>focus</strong>, <strong>active</strong> and{" "}
        <strong>disabled</strong>.
      </p>
      <p>
        <Image src={buttonStatesImage} alt="Button component states" />
        <em>Button component states</em>
      </p>
      <h2 id="icon-usage">Icon Usage</h2>
      <p>
        Any icon can be used in Halstack Design System, so it is apt to the user
        to choose between one of the multiple options that are offered through
        internet but it is recommended to use the same library of icons along
        the application to keeping concistency.
      </p>
      <ul>
        <li>
          Icon can go before or after the text with a separation of 8 pixels
          respecting the main button&#39;s text.{" "}
        </li>
        <li>
          Do not use icons mainly for visual interest, the glyph must add
          information and clarification to the action that would be performed in
          the context of the button.
        </li>
        <li>
          A button with an icon and no text is also allowed in the design
          system.
        </li>
      </ul>
      <p>
        <Image src={buttonIconImage} alt="Icon usage examples" />
      </p>
      <p>
        <em>Icon usage examples</em>
      </p>
      <h2 id="accessibility">Accessibility</h2>
      <ul>
        <li>
          Understanding WCAG 2.2 -{" "}
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible">
            2.4.7: Focus Visible
          </a>
        </li>
        <li>
          Understanding WCAG 2.2 -{" "}
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/on-input">
            3.2.2: On Input
          </a>
        </li>
        <li>
          WAI-ARIA Authoring Practices 1.2 -
          <a href="https://www.w3.org/TR/wai-aria-practices-1.2/#button">
            Button Design Pattern
          </a>
        </li>
      </ul>
      <h2 id="links-and-references">Links and references</h2>
      <ul>
        <li>
          <a href="https://developer.dxc.com/tools/react/next/#/components/button">
            Angular CDK component
          </a>
        </li>
        <li>
          <a href="https://developer.dxc.com/tools/angular/next/#/components/button">
            React CDK component
          </a>
        </li>
        <li>
          <a href="https://xd.adobe.com/view/cc0d0c2a-7a2f-4146-96b0-e45a5aabc18a-995e/">
            Adobe XD component
          </a>
        </li>
      </ul>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
    </>
  );
};

export default ButtonUsage;
