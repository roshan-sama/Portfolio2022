import { Table, Avatar, Card, Title } from "@mantine/core";
import Companies from "./companies";
import Company from "./company-type";
import styles from "../../styles/table.module.css";
import CareerItems from "../career-item/career-items";
import CareerItemType from "../career-item/career-item-type";

const CompaniesTable = () => {
  const companies: Company[] = Companies;

  const rows = companies.map((company) => (
    <tr key={company.id} className={styles.tablerow}>
      <td className={styles.iconcolumn}>
        {company.imgUrl && (
          <Avatar size="lg" alt={company.name + " logo"} src={company.imgUrl} />
        )}
      </td>
      <td className={styles.namecolumn}>{company.name}</td>
      <td className={styles.rolecolumn}>
        <CareerItemsColumn companyId={company.id} />
      </td>
      <td></td>
    </tr>
  ));

  return (
    <Card
      sx={(theme) => ({
        // backgroundColor: theme.colors.gray[0],
        // "&:hover": {
        //   backgroundColor: theme.colors.gray[1],
        // },
        marginTop: "5vh",
      })}
    >
      <Title order={2}>My Career</Title>
      <br />
      <Table>
        <thead>
          <tr>
            <th className={styles.iconcolumn}></th>
            <th className={styles.namecolumn}>Company</th>
            <th className={styles.rolecolumn}>Role(s)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
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
    <>
      {careerItems.map((item) => (
      <span key={item.id}>
        {item.roleName} -{" "}
        <FromToColumn startDate={item.startDate} endDate={item.endDate} />
        <br />
      </span>
    ))}
    </>
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
        ? `${monthNumToStr[endDate.getMonth()]}, ${new Date(endDate).getFullYear()}`
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
