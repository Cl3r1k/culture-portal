import React from "react"
import { Popup } from "react-mapbox-gl"

const PinPopup = ({
  content: {
    date,
    description,
    location: { lat, lng },
  },
  handleClick,
}) => {
  return (
    <Popup coordinates={[lng, lat]} style={{ maxWidth: "300px", zIndex: "9" }}>
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
  )
}

export default PinPopup