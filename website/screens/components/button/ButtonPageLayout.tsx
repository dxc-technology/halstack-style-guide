import PageHeading from "../../common/TabsPageLayout";

const ButtonPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/button" },
    { label: "Specifications", path: "/components/button/specifications" },
  ];

  return (
    <PageHeading
      title="Button"
      description="Buttons are basic interface elements that initialize an action or function
      when the user interacts with them."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ButtonPageHeading;
