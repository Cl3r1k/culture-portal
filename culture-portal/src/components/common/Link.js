import React from 'react';
import UILink from '@material-ui/core/Link';

const Button = (props) => {
  const { color, buttonName } = props;
  return (
    <UILink variant="contained" color={color}>
      {buttonName}
    </UILink>
  );
};
export default Button;
