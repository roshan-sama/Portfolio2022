import { Tabs, TabsProps } from "@mantine/core";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

const tabIndexToPathMap = {
  0: "/", // Career
  1: "/resume",
  2: "/portfolio",
};

const pathToTabIndexMap = {
  "/": 0, // Career
  "/resume": 1,
  "/portfolio": 2,
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
      onTabChange={
        (tabIndex) => {
          router.push(tabIndexToPathMap[tabIndex] ?? "/");
        }
      }
    >
      <Tabs.Tab label="Career" icon={<BackpackIcon />}></Tabs.Tab>
      <Tabs.Tab label="Resume"></Tabs.Tab>
      <Tabs.Tab label="Portfolio"></Tabs.Tab>
    </Tabs>
  );
};

export default Navs;
