// Import libraries
import { useSelector } from 'react-redux';
// Import custom hooks
import { useGetTotalPuzzles } from '../../../customHooks/useGetTotalPuzzles';
// Import components
import { JigsawPuzzle } from '../Puzzle/Puzzle';

export const JigsawPuzzleContainer = () => {
  const puzzles = useSelector(state => state.puzzles);
  const puzzleList = useGetTotalPuzzles(puzzles);

  const renderPuzzles = () => {
    let x = -1;
    let y = -1;
    return puzzleList.map((item, index) => {
      x++
      if (index % puzzles.x === 0) {
        x = 0;
        y++;
      }
      return (
        <JigsawPuzzle key={item} puzzle={[x, y]} randomPosition={Math.random()}/>
      )
    })
  }

  return (
    <section className="mx-16 relative">
      {renderPuzzles()}
    </section>
  )
}