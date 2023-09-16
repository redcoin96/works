import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalCountState } from "@/components/modal/store/atoms";
import Modal from "@/components/modal/common/modal";
import TypingText from "@/components/typingText/typingText";
import { ReactElement } from "react";

export function useModal() {
  const [modals, setModals] = useState<ReactElement[]>([]);
  const [modalCount, setModalCount] = useRecoilState<number>(modalCountState);

  const openModal = (text: string) => {
    const newModalCount = modalCount + 1;
    setModalCount(newModalCount);

    const newModal = (
      <Modal key={newModalCount} initialZIndex={newModalCount}>
        <TypingText text={text} speed={60} />
      </Modal>
    );

    setModals([...modals, newModal]);
  };

  return { openModal, modals };
}
