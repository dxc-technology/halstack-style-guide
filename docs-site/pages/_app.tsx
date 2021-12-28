import type { AppProps } from "next/app";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import SidenavContent from "../src/SidenavContent";
import "../global-styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DxcApplicationLayout>
      <DxcApplicationLayout.SideNav padding="large" mode="push">
        <SidenavContent documents={pageProps.documents}></SidenavContent>
      </DxcApplicationLayout.SideNav>
      <DxcApplicationLayout.Main>
        <Component {...pageProps} />
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
}

export default MyApp;
