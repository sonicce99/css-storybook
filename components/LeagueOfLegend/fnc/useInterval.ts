import React, { useEffect, useRef } from "react";

const useInterval = (
  time: number,
  reduceTime: () => void,
  resetTime: () => void,
  delay: number
) => {
  const savedCallback = useRef(reduceTime);

  useEffect(() => {
    if (time === 0) {
      savedCallback.current = resetTime;
    } else {
      savedCallback.current = reduceTime;
    }
  }, [reduceTime, resetTime, time]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
