"use client";

import React from "react";
import styles from "./icon.module.scss";
import Image from "next/image";
import Draggable from "react-draggable";
import { IconProps } from "./icon.types";

export default function Icon({ icon, onDoubleClick }: IconProps) {
  return (
    <Draggable>
      <div className={styles.iconBox} onDoubleClick={onDoubleClick}>
        <div className={styles.icon}>
          <Image src={icon.img} alt="icon" fill draggable="false" />
        </div>
        <p className={styles.title}>{icon.title}</p>
      </div>
    </Draggable>
  );
}
