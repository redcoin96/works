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
          // src="https://i.pinimg.com/564x/ed/f9/b2/edf9b24691178c1bc5aeb493ddd3f2b6.jpg"
          // src="https://i.pinimg.com/originals/70/8b/06/708b06aee06041ffee3db4c7da6336dd.jpg"
          src="https://i.pinimg.com/originals/2d/fe/c5/2dfec54057d38e07e567b5c9de71b9b3.gif"
          // src="https://i.pinimg.com/originals/03/08/d8/0308d8a81c33ca9bbc02c780100fd582.gif"
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
