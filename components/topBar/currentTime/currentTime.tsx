'use client'

import { useCurrentTime } from "@/hooks/useCurrentTime";
import styles from "./currentTime.module.scss";

export default function CurrentTime() {
  const currentTime = useCurrentTime();

  return <p className={styles.time}>{currentTime}</p>;
};

