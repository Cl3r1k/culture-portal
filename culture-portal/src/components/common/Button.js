import React from 'react';
import UIButton from '@material-ui/core/Button';

const Button = (props) => {
  const { color, buttonName } = props;
  return (
    <UIButton variant="contained" color={color}>
      {buttonName}
    </UIButton>
  );
};
export default Button;
