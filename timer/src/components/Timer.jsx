import { useEffect, useState } from "react";
import { TimerDisplay } from "./display";

export function Timer() {
  const [count, setCount] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

return (
    <div>
    <TimerDisplay totalSeconds={count} />
    </div>
)
}