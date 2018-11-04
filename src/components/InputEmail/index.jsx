import * as EmailValidator from 'email-validator';
import Input from '../Input';

const validation = (e, t) => {
  const { value } = e.target;
  const invalid = !EmailValidator.validate(value) ? 'invalid' : '';
  t.setState({ invalid });
};

export default Input(validation, 'not a valid e-mail');
