import React from 'react';

const Colors = () => (
  <>
    <p className="base-title">Colors</p>
    <div className="box-with-bg">
      <div className="square-wrap">
        <span className="square square_dark " />
        <p>Background color</p>
      </div>
      <div className="square-wrap">
        <span className="square  square_white" />
        <p>Brand color</p>
      </div>
      <div className="square-wrap">
        <span className="square  square_black" />
        <p>Additional color</p>
      </div>
      <div className="square-wrap">
        <span className="square  square_grey" />
        <p>Headings color</p>
      </div>
    </div>
  </>
);
export default Colors;
