import React from 'react';

const Table = ({ caption, children }) => {
  const borderSize = 1;
  const styleObj = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
  };

  return (
    <table border={borderSize} style={styleObj}>
      <caption>{caption}</caption>
      {children}
    </table>
  );
};

export default Table;
