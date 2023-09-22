"use client";

import React from "react";
import styles from "./main.module.scss";
import Icon from "@/components/icon/icon";
import { icon } from "@/components/icon/icon.helper";
import TopBar from "@/components/topBar/topBar";
import { useModal } from "@/hooks/useModal";
import CustomCursor from "@/components/customCursor/customCursor";
import MainModal from "@/components/modal/mainModal/mainModal";
import InfiniteLooper from "@/components/infiniteLooper/infiniteLooper";

export default function Home() {
  const { openModal, modals } = useModal();

  const openMusicModal = () => openModal("music", "music");
  const openAboutModal = () => openModal("about", "about", 300, '#fff1d1');
  const openContactModal = () => openModal("contact", "contact");

  const mainText = "Hello, 'Yu-Hyun' World!"

  return (
    <>
      <div className={styles.background}>
        <TopBar />
        <div className={styles.infiniteLooper}>
        <InfiniteLooper text={mainText}/>
        </div>
        <div className={styles.icons}>
          <Icon icon={icon.about} onClick={openAboutModal} />
          <Icon icon={icon.projects} onClick={openMusicModal} />
          <Icon icon={icon.contact} onClick={openContactModal} />
          {/* <Icon icon={icon.music} onClick={openMusicModal} /> */}
        </div>
        <MainModal title="Welcome" text={mainText}/>
        {...modals}
      </div>
      <CustomCursor />
    </>
  );
}
