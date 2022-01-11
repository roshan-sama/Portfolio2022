import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Vanta.module.css";
import { useReducedMotion } from "@mantine/hooks";
import bg from "../public/img/vantabg_static.png";
import { ColorScheme } from "@mantine/core";

const VantaWrapper: React.FC<{ theme: ColorScheme }> = ({
  children,
  theme,
}) => {
  const reduceMotion = useReducedMotion();
  const vantaWrapperId = "vanta-background-div";
  const [vanta, updateVanta] = useState(null);
  const dark = theme === "dark";

  useEffect(() => {
    if (reduceMotion) {
      vanta && vanta.destroy();
    }

    //@ts-ignore
    const vantaEffect = VANTA.NET({
      el: `#${vantaWrapperId}`,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      speed: 1,
      scale: 1.0,
      scaleMobile: 1.0,
      color: dark ? 0xbe4bdb : 0xbe4bdb, // 0xffb84e,
      backgroundColor: dark ? 0xd0025 : 0xf8f9fa,
      points: 5.0,
      spacing: 17.0,
    });

    updateVanta({ ...vantaEffect });

    return () => vanta && vanta.destroy();
  }, [reduceMotion]);

  useEffect(() => {
    if (!vanta) {
      return;
    }
    vanta.options.color = dark ? 0xbe4bdb : 0x000000; // 0xffb84e,
    vanta.options.backgroundColor = dark ? 0xd0025 : 0xffeeff;
    vanta.restart()
  }, [theme]);

  return (
    <>
      {!reduceMotion && (
        <div id={vantaWrapperId} className={styles.backgroundfill}>
          {children}
        </div>
      )}
      {reduceMotion && (
        <>
          <div
            key={"background"}
            style={{ zIndex: -5 }}
            className={styles.backgroundfill}
          >
            <Image alt="Vanta Net background" src={bg} layout="fill" />
          </div>
          <div key={"childrenelems"} style={{ zIndex: 0 }}>
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default VantaWrapper;
