import ProjectType from "./project";

const Projects: ProjectType[] = [
  {
    id: "id_proj_1clickdep",
    name: "1-Click pipeline script",
    description: "Worked on 'one click' devsecops bash script that would construct a complete Software Factory (Nautilus) on AWS infrastructure via Terraform and Kubernetes.\n+ Bash script added and configured Keycloak, Jenkins and ArgoCD via Helm charts.\n+ AWS Route 53 was used to configure DNS via script variables\n+ Entire script ran in under 30 minutes, with Twilio SMS integration to alert on success or failure.",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_gitops: "",
      id_skill_docker: "",
      id_skill_k8s: "",
      id_skill_helm: "",
      id_skill_argocd: "",
      id_skill_shellscript: ""
    },
  },
  {
    id: "id_proj_bcrt",
    name: "Celer Contract App",
    description:
      "Migrated existing Java + React contract creation application to Kubernetes. \nCreated Helm charts corresponding to the frontend, backend and authorization microservices",
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
      "Created and maintained Jenkinsfiles to automate the build and deployment (CI/CD) of various Synergybis applications\n+ Opened a pull request on the Jenkins Remote file plugin repository to enable monorepos\n+ Link: https://github.com/jenkinsci/remote-file-plugin/pull/65",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_jenkins: "",
    },
  },
  {
    id: "id_proj_harborissue",
    name: "Harbor issue resolution",
    description:
      "Resolved issue with version upgrade failures caused by data migration failure for Harbor.\n+ Specific issues included a drift in Postgres database schema, which was not automatically migrated via a Kubernetes job.\n+ Solved by performing a diff of production and new version database, and applying changes to the production database that were needed",
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
    name: "Aurum Path - Location tracker",
    description:
      "Created a Blitzjs and integrated with React Native to create a location tracker app",
    companyId: "id_comp_gwidow",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_react: "",
      id_skill_blitzjs: "",
      id_skill_rnexpo: ""
    },
  },
  {
    id: "id_proj_assessment",
    name: "Assessment System",
    description:
      "USDA EAS Contract - Frontend Developer\nInherited and completed an Angular project for an Assessment System that the USDA used to ensure compliance.\nFixed severe accessibility issues to ensure Section 508 Compliance",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_angular: "",
    },
  },
  {
    id: "id_proj_assessment",
    name: "Wildfire Decision Support System",
    description:
      "USDA EAS Contract - Fullstack Engineer\nImplemented several features including \n+ PIV card based authentication\n+ User profile management\n+ Process to calculate a spatial inventory of various resources within a fire boundary drawn on a map\n+ Form to calculate the 'Relative Risk' posed by a fire to various factors, including Natural and cultural resources, time of year, barriers to fire spread, etc.",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_angular: "",
      id_skill_java: "",
      id_skill_k8s: "",
      id_skill_nginx: "",
      id_skill_postgres: ""
    },
  },
  {
    id: "id_proj_assessment",
    name: "FEMA NFIP",
    description:
      "USDA EAS Contract - Team Lead / Fullstack / Devops Engineer\nOnboarded to ensure that project delivery was a success. Improved project velocity by working with team and implementing features",
    companyId: "id_comp_synergy",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_angular: "",
      id_skill_java: "",
      id_skill_k8s: "",
      id_skill_postgres: "",
      id_skill_keycloak: ""
    },
  },
  {
    id: "id_proj_loanvis",
    name: "Loan Visualizer",
    description:
      "Application to visualize a loan given the prinicpal, interest rate and payment plans\n Written in NextJS",
    companyId: "",
    linkToMoreInfo: "https://roshan.page/r/loanvis",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_nextjs: "",
    },
  },
  {
    id: "id_proj_nganalyser",
    name: "Angular Analyzer",
    description:
      "Application to visualize the architecture of an Angular code base",
    companyId: "",
    linkToMoreInfo: "https://roshan.page/r/analyser",
    skills: {
      id_skill_ts: "",
      id_skill_js: "",
      id_skill_angular: "",
    },
  },
];

export default Projects;
