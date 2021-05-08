// Import libraries
import { useDispatch } from 'react-redux';
// Import custom hooks
import { useUploadImage } from '../../../customHooks/useUploadImage';
// Import components
import { Alert } from '../../UI/Alert/Alert';

export const JigsawUploadButtom = () => {
  const dispatch = useDispatch();
  const [alertMessage, handlerUploadImage] = useUploadImage(dispatch);

  return (
    <section className="container mx-auto px-4 md:px-0 flex flex-col items-center py-12">
      <label htmlFor="upload-image" className="button button_upload">UPLOAD IMAGE</label>
      <input 
        id="upload-image" 
        type="file" 
        className="hidden" 
        onChange={({ target }) => handlerUploadImage(target.files)}
      />
      {alertMessage.length > 0 && <Alert message={alertMessage} />}
    </section>
  )
}