import React, { useState, ChangeEvent } from "react";
import styles from "./slider.module.scss";

function RangeSlider() {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className={styles.input}>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Value: {sliderValue}</p>
    </div>
  );
}

export default RangeSlider;
