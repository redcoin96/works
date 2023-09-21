"use client";

import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import styles from "./musicPlayer.module.scss";
import Image from "next/image";
import classNames from "classnames/bind";
import { inherits } from "util";
import Equalizer from "./equalizer/equalizer";

const cx = classNames.bind(styles);

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

  const playingClass = isPlaying ? "running" : "paused";

  return (
    <>
      <audio id="audio" ref={audioRef} loop={true}>
        <source src="/mp3/Gal Lev - Wave Art.mp3" type="audio/mp3" />
      </audio>
      <div className={styles.musicPlayer}>
        {/* <div className={cx("cd", playingClass)}>
          <Image src="/images/cd.png" alt="cd img" fill />
        </div> */}
        <Equalizer/>
        <div className={styles.buttom}>
        <div className={styles.musicController}>
          <button onClick={togglePlayPause} className={styles.previous}>
            <Image src="/images/previous.png" alt="pause icon" fill />
          </button>
          <button onClick={togglePlayPause} className={styles.playPause}>
            {isPlaying ? (
              <Image src="/images/pause.png" alt="pause icon" fill />
            ) : (
              <Image src="/images/play.png" alt="play icon" fill />
            )}
          </button>
          <button onClick={togglePlayPause} className={styles.next}>
            <Image src="/images/next.png" alt="pause icon" fill />
          </button>
          </div>
          <div className={styles.time}>
            <span>{formatTime(currentTime)}</span>
            <span> / </span>
            <span>{formatTime(duration)}</span>
          </div>
          {/* <input
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
          /> */}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
