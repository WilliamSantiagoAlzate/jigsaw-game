// Import libraries
import { useState } from 'react';
// Import actions
import { uploadImage } from '../redux/actions';

export const useUploadImage = (dispatch) => {
  const [message, setMessage] = useState('');

  const handlerUploadImage = (files) => {
    const file = files[0];
    const reader = new FileReader();
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      setMessage('');
      reader.readAsDataURL(file);
      reader.onload = () => {
        dispatch(uploadImage(reader.result));
      }
    } else {
      setMessage('You only can upload image with png and jpg file format');
    }
  }

  return [message, handlerUploadImage];
}