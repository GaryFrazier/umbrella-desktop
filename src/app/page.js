'use client';

import Image from "next/image";
import { useEffect } from "react";
import styles from "./page.module.css";

async function setupAppWindow() {
  const appWindow = (await import('@tauri-apps/api/window')).appWindow;

  setTimeout(() => {
    appWindow.show();
  }, 500);
}

export default function Home() {
  useEffect(() => {
    setupAppWindow()
  }, [])

  return (
    <main className={styles.main}>

    </main>
  );
}
