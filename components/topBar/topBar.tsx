"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./topBar.module.scss";
import CurrentTime from "./currentTime/currentTime";
import FullScreenBtn from "./fullScreenButton/fullScreenButton";
import { useModal } from "@/hooks/useModal";

export default function TopBar() {
  const { openModal, modals } = useModal();
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.right}>
          {/* <button onClick={() => openModal("about")}>about</button> */}
        </div>
        <div className={styles.left}>
          <CurrentTime />
          <FullScreenBtn />
        </div>
      </div>
      {...modals}
    </>
  );
}
