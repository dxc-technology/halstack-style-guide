import { useRouter } from "next/router";
import styled from "styled-components";
import {
  DxcTabs,
  DxcStack,
  DxcText,
  DxcHeading,
} from "@dxc-technology/halstack-react";

type PageHeadingProps = {
  title: string;
  description: string;
  tabs: { label: string; path: string }[];
  children: React.ReactNode;
};

const PageHeading = ({
  title,
  tabs,
  description,
  children,
}: PageHeadingProps) => {
  const router = useRouter();
  const tabsList = tabs ? tabs.map((tab) => ({ label: tab.label })) : [];
  const activeTabIndex = tabs.findIndex((tab) => tab.path === router.pathname);

  const handleTabChange = (index: number) => {
    router.push(tabs[index].path);
  };

  return (
    <>
      <LayoutContainer>
        <DxcStack gutter="xxlarge">
          <DxcStack gutter="large">
            <DxcHeading text={title} level={1}></DxcHeading>
            <DxcText>{description}</DxcText>
          </DxcStack>
          <DxcTabs
            activeTabIndex={activeTabIndex}
            tabs={tabsList}
            onTabClick={handleTabChange}
          ></DxcTabs>
          <div>{children}</div>
        </DxcStack>
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  width: var(--content-width);
  margin: var(--content-margin-vertical) var(--content-margin-left);
`;

export default PageHeading;
