import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { JigsawImage } from '../../../components/Jigsaw/Image/Image';

describe('<JigsawImage />', () => {
  const jigsawImage = mount(
    <ProviderMock>
      <JigsawImage />
    </ProviderMock>
  );
  const jigsawImageShallow = shallow(
    <ProviderMock>
      <JigsawImage />
    </ProviderMock>
  );
  test('JigsawImage is rendering', () => {
    expect(jigsawImageShallow.length).toEqual(1);
  })
  test('JigsawImage is rendering the button name when doesnt show image', () => {
    expect(jigsawImage.find('button').text()).toEqual('VIEW IMAGE');
  })
  test('JigsawImage is rendering the button name when show image', () => {
    jigsawImage.find('button').simulate('click');
    expect(jigsawImage.find('button').text()).toEqual('VIEW PUZZLE');
  })
})