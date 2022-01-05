import { Card, Center, Grid, Container } from "@mantine/core";
import Layout from "../components/layout";
import CareerItem from "../components/Career/career-item";

export default function Home() {
  return (
    <Container fluid={true} style={{ height: "inherit", marginTop: "-60px" }}>
      <Grid justify="center" align="center" style={{ height: "inherit" }}>
        <Grid.Col span={12} sm={8} lg={6}>
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
