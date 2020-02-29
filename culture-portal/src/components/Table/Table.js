import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ caption, children }) => {
  const borderSize = 1;
  const styleObj = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
  };

  return (
    <table border={borderSize} style={styleObj} className="table">
      <caption>{caption}</caption>
      {children}
    </table>
  );
};

Table.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Table.defaultProps = {
  caption: '',
  children: undefined,
};

export default Table;
