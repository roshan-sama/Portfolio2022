import { MultiSelect } from "@mantine/core";
import { useRouter } from "next/router";
import preservedPush from "../../hooks/use-alt-push";
import swapPush from "../../hooks/use-update-push";
import getRolesById from "../../utils/get-roles-by-ids";
import Roles from "./roles";

const ChangeRoleBtn = () => {
  const router = useRouter();
  const { roleId } = router.query;

  const data = Roles.map((role) => ({
    value: role.id.split("id_role_")[1],
    label: role.name,
  }));

  const roles = getRolesById(roleId) ?? [];
  const selectedValues = roles.map((role) => {
    return role ? role.id.split("id_role_")[1] : "";
  });

  return (
    <MultiSelect
      label="Change Role"
      placeholder="Pick one"
      data={data}
      value={selectedValues}
      style={{ marginBottom: "1rem", minWidth: "15rem" }}
      onChange={(ids) => {
        swapPush(router, "roleId", ids);
      }}
    />
  );
};

export default ChangeRoleBtn;
