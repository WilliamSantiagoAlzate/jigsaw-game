import { renderHook } from '@testing-library/react-hooks';
import { useWindowResize } from '../../customHooks/useWindowResize';
import configureStore from 'redux-mock-store';

//Create mock store
const mockStore = configureStore();
const store = mockStore({});

describe('useWindowResize', () => {
  test('Get window size', () => {
    const { result } = renderHook(() => useWindowResize(store.dispatch));
    expect(result.current).toEqual([window.innerWidth, window.innerHeight]);
  });
});