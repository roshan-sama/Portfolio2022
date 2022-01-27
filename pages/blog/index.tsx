import { Grid, Container, Card } from "@mantine/core";
import Layout from "../../components/layout";
import { useMediaQuery } from "@mantine/hooks";
import Blog from "../../components/blog/blog";

export default function Home() {
  const large = useMediaQuery("(min-width: 965px)");
  
  return (
    <Container fluid={true} style={{ marginBottom: "20vh" }}>
      <Grid justify="center" align="start" style={{ height: "inherit" }}>
        <Grid.Col span={12} sm={8} lg={6}>
          <Grid justify="center">
            <Grid.Col span={12} md={8} xl={6}>
              <Card>My Blog posts</Card>
              <Blog />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout hideName={true}>{page}</Layout>;
};
