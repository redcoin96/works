"use client";

import React from "react";
import styles from "./modalBar.module.scss";
import classNames from "classnames/bind";
import { ModalBarProps } from "./modalBar.types";

const cx = classNames.bind(styles);

export default function ModalBar({ title, onClose }: ModalBarProps) {
  return (
    <>
      <div className="bar" style={{ width: "100%", zIndex:"1" }}>
        <div className={styles.modalBar}>
        <div className={styles.title}>{title}</div>
          {/* <div className={styles.stripe}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div> */}
           <button className={styles.close} onClick={onClose}/>
        </div>
      </div>
    </>
  );
}
