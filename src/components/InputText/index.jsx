import React from 'react';
import Input from '../Input';
import InputContainer from '../InputTextContainer';

const validation = (e, t) => {
  const { value } = e.target;
  const invalid = value === '' ? 'invalid' : '';
  t.setState({ invalid });
};
const Field = Input(validation, 'This field cannot be empty');
const Text = props => <InputContainer {...props}><Field {...props} /></InputContainer>;

export default Text;
