import React from 'react';
import { mount } from 'enzyme';
import { Footer } from '../../../components/UI/Footer/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Footer is rendering', () => {
    expect(footer.length).toEqual(1);
  })
  test('Footer is rendering the first title', () => {
    expect(footer.find('h5').at(0).text()).toEqual('William Santiago Alzate - C7');
  })
  test('Footer is rendering the secons title', () => {
    expect(footer.find('h5').at(1).text()).toEqual('Platzi Master 2021');
  })
})