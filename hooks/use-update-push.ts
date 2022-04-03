import { NextRouter } from "next/router";
import { swapkeys } from "../types";
import isStringArray from "../utils/is-string-array";

const singleSwap: (
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

const multiSwap: (
  router: NextRouter,
  swapKeys: swapkeys[],
  swapValuesMap: { [key in swapkeys]?: string[] }
) => Promise<boolean> = async (router, swapKeys, swapValuesMap) => {
  const queryStr = router.query;
  swapKeys.forEach((key) => (queryStr[key] = swapValuesMap[key]));

  return router.push({
    pathname: router.pathname,
    query: queryStr,
  });
};

export { singleSwap, multiSwap };
