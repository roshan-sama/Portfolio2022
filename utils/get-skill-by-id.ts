import Skills from "../components/Skill/skills";

const getSkillById = (id: string) => {
  return Skills.find((skill) => skill.id === id);
};

export default getSkillById;
