import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="team-card">
      <div className="team-card__image-wrapper">
        <img src={image} alt={name} className="team-card__image" />
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
      <div className="team-card__socials">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
};

export default TeamCard;
