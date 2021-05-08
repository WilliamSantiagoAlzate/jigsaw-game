// Import libraries
import { useState, useEffect } from 'react';

export const useGetTotalPuzzles = (puzzles) => {
  const [totalPuzzles, setTotalPuzzles] = useState([]);

  useEffect(() => {
    const total = puzzles.x * puzzles.y;
    for (let index = 0; index < total; index++) {
      setTotalPuzzles(totalPuzzles => [...totalPuzzles, index])
    }
  }, [puzzles])

  return totalPuzzles;
} 