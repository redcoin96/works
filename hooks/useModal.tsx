import { useRecoilState } from "recoil";
import {
  modalsState,
  modalCountState,
  topModalZIndexState,
} from "@/components/modal/store/atoms";
import Modal from "@/components/modal/common/modal";
import MusicPlayer from "@/components/musicPlayer/musicPlayer";
import About from "@/components/modal/about/about";
import Contact from "@/components/modal/contact/contact";

export const useModal = () => {
  const [modals, setModals] = useRecoilState(modalsState);
  const [modalCount, setModalCount] = useRecoilState(modalCountState);
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

    let hasActiveModal = false;

    for(let i = 0; i<modals.length; i++){
      const item = modals[i]
      if(item.key === content) {
        hasActiveModal = true;
        return;
      }
    }

    if (!hasActiveModal) {
      const newModalCount = modalCount + 1;
      setModalCount(newModalCount);
      setTopModal(content)

      const newModal = (
        <Modal
          key={content}
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
    }
  };

  return { openModal };
};
