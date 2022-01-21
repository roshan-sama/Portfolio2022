import { Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ResumeHeader from "./resume-header";

const ResumeShell = () => {
  const widerThan8_5inch = useMediaQuery("(min-width: 11in");
  const dimensions = widerThan8_5inch
    ? { height: "11in", width: "8.5in" }
    : { minWidth: "80vw", minHeight: "100vh" };

  return (
    <Paper style={dimensions} shadow="xl">
      <ResumeHeader />
    </Paper>
  );
};
export default ResumeShell;
