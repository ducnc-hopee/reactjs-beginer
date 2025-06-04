import { zeroPad } from "../utils/number";

export function TimerDisplay({ totalSeconds }) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <h2>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </h2>
  );
}