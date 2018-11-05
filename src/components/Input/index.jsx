import React from 'react';
import PropTypes from 'prop-types';

const Input = (validation, message) => class InputClass extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    changeFieldValue: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    onKeyUp: PropTypes.func,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    readOnly: false,
    onKeyUp: () => {},
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
    this.validate(e);
    changeFieldValue(e);
  }

  render() {
    const {
      name, value, placeholder, readOnly, onKeyUp,
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
          readOnly={readOnly}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyUp}
        />
        {(invalid !== '')
            && <div className="invalid_message"> {message} </div>
          }
      </React.Fragment>);
  }
};

export default Input;
