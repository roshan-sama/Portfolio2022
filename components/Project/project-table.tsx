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
import Link from "next/link";
import { Link1Icon, Link2Icon } from "@radix-ui/react-icons";

const ProjectTable: React.FC<{
  roleDedupedSkills: SkillType[];
  selectedSkillsIds: SkillType["id"][];
}> = ({ roleDedupedSkills, selectedSkillsIds }) => {
  const projectsFilteredByRole: ProjectType[] = useMemo(
    () =>
      Projects.filter((project) => {
        let projectUsesSkill = false;
        for (let cnt = 0; cnt < roleDedupedSkills.length; cnt++) {
          if (project.skills[roleDedupedSkills[cnt].id] !== undefined) {
            projectUsesSkill = true;
            break;
          }
        }
        return projectUsesSkill;
      }),
    [roleDedupedSkills]
  );

  const filteredProjects: ProjectType[] = useMemo(
    () =>
      selectedSkillsIds.length === 0
        ? projectsFilteredByRole
        : projectsFilteredByRole.filter((project) => {
            let projectUsesSkill = false;
            for (let cnt = 0; cnt < selectedSkillsIds.length; cnt++) {
              if (project.skills[selectedSkillsIds[cnt]] !== undefined) {
                projectUsesSkill = true;
                break;
              }
            }
            return projectUsesSkill;
          }),
    [selectedSkillsIds]
  );

  const rows = filteredProjects.map((project) => {
    const name = GetCompanyById(project.companyId).name;
    const imgUrl = GetCompanyById(project.companyId).imgUrl;

    return (
      <tr key={project.id} className={styles.tablerow}>
        <td className={styles.iconColumn}>
          <Center>
            {
              <Avatar
                src={imgUrl}
                alt={name}
                size="sm"
                style={{ marginRight: "5px" }}
              />
            }
            <Text size="xs">{name}</Text>
          </Center>
        </td>
        <td className={styles.rolecolumn}>{project.name}</td>
        <td className={styles.namecolumn}>
          {project.description}
          {project.blogId !== undefined && (
            <>
              <br />
              <Link href={`/blog/view?postid=${project.blogId}`}>
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    border: "",
                  }}
                >
                  View blog
                </span>
              </Link>
            </>
          )}
        </td>
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
    <Card>
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
