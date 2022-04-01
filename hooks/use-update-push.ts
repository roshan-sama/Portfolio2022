import { NextRouter } from "next/router";

type swapkeys = "roleId" | "skillId"

const swapPush: (
  router: NextRouter,
  swapKey: swapkeys,
  swapValues: string[]
) => Promise<boolean> = async (router, swapKey, swapValues) => {
  const queryStr = router.query;
  queryStr[swapKey] = swapValues;

  return router.push({
    pathname: router.pathname,
    query: queryStr,
  });
};

export default swapPush;
