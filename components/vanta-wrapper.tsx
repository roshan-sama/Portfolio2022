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
      minHeight: 1080.0,
      minWidth: 1820.0,
      speed: 1,
      scale: 1.0,
      scaleMobile: 1.0,
      color: dark ? 0xbe4bdb : 0x862e9c,
      backgroundColor: dark ? 0xd0025 : 0x1098ad,
      points: 8.0,
      spacing: 12.0,
    });

    updateVanta(vantaEffect);

    return () => vanta && vanta.destroy();
  }, [reduceMotion]);

  useEffect(() => {
    if (!vanta) {
      return;
    }
    vanta.setOptions({
      color: dark ? 0xbe4bdb : 0x862e9c,
      backgroundColor : dark ? 0xd0025 : 0x1098ad
    })
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
