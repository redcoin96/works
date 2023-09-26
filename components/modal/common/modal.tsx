"use client";

import React, { useState, useEffect } from "react";
import styles from "./modal.module.scss";
import Draggable from "react-draggable";
import classNames from "classnames/bind";
import { ModalProps } from "./modal.types";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalsState, modalCountState, topModalZIndexState } from "../store/atoms";
import TopBar from "./modalBar/modalBar";

const cx = classNames.bind(styles);

export default function Modal({
  title,
  initialZIndex,
  children,
  animation = true,
  content,
  backgroundColor,
}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [zIndex, setZIndex] = useState(initialZIndex);
  const [modals, setModals] = useRecoilState(modalsState);
  const [modalCount, setModalCount] = useRecoilState(modalCountState);
  const [topModal, setTopModal] = useRecoilState(topModalZIndexState);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (zIndex < modalCount) {
      e.stopPropagation()
      setTopModal(content)
      setModalCount((prevCount) => prevCount + 1);
      setZIndex(modalCount);
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
    const newModals = modals.filter(item => item.key !== content);
    setModals(newModals)
  };

  const animateVariants = animation
    ? {
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.15,
        },
      }
    : false;

  const initialVariants = animation
    ? {
        opacity: 0,
        scale: 0.5,
      }
    : false;

  useEffect(()=>{
    console.log(`topModal: ${topModal}, modalCount: ${modalCount}`)
    if(content === topModal){
      setModalCount((prevCount) => prevCount + 1);
      setZIndex(modalCount);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[topModal])

  return (
    <div className={cx(content)}>
      <AnimatePresence>
        {isModalOpen && (
          <div onClick={handleClick}>
            <Draggable
              positionOffset={{ x: "-50%", y: "-50%" }}
              handle=".bar"
              // onStart={handleClick(e)}
            >
              <div className={styles.draggable} style={{ zIndex }}>
                <motion.div
                  initial={initialVariants}
                  animate={animateVariants}
                  exit={{
                    opacity: 0,
                    scale: 0.75,
                    transition: {
                      ease: "easeIn",
                      duration: 0.15,
                    },
                  }}
                >
                  <div className={styles.modal} style={{ backgroundColor }}>
                    <TopBar title={title} onClose={closeModal} />
                      <div className={styles.modalBody}>{children}</div>
                  </div>
                </motion.div>
              </div>
            </Draggable>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
