'use client'

import React from 'react';
import styles from './infiniteLooper.module.scss'; 

const InfiniteLooper = ({ text } : {text: string}) => {
  return (
    <div className={styles.infiniteLooperContainer}>
      <div className={styles.infiniteLooper}>
        {text.repeat(4)}
      </div>
    </div>
  );
};

export default InfiniteLooper;
