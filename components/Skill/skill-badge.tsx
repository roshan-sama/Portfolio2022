import SkillType from "./skill-type";
import { Badge, Tooltip } from "@mantine/core";
import { CSSProperties } from "@mantine/styles/lib/tss/types/css-object";

const SkillBadge: React.FC<{ skill: SkillType, margin?: string }> = ({ skill, margin }) => {
  const badge = skill.infoUrl ? (
    <Badge
      component="a"
      rel="noopener noreferrer"
      target="_blank"
      href={skill.infoUrl}
      style={{ cursor: "pointer", margin: margin }}
    >
      {skill.name}
    </Badge>
  ) : (
    <Badge style={{ cursor: "pointer" }}>{skill.name}</Badge>
  );

  return (
    <Tooltip
      wrapLines
      width={220}
      withArrow
      transition="fade"
      transitionDuration={200}
      label={skill.description}
    >
      {badge}
    </Tooltip>
  );
};

export default SkillBadge;
