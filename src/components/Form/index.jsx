import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import InputEmail from '../InputEmail';
import InputPhone from '../InputPhone';

const InputType = (type) => {
  const types = {
    email: InputEmail,
    text: InputText,
    phone: InputPhone,
  };
  const input = types[type] ? types[type] : InputText;
  return input;
};

class Form extends React.Component {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeFieldValue: PropTypes.func.isRequired,
  };

  constructor(args) {
    super(args);
    this.state = {
      valid: false,
    };
    this.formRef = React.createRef();
    this.listenToValidation = this.listenToValidation.bind(this);
  }

  componentDidMount() {
    this.listenToValidation();
  }

  listenToValidation() {
    const form = this.formRef;
    const list = [].slice.call(form.current.querySelectorAll('input[name]'));
    list.forEach((item) => {
      item.addEventListener('keyup', () => {
        let total = 0;
        list.forEach((inp) => {
          if (inp.name && inp.value !== '' && inp.className.indexOf('invalid') === -1) {
            total += 1;
          }
          if (total === list.length) {
            this.setState({ valid: true });
          } else {
            this.setState({ valid: false });
          }
        });
      });
    });
  }

  render() {
    const { fields, changeFieldValue } = this.props;
    const { valid } = this.state;
    const disabled = valid ? '' : 'disabled';
    return (
      <form className="form" action="" ref={this.formRef}>
        {fields.map((item) => {
          const Input = InputType(item.validation);
          return (
            <div key={item.name} className={`${item.classes} row`}>
              <Input {...item} changeFieldValue={changeFieldValue(item.name)} />
            </div>
          );
        })}
        <div className="row row-separationHuge">
          <input className={`${disabled} button button-full button-primary`} type="submit" value="Request" />
        </div>
      </form>
    );
  }
}

export default Form;
