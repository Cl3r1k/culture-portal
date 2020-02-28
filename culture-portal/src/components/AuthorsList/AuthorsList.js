import React from 'react';
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

export default AuthorsList;
