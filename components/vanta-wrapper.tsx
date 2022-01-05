import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Vanta.module.css";
import { useReducedMotion } from "@mantine/hooks";
import bg from "../public/img/vantabg_static.png";

export default function VantaWrapper({ children }) {
  const reduceMotion = useReducedMotion();
  const vantaWrapperId = "vanta-background-div";
  const [vantaSet, updateVantaSet] = useState(false);

  useEffect(() => {
    if (reduceMotion === false) {
      if (!vantaSet) {
        //@ts-ignore
        VANTA.NET({
          el: `#${vantaWrapperId}`,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          speed: 1,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffb84e,
          backgroundColor: 0xd0025,
          points: 12.0,
          spacing: 17.0,
        });
        updateVantaSet(true)
      }
    }
  }, [reduceMotion, vantaSet]);

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
}
