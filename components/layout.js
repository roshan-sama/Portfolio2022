import Head from "next/head";
import {
  AppShell,
  Drawer,
  Col,
  Card,
  Header,
  MantineProvider,
} from "@mantine/core";
import NavHeader from "./header";
import VantaWrapper from "./vanta-wrapper";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Roshan&apos;s portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VantaWrapper>
        <MantineProvider theme={{ colorScheme: "dark" }}>
          <AppShell
            padding="md"   
            styles={(theme) => ({
              main: { height: "100vh" },
            })}         
            header={
              <Header height={60} padding="xs">
                {/* Header content */}
                <NavHeader />
              </Header>
            }
          >
            {children}
          </AppShell>
          <Drawer position="right" size="xl" />
        </MantineProvider>
      </VantaWrapper>
    </>
  );
}
