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
        <button onClick={() => openModal("about")}>about</button>
        <CurrentTime />
        <FullScreenBtn />
      </div>
      {...modals}
    </>
  );
}
