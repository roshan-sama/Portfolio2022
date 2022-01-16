interface ProjectType {
  id: string;
  name: string;
  description: string; // markdown?
  companyId?: string;
  skills: { [key in string]: string };
}

export default ProjectType;
