import { useEffect } from "react";
import Head from 'next/head';
import styles from '../styles/Vanta.module.css'

export default function VantaWrapper({ children }) {
  const vantaWrapperId = "vanta-background-div";
  useEffect(() => {
    // document.getElementById(vantaWrapperId).style.position = "fixed";
    // document.getElementById(vantaWrapperId).style.height = "100vh";
    // document.getElementById(vantaWrapperId).style.width = "100vw";
    VANTA.NET({
      el: `#${vantaWrapperId}`,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xffb84e,
      backgroundColor: 0xd0025,
      points: 12.0,
      spacing: 17.0,
    });
  });
  return (
    <>
      <Head>
        <script type="text/javascript" src="three.r119.min.js"></script>
        <script type="text/javascript" src="vanta.net.min.js"></script>
      </Head>
      <div id={vantaWrapperId} className={styles.vanta}>{children}</div>
    </>
  );
}
