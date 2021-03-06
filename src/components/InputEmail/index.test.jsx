import React from 'react';
import { shallow } from 'enzyme';
import Email, { validation } from './index';

describe('[Componet] Input', () => {
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
      value: 'test',
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
    e.target.value = 'd.v@email.com';
    validation(e, t);
  });
});
