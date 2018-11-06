import React from 'react';
import SelectFlags from '../SelectFlags';
import Input from '../Input';

export const onlyNumbers = (e) => {
  let val = e.target.value;
  val = val.replace(/\D/g, '');
  e.target.value = val;
  return val;
};

export const validation = (e, t) => {
  const { value } = e.target;
  const invalid = value === '' ? 'invalid' : '';
  t.setState({ invalid });
  onlyNumbers(e);
};

const Field = Input(validation, 'Phone need to be filled');

const InputPhone = (props) => {
  return (
    <React.Fragment>
      <div className="col col4">
        <SelectFlags />
      </div>
      <div className="formField-input col col8">
        <div className="input">
          <Field {...props} onKeyUp={onlyNumbers} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputPhone;
