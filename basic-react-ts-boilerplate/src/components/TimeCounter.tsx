import React from "react";
import { useTimeCounter } from "../hooks/useTimeCounter";
import { formatTime } from "../utils/times";

export const App: React.FC = () => {
    const { timeLeft, handleStart, handleStop, handleReset } = useTimeCounter();

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
            <h1>{formatTime(timeLeft)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default App;