import Head from "next/head";
import {
  Affix,
  Button,
  Grid,
  Notification,
  ScrollArea,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import NavHeader from "./header/header";
import VantaWrapper from "./vanta-wrapper";
import { useEffect, useState } from "react";
import { ArchiveIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import styles from "../styles/layout.module.css";

const HEADER_HEIGHT = 60;

export default function Layout({ children, hideName = false }) {
  // TODO: Affix "view page source button"
  // TODO: Change title spacing to pixels "view page source button"
  const { setColorScheme } = useMantineColorScheme();
  const scheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });
  const [disableLoader, setDisableLoader] = useState(false);

  // Keep the loading overlay up until the page has hydrated on the client
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisableLoader(true);
    });
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}&apos;s portfolio</title>
      </Head>
      {!disableLoader && (
        <div className="fallback">
          <div className="loader"></div>
        </div>
      )}
      <VantaWrapper scheme={scheme}>
        <header className={styles.header}>
          <NavHeader value={scheme} setValue={setColorScheme} />
        </header>
        <main>
          <ScrollArea h={`calc(100vh - ${HEADER_HEIGHT}px)`} mt={HEADER_HEIGHT}>
              {!hideName && <FixedBg />}
              {/* TODO: Could also adjust this div's margin top to not intersect with the name */}
              <div style={{ marginTop: "120px" }}>{children}</div>
              <Affix position={{ bottom: 20, left: 20 }}>
                <Tooltip label="View the source code for this page on Github">
                  <Button
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Roesh/Portfolio2022"
                    rightSection={<ExternalLinkIcon />}
                  >
                    View source
                  </Button>
                </Tooltip>
              </Affix>
              <Affix position={{ bottom: 20, right: 20 }}>
                <Notification
                  style={{
                    width: "250px",
                    borderRadius: "3px",
                    borderStyle: "dashed",
                    borderColor: "#000000",
                  }}
                  title="Pardon our progress"
                  color="blue"
                  icon={<ArchiveIcon />}
                  withCloseButton={false}
                >
                  This website is still under construction.
                </Notification>
              </Affix>
          </ScrollArea>
        </main>
      </VantaWrapper>
    </>
  );
}

const FixedBg = () => {
  const largeScreen = useMediaQuery("(min-width: 1547px)");
  const mediumScreen = useMediaQuery("(min-width: 1146px)");
  const smallScreen = useMediaQuery("(max-width: 300px)");

  return (
    <Grid
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: HEADER_HEIGHT,
        left: 20,
      }}
    >
      <Grid.Col span={{ base: 12, md: 5 }}>
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
