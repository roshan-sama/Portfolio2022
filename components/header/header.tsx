import { useState } from "react";
import {
  Box,
  Burger,
  DEFAULT_THEME,
  Paper,
  Collapse,
  Group,
  Stack,
  Button,
  Avatar,
  ActionIcon,
  useMantineTheme,
  Tooltip,
} from "@mantine/core";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { ColorScheme } from "../../types";
import styles from "../../styles/animation.module.css";
import Navs from "./navs";

const Header: React.FC<{
  value: ColorScheme;
  setValue: (val: ColorScheme) => void;
}> = ({ value, setValue }) => {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [animating, setAnimating] = useState(false);
  const title = burgerOpened ? "Close navigation" : "Open navigation";
  const theme = useMantineTheme();

  const avatar = (
    <Avatar
      alt="Roshan's profile picture"
      size={32}
      radius="xl"
      style={{ marginRight: 5 }}
      src="/img/roshan_avatar.jpg"
    />
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Burger
          hiddenFrom="sm"
          opened={burgerOpened}
          onClick={() => setBurgerOpened((o) => !o)}
          size="sm"
          color={DEFAULT_THEME.colors.gray[6]}
          mr="xl"
          title={title}
        />
        <div style={{ marginRight: "20px" }}>{avatar}</div>

        <Group visibleFrom="sm">
          <Navs orientation="horizontal" />
        </Group>
        {/* <SidebarRight /> */}
        <Group style={{ marginLeft: "auto" }}>
          <Button
            component="a"
            href="https://github.com/Roesh"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: "violet", to: "grape", deg: 105 }}
            radius="xl"
            leftSection={<GitHubLogoIcon width={18} height={18} />}
            rightSection={<ExternalLinkIcon width={15} height={15} />}
          >
            Github
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/roshan-m-780824a9/"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: "violet", to: theme.primaryColor, deg: 105 }}
            radius="xl"
            leftSection={<LinkedInLogoIcon width={15} height={15} />}
            rightSection={<ExternalLinkIcon width={15} height={15} />}
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
                setValue(getOppositeColorScheme(value));
              }, 500);
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              className={animating ? styles.spinForward : styles.rotateHalf}
            >
              <Tooltip label={value === "dark" ? "Light Theme": "Dark Theme"} withArrow>
                {/*
                  Colors and icon are picked by CSS (light-dark / lightHidden / darkHidden) instead of
                  by the scheme value in JS, so the server HTML matches what the client renders
                  for visitors whose saved scheme differs from the default.
                */}
                <ActionIcon
                  variant="transparent"
                  aria-label="Toggle color scheme"
                  style={{
                    color:
                      "light-dark(var(--mantine-color-blue-2), var(--mantine-color-dark-5))",
                    backgroundColor:
                      "light-dark(var(--mantine-color-dark-9), var(--mantine-color-grape-3))",
                  }}
                  size="lg"
                >
                  <Box component="span" lightHidden>
                    <SunIcon />
                  </Box>
                  <Box component="span" darkHidden>
                    <MoonIcon />
                  </Box>
                </ActionIcon>
              </Tooltip>
            </div>
          </div>
        </Group>
      </div>
      {burgerOpened && (
        <Collapse expanded={burgerOpened} hiddenFrom="sm">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "120%",
            }}
          >
            <Paper
              p="md"
              shadow="xs"
              style={{
                width: "100%",
                zIndex: 2,
                marginLeft: "-20px",
                marginTop: "10px",
              }}
            >
              <Stack
                key={"burgerGroup"}
                style={{ marginLeft: "10px", zIndex: 100 }}
              >
                <Navs orientation="vertical" />
              </Stack>
            </Paper>
          </div>
        </Collapse>
      )}
    </>
  );
};

const getOppositeColorScheme = (start: ColorScheme): ColorScheme => {
  return start === "light" ? "dark" : "light";
};

export default Header;
