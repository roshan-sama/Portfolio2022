import { Table, Avatar, Card } from "@mantine/core";
import Companies from "./companies";
import Company from "./company-type";
import styles from "../../styles/table.module.css";

const CompaniesTable = () => {
  const companies: Company[] = Companies;

  const rows = companies.map((company) => (
    <tr key={company.id} className={styles.tablerow}>
      <td>{company.imgUrl && <Avatar src={company.imgUrl} />}</td>
      <td>{company.name}</td>
      <td>{company.name}</td>
    </tr>
  ));

  return (
    <Card
      sx={(theme) => ({
        // backgroundColor: theme.colors.gray[0],
        // "&:hover": {
        //   backgroundColor: theme.colors.gray[1],
        // },
        marginTop: "10vh",
      })}
    >
      <Table>{rows}</Table>
    </Card>
  );
};

export default CompaniesTable;
