import configureStore from 'redux-mock-store';
import { SET_IMAGE_SIZE, UPLOAD_IMAGE } from '../../redux/consts';
import { setImageSize, uploadImage } from '../../redux/actions';

describe('Redux actions', () => {
  const mockStore = configureStore();
  
  test('Should run the set image size action', () => {
    const store = mockStore({ });
    const imageSize = { width: 400, height: 300 };
    store.dispatch(setImageSize(imageSize));
    
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(SET_IMAGE_SIZE);
    expect(actions[0].payload).toEqual(imageSize);
  });
  test('Should run the upload image action', () => {
    const store = mockStore({ });
    const image = 'ImageUrl';
    store.dispatch(uploadImage(image));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(UPLOAD_IMAGE);
    expect(actions[0].payload).toEqual(image);
  });
})
