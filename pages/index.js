import { Card, Center, Grid, Container, Blockquote } from "@mantine/core";
import Layout from "../components/layout";
import CareerItem from "../components/Career/career-item";

export default function Home() {
  return (
    <Container fluid={true} style={{ height: "inherit" }}>
      <Grid justify="center" align="start" style={{ height: "inherit" }}>
        <Grid.Col span={12} sm={8} lg={6}>
          <Grid justify="center">
            <Grid.Col span={6}>
              <Card style={{ margin: "0.5rem" }}>
                <Blockquote cite="Steve Wozniak">
                  Never trust a computer you can't throw out a window.
                </Blockquote>
              </Card>
            </Grid.Col>
          </Grid>
          <Card>
            <CareerItem
              career={{
                id: "1",
                companyid: "1",
                imgUrl: "img/epiclogo.jpg",
                description: "some desc",
                startDate: new Date(),
              }}
            />
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
