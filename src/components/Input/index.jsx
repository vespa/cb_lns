import React from 'react';
import PropTypes from 'prop-types';

const Input = (validation, message) => class InputClass extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    changeFieldValue: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    readOnly: false,
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
    validation(e, this);
  }

  changeFieldValue(e) {
    const { changeFieldValue } = this.props;
    changeFieldValue(e);
    this.validate(e);
  }

  render() {
    const {
      name, title, value, placeholder, readOnly,
    } = this.props;
    const disabled = !readOnly ? '' : ' disabled';
    const { invalid } = this.state;
    return (
      <div className={`${disabled} formField-input active col col12 `}>
        <div className="input">
          <input
            type="text"
            name={name}
            value={value}
            onBlur={this.validate}
            className={invalid}
            onChange={this.changeFieldValue}
            placeholder={placeholder}
            readOnly={readOnly}
          />
          <label htmlFor={name}>{title}</label>
          {(invalid !== '')
            && <div className="invalid_message"> {message} </div>
          }
        </div>
      </div>);
  }
};

export default Input;
