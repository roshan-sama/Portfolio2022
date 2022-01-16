import {
  Card,
  Title,
  Grid,
  Text,
  Container,
  useMantineTheme,
  Group,
} from "@mantine/core";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Roles from "../components/role/roles";
import PortfolioSkillHeader, {
  ColWrapper,
} from "../components/skill-category/skill-category-portfolio-header";
import { useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import getDeduplicatedSkills from "../utils/get-dedup-skills";
import getRolesById from "../utils/get-roles-by-ids";

export default function Resume() {
  const router = useRouter();
  const { roleId } = router.query;

  const largeScreen = useMediaQuery("(min-width: 1400px)");

  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2];

  let roles = getRolesById(roleId);
  if (roles === undefined || roles[0] === undefined) {
    roles = Roles;
  }

  const { dedupSkills, dedupCategories } = useMemo(() => {
    const skills = roles.flatMap((role) => role.relevantSkills);
    return getDeduplicatedSkills(skills);
  }, [roles, getDeduplicatedSkills]);

  const adjustedColSpan = 6;

  return (
    <Container
      fluid={true}
      style={{ marginTop: largeScreen ? "0vh" : "300px", marginBottom: "20vh" }}
    >
      <Grid
        gutter="xs"
        justify="center"
        align="center"
        style={{ height: "inherit" }}
      >
        <Grid.Col span={12} xl={6}>
          <Card>
              Resume in progress
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
