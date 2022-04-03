import { MultiSelect, Select } from "@mantine/core";
import { useRouter } from "next/router";
import preservedPush from "../../hooks/use-alt-push";
import { singleSwap } from "../../hooks/use-update-push";
import getRoleById from "../../utils/get-role-by-id";
import getRolesById from "../../utils/get-roles-by-ids";
import Roles from "./roles";

const ChangeRoleBtnSingle: React.FC<{ currentRoleId }> = ({
  currentRoleId,
}) => {
  const router = useRouter();

  const data = Roles.map((role) => ({
    value: role.id.split("id_role_")[1],
    label: role.name,
  }));

  const role = getRoleById(currentRoleId) ?? undefined;

  return (
    <Select
      label="Change Role"
      placeholder="Pick one"
      data={data}
      value={currentRoleId}
      style={{ marginBottom: "1rem", minWidth: "15rem" }}
      onChange={(ids) => {
        singleSwap(router, "roleId", [ids]);
      }}
    />
  );
};

export default ChangeRoleBtnSingle;
