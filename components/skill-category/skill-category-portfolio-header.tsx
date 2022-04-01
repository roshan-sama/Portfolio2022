import {
  Badge,
  Card,
  Chip,
  Chips,
  Divider,
  Grid,
  Group,
  Tooltip,
} from "@mantine/core";
import { useMemo, useState } from "react";
import SkillType from "../Skill/skill-type";
import Skills from "../Skill/skills";
import SkillCategoryType from "./skill-category-type";

export function ColWrapper(props: React.ComponentProps<typeof Grid.Col>) {
  return (
    <Grid.Col {...props} span={props.span} style={{ ...props.style }}>
      {props.children}
    </Grid.Col>
  );
}

const PortfolioSkillHeader: React.FC<{
  skillCategory: SkillCategoryType;
  allRoleSkills: SkillType[];
  selectedSkillsIds: SkillType["id"][];
}> = ({ skillCategory, allRoleSkills, selectedSkillsIds }) => {
  const { skills, skillIds } = useMemo(() => {
    // Filter on all skills to return skills that both
    // 1) Belong to this category skillCategory
    // 2) Are part of the skills the belong to this role (allRoleSkills)
    const skills = Skills.filter(
      (skill) =>
        skill.skillCategoryId === skillCategory.id &&
        allRoleSkills.findIndex((allSkill) => allSkill.id === skill.id) !== -1
    );

    const skillIds = skills.map((skill) => skill.id);

    return {
      skills,
      skillIds,
    };
  }, [skillCategory, allRoleSkills]);

  return (
    <>
      <Group direction="row">
        <Badge>{skillCategory.name}</Badge>

        <Chips
          size="xs"
          // {/* INFO: Hardcoded color */}
          color="blue"
          multiple
          value={selectedSkillsIds.length > 0 ? selectedSkillsIds : skillIds}
          style={{ display: "flex" }}
        >
          {skills.map((skill) => {
            return (
              <Chip key={skill.id} value={skill.id}>
                {skill.name}
              </Chip>
            );
          })}
        </Chips>
      </Group>
      {/* </Card> */}
    </>
  );
};

export default PortfolioSkillHeader;
