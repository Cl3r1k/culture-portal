import React from 'react';
import PropTypes from 'prop-types';
import UIButton from '@material-ui/core/Button';

const Button = (props) => {
  const { color, buttonName } = props;
  return (
    <UIButton variant="contained" color={color}>
      {buttonName}
    </UIButton>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
