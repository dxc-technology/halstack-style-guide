import Figure from "@/common/Figure";
import HeadingLink from "@/common/HeadingLink";
import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";

const RadioGroupUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Labelling should be concise and clearly differentiated with respect
            to other options.
          </DxcText>
          <DxcText>
            One option of the radio group can be pre-selected. Try to select the
            safest or convenient option.
          </DxcText>
          <DxcText>Single radio buttons should not be used.</DxcText>
          <DxcText>
            If the question that the user needs to responde is as easier as
            yes/no, it is recommended to use a checkbox instead of radio group.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio-group/usage/RadioGroupUsagePage.tsx" />
    </DxcStack>
  );
};

export default RadioGroupUsagePage;
