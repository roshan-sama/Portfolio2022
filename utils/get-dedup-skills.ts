import SkillCategoryType from "../components/skill-category/skill-category-type";
import SkillType from "../components/Skill/skill-type";
import getCategoryById from "./get-category-by-id";

const getDeduplicatedSkills = (
  skills: SkillType[]
): { dedupSkills: SkillType[]; dedupCategories: SkillCategoryType[] } => {
  const seenSkillIds = {};
  const seenCategoryIds = {};
  const dedupSkills = [];
  const dedupCategories = [];

  skills.forEach((skill) => {
    if (seenSkillIds[skill.id] === skill.id) {
      return;
    }
    dedupSkills.push(skill);
    seenSkillIds[skill.id] = skill.id;
    if (seenCategoryIds[skill.skillCategoryId] === skill.skillCategoryId) {
      return;
    }
    dedupCategories.push(getCategoryById(skill.skillCategoryId));
    seenCategoryIds[skill.skillCategoryId] = skill.skillCategoryId;
  });

  return { dedupSkills, dedupCategories };
};

export default getDeduplicatedSkills;
