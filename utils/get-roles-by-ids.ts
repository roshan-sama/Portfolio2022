import RoleType from "../components/role/role-type";
import getRoleById from "./get-role-by-id";
import isStringArray from "./is-string-array";

const getRolesById = (id: string | string[]): RoleType[] => {
  if (!id) {
    return undefined;
  }

  if (isStringArray(id)) {
    let roles = id.map((id) => getRoleById(id));    
    return roles.filter((role) => role !== undefined);
  } else {
    return getRoleById(id) ? [getRoleById(id)] : undefined;
  }
};

export default getRolesById;
