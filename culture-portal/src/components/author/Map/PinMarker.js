import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-mapbox-gl';
import MapPin from '../../../../static/img/map/map-marker.png';

const PinMarker = ({
  content: {
    location: { lat, lng },
  },
  handleClick,
}) => (
  <Marker
    coordinates={[lng, lat]}
    anchor="bottom"
    onClick={() => handleClick(true)}
  >
    <img src={MapPin} style={{ width: '40px' }} alt="map" />
  </Marker>
);

PinMarker.propTypes = {
  content: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PinMarker;
