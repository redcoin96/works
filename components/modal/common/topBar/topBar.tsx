"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./topBar.module.scss";
import classNames from "classnames/bind";
import { TopBarProps } from "./topBar.types";

const cx = classNames.bind(styles);

export default function TopBar({ onClose }: TopBarProps) {
  return (
    <>
      <div className="bar" style={{ width: "100%" }}>
        <div className={styles.topBar}>
          <button className={styles.close} onClick={onClose} />
        </div>
      </div>
    </>
  );
}
