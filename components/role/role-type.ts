import Skill from "../Skill/skill";

interface RoleType{
    id: string,
    name: string,
    description: string,
    relevantSkills: Skill[],
    imgUrl: string,
    infoUrl: string
}

export default RoleType;