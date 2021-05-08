// Import libraries
import { useSelector } from 'react-redux';
// Import custom hooks
import { useGetTotalPuzzles } from '../../../customHooks/useGetTotalPuzzles';
// Import components
import { JigsawPuzzle } from '../Puzzle/Puzzle';

export const JigsawPuzzleContainer = () => {
  const puzzles = useSelector(state => state.puzzles);
  const puzzleList = useGetTotalPuzzles(puzzles);

  return (
    <section className="mx-16 relative">
      {puzzleList.map(item => (
        <JigsawPuzzle key={item} />
      ))}
    </section>
  )
}