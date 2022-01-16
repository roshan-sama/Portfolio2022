import RoleType from "../components/role/role-type";
import getRoleById from "./get-role-by-id";
import isStringArray from "./is-string-array";

const getRolesById = (id: string | string[]): RoleType[] => {
  if (!id) {
    return undefined;
  }

  if (isStringArray(id)) {
    return id.map((id) => getRoleById(id));
  } else {
    return [getRoleById(id)];
  }
};

export default getRolesById;
