'use client';
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

async function setupAppWindow(startupAudio, logoAudio) {
  const appWindow = (await import('@tauri-apps/api/window')).appWindow;

  setTimeout(() => {
    appWindow.show();
    if (startupAudio.current) {
      startupAudio.current.addEventListener('ended', () => {
        if (logoAudio.current) {
          logoAudio.current.play();
        }
      });
      startupAudio.current.play();
    }
  }, 500);
}

export default function Home() {
  const startupAudio = useRef(null);
  const logoAudio = useRef(null);

  useEffect(() => {
    setupAppWindow(startupAudio, logoAudio);
  }, [])

  return (
    <main className={styles.main}>
        <audio ref={startupAudio} src="/startup.mp3" />
        <audio ref={logoAudio} src="/startup_logo.mp3" />
    </main>
  );
}
