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

export default function Home() {
   const { openModal, modals } = useModal();

  return (
    <>
      <TopBar />
      <div className={styles.background}>
        <div className={styles.icons}>
          <Icon icon={icon.about} onClick={() => openModal("about")} />
          <Icon
            icon={icon.projects}
            onClick={() => openModal("projects")}
          />
          <Icon
            icon={icon.contact}
            onClick={() => openModal("contact")}
          />
          <Icon
            icon={icon.contact}
            onClick={() => openModal("contact")}
          />
          <Icon
            icon={icon.contact}
            onClick={() => openModal("contact")}
          />
          <Icon
            icon={icon.contact}
            onClick={() => openModal("contact")}
          />
        </div>
        {...modals}
      </div>
    </>
  );
}
