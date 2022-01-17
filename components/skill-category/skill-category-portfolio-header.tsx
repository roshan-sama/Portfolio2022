import {
  Badge,
  Card,
  Chip,
  Chips,
  Divider,
  Grid,
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
}> = ({ skillCategory, allRoleSkills }) => {
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

  // const [selectedSkills, setSelectedSkills] = useState(skillIds)

  return (
    <>
      <Card shadow="lg" padding="sm" style={{ height: "100%" }}>
        <Badge color="cyan" style={{ marginBottom: "10px" }}>
          {skillCategory.name}
        </Badge>

        <Chips multiple value={skillIds} style={{ display: "flex" }}>
          {skills.map((skill) => {
            return (
              <Chip key={skill.id} value={skill.id}>
                {skill.name}
              </Chip>
            );
          })}
        </Chips>
      </Card>
    </>
  );
};

export default PortfolioSkillHeader;
