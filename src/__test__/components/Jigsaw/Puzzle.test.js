import React from 'react';
import { shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { JigsawPuzzle } from '../../../components/Jigsaw/Puzzle/Puzzle';

describe('<JigsawPuzzle />', () => {
  const jigsawPuzzleShallow = shallow(
    <ProviderMock>
      <JigsawPuzzle />
    </ProviderMock>
  );
  test('JigsawPuzzle is rendering', () => {
    expect(jigsawPuzzleShallow.length).toEqual(1);
  })
})