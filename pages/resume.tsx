import {
  Card,
  Title,
  Grid,
  Text,
  Container,
  useMantineTheme,
  Group,
  Center,
  MediaQuery,
  Paper,
} from "@mantine/core";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Roles from "../components/role/roles";
import PortfolioSkillHeader, {
  ColWrapper,
} from "../components/skill-category/skill-category-portfolio-header";
import { useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import getDeduplicatedSkills from "../utils/get-dedup-skills";
import getRolesById from "../utils/get-roles-by-ids";
import ResumeShell from "../components/resume/resume-shell";
import ResumeContext from "../hooks/resume-context";
import ChangeRoleBtn from "../components/role/change-role-btn";

export default function Resume() {
  const router = useRouter();
  const { roleId } = router.query;

  const largeScreen = useMediaQuery("(min-width: 1400px)");

  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2];

  let roles = getRolesById(roleId);
  if (roles === undefined || roles[0] === undefined) {
    roles = Roles;
  }

  const { dedupSkills, dedupCategories } = useMemo(() => {
    const skills = roles.flatMap((role) => role.relevantSkills);
    return getDeduplicatedSkills(skills);
  }, [roles, getDeduplicatedSkills]);

  const adjustedColSpan = 6;

  return (
    <ResumeContext.Provider value={{ roles: roles }}>
      <Container
        fluid={true}
        style={{
          marginBottom: "20vh",
        }}
      >
        <Center>
          <BtnWrapper>
            <ChangeRoleBtn />
          </BtnWrapper>
        </Center>

        <ResumeShell />
      </Container>
    </ResumeContext.Provider>
  );
}

const BtnWrapper: React.FC<{}> = ({ children }) => {  
  return (
    <Card style={{ padding: "0px 10px", marginBottom: "10px" }}>
      {children}
    </Card>
  );
};

Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};