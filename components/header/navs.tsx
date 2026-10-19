import { Button, Slider, Text, Tabs, TabsProps, Card, Loader } from "@mantine/core";
import {
  BackpackIcon,
  FileTextIcon,
  PauseIcon,
  Pencil1Icon,
  PlayIcon,
  RulerSquareIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import preservedPush from "../../hooks/use-alt-push";
import { useEffect, useRef, useState } from "react";
// NOTE WHEN UPDATING: tab values are the page paths they navigate to
const navTabs = [
  { path: "/", label: "Career", icon: <BackpackIcon /> },
  { path: "/resume", label: "Resume", icon: <FileTextIcon /> },
  { path: "/portfolio", label: "Portfolio", icon: <RulerSquareIcon /> },
  { path: "/blog", label: "Blog", icon: <Pencil1Icon /> },
];

const Navs: React.FC<{
  orientation: TabsProps["orientation"];
}> = ({ orientation }) => {
  const router = useRouter();
  const path = router.pathname;
  const activeTab = navTabs.some((tab) => tab.path === path) ? path : null;
  const audioCtl = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (!audioCtl.current) {
      // Math.ceil(Math.random() * 3)
      audioCtl.current = new Audio(`${window.location.origin}/audio/Swing.mp3`);
    }
  }, []);

  useEffect(() => {
    if (!audioCtl.current) {
      return;
    }
    audioCtl.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioCtl.current) {
      return;
    }
    if (playing) {
      audioCtl.current.play();
    } else {
      audioCtl.current.pause();
    }
  }, [playing]);

  return (
    //   NOTE WHEN UPDATING: Update the above nav name to number map above
    <>
      <Tabs
        orientation={orientation}
        value={activeTab}
        onChange={(tabPath) => {
          preservedPush(router, tabPath ?? "/");
        }}
      >
        <Tabs.List>
          {navTabs.map((tab) => (
            <Tabs.Tab key={tab.path} value={tab.path} leftSection={tab.icon}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      <Button
        onClick={() => {
          setPlaying((prev) => !prev);
        }}
        variant="gradient"
        gradient={{ from: "violet", to: "grape", deg: 105 }}
        radius="xl"
        leftSection={
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
            <Text ta="center" size="sm">
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
