import { Grid, Container } from "@mantine/core";
import Layout from "../components/layout";
import CompaniesTable from "../components/Company/companies-table";
import AboutMe from "../components/about-me";
import styles from "../styles/home.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const large = useMediaQuery("(min-width: 965px)");
  return (
    <Container fluid={true} style={{ marginBottom: "20vh" }}>
      <Grid justify="center" align="start" style={{ height: "inherit" }}>
        <Grid.Col span={{ base: 12, sm: 8, lg: 6 }}>
          <Grid justify="center">
            <Grid.Col
              span={{ base: 12, md: 8, xl: 6 }}
              offset={large ? 6 : 0}
              style={{ minWidth: "406px" }}
            >
              {/* // TODO: Make height difference below inversely proportional to view height
Smaller device heights must make the spacing larger
*/}
              <div className={styles.topSpacer}></div>
              <AboutMe />
            </Grid.Col>
          </Grid>
          <CompaniesTable />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
