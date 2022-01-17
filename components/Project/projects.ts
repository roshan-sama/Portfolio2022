import ProjectType from "./project";

const Projects: ProjectType[] = [
  {
    id: "id_proj_1clickdep",
    name: "1-Click pipeline script",
    description: "Created one click devsecops script",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_gitops: "",
      id_skill_docker: "",
      id_skill_k8s: "",
      id_skill_helm: "",
    },
  },
  {
    id: "id_proj_angshipbkgreq",
    name: "Shipping Request Form",
    description:
      "Created React form to allow users to submit information about the cars and containers they want to ship with us online",
    companyId: "id_comp_angelic",
    skills: {
        id_skill_csharp: "",
        id_skill_react: "",
        id_skill_js: ""
    },
  },
  {
    id: "id_proj_widowhunt",
    name: "Shipping Request Form",
    description:
      "Created a fullstack Blitzjs application to store and track my progress on various projects and tasks",
    companyId: "id_comp_gwidow",
    skills: {
        id_skill_csharp: "",
        id_skill_react: "",
        id_skill_js: ""
    },
  },
];

export default Projects;
