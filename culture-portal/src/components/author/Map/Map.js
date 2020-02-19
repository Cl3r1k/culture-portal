import React from "react"
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl"
import { MAPBOX_TOKEN, MAPBOX_PROPS } from "../../../helpers/Constants"
import Pin from "./Pin"

const Map = ({
    data: { birth, death }
}) => {
  const Map = ReactMapboxGl({
    accessToken: MAPBOX_TOKEN,
  })
  return (
    <div className="map">
      <Map
        style={MAPBOX_PROPS.mapstyle}
        containerStyle={MAPBOX_PROPS.containerStyle}
        center={MAPBOX_PROPS.center}
        zoom={MAPBOX_PROPS.zoom}
      >
        <Pin content={birth} />
        <Pin content={death} />
        <ZoomControl />
      </Map>
    </div>
  )
}

export default Map
