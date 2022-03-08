import Image from "@/common/Image";
import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import selectUsageVariants from "./images/select_variants.png";

const SelectUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">Considerations about the select usage:</DxcText>
        <DxcList>
          <DxcText>
            A dialog element should allow the user to select one option from a
            list
          </DxcText>
          <DxcText>
            If the list of options is short (4 or less), use checkboxes instead
            of the select component
          </DxcText>
          <DxcText>
            The select component should always display a label different from
            any name in the option list
          </DxcText>
          <DxcText>Use a pre-selected good default where possible</DxcText>
          <DxcText>
            Use progressive disclosure between linked select components
          </DxcText>
          <DxcText>
            If more than one option is applicable, use the multi-select variant
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Variants</HeadingLink>
        <Figure caption="Single and multiple variants of the select component.">
          <Image
            src={selectUsageVariants}
            alt="Single and multiple variants of the select component"
          />
        </Figure>
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
                <strong>Single</strong>
              </td>
              <td>Allows the user to select one option from a list</td>
            </tr>
            <tr>
              <td>
                <strong>Multiple</strong>
              </td>
              <td>Allows the user to select multiple options from a list</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select/usage/SelectUsagePage.tsx" />
    </DxcStack>
  );
};

export default SelectUsagePage;
