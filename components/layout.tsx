import Head from "next/head";
import { AppShell, Header, MantineProvider } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import NavHeader from "./header";
import VantaWrapper from "./vanta-wrapper";
import { ColorScheme } from "../types";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [value, setValue] = useLocalStorageValue<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
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
    }, 100); // Gives Vanta enough time to setup
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
      <VantaWrapper key={wrapperKey}>
        <MantineProvider theme={{ colorScheme: value }}>
          <AppShell
            styles={(theme) => ({
              main: { height: "90vh", overflowY: "auto", overflowX: "auto" },
            })}
            header={
              <Header height={60} padding="xs">
                {/* Header content */}
                <NavHeader value={value} setValue={setValue} />
              </Header>
            }
          >
            {children}
          </AppShell>
        </MantineProvider>
      </VantaWrapper>
    </>
  );
}
