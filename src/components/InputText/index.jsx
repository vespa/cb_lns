import Input from '../Input';

const validation = (e, t) => {
  const { value } = e.target;
  const invalid = value === '' ? 'invalid' : '';
  t.setState({ invalid });
};

export default Input(validation, 'This field cannot be empty');
