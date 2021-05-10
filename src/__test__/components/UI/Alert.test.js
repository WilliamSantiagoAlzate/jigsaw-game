import React from 'react';
import { mount, shallow } from 'enzyme';
import { Alert } from '../../../components/UI/Alert/Alert';

describe('<Alert />', () => {
  const alert = mount(<Alert />);
  const alertWithMessage = shallow(<Alert message="This is a message!" />);
  test('Alert is rendering', () => {
    expect(alert.length).toEqual(1);
  })
  test('Alert is rendering the title', () => {
    expect(alertWithMessage.find('h5').text()).toEqual('This is a message!');
  })
})