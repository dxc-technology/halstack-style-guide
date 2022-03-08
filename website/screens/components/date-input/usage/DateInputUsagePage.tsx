import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";
const DateInputUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Use the date input component when asking for a past, present, or
            future date
          </DxcText>
          <DxcText>
            Provide a hint with the date format expected in the placeholder
          </DxcText>
          <DxcText>
            Use a concise label to indicate what the date selection refers to
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/date-input/usage/DateInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default DateInputUsagePage;
