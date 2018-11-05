import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import FlagIcon from 'react-flag-kit/lib/FlagIcon';

const Flag = ({ country, number, name }) => (
  <div className="row">
    <div className="col2" style={{ padding: '5px' }}>
      <div style={{
        borderRadius: '50%',
        overflow: 'hidden',
        height: '15px',
        width: '15px',
      }}
      >
        <div style={{ position: 'relative', margin: '-4px 0 0 -4px' }}>
          <FlagIcon code={country} size={23} />
        </div>
      </div>
    </div>
    <div className="col10" style={{ padding: '2px' }}>
      {number} {name}
    </div>
  </div>
);

Flag.propTypes = {
  country: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const FlagOption = options => options.map(item => (
  {
    value: item.number,
    label: <Flag country={item.country} number={item.number} name={item.name} />,
  }));

const options = FlagOption([
  { country: 'BR', number: '+55', name: 'Brazil' },
  { country: 'CL', number: '+56', name: 'Chile' },
  { country: 'CO', number: '+57', name: 'Colombia' },
  { country: 'ES', number: '+34', name: 'Spain' },
  { country: 'PT', number: '+351', name: 'Portugal' },
  { country: 'US', number: '+1', name: 'USA' },
]);

export default () => <Select options={options} isSearchable={false} name="area" />;
