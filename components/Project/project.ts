import Skill from "../Skill/skill";

interface Project{
    id: string,
    name: string,
    description: string, // markdown?
    skills: Skill[]
}

export default Project