import React from 'react';

const TableRow = ({ data, isHeadRow }) => {
  const cellDataList = Object.values(data);
  const styleObj = {padding: 5};

  return (
    <tr>
      {
        cellDataList.map((cellData) => {
          return isHeadRow ? (
            <th style={styleObj} key={cellData}>
              {cellData}
            </th>
          ) : (
            <td style={styleObj} key={cellData}>
              {cellData}
            </td>
          )
        })
      }
    </tr>
  );
}

export default TableRow;