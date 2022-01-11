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
  ActionIcon,
  Box,
  Tabs,
  TabsProps,
} from "@mantine/core";
import {
  BackpackIcon,
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { ColorScheme } from "../types";
import styles from "../styles/animation.module.css";

const Header: React.FC<{
  value: ColorScheme;
  setValue: (
    val: ColorScheme | ((prevState: ColorScheme) => ColorScheme)
  ) => void;
}> = ({ value, setValue }) => {
  const [opened, setOpened] = useState(false);
  const [animating, setAnimating] = useState(false);
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
          <Group>
            <Navs orientation="horizontal" activeNav={0}/>
          </Group>
        </MediaQuery>
        {/* <SidebarRight /> */}
        <Group style={{ marginLeft: "auto" }}>
          <Button
            component="a"
            href="https://github.com/Roesh"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: "indigo", to: "grape", deg: 105 }}
            radius="xl"
            leftIcon={<GitHubLogoIcon width={18} height={18} />}
          >
            Github
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/roshan-m-780824a9/"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 105 }}
            radius="xl"
          >
            Linkedin
          </Button>
          <div
            onClick={() => {
              if (animating) {
                return;
              }
              setAnimating(true);
              setTimeout(() => {
                setAnimating(false);
                setValue((prev) => getOppositeColorScheme(prev));
              }, 500);
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              className={animating ? styles.spinForward : styles.rotateHalf}
            >
              <ActionIcon
                variant="transparent"
                sx={(theme) =>
                  value === "dark"
                    ? {
                        color: theme.colors.dark[5],
                        backgroundColor: theme.colors.yellow[5],
                      }
                    : {
                        color: theme.colors.blue[2],
                        backgroundColor: theme.colors.dark[9],
                      }
                }
                size="lg"
              >
                {value === "dark" ? <SunIcon /> : <MoonIcon />}
              </ActionIcon>
            </div>
          </div>
        </Group>
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
                  <Navs orientation="vertical" activeNav={0}/>
                </Group>
              </Paper>
            </div>
          </Collapse>
        </MediaQuery>
      )}
    </>
  );
};

const Navs: React.FC<{
  activeNav: number;
  orientation: TabsProps["orientation"];
}> = ({ activeNav, orientation }) => {
  return (
    <Tabs orientation={orientation}>
      <Tabs.Tab label="Career" icon={<BackpackIcon />}></Tabs.Tab>
      <Tabs.Tab label="Resume"></Tabs.Tab>
      <Tabs.Tab label="Portfolio"></Tabs.Tab>
    </Tabs>
  );
};

const getOppositeColorScheme = (start: ColorScheme): ColorScheme => {
  return start === "light" ? "dark" : "light";
};

export default Header;
