"use client";

import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import RangeSlider from "./rangeSlider/rangeSlider";

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
      audioRef.current.addEventListener("canplay", () => {
        audioRef.current!.play();
      });
      audioRef.current.load(); // 오디오 로딩
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
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

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    });
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <audio id="audio" ref={audioRef} autoPlay={true} loop={true}>
        <source src="/mp3/Gal Lev - Wave Art.mp3" type="audio/mp3" />
      </audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? "일시 정지" : "재생"}
      </button>
      <div>
        <span>현재 시간: {formatTime(currentTime)}</span>
        <span> / </span>
        <span>전체 시간: {formatTime(duration)}</span>
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
      {/* <RangeSlider /> */}
    </div>
  );
};

export default MusicPlayer;
