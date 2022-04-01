import {
  Card,
  Title,
  Grid,
  Text,
  Container,
  useMantineTheme,
  Group,
  Switch,
  Paper,
  Divider,
} from "@mantine/core";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Roles from "../components/role/roles";
import PortfolioSkillHeader, {
  ColWrapper,
} from "../components/skill-category/skill-category-portfolio-header";
import { useEffect, useMemo, useState } from "react";
import ProjectTable from "../components/Project/project-table";
import { useMediaQuery } from "@mantine/hooks";
import getDeduplicatedSkills from "../utils/get-dedup-skills";
import getPortfolioName from "../utils/get-portfolio-name";
import getRolesById from "../utils/get-roles-by-ids";
import ChangeRoleBtn from "../components/role/change-role-btn";
import ChangeRoleBtnSingle from "../components/role/change-role-btn-single";
import isStringArray from "../utils/is-string-array";
import SkillCategoryType from "../components/skill-category/skill-category-type";
import SkillCategories from "../components/skill-category/skillCategories";
import swapPush from "../hooks/use-update-push";
import Skills from "../components/Skill/skills";

export default function Portfolio() {
  const router = useRouter();
  let { roleId, skillId } = router.query;
  roleId = roleId ?? [];
  skillId = skillId ?? []; // TODO: Potential improvement, try making skillId a comma delimited list of just the id without id_skill prefix and add that prefix here

  if (!isStringArray(skillId)) {
    skillId = [skillId];
  }

  const [multipleRoles, setMultipleRoles] = useState(false);

  const largeScreen = useMediaQuery("(min-width: 1400px)");

  let roles = getRolesById(roleId);
  if (roles === undefined || roles[0] === undefined) {
    roles = Roles;
  }

  const { dedupSkills: dedupSkillsFromRole, dedupCategories } = useMemo(() => {
    const skills = roles.flatMap((role) => role.relevantSkills);
    return getDeduplicatedSkills(skills);
  }, [roles, getDeduplicatedSkills]);

  const setNewSkillList = (
    categoryId: SkillCategoryType["id"],
    selectedSkillsIds: string[]
  ) => {
    //@ts-ignore
    let finalSelectedSkillIds: string[] = skillId;
    if (finalSelectedSkillIds.length === 0) {
      finalSelectedSkillIds = Skills.map((skill) => skill.id);
    }
    const skillsIdsToRemove = Skills.filter(
      (skill) =>
        skill.skillCategoryId === categoryId &&
        selectedSkillsIds.find(
          (selectedSkill) => selectedSkill === skill.id
        ) === undefined
    );
    const skillsIdsToAdd = Skills.filter(
      (skill) =>
        skill.skillCategoryId === categoryId &&
        selectedSkillsIds.find(
          (selectedSkill) => selectedSkill === skill.id
        ) !== undefined
    );

    finalSelectedSkillIds = finalSelectedSkillIds.filter(
      (skillId) =>
        skillsIdsToRemove.find((remove) => remove.id === skillId) === undefined
    );
    skillsIdsToAdd.forEach((skillId) => finalSelectedSkillIds.push(skillId.id));

    swapPush(router, "skillId", finalSelectedSkillIds);
  };

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
        <Grid.Col span={12} xl={8}>
          <Group style={{ marginBottom: "10px" }}>
            <Paper style={{ padding: "0px 10px" }}>
              <Group direction="row">
                {isStringArray(roleId) || multipleRoles ? (
                  <ChangeRoleBtn />
                ) : (
                  <ChangeRoleBtnSingle currentRoleId={roleId} />
                )}
                <Switch
                  label={
                    isStringArray(roleId) && roleId.length > 1
                      ? "Remove roles below to toggle single role"
                      : "Choose multiple roles"
                  }
                  checked={multipleRoles}
                  disabled={
                    multipleRoles && isStringArray(roleId) && roleId.length > 1
                  }
                  onChange={(event) => {
                    setMultipleRoles(event.currentTarget.checked);
                  }}
                />
              </Group>
            </Paper>
          </Group>
          <Paper padding="xl">
            <Group position="apart" style={{ marginBottom: "1rem" }}>
              <Title order={1}>Roshan&apos;s {getPortfolioName(roleId)}</Title>
            </Group>
            <Card>
              <Container fluid>
                <Grid gutter="xs">
                  {dedupCategories.map((category) => (
                    <ColWrapper key={category.id} span={12}>
                      <PortfolioSkillHeader
                        skillCategory={category}
                        allRoleSkills={dedupSkillsFromRole}
                        //@ts-ignore
                        selectedSkillsIds={skillId}
                        setNewSkillList={setNewSkillList}
                      />
                      <Divider style={{ margin: "10px 0px 0px 0px" }} />
                    </ColWrapper>
                  ))}
                </Grid>
                <Text>
                  Filter the portfolio items below by checking one or more of
                  these skills (Feature in progress)
                </Text>
              </Container>
              <ProjectTable
                roleDedupedSkills={dedupSkillsFromRole}
                selectedSkillsIds={skillId}
              />
            </Card>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return <Layout hideName={true}>{page}</Layout>;
};
