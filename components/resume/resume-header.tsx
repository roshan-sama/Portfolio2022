import { Center, Group, Title, Text } from "@mantine/core";
import { useContext } from "react";
import ResumeContext from "../../hooks/resume-context";
import RoleType from "../role/role-type";

const ResumeHeader: React.FC<{}> = ({}) => {
  const { roles } = useContext(ResumeContext);
  console.log(roles);
  let resumeTitle = "";
  const numRoles = roles.length;
  roles.forEach(
    (role, index) =>
      (resumeTitle += role.name + (index === numRoles - 1 ? "" : " | "))
  );

  return (
    <>
      <Center style={{ width: "inherit" }}>
        <Title order={2}>{process.env.NEXT_PUBLIC_FULLNAME}</Title>
      </Center>
      <Center style={{ width: "inherit" }}>
        <Text>{resumeTitle}</Text>
      </Center>
    </>
  );
};

export default ResumeHeader;
