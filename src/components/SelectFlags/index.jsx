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
      open: false
    };
  }

  render() {
    return (
      <div className="flagSelector" role="listbox" tabIndex="0">
        <div className="currentValue">value </div>
        <ul className="listBox" tabIndex="-1">
          {options}
        </ul>
      </div>
    );
  }
}


export default Select;
