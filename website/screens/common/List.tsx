import React from "react";
import styled from "styled-components";
import DxcStack from "./Stack";

type ListProps = {
  children: React.ReactNode;
  gutter?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

function List({ children, gutter = "small" }: ListProps) {
  return (
    <DxcStack as="ul" gutter={gutter}>
      {React.Children.map(children, (child) => {
        return (
          <ListItem>
            <Bullet></Bullet>
            {child}
          </ListItem>
        );
      })}
    </DxcStack>
  );
}

const Bullet = styled.div`
  background-color: black;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 9px;
  margin-right: 10px;
`;

const ListItem = styled.li`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
`;

export default List;
