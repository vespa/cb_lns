import React from 'react';

const InputPhone = () => {
  return (
    <React.Fragment>
      <div className="col col3">
        {/* select field will be placed here */}sssss
      </div>
      <div className="formField-input col col9">
        <div className="input">
          <input type="tel" name="ponenumber" />
          <label htmlFor="ponenumber">Phone number</label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputPhone;
