interface ProjectType {
  id: string;
  name: string;
  description: string; // markdown?
  companyId?: string;
  skills: { [key in string]: string };
  blogId?: string;
}

export default ProjectType;
