import SkillCategoryType from "../components/skill-category/skill-category-type";
import SkillCategories from "../components/skill-category/skillCategories";

const getCategoryById = (id: string): SkillCategoryType => {
  return SkillCategories.find((skill) => skill.id === id);
};

export default getCategoryById;
