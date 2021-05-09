// Import libraries
import { useSelector } from 'react-redux';
// Import custom hooks
import { useMovePuzzle } from '../../../customHooks/useMovePuzzle';
// Import styles
import './Puzzle.css';

export const JigsawPuzzle = ({ randomPosition, puzzle }) => {
  const puzzles = useSelector(state => state.puzzles);
  const image = useSelector(state => state.image);
  const imageHeight = useSelector(state => state.imageSize.height);
  const imageWidth = useSelector(state => state.imageSize.width);
  const puzzleHeight = imageHeight / puzzles.y;
  const puzzleWidth = imageWidth / puzzles.x;
  const top = (imageHeight - puzzleHeight) * randomPosition;
  const left = (imageWidth - puzzleWidth) * randomPosition;
  const [translate, isMoving, mouseDown, mouseMove] = useMovePuzzle();

  return (
    <div
      onPointerDown={mouseDown}
      onPointerMove={mouseMove}
      className="puzzle" 
      style={{
        top: `${top}px`, 
        left: `${left}px`,
        height: `${puzzleHeight}px`,
        width: `${puzzleWidth}px`,
        backgroundImage: `url(${image})`,
        backgroundPositionX: `-${puzzle[0]*puzzleWidth}px`,
        backgroundPositionY: `-${puzzle[1]*puzzleHeight}px`,
        backgroundSize: `${imageWidth}px ${imageHeight}px`,
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        zIndex: isMoving ? '1' : '0'
      }}
    ></div>
  )  
}