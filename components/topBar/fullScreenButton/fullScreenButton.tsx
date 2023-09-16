"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./fullScreenButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FullScreenBtn() {
  const enterFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };
  return <button className={styles.fullScreenButton} onClick={enterFullscreen}>full</button>;
}
