import type { NextPage } from "next";
import styled from "styled-components";
import { DxcTextInput } from "@dxc-technology/halstack-react";

const Home: NextPage = () => {
  return (
    <div>
      <Button>ASDFASDFASDF</Button>
      <DxcTextInput></DxcTextInput>
    </div>
  );
};

const Button = styled.button`
  background: red;
`;
export default Home;
