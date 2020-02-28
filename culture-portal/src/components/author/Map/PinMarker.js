import React from "react"
import { Marker } from "react-map-gl"
import MapPin from "../../../../static/img/map/map-marker.png"

const PinMarker = ({ content: { location: { lat, lng }, }, handleClick, }) => {
  return (
    <Marker
      latitude={lat}
      longitude={lng}
      anchor="bottom"
    >
      <img
        src={MapPin}
        style={{ width: "40px" }}
        alt="map"
        onClick={() => handleClick(true)}
      />
    </Marker>
  )
}

export default PinMarker;
