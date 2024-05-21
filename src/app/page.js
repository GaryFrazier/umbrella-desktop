'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import StartupLogo from "./components/startupLogo";
import Image from 'next/image';
import Ropls from '../public/ropls.png';

async function setupAppWindow(startupAudio, setShowLogo, setShowRopls) {
  const appWindow = (await import('@tauri-apps/api/window')).appWindow;

  setTimeout(() => {
    appWindow.show();
    if (startupAudio.current) {
      startupAudio.current.addEventListener('ended', () => {
        setShowLogo(true);
        
        setTimeout(() => {
          setShowRopls(true);
        }, 9750);
      });
      startupAudio.current.play();
    }
  }, 500);
}

export default function Home() {
  const startupAudio = useRef(null);
  const [showLogo, setShowLogo] = useState(false);
  const [showRopls, setShowRopls] = useState(false);

  useEffect(() => {
    setupAppWindow(startupAudio, setShowLogo, setShowRopls);
  }, [])

  return (
    <main className={styles.main}>
        <audio ref={startupAudio} src="/startup.mp3" />
        {showRopls ? <Image
          src={Ropls}
          className={styles.roplsLogo}
        /> : null}
        {showLogo ? <StartupLogo /> : null }
    </main>
  );
}
