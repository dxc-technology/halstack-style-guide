import React from "react";
import styled from "styled-components";

type RowProps = {
  gutter?:
    | "none"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?:
    | "start"
    | "center"
    | "end"
    | "spaceBetween"
    | "spaceAround"
    | "spaceEvenly";
  wrap?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
};

export function Row({
  gutter = "none",
  align,
  justify,
  wrap = true,
  reverse = false,
  children,
}: RowProps) {
  return (
    <StyledRow
      gutter={gutter}
      align={align}
      justify={justify}
      wrap={wrap}
      reverse={reverse}
    >
      {children}
    </StyledRow>
  );
}

const StyledRow = styled.div``;

// ----------------------------------------------------------------------------

type ColumnProps = {
  basis?: "auto" | "content" | "small" | "medium" | "large";
  grow?: string;
  order?: number;
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  children: React.ReactNode;
};

export function Column({ basis, grow, order, width, children }: ColumnProps) {
  return (
    <StyledColumn basis={basis} grow={grow} order={order} width={width}>
      {children}
    </StyledColumn>
  );
}

const StyledColumn = styled.div``;

// ----------------------------------------------------------------------------

type StackProps = {
  gutter?:
    | "none"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  divider?: boolean;
  align?: "start" | "center" | "end" | "baseline";
  as?: React.ElementType;
  children: React.ReactNode;
};

export function Stack({
  gutter,
  divider,
  align,
  as = "div",
  children,
}: StackProps) {
  return (
    <StyledStack gutter={gutter} divider={divider} align={align} as={as}>
      {children}
    </StyledStack>
  );
}

const StyledStack = styled.div``;
