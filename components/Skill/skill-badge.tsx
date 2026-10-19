import SkillType from "./skill-type";
import { Badge, Tooltip } from "@mantine/core";

/**
 * `linked={false}` renders the badge as plain text even when the skill has an info URL.
 * Use it when the badge sits inside another link, since nested <a> elements are invalid HTML.
 */
const SkillBadge: React.FC<{
  skill: SkillType;
  margin?: string;
  linked?: boolean;
}> = ({ skill, margin, linked = true }) => {
  const badge = skill.infoUrl && linked ? (
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
    <Badge style={{ cursor: "pointer", margin: margin }}>{skill.name}</Badge>
  );

  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ transition: "fade", duration: 200 }}
      label={skill.description}
    >
      {badge}
    </Tooltip>
  );
};

export default SkillBadge;
