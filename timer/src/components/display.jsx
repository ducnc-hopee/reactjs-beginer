import { useTimeDisplay } from "../hooks/useTimeDisplay";

export function TimerDisplay({ isRunning, initTime, reset }) {
  const timeDisplay = useTimeDisplay({ isRunning, initTime, reset });
  return <h2>{timeDisplay}</h2>;
}
