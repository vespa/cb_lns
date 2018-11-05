import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = ({
  readOnly, children, name, title,
}) => {
  const disabled = !readOnly ? '' : ' disabled';
  return (
    <div className={`${disabled} formField-input active col col12 `}>
      <div className="input">
        {children}
        <label htmlFor={name}>{title}</label>
      </div>
    </div>
  );
};

InputContainer.propTypes = {
  readOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

InputContainer.defaultProps = {
  readOnly: false,
};

export default InputContainer;
