import React from "react"
import { Popup } from "react-map-gl"

const PinPopup = ({
  content: {
    date,
    description,
    location: { lat, lng },
  },
  handleClick,
}) => {
  return (
    <Popup latitude={lat} longitude={lng}>
      <button
        className="mapboxgl-popup-close-button"
        type="button"
        aria-label="Close popup"
        onClick={() => handleClick(false)}
      >
        ×
      </button>
      <div style={{ maxWidth: "300px", color: "black" }}>
        <p><strong>{date}</strong></p>
        <p>{description}</p>
      </div>
    </Popup>
  )
}

export default PinPopup
