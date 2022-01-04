import * as React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import slugify from "slugify";
import HeadingLink from "./HeadingLink";
import styled from "styled-components";

export const h1 = ({ children }) => (
  <DxcHeading level={2} as="h1" text={children} />
);
export const h2 = ({ children }) => {
  const slug = slugify(children, { lower: true });
  return (
    <HeadingLink elementId={slug}>
      <DxcHeading level={3} as="h2" text={children} />
    </HeadingLink>
  );
};
export const h3 = ({ children }) => (
  <DxcHeading level={4} as="h2" text={children} />
);
export const h4 = ({ children }) => (
  <DxcHeading level={5} as="h3" text={children} />
);
export const h5 = ({ children }) => (
  <DxcHeading level={5} as="h5" text={children} />
);

export const wrapper = ({ children }) => (
  <Wrapper>{ children }</Wrapper>
);

export const img = (props) => (
  <Img { ...props }></Img>
);

export const p = ({ children }) => (
  <P>{ children }</P>
);

export const ul = ({ children }) => (
  <Ul>{ children }</Ul>
);




function contentWrapper() {
  return (
    <Wrapper></Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 80ch;
`;

const Img = styled.img`
width: 100%;
`;

const P = styled.p`
line-height: 1.5em;
`;

const Ul = styled.ul`
& li { line-height: 1.5em;}
& li:not(:first-child){
  margin-top:0.5rem
}

`;


