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
import { useRecoilState } from "recoil";
import { topModalZIndexState } from "../modal/store/atoms";

export default function Home() {
  const [topModal, setTopModal] = useRecoilState(topModalZIndexState);

  const { openModal, modals } = useModal();

  const openMusicModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    openModal("music", "music"); 
    setTopModal('music')
  }
  const openAboutModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    openModal("about", "about", 300, '#fff1d1'); 
    setTopModal('about')
  }
  const openContactModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    openModal("contact", "contact")
    setTopModal('contact')
  }

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
