"use client";

import React from "react";
import styles from "./topBar.module.scss";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { useFullscreen } from "@/hooks/useFullScreen";

export default function TopBar() {
  const { isFullscreen, openfullscreen, closefullscreen } = useFullscreen();

  const currentTime = useCurrentTime();

  return (
    <>
      <div className={styles.topBar}>
        <ul className={styles.right}>
          <li>Home</li>
        </ul>
        <ul className={styles.left}>
          <li>{currentTime}</li>
          <li>
            <div className={styles.fullScreen}  onClick={isFullscreen ? closefullscreen : openfullscreen}>
            {isFullscreen ? "Exit FullScreen" : "FullScreen"}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
