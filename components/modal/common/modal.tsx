"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./modal.module.scss";
import Draggable from "react-draggable";
import classNames from "classnames/bind";
import { ModalProps } from "./modal.types";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalCountState } from "../store/atoms";
import TopBar from "./modalBar/modalBar";

const cx = classNames.bind(styles);

export default function Modal({ initialZIndex, children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalCount, setModalCount] = useRecoilState(modalCountState);
  const [zIndex, setZIndex] = useState(initialZIndex);

  const handleClick = () => {
    if (zIndex < modalCount) {
      setModalCount((prevCount) => prevCount + 1);
      setZIndex(modalCount);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <div onClick={handleClick}>
            <Draggable
              positionOffset={{ x: "-50%", y: "-50%" }}
              handle=".bar"
              onStart={handleClick}
            >
              <div className={styles.draggable} style={{ zIndex }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      ease: "easeOut",
                      duration: 0.15,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.75,
                    transition: {
                      ease: "easeIn",
                      duration: 0.15,
                    },
                  }}
                >
                  <div className={styles.modal}>
                    <TopBar onClose={closeModal} />
                    <div className={styles.modalBody}>{children}</div>
                  </div>
                </motion.div>
              </div>
            </Draggable>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
