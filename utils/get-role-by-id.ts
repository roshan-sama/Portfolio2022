import RoleType from "../components/role/role-type";
import Roles from "../components/role/roles";

const getRoleById = (roleid: string): RoleType =>
  Roles.find((role) => role.id === `id_role_${roleid}`);

export default getRoleById;
