import SkillType from "../Skill/skill-type";
import Skills from "../Skill/skills";
import RoleType from "./role-type";

const getSkillById = (id: string): SkillType => {
  return Skills.find((skill) => skill.id === id);
};

const Roles: RoleType[] = [
  {
    id: "id_role_dops",
    name: "Devops Engineer",
    description: "Devops engineer description",
    imgUrl: "",
    infoUrl: "",
    relevantSkills: [
      getSkillById("id_skill_k8s"),
      getSkillById("id_skill_docker"),
      getSkillById("id_skill_helm"),
      getSkillById("id_skill_argocd"),
      getSkillById("id_skill_harbor"),
      getSkillById("id_skill_microsvcs"),
      getSkillById("id_skill_git"),
      getSkillById("id_skill_gitops"),
    ],
  },
  {
    id: "id_role_fstack",
    name: "Fullstack Engineer",
    description: "Devops engineer description",
    imgUrl: "",
    infoUrl: "",
    relevantSkills: [
      getSkillById("id_skill_csharp"),
      getSkillById("id_skill_java"),
      getSkillById("id_skill_js"),
      getSkillById("id_skill_ts"),
      getSkillById("id_skill_react"),
      getSkillById("id_skill_nextjs"),
      getSkillById("id_skill_blitzjs"),
    ],
  },
  {
    id: "id_role_gamedev",
    name: "Game Development",
    description: "Devops engineer description",
    imgUrl: "",
    infoUrl: "",
    relevantSkills: [getSkillById("id_skill_unity3d")],
  },
];

export default Roles;
