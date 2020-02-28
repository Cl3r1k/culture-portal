import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';

const PinPopup = ({
  content: {
    date,
    description,
    location: { lat, lng },
  },
  handleClick,
}) => (
  <Popup coordinates={[lng, lat]} style={{ maxWidth: '300px', zIndex: '9' }}>
    <button
      className="mapboxgl-popup-close-button"
      type="button"
      aria-label="Close popup"
      onClick={() => handleClick(false)}
    >
      ×
    </button>
    <p>
      <strong>{date}</strong>
    </p>
    <p>{description}</p>
  </Popup>
);

PinPopup.propTypes = {
  content: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PinPopup;
