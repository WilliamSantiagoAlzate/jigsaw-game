import { SET_IMAGE_SIZE, UPLOAD_IMAGE } from '../../redux/consts';
import reducers from '../../redux/reducers';
import { initialState } from '../../redux/initialState';

//Do test of app reducer
describe('Redux reducers', () => {
  test('Should returns the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  test('Set image size', () => {
    const imageSize = { width: 400, height: 300 };
    expect(
      reducers(initialState, { type: SET_IMAGE_SIZE, payload: imageSize})
    ).toEqual({ 
      ...initialState,
      imageSize 
    });
  });

  test('Upload image', () => {
    const image = 'ImageUrl';
    expect(
      reducers(initialState, { type: UPLOAD_IMAGE, payload: image})
    ).toEqual({
      ...initialState,
      image
    });
  });
});