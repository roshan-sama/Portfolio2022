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
    id: "id_proj_bcrt",
    name: "Celer Contract App",
    description:
      "Migrated existing Java + React contract creation application to Kubernetes",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_gitops: "",
      id_skill_docker: "",
      id_skill_k8s: "",
      id_skill_helm: "",
      id_skill_java: "",
      id_skill_react: "",
      id_skill_postgres: "",
    },
  },
  {
    id: "id_proj_jenkins",
    name: "Jenkins integration",
    description:
      "Created and maintained Jenkinsfiles to automate the build and deployment (CI/CD) of various Synergybis applications",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_jenkins: "",
    },
  },
  {
    id: "id_proj_harborissue",
    name: "Harbor issue resolution",
    description:
      "Resolved issue with version upgrade failures caused by data migration failure for Harbor",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_harbor: "",
      id_skill_postgres: "",
    },
    blogId: "id_blog_surgerydb"
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
      id_skill_js: "",
    },
  },
  {
    id: "id_proj_widowhunt",
    name: "Widow Hunt - Progress tracker",
    description:
      "Created a fullstack Blitzjs application to store and track my progress on various projects and tasks",
    companyId: "id_comp_gwidow",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_react: "",
      id_skill_blitzjs: "",
    },
  },
  {
    id: "id_proj_subcontrib",
    name: "Blitzjs - Code generation contribution",
    description:
      "Contributed to Blitzjs' code generation and scaffolding feature",
    companyId: "id_comp_gwidow",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_react: "",
      id_skill_blitzjs: "",
    },
  },
  {
    id: "id_proj_aurumpath",
    name: "Widow Hunt - Progress tracker",
    description:
      "Created a Blitzjs and integrated with React Native to create a location tracker app",
    companyId: "id_comp_gwidow",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_react: "",
      id_skill_blitzjs: "",
    },
  },
];

export default Projects;
