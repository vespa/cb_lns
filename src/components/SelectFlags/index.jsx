import React from 'react';
import PropTypes from 'prop-types';
import options from '../SelectFlagsOptions';

class Select extends React.Component {
  static propTypes = {
    changeArea: PropTypes.func,
  }

  static defaultProps = {
    changeArea: () => {},
  }

  constructor(args) {
    super(args);
    const area = args.area || ' ';
    this.state = {
      currentValue: area,
      currentOption: null,
      open: false,
      list: [],
    };
    this.openMenuCloseByKey = this.openMenuCloseByKey.bind(this);
    this.openCloseMenu = this.openCloseMenu.bind(this);
    this.navigateFromMenu = this.navigateFromMenu.bind(this);
    this.navigateFromItem = this.navigateFromItem.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.checkIfItHasStartSelection = this.checkIfItHasStartSelection.bind(this);
    this.selectRef = React.createRef();
    this.flagSelector = React.createRef();
  }

  componentDidMount() {
    this.configureOptions();
  }

  configureOptions() {
    const { selectRef: { current } } = this;
    if (!current) return false;
    const list = [].slice.call(current.querySelectorAll('[aria-selected]'));
    this.setState({ list }, () => {
      this.checkIfItHasStartSelection();
    });
    list.forEach((item) => {
      item.addEventListener('keyup', (e) => {
        e.stopPropagation();
        this.navigateFromItem(e);
      });
      item.addEventListener('keydown', (e) => {
        e.stopPropagation();
        if (e.keyCode === 13) {
          this.openCloseMenu();
          this.flagSelector.current.focus();
        }
      });
      item.addEventListener('focus', (e) => {
        e.stopPropagation();
        this.selectOption(e.target);
        this.flagSelector.current.focus();
      });
    });
    return list;
  }

  checkIfItHasStartSelection() {
    const { currentValue, list } = this.state;
    list.forEach((item) => {
      if (Number(item.getAttribute('value')) === currentValue) {
        item.setAttribute('aria-selected', 'true');
        this.setState({ currentOption: item });
      }
    });
  }

  openMenuCloseByKey(e) {
    if (e.keyCode === 32 || e.keyCode === 13) this.openCloseMenu();
  }

  openCloseMenu() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  navigateFromMenu(e) {
    const { open, currentOption } = this.state;
    if (e.keyCode === 40 || e.keyCode === 38) {
      if (!open) {
        this.openCloseMenu();
        return open;
      }
      if (currentOption) {
        this.navigateFromItem(e, currentOption);
        return currentOption;
      }
      const menu = this.selectRef.current;
      const option = menu.querySelector('[aria-selected]');
      this.selectOption(option);
      return option;
    }
    return false;
  }

  removeSelection() {
    const { list } = this.state;
    list.forEach((item) => {
      item.setAttribute('aria-selected', 'false');
    });
  }

  updateArea() {
    const { currentOption } = this.state;
    const { changeArea } = this.props;
    const target = currentOption;
    changeArea({ target });
  }

  selectOption(option) {
    if (option) {
      this.removeSelection();
      const currentValue = option.getAttribute('value');
      option.setAttribute('aria-selected', 'true');
      option.focus();
      this.setState({ currentValue, currentOption: option }, () => {
        this.updateArea();
      });
    }
  }

  navigateFromItem(e, item) {
    const { keyCode } = e;
    let { target } = e;
    let sibling;
    target = item || target;
    switch (keyCode) {
      case 40:
        sibling = target.nextElementSibling;
        this.selectOption(sibling);
        return sibling;
      case 38:
        sibling = target.previousElementSibling;
        this.selectOption(sibling);
        return sibling;
      default:
        return target;
    }
  }

  render() {
    const { open, currentValue } = this.state;
    const style = open ? { display: 'block' } : { display: 'none' };
    return (
      <div
        ref={this.flagSelector}
        className="flagSelector"
        role="listbox"
        tabIndex="0"
        onKeyDown={this.openMenuCloseByKey}
        onKeyUp={this.navigateFromMenu}
        onClick={this.openCloseMenu}
      >
        <div className="currentValue"> + {currentValue} </div>
        <ul className="listBox" tabIndex="-1" ref={this.selectRef} style={style}>
          {options}
        </ul>
        <input type="hidden" name="area" value={`+${currentValue}`} />
      </div>
    );
  }
}


export default Select;
