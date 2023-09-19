'use client'

import React, { useState, useEffect } from 'react';

const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(formatTime(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}
