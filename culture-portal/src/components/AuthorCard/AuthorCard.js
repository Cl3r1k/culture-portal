import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const AuthorCard = ({ author }) => {
  const {
    fullName, photo, description, birth, death,
  } = author;
  return (
    <div className="author-card">
      <div>
        <img src={photo.link} alt={`${fullName}. PhotoFile`} />
      </div>
      <div className="author-card-info">
        <Typography variant="h4" component="h1" gutterBottom>
          {fullName}
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          {birth.date}
          {' '}
          -
          {death.date}
        </Typography>
        <p>{description}</p>
      </div>
    </div>
  );
};

AuthorCard.propTypes = {
  author: PropTypes.shape({
    fullName: PropTypes.string,
    photo: PropTypes.object,
    description: PropTypes.string,
    birth: PropTypes.object,
    death: PropTypes.object,
  }).isRequired,
};

export default AuthorCard;
