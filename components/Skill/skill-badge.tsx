import SkillType from "./skill-type";
import { Badge, Tooltip } from "@mantine/core";
import { CSSProperties } from "@mantine/styles/lib/tss/types/css-object";

const SkillBadge: React.FC<{ skill: SkillType, margin?: string }> = ({ skill, margin }) => {
  const InnerBadge: React.FC = skill.infoUrl
    ? ({ children }) => (
        <Badge
          component="a"
          rel="noopener noreferrer"
          target="_blank"
          href={skill.infoUrl}
          style={{ cursor: "pointer", margin: margin }}
        >
          {children}
        </Badge>
      )
    : ({ children }) => <Badge style={{ cursor: "pointer" }}>{children}</Badge>;

  return (
    <Tooltip
      wrapLines
      width={220}
      withArrow
      transition="fade"
      transitionDuration={200}
      label={skill.description}
    >
      <InnerBadge>{skill.name}</InnerBadge>
    </Tooltip>
  );
};

export default SkillBadge;
