import React from 'react';
import { shallow } from 'enzyme';
import SelectFlags from './index';
/* eslint-env browser */
describe('[Component] SelectFlagsOptions', () => {
  let wrapper;
  let fakeList;
  let li;
  let li2;
  let li3;

  beforeEach(() => {
    wrapper = shallow(<SelectFlags changeArea={() => {}} />);
    fakeList = document.createElement('ul');
    li = document.createElement('li');
    li.setAttribute('value', 'teste');
    li2 = li.cloneNode(true);
    li3 = li.cloneNode(true);
    li.id = '1';
    li2.id = '2';
    li3.id = '3';
    fakeList.appendChild(li);
    fakeList.appendChild(li2);
    fakeList.appendChild(li3);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('[function] navigateFromItem: should return the next sibling', () => {
    const e = { keyCode: 40, target: li2 };
    wrapper.instance().selectOption = (sb) => {
      expect(sb).toEqual(li3);
    };
    wrapper.instance().navigateFromItem(e);
  });
  it('[function] navigateFromItem: should return the previous sibling', () => {
    const e = { keyCode: 38, target: li2 };
    wrapper.instance().selectOption = (sb) => {
      expect(sb).toEqual(li);
    };
    wrapper.instance().navigateFromItem(e);
  });
  it('[function] navigateFromItem: should return the same object', () => {
    const e = { keyCode: 666, target: li2 };
    const res = wrapper.instance().navigateFromItem(e);
    expect(res).toEqual(li2);
  });
  it('[function] selectOption: should call "removeSelection" and "updateArea" once', () => {
    wrapper.instance().removeSelection = jest.fn();
    wrapper.instance().updateArea = jest.fn();
    wrapper.instance().selectOption(li);
    expect(wrapper.instance().removeSelection.mock.calls.length).toBe(1);
    expect(wrapper.instance().updateArea.mock.calls.length).toBe(1);
  });
  it('[function] selectOption: should call changeArea and pass target value', () => {
    const change = ({ target }) => {
      expect(target.getAttribute('value')).toBe('teste');
    };
    wrapper.setProps({ changeArea: change });
    wrapper.instance().selectOption(li);
  });
});