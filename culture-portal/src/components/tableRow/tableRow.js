import React from 'react';

export default ({data}) => {
  const {date, description} = data;

  return (
    <tr>
      <td style={{padding: 5}}>
        {date}
      </td>
      <td style={{padding: 5}}>
        {description}
      </td>
    </tr>
  );
}