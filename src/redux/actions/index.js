// Import consts
import { UPLOAD_IMAGE, SET_IMAGE_SIZE } from '../consts';

export const uploadImage = payload => ({
  type: UPLOAD_IMAGE,
  payload
});

export const setImageSize = payload => ({
  type: SET_IMAGE_SIZE,
  payload
});