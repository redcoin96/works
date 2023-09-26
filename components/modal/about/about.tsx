"use client";

import React from "react";
import styles from "./about.module.scss";
import { neodgm, EliceDigitalBaeum } from "@/styles/local.fonts";
import { useRecoilState } from "recoil";
import {topModalZIndexState } from "../store/atoms";
import { useModal } from "@/hooks/useModal";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';

export default function About() {
  const [topModal, setTopModal] = useRecoilState(topModalZIndexState);
  
  const { openModal } = useModal();
  
  const handleClickContact = (e: React.MouseEvent<HTMLElement>)=> {
    e.stopPropagation()
    openModal("contact", "contact")
    setTopModal('contact')
  }
  
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p className={(EliceDigitalBaeum.className)}>
        안녕하세요!👋 저는 코드의 확장성과 재사용성을 고려하는 마크업과 프론트엔드 개발을
        좋아하는 박유현입니다. 디자이너로 재직한 경험이 있어 디자이너와의 소통에
        원활하며 디자이너와 백엔드 개발자와 협동하여 프로젝트를 제작한 경험이 있습니다.
        <strong>JavaScript, TypeScript, HTML, React, Next.js</strong>등의 기술스택을 사용하고 있습니다.
      </p>
      <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleClickContact}>Contact Me</button>
      <button className={styles.button}>
      <a target="_blank" href="https://github.com/redcoin96">
        GitHub
      </a>
      </button>
      </div>
    </div>
  );
}
