import { useRouter } from "next/router";
import styled from "styled-components";
import { DxcTabs } from "@dxc-technology/halstack-react";

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
      <HeadingContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DxcTabs
          activeTabIndex={activeTabIndex}
          tabs={tabsList}
          onTabClick={handleTabChange}
        ></DxcTabs>
      </HeadingContainer>
      <TabContentContainer>{children}</TabContentContainer>
    </>
  );
};

const HeadingContainer = styled.div`
  width: var(--content-width);
  margin-left: var(--content-margin-left);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  height: 43px;
  font-size: 32px;
  font-weight: 600;
  margin: var(--content-margin-top) 0px 24px 0px;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0px 0px 32px 0px;
`;

const TabContentContainer = styled.div`
  width: var(--content-width);
  margin-left: var(--content-margin-left);
  margin-top: 48px;
`;

export default PageHeading;
