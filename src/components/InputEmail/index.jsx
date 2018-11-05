import React from 'react';
import * as EmailValidator from 'email-validator';
import Input from '../Input';
import InputContainer from '../InputTextContainer';

export const validation = (e, t) => {
  const { value } = e.target;
  const invalid = !EmailValidator.validate(value) ? 'invalid' : '';
  t.setState({ invalid });
};

const Field = Input(validation, 'Not a valid e-mail');
const Email = props => <InputContainer {...props}><Field {...props} /></InputContainer>;

export default Email;
