import { Card, Container, Grid, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ResumeBox from "./resume-box";
import ResumeHeader from "./resume-header";

const ResumeShell = () => {
  const widerThan8_5inch = useMediaQuery("(min-width: 8.5in");

  const dimensions = widerThan8_5inch
    ? { height: "11in", width: "8.5in", margin: "auto" }
    : { height: "100vh", width: "80vw", margin: "auto" };

  const paperDimensions = widerThan8_5inch
    ? { height: "10.5in", width: "8.25in", margin: "auto" }
    : { height: "95vh", width: "75vw", margin: "auto" };

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
          <ResumeBox boxHeading="Work" boxText="" colorVersion="second" />
        </Grid.Col>
        <Grid.Col span={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <ResumeBox boxHeading="Projects" boxText="" colorVersion="first" />
        </Grid.Col>
        <Grid.Col span={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <ResumeBox boxHeading="Skills" boxText="" colorVersion="second" />
        </Grid.Col>
      </Paper>
    </Card>
  );
};
export default ResumeShell;
