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
  Link,
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

  Font.registerHyphenationCallback((word) => [word]);

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
      paddingVertical: '0.15in'
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
    },
    h2: {
      fontSize: 24,
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
    },
    h3: {
      fontSize: 20,
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
    },

    p: {
      fontSize: 12
    },

    row: {
      flex: 1,
      flexDirection: 'row',
      flexGrow: 1,
      whitespace: "pre-wrap",
    },
    left: {
      
      width: '33%',//<- working alternative
      whitespace: "pre-wrap"
      // flexGrow: 0,
      // flexShrink: 1,
      // flexBasis: 200,
    },

    right: {
      width: '66%', //<- working alternative
      // flexShrink: 1,
      // flexGrow: 5,
    },

    full: {
      width: '100%'
    }

  });


  return (
    <Card style={dimensions}>
      <PDFViewer style={pdfViewerDimensions}>
        <Document>
          <Page size="A4" style={styles.page}>
            {displayResume &&
              <View style={{ display: "flex", flexDirection: 'column' }}>
                <View style={{ display: "flex", flexDirection: 'row' }}>
                  <View style={{ width: '50%' }}>
                    <Text style={styles.h1}>Roshan Manuel</Text>

                    <Text style={styles.h2}>{roleToDisplay.name}</Text>
                  </View>
                  <View style={{ width: '50%' }}>
                    <Text style={{...styles.p, marginLeft: 'auto'}}>Email: roshan@goldwidow.io</Text>
                    <Link src={window.location.href} style={{...styles.p, marginLeft: 'auto'}}>Resume / Portfolio Website</Link>
                  </View>
                </View>

                <View style={{...styles.row, borderTop: '2', borderColor: 'black', marginTop: 10, paddingTop: 10}}>
                  <View style={{...styles.left, borderRight: '1', borderColor: 'black'}}>
                    <View>
                      <Text style={styles.h3}>Skills:</Text>
                      {SkillCategories.map((category, index) => <>
                        {dedupSkillsFromRole.filter(skill => skill.skillCategoryId === category.id).length > 0 &&
                          <View style={{ marginTop: 10 }}>
                            <Text id={index.toString()} style={{ fontSize: '14px', textDecoration: 'underline' }}>{category.name}</Text>
                            <Text style={styles.p}>
                              {dedupSkillsFromRole.filter(skill => skill.skillCategoryId === category.id).map((skill, index) =>
                                <>{index !== 0 && ' | '}{skill.name}</>
                              )}
                            </Text>
                          </View>}
                      </>
                      )}
                    </View>
                  </View>

                  <View style={{...styles.right, paddingLeft: 10}}>
                    <View>
                      <Text style={styles.h3}>Professional Experience</Text>
                    </View>
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
