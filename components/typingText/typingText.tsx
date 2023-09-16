import React, { useState, useEffect } from "react";
import styles from './typingText.module.scss'
import { TypingTextProps } from "./typingText.types";

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      } else {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, speed]);

  return <div className={styles.typingText}>{displayText}</div>;
};

export default TypingText;
