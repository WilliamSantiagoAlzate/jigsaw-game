// Import libraries
import { useSelector } from 'react-redux';
// Import components
import { JigsawUploadButtom } from '../../components/Jigsaw/UploadButton/UploadButton';
import { JigsawImage } from '../../components/Jigsaw/Image/Image';

export const ViewJigsaw = () => (
  <>
    <JigsawUploadButtom />
    {useSelector(state => state.image) &&
      <section className="grid grid-cols-1 md:grid-cols-2">
        <JigsawImage />
      </section>
    }
  </>
)