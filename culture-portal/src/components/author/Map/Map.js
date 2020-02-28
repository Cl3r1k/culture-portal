import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import { MAPBOX_TOKEN, MAPBOX_PROPS } from '../../../helpers/Constants';
import Pin from './Pin';

const Map = ({ data: { birth, death } }) => {
  const MapBox = ReactMapboxGl({
    accessToken: MAPBOX_TOKEN,
  });
  return (
    <div className="map">
      <h3>Map</h3>
      <MapBox
        style={MAPBOX_PROPS.mapstyle}
        containerStyle={MAPBOX_PROPS.containerStyle}
        center={MAPBOX_PROPS.center}
        zoom={MAPBOX_PROPS.zoom}
      >
        <Pin content={birth} />
        <Pin content={death} />
        <ZoomControl />
      </MapBox>
    </div>
  );
};

Map.propTypes = {
  data: PropTypes.shape({
    birth: PropTypes.object,
    death: PropTypes.object,
  }).isRequired,
};

export default Map;
