import {
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

const AboutMe = () => {
  const theme = useMantineTheme();
  const buttonGradient = {
    from: "grape",
    to: theme.colorScheme === "dark" ? "violet" : "violet",
    deg: 90,
  };

  return (
    <Card>
      <Text component="span" align="center" role="img" size="xl" weight={700}>
        👋
      </Text>

      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: "grape", to: "grape", deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Hi!
        <br />
      </Text>
      <Text
        component="span"
        align="center"
        size="sm"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        My name is{" "}
      </Text>
      <Text
        component="span"
        align="center"
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
        variant="gradient"
        gradient={{ from: "grape", to: "grape", deg: 45 }}
      >
        {process.env.NEXT_PUBLIC_NAME}
        <br />
      </Text>
      <Text
        component="span"
        align="center"
        size="sm"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Welcome to my portfolio website!
      </Text>
      <Text>
        I&apos;m a biomedical engineering graduate interested in all things
        technology
        <br />
      </Text>
      <Text>
        I&apos;m also a self-taught software developer that specializes in
        Fullstack web and devops tools
      </Text>
      <Divider style={{ marginBlock: "5px" }} />

      <Text color="dimmed">Check out my portfolios:</Text>
      <Group
        position="center"
        style={{ marginTop: "10px", marginLeft: "auto" }}
      >
        <Link href="/portfolio?roleId=dops">
          <Button variant="gradient" gradient={buttonGradient}>
            Devops Portfolio
          </Button>
        </Link>
        <Link href="/portfolio?roleId=fstack">
          <Button variant="gradient" gradient={buttonGradient}>
            Fullstack Portfolio
          </Button>
        </Link>
        <Link href="/portfolio?roleId=gamedev#title">
          <Button variant="gradient" gradient={buttonGradient}>
            Game dev Portfolio
          </Button>
        </Link>
      </Group>
    </Card>
  );
};

export default AboutMe;
