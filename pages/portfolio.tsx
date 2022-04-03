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
  SegmentedControl,
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
import { multiSwap } from "../hooks/use-update-push";
import Skills from "../components/Skill/skills";
import SkillDisplaySegment from "../components/Skill/skill-display-segment";

export default function Portfolio() {
  const router = useRouter();
  let { roleId, skillId, sdtype } = router.query;
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

  const processSingleSkillChange = (
    changedSkillId,
    type: "removed" | "added"
  ) => {
    let finalSelectedSkillIds: string[] = [];
    if (sdtype === "some") {
      if (isStringArray(skillId)) {
        finalSelectedSkillIds = skillId;
      } else {
        finalSelectedSkillIds = [skillId];
      }
    }
    if (type === "added") {
      if (!finalSelectedSkillIds.find((id) => id === changedSkillId)) {
        finalSelectedSkillIds.push(changedSkillId);
      }
    } else {
      if (finalSelectedSkillIds.length === 0) {
        finalSelectedSkillIds = dedupSkillsFromRole.map((skill) => skill.id);
      }
      finalSelectedSkillIds = finalSelectedSkillIds.filter(
        (id) => id !== changedSkillId
      );
    }

    let newSdtype = "some";
    if (finalSelectedSkillIds.length === 0) {
      newSdtype = "none";
    }
    if (finalSelectedSkillIds.length === dedupSkillsFromRole.length) {
      newSdtype = "all";
      finalSelectedSkillIds = [];
    }

    multiSwap(router, ["skillId", "sdtype"], {
      skillId: finalSelectedSkillIds,
      sdtype: [newSdtype],
    });
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
                  <ColWrapper key={"segment display"} span={12}>
                    <Text>
                      Filter the portfolio items below by one or more of the
                      listed skills, or toggling Show all/none
                    </Text>
                  </ColWrapper>
                  {dedupCategories.map((category) => (
                    <ColWrapper key={category.id} span={12}>
                      {/* <Divider style={{ margin: "0px 0px 10px 0px" }} /> */}
                      <PortfolioSkillHeader
                        skillCategory={category}
                        allRoleSkills={dedupSkillsFromRole}
                        //@ts-ignore
                        selectedSkillsIds={skillId}
                        processSingleSkillChange={processSingleSkillChange}
                      />
                      <Divider style={{ margin: "10px 0px 0px 0px" }} />
                    </ColWrapper>
                  ))}
                  <ColWrapper key={"segment display"} span={12}>
                    <SkillDisplaySegment />
                  </ColWrapper>
                </Grid>
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
