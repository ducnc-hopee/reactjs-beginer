import { useEffect, useRef, useState } from "react";
import { Five_Minutes } from "../constants/time";

export const useTimeCounter = () => {
    const [timeLeft, setTimeLeft] = useState<number>(Five_Minutes);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    useEffect(() => {
        if (timeLeft === 0 && intervalRef.current) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    }, [timeLeft]);

    const handleStart = () => {
        if (!isRunning && timeLeft > 0) {
            setIsRunning(true);
        }
    }

    const handleStop = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const handleReset = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeLeft(Five_Minutes);
        setIsRunning(false);
    };

    return {
        timeLeft,
        handleStart,
        handleStop,
        handleReset
    };
}

export default useTimeCounter;