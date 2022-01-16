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
import ProjectTable from "../components/Project/project-table";
import { useMediaQuery } from "@mantine/hooks";
import getDeduplicatedSkills from "../utils/get-dedup-skills";
import getPortfolioName from "../utils/get-portfolio-name";
import getRolesById from "../utils/get-roles-by-ids";
import ChangeRoleBtn from "../components/change-role-btn";

export default function Portfolio() {
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
        <Grid.Col span={12} xl={6} offset={largeScreen ? 5 : 0}>
          <Card>
            <Group position="apart">
              <Title order={1} style={{ marginBottom: "1rem" }}>
                Roshan&apos;s {getPortfolioName(roleId)}
              </Title>
              <ChangeRoleBtn />
            </Group>
            <Card style={{ backgroundColor: secondaryColor }}>
              <Container fluid>
                <Title order={3} style={{ marginBottom: "5px" }}>
                  Relevant skills:
                </Title>

                <Grid gutter="xs">
                  {dedupCategories.map((category) => (
                    <ColWrapper
                      key={category.id}
                      span={12}
                      sm={adjustedColSpan}
                    >
                      <PortfolioSkillHeader
                        skillCategory={category}
                        allRoleSkills={dedupSkills}
                      />
                    </ColWrapper>
                  ))}
                </Grid>
                <Text>
                  You can filter the portfolio items below by checking one or
                  more of these skills
                </Text>
              </Container>
            </Card>
          </Card>
        </Grid.Col>
        <Grid.Col span={12} xl={8}>
          <ProjectTable selectedSkills={dedupSkills} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
