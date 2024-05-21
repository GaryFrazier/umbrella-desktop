'use client';
import { useEffect, useRef } from "react";
import UmbrellaTriangleSvg from '../svg/umbrellaTriangle';
import styles from "./startupLogo.module.css";

async function startSound(logoAudio) {
    if (logoAudio.current) {
        logoAudio.current.play();
    }
}

export default function StartupLogo() {
  const logoAudio = useRef(null);

  useEffect(() => {
    startSound(logoAudio);
  }, [])

  return (
    <div className={styles.startupLogo}>
        <div className={styles.triContainer}>
            <div className={styles.tri1}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri2}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri3}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri4}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri5}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri6}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri7}>
                <UmbrellaTriangleSvg  />
            </div>
            <div className={styles.tri8}>
                <UmbrellaTriangleSvg  />
            </div>
        </div>
        <div className={styles.mainText}>
            <span><i>U</i>mbre<i>ll</i>a</span>
        </div>
        <audio ref={logoAudio} src="/startup_logo.mp3" />
    </div>
  );
}
