import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "next/image";
import HeadingLink from "../../../common/HeadingLink";
import variantsImage from "./images/spinner_variants.png";
import Figure from "../../../common/Figure";
import Code from "../../../common/Code";
import determinateImage from "./images/spinner_determinate_indeterminate.png";
import DocFooter from "../../../common/DocFooter";

const SpinnerUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            There should only be a single spinner on a page at one time.
          </DxcText>
          <DxcText>
            Only use the spinner component in a process that takes more than one
            second.
          </DxcText>
          <DxcText>
            The text of the action it is not mandatory but recommendable.
          </DxcText>
          <DxcText>
            If only a portion of a page is displaying new content or being
            updated, use a <Code>medium</Code> or <Code>small</Code> spinner
            place the spinner in that part of the page.
          </DxcText>
        </DxcList>
        <HeadingLink level={2}>Variants</HeadingLink>
        <DxcText as="p">
          There are three different variants for the spinner component due to
          the size or the position: <b>large</b>, <b>small</b> and{" "}
          <b>overlay</b>.
        </DxcText>
        <Figure caption="Spinner component variants">
          <Image src={variantsImage} alt="Spinner component variants" />
        </Figure>
        <HeadingLink level={2}>Determinate or indeterminate</HeadingLink>
        <Figure caption="Determinate and indeterminate spinners">
          <Image
            src={determinateImage}
            alt="Determinate and indeterminate spinners"
          />
        </Figure>
        <DxcList>
          <DxcText>
            Determinate indicators display how long a process will take. They
            should be used in longer processes.
          </DxcText>
          <DxcText>
            Indeterminate indicators express an unspecified amount of wait time.
            They should be used when:
            <DxcList>
              <DxcText>The processing time is unknown.</DxcText>
              <DxcText>
                The wait time is expected to be short enough that it’s not
                necessary to display.
              </DxcText>
            </DxcList>
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/spinner/usage/SpinnerUsagePage.tsx" />
    </DxcStack>
  );
};

export default SpinnerUsagePage;
