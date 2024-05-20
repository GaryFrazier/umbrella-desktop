'use client';
import { useEffect, useRef } from "react";
import styles from "./startupLogo.module.css";

async function startAnimation(logoAudio) {
  setTimeout(() => {
    if (logoAudio.current) {
        logoAudio.current.play();
    }
  }, 500);
}

export default function StartupLogo() {
  const logoAudio = useRef(null);

  useEffect(() => {
    startAnimation(logoAudio);
  }, [])

  return (
    <div className={styles.startupLogo}>
        <audio ref={logoAudio} src="/startup_logo.mp3" />
    </div>
  );
}
