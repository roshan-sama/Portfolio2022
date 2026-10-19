import { Badge, Chip, Grid, Group } from "@mantine/core";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { sdtypeKey } from "../../constants";
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
  processSingleSkillChange: (changedSkillId, type: "removed" | "added") => void;
}> = ({
  skillCategory,
  allRoleSkills,
  selectedSkillsIds,
  processSingleSkillChange,
}) => {
  const router = useRouter();
  const skillDisplay = router.query[sdtypeKey];

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

  const trackedSkillIds = useMemo<{ [key in string]: "" | undefined }>(() => {
    let tracked = {};
    if (skillDisplay === "none") {
      return {};
    } else if (
      skillDisplay === "all" ||
      (skillDisplay !== "all" && selectedSkillsIds.length === 0)
    ) {
      skillIds.forEach((id) => (tracked[id] = ""));
    } else {
      selectedSkillsIds.forEach((id) => (tracked[id] = ""));
    }
    return tracked;
  }, [selectedSkillsIds, skillDisplay, skillIds]);

  const getSkillsToDisplay = () => {
    if (skillDisplay === "none") {
      return [];
    }
    if (selectedSkillsIds.length > 0) {
      return selectedSkillsIds;
    }
    return skillIds;
  };

  return (
    <>
      <Group>
        <Badge>{skillCategory.name}</Badge>
        <Chip.Group
          multiple
          value={getSkillsToDisplay()}
          onChange={(values) => {
            let changeDetected = false;
            values.forEach((val) => {
              if (trackedSkillIds[val] === undefined) {
                if (!changeDetected) {
                  changeDetected = true;
                  processSingleSkillChange(val, "added");
                }
              }
            });
            if (changeDetected) {
              return;
            }
            Object.keys(trackedSkillIds).forEach((tracked) => {
              if (!values.find((id) => id === tracked)) {
                processSingleSkillChange(tracked, "removed");
              }
            });
          }}
        >
          <Group gap="xs">
            {skills.map((skill) => {
              return (
                <Chip
                  key={skill.id}
                  value={skill.id}
                  size="xs"
                  variant="outline"
                  // INFO: Hardcoded color
                  color="blue"
                >
                  {skill.name}
                </Chip>
              );
            })}
          </Group>
        </Chip.Group>
      </Group>
      {/* </Card> */}
    </>
  );
};

export default PortfolioSkillHeader;
