import { Card, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { Style } from "@react-pdf/types/style.js";
import dynamic from "next/dynamic";
import ResumeShell from "./resume-shell";

const PdfResumeShell = () => {
  const widerThan8_5inch = useMediaQuery("(min-width: 8.5in");

  const dimensions = widerThan8_5inch
    ? {
        height: "12.5in",
        width: "8.85in",
        margin: "auto",
        padding: "0px",
        display: "flex",
      }
    : {
        height: "auto",
        width: "80vw",
        margin: "auto",
        padding: "0px",
        display: "flex",
      };

  const pdfViewerDimensions: Style = widerThan8_5inch
    ? {
        height: "12.5in",
        width: "8.85in",
        margin: "auto",
        borderRadius: "3px",
        borderColor: "#000000",
        borderStyle: "solid",
      }
    : {
        height: "100vh",
        width: "75vw",
        margin: "auto",
        borderRadius: "3px",
        borderColor: "#000000",
        borderStyle: "solid",
      };

  const colProps = {
    span: 12,
    style: { paddingRight: "0px", paddingLeft: "0px" },
    sm: 6,
  };

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Card style={dimensions}>
      <PDFViewer style={pdfViewerDimensions}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              {/* <ResumeShell /> */}
              <Text>Dynamic Pdf Resume generation</Text>
              <Text>Feature in Progress, scroll below for current static resume</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Card>
  );
};

export default dynamic(() => Promise.resolve(PdfResumeShell), {
  ssr: false,
});
