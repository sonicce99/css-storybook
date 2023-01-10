import { useEffect, useRef } from "react";

const useInterval = (
  callback: () => void,
  currPage: number,
  maxPage: number,
  resetCurrPage: () => void,
  autoplay: boolean,
  delay: number | undefined
) => {
  const savedCallback = useRef(callback);
  const savedCurrPage = useRef<number>(currPage);

  useEffect(() => {
    if (autoplay) {
      savedCallback.current = callback;
    }
  }, [autoplay, callback]);

  useEffect(() => {
    if (autoplay) {
      savedCurrPage.current = currPage;
    }
  }, [autoplay, currPage]);

  useEffect(() => {
    if (autoplay) {
      if (delay !== undefined) {
        let id = setInterval(function tick() {
          if (savedCurrPage.current >= maxPage) {
            // clearInterval(id);
            resetCurrPage();
          }
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }
    }
  }, [autoplay, delay, maxPage, resetCurrPage]);
};

export default useInterval;
