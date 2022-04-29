import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";
import Example from "@/common/example/Example";
import basic from "./code-examples/basicSelect";
import controlled from "./code-examples/controlledSelect";
import uncontrolled from "./code-examples/uncontrolledSelect";
import multiple from "./code-examples/multipleSelect";
import searchable from "./code-examples/searchableSelect";
import groups from "./code-examples/groupedSelect";
import icons from "./code-examples/iconsSelect";
import optional from "./code-examples/optionalSelect";
import Code from "@/common/Code";

const SelectExamplesPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Examples</HeadingLink>
        <Example title="Basic usage" example={basic}>
          Some examples with the different states of the Select component.
        </Example>
        <Example title="Controlled Select" example={controlled}>
          This is an example of how to manage the state of the Select component
          using React stateful variables.
        </Example>
        <Example title="Uncontrolled Select" example={uncontrolled}>
          The state of the component is managed internally by the select. Here
          is an example of how to use an uncontrolled select the submit event:
        </Example>
        <Example title="Searchable" example={searchable}>
          The <Code>searchable</Code> prop enables the search functionality for
          filtering the select options.
        </Example>
        <Example title="Multiple selection" example={multiple}>
          The <Code>multiple</Code> prop enables the user to select more than
          one option. If the component is also optional, it will only add
          "(Optional)" next to the label and not another option to the listbox.
        </Example>
        <Example title="Optional" example={optional}>
          You can mark a select as optional by setting to <Code>true</Code> the{" "}
          <Code>optional</Code> prop. In this particular case, the component
          will automatically add an extra selectable option which will have the
          empty string as value and the placeholder as a label. This only
          affects the single selection mode, otherwise this option will not be
          included.
        </Example>
        <Example title="Grouped options" example={groups}>
          The <Code>options</Code> prop allows you to group the options by
          slightly varying the structure of its object.
        </Example>
        <Example title="Options with icon" example={icons}>
          You can add icons to the options of the listbox either using a URL or
          an inline SVG.
        </Example>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select-copy/examples/SelectCopyExamplesPage.tsx" />
    </DxcStack>
  );
};

export default SelectExamplesPage;
