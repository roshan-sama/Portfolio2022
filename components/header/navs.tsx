import { Tabs, TabsProps } from "@mantine/core";
import {
  BackpackIcon,
  FileTextIcon,
  Pencil1Icon,
  RulerSquareIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import preservedPush from "../../hooks/use-alt-push";

const tabIndexToPathMap = {
  0: "/", // Career
  1: "/resume",
  2: "/portfolio",
  3: "/blog",
};

const pathToTabIndexMap = {
  "/": 0, // Career
  "/resume": 1,
  "/portfolio": 2,
  "/blog": 3,
};

const Navs: React.FC<{
  orientation: TabsProps["orientation"];
}> = ({ orientation }) => {
  const router = useRouter();
  const path = router.pathname;
  const activeTab = pathToTabIndexMap[path];

  return (
    //   NOTE WHEN UPDATING: Update the above nav name to number map above
    <Tabs
      orientation={orientation}
      active={activeTab}
      onTabChange={(tabIndex) => {
        preservedPush(router, tabIndexToPathMap[tabIndex] ?? "/");
      }}
    >
      <Tabs.Tab label="Career" icon={<BackpackIcon />}></Tabs.Tab>
      <Tabs.Tab label="Resume" icon={<FileTextIcon />}></Tabs.Tab>
      <Tabs.Tab label="Portfolio" icon={<RulerSquareIcon />}></Tabs.Tab>
      <Tabs.Tab label="Blog" icon={<Pencil1Icon />}></Tabs.Tab>
    </Tabs>
  );
};

export default Navs;
