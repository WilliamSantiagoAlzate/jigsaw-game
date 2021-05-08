// Import libraries
import { useState, useLayoutEffect } from 'react';
// Import actions
import { setImageSize } from '../redux/actions';

export const useWindowResize = (dispatch, ref) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref) {
        const element = ref.current.getBoundingClientRect();
        dispatch(setImageSize({ width: element.width, height: 0.7 * element.width }))
        setSize([element.width, element.height]);
      } else {
        setSize([window.innerWidth, window.innerHeight]);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch, ref]);
  return size;
}