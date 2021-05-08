import { useState, useLayoutEffect } from 'react';

export const useWindowResize = (ref) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref) {
        const element = ref.current.getBoundingClientRect();
        setSize([element.width, element.height]);
      } else {
        setSize([window.innerWidth, window.innerHeight]);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [ref]);
  return size;
}