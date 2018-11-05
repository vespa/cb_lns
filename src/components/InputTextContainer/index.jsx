import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = ({ readOnly, children }) => {
  const disabled = !readOnly ? '' : ' disabled';
  return (
    <div className={`${disabled} formField-input active col col12 `}>
      <div className="input">
        {children}
      </div>
    </div>
  );
};

InputContainer.propTypes = {
  readOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

InputContainer.defaultProps = {
  readOnly: false,
};

export default InputContainer;
