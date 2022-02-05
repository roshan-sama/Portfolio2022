import {
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ResumeBox from "./resume-box";
import ResumeHeader from "./resume-header";

const ResumeShell = () => {
  const widerThan8_5inch = useMediaQuery("(min-width: 8.5in");

  const dimensions = widerThan8_5inch
    ? { height: "11in", width: "8.5in", margin: "auto" }
    : { height: "auto", width: "80vw", margin: "auto" };

  const paperDimensions = widerThan8_5inch
    ? { height: "10.5in", width: "8.25in", margin: "auto" }
    : { height: "auto", width: "75vw", margin: "auto" };

  const colProps = {
    span: 12,
    style: { paddingRight: "0px", paddingLeft: "0px" },
    sm: 6,
  };

  return (
    <Card style={dimensions}>
      <Paper style={paperDimensions} shadow="xl">
        <ResumeHeader />
        <Grid gutter="xs">
          <Grid.Col {...colProps}>
            <ResumeBox
              boxHeading="Profile"
              boxText="I create software to automate business processes and improve customer satisfaction"
              colorVersion="first"
            />
          </Grid.Col>
          <Grid.Col {...colProps}>
            <ResumeBox
              boxHeading="Contact"
              boxText="Linthicum Heights, Maryland
            +1 972 955 6794
            manuelroshan@gmail.com"
              colorVersion="second"
            />
          </Grid.Col>
          <Grid.Col {...colProps}>
            <ResumeBox
              boxHeading="Education"
              boxText="B.S. Biomedical Engineering, University of Texas at Dallas"
              colorVersion="second"
            />
          </Grid.Col>
          <Grid.Col {...colProps}>
            <ResumeBox
              boxHeading="Goal"
              boxText="Seeking challenging opportunities to grow my skills in devops and fullstack development"
              colorVersion="first"
            />
          </Grid.Col>
        </Grid>
        <Grid.Col span={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <ResumeBox boxHeading="Work" colorVersion="second">
            <SimpleGrid
              cols={3}
              breakpoints={[
                { minWidth: 601, cols: 3, spacing: "sm" },
                { maxWidth: 600, cols: 1, spacing: "sm" },
              ]}
            >
              <div>
                <b>FULLSTACK DEVELOPER</b>
                <br />
                <b>May 2020 - Nov 2021</b>
                <br />
                <br />
                Angelic Shipping, Capitol Heights, MD
              </div>
              <div>
                <b>DEVOPS ENGINEER</b>
                <br />
                <b>Nov 2021 - Present</b>
                <br />
                <br />
                Synergy BIS, Reston, VA
              </div>
              <div>
                <b>FULLSTACK DEVELOPER</b>
                <br />
                <b>Nov 2021 - Present</b>
                <br />
                <br />
                Synergy BIS, Reston, VA
              </div>
            </SimpleGrid>
          </ResumeBox>
        </Grid.Col>
        <Grid.Col span={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <ResumeBox boxHeading="Projects" boxText="" colorVersion="first">
            <SimpleGrid
              cols={3}
              breakpoints={[
                { minWidth: 601, cols: 3, spacing: "sm" },
                { maxWidth: 600, cols: 1, spacing: "sm" },
              ]}
            >
              <div>
                <b>Angelic Shipping</b>
                <br />
                <br />
                Created a booking request form using React and ASP.NET Core
              </div>
              <div>
                <b>Synergy Devops</b>
                <br />
                <br />
                Designed turnkey solution to create a complete devsecops
                pipeline
              </div>
              <div>
                <b>GoldWidow LLC</b>
                <br />
                <br />
                Created applications using, and contributed to the Blitzjs
                fullstack framework
              </div>
            </SimpleGrid>
          </ResumeBox>
        </Grid.Col>
        <Grid.Col span={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <ResumeBox boxHeading="Skills" boxText="" colorVersion="second">
            <SimpleGrid
              cols={3}
              breakpoints={[
                { minWidth: 601, cols: 3, spacing: "sm" },
                { maxWidth: 600, cols: 1, spacing: "sm" },
              ]}
            >
              <div>
                <Center>
                  <b>LANGUAGES</b>
                </Center>
                <br />
                <Center>C# | ASP.NET | MVC</Center>
                <Center>Javascript | React | Nextjs</Center>
                <Center>Typescript | Node | Blitzjs</Center>
              </div>
              <div>
                <Center>
                  <b>DEVOPS TOOLS</b>
                </Center>
                <br />
                <Center>Docker | Kubernetes</Center>
                <Center>ArgoCD | Terraform | Bash</Center>
                <Center>Jenkins | Harbor | aws CLI</Center>
              </div>
              <div>
                <Center>
                  <b>OTHER TOOLS</b>
                </Center>
                <br />
                <Center>Postgres | SQL | Git</Center>
                <Center>Twilio | Stripe | Maps API</Center>
                <Center>Linux | NGINX | postfix</Center>
              </div>
            </SimpleGrid>
          </ResumeBox>
        </Grid.Col>
      </Paper>
    </Card>
  );
};
export default ResumeShell;
