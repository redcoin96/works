"use client";

import React from "react";
import styles from "./topBar.module.scss";
import { useModal } from "@/hooks/useModal";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { useFullscreen } from "@/hooks/useFullScreen";

export default function TopBar() {
  const { openModal, modals } = useModal();
  const currentTime = useCurrentTime();
  const { isFullscreen, openfullscreen, closefullscreen } = useFullscreen();

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
      {...modals}
    </>
  );
}
