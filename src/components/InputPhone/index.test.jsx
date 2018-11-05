import React from 'react';
import { shallow } from 'enzyme';
import Email, { validation, onlyNumbers } from './index';

describe('[Componet] InputPhone', () => {
  const props = {
    name: 'name',
    value: 'value',
    placeholder: 'placeholder',
    changeFieldValue: jest.fn(),
    title: 'title',
    readOnly: false,
    onKeyUp: () => {},
  };

  const e = {
    target: {
      value: '',
    },
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Email {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('[function] should call "validation" and return invalid', () => {
    const t = {
      setState: ({ invalid }) => {
        expect(invalid).toBe('invalid');
      },
    };
    validation(e, t);
  });
  it('[function] should call "validation" and return nothing', () => {
    const t = {
      setState: ({ invalid }) => {
        expect(invalid).toBe('');
      },
    };
    e.target.value = 'ssss';
    validation(e, t);
  });
  it('[function] should call "onlyNumbers" and return only numbers', () => {
    e.target.value = '99s';
    expect(onlyNumbers(e)).toBe('99');
  });
});
