import { Avatar, Grid, Group } from "@mantine/core";
import SkillBadge from "../Skill/skill-badge";
import Career from "./career-item-type";
import Roles from "../role/roles";

const CareerItem: React.FC<{ career: Career }> = ({ career }) => {
  return (
    <Grid justify={"space-between"} align="center">
      <Grid.Col key={1} span={4}>
        <Group>
          <>{career.imgUrl && <Avatar src={career.imgUrl} />}</>
          <b>{career.companyId}</b>
        </Group>
      </Grid.Col>
      <Grid.Col key={2} span={4}>
        <Group position="center">
          <>{Roles.find(role => role.id === career.roleId)?.name}</>          
        </Group>
      </Grid.Col>
      <Grid.Col key={3} span={4}>
        <Group position="right">
          <i>
            From {career.startDate.getMonth()}, {career.startDate.getFullYear()}
          </i>
        </Group>
        <Group position="right">
          <i>To {getEndDateStr(career.endDate)}</i>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

const getEndDateStr = (endDate: Date | undefined): string => {
  if (!endDate) {
    return "Present";
  }
  return `${endDate.getMonth()}, ${endDate.getFullYear()}`;
};
export default CareerItem;
