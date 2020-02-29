import React from 'react';
import UIBox from '@material-ui/core/Box';

const Box = ({ children }) => (
  <UIBox component="div" className="box ">
    {children}
  </UIBox>
);

export default Box;
