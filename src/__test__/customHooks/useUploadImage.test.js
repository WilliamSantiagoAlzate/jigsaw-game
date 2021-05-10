import { renderHook, act } from '@testing-library/react-hooks';
import { useUploadImage } from '../../customHooks/useUploadImage';
import configureStore from 'redux-mock-store';

//Create mock store
const mockStore = configureStore();
const store = mockStore({});

describe('useUploadImage', () => {
  test('Return file type error', () => {
    const { result } = renderHook(() => useUploadImage(store.dispatch));
    act(() => {
      const handlerUploadImage = result.current[1];
      const file = new Blob([""], { type: 'application/pdf'});
      handlerUploadImage([file])
    })
    expect(result.current[0]).toEqual('You only can upload image with png and jpg file format');
  });
  test('Save image', () => {
    const { result } = renderHook(() => useUploadImage(store.dispatch));
    act(() => {
      const handlerUploadImage = result.current[1];
      const file = new Blob([""], { type: 'image/png'});
      handlerUploadImage([file]);
    })
    expect(result.current[0]).toEqual('');
  });
});
