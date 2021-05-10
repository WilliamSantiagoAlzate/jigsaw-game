import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { JigsawUploadButtom } from '../../../components/Jigsaw/UploadButton/UploadButton';

describe('<JigsawUploadButtom />', () => {
  const jigsawUploadButtom = mount(
    <ProviderMock>
      <JigsawUploadButtom />
    </ProviderMock>
  );
  const jigsawUploadButtomShallow = shallow(
    <ProviderMock>
      <JigsawUploadButtom />
    </ProviderMock>
  );
  test('JigsawUploadButtom is rendering', () => {
    expect(jigsawUploadButtomShallow.length).toEqual(1);
  })
  test('JigsawUploadButtom is rendering the button name', () => {
    expect(jigsawUploadButtom.find('label').text()).toEqual('UPLOAD IMAGE');
  })
})