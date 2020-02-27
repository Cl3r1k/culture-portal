import React from 'react';

const List = ({ data, id, isOrderedList = false }) => (isOrderedList ? (
  <ol className="box-with-bg">
    {data.map((item) => (
      <li key={id}>{item}</li>
    ))}
  </ol>
) : (
  <ul className="box-with-bg">
    {data.map((item) => (
      <li key={id}>{item}</li>
    ))}
  </ul>
));

export default List;
