import { useState } from "react";
import Link from "next/link";
import {
  MediaQuery,
  Text,
  Burger,
  DEFAULT_THEME,
  Paper,
  Collapse,
  Group,
  Button,
  Avatar,
  Badge,
  Box,
} from "@mantine/core";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useLocalStorageValue } from "@mantine/hooks";
import { ColorScheme } from "../types";

const Header: React.FC<{
  value: ColorScheme,
  setValue: (
    val: ColorScheme | ((prevState: ColorScheme) => ColorScheme)
  ) => void;
}> = ({ value, setValue }) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const avatar = (
    <Avatar
      alt="Roshan's profile picture"
      size={32}
      radius="xl"
      style={{ marginRight: 5 }}
      src="img/roshan_avatar.jpg"
    />
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <Badge
          style={{ paddingLeft: 0, textTransform: "initial" }}
          size="xl"
          color="yellow"
          leftSection={avatar}

        >
          Roshan
        </Badge> */}
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
        <div style={{ marginRight: "20px" }}>{avatar}</div>

        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group>{Navs}</Group>
        </MediaQuery>
        {/* <SidebarRight /> */}
        <Box
          sx={(theme) => ({
            marginLeft: "auto",
          })}
        >
          <Avatar
            color={value === "dark" ? "yellow" : "white"}
            radius="xl"
            style={{cursor: "pointer"}}
            onClick={() => setValue((prev) => getOppositeColorScheme(prev))}
          >
            {value === "dark" ? <SunIcon /> : <MoonIcon/>}            
          </Avatar>
        </Box>
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
                <Group
                  key={"burgerGroup"}
                  direction="column"
                  style={{ marginLeft: "10px", zIndex: 100 }}
                >
                  {Navs}
                </Group>
              </Paper>
            </div>
          </Collapse>
        </MediaQuery>
      )}
    </>
  );
};

const getOppositeColorScheme = (start: ColorScheme): ColorScheme => {
  return start === "light" ? "dark" : "light";
};

const Navs = [
  <Link key={0} href="/hello" passHref>
    <Text sx={(theme) => ({ marginRight: "20px", cursor: "pointer" })}>
      Career
    </Text>
  </Link>,
  <Link key={1} href="/resume.pdf" passHref>
    <Text sx={(theme) => ({ marginRight: "20px", cursor: "pointer" })}>
      Resume
    </Text>
  </Link>,
  <Link key={2} href="/portfolio" passHref>
    <Text sx={(theme) => ({ marginRight: "20px", cursor: "pointer" })}>
      Portfolios
    </Text>
  </Link>,
];

export default Header;