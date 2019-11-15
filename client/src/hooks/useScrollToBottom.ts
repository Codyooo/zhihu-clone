import { useEffect } from 'react';
import { throttle } from '../utils/delay';

const useScrollToBottom = (fn: () => void) => {
  useEffect(() => {
    const scrollToBottom = () => {
      const {
        documentElement: { scrollHeight, scrollTop }
      } = document;

      if (scrollTop + window.innerHeight > scrollHeight - 200) {
        fn();
      }
    };

    const throttleListener = throttle(scrollToBottom, 300);

    window.addEventListener('scroll', throttleListener);
    return () => window.removeEventListener('scroll', throttleListener);
  });
};

export default useScrollToBottom;
