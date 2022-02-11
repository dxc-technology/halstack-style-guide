import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DxcTextInput } from "@dxc-technology/halstack-react";
import { SidenavLink, SidenavSectionTitle } from "./SidenavComponents";

type LinkDetails = {
  label: string;
  path: string;
};

const overviewLinks: LinkDetails[] = [
  { label: "Introduction", path: "/overview/introduction" },
];

const componentsLinks: LinkDetails[] = [
  { label: "Button", path: "/components/button" },
];

type LinksSectionDetails = {
  label: string;
  links: LinkDetails[];
};

const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Components", links: componentsLinks },
];

function SidenavContent() {
  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();

  const onFilterInputChange = ({ value }: { value: string }) => {
    setFilter(value);
  };

  return (
    <div>
      <DxcTextInput
        placeholder="Search Docs"
        value={filter}
        onChange={onFilterInputChange}
        size="fillParent"
        clearable
        margin="xsmall"
      />
      {LinksSections.map(({ label, links }) => (
        <LinksList
          key={label}
          title={label}
          links={links}
          filter={filter}
          currentPath={currentPath}
        ></LinksList>
      ))}
    </div>
  );
}

type LinksListProps = {
  title: string;
  links: LinkDetails[];
  filter: string;
  currentPath: string;
};
function LinksList({ currentPath, title, links, filter }: LinksListProps) {
  const filteredLinks = links.filter((link) =>
    link.label.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredLinks.length > 0) {
    return (
      <>
        <SidenavSectionTitle>{title}</SidenavSectionTitle>
        {filteredLinks.map(({ label, path }) => (
          <Link key={`${label}-${path}`} href={path} passHref>
            <SidenavLink selected={currentPath.startsWith(path)}>
              {label}
            </SidenavLink>
          </Link>
        ))}
      </>
    );
  }
  return null;
}

export default SidenavContent;
