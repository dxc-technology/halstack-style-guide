export type LinkDetails = {
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

export const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Components", links: componentsLinks },
];

type NavigationLinks = {
  previousLink: LinkDetails | null;
  nextLink: LinkDetails | null;
};
export const getNavigationLinks = (currentPath: string): NavigationLinks => {
  const links = LinksSections.flatMap((section) => section.links);
  const currentLinkIndex = links.findIndex((link) => link.path === currentPath);
  if (currentLinkIndex === -1) {
    return { previousLink: null, nextLink: null };
  }
  const nextLinkIndex = currentLinkIndex + 1;
  const nextLinkExists = nextLinkIndex < links.length;
  const previousLinkIndex = currentLinkIndex - 1;
  const previousLinkExists = previousLinkIndex >= 0;
  return {
    previousLink: previousLinkExists ? links[previousLinkIndex] : null,
    nextLink: nextLinkExists ? links[nextLinkIndex] : null,
  };
};
