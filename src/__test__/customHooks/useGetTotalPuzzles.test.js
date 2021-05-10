import { renderHook } from '@testing-library/react-hooks';
import { useGetTotalPuzzles } from '../../customHooks/useGetTotalPuzzles';

describe('useGetTotalPuzzles', () => {
  test('Get total puzzles', () => {
    const puzzles = { x: 2, y: 2 };
    const { result } = renderHook(() => useGetTotalPuzzles(puzzles));
    expect(result.current).toEqual([0, 1, 2, 3]);
  });
});
