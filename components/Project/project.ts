import SkillType from "../Skill/skill-type";

interface Project{
    id: string,
    name: string,
    description: string, // markdown?
    skills: SkillType[]
}

export default Project