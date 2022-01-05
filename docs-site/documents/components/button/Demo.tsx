import React from "react";
import { DxcButton } from "@dxc-technology/halstack-react";
import DemoWrapper from "../../../src/DemoWrapper";


function ButtonDemo() {
  return (
    <DemoWrapper>
      <DxcButton mode="primary" label="Primary" margin="medium" />
      <DxcButton mode="secondary" label="Secondary" margin="medium" />
      <DxcButton mode="text" label="Text" margin="medium" />
    </DemoWrapper>
  );
}

export default ButtonDemo;
