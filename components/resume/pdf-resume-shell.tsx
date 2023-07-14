import { Card, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Line,
  Font,
} from "@react-pdf/renderer";
import { Style } from "@react-pdf/types/style.js";
import dynamic from "next/dynamic";
import ResumeShell from "./resume-shell";
import { useRouter } from "next/router";
import getRoleById from "../../utils/get-role-by-id";
import { useMemo } from "react";
import getDeduplicatedSkills from "../../utils/get-dedup-skills";
import SkillCategories from "../skill-category/skillCategories";

const PdfResumeShell = () => {
  const router = useRouter();
  const roleId = router.query["roleId"]
  const roleToDisplay = typeof roleId === "string" ? getRoleById(roleId) : undefined

  const displayResume = !!roleToDisplay

  const { dedupSkills: dedupSkillsFromRole, dedupCategories } = useMemo(() => {
    const skills = roleToDisplay?.relevantSkills ?? [];
    return getDeduplicatedSkills(skills);
  }, [roleToDisplay, getDeduplicatedSkills]);

  // const skillDisplay = router.query[];

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
      paddingHorizontal: '0.15in',
      paddingVertical: '0.25in'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },

    h1: {
      fontSize: 30,
      marginTop: 1,
      marginBottom: 1,
      paddingVertical: 10,
    },
    h2: {
      fontSize: 24,
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
      paddingVertical: 10,
    },
    h3: {
      fontSize: 20,
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
      paddingVertical: 10,
    },

    row: {
      flex: 1,
      flexDirection: 'row',
      flexGrow: 1,
      whitespace: "pre-wrap"
    },
    left: {
      width: '33%',//<- working alternative
      whitespace: "pre-wrap"
      // flexGrow: 0,
      // flexShrink: 1,
      // flexBasis: 200,
    },

    right: {
      padding: 5,
      width: '66%', //<- working alternative
      // flexShrink: 1,
      // flexGrow: 5,
    },

  });


  return (
    <Card style={dimensions}>
      <PDFViewer style={pdfViewerDimensions}>
        <Document>
          <Page size="A4" wrap style={styles.page}>
            {displayResume &&
              <View style={styles.row}>
                <View style={styles.left}>
                  <View>
                    <Text style={styles.h1}>Roshan Manuel</Text>
                    <Text style={styles.h2}>{roleToDisplay.name}</Text>
                  </View>
                  <View>
                    <Text>Skills:</Text>
                    {SkillCategories.map((category, index) =>
                      <Text id={index.toString()} style={{ fontSize: '14px' }}>{category.name}</Text>
                    )}
                  </View>
                </View>

                <View style={styles.right}>
                  <View >
                    <Text style={{ fontSize: '24px' }}>Professional Experience</Text>
                    <Text style={{ fontSize: '24px' }}><ul><li>t1</li></ul></Text>
                  </View>
                </View>
              </View>
            }
            {!displayResume &&
              <View><Text style={{ width: '100%', textAlign: "center", marginTop: "3em" }}>Please select a single role to view resume</Text></View>}
          </Page>
        </Document>
      </PDFViewer>
    </Card >
  );
};

export default dynamic(() => Promise.resolve(PdfResumeShell), {
  ssr: false,
});
