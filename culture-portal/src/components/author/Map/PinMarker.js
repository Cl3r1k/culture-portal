import React from 'react';
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

export default PinMarker;
