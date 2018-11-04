import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    changeFieldValue: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  constructor(arg) {
    super(arg);
    this.state = {
      invalid: '',
    };
    this.validate = this.validate.bind(this);
  }

  validate(e) {
    const { value } = e.target;
    const invalid = value === '' ? 'invalid' : '';
    this.setState({ invalid });
  }

  render() {
    const {
      name, title, value, changeFieldValue,
    } = this.props;
    const { invalid } = this.state;
    return (
      <React.Fragment>
        <input
          type="text"
          name={name}
          value={value}
          onBlur={this.validate}
          className={invalid}
          onChange={changeFieldValue}
        />
        <label htmlFor={name}>{title}</label>
      </React.Fragment>);
  }
}

export default InputText;
