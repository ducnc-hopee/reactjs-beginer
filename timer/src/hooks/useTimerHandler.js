import { useState } from "react";

export const useTimerHandler = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timerKey, setTimerKey] = useState(Math.random());

  const resetTimer = () => {
    setTimerKey(Math.random());
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return { isRunning, timerKey, resetTimer, startTimer, stopTimer };
};
