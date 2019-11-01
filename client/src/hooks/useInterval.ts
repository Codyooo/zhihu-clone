import { useRef, useEffect } from 'react';

export const useInterval = (fn: Function, delay: number) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = fn;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, []);
};
