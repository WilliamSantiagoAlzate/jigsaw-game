import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  const app = shallow(<App />);
  test('App is rendering', () => {
    expect(app.length).toEqual(1);
  })
})