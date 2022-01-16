const isStringArray = (role: string | string[]): role is string[] => {
  if (!role) {
    return false;
  }
  return (role as string[]).reduce !== undefined;
};

export default isStringArray;
