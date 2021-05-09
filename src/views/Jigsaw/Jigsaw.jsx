// Import libraries
import { useSelector } from 'react-redux';
// Import components
import { Alert } from '../../components/UI/Alert/Alert';
import { JigsawUploadButtom } from '../../components/Jigsaw/UploadButton/UploadButton';
import { JigsawImage } from '../../components/Jigsaw/Image/Image';
import { JigsawPuzzleContainer } from '../../components/Jigsaw/PuzzleContainer/PuzzleContainer';

export const ViewJigsaw = () => (
  <>
    <JigsawUploadButtom />
    {useSelector(state => state.image) ?
      <>
        <section className="container mx-auto px-4 md:px-0 flex justify-center mb-8">
          <Alert message={'To move the pieces: click to select -> move -> click to drop, please move the pieces slowly'}/>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <JigsawImage />
          <JigsawPuzzleContainer />
        </section>
      </>
      :
      <section className="container mx-auto px-4 md:px-0">
        <Alert message={'This is a fun game, where you can solve a puzzle with your own images. You only can upload image with png and jpg file format. ¡Click the button to start!'}/>
      </section>
    }
  </>
)