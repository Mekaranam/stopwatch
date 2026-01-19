import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const Stopwatch = () => {
  const [elapsedMs, setElapsedMs] = useState(0);
  const intervalRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const start = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setElapsedMs(prev => prev + 10);
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setElapsedMs(0);
  };

  // Derived time (no extra state!)
  const hours = Math.floor(elapsedMs / 3600000);
  const minutes = Math.floor((elapsedMs % 3600000) / 60000);
  const seconds = Math.floor((elapsedMs % 60000) / 1000);
  const milliseconds = Math.floor((elapsedMs % 1000) / 10);

  return (
    <div className="container">
      <h1>
        {hours} : {minutes} : {seconds} : {milliseconds}
      </h1>

      <div className="buttons">
        <button className="start" onClick={start}>Start</button>
        <button className="stop" onClick={stop}>Stop</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
