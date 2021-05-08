// Import consts
import { UPLOAD_IMAGE } from '../consts';

export const uploadImage = payload => ({
  type: UPLOAD_IMAGE,
  payload
});