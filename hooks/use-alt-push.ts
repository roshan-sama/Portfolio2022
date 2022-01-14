import { NextRouter } from "next/router";

const preservedKeys = ["role"];

const preservedPush: (
  router: NextRouter,
  path: string,
  addedQueries?: any,
  as?: any,
  options?: any
) => Promise<boolean> = async (router, path, addedQueries, as, options) => {
  let querystr = { ...addedQueries };

  preservedKeys.forEach((key) => {
    if (router.query[key] && router.query[key].length > 0) {
      querystr[key] = router.query[key];
    }
  });

  return router.push(
    {
      pathname: path,
      query: querystr,
    },
    as,
    options
  );
};

export default preservedPush;
