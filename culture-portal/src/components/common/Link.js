import React from 'react';
import PropTypes from 'prop-types';
import UILink from '@material-ui/core/Link';

const Link = (props) => {
  const { color, buttonName } = props;
  return (
    <UILink variant="contained" color={color}>
      {buttonName}
    </UILink>
  );
};

Link.propTypes = {
  color: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Link;
