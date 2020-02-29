import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const AuthorInfo = (props) => {
  const { card } = props;
  return (
    <div className="author-card">
      <div className="image-wrap">
        <img
          className="author-card__photo"
          src={card.photo.link}
          alt="portrait"
        />
      </div>
      <div className="author-card-info">
        <Typography variant="h4" component="h3" gutterBottom>
          {card.fullName}
        </Typography>
        <div className="author-card__years">
          <Typography variant="h6" component="p" gutterBottom>
            {`${card.birth.date} - ${card.death.date}`}
          </Typography>
        </div>
        <p className="author-card__description">{card.description}</p>
      </div>
    </div>
  );
};

AuthorInfo.propTypes = {
  card: PropTypes.shape({
    fullName: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.object,
    birth: PropTypes.object,
    death: PropTypes.object,
  }).isRequired,
};


export default AuthorInfo;
