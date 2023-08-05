interface ProjectType {
  id: string;
  name: string;
  description: string; // markdown?
  companyId?: string;
  skills: { [key in string]: string };
  blogId?: string;
  linkToMoreInfo?: string
}

export default ProjectType;
