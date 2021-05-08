// Import libraries
import { useSelector } from 'react-redux';
// Import styles
import './Puzzle.css';

export const JigsawPuzzle = () => {
  const puzzles = useSelector(state => state.puzzles);
  const image = useSelector(state => state.image);
  const imageHeight = useSelector(state => state.imageSize.height);
  const imageWidth = useSelector(state => state.imageSize.width);
  const puzzleHeight = imageHeight / puzzles.y;
  const puzzleWidth = imageWidth / puzzles.x;
  const top = (imageHeight - puzzleHeight) * Math.random();
  const left = (imageWidth - puzzleWidth) * Math.random();

  return (
    <div
      className="puzzle" 
      style={{
        top: `${top}px`, 
        left: `${left}px`,
        height: `${puzzleHeight}px`,
        width: `${puzzleWidth}px`,
        backgroundImage: `url(${image})`,
        backgroundPositionX: `-${left}px`,
        backgroundPositionY: `-${top}px`,
        backgroundSize: `${imageWidth}px ${imageHeight}px` 
      }}
    ></div>
  )  
}