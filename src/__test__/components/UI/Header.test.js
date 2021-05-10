import React from 'react';
import { mount } from 'enzyme';
import { Hearder } from '../../../components/UI/Header/Header';

describe('<Hearder />', () => {
  const hearder = mount(<Hearder />);
  test('Hearder is rendering', () => {
    expect(hearder.length).toEqual(1);
  })
  test('Hearder is rendering the title', () => {
    expect(hearder.find('h1').text()).toEqual('JIGSAW GAME');
  })
})