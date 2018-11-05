import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('[Componet] Input', () => {
  const validation = jest.fn();
  const props = {
    name: 'name',
    value: 'value',
    placeholder: 'placeholder',
    changeFieldValue: jest.fn(),
    readOnly: false,
    onKeyUp: () => {},
  };
  let wrapper;
  beforeEach(() => {
    const Field = Input(validation, 'Not a valid e-mail');
    wrapper = shallow(<Field {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with invalid message', () => {
    wrapper.setState({ invalid: 'invalid' });
    wrapper.update();
    expect(wrapper.html()).toEqual('<input type="text" name="name" value="value" class="invalid" placeholder="placeholder" autoComplete="off"/><div class="invalid_message"> Not a valid e-mail </div><div class="invalid_mark"> ! </div>');
  });
  it('[function] should call "validation"', () => {
    wrapper.instance().validate({});
    expect(validation.mock.calls.length).toBe(1);
  });
  it('[function] should call "changeFieldValue"', () => {
    wrapper.instance().changeFieldValue({});
    expect(props.changeFieldValue.mock.calls.length).toBe(1);
  });
});
