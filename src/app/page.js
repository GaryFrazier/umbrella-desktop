'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import StartupLogo from "./components/startupLogo";
import Desktop from "./components/desktop";
import Image from 'next/image';
import Ropls from '../public/ropls.png';

async function setupAppWindow(startupAudio, setShowLogo, setShowRopls, setShowDesktop) {
  const appWindow = (await import('@tauri-apps/api/window')).appWindow;

  setTimeout(() => {
    appWindow.show();
    if (startupAudio.current) {
      startupAudio.current.addEventListener('ended', () => {
        setShowLogo(true);
        
        setTimeout(() => {
          setShowRopls(true);

          setTimeout(() => {
            setShowLogo(false);
            setShowRopls(false);
            setShowDesktop(true);
          }, 2000)
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
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    setupAppWindow(startupAudio, setShowLogo, setShowRopls, setShowDesktop);
  }, [])

  return (
    <main className={styles.main}>
        <audio ref={startupAudio} src="/startup.mp3" />
        {showDesktop ? 
          <Desktop />
        : null}
        {showRopls ? <Image
          src={Ropls}
          className={styles.roplsLogo}
        /> : null}
        {showLogo ? <StartupLogo /> : null }
    </main>
  );
}
