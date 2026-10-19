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
import { useRouter } from "next/router";
import { sdtypeKey } from "../../constants";

const ProjectTable: React.FC<{
  roleDedupedSkills: SkillType[];
  selectedSkillsIds: SkillType["id"][];
}> = ({ roleDedupedSkills, selectedSkillsIds }) => {
  const router = useRouter();
  const skillDisplayOverride = router.query[sdtypeKey];

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

  const filteredProjects: ProjectType[] = useMemo(() => {
    if (skillDisplayOverride === "none") {
      return projectsFilteredByRole.filter(
        (project) => Object.keys(project.skills).length === 0
      );
    }
    return selectedSkillsIds.length === 0
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
        });
  }, [projectsFilteredByRole, skillDisplayOverride, selectedSkillsIds]);

  const rows = filteredProjects.map((project) => {
    const name = GetCompanyById(project.companyId)?.name ?? "Personal Project";
    const imgUrl = GetCompanyById(project.companyId)?.imgUrl;

    return (
      <Table.Tr key={project.id} className={styles.tablerow}>
        <Table.Td className={styles.iconColumn}>
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
        </Table.Td>
        <Table.Td className={styles.rolecolumn}>{project.name}</Table.Td>
        <Table.Td className={styles.namecolumn}>
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
        </Table.Td>
        <Table.Td className={styles.durationcolumn}>
          <Group>
            {Object.keys(project.skills).map((skillid) => {
              return <SkillBadge key={skillid} skill={getSkillById(skillid)} />;
            })}
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Card>
      <br />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={styles.iconcolumn}>Company</Table.Th>
            <Table.Th className={styles.rolecolumn}>Project</Table.Th>
            <Table.Th className={styles.namecolumn}>Description</Table.Th>
            <Table.Th className={styles.durationcolumn}>Skills used</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Card>
  );
};

export default ProjectTable;
