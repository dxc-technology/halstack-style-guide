import React from "react";
import { DxcAccordion } from "@dxc-technology/halstack-react";
import DemoWrapper from "../../../src/DemoWrapper";


function AccordionDemo() {
  return (
    <DemoWrapper>
      <DxcAccordion
        label="Default Accordion Uncontrolled"
        margin="medium"
        padding="medium"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </DxcAccordion>
    </DemoWrapper>
  );
}

export default AccordionDemo;
