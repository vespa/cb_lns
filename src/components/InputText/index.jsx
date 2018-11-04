import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    changeFieldValue: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
  }

  constructor(arg) {
    super(arg);
    this.state = {
      invalid: '',
    };
    this.validate = this.validate.bind(this);
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }

  validate(e) {
    const { value } = e.target;
    const invalid = value === '' ? 'invalid' : '';
    this.setState({ invalid });
  }

  changeFieldValue(e) {
    const { changeFieldValue } = this.props;
    changeFieldValue(e);
    this.validate(e);
  }

  render() {
    const {
      name, title, value, placeholder,
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
          onChange={this.changeFieldValue}
          placeholder={placeholder}
        />
        <label htmlFor={name}>{title}</label>
        {(invalid !== '')
          && <div className="invalid_message"> This field cannot be empty </div>
        }
      </React.Fragment>);
  }
}

export default InputText;
