import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';

const Form = ({ fields }) => {
  return (
    <form className="form" action="">
      {fields.map((item) => {
        return (
          <div key={item.name} className={`${item.classes} row`}>
            <div className="formField-input active col col12">
              <div className="input">
                <InputText {...item} />
              </div>
            </div>
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
};
// const Form = state => (
//   <form className="form" action="">
//     <div className="row">
//       <div className="formField-input active col col12">
//         <div className="input">
//           <input type="text" name="fullname" value="Laura Sánchez" />
//           <label htmlFor="fullname">Full name</label>
//         </div>
//       </div>
//     </div>
//     <div className="row row-separationMedium">
//       {/* you probably need to add active/focus/disabled classNames */}
//       <div className="formField-input active focus col col12">
//         <div className="input">
//           <input type="text" name="jobdescription" value="Fronte" />
//           <label htmlFor="jobdescription">Job description</label>
//         </div>
//       </div>
//     </div>
//     <div className="row row-separationMedium row-gutterMedium">
//       <div className="col col3">
//         {/* select field will be placed here */}
//       </div>
//       <div className="formField-input col col9">
//         <div className="input">
//           <input type="tel" name="ponenumber" />
//           <label htmlFor="ponenumber">Phone number</label>
//         </div>
//       </div>
//     </div>
//     <div className="row row-separationMedium">
//       <div className="formField-input col col12">
//         <div className="input">
//           <input type="email" name="email" />
//           <label htmlFor="email">Email</label>
//         </div>
//       </div>
//     </div>
//     <div className="row row-separationMedium">
//       <div className="formField-input active disabled col col12">
//         <div className="input">
//           <input type="text" name="website" value="www.cabify.com" />
//           <label htmlFor="website">Website</label>
//         </div>
//       </div>
//     </div>
//     <div className="row row-separationMedium">
//       <div className="formField-input active col col12">
//         <div className="input">
//           <input type="text" name="address" value="Calle Pradillo 42. CP: 28002. Madrid" />
//           <label htmlFor="address">Address</label>
//         </div>
//       </div>
//     </div>
//     <div className="row row-separationHuge">
//       <input className="button button-full button-primary
// disabled" type="submit" value="Request" />
//     </div>
//   </form>
// );

// Form.propTypes = {
//   name: PropTypes.string.isRequired,
//   jobDescription: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   website: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
// };

export default Form;
