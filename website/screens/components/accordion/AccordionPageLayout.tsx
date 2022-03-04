import PageHeading from "../../common/TabsPageLayout";

const AccordionPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/accordion" },
    { label: "Specifications", path: "/components/accordion/specifications" },
  ];

  return (
    <PageHeading
      title="Accordion"
      description="Accordions are used to group similar content and hide or show it depending on
      user needs or preferences."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default AccordionPageHeading;
