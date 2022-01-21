import React from "react";
import RoleType from "../components/role/role-type";

interface resumeContextType {
  roles: RoleType[];
}

const ResumeContext: React.Context<resumeContextType> = React.createContext({
  roles: [],
});

export default ResumeContext;
