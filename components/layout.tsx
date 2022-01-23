import Head from "next/head";
import {
  Affix,
  AppShell,
  Button,
  Grid,
  Header,
  MantineProvider,
  ScrollArea,
  Tooltip,
  Transition,
} from "@mantine/core";
import { useLocalStorageValue, useMediaQuery } from "@mantine/hooks";
import NavHeader from "./header/header";
import VantaWrapper from "./vanta-wrapper";
import { ColorScheme } from "../types";
import { useEffect, useState } from "react";
import {
  ArrowTopRightIcon,
  CornerTopRightIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function Layout({ children }) {
  // TODO: Affix "view page source button"
  // TODO: Change title spacing to pixels "view page source button"
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
        <VantaWrapper scheme={scheme}>
          <AppShell
            fixed
            header={
              <Header fixed height="auto" padding="xs">
                <NavHeader value={scheme} setValue={setScheme} />
              </Header>
            }
          >
            <ScrollArea style={{ height: "100vh", marginTop: 60 }}>
              <FixedBg />
              {/* TODO: Could also adjust this div's margin top to not intersect with the name */}
              <div style={{ marginTop: "120px" }}>{children}</div>
              <Affix position={{ bottom: 20, left: 20 }}>
                <Tooltip label="View the source code for this page on Github">
                  <Button
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Roesh/Portfolio2022"
                    rightIcon={<ExternalLinkIcon />}
                  >
                    View source
                  </Button>
                </Tooltip>
              </Affix>
            </ScrollArea>
          </AppShell>
        </VantaWrapper>
      </MantineProvider>
    </>
  );
}

const FixedBg = () => {
  const largeScreen = useMediaQuery("(min-width: 1547px)");
  const mediumScreen = useMediaQuery("(min-width: 1146px)");
  const smallScreen = useMediaQuery("(max-width: 300px)");

  return (
    <Grid style={{ pointerEvents: "none", position: "fixed" }}>
      <Grid.Col span={12} md={5}>
        <div
          style={{
            fontSize: largeScreen ? "240px" : mediumScreen ? "180px" : "130px",
            height: "auto",
            color: "white",
            lineHeight: "1",
            display: "inline",
          }}
        >
          Roshan
          <br />
          Manuel
        </div>
      </Grid.Col>
    </Grid>
  );
};
