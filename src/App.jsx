import { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

const formatTime = (value) => {
  return String(value).padStart(2, "0");
};

  

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimer(false);
  };

  useEffect(() => {
    let interval = null;

    if (timer) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex text-bold flex-col bg-gray-400 p-8 justify-center align-center text-center font-mono m-8 rounded-3xl min-w-sm h-screen">
      <h1 className="text-6xl">StopWatch</h1>

      <div className="flex flex-row justify-center font-mono m-4 p-5 text-6xl">
        <h2>{formatTime(hours)}:</h2>
        <h2>{formatTime(minutes)}:</h2>
        <h2>{formatTime(seconds)}</h2>
      </div>
      <div>
        <button
          className="p-5 rounded-xl shadow-xl bg-red-400/70 hover:bg-red-400"
          onClick={() => setTimer(!timer)}
        >
          {timer ? "Pause" : "Start"}
        </button>
        <button
          className="p-5 rounded-xl shadow-xl bg-red-200/70 m-2 hover:bg-red-200"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
