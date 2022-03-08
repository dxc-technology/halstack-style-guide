import { DxcStack, DxcText, DxcList } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const CheckboxInputUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">Use the checkbox when:</DxcText>
        <DxcList>
          <DxcText>Multiple choices offered.</DxcText>
          <DxcText>Binary response are requested (yes/no).</DxcText>
          <DxcText>Accepting conditions and additional features.</DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/checkbox/usage/CheckboxUsagePage.tsx" />
    </DxcStack>
  );
};

export default CheckboxInputUsagePage;
