import {
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";

const AboutMe = () => {
  const buttonGradient = {
    from: "grape",
    to: "violet",
    deg: 90,
  };

  return (
    <Card>
      <Text component="span" role="img" size="xl" fw={700}>
        👋
      </Text>

      <Text
        component="span"
                variant="gradient"
        gradient={{ from: "grape.6", to: "grape.6", deg: 45 }}
        size="xl"
        fw={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Hi!
        <br />
      </Text>
      <Text
        component="span"
                size="sm"
        fw={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        My name is{" "}
      </Text>
      <Text
        component="span"
                size="xl"
        fw={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
        variant="gradient"
        gradient={{ from: "grape.6", to: "grape.6", deg: 45 }}
      >
        {process.env.NEXT_PUBLIC_NAME}
        <br />
      </Text>
      <Text
        component="span"
                size="sm"
        fw={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Welcome to my little corner of the internet!
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

      <Text c="dimmed">Check out my portfolios:</Text>
      <Group
        justify="center"
        style={{ marginTop: "10px", marginLeft: "auto" }}
      >
        <Link href="/portfolio?roleId=dops" prefetch={false}>
          <Button variant="gradient" gradient={buttonGradient}>
            Devops Portfolio
          </Button>
        </Link>
        <Link href="/portfolio?roleId=fstack" prefetch={false}>
          <Button variant="gradient" gradient={buttonGradient}>
            Fullstack Portfolio
          </Button>
        </Link>
        <Link href="/portfolio?roleId=gamedev#title" prefetch={false}>
          <Button variant="gradient" gradient={buttonGradient}>
            Game dev Portfolio
          </Button>
        </Link>
      </Group>
    </Card>
  );
};

export default AboutMe;
