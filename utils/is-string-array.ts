const isStringArray = (role: string | string[]): role is string[] => {
  return (role as string[]).reduce !== undefined;
};

export default isStringArray;
