import React from "react"

const Colors = () => {
  return (
    <>
      <p className="base-title">Colors</p>
      <div className="box-with-bg">
        <div className="square-wrap">
          <span className="square square_dark "></span>
          <p>Background color</p>
        </div>
        <div className="square-wrap">
          <span className="square  square_white"></span>
          <p>Brand color</p>
        </div>
        <div className="square-wrap">
          <span className="square  square_black"></span>
          <p>Additional color</p>
        </div>
        <div className="square-wrap">
          <span className="square  square_grey"></span>
          <p>Headings color</p>
        </div>

      </div>
    </>
  )
}
export default Colors
