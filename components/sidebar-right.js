import { useState } from "react";
import { Drawer, Group } from "@mantine/core";
import Image from "next/image";
import DallasImg from "../public/img/dallas.jpg";
import styles from "../styles/Image.module.css";

export default function SidebarRight() {
  const [opened, setOpened] = useState(true);
  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      position="right"
      padding="xl"
      size="xl"
    >
        <Image className={styles.image} layout="responsive" src={DallasImg} />
    </Drawer>
  );
}
