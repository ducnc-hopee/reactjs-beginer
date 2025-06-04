import { useEffect, useState } from "react";
import { TimerDisplay } from "./display";

export function Timer() {
  const [count, setCount] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((count) => {
          if (count == 0) {
            resetTimer();
            alert("5 minutes over");
            return;
          }
          return count - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setCount(300);
    setIsRunning(false);
  };

  return (
    <div class="timer-display">
      <TimerDisplay totalSeconds={count} />
      <div>
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
