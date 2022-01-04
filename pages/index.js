import { Card, Center, Grid, Container } from "@mantine/core";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Container fluid={true} style={{height: "inherit", marginTop: "-60px"}}>
      <Grid justify="center" align="center" style={{height: "inherit"}}>
        <Grid.Col span={12} sm={8} lg={6}>
          <Card>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
