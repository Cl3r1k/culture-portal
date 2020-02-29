/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, id, isOrderedList }) => (isOrderedList ? (
  <ol className="box-with-bg">
    {data.map((item, idx) => (
      <li key={`${id}-${idx}`}>{item}</li>
    ))}
  </ol>
) : (
  <ul className="box-with-bg">
    {data.map((item, idx) => (
      <li key={`${id}-${idx}`}>{item}</li>
    ))}
  </ul>
));

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  isOrderedList: PropTypes.bool,
};

List.defaultProps = {
  id: '01234-56789',
  isOrderedList: false,
};

export default List;
