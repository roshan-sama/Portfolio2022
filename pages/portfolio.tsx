import {
  Card,
  Title,
  Grid,
  Container,
  Center,
  Group,
  Paper,
  useMantineTheme,
} from "@mantine/core";
import Layout from "../components/layout";
import CareerItem from "../components/career-item/career-item";
import { useRouter } from "next/router";
import Roles from "../components/role/roles";
import RoleType from "../components/role/role-type";

const getRoleById = (roleid: string): RoleType =>
  Roles.find((role) => role.id === `id_role_${roleid}`);

const isStringArray = (role: string | string[]): role is string[] => {
  return (role as string[]).reduce !== undefined;
};

const getPortfolioName = (id: string | string[]) => {
  if (!id || isStringArray(id)) {
    return "Portfolio";
  } else {
    const role = getRoleById(id);
    if (!role) {
      return "Portfolio";
    }
    return `${role.name} Portfolio`;
  }
};

export default function Portfolio() {
  const router = useRouter();
  const { role } = router.query;

  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2];

  return (
    <Container fluid={true} style={{ marginTop: "50vh" }}>
      <Grid justify="center" align="center" style={{ height: "inherit" }}>
        <Grid.Col span={12} md={10} xl={8}>
          <Card padding="sm">
            <Title order={1}>Roshan&apos;s {getPortfolioName(role)}</Title>
            <Card style={{ backgroundColor: secondaryColor }}>
              <Container fluid>
                <Grid>
                  <Grid.Col span={12} sm={4}>
                    a
                  </Grid.Col>
                  <Grid.Col span={12} sm={4}>
                    a
                  </Grid.Col>
                  <Grid.Col span={12} sm={4}>
                    a
                  </Grid.Col>
                </Grid>
              </Container>
            </Card>
          </Card>
          <Card>In progress</Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
