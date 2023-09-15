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

export default function Home() {
  const [modals, setModals] = useState<ReactElement[]>([]);
  const [modalCount, setModalCount] = useRecoilState(modalCountState);

  const openModal = (name: string) => {
    const newModalCount = modalCount + 1;
    setModalCount(newModalCount);

    const newModal = (
      <Modal key={newModalCount} initialZIndex={newModalCount}>
        안녕하세요.
      </Modal>
    );

    setModals([...modals, newModal]);
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.icons}>
          <Icon icon={icon.about} onDoubleClick={() => openModal("about")} />
          <Icon
            icon={icon.projects}
            onDoubleClick={() => openModal("projects")}
          />
          <Icon
            icon={icon.contact}
            onDoubleClick={() => openModal("contact")}
          />
        </div>
        {...modals}
      </div>
    </>
  );
}
