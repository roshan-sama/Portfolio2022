import { Table, Avatar, Card, Title } from "@mantine/core";
import styles from "../../styles/table.module.css";
import CareerItems from "../career-item/career-items";
import CareerItemType from "../career-item/career-item-type";
import ProjectType from "./project";
import { useMemo } from "react";
import SkillType from "../Skill/skill-type";
import Projects from "./projects";

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
  console.log(projects);

  const rows = projects.map((project) => (
    <tr key={project.id} className={styles.tablerow}>
      <td className={styles.iconcolumn}>{project.name}</td>
      <td className={styles.namecolumn}>{project.name}</td>
      <td colSpan={2} className={styles.roledurcolumn}>
        {project.name}
      </td>
    </tr>
  ));

  return (
    <Card style={{ marginTop: "5vh" }}>
      <br />
      <Table>
        <thead>
          <tr>
            <th className={styles.iconcolumn}></th>
            <th className={styles.namecolumn}>Project</th>
            <th className={styles.rolecolumn}>Description</th>
            <th className={styles.durationcolumn}>Duration</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
};

export default ProjectTable;
