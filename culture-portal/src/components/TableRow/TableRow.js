import React from 'react';

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

export default TableRow;
