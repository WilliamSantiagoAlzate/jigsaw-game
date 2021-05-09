// Import libraries
import { useState } from 'react';

export const useMovePuzzle = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const mouseDown = (e) => {
    setIsMoving(!isMoving);
  }

  const mouseMove = (e) => {
    if (isMoving) {
      setTranslate({
        x: translate.x + e.movementX,
        y: translate.y + e.movementY
      });
    }
  }
  
  return [translate, isMoving, mouseDown, mouseMove];
}