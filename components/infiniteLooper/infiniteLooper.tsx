"use client";

import React from "react";
import styles from "./infiniteLooper.module.scss";

const InfiniteLooper = ({ text }: { text: string }) => {
  return (
    <div className={styles.infiniteLooper}>
      <div className={styles.infiniteLooperInner}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default InfiniteLooper;
