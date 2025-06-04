import { useEffect, useState } from "react";
import { DEFAULT_START_TIME } from "../constants/time";
import { zeroPad } from "../utils/numbers";

export const useTimeDisplay = ({ initTime, isRunning, reset }) => {
  const [count, setCount] = useState(initTime);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((count) => {
          if (count == 0) {
            reset();
            alert(`${DEFAULT_START_TIME} minutes over`);
            return;
          }
          return count - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTimer = () => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    return `${zeroPad(minutes)}:${zeroPad(seconds)}`;
  };

  const timeDisplay = formatTimer();

  return timeDisplay;
};
