import React, { useState, useEffect, useRef } from "react";
import { DEFAULT_TIME } from "./constants/time";
import { formatTime, minutesToSeconds } from "./utils/time";
import { Button } from "./components/Button";

export function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const defaultSeconds = minutesToSeconds(DEFAULT_TIME);
  const [timeLeft, setTimeLeft] = useState(defaultSeconds);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;
    intervalIdRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          stop();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      stop();
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
  }

  function reset() {
    setTimeLeft(defaultSeconds);
    stop();
  }

  console.log(timeLeft);

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(timeLeft)}</div>
      <div className="controls">
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}
