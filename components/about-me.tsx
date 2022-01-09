import { Card, Grid, Text, Title } from "@mantine/core";

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
        <br />
        <br />
      </Text>
      <Text>
        I'm a biomedical enginnering graduate interested in all things
        technology
        <br />
      </Text>
      <Text>
        I'm also a self-taught software developer that specializes in Fullstack
        web and devops tools
      </Text>
    </Card>
  );
};

export default AboutMe;
