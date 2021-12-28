import * as React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";

export const h1 = ({ children }) => <DxcHeading level={2} as="h1" text={children} />;
export const h2 = ({ children }) => <DxcHeading level={3} as="h2" text={children} />;
export const h3 = ({ children }) => <DxcHeading level={4} as="h2" text={children} />;
export const h4 = ({ children }) => <DxcHeading level={5} as="h3" text={children} />;
export const h5 = ({ children }) => <DxcHeading level={5} as="h5" text={children} />;
