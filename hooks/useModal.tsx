import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  modalCountState,
  currentModalState,
} from "@/components/modal/store/atoms";
import Modal from "@/components/modal/common/modal";
import TypingText from "@/components/typingText/typingText";
import { ReactElement } from "react";
import MusicPlayer from "@/components/musicPlayer/musicPlayer";

export const useModal = () => {
  const [modals, setModals] = useState<ReactElement[]>([]);
  const [modalCount, setModalCount] = useRecoilState(modalCountState);
  const [currentModal, serCurrentModal] = useRecoilState(currentModalState);

  const openModal = (title: string, content: string) => {
    if (!currentModal.includes(content)) {
      const newModalCount = modalCount + 1;
      setModalCount(newModalCount);

      const newModal = (
        <Modal
          key={newModalCount}
          initialZIndex={newModalCount}
          content={content}
          title={title}
        >
          <MusicPlayer />
        </Modal>
      );

      setModals([...modals, newModal]);
      serCurrentModal([...currentModal, content])
    }
  };

  return { openModal, modals };
}
