import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ColorSchemeScript } from "@mantine/core";
import { colorSchemeStorageKey } from "../theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript
          defaultColorScheme="dark"
          localStorageKey={colorSchemeStorageKey}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Vanta background. Absolute paths so nested routes (e.g. /blog/view) can find them; three first. */}
        <Script src="/three.r119.min.js" strategy="beforeInteractive" />
        <Script src="/vanta.net.min.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
