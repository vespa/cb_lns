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
  it('[function] removeSelection: should call change the attribute aria-selected of every child', () => {
    wrapper.setState({ list: [li, li2, li3] });
    const original = (li2.outerHTML);
    wrapper.instance().removeSelection();
    expect(li2.outerHTML).not.toEqual(original);
  });

  it('[function] navigateFromMenu: should call openCloseMenu by keycode 40', () => {
    const originalValue = wrapper.state('open');
    const e = { keyCode: 40 };
    wrapper.instance().navigateFromMenu(e);
    expect(originalValue).not.toEqual(wrapper.state('open'));
  });

  it('[function] navigateFromMenu: should call openCloseMenu by keycode 38', () => {
    const originalValue = wrapper.state('open');
    const e = { keyCode: 38 };
    wrapper.instance().navigateFromMenu(e);
    expect(originalValue).not.toEqual(wrapper.state('open'));
  });

  it('[function] navigateFromMenu: should call navigateFromItem by keycode 38 once', () => {
    wrapper.setState({ open: true, currentOption: li });
    const e = { keyCode: 38 };
    wrapper.instance().navigateFromItem = jest.fn();
    const res = wrapper.instance().navigateFromMenu(e);
    expect(res).toEqual(li);
    expect(wrapper.instance().navigateFromItem.mock.calls.length).toBe(1);
  });

  it('[function] navigateFromMenu: should call navigateFromItem by keycode 38 once', () => {
    wrapper.setState({ open: true });
    wrapper.instance().selectRef = { current: fakeList };
    const e = { keyCode: 38 };
    wrapper.instance().selectOption = jest.fn();
    wrapper.instance().navigateFromMenu(e);
    expect(wrapper.instance().selectOption.mock.calls.length).toBe(1);
  });

  it('[function] navigateFromMenu: should return false', () => {
    wrapper.setState({ open: true });
    const e = { keyCode: 666 };
    expect(wrapper.instance().navigateFromMenu(e)).toBe(false);
  });

  it('[function] openMenuCloseByKey: should call openCloseMenu by keycode 32 once', () => {
    const e = { keyCode: 32 };
    wrapper.instance().openCloseMenu = jest.fn();
    wrapper.instance().openMenuCloseByKey(e);
    expect(wrapper.instance().openCloseMenu.mock.calls.length).toBe(1);
  });
  it('[function] openMenuCloseByKey: should call openCloseMenu by keycode 13 once', () => {
    const e = { keyCode: 13 };
    wrapper.instance().openCloseMenu = jest.fn();
    wrapper.instance().openMenuCloseByKey(e);
    expect(wrapper.instance().openCloseMenu.mock.calls.length).toBe(1);
  });
});

// openCloseMenu(e) {
//   if (e.keyCode === 32 || e.keyCode === 13) this.openCloseMenu();
// }
