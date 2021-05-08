// Import libraries
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Import components
import { Alert } from '../../UI/Alert/Alert';
// Import actions
import { uploadImage } from '../../../redux/actions';

export const JigsawUploadButtom = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handlerUploadImage = (files) => {
    const file = files[0]
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      setMessage('');
      dispatch(uploadImage(file));
    } else {
      setMessage('You only can upload image with png and jpg file format');
    }
  }

  return (
    <section className="container mx-auto px-4 md:px-0 flex flex-col items-center py-12">
      <label htmlFor="upload-image" className="button button_upload">UPLOAD IMAGE</label>
      <input 
        id="upload-image" 
        type="file" 
        className="hidden" 
        onChange={({ target }) => handlerUploadImage(target.files)}
      />
      {message.length > 0 && <Alert message={message} />}
    </section>
  )
}