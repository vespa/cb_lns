import React from 'react';
import { mount } from 'enzyme';
import selectFlagsOptions from './index';

describe('[Component] SelectFlagsOptions', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<div>{selectFlagsOptions}</div>);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
