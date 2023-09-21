"use client";

import React from "react";
import styles from "./about.module.scss";
import { neodgm } from "@/styles/local.fonts";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <p className={(neodgm.className)}>
        안녕하세요!👋 저는 코드의 확장성과 재사용성을 고려하는 프론트엔드 개발을
        좋아하는 박유현입니다. 디자이너로 재직한 경험이 있어 디자이너와의 소통에
        원활하며 디자이너와 백엔드 개발자와 협동하여 프로젝트를 제작한 경험이 있습니다.
        JavaScript, TypeScript, HTML, React, Next.js등의 기술스택을 사용하고 있습니다.
      </p>
      <button className={styles.contact}>Contact Me</button>
    </div>
  );
}
