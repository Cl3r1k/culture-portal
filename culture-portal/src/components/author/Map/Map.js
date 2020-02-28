
import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
import { MAPBOX_PROPS } from "../../../helpers/Constants"
import Pin from "./Pin"

const Map = ({ data: { birth, death } }) => {
  const [viewport, setViewport] = useState({
    width: MAPBOX_PROPS.viewport.width,
    height: MAPBOX_PROPS.viewport.height,
    zoom: birth.location.zoom,
    latitude: birth.location.lat,
    longitude: birth.location.lng,
    mapboxApiAccessToken: MAPBOX_PROPS.viewport.mapboxApiAccessToken,
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapStyle={MAPBOX_PROPS.mapstyle}
        onViewportChange={(viewport) => { setViewport(viewport) }}
      >
        <Pin content={birth} />
        <Pin content={death} />
      </ReactMapGL>
    </div>
  );
};

export default Map;
