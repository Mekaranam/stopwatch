import { useEffect, useRef, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const timerRef = useRef(null); 

  const formatTime = (value) => String(value).padStart(2, "0");

  useEffect(() => {
    if (!timer) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    const startTimestamp = Date.now() - elapsedMs;

    timerRef.current = setInterval(() => {
      setElapsedMs(Date.now() - startTimestamp);
    }, 10);

    return () => clearInterval(timerRef.current);
  }, [timer]);

  const handleReset = () => {
    setTimer(false);
    setElapsedMs(0);
  };

  const hours = Math.floor(elapsedMs / 3600000);
  const minutes = Math.floor((elapsedMs % 3600000) / 60000);
  const seconds = Math.floor((elapsedMs % 60000) / 1000);
  const milliseconds = Math.floor((elapsedMs % 1000) / 10);

  return (
    <div className="flex flex-col bg-gray-400 p-8 justify-center items-center text-center font-mono m-8 rounded-3xl h-screen">
      <h1 className="text-6xl mb-6">StopWatch</h1>

      <div className="flex text-6xl mb-6">
        <span>{formatTime(hours)}:</span>
        <span>{formatTime(minutes)}:</span>
        <span>{formatTime(seconds)}:</span>
        <span>{formatTime(milliseconds)}</span>
      </div>

      <div>
        <button
          className="p-5 rounded-xl shadow-xl bg-red-400/70 hover:bg-red-400 mr-2"
          onClick={() => setTimer(!timer)}
        >
          {timer ? "Pause" : "Start"}
        </button>

        <button
          className="p-5 rounded-xl shadow-xl bg-red-200/70 hover:bg-red-200"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
