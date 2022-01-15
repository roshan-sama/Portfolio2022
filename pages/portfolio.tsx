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
import SkillCategories from "../components/skill-category/skillCategories";
import PortfolioSkillHeader, {
  ColWrapper,
} from "../components/skill-category/skill-category-portfolio-header";
import SkillType from "../components/Skill/skill-type";
import SkillCategoryType from "../components/skill-category/skill-category-type";
import { useEffect, useMemo, useState } from "react";

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

const getCategoryById = (id: string): SkillCategoryType => {
  return SkillCategories.find((skill) => skill.id === id);
};

const getRoles = (id: string | string[]): RoleType[] => {
  if (!id) {
    return undefined;
  }

  if (isStringArray(id)) {
    return id.map((id) => getRoleById(id));
  } else {
    return [getRoleById(id)];
  }
};

const getDeduplicatedSkills = (
  skills: SkillType[]
): { dedupSkills: SkillType[]; dedupCategories: SkillCategoryType[] } => {
  const seenSkillIds = {};
  const seenCategoryIds = {};
  const dedupSkills = [];
  const dedupCategories = [];

  skills.forEach((skill) => {
    if (seenSkillIds[skill.id] === skill.id) {
      return;
    }
    dedupSkills.push(skill);
    seenSkillIds[skill.id] = skill.id;
    if (seenCategoryIds[skill.skillCategoryId] === skill.skillCategoryId) {
      return;
    }
    dedupCategories.push(getCategoryById(skill.skillCategoryId));
    seenCategoryIds[skill.skillCategoryId] = skill.skillCategoryId;
  });

  return { dedupSkills, dedupCategories };
};

export default function Portfolio() {
  const router = useRouter();
  const { roleId } = router.query;

  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2];

  let roles = getRoles(roleId);
  if (roles === undefined || roles[0] === undefined) {
    roles = Roles;
  }

  const { dedupSkills, dedupCategories } = useMemo(() => {
    const skills = roles.flatMap((role) => role.relevantSkills);
    return getDeduplicatedSkills(skills);
  }, [roles, getDeduplicatedSkills]);
  
  const numSkillCats = dedupCategories.length;
  const adjustedColSpan =
    dedupCategories.length >= 1 && dedupCategories.length <= 3
      ? 12 / numSkillCats
      : 12;

  return (
    <Container fluid={true} style={{ marginTop: "50vh", marginBottom: "20vh" }}>
      <Grid
        gutter="xs"
        justify="center"
        align="center"
        style={{ height: "inherit" }}
      >
        <Grid.Col span={12} md={10} xl={8}>
          <Card padding="xs">
            <Title order={1} style={{ marginBottom: "1rem" }}>
              Roshan&apos;s {getPortfolioName(roleId)}
            </Title>
            <Card
              style={{ backgroundColor: secondaryColor, backgroundImage: "" }}
            >
              <Container fluid>
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
