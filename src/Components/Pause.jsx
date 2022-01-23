import React, { useEffect } from "react";

export default function Pause({ refer }) {
  useEffect(() => {
    return () => {
      console.log("akas");
      clearInterval(refer.current);
      refer.current = null;
    };
  }, []);
  const pauseTimer = () => {
    clearInterval(refer.current);
    refer.current = null;
  };

  return <button onClick={pauseTimer}>pause</button>;
}
