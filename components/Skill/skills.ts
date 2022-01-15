import SkillType from "./skill-type";

const Skills: SkillType[] = [
  {
    id: "id_skill_csharp", // 0
    name: "C#",
    description: "Object-oriented programming language by Microsoft",
    infoUrl: "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    skillCategoryId: "id_skcat_language"
  },
  {
    id: "id_skill_java",  // 1
    name: "Java",
    description: "Popular object-oriented programming language by Oracle",
    infoUrl: "https://www.oracle.com/java/",
    skillCategoryId: "id_skcat_language"
  },
  {
    id: "id_skill_js", // 2
    name: "Javascript",
    description: "Popular webpage scripting language by Ecma international",
    infoUrl: "https://www.ecma-international.org/technical-committees/tc39/",
    skillCategoryId: "id_skcat_language"
  },
  {
    id: "id_skill_react", // 3
    name: "React",
    description: "JavaScript library for building user interfaces by Facebook",
    infoUrl: "https://reactjs.org/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_nextjs",  // 4
    name: "NextJS",
    description: "React Framework  webpages by Vercel",
    infoUrl: "https://nextjs.org/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_blitzjs", // 5
    name: "BlitzJS",
    description: "Fullstack React Framework, inspired by Ruby on Rails",
    infoUrl: "https://blitzjs.com/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_salesforce",  // 6
    name: "Salesforce",
    description: "Low code/ no code CRM platform",
    infoUrl: "https://www.salesforce.com/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_git",
    name: "Git",
    description: "Open source version control system",
    infoUrl: "https://git-scm.com/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_docker",
    name: "Docker",
    description: "Software tool that creates and manages images and containers",
    infoUrl: "https://www.docker.com/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_microsvcs",
    name: "Microservices",
    description: "Software architectures pattern created to develop and scale applications quicker.",
    infoUrl: "https://en.wikipedia.org/wiki/Microservices",
    skillCategoryId: "id_skcat_concepts"
  },
  {
    id: "id_skill_k8s",
    name: "Kubernetes",
    description: "Open source system for automating management of containerized applications by the CNCF",
    infoUrl: "https://www.salesforce.com/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_helm",
    name: "Helm",
    description: "Package manager for Kubernetes by the CNCF",
    infoUrl: "https://helm.sh/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_argocd",
    name: "ArgoCD",
    description: "Open source system for automating management of containerized applications by the CNCF",
    infoUrl: "https://argoproj.github.io/cd/",
    skillCategoryId: "id_skcat_tool"
  },
  {
    id: "id_skill_harbor",
    name: "Harbor",
    description: "Open source container and artifact registry by the CNCF",
    infoUrl: "https://goharbor.io/",
    skillCategoryId: "id_skcat_tool"
  },
];

export default Skills;
