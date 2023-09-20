"use client";

import React from "react";
import styles from "./mainModal.module.scss";
import Image from "next/image";
import Modal from "@/components/modal/common/modal";
import InfiniteLooper from "@/components/infiniteLooper/infiniteLooper";

export default function MainModal({ title, text }: { title: string, text: string }) {
  return (
    <Modal title={title} initialZIndex={0} animation={false} content="main">
      <div className={styles.mainModalBody}>
        <Image
          src="https://i.pinimg.com/originals/70/8b/06/708b06aee06041ffee3db4c7da6336dd.jpg"
          alt="background img"
          fill
        />
        <div className={styles.textBar}>
          <InfiniteLooper text={text} />
        </div>
      </div>
    </Modal>
  );
}
