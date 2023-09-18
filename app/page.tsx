"use client";

import React from "react";
import { useState, ReactElement } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Modal from "@/components/modal/common/modal";
import Icon from "@/components/icon/icon";
import { icon } from "@/components/icon/icon.helper";
import { useRecoilState } from "recoil";
import { modalCountState } from "@/components/modal/store/atoms";
import TypingText from "@/components/typingText/typingText";
import TopBar from "@/components/topBar/topBar";
import { useModal } from "@/hooks/useModal";
import MusicPlayer from "@/components/musicPlayer/musicPlayer";
import CustomCursor from "@/components/customCursor/customCursor";
import InfiniteLooper from "@/components/infiniteLooper/infiniteLooper";

export default function Home() {
  const { openModal, modals } = useModal();

  const openMusicModal = () => openModal("music");

  return (
    <>
      <div className={styles.background}>
        <TopBar />
        <div className={styles.icons}>
          <Icon icon={icon.about} onClick={openMusicModal} />
          <Icon icon={icon.projects} onClick={openMusicModal} />
          <Icon icon={icon.contact} onClick={openMusicModal} />
          <Icon icon={icon.music} onClick={openMusicModal} />
        </div>
        <Modal initialZIndex={0} animation={false} content="main">
          <div className={styles.main}>
            <Image
              // src="https://i.pinimg.com/originals/8c/fa/1a/8cfa1a47ca839e31cce684d1944862e9.jpg"
              src="https://i.pinimg.com/originals/70/8b/06/708b06aee06041ffee3db4c7da6336dd.jpg"
              // src="https://64.media.tumblr.com/47180a86969cabb7e053de1c3dc4b7e1/827bead6f785e1a3-d6/s1280x1920/53d2962e657029c4612ff65d4372958c2d3042ca.jpg"
              alt="background img"
              fill
            />
            <div className={styles.textBar}>
              <InfiniteLooper text="Hello, World!" />
            </div>
          </div>
        </Modal>
        {/* <Modal initialZIndex={0} animation={false} content='music'>
          <MusicPlayer/>
        </Modal> */}
        {...modals}
      </div>
      <CustomCursor />
    </>
  );
}
