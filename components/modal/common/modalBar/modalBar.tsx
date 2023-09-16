"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./modalBar.module.scss";
import classNames from "classnames/bind";
import { ModalBarProps } from "./modalBar.types";

const cx = classNames.bind(styles);

export default function ModalBar({ onClose }: ModalBarProps) {
  return (
    <>
      <div className="bar" style={{ width: "100%" }}>
        <div className={styles.modalBar}>
          <button className={styles.close} onClick={onClose} />
        </div>
      </div>
    </>
  );
}
