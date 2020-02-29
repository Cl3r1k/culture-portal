import React from 'react';
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
        <p className="author-card__years">
          <Typography variant="h6" component="p" gutterBottom>
            {`${card.birth.date} - ${card.death.date}`}
          </Typography>
        </p>
        <p className="author-card__description">{card.description}</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
