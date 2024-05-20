'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import StartupLogo from "./components/startupLogo";

async function setupAppWindow(startupAudio, setShowLogo) {
  const appWindow = (await import('@tauri-apps/api/window')).appWindow;

  setTimeout(() => {
    appWindow.show();
    if (startupAudio.current) {
      startupAudio.current.addEventListener('ended', () => {
        setShowLogo(true);
      });
      startupAudio.current.play();
    }
  }, 500);
}

export default function Home() {
  const startupAudio = useRef(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setupAppWindow(startupAudio, setShowLogo);
  }, [])

  return (
    <main className={styles.main}>
        <audio ref={startupAudio} src="/startup.mp3" />
        {showLogo ? <StartupLogo /> : null }
    </main>
  );
}
