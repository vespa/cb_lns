import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  name, jobDescription, phone, website, address,
}) => (
  <div className="businessCard-cards">
    <div className="businessCard-cardBack" />
    <div className="businessCard-cardFront">
      <div>
        <p className="businessCard-cardFront-title">{name}</p>
        <p className="businessCard-cardFront-subtitle">{jobDescription}</p>
      </div>
      <div className="businessCard-cardFront-bottom">
        <p className="businessCard-icon-phone">{phone} </p>
        <p className="businessCard-icon-email" />
        <p className="businessCard-icon-website">{website}</p>
        <p className="businessCard-icon-address">{address}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Card;
