"use client";

import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import styles from './musicPlayer.module.scss'
import Image from "next/image";
import classNames from "classnames/bind";
import { inherits } from "util";

const cx = classNames.bind(styles)

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audioRef.current?.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const playingClass = isPlaying ? 'running' : 'paused'

  return (
    <div className={styles.musicPlayer}>
      <audio id="audio" ref={audioRef} loop={true}>
        <source src="/mp3/Gal Lev - Wave Art.mp3" type="audio/mp3" />
      </audio>
      <div className={cx('cd', playingClass)}>
      <Image src="/images/cd.png" alt="cd img" fill/>
      </div>
      <button onClick={togglePlayPause} className={styles.playPauseIcon}>
        {isPlaying ?  <Image src="/images/pause.png" alt="pause icon" fill/> : <Image src="/images/play.png" alt="play icon" fill/>}
      </button>
      <div>
        <span>{formatTime(currentTime)}</span>
        <span> / </span>
        <span>{formatTime(duration)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={duration || 100}
        value={currentTime}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (audioRef.current) {
            setCurrentTime(Number(e.target.value));
            audioRef.current.currentTime = Number(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default MusicPlayer;
