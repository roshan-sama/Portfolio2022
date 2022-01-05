import Head from "next/head";
import {
  AppShell,
  Header,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorageValue } from '@mantine/hooks';
import NavHeader from "./header";
import VantaWrapper from "./vanta-wrapper";

export default function Layout({ children }) {
  type ColorScheme = 'dark' | 'light';

  const [value, setValue] = useLocalStorageValue<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });
  
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
        </MantineProvider>
      </VantaWrapper>
    </>
  );
}
