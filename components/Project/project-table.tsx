import { Table, Avatar, Card, Title, Group, Center, Text } from "@mantine/core";
import styles from "../../styles/table.module.css";
import CareerItems from "../career-item/career-items";
import CareerItemType from "../career-item/career-item-type";
import ProjectType from "./project";
import { useMemo } from "react";
import SkillType from "../Skill/skill-type";
import Projects from "./projects";
import SkillBadge from "../Skill/skill-badge";
import getSkillById from "../../utils/get-skill-by-id";
import GetCompanyById from "../../utils/get-company-by-id";

const ProjectTable: React.FC<{ selectedSkills: SkillType[] }> = ({
  selectedSkills,
}) => {
  const projects: ProjectType[] = useMemo(
    () =>
      Projects.filter((project) => {
        let projectUsesSkill = false;
        for (let cnt = 0; cnt < selectedSkills.length; cnt++) {
          if (project.skills[selectedSkills[cnt].id] !== undefined) {
            projectUsesSkill = true;
            break;
          }
        }
        return projectUsesSkill;
      }),
    [selectedSkills]
  );

  const rows = projects.map((project) => {
    const name = GetCompanyById(project.companyId).name;
    const imgUrl = GetCompanyById(project.companyId).imgUrl;

    return (
      <tr key={project.id} className={styles.tablerow}>
        <td className={styles.iconColumn}>
          <Center>
            {<Avatar src={imgUrl} alt={name} size="sm" style={{marginRight: "5px"}} />}
            <Text size="xs">{name}</Text>
          </Center>
        </td>
        <td className={styles.rolecolumn}>{project.name}</td>
        <td className={styles.namecolumn}>{project.description}</td>
        <td className={styles.durationcolumn}>
          <Group>
            {Object.keys(project.skills).map((skillid) => {
              return <SkillBadge key={skillid} skill={getSkillById(skillid)} />;
            })}
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <Card style={{ marginTop: "5vh" }}>
      <br />
      <Table>
        <thead>
          <tr>
            <th className={styles.iconcolumn}>Company</th>
            <th className={styles.rolecolumn}>Project</th>
            <th className={styles.namecolumn}>Description</th>
            <th className={styles.durationcolumn}>Skills used</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
};

export default ProjectTable;
