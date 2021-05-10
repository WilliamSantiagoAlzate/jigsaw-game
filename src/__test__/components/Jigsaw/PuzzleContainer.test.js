import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { JigsawPuzzleContainer } from '../../../components/Jigsaw/PuzzleContainer/PuzzleContainer';
import { initialState } from '../../../redux/initialState';

describe('<JigsawPuzzleContainer />', () => {
  const jigsawPuzzleContainer = mount(
    <ProviderMock>
      <JigsawPuzzleContainer />
    </ProviderMock>
  );
  const jigsawPuzzleContainerShallow = shallow(
    <ProviderMock>
      <JigsawPuzzleContainer />
    </ProviderMock>
  );
  test('JigsawPuzzleContainer is rendering', () => {
    expect(jigsawPuzzleContainerShallow.length).toEqual(1);
  })
  test('JigsawPuzzleContainer is rendering all puzzles', () => {
    const puzzleSize = initialState.puzzles.x * initialState.puzzles.y;
    expect(jigsawPuzzleContainer.find('section').children().length).toEqual(puzzleSize);
  })
})