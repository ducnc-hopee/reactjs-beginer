import { DEFAULT_START_TIME } from "../constants/time";
import { useTimerHandler } from "../hooks/useTimerHandler";
import { minutesToSeconds } from "../utils/dayjs";
import { Button } from "./Button";
import { TimerDisplay } from "./display";

export function Timer() {
  const initTime = minutesToSeconds(DEFAULT_START_TIME);
  const { isRunning, resetTimer, startTimer, stopTimer, timerKey } =
    useTimerHandler();

  return (
    <div class="timer-display">
      <TimerDisplay
        key={timerKey}
        initTime={initTime}
        isRunning={isRunning}
        onReset={resetTimer}
      />
      <div>
        <Button onClick={startTimer} disabled={isRunning}>
          Start
        </Button>
        <Button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
}
