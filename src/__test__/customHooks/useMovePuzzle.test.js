import { renderHook, act } from '@testing-library/react-hooks';
import { useMovePuzzle } from '../../customHooks/useMovePuzzle';

describe('useMovePuzzle', () => {
  test('Set puzzle in moving mode', () => {
    const { result } = renderHook(() => useMovePuzzle());
    act(() => {
      const mouseDown = result.current[2];
      mouseDown();
    })
    expect(result.current[1]).toEqual(true);
  });
  test('Move puzzle', () => {
    const { result } = renderHook(() => useMovePuzzle());
    act(() => {
      const mouseDown = result.current[2];
      mouseDown();
    })
    act(() => {
      const mouseMove = result.current[3];
      mouseMove({
        movementX: 15,
        movementY: 10
      });
    })
    expect(result.current[0]).toEqual({ x: 15, y: 10});
  });
  test('Move puzzle before mouseDown', () => {
    const { result } = renderHook(() => useMovePuzzle());
    act(() => {
      const mouseMove = result.current[3];
      mouseMove({
        movementX: 15,
        movementY: 10
      });
    })
    expect(result.current[0]).toEqual({ x: 0, y: 0});
  });
});
