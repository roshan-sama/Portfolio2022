import { useState } from "react";
import Link from "next/link";
import {
  MediaQuery,
  Text,
  Burger,
  DEFAULT_THEME,
  Card,
  Paper,
  Collapse,
  Group,
  Button,
} from "@mantine/core";
import SidebarRight from "./sidebar-right";

export default function Header() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={DEFAULT_THEME.colors.gray[6]}
            mr="xl"
            title={title}
          />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group>{Navs}</Group>
        </MediaQuery>
        {/* <SidebarRight /> */}
        <Card
          sx={(theme) => ({
            marginLeft: "auto",
          })}
        >
          asdas
        </Card>
      </div>
      {opened && (
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Collapse in={opened}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "120%",
              }}
            >
              <Paper
                padding="md"
                shadow="xs"
                style={{
                  width: "100%",
                  zIndex: 2,
                  marginLeft: "-20px",
                  marginTop: "10px",
                }}
              >
                <Group direction="column" style={{ marginLeft: "10px" }}>
                  {Navs.map((nav) => nav)}
                </Group>
              </Paper>
            </div>
          </Collapse>
        </MediaQuery>
      )}
    </>
  );
}

const Navs = [
  <Link key={"hellolink"} href="/hello">
    <Button sx={(theme) => ({ marginRight: "2rem" })}>Career</Button>
  </Link>,
  <Text sx={(theme) => ({ marginRight: "2rem" })}>Career</Text>,
  <Text sx={(theme) => ({ marginRight: "2rem" })}>Career</Text>,
];
// function NavLinks() {
//   return (
//     <>

//       <Text sx={(theme) => ({ marginRight: "2rem" })}>Career</Text>
//       <Text sx={(theme) => ({ marginRight: "2rem" })}>Career</Text>
//     </>
//   );
// }
