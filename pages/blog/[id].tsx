import { Grid, Container, Card } from "@mantine/core";
import Layout from "../../components/layout";
import Blog from "../../components/blog/blog";
import { useRouter } from "next/router";

export default function IndividualBlog() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container fluid={true} style={{ marginBottom: "20vh" }}>
      <Grid justify="center" align="start" style={{ height: "inherit" }}>
        <Grid.Col span={12} sm={8} lg={6}>
          <Card>My Blog posts</Card>
          <Blog />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout hideName={true}>{page}</Layout>;
};
