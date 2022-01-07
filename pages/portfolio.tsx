import {
  Card,
  Title,
  Grid,
  Container,
  Center,
  Group,
  Paper,
} from "@mantine/core";
import Layout from "../components/layout";
import CareerItem from "../components/career-item/career-item";
import { useRouter } from "next/router";

const idToNameMap = {
  devops: "Devops",
  fstack: "Fullstack Web dev",
  gamedev: "Game development",
};

const getPortfolioName = (name) => {
  if (!name) {
    return "Portfolio";
  }
  const displayName = idToNameMap[name] ? idToNameMap[name] : ""
  return `${displayName} Portfolio`;
};

export default function Portfolio() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Container fluid={true} style={{ height: "inherit" }}>
      <Grid justify="center" align="center" style={{ height: "inherit" }}>
        <Grid.Col span={12} sm={8} lg={6}>
          <Paper padding="sm">
            <Title order={1}>Roshan&apos;s {getPortfolioName(name)}</Title>
          </Paper>
          <Card>2</Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
