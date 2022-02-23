import styled from "styled-components";

type TextProps = {
  as?: "p" | "span";
  children: React.ReactNode;
};

function Text({ as = "span", children }: TextProps) {
  return <StyledText as={as}>{children}</StyledText>;
}

const StyledText = styled.span`
  margin: 0px;
`;

export default Text;
