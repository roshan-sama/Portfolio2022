import { Grid } from "@mantine/core";
import SkillCategoryType from "./skill-category-type";

const PortfolioRoleHeader: React.FC<{ skillCategory: SkillCategoryType }> = ({
  skillCategory,
}) => {
  return (
    <Grid.Col span={12} sm={4}>
      {skillCategory.name}
    </Grid.Col>
  );
};

export default PortfolioRoleHeader;
