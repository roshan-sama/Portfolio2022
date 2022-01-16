import { NextRouter } from "next/router";

const swapKey = "roleId";

const swapPush: (
  router: NextRouter,
  swapValues: string[]
) => Promise<boolean> = async (router, swapValues) => {
  const queryStr = router.query;
  queryStr[swapKey] = swapValues;

  return router.push({
    pathname: router.pathname,
    query: queryStr,
  });
};

export default swapPush;
