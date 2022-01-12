import Head from "next/head";
import { AppShell, Header, MantineProvider, ScrollArea } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import NavHeader from "./header/header";
import VantaWrapper from "./vanta-wrapper";
import { ColorScheme } from "../types";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [scheme, setScheme] = useLocalStorageValue<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });
  const [wrapperKey, setWrapperKey] = useState("pre");
  const [disableLoader, setDisableLoader] = useState(false);

  // Used to re-render content on the client.
  // This is because the Layout page cannot access cookie values, which
  // would have helped solve incorrect color-scheme on first load
  useEffect(() => {
    setWrapperKey("post");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDisableLoader(true);
    });
  }, [wrapperKey]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}&apos;s portfolio</title>
        <script defer type="text/javascript" src="three.r119.min.js"></script>
        <script defer type="text/javascript" src="vanta.net.min.js"></script>
      </Head>
      {!disableLoader && (
        <div className="fallback">
          <div className="loader"></div>
        </div>
      )}
      <MantineProvider
        theme={{
          colorScheme: scheme,
          primaryColor: "grape",
          colors: {
            "alt-purple": [
              "#eee5ff",
              "#ccb4fb",
              "#ac82f9",
              "#8b50f8",
              "#6c22f7",
              "#540dde",
              "#4108ac",
              "#2f047b",
              "#1c024a",
              "#09001a",
            ],
          },
        }}
        key={wrapperKey}
      >
        <VantaWrapper theme={scheme}>
          <ScrollArea>
            <AppShell
              fixed
              header={
                <Header height={60} padding="xs">
                  <NavHeader value={scheme} setValue={setScheme} />
                </Header>
              }
            >
              {children}
            </AppShell>
          </ScrollArea>
        </VantaWrapper>
      </MantineProvider>
    </>
  );
}
