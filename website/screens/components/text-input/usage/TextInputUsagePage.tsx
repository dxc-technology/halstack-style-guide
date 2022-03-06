import { DxcText, DxcList } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import inputActionsClearImage from "./images/input_actions_clear.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const TextInputUsagePage = () => {
  return (
    <div>
      <HeadingLink level={4} as="h2">
        Usage
      </HeadingLink>
      <DxcText as="p">
        Use text inputs in forms to help people enter, select, and search for
        text. Common text input types include: Usernames, descriptions, URLs,
        phone numbers, credit cards, emails, addresses or plain text searches
      </DxcText>
      <HeadingLink level={5} as="h3">
        Do&#39;s
      </HeadingLink>
      <DxcList>
        <DxcText>
          Do use fixed-width inputs for content that has a specific, known
          length (e.g. postcode, phone number).
        </DxcText>
        <DxcText>
          Do use sentence for any input text case with standard, local grammar,
          and punctuation rules.
        </DxcText>
        <DxcText>
          Do use helpful and clear text for labels, error messages, and helper
          texts
        </DxcText>
      </DxcList>
      <h3 id="dont-s">Dont&#39;s</h3>
      <ul>
        <li>
          Do not use text input for text longer than a single line (e.g. name,
          phone number). Use the text-area instead.
        </li>
        <li>Do not disable copy and paste.</li>
        <li>Do not display a pop-up error message after validating</li>
        <li>Avoid masking label, keep it always visible.</li>
      </ul>
      <h2 id="content">Content</h2>
      <h3 id="actions">Actions</h3>
      <h4 id="clearing-content">Clearing content</h4>
      <DxcText as="p">
        Clear actions allow user to remove the content of the text input.
      </DxcText>
      <Figure caption="Example of text input with a clear content action button">
        <Image
          src={inputActionsClearImage}
          alt="Example of text input with a clear content action button"
        />
      </Figure>
      <h4 id="custom-actions">Custom actions</h4>
      <DxcText as="p">
        Text inputs can have an additional custom action.
      </DxcText>
      <DxcText as="p">
        <img
          src="images/input_actions_custom.png"
          alt="Example of text input with an additional action"
        />
      </DxcText>
      <DxcText as="p">
        <em>Example of text input with an additional action</em>
      </DxcText>
      <h3 id="prefixes-and-suffixes">Prefixes and suffixes</h3>
      <DxcText as="p">
        Prefixes and suffixes help the user to understand the purpose of the
        text input.
      </DxcText>
      <DxcText as="p">
        <img
          src="images/input_prefix_suffix.png"
          alt="Icon or text prefixes and suffixes usage"
        />
      </DxcText>
      <DxcText as="p">
        <em>Icon or text prefixes and suffixes usage</em>
      </DxcText>
      <h2 id="helper-text">Helper text</h2>
      <DxcText as="p">
        Helper text can be used as additional instructions to the user when
        filling in the form. It should be always visible even in a focus state.
      </DxcText>
      <DxcText as="p">
        <img
          src="images/input_helper_text.png"
          alt="Text input helper text example"
        />
      </DxcText>
      <DxcText as="p">
        <em>Text input helper text example</em>
      </DxcText>
      <h3 id="usage">Usage</h3>
      <DxcText as="p">Do:</DxcText>
      <ul>
        <li>Keep helper text as short and specific as possible.</li>
        <li>
          Only use helper text when truly necessary to avoid overloading the
          user.
        </li>
        <li>Should give an example or an explanation of the field</li>
      </ul>
      <DxcText as="p">Don’t:</DxcText>
      <ul>
        <li>Helper text should not run longer than the input area.</li>
      </ul>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
    </div>
  );
};

export default TextInputUsagePage;
