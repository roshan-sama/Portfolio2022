import { Card, Center, Grid, Container, Blockquote } from "@mantine/core";
import Layout from "../components/layout";
import CareerItem from "../components/Career/career-item";

export default function Home() {
  return (
    <Container fluid={true} style={{ height: "inherit" }}>
      <Grid justify="center" align="center" style={{ height: "inherit" }}>
        {/* TODO: Make that number 60 a constant defined in a different file. Its the same size as the header height */}
        <Grid.Col span={12} sm={8} lg={6} style={{ marginTop: -60 }}>
          <Grid>
            <Grid.Col span={6} >
              <Card >
                <Blockquote>
                  The harder you work for something, the greater you'll feel
                  when you achieve it
                </Blockquote>
              </Card>
            </Grid.Col>
            <Grid.Col span={6} offset={6}>
              <Card style={{ margin: "3rem" }}>
                <Blockquote>
                  Especially if its troubleshooting a generic error
                  message for two hours
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
