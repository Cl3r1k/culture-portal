import React from 'react';
import PropTypes from 'prop-types';
import UIBox from '@material-ui/core/Box';

const Box = ({ children }) => (
  <UIBox component="div" className="box ">
    {children}
  </UIBox>
);

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Box.defaultProps = {
  children: undefined,
};

export default Box;
