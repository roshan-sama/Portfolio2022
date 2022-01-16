import getRoleById from "./get-role-by-id";
import isStringArray from "./is-string-array";

const getPortfolioName = (id: string | string[]) => {
  if (!id || isStringArray(id)) {
    return "Portfolio";
  } else {
    const role = getRoleById(id);
    if (!role) {
      return "Portfolio";
    }
    return `${role.name} Portfolio`;
  }
};

export default getPortfolioName;
