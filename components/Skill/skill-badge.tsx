import SkillType from "./skill-type";
import { Badge, Tooltip } from "@mantine/core";

const SkillBadge: React.FC<{ skill: SkillType }> = ({ skill }) => {
  const InnerBadge: React.FC = skill.infoUrl ? (
    ({children}) => <Badge component="a" href={skill.infoUrl} style={{cursor: "pointer"}}>
      {children}
    </Badge>
  ) : (
    ({children}) => <Badge style={{cursor: "pointer"}}>{children}</Badge>
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
      <InnerBadge>{skill.name}</InnerBadge>
    </Tooltip>
  );
};

export default SkillBadge;
