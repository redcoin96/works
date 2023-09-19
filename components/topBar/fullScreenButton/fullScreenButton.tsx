"use client";

import React from "react";
import styles from "./fullScreenButton.module.scss";
import { useFullscreen } from "@/hooks/useFullScreen";

export default function FullScreenBtn() {
  const { isFullscreen, openfullscreen, closefullscreen } = useFullscreen();

  return (
    <button
      className={styles.fullScreen}
      onClick={isFullscreen ? closefullscreen : openfullscreen}
    >
      {isFullscreen ? "Exit FullScreen" : "FullScreen"}
    </button>
  );
}
