import { Table, Avatar, Card, Title } from "@mantine/core";
import Companies from "./companies";
import Company from "./company-type";
import styles from "../../styles/table.module.css";
import CareerItems from "../career-item/career-items";
import CareerItemType from "../career-item/career-item-type";
import Roles from "../role/roles";

const CompaniesTable = () => {
  const companies: Company[] = Companies;

  const rows = companies.map((company) => (
    <Table.Tr key={company.id} className={styles.tablerow}>
      <Table.Td className={styles.iconcolumn}>
        {company.imgUrl && (
          <Avatar size="lg" alt={company.name + " logo"} src={company.imgUrl} />
        )}
      </Table.Td>
      <Table.Td className={styles.namecolumn}>{company.name}</Table.Td>
      <Table.Td colSpan={2} className={styles.roledurcolumn}>
        <CareerItemsColumn companyId={company.id} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Card style={{ marginTop: "5vh" }}>
      <Title order={2}>My Career</Title>
      <br />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={styles.iconcolumn}></Table.Th>
            <Table.Th className={styles.namecolumn}>Company</Table.Th>
            <Table.Th className={styles.rolecolumn}>Role</Table.Th>
            <Table.Th className={styles.durationcolumn}>Duration</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Card>
  );
};

/** Display career items in the company table. Use separate table to display list of career items alone*/
const CareerItemsColumn: React.FC<{ companyId }> = ({ companyId }) => {
  const careerItems: CareerItemType[] = CareerItems.filter(
    (item) => item.companyId === companyId
  );

  return (
    <Table striped highlightOnHover>
      <Table.Tbody>
        {careerItems.map((item) => (
          <Table.Tr key={item.id}>
            <Table.Td className={styles.rolecolumn}>
              {Roles.find((role) => role.id === item.roleId)?.name}
            </Table.Td>
            <Table.Td className={styles.durationcolumn}>
              <FromToColumn startDate={item.startDate} endDate={item.endDate} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

const FromToColumn: React.FC<{ startDate: Date; endDate?: Date }> = ({
  startDate,
  endDate,
}) => {
  return (
    <i>
      {monthNumToStr[startDate.getMonth()]}, {new Date(startDate).getFullYear()}{" "}
      to{" "}
      {endDate
        ? `${monthNumToStr[endDate.getMonth()]}, ${new Date(
            endDate
          ).getFullYear()}`
        : "Present"}
    </i>
  );
};
const monthNumToStr = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export default CompaniesTable;
