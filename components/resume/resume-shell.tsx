import { Grid, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ResumeBox from "./resume-box";
import ResumeHeader from "./resume-header";

const ResumeShell = () => {
  const widerThan8_5inch = useMediaQuery("(min-width: 11in");
  const dimensions = widerThan8_5inch
    ? { height: "11in", width: "8.5in" }
    : { minWidth: "80vw", minHeight: "100vh" };

  return (
    <Paper style={dimensions} shadow="xl">
      <ResumeHeader />
      <Grid>
        <Grid.Col span={6}>
          <ResumeBox            
            boxHeading="Profile"
            boxText="I create software to automate business processes and improve customer satisfaction"
          />
          
        </Grid.Col>
        <Grid.Col span={6}>
          <ResumeBox            
            boxHeading="Profile"
            boxText="I create software to automate business processes and improve customer satisfaction"
          />
          
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
export default ResumeShell;
