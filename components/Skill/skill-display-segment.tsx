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

  console.log("sdtype is " + sdtype);

  useEffect(() => {
    if (!rawSdType || rawSdType === "all") {
      setSdtype("all");
    }
    if (rawSdType === "none") {
      setSdtype("none");
    }
    router.query["skillId"] && setSdtype("some");
  }, [rawSdType, router]);

  const [data, setData] = useState(dataWithSome);

  useEffect(() => {
    if (sdtype === "some") {
      setData(dataWithSome);
      return;
    }
    setData(dataWithSome);
  }, [sdtype]);

  return (
    <SegmentedControl
      value={sdtype}
      //@ts-ignore
      onChange={(values) => handleSegmentChange(values, router)}
      data={dataWithSome}
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
