import React from 'react';
import SelectFlags from '../SelectFlags';
import Input from '../Input';

const InputPhone = (props) => {
  const validation = (e, t) => {
    const { value } = e.target;
    const invalid = value === '' ? 'invalid' : '';
    t.setState({ invalid });
  };
  const Field = Input(validation, 'Phone number cannot be empty');
  return (
    <React.Fragment>
      <div className="col col6">
        <SelectFlags />
      </div>
      <div className="formField-input col col6">
        <div className="input">
          <Field {...props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputPhone;
