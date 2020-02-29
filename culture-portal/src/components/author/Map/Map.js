
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReactMapGL from 'react-map-gl';
import { MAPBOX_PROPS } from '../../../helpers/Constants';
import Pin from './Pin';

const Map = ({ data: { birth, death } }) => {
  const [viewport, setViewport] = useState({
    width: MAPBOX_PROPS.viewport.width,
    height: MAPBOX_PROPS.viewport.height,
    zoom: birth.location.zoom,
    latitude: birth.location.lat,
    longitude: birth.location.lng,
    mapboxApiAccessToken: MAPBOX_PROPS.viewport.mapboxApiAccessToken,
  });
  const { t } = useTranslation();
  const title = t('map-title');

  return (
    <div className="map">
      <h3>{title}</h3>
      <ReactMapGL
        {...viewport}
        mapStyle={MAPBOX_PROPS.mapstyle}
        onViewportChange={(viewport) => { setViewport(viewport); }}
      >
        <Pin content={birth} />
        <Pin content={death} />
      </ReactMapGL>
    </div>
  );
};

Map.propTypes = {
  data: PropTypes.shape({
    birth: PropTypes.shape({
      location: PropTypes.shape({
        zoom: PropTypes.number,
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
    death: PropTypes.shape({
      location: PropTypes.shape({
        zoom: PropTypes.number,
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default Map;
