import { useState, useContext, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  modalCountState,
  currentModalState,
  topModalZIndexState,
} from "@/components/modal/store/atoms";
import Modal from "@/components/modal/common/modal";
import TypingText from "@/components/typingText/typingText";
import { ReactElement } from "react";
import MusicPlayer from "@/components/musicPlayer/musicPlayer";
import About from "@/components/modal/about/about";
import Contact from "@/components/modal/contact/contact";

export const useModal = () => {
  const [modals, setModals] = useState<ReactElement[]>([]);
  const [modalCount, setModalCount] = useRecoilState(modalCountState);
  const [currentModal, serCurrentModal] = useRecoilState(currentModalState);
  const [topModal, setTopModal] = useRecoilState(topModalZIndexState);

  const openModal = (title: string, content: string, width?: number, backgroundColor?:string) => {
    let modalContent;

    switch (content) {
      case "about":
        modalContent = <About/>;
        break;
      case "music":
        modalContent = <MusicPlayer />;
        break;
      case "contact":
        modalContent = <Contact />;
        break;
    }

    if (!currentModal.includes(content)) {
      const newModalCount = modalCount + 1;
      setModalCount(newModalCount);
      setTopModal(content)

      const newModal = (
        <Modal
          key={newModalCount}
          initialZIndex={newModalCount}
          content={content}
          title={title}
          width={width}
          backgroundColor={backgroundColor}
        >
          {modalContent}
        </Modal>
      );

      setModals([...modals, newModal]);
      serCurrentModal([...currentModal, content]);
    }
  };

  return { openModal, modals };
};
