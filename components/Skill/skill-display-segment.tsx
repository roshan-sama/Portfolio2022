import { SegmentedControl } from "@mantine/core";
import { NextRouter, useRouter } from "next/router";
import { sdtypeKey } from "../../constants";
import { multiSwap, singleSwap } from "../../hooks/use-update-push";
import { skillDisplayChoices } from "../../types";
import isStringArray from "../../utils/is-string-array";

const SkillDisplaySegment = () => {
  const router = useRouter();
  const rawSdType = router.query[sdtypeKey];
  const hasSelectedSkills = !!router.query["skillId"];
  const data = hasSelectedSkills ? dataWithSome : dataWithoutSome;
  let sdtype: skillDisplayChoices = "none";
  if (hasSelectedSkills) {
    sdtype = "some";
  } else if (!rawSdType || rawSdType === "all") {
    sdtype = "all";
  }

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
