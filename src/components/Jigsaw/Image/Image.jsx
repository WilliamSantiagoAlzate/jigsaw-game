// Import libraries
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
// Import custom hooks
import { useWindowResize } from '../../../customHooks/useWindowResize';
// Import styles
import './Image.css';

export const JigsawImage = () => {
  const ref = useRef();
  const image = useSelector(state => state.image);
  const [showImage, setShowImage] = useState(true);
  const [width] = useWindowResize(ref);
  return (
    <section className="px-16">
      {showImage ?
        <img src={image} width={`${width}`} height={`${width * .7}`} alt="jigsaw view" className="jigsaw-image"/>
        :
        <canvas width={`${width}`} height={`${width * .7}`} className="jigsaw-result-container"></canvas>
      }
      <section className="w-full py-8 flex justify-center" ref={ref}>
        <button className="button" onClick={() => setShowImage(!showImage)}>
          {showImage ? 'VIEW PUZZLE' : 'VIEW IMAGE'}
        </button>
      </section>
    </section>
  )
}