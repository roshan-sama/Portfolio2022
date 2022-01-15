import { Button, Card, Divider, Grid, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

const AboutMe = () => {
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
        I&apos;m a biomedical enginnering graduate interested in all things
        technology
        <br />
      </Text>
      <Text>
        I&apos;m also a self-taught software developer that specializes in
        Fullstack web and devops tools
      </Text>
      <Divider style={{marginBlock: "5px"}} />
      <Text color="dimmed">Check out my portfolios:</Text>
      <Group style={{ marginTop: "10px" }}>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          <Link href="/portfolio?roleId=dops#title">Devops Portfolio</Link>
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          <Link href="/portfolio?roleId=fstack#title">Fullstack Portfolio</Link>
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          <Link href="/portfolio?roleId=gamedev#title">Game dev Portfolio</Link>
        </Button>
      </Group>
    </Card>
  );
};

export default AboutMe;
