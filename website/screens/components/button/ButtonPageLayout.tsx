import PageHeading from "../../common/TabsPageLayout";

const ButtonPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/button" },
    { label: "Specifications", path: "/components/button/specifications" },
  ];

  return (
    <PageHeading
      title="Button"
      description="Lorem ipsum button sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ButtonPageHeading;
