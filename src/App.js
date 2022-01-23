import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import Pause from "./Components/Pause";
export default function App() {
  const [state, setstate] = useState(0);
  const timerRef = useRef(null);
  // useEffect(() => {
  //   return () => {
  //     console.log("aks");
  //   };
  // }, []);
  const startTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setstate((prev) => prev + 1);
      }, 1000);
    }
  };
  // const pauseTimer = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null;
  // };
  const resetTimer = () => {
    setstate(0);
    startTimer();
  };
  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>{state}</h2>
      <button onClick={startTimer}>start</button>
      {/* <button onClick={pauseTimer}>pause</button> */}
      <Pause refer={timerRef} />
      <button onClick={resetTimer}>reset</button>
    </div>
  );
}
