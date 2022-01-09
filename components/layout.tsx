import Head from "next/head";
import {
  AppShell,
  Header,
  MantineProvider
} from "@mantine/core";
import { useLocalStorageValue } from '@mantine/hooks';
import NavHeader from "./header";
import VantaWrapper from "./vanta-wrapper";
import { ColorScheme } from "../types";

export default function Layout({ children }) {
  
  const [value, setValue] = useLocalStorageValue<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
  });
  
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}&apos;s portfolio</title>
        <script defer type="text/javascript" src="three.r119.min.js"></script>
        <script defer type="text/javascript" src="vanta.net.min.js"></script>
      </Head>
      <VantaWrapper>
        <MantineProvider theme={{ colorScheme: value }}>
          <AppShell
            padding="md"   
            styles={(theme) => ({
              main: { height: "100vh" },
            })}
            header={
              <Header height={60} padding="xs">
                {/* Header content */}
                <NavHeader value={value} setValue={setValue}/>
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
