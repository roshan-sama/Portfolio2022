import {
  Card,
  Center,
  Grid,
  Container,
  Blockquote,
  ScrollArea,
} from "@mantine/core";
import Layout from "../components/layout";
import CareerItem from "../components/career-item/career-item";
import CompaniesTable from "../components/Company/companies-table";
import AboutMe from "../components/about-me";

export default function Home() {
  return (
    <Container fluid={true} style={{ height: "80vh" }}>
      <Grid justify="center" align="start" style={{ height: "inherit" }}>
        <Grid.Col span={12} sm={8} lg={6}>
          <Grid justify="center">
            <Grid.Col span={12} sm={6}>
              <AboutMe />
              {/* <Card style={{ margin: "0.5rem" }}>
                <Blockquote cite="Steve Wozniak">
                  Never trust a computer you can&apos;t throw out a window.
                </Blockquote>
              </Card> */}
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
