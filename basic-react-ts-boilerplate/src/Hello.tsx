// import React, { useState, useEffect, useRef } from "react";
// import { useTimeCounter } from "./hooks/useTimeCounter";
// import { Five_Minutes } from "./constants/time";
// import { formatTime } from "./utils/times";


// const Hello: React.FC = () => {
//     const [timeLeft, setTimeLeft] = useState<number>(Five_Minutes);
//     const [isRunning, setIsRunning] = useState<boolean>(false);
//     const intervalRef = useRef<NodeJS.Timeout | null>(null);
    

//     const handleStart = () => {
//         if (!isRunning && timeLeft > 0) {
//             setIsRunning(true);
//         }
//     }

//     const handleStop = () => {
//         if (intervalRef.current) clearInterval(intervalRef.current);
//         setIsRunning(false);
//     };

//     const handleReset = () => {
//         if (intervalRef.current) clearInterval(intervalRef.current);
//         setTimeLeft(Five_Minutes);
//         setIsRunning(false);
//     };

//     return (
//         <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
//             <h1>{formatTime(timeLeft)}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     );

// };

// export default Hello;