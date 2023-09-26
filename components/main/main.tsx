"use client";

import React, { useEffect, ReactElement } from "react";
import styles from "./main.module.scss";
import Icon from "@/components/icon/icon";
import { icon } from "@/components/icon/icon.helper";
import TopBar from "@/components/topBar/topBar";
import { useModal } from "@/hooks/useModal";
import MainModal from "@/components/modal/mainModal/mainModal";
import InfiniteLooper from "@/components/infiniteLooper/infiniteLooper";
import { useRecoilState } from "recoil";
import { topModalZIndexState, modalsState } from "../modal/store/atoms";
import ReactDOM from "react-dom";
import { mainText } from "../modal/mainModal/mainModal.helper";

export default function Home() {
  const [modals, setModals] = useRecoilState(modalsState);
  const [topModal, setTopModal] = useRecoilState(topModalZIndexState);
  const { openModal } = useModal();

  const openProjectsModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openModal("projects", "projects");
    setTopModal("projects");
  };
  const openAboutModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openModal("about", "about");
    setTopModal("about");
  };
  const openContactModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openModal("contact", "contact");
    setTopModal("contact");
  };

  useEffect(()=>{
    setModals([<MainModal title="Welcome" text={mainText} key="main"/>]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className={styles.background}>
        <TopBar />
        {/* <div className={styles.infiniteLooper}> */}
          <InfiniteLooper text={mainText} />
        {/* </div> */}
        <div className={styles.icons}>
          <Icon icon={icon.about} onClick={openAboutModal} />
          <Icon icon={icon.projects} onClick={openProjectsModal} />
          <Icon icon={icon.contact} onClick={openContactModal} />
          {/* <Icon icon={icon.music} onClick={openMusicModal} /> */}
        </div>
      </div>
      {/* <CustomCursor /> */}
      {ReactDOM.createPortal(
        modals.map((modal) => modal as ReactElement),
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
}
