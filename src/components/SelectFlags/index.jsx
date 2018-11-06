import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlagIcon from 'react-flag-kit/lib/FlagIcon';

const Flag = ({ country, number, name }) => (
  <Fragment>
    <div className="col3">
      <FlagIcon code={country} size={23} />
    </div>
    <div className="col7" style={{ padding: '2px' }}>
      {name}
    </div>
    <div className="col2 text-right">
      {number}
    </div>
  </Fragment>
);

Flag.propTypes = {
  country: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const FlagOption = options => options.map(item => (
  <li key={item.number} value={item.number} className="row" aria-selected="false" role="option" tabIndex="-1">
    <Flag country={item.country} number={item.number} name={item.name} />
  </li>));


const options = FlagOption([
  { country: 'BR', number: '+55', name: 'Brazil' },
  { country: 'CL', number: '+56', name: 'Chile' },
  { country: 'CO', number: '+57', name: 'Colombia' },
  { country: 'ES', number: '+34', name: 'Spain' },
  { country: 'PT', number: '+351', name: 'Portugal' },
  { country: 'US', number: '+1', name: 'USA' },
]);


class Select extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      currentValue: 0,
      open: false,
    };
    this.openMenuCloseByKey = this.openMenuCloseByKey.bind(this);
    this.openCloseMenu = this.openCloseMenu.bind(this);
    this.navigateFromMenu = this.navigateFromMenu.bind(this);
    this.navigateFromItem = this.navigateFromItem.bind(this);
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    const { selectRef: { current } } = this;
    const list = [].slice.call(current.querySelectorAll('[aria-selected]'));
    list.forEach((item) => {
      item.addEventListener('keyup', (e) => {
        e.stopPropagation();
        this.navigateFromItem(e);
      });
      item.addEventListener('keydown', (e) => {
        e.stopPropagation();
        // this.navigateFromItem(e);
      });
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
    console.log(e.target);
    if (e.keyCode === 40) {
      const menu = this.selectRef.current;
      menu.querySelector('[aria-selected]').focus();
    }
  }

  navigateFromItem(e) {
    const { keyCode, target } = e;
    let sibling;
    switch (keyCode) {
      case 40:
        sibling = target.nextElementSibling;
        if (sibling) sibling.focus();
        break;
      case 38:
        sibling = target.previousElementSibling;
        if (sibling) sibling.focus();
        break;
      default:
        break;
    }
  }


  render() {
    const { open } = this.state;
    const style = open ? { display: 'block' } : { display: 'none' };
    return (
      <div
        className="flagSelector"
        role="listbox"
        tabIndex="0"
        onKeyDown={this.openMenuCloseByKey}
        onKeyUp={this.navigateFromMenu}
        onClick={this.openCloseMenu}
      >
        <div className="currentValue">value </div>
        <ul className="listBox" tabIndex="-1" ref={this.selectRef} style={style}>
          {options}
        </ul>
      </div>
    );
  }
}


export default Select;
