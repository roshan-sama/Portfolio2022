import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import {
  localStorageColorSchemeManager,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { colorSchemeStorageKey, theme } from "../theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const colorSchemeManager = localStorageColorSchemeManager({
  key: colorSchemeStorageKey,
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      colorSchemeManager={colorSchemeManager}
    >
      <Notifications limit={5} />
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
}

export default MyApp;
