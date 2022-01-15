import { Card, Chip, Chips, Divider, Grid } from "@mantine/core";
import { useMemo, useState } from "react";
import Skills from "../Skill/skills";
import SkillCategoryType from "./skill-category-type";

export function ColWrapper(props: React.ComponentProps<typeof Grid.Col>) {
  return (
    <Grid.Col {...props} span={props.span} style={{ ...props.style }}>
      {props.children}
    </Grid.Col>
  );
}

const PortfolioSkillHeader: React.FC<{ skillCategory: SkillCategoryType }> = ({
  skillCategory,
}) => {
  const { skills, skillIds } = useMemo(() => {
    const skills = Skills.filter(
      (skill) => skill.skillCategoryId === skillCategory.id
    );
    const skillIds = skills.map((skill) => skill.id);

    return {
      skills,
      skillIds,
    };
  }, [skillCategory]);

  // const [selectedSkills, setSelectedSkills] = useState(skillIds)

  return (
    <Card shadow="lg" padding="sm">
      {skillCategory.name}
      <Divider my="xs" />
      <Chips multiple value={skillIds}>
        {skills.map((skill) => {
          return (
            <Chip key={skill.id} value={skill.id}>
              {skill.name}
            </Chip>
          );
        })}
      </Chips>
    </Card>
  );
};

export default PortfolioSkillHeader;
