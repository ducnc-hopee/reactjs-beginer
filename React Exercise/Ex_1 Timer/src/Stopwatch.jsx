import React, { useState, useEffect, useRef } from 'react'

function CountdownTimer() {
    const [isRunning, setIsRunning] = useState(false) /* track whether stopwatchis active*/
    const [timeLeft, setTimeLeft] = useState(5 * 60 * 1000); // 5 minutes
    const intervalIdRef = useRef(null); 
    const endTimeRef = useRef(0);

    useEffect(() => { /* runs when timer starts is running == true, it sets up the interval */ /* when timer stops or components unmounts it clears interval  */
   if (isRunning) {
    intervalIdRef.current = setInterval(() => {
      setTimeLeft(prev => { /* start running this anonymous function every 100 sec */
        if (prev <= 100) {
          clearInterval(intervalIdRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 100;
      });
    }, 100);
  }

  return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

    function start() {
        setIsRunning(true);
        /*console.log(startTimeRef.current);*/
    }

    function stop() { /*to stop the stopwatch */
        setIsRunning(false);
    }

    function reset() {
        setTimeLeft(5*60*1000);
        setIsRunning(false);

    }

    function formatTime(ms) {
        const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
        const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
        
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime(timeLeft)}</div>
            <div className="controls">
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        </div>

    );
}
export default CountdownTimer;

/*USEState*/
/* useRef & useState both React hooks that manages data within functional compoents  */
// /* useState */ : manages stateful values that trigger re-renders when they changeused for data that affect UI components
/*Suitable for managing form inputs, toggles, dynamic data, and any UI elements that need to react to changes. */

/*UseRef*/
/* creates a mutable object that persists across renders */
/* Does not trigger re-renders when value changes*/
/* used for storing values that does not change during rerender*/