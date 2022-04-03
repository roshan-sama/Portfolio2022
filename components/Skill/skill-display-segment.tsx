import { SegmentedControl } from "@mantine/core";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sdtypeKey } from "../../constants";
import { multiSwap, singleSwap } from "../../hooks/use-update-push";
import { skillDisplayChoices } from "../../types";
import isStringArray from "../../utils/is-string-array";

const SkillDisplaySegment = () => {
  const router = useRouter();
  const rawSdType = router.query[sdtypeKey];
  const [sdtype, setSdtype] = useState<skillDisplayChoices>("none");
  const [data, setData] = useState(dataWithoutSome);

  useEffect(() => {
    if (!rawSdType || rawSdType === "all") {
      setSdtype("all");
    }
    if (rawSdType === "none") {
      setSdtype("none");
    }
    if (router.query["skillId"]) {
      setData(dataWithSome);
    } else {
      setData(dataWithoutSome);
    }
  }, [rawSdType, router.query]);

  useEffect(() => {
    if (data.length === 3) {
      setSdtype("some");
    }
  }, [data]);

  return (
    <SegmentedControl
      value={sdtype}
      //@ts-ignore
      onChange={(values) => handleSegmentChange(values, router)}
      data={data}
    />
  );
};

const dataWithSome = [
  { label: "Show None", value: "none" },
  { label: "Show Some", value: "some" },
  { label: "Show All", value: "all" },
];

const dataWithoutSome = [
  { label: "Show None", value: "none" },
  { label: "Show All", value: "all" },
];

const handleSegmentChange = (
  value: skillDisplayChoices,
  router: NextRouter
) => {
  if (value === "some") {
    return;
  }
  multiSwap(router, ["skillId", "sdtype"], { skillId: [], sdtype: [value] });
};

export default SkillDisplaySegment;
