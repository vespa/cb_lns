import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  fullname, jobdescription, phonenumber, website, address, email,
}) => (
  <div className="businessCard-cards">
    <div className="businessCard-cardBack" />
    <div className="businessCard-cardFront">
      <div>
        <p className="businessCard-cardFront-title">{fullname}</p>
        <p className="businessCard-cardFront-subtitle">{jobdescription}</p>
      </div>
      <div className="businessCard-cardFront-bottom">
        <p className="businessCard-icon-phone">{phonenumber} </p>
        <p className="businessCard-icon-email"> {email} </p>
        <p className="businessCard-icon-website">{website}</p>
        <p className="businessCard-icon-address">{address}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  jobdescription: PropTypes.string.isRequired,
  phonenumber: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
