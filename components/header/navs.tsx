import {
  ActionIcon,
  Box,
  Button,
  Slider,
  Text,
  Tabs,
  TabsProps,
  Card,
  Loader,
  Center,
} from "@mantine/core";
import {
  BackpackIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GitHubLogoIcon,
  PauseIcon,
  Pencil1Icon,
  PlayIcon,
  RulerSquareIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import preservedPush from "../../hooks/use-alt-push";
import { useEffect, useState } from "react";
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
  const [audioCtl, setAudioCtl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (!audioCtl) {
      setAudioCtl(new Audio(`${window.location.origin}/audio/Swing.mp3`));
    }
  }, []);

  useEffect(() => {
    if (!audioCtl) {
      return;
    }
    audioCtl.volume = volume;
  }, [volume, audioCtl]);

  useEffect(() => {
    if (!audioCtl) {
      return;
    }
    if (playing) {
      audioCtl.play();
    } else {
      audioCtl.pause();
    }
  }, [playing, audioCtl]);

  return (
    //   NOTE WHEN UPDATING: Update the above nav name to number map above
    <>
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
      <Button
        onClick={() => {
          setPlaying((prev) => !prev);
        }}
        variant="gradient"
        gradient={{ from: "violet", to: "grape", deg: 105 }}
        radius="xl"
        leftIcon={
          playing ? (
            <PauseIcon width={18} height={18} />
          ) : (
            <PlayIcon width={18} height={18} />
          )
        }
      >
        {!playing && <i>Play Music</i>}
        {playing && <i>Pause</i>}
      </Button>
      {playing && (
        <div style={{ width: "100px" }}>
          <Card style={{ marginTop: "0px", padding: "3px", width: "100%" }}>
            <Text align="center" size="sm">
              <Loader variant="bars" />
              <br />
              Volume
            </Text>
            <Slider
              showLabelOnHover={false}
              min={0}
              max={1}
              label={(value) => value.toFixed(1)}
              step={0.1}
              value={volume}
              onChange={setVolume}
            />
          </Card>
        </div>
      )}
    </>
  );
};

export default Navs;
