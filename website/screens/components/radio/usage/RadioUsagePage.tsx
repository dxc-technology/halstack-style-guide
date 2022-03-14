import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";

const RadioUsagePage = () => {
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
            By default, one option of the radio group must be pre-selected.
            Select the safest or convenient option.
          </DxcText>
          <DxcText>Single radio buttons should not be used.</DxcText>
          <DxcText>
            If the question that the user needs to responde is as easier as
            yes/no, it is recommended to use checkbox instead of radio button.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio/usage/RadioUsagePage.tsx" />
    </DxcStack>
  );
};

export default RadioUsagePage;
