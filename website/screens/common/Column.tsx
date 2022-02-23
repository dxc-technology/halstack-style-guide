import React from "react";
import styled from "styled-components";

type ColumnProps = {
  basis?: "auto" | "content" | "small" | "medium" | "large";
  grow?: string;
  order?: number;
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  children: React.ReactNode;
};

export default function Column({ basis, grow, order, width, children }: ColumnProps) {
  return (
    <StyledColumn basis={basis} grow={grow} order={order} width={width}>
      {children}
    </StyledColumn>
  );
}

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0);
`;
