import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data, isHeadRow }) => {
  const cellDataList = Object.values(data);
  const styleObj = {};

  return (
    <tr>
      {cellDataList.map((cellData) => (isHeadRow ? (
        <th style={styleObj} key={cellData}>
          {cellData}
        </th>
      ) : (
        <td style={styleObj} key={cellData}>
          {cellData}
        </td>
      )))}
    </tr>
  );
};

TableRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  isHeadRow: PropTypes.bool,
};

TableRow.defaultProps = {
  isHeadRow: false,
};

export default TableRow;
