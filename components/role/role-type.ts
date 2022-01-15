import SkillType from "../Skill/skill-type";

interface RoleType{
    id: string,
    name: string,
    description: string,
    relevantSkills: SkillType[],
    imgUrl: string,
    infoUrl: string
}

export default RoleType;