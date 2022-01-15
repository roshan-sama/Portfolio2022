import { useState } from "react";
import {
  MediaQuery,
  Burger,
  DEFAULT_THEME,
  Paper,
  Collapse,
  Group,
  Button,
  Avatar,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { ExternalLinkIcon, GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ColorScheme } from "../../types";
import styles from "../../styles/animation.module.css";
import Navs from "./navs";

const Header: React.FC<{
  value: ColorScheme;
  setValue: (
    val: ColorScheme | ((prevState: ColorScheme) => ColorScheme)
  ) => void;
}> = ({ value, setValue }) => {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [animating, setAnimating] = useState(false);
  const title = burgerOpened ? "Close navigation" : "Open navigation";
  const theme = useMantineTheme()

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
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={burgerOpened}
            onClick={() => setBurgerOpened((o) => !o)}
            size="sm"
            color={DEFAULT_THEME.colors.gray[6]}
            mr="xl"
            title={title}
          />
        </MediaQuery>
        <div style={{ marginRight: "20px" }}>{avatar}</div>

        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group>
            <Navs orientation="horizontal" />
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
            rightIcon={<ExternalLinkIcon width={15} height={15} />}
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
            rightIcon={<ExternalLinkIcon width={15} height={15} />}
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
      {burgerOpened && (
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Collapse in={burgerOpened}>
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
                  <Navs orientation="vertical" />
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

export default Header;
