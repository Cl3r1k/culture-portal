import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
import MapPin from '../../../../static/img/map/map-marker.png';

const PinMarker = ({ content: { location: { lat, lng } }, handleClick }) => (
  <Marker
    latitude={lat}
    longitude={lng}
    anchor="bottom"
  >
    <img
      src={MapPin}
      style={{ width: '40px' }}
      alt="map"
      onClick={() => handleClick(true)}
    />
  </Marker>
);

PinMarker.propTypes = {
  content: PropTypes.shape({
    location: PropTypes.shape({
      zoom: PropTypes.number,
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PinMarker;
