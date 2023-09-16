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

export default function Home() {
  const { openModal, modals } = useModal();

  const openMusicModal = () => {openModal('music')}

  return (
    <>
      <div className={styles.background}>
        <TopBar />
        <div className={styles.icons}>
          <Icon icon={icon.about} onClick={openMusicModal} />
          <Icon icon={icon.projects} onClick={openMusicModal} />
          <Icon icon={icon.contact} onClick={openMusicModal} />
        </div>
        <Modal initialZIndex={0} animation={false} content='music'>
          <MusicPlayer/>
        </Modal>
        {...modals}
      </div>
    </>
  );
}
