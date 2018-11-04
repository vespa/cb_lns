import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import InputEmail from '../InputEmail';
import InputPhone from '../InputPhone';

const Form = ({ fields, changeFieldValue }) => {
  const InputType = (type) => {
    const types = {
      email: InputEmail,
      text: InputText,
      phone: InputPhone,
    };
    const input = types[type] ? types[type] : InputText;
    return input;
  };
  return (
    <form className="form" action="">
      {fields.map((item) => {
        const Input = InputType(item.validation);
        return (
          <div key={item.name} className={`${item.classes} row`}>
            <Input {...item} changeFieldValue={changeFieldValue(item.name)} />
          </div>
        );
      })}
      <div className="row row-separationHuge">
        <input className="button button-full button-primary disabled" type="submit" value="Request" />
      </div>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFieldValue: PropTypes.func.isRequired,
};

export default Form;
