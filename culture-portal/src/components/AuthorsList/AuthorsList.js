import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

const AuthorsList = (props) => {
  const { filteredArrOfAuthors } = props;
  return (
    <ul className="authors-list">
      {filteredArrOfAuthors.map((card) => (
        <li className="authors-list__li" key={card.id}>
          <Link to={`/authors/${card.surname}/`}>
            <AuthorInfo card={card} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

AuthorsList.propTypes = {
  filteredArrOfAuthors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AuthorsList;
