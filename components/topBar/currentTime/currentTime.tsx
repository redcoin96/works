import React, { useState, useEffect } from "react";
import styles from "./currentTime.module.scss";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 || 12;

    return `${ampm} ${formattedHours}:${String(minutes).padStart(2, "0")}`;
  };

  return <p className={styles.time}>{formatTime(currentTime)}</p>;
};

export default CurrentTime;
